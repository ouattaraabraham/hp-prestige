"use client"
import React from 'react'
import CardPresantation from '../components/CardPresantation'
import { DATA_PAGE_APROPOS } from '../Data/constant'
import MissionVision from './MissionVision'
import Temoignage from '../components/Temoignage'
import ContacterFlech from '../components/ContacterFlech'
import CarouselServices1 from '../components/CarouselServices'
export default function page() {
  const styleTemoigange="py-[150px]"
  return (
    <div className=''>
      <CardPresantation props={DATA_PAGE_APROPOS} />
      <MissionVision/>  
      <ContacterFlech/>
      <Temoignage style={styleTemoigange}/> 
      <CarouselServices1/>
    </div>
  )
}
