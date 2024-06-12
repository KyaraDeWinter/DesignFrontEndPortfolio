"use client";
import React from "react";
import Card from "@/components/Card/Card";

export default function Home() {
  const chillOrbImages = [
    { href: "/images/chillorbV1.jpg", width: 500, height: 500 },
    { href: "/images/chillorbV2.jpg", width: 500, height: 500 },
    { href: "/images/chillorbV3.jpg", width: 500, height: 500 },
  ];

  const buildAtHomeImages = [
    { href: "/images/buildathomeV1.jpg", width: 500, height: 500 },
    { href: "/images/buildathomeV2.jpg", width: 500, height: 500 },
    { href: "/images/buildathomeV3.jpg", width: 500, height: 500 },
    { href: "/images/buildathomeV4.jpg", width: 500, height: 500 },
  ];

  const aquaSenseImages = [
    { href: "/images/aquasenseV1.jpg", width: 500, height: 500 },
    { href: "/images/aquasenseV2.jpg", width: 500, height: 500 },
    { href: "/images/aquasenseV3.jpg", width: 500, height: 500 },
  ];

  const nextGenImages = [
    { href: "/images/nextgenV1.jpg", width: 500, height: 500 },
    { href: "/images/nextgenV2.jpg", width: 500, height: 500 },
    { href: "/images/nextgenV3.jpg", width: 500, height: 500 },
    { href: "/images/nextgenV4.jpg", width: 500, height: 500 },
    { href: "/images/nextgenV5.jpg", width: 500, height: 500 },
    { href: "/images/nextgenV6.jpg", width: 500, height: 500 },
  ];

  const rocImages = [
    { href: "/images/rocV1.jpg", width: 500, height: 500 },
    { href: "/images/rocV2.jpg", width: 500, height: 500 },
  ];

  const durabilityFlyerImages = [
    { href: "/images/flyerDuurzaamheidV1.png", width: 500, height: 500 },
    { href: "/images/flyerDuurzaamheidV2.png", width: 500, height: 500 },
  ];

  const buildAtHomePresentationImages = [{ href: "/images/buildathomeBolognaV2.jpg", width: 500, height: 500 }];

  const durabilityPosterImages = [{ href: "/images/posterDuurzaamheidV1.png", width: 500, height: 500 }];

  return (
    <main className="w-full flex justify-center">
      <div className="grid grid-cols-2 w-3/5 p-0 gap-8">
        <Card
          text="ChillOrb | As shown on the slides, this is a webshop selling a brand new innovative (mockup) product that helps you relax due to colour therapy. The product is a smart orb-like object that changes colour to set the mood as well as playing relaxing music. The web design choices like using a darkened background against bright spotlights are made to mirror the overall vibe of the product."
          images={chillOrbImages}
        />
        <Card
          text="ROC Nijmegen Inventory System | To make the process of lending out items (like pc miscellaneous) more user-friendly, I designed a new interface for the inventory system. The website is designed to be easy to navigate and to provide all the necessary information about the products. The colour palette is based on the school's theme."
          images={rocImages}
        />
        <Card
          text="NextGen | Design for a job application website to connect healthcare professionals with healthcare institutions. This design is based on a broadly known job application website. The colour palette is custom-designed to give the application a safe and clinical feeling. The orange hues give the opposite blues a natural highlight to use as Call-To-Actions."
          images={nextGenImages}
        />
        <Card
          text="AquaSense | This is a project close to home. I had the opportunity to design a website for a product called AquaSense, water quality sensors for particular usage inside your household aquarium. The design is made to be clean and professional to reflect the product's image. The website is designed to be easy to navigate and to provide all the necessary information about the products and the company."
          images={aquaSenseImages}
        />
        <Card
          text="Sustainable Phone Usage at ROC Nijmegen | This is a project where I designed a flyer to promote sustainable phone usage at the school. The flyer encourages people to think about a greener solution to phone usage and provides all the necessary information about where to find further information. The colour palette is based on the school's theme. As mentioned in the text above, there is an info sheet available where a collection of tips & tricks is put together."
          images={durabilityFlyerImages}
        />
        <Card
          text="Sustainable Phone Usage at ROC Nijmegen | The poster is designed to be eye-catching. This was used to promote the walk-by presentation where fellow students and I were open to answering questions about the sustainable phone usage project. Employees from ROC Nijmegen can now exchange mobile phones after three years instead of two."
          images={durabilityPosterImages}
        />
        <Card
          text="Build@Home Webaplication Design | This is a design I made for an international project where teachers from whole Europe can find lesson plans and other resources to teach their students. Teachers can submit their programs to the database to share local cultural knowledge. The design is based on a metro map as shown on the landing page to portray the connection between educational institutions in a broad range of countries."
          images={buildAtHomeImages}
        />
        <Card
          text="Build@Home Bolonga International Presentation | With a team of students, we presented the Build@Home project to an international audience, teachers from all over Europe. The three days long event was held in Bologna (Italy), where we instantly worked on feedback. We delivered a working prototype of which they eventually inspired their final product on."
          images={buildAtHomePresentationImages}
        />
      </div>
    </main>
  );
}
