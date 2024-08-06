import React from 'react'
import Btn from './Btn'
import Image from 'next/image'
export default function CardPresantation({props}:{props:any}) {
    
  return (
    <section>
      <div className='mx-auto lg:py-[100px] lg:px-[.75rem] lg:flex items-center max-w-[1620px] 2xl:gap-16'>
      <div className='mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[600px] px-[.75rem] lg:px-0 py-10 2xl:m-[0_0_0_auto]'>
            <h1 className='text-[25px] lg:text-[35px] font-bold text-blue-950'>{props.left.h1}</h1>
            <p className='pt-8'>
              {props.left.p[0]} 
              <br /> <br />
              {props.left.p[1]}
              </p>
            <Btn/>
        </div>
        <div className='sm:px-[.75rem] sm:rounded-2xl lg:max-w-[43%]'>
          <Image className='sm:rounded-2xl lg:px-0' src={props.right.img} alt='menager'></Image>        
        </div>
      </div>
    </section>
  )
}
