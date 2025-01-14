import React from 'react'
import { motion } from 'framer-motion';
import EduCard from './EduCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className='w-full'>
        <div className="py-6 lgl:pt-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="w-full mt-6 lgl:mt-5 h-auto flex flex-col gap-5">
          <EduCard
            title="B.Sc in Computer Science & Engineering"
            subTitle="University of South Asia (2024)"
            result="3.88/4"
          />
          <EduCard
            title="Higher Secondary Certificate"
            subTitle="CCER Model College (2018)"
            result="3.50/5"
          />
          <EduCard
            title="Secondary School Education"
            subTitle="UCEP Dhaka Technical School (2015)"
            result="5.00/5"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education