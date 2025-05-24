import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip])

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label
    }
    const result = await GetPlaceDetails(data).then(resp => {
      // console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
      setPhotoUrl(PhotoUrl)
    })
  }

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='hover:scale-105 transition-all'>
        <img src= {photoUrl ? photoUrl : '/placeholder.jpg'} 
        // "https://img.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740"
        
        // {photoUrl ? photoUrl : '/placeholder.jpg'} 
        alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget. </h2>
        </div>
      </div>
    </Link >
  )
}

export default UserTripCardItem