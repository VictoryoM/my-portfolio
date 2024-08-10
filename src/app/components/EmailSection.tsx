"use client";
import { EmailSendPayload } from "@/lib/validators/email";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import DiscordIcon from "../../../public/discord-icon.svg";
import { EmailSendPayload } from "@/lib/validators/email";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import DiscordIcon from "../../../public/discord-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const { mutate: handleSubmit, isPending } = useMutation({
    mutationFn: async (e: any) => {
      e.preventDefault();
      toast.loading("Sending email...");
      const payload: EmailSendPayload = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const { data } = await axios.post("/api/send", payload);
      if (data === "Email sent") {
        e.target.reset();
      }
      return data as string;
    },
    onError: (err) => {
      toast.dismiss();
      if (err instanceof AxiosError) {
        if (err.response?.status === 422) {
          return toast.error("Invalid email address, please check again.");
        }
      }
      return toast.error(
        "Email not sent, please check all the fields and try again."
      );
    },
    onSuccess: () => {
      toast.dismiss();
      setEmailSubmitted(true);
      return toast.success(
        "Email sent successfully! Please note that it may take a while for me to respond. Thank you!"
      );
    },
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  if (emailSubmitted) {
    setTimeout(() => {
      setEmailSubmitted(false);
    }, 5000);
  }

  return (
    <section
      ref={ref}
      id="contact"
      // className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 -z-100 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/VictoryoM" target="_blank">
              <Image
                src={GithubIcon}
                alt="Github Icon"
                className="opacity-40 scale-80 hover:opacity-90 hover:scale-100 hover:rotate-6 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link href="https://discord.gg/2AaWAkYYeb" target="_blank">
              <Image
                src={DiscordIcon}
                alt="Discord Icon"
                className="opacity-40 scale-80 hover:opacity-90 hover:scale-100 hover:rotate-6 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://www.instagram.com/victoryo.antonis"
              target="_blank"
            >
            <Link href="https://www.instagram.com/victoryo.antonis" target="_blank">
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                className="opacity-40 scale-80 hover:opacity-90 hover:scale-100 hover:rotate-6 transition-transform duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=64210886896"
              target="_blank"
            >
            <Link href="https://api.whatsapp.com/send?phone=642108986896" target="_blank">
              <Image
                src={WhatsappIcon}
                alt="Whatsapp Icon"
                className="opacity-40 scale-80 hover:opacity-90 hover:scale-100 hover:rotate-6 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <div className="h-80">
          {emailSubmitted ? (
            <div className="text-green-500 text-lg mt-2 flex items-center justify-center bg-green-100 rounded-md shadow-md p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Email sent successfully!
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="company@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              {/* <div className="mb-6">
                <Input
                  type="email"
                  variant={"bordered"}
                  color="secondary"
                  label="Email"
                  placeholder="Enter your email"
                />
              </div> */}
              <Button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                isLoading={isPending}
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
