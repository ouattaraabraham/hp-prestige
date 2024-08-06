import React from "react";
import Image from "next/image";
import { Dot } from "lucide-react";

export default function CardPresantation({ props }:{props:any}) {
  return (
    props.cardPresantation ? (
      <section>
        <div className="mx-auto pt-[50px] lg:py-[100px] lg:px-[.75rem] lg:flex max-w-[1620px] 2xl:gap-16">
          <div className="mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[600px] px-[.75rem] lg:px-0 py-10 2xl:m-[0_0_0_auto]">
            <h1 className=" text-[25px] lg:text-[35px] font-bold text-blue-950">
              {props.cardPresantation.left.h1}
            </h1>
            <p className="pt-8">
              {props.cardPresantation.left.p[0]}
              <br /> <br />
              {props.cardPresantation.left.p[1]}
            </p>

            {props.cardPresantation.left.prestation &&
              <div className="">
                  <h2 className="font-bold pt-5">{props.cardPresantation.left.prestation.h2}</h2>

                  <ul>
                  {props.cardPresantation.left.prestation.services.map((item:any)=> 
                
                <li key={item.id} className="flex pt-5">
                       <span>
                        <Dot size={30} />
                       </span>
                     
                        <div>
                          <span className={`relative font-semibold `}>{item.span1}</span>
                          <span>{item.span2}</span>
                        </div>
                        
                </li> ) 
                }
                  </ul>
               </div>

                }
          </div>
          <div className="sm:px-[.75rem] lg:mt-24 sm:rounded-2xl lg:max-w-[43%]">
            <Image
              className="sm:rounded-2xl lg:px-0"
              src={props.cardPresantation.right.img}
              alt="menager"
            ></Image>
          </div>
        </div>
      </section>
    ):""
  );
}