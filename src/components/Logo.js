import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const colors = ["#121212", "rgba(131, 58, 180, 1)", "rgba(253, 29, 29, 1)", "rgba(252, 176, 69, 1)", "rgba(131, 58, 180, 1)", "#121212"];

const Logo = () => {
  return (
    <div className='sm:px-5' >
      <MotionLink
        href="/"
        className="hidden w-11 h-11 mt-[-10px] text-xl  font-bold bg-dark text-light  items-center justify-center rounded-full sm:flex "
        whileHover={{
          backgroundColor: colors,
          transition: {
            duration:1,
            repeat:Infinity 
          },
        }}
      >
        GK
      </MotionLink>
    </div>
  );
};

export default Logo;
