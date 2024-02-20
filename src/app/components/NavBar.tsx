"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import DiscordNavIcon from "../../../public/discord-nav-icon.svg";
import GithubNavIcon from "../../../public/github-nav-icon.svg";
import v from "../../../public/images/letter-v.png";
import InstagramNavIcon from "../../../public/instagram-nav-icon.svg";
import WhatsappNavIcon from "../../../public/whatsapp-nav-icon.svg";

const NavBar = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "About", "Projects", "Contact"];
  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#121212] bg-opacity-90"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link color="secondary" href="/">
            <Image src={v} alt="V" width={35} height={35} />
            <p className="font-bold text-inherit text-white">Victoryo</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="secondary" href="/#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/#projects" aria-current="page" color="primary">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="/#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Link href="https://github.com/VictoryoM" target="_blank" size="sm">
          <Image
            src={GithubNavIcon}
            alt="Github Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link href="https://discord.gg/2AaWAkYYeb" target="_blank" size="sm">
          <Image
            src={DiscordNavIcon}
            alt="Discord Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link
          href="https://www.instagram.com/victoryo11"
          target="_blank"
          size="sm"
        >
          <Image
            src={InstagramNavIcon}
            alt="Instagram Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link href="https://wa.me/+6281563231188" target="_blank" size="sm">
          <Image
            src={WhatsappNavIcon}
            alt="Whatsapp Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </NavbarContent>
      <NavbarMenu className="bg-[#121212] items-center bg-opacity-70 p-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            className="mb-2 last:mb-0" // Add margin-bottom and remove for the last item
          >
            <Link
              href="#" // Add the actual href for each menu item
              className="w-full text-slate-300 py-2 px-4 block rounded-lg hover:bg-slate-800 transition duration-300"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
