"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section> 
      <div className="grid grid-cols-1 sm:grid-cols-12">
        
        {/* Left Side Text Section */}
        <motion.div 
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Manya",
                1000,
                "Software Developer",
                1000,
                "Python Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I create innovative and efficient digital solutions, focusing on clean design and seamless functionality.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-6 py-3 text-center w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-80 transition-all cursor-pointer"
            >
              Hire Me!
            </Link>
            <a
              href="/files/Manya_CV.pdf"
              download="Manya_CV.pdf"
              className="px-6 py-3 text-center w-full sm:w-fit rounded-full border-2 border-primary-500 text-white hover:opacity-80 transition-all"
            >
              Download CV
            </a>

          </div>


          
        </motion.div>

        {/* Right Side Image Section */}
        <motion.div 
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center overflow-hidden">
            <Image 
              src="/images/profile1.jpg" 
              alt="Hero Image" 
              className="w-full h-full object-cover rounded-full"
              width={300} 
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
