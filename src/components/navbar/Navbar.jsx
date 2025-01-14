import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Delwar from "/Delwar.png"
import { navLinksdata } from '../../constants/index';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false);

  return (
    <div className="w-full mx-auto px-4 lg:px-10 h-20 fixed top-0 left-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='flex items-end gap-3'>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='font-titleFont text-white text-2xl lg:text-3xl font-bold shadow-sm cursor-pointer'
        >
            MDH
        </Link>
      </div>
      <div>
        <ul className="hidden mdl:flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* ............................... Mobile menu .............................. */}
        <span
          onClick={() => setShowMenu(true)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <AnimatePresence mode='wait'>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{duration:0.4}}
            className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
          >
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
              <h3 className='font-titleFont text-white text-3xl font-bold shadow-sm cursor-pointer pt-[60px]'>
                  M D Hossain
              </h3>
                <p className="text-gray-400 mt-2 text-xs">
                I have hands-on experience in web design & development. I excel in designing and maintaining responsive websites with smooth user experience. I am adept at writing clean and efficient code on both the client and server sides.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar