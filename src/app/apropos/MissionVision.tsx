import React from 'react'
import { DATA_MISSION_VISION } from '../Data/constant'
export default function MissionVision() {
  return (
    <section >
        <div className='mx-auto p-[50px] lg:pb-[100px] lg:pt-0 px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[860px] xl:max-w-[1140px]] 2xl:max-w-[1320px]] 3xl:max-w-[1620px]]'>
          {DATA_MISSION_VISION.map(item=>
             <div key={item.id} className={`bg-[#F1F5F7] ${item.id==1?"mt-[50px]":""}  p-5 md:p-7 rounded-2xl`}>
                <h2 className='text-slate-700 font-bold text-[18px] lg:text-[22px]'> {item.h1} </h2>
                <p className='pt-3 '>{item.p}</p>
             </div>
          )}
        </div>
   
    </section>
  )
}
