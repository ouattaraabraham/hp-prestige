import React from "react";

import Image from "next/image";

import { DATA_PARTENAIRE } from "../Data/constant";
const Partenaire = () => {
    return (
        <section className="bg-[#F1F5F7] py-[50px]">  
        {/* partenaire */}
        <h1 className="w-fit mx-auto text-[#686868] text-[25px] lg:text-[35px] font-bold">{DATA_PARTENAIRE.h1}</h1>
        <div className="overflow-hidden mx-auto max-w-[1140px] px-[.75rem] pt-[100px] pb-[50px] lg:pt-[150px]">
          <div className="flex gap-10 animate-partenaire hover:pause">

            {DATA_PARTENAIRE.logo.map((item, index) => {
              return (
                  <div key={index} className="relative">
                    <Image
                    width={150} height={150}
                      className="max-w-[150px] lg:max-w-[250px]"
                      src={item}
                      alt="logo"
                    />
                  </div>
              );
            })}

            {/* seconde liste partenaire  */}

            {DATA_PARTENAIRE.logo.map((item, index) => {
              return (
                  <div key={index} className="relative">
                    <Image
                    width={150} height={150}
                      className="max-w-[150px] lg:max-w-[250px]"
                      src={item}
                      alt="logo"
                    />
                  </div>
              );
            })}
        </div>
      </div>
    </section>
    );
};

export default Partenaire;