import React from "react";
import Image from "next/image";
import path from "path";
import fs from "fs";

const Gallery = ({ imagePaths }) => {
  return (
    
    <div className="grid sm:grid-cols-3 gap-4 p-[50px]">
      {imagePaths.map((imagePath, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <Image
            src={`/images/gallery/${imagePath}`}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => { 
  const directory = path.join(process.cwd(),"public/images/gallery");
  const filenames = fs.readdirSync(directory);

  return {
    props: {
      imagePaths: filenames,
    },
  };
};

export default Gallery;
