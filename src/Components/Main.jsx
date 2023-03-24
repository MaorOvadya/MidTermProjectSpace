import React, { useEffect, useState } from 'react'
import About from './About'
import Information from './Information'
import { fetchDataImage } from "./API/apiKey"
import "./Main.css"

function Main() {

  const [dalyImage, setDalyImage] = useState(null)
  const [titleImage, setTitleImage] = useState('')
  const [dateImage, setDateImage] = useState('')
  const [copyRightImage, setCopyRightImage] = useState('')

  useEffect(() => {
    const getFetchDataImage = () => {
      fetchDataImage()
        .then((data) => {
          if (useEffect) {
            setDalyImage(data.url)
            setTitleImage(data.title)
            setDateImage(data.date)
            setCopyRightImage(data.copyright)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFetchDataImage();
  }, []);
  return (
    <div className=''>
      <div className='h-screen bg-shuttle bg-cover bg-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-8xl self-start content-center text-white px-20'>Explore</h1>
          <h1 className='text-8xl self-center text-white '>Discover</h1>
          <h1 className='text-8xl self-end text-white px-20'>Beyond</h1>
        </div>
      </div>
      <div className='bg-white rounded-xl m-20 flex flex-col'>
        <h1 className='text-4xl py-5 rounded-t-xl bg-black text-white'>Daly Image</h1>
        <div className='flex flex-col'>
          <h1 className='text-3xl py-3'>{titleImage}</h1>
          <div className='flex flex-row justify-center gap-5 text-xl'>
            <h3 className='text-xl'>© - {copyRightImage}</h3>
            <h2 className='text-xl'>date: {dateImage}</h2>
          </div>
        </div>
        <img className='mx-20 my-5 rounded-xl bg-no-repeat bg-center' src={dalyImage} alt="dalyImage" />
      </div>
      <Information />
      <About />
    </div >
  )
}


export default Main