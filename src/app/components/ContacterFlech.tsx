import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"
import {DATA_CONTACTER_FLECHE} from "../Data/constant"
const ContacterFlech = () => {
    return (
        <div className='overflow-hidden bg-[#005B96] text-yellow-100 py-8 md:py-16 '>
            <Link href="/contact">
            <div className='flex items-center justify-center gap-16 px-[.75rem]'>
                <h1 className='text-[20px] sm:text-[35px] lg:text-[45px] font-bold'>{DATA_CONTACTER_FLECHE.h1}</h1>
                <motion.div
                animate={{ x:[-60, 30] }}
                transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Image className='w-[120px] md:w-[150px]' src={DATA_CONTACTER_FLECHE.fleche} alt='fleche contacter'/>
                </motion.div>
            </div>
            </Link>
        </div>
    );
};

export default ContacterFlech;