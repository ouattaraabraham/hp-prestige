"use client"
import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mails,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const lasteData = {
  p: "copy right 2024  realiser par astraOne.com",
  sociaux: [{id:0,icon:<Linkedin />},{id:0,icon:<Facebook />},{id:0,icon:<Twitter />}],
};

const contact = [
  { id: 0, name: "Abidjan bingerville 2eme rue ", icon: <MapPin size={30}/> },
  {
    id: 1,
    name: "+225 05 44 34 44",
    name1: "+225 07 48 34 44",
    icon: <Phone size={30}/>,
  },
  { id: 2, name: "serviceNetoyage@gmail.com ", icon: <Mails size={30}/> },
];
const Footer = () => {

  return (
    <div >
      <div className="bg-[#005B96]">
        <div className="font-bold lg:text-[20px] text-[#FFEB3B] w-fit flex flex-col lg:w-full lg:flex-row  justify-center lg:items-center lg:justify-between mx-auto pb-8 lg:py-20 max-w-[1140px] px-[.75rem]">
          {contact.map((item) => (
            <motion.div    
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
            key={item.id} className="flex items-center pt-10 lg:pt-0">
              {item.icon}
              {item.id == 1 ? (
                <div className="pl-2">
                  <p className="pl-2">{item.name}</p>
                  <p className="pl-2">{item.name1}</p>
                </div>
              ) : (
                <p className="pl-4">{item.name}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-[14px] lg:text-[16px] mx-auto max-w-[1140px] px-[.75rem] py-2 flex justify-between items-center">
        <p>{lasteData.p}</p>
        <div className="flex">
          {lasteData.sociaux.map(item => (
            <motion.span key={item.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.3 }}
            className="p-1 mr-1 lg:p-2 lg:mr-2">
              <Link href="#">
              {item.icon}
              </Link>
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
