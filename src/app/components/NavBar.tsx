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
import { FC, useState } from "react";
import DiscordNavIcon from "../../../public/discord-nav-icon.svg";
import GithubNavIcon from "../../../public/github-nav-icon.svg";
import v from "../../../public/images/letter-v.png";
import InstagramNavIcon from "../../../public/instagram-nav-icon.svg";
import WhatsappNavIcon from "../../../public/whatsapp-nav-icon.svg";

interface NavbarProps {}

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar: FC<NavbarProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#121212]"
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
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent as="div" justify="end">
        <Link
          href="whatsapp.com"
          className="transition-transform"
          as="button"
          size="sm"
        >
          <Image
            src={GithubNavIcon}
            alt="Github Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link
          href="whatsapp.com"
          className="transition-transform"
          as="button"
          size="sm"
        >
          <Image
            src={DiscordNavIcon}
            alt="Discord Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link
          href="whatsapp.com"
          className="transition-transform"
          as="button"
          size="sm"
        >
          <Image
            src={InstagramNavIcon}
            alt="Instagram Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link
          href="whatsapp.com"
          className="transition-transform"
          as="button"
          size="sm"
        >
          <Image
            src={WhatsappNavIcon}
            alt="Whatsapp Icon"
            className="opacity-40 hover:opacity-100 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
          />
        </Link>
        {/* <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        /> */}
      </NavbarContent>
      <NavbarMenu className="bg-[#121212]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
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
