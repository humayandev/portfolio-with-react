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
            subTitle="Uttara University (2022)"
            result="3.62/4"
          />
          <EduCard
            title="Higher Secondary Certificate"
            subTitle="Rajshahi Govt. City College (2014)"
            result="4.90/5"
          />
          <EduCard
            title="Secondary School Education"
            subTitle="Naogaon Zilla School (2012)"
            result="5.00/5"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education