"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import aboutPicture from "../../../public/images/profile-img.jpg";
import TabButton from "./TabButton";
import { Skeleton } from "@nextui-org/react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Github</li>
        <li>Networking</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Information Technology, Te Pūkenga, Invercargill</li>
        <li>
          Certificate of English Proficiency, Southern Institute of Technology,
          Invercargill
        </li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Shift Manager, Burger King, Invercargill</li>
        <li>Help Desk Internship, SIT / Te Pukenga, Invercargill</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} className="text-white" id="about">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        {/* <div className="relative"> */}
        {/* <Image
            src={aboutPicture}
            alt="about_picture"
            className="rounded-medium opacity-50 blur-md absolute"
            width={400}
            height={400}
          /> */}
        {aboutPicture ? (
          <Image
            src={aboutPicture}
            alt="about_picture"
            className="rounded-medium relative shadow-2xl shadow-white"
            width={400}
            height={400}
            // style={{ top: "20px", left: "20px" }}
          />
        ) : (
          <Skeleton className="rounded-medium relative shadow-2xl shadow-white" />
        )}
        {/* </div> */}

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 text-sm sm:text-medium md:text-lg">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work-experience")}
              active={tab === "work-experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-sm md:text-medium">
            {TAB_DATA.find((t) => t.id === tab)!.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
