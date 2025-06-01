import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import FeedbackForm from '@/components/FeedbackForm';
// import FeedbackForm from '../../components/FeedbackForm';


// Adjust path as per your folder structure

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: trip?.userSelection?.location?.label,
      };
      const resp = await GetPlaceDetails(data);
      const photoName = resp.data.places[0].photos[3].name;
      const finalPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
      setPhotoUrl(finalPhotoUrl);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };

  return (
    <div className='hover:scale-105 transition-all border p-4 rounded-xl bg-white shadow-md'>
      {/* Trip Card with Link */}
      <Link to={`/view-trip/${trip?.id}`}>
        <img
          src={photoUrl ? photoUrl : '/placeholder.jpg'}
          alt="Trip Cover"
          className='object-cover rounded-xl h-[220px] w-full'
        />
        <div className='mt-2'>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>
            {trip?.userSelection?.noOfDays} Days trip with ₹{trip?.userSelection?.budget} budget.
          </h2>
        </div>
      </Link>

      Feedback Form
      <div className=''>
        {/* <FeedbackForm tripId={trip?.id} /> */}
      </div>
    </div>
  );
}

export default UserTripCardItem;
