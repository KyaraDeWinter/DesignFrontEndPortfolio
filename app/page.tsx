"use client";

import Card from "@/components/Card/Card";
import Carousel from "reactjs-nextjs-carousel";

export default function Home() {
  const slides = ["/images/chillorbV1.jpg", "/images/chillorbV1.jpg", "/images/nextgenV2.jpg", "/images/buildathomeV1.jpg"];

  return (
    <main className="pt-20 w-full flex justify-center">
      {/* <Carousel slides={slides} autoSlide={false} carouselWidth={"80vw"} autoSlideInterval={8000} /> */}
      <div className="grid grid-cols-2 w-3/5 p-0 gap-5">
        <Card
          text="ChillOrb | As shown on the slides, this is a webshop selling a brand new innovative (mockup) product that helps you relax due to colour therapy. The product is a smart orb-like object that changes colour to set the mood as well as playing relaxing music. The web design choices like using a darkened background against bright spotlights are made to mirror the overall vibe of the product."
          image={{
            href: "/images/chillorbV1.jpg",
            width: 1200,
            height: 200,
          }}
        />
        <Card
          text="Build@Home | This is a design I made for an international project where teachers from whole Europe can find lesson plans and other resources to teach their students. Teachers can submit their programs to the database to share local cultural knowledge. The design is based on a metro map as shown on the landing page to portray the connection between educational institutions in a broad range of countries."
          image={{
            href: "/images/buildathomeV1.jpg",
            width: 1200,
            height: 200,
          }}
        />
        <Card
          text="NextGen | Design for a job application website to connect healthcare professionals with healthcare institutions. This design is based on a broadly known job application website."
          image={{
            href: "/images/nextgenV2.jpg",
            width: 1200,
            height: 200,
          }}
        />
      </div>
    </main>
  );
}

////<div className="grid grid-cols-2 w-3/5 p-0 gap-5">
{
  /* <Card
text="ChillOrb | As shown on the slides, this is a webshop selling a brand new innovative (mockup) product that helps you relax due to colour therapy. The product is a smart orb-like object that changes colour to set the mood as well as playing relaxing music. The web design choices like using a darkened background against bright spotlights are made to mirror the overall vibe of the product."
image={{
  href: "/images/chillorbV1.jpg",
  width: 1200,
  height: 200,
}}
/>
<Card
text="Build@Home | This is a design I made for an international project where teachers from whole Europe can find lesson plans and other resources to teach their students. Teachers can submit their programs to the database to share local cultural knowledge. The design is based on a metro map as shown on the landing page to portray the connection between educational institutions in a broad range of countries."
image={{
  href: "/images/buildathomeV1.jpg",
  width: 1200,
  height: 200,
}}
/>
<Card
text="NextGen | Design for a job application website to connect healthcare professionals with healthcare institutions. This design is based on a broadly known job application website."
image={{
  href: "/images/nextgenV2.jpg",
  width: 1200,
  height: 200,
}}
/>
</div> */
}
