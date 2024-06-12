import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 pt-20">
        <div className="flex gap-4">
          <h1 className="text-5xl	font-semibold text-pink-900 mb-4">Webdesign</h1>
          <h1 className="text-5xl	font-semibold text-pink-900 mb-4">Portfolio Kyara de Winter</h1>
        </div>
        <p>
          As a front-end developer, who's also interested in making designs for web- or mobile applications I enjoy working on UI/UX. Below, you can find some of my earlier designs of a variation of
          projects, which are made with Figma. Not only do I work with wireframes, but I also make high-fidelity designs and like to make prototypes to show the interaction end-users will expect. Be
          aware that a lot of projects shown below are mockups, and are not fully developed.
        </p>
      </div>
    </div>
  );
};

export default Header;
