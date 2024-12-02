import React from "react";
import Image from "next/image";
import footerimage from "public/images/profile/footer.png";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:h-[400px] h-[300px]">
      <div className="w-[50%] sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0 sm:ml-[180px]">
        <h1 className="font-helvetica-neue font-extrabold text-5xl sm:text-8xl mb-4">
          Want to Contact Me?
        </h1>
        <p className="text-sm sm:text-base">
          Get in touch with me through the following channels:
          <br />
          <a href="mailto:govindkrishna28@gmail.com" target="_blank" className="underline ">Email</a> |
          <a    href="https://www.linkedin.com" className="underline p-5">LinkedIn</a> |
          <a href="https://twitter.com" className="underline p-5">Twitter</a>
          {/* Add more links as needed */}
        </p>
      </div>
      <div className="w-[50%]  sm:w-1/2  sm:ml-[100px] ">
      <Image 
        src={footerimage}
        alt="footer"
    
      />
    </div>
    </div>
  );
};

export default Footer;
