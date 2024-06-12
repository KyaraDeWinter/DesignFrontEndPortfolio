import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row gap-10 w-full p-20 shadow-2xl bottom-0 sticky mt-20">
        <div className="">
          <h1 className="text-3xl font-semibold mb-2">Links</h1>
          <p>
            <a href="https://github.com/KyaraDeWinter" target="_blank">
              Github
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kyara-de-winter-7919071b0/" target="_blank">
              LinkedIn
            </a>
          </p>
          <a href="/CV_MEI_2024.pdf" target="_blank" rel="noopener noreferrer" download>
            Download CV
          </a>
        </div>
        <div className="w-0.5 bg-pink-900"></div>
        <div className="">
          <h1 className="text-3xl font-semibold mb-2">Kyara de Winter</h1>
          <p>Front-end Developer | Webdesigner</p>
          <p>Woonachtig te Cuijk, Noord-Brabant</p>
          <p>
            <a href="mailto:kyaradewinter@gmail.com">kyaradewinter@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
