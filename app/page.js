"use client"
import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
    const [dogs, setDogs] = useState([])

    function fetchDogs(){
      const getDogs = fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(resp => resp.json())
      .then(data => {
        setDogs(data.message)
        console.log(data)
      })
    }

    useEffect(() => {
      fetchDogs()
    }, [])
   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <DogList dogsList={dogs} />
    </div>
  );
}

