import React, { useEffect, useState } from 'react'
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import ThemeToggle from "../../constants/ThemeToggle.jsx";

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user)
  })

  const login = useGoogleLogin({
    onSuccess: (res) => GetUserProfile(res),
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json',
      },
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    }).catch((error) => {
      console.error("Error fetching user profile: ", error);
    });
  }

  return (
    <>
     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 shadow-md border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/">
            <img src="https://tripplanner.ai/logo/logo-text-og-twitter.webp" alt="Logo" className="h-10" />
            {/* <h1>ai treip planner</h1> */}
            {/* <h1 className="text-2xl md:text-3xl font-extrabold text-white bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm"> */}
  {/* AI Trip Planner
</h1> */}

          </a>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {user ? (
              <>
                <a href="/create-trip">
                  <Button variant="outline" className="rounded-full hover:bg-orange-300">
                    + Create Trip
                  </Button>
                </a>
                <a href="/my-trips">
                  <Button variant="outline" className="rounded-full hover:bg-orange-300">
                    My Trips
                  </Button>
                </a>
                <Popover>
                  <PopoverTrigger>
                    <img
                      src={user?.picture}
                      alt="User"
                      className="h-[35px] w-[35px] rounded-full object-cover border-2 border-white"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="text-center">
                    <h2
                      className="cursor-pointer text-red-500 font-semibold hover:underline"
                      onClick={() => {
                        googleLogout();
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      Logout
                    </h2>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
            )}
          </div>
        </div>
      </header>


      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" width="100px" className='items-center' />
              <h2 className='font-bold text-lg'>Sign In to check out your travel plan</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-6 flex gap-4 items-center">
                <FcGoogle className="h-7 w-7" />Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

     </>
   
  )
}


export default Header