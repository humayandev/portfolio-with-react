import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md. Delwar Hossain</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide pt-1">
          I have hands-on experience in web design & development. I excel in designing and maintaining responsive websites with smooth user experience. I am adept at writing clean and efficient code on both the client and server sides.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801821686470</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">delwarbscse@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft