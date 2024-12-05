
import Image from 'next/image'
import React from 'react'
import { IMG } from '../../Data/constant'
export default function Header({props}:{props:any}) {
  return (
    <div className='relative overflow-hidden object-cover w-full lg:max-h-[500px]'>
        <Image className='' src={props.header.img} alt='menager'/>
        <div className='bg-black/60 flex items-center justify-center'>
          <p className='absolute text-white top-0  mx-auto px-[.75rem] w-full h-full flex items-center justify-center font-bold text-slate-100/80 text-xl text-center md:text-6xl max-w-[1000px]'>
          {props.header.p}
          </p>
        </div>
    </div>
  )
}
