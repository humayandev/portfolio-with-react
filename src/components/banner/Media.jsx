import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Media = () => {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href='https://www.facebook.com/mdh.cse' target='_blank'>
              <FaFacebookF />
            </a>
            <a className="bannerIcon" href='https://www.linkedin.com/in/mdh-cse/' target='_blank'>
              <FaLinkedinIn />
            </a>
            <a className="bannerIcon" href='https://github.com/delwar-bscse' target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href='https://tailwindcss.com/' target='_blank'>
              <SiTailwindcss />
            </a>
            <a className="bannerIcon" href='https://www.javascript.com/' target='_blank'>
              <IoLogoJavascript />
            </a>
            <a className="bannerIcon" href='https://react.dev/' target='_blank'>
              <FaReact />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media