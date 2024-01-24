import React from 'react'
import manPhoto from "@/public/images/man.png"
import Image from 'next/image'

const FourthRectangle = () => {
  return (
    <div className='flex gap-8 mt-18'>
        <div className='flex-1 flex flex-col justify-center gap-8'>
            <h1 className='text-5xl tracking-wider font-bold w-10/12'>BRINGING YOU THE 
            <span className='text-primary'>BEST</span> AUDIO GEAR</h1>
            <p className='text-wrap w-10/12'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <div className='flex-'>
            <Image src={manPhoto} alt=''></Image>
        </div>
    </div>
  )
}

export default FourthRectangle