"use client"
import React, { useEffect } from 'react';
import Link from 'next/link'
import { AlignJustify, X,ChevronDown  } from "lucide-react";
import { useState } from "react";
import { DATA_NAV_LINK } from '../Data/constant';

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

 
  const toggleMenu = ()=>{
    console.log("toggle menu"+isOpenMenu)
    setIsOpenMenu(prev=>!prev)
  }

  useEffect(()=>{
    window.addEventListener("scroll", function () {
        setIsOpenMenu(false)
      })

  },[isOpenMenu])
  return (

    <>

    {/* mobile */}
    <div className='lg:hidden'>
      <button  onClick={toggleMenu}>
        {isOpenMenu?<X/>:<AlignJustify/>}
      </button>
      {isOpenMenu&&(
     
          <div className='z-20 fixed top-[110px] bg-slate-100 left-0 w-full h-fit py-5 '>
          <ul className='font-bold text-[18px] pl-6 mt-5'>
            {DATA_NAV_LINK.map(item=>
              <li className={`py-2 px-2 rounded-lg ${item.id !==1?"hover:bg-blue-800/10": ""}  `} key={item.id}>
                {item.id !==1?
                <Link className='text-[19px]' href={item.link} onClick={toggleMenu}>{item.name}</Link>:
                 (
                  <div className=''>
                    <h1 className='text-[19px]'>{item.name}</h1>
                    <ul className='ml-4 text-[17px] '>
                    { 
                    item.sousLink&&(item.sousLink.map(item=>
                        <li className='py-2 px-2' key={item.id} >
                          <Link className='py-2 px-2 rounded-lg hover:bg-blue-800/10' href={item.link} onClick={toggleMenu}>{item.name}</Link>
                        </li>
                      ))
                    }
                    </ul>
                
                </div>
                )
                }
              </li>
            )}
          </ul>
          </div>   
        )}   
    </div>

     {/* desktop */}

      <div className='hidden lg:block text-blue-950'>
          <ul className='relative flex items-center gap-10 font-bold text-[18px]'>
            {
              DATA_NAV_LINK.map(item=>
                <div key={item.id}>
                     {item.id !==1?
                  <li  key={item.id}>
                  <Link className={`${item.id==3?"rounded-full bg-[#FFEB3B] hover:bg-[#f5f55e] ":""} px-7 py-4 `} href={item.link}>{item.name}</Link>
                  </li>:(
                    <div className='relative'>
                      <h1 className='flex items-center justify-center gap-3 h-full px-7 py-3  peer transition delay-700 duration-1000 ease-in-out cursor-pointer'>{item.name}{<ChevronDown/>}</h1>
                      <div  className='absolute -left-5 duration-700 invisible hidden  opacity-0 peer-hover:visible hover:visible peer-hover:block hover:block peer-hover:opacity-100 hover:opacity-100 w-fit'>
                        <ul className='mt-[30px] w-fit text-[16px] text-nowrap px-4 py-5 shadow-sm bg-slate-100 rounded-xl'>
                          {
                          item.sousLink&&(item.sousLink.map(item=>
                            <li key={item.id} className='py-3 px-2'>
                              <Link className='py-3 px-2 hover:bg-blue-800/10 rounded-lg' href={item.link}>{item.name}</Link>
                              </li>
                          )
                          )}
                        </ul>
                      </div>
                    
                    </div>
                  )
                }
                </div>
        
              )
            }
          </ul>

      </div>
    </>
  );
};

export default Nav;
