import React from 'react'
import { motion } from 'framer-motion';
import { designSkill } from '../../constants/skill';


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Design & Development Skills</h2>
      </div>
      <div className="w-full flex flex-col  gap-10">
        <div className="w-full">
          <div className='className="mt-14 w-full flex flex-col gap-6'>
            {designSkill?.map((skill,i)=>(
              <div key={i} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full inline-flex h-2 bgOpacity rounded-md mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`${skill.skillwidth} h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  >
                    <span className="absolute -top-7 right-0">{skill.width}%</span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills