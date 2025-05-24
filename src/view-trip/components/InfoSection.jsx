import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'

function InfoSection({ trip }) {

    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        }
        const result = await GetPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[3].name)
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
            setPhotoUrl(PhotoUrl)
        })
    }
    
    return (
        <div>
            <img 
               
            src={photoUrl ? photoUrl : '/placeholder.jpg'} 
            // "https://img.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg?ga=GA1.1.730172403.1747239354&semt=ais_hybrid&w=740"
             alt="img" className='h-[340px] w-full object-cover rounded-xl' />
            <div>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md '>📅{trip.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰{trip.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>👥No. of traveler/s: {trip.userSelection?.traveler}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection