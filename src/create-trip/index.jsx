import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AIModel";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "@/service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation happens only once
    });
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (
      (formData?.noOfDAys > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData.traveler
    ) {
      toast("Please fill all the details");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    // console.log(FINAL_PROMPT)

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    // Add a new document in collection "AITrips"
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        onGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile: ", error);
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-20 ">
      <div data-aos="fade-up" className="text-center mb-10 px-4">
        <h2 className="font-sans text-3xl md:text-4xl text-black drop-shadow-sm">
          Tell us your Travel preferences 🌴
        </h2>
     
        <p className="mt-4 text-lg md:text-xl text-black max-w-2xl mx-auto">
          Just provide a few simple details, and our AI-powered trip planner
          will cook up a personalized itinerary just for you 🌴!
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-10">
        <div
          className="p-6 bg-orange-50 hover:bg-orange-100 border border-orange-300 rounded-2xl shadow-sm transition-all duration-300"
          data-aos="fade-up"
        > 
          <label
            htmlFor="destination"
            className="block text-2xl font-bold text-black mb-4"
          >
            🌍 What is your destination of choice?
          </label>

          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              inputId: "destination",
              placeholder: "Start typing a destination...",
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
              styles: {
                control: (base, state) => ({
                  ...base,
                  padding: "0.5rem",
                  borderRadius: "0.75rem",
                  borderColor: state.isFocused ? "#FB923C" : "#FDBA74",
                  boxShadow: state.isFocused
                    ? "0 0 0 2px rgba(251, 146, 60, 0.3)"
                    : "none",
                  "&:hover": {
                    borderColor: "#FB923C",
                  },
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#9A3412",
                  fontWeight: "500",
                }),
              },
            }}
          />
        </div>

        <div
          className="p-6 bg-orange-50 hover:bg-orange-100 border border-orange-300 rounded-2xl shadow-sm transition-all duration-300"
          data-aos="fade-up"
        >
          <label
            htmlFor="trip-days"
            className="block text-2xl font-bold text-black mb-4"
          >
            🗓️ How many days are you planning your trip?
          </label>

          <Input
            id="trip-days"
            type="number"
            placeholder="Ex. 4"
            min={1}
            className="w-full p-3 border-2 border-orange-300 rounded-xl focus:outline-none focus:border-orange-500 transition-all duration-300 text-orange-900 font-medium placeholder:text-orange-400"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div
          data-aos="fade-up"
          className="p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-black  border-orange-300  hover:text-orange-600 transition-colors">
            What is Your Budget?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-orange-200 hover:border-orange-600 ${
                  formData?.budget === item.title
                    ? "bg-orange-300 border-orange-700 shadow-md"
                    : "border-orange-300 bg-orange-100"
                }`}
              >
                <h2 className="text-4xl mb-2 text-black">{item.icon}</h2>
                <h2 className="font-bold text-lg text-orange-900">
                  {item.title}
                </h2>
                <p className="text-sm text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-black hover:text-orange-600 transition-colors">
            Who do you plan on traveling with on your next adventure?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-orange-200 hover:border-orange-600 ${
                  formData?.traveler === item.people
                    ? "bg-orange-300 border-orange-700 shadow-md"
                    : "border-orange-300 bg-orange-100"
                }`}
              >
                <h2 className="text-4xl text-black mb-2">{item.icon}</h2>
                <h2 className="font-bold text-lg text-orange-900">
                  {item.title}
                </h2>
                <p className="text-sm text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          disabled={loading}
          onClick={onGenerateTrip}
          className={`px-6 py-3 rounded-xl mb-5 text-white font-semibold transition-all duration-300
      ${
        loading
          ? "bg-orange-300 cursor-not-allowed"
          : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-600 hover:to-yellow-500 shadow-lg"
      }
    `}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin text-white" />
          ) : (
            "🍳 Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img
                src="/logo.svg"
                alt="logo"
                width="100px"
                className="items-center"
              />
              <h2 className="font-bold text-lg">
                Sign In to check out your travel plan
              </h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-6 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
