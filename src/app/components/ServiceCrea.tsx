"use client"
import React from 'react'
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { DATA_SERVICE_CREA } from '../Data/constant'
import Image from 'next/image'

export default function ServiceCrea() {
  return (
    <section className='bg-[#F1F5F7]'>
     <div className='py-[50px] lg:py-[100px] mx-auto px-[.75rem] sm:max-w-[80%] lg:max-w-[960px]] lg:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]'>
        <h1 className='w-fit mx-auto text-[25px] lg:text-[35px] font-bold text-blue-950'>{DATA_SERVICE_CREA.h1}</h1>
        <div className='lg:flex flex-wrap justify-between'>
          {DATA_SERVICE_CREA.card.map(item=>
                <div className='lg:w-[30%] mt-[50px] pb-8 bg-white rounded-2xl' key={item.id}>
                  <Image className='rounded-2xl' src={item.img} alt='menager'></Image>
                  <h2 className='px-[.75rem] pt-5 text-[20px] font-semibold text-blue-950'>{item.h2}</h2>
                  <div className='pt-5 px-[.75rem]'>
                    {item.p.map(item=>
                      <div key={item.id} className='flex items-center'>
                        <span><Dot size={25}/></span>
                        <span>{item.txt}</span>
                      </div>
                    )}
                  </div>
                  <button className='text-slate-100 mx-[.75rem] mt-5 px-6 py-2 rounded-full bg-[#005B96] hover:bg-[#0277BD]'>
                    <Link href={item.link}>{DATA_SERVICE_CREA.btn}</Link>
                  </button>
                </div>
              )}
        </div>
     </div>
    </section>
  )
}
