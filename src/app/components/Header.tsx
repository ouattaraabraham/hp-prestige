"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { logo } from "../assets/img";
import Nav from "./Nav";
import { logoHpPrestige } from "../Data/constant";
import Link from "next/link";
export default function Header() {
  const [scrollValue, setScrollValue] = useState(false);
  const [currentScrollPosition, setcurrentScrollPosition] = useState(0);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setcurrentScrollPosition(window.pageYOffset)

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        //   alert("scrol down")
        setScrollValue(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        //   alert("scrol up")
        setScrollValue(true);
      }

      // Update the previous value
      setPreviousScrollPosition(currentScrollPosition)
    });
  }, [currentScrollPosition,previousScrollPosition]);
  return (
    <>
      <div className="z-50 w-full bg-[#FFFFFF] shadow-md">
        <div className=" mx-auto w-ful flex items-center justify-between max-w-[1140px] px-[.75rem] lg:px-10 ">
            <Link href="/">
              <Image src={logoHpPrestige} style={{ width: 130 }} alt="logo" />
            </Link>       
          <Nav />
        </div>
      </div>
      {scrollValue && (
        <div className="fixed z-50  w-full bg-[#FFFFFF] shadow-md">
          <div className=" mx-auto w-ful flex items-center justify-between max-w-[1140px] px-[.75rem] lg:px-10 ">
              <Link href="/">
               <Image src={logoHpPrestige} style={{ width: 130 }} alt="logo" />
              </Link>
            <Nav />
          </div>
        </div>
      )}
    </>
  );
}
