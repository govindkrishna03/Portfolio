import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { TwitterIcon, GithubIcon, LinkedInIcon } from "./icons";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter;
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
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
  return (
    <header className="w-full px-32 py-8 font-medium grid grid-cols-3">
      <Logo />
      <nav className="col-span-1 text-center">
        <CustomLink href="/" title="Home" className="mr-8" />
        <CustomLink href="/Projects" title="Projects" className="mx-8" />
        <CustomLink href="/Gallery" title="Gallery" className="mx-8" />
        <CustomLink href="/blogs" title="Blogs" className="ml-8" />
      </nav>

      <nav className="col-span-1 flex justify-end">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
