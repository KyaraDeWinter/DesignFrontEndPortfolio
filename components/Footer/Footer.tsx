'use client';

import React from "react";
import Image from "next/image";
import profileImage from "../../public/images/profile.png";

const Footer = () => {
  return (
    <div className="w-full mt-20 h-full w-full bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="flex flex-row items-center gap-20 w-full p-20 pl-96 shadow-2xl bottom-0 sticky" style={{ minHeight: "150px" }}>
        <div>
          <Image src={profileImage} width={125} height={125} style={{ borderRadius: "50%" }} alt="Profile picture of Kyara de Winter" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-pink-900">Links</h1>
          <p>
            <a href="https://github.com/KyaraDeWinter" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kyara-de-winter-7919071b0/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <a href="/CV_MEI_2024.pdf" target="_blank" rel="noopener noreferrer" download>
              Download CV
            </a>
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-2 text-pink-900">Kyara de Winter</h1>
          <p>Front-end Developer | Webdesigner</p>
          <p>Currently living in Cuijk, Noord-Brabant</p>
          <p>
            <a href="mailto:kyaradewinter@gmail.com">kyaradewinter@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
