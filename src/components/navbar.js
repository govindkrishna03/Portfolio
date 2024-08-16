import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  
  return (
    <Link href={href} className={`${className} `}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="grid grid-cols-3 py-10">
      <Logo />
      <nav className="text-center flex flex-col space-y-0 sm:flex-row sm:space-x-[80px] ">
        <button
          onClick={toggleMenu}
          className="sm:hidden text-xl font-bold bg-dark text-light rounded-full w-10 h-10 flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "X" : "="}
        </button>
        <div className={`${isOpen ? "flex" : "hidden"} flex-col sm:flex sm:flex-row sm:space-x-[80px] justify-center`}>
          <CustomLink href="/" title="Home" className="sm:mb-0" />
          <CustomLink href="/Projects" title="Projects" />
          <CustomLink href="/Gallery" title="Gallery" />
          <CustomLink href="/blogs" title="Blogs" />
        </div>
      </nav>

      <nav className="hidden md:flex justify-end  space-x-4 ">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Twitter"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="GitHub"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
