import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, imgSrc, webLink, githubLInk }) => {

  return (
    <div className="w-full p-4 xl:px-10 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800 transition-colors duration-500">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          src={imgSrc}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={githubLInk} target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href={webLink} target='_blank' className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard