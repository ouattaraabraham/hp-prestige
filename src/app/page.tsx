"use client"
// import Image from "next/image";
import Partenaire from "./components/Partenaire";
import SliderImageHeader from "./components/SliderImageHeader";
import CardPresantation from "./components/CardPresantation";
import ContacterFlech from "./components/ContacterFlech";
import ServiceCrea from "./components/ServiceCrea";
import Temoignage from "./components/Temoignage";

import { DATA_CARD_PRESANTATION,DATA_CARD_PRESANTATION_EQUIPE} from "./Data/constant";
export default function Home() {
  const styleTemoigange="pt-[50px] py-[150px]"
  return (
    <section className=""> 
     <SliderImageHeader/> 
     <CardPresantation props={DATA_CARD_PRESANTATION}/>
     <Partenaire/>
     <ContacterFlech/>
     <ServiceCrea/>
     <Temoignage style={styleTemoigange}/>
     <CardPresantation props={DATA_CARD_PRESANTATION_EQUIPE}/>
    </section>
  );
}
