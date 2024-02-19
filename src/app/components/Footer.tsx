import React from "react";
import Image from "next/image";
import v from "../../../public/images/letter-v.png";
import { Link } from "@nextui-org/react";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white px-0 sm:px-4 md:px-6 lg:px-12 xl:px-20">
      <div className="p-12 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <Link color="secondary" href="/">
            <Image src={v} alt="V" width={35} height={35} />
            <p className="font-bold text-inherit text-white">Victoryo</p>
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
