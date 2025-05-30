"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "../../../public/images/my_photo.jpg";
import { Skeleton } from "@nextui-org/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Victoryo",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a creator and self-trained artist living and working in New
            Zealand. As someone who values hard work, integrity, and respect
            above all else, I approach every challenge and interaction with
            honesty and transparency. I believe that building strong
            relationships and treating others with kindness is key to success in
            any field. Contact me or check out the other section to getting to
            know more about me.
          </p>
          <div>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white cursor-pointer"
            >
              Contact Me
            </ScrollLink>
            <Link
              href="/victoryo-cv.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                My Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {myPhoto ? (
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={myPhoto}
                alt="Victoryo's Profile Picture"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-2xl shadow-blue-600"
                width={400}
                height={400}
              />
            </div>
          ) : (
            <Skeleton className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative" />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
