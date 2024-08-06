"use client";
import React from "react";
import { CircleArrowRight, CircleChevronLeft } from "lucide-react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "../globals.css";

import Image from "next/image";
import Slider from "react-slick"
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG } from "../Data/constant";
import { Play } from "lucide-react";

import { DATA_SERVICE_CREA } from "../Data/constant";
import Link from "next/link";

const data = {
  h2: "Notre Equipe",
  slide: [
    { id: 0, img: IMG, p: "Netoyage espace verts" },
    { id: 1, img: IMG, p: "Netoyage espace verts" },
    { id: 2, img: IMG, p: "Netoyage espace verts" },
    { id: 3, img: IMG, p: "Netoyage espace verts" },
  ],
};


const SamplePrevArrow = (props:any) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiFillCaretLeft
        size={200}
        className="arrows"
        style={{ color: "white" }}
      />
    </div>
  );
};

function SampleNextArrow(accessoires:any) {
  const { className, style, onClick } = accessoires;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiFillCaretRight className="arrows" style={{ color: "white" }} />
    </div>
  );
}

export default function CarouselServices1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow à="précédent" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="classTest bg-[#F1F5F7]">
      <div className="mx-auto pb-[100px] lg:pb-[150px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
        <h2 className="py-[50px] lg:py-[100px] text-center font-bold text-[25px] lg:text-[30px] text-blue-950">
          {DATA_SERVICE_CREA.h2}
        </h2>
        <div>
          <Slider {...settings}>
            {DATA_SERVICE_CREA.card.map((item) => (
              <div key={item.id}>
                <div className=" flex flex-col items-center " key={item.id}>
                  <Image
                    className="object-cover rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
                    src={item.img}
                    alt={item.h2}
                  />
                  <p className="pt-4 font-bold">{item.h2}</p>

                  <Link href={item.link}>
                    <button className="w-fit pt-2 flex items-center">
                      <span className="font-bold text-slate-600">
                        {DATA_SERVICE_CREA.btn}
                      </span>
                      <span className="pl-2">
                        <Play size={15} />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
