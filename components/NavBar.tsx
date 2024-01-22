'use client'

import React from 'react'
import  Image from 'next/image'
import audiophile from "@/public/images/audiophile 2.svg"
import Shopping  from 'lucide-react'

const list = [
    "HOME",
    "HEADPHONES",
    "SPEAKERS",
    "EARPHONES"
]
const NavBar = () => {
   
  return (
    <div className='w-10/12 mx-auto flex justify-between py-6 border-b-[#FFF] border-b-[1px] max-sm:w-full'>
       <section><Image src={audiophile} alt={'logo'} ></Image></section>
       <ul className='flex'>
           {list.map((item,i)=> (
            <li key={i} className='mx-[1rem] hover:text-primary hover:cursor-pointer'>{item}</li>
           ))}
      </ul>
     Shopping
    </div>
  )
}

export default NavBar