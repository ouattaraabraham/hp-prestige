"use client";

import React from "react";
import { Star } from "lucide-react";

import Image from "next/image";
import { DATA_TEMOIGNAGE } from "../Data/constant";

const src ="https://pixabay.com/fr/photos/simba-chat-gueule-de-bois-portrait-8618301/"
export default function Temoignage({ style }:{style:any}) {
  return (
    <section className="bg-[#F1F5F7] ">
      <div >
        {/* partenaire */}
        <div className={`relative overflow-hidden ${style}`}>
          <div className="flex w-fit gap-10 animate-temoignage hover:pause ">
            {DATA_TEMOIGNAGE.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white relative flex flex-col p-5 w-[85vw] h-[260px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[270px] lg:w-[450px] min-h-[270px] rounded-lg border-[1px] text-[15px]] "
                >
                  <div className="flex items-center">
                    <Image
                      className="object-cover w-12 h-12 rounded-full"        
                      src={item.img}
                      alt="temoignage"
                      width={30}
                      height={30}
                    ></Image>
                    <div className="pl-5">
                      <h2 className="font-semibold">{item.name}</h2>
                      <h3>{item.work}</h3>
                    </div>
                    {/* hhh */}
                  </div>
                  <div className="flex mt-5">
                    {item.start.map((item,index) => (
                      <span key={index} className="mr-2">
                        <Star />
                      </span>
                    ))}
                  </div>
                  <p className="pt-3">{item.p}</p>
                </div>
              );
            })}
             {/* seconde liste temoignage */}
             {DATA_TEMOIGNAGE.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white relative flex flex-col p-5 w-[85vw] h-[260px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[270px] lg:w-[450px] min-h-[270px] rounded-lg border-[1px] text-[15px]] "
                >
                  <div className="flex items-center">
                    <Image
                      className="object-cover w-12 h-12 rounded-full"        
                      src={item.img}
                      alt="temoignage"
                      width={30}
                      height={30}
                    ></Image>
                    <div className="pl-5">
                      <h2 className="font-semibold">{item.name}</h2>
                      <h3>{item.work}</h3>
                    </div>
                    {/* hhh */}
                  </div>
                  <div className="flex mt-5">
                    {item.start.map((item,index) => (
                      <span key={index} className="mr-2">
                        <Star />
                      </span>
                    ))}
                  </div>
                  <p className="pt-3">{item.p}</p>
                </div>
              );
            })}
          
          </div>
        </div>
      </div>
    </section>
  );
}
