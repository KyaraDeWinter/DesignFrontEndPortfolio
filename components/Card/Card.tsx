import React from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ImageProps = {
  href: string;
  width: number;
  height: number;
};

interface CardProps {
  text: string;
  images: ImageProps[];
}

const Card: React.FC<CardProps> = ({ text, images }) => {
  return (
    <div className="shadow-md rounded-md h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
      <Carousel showThumbs={false} infiniteLoop >
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={image.width}
              height={image.height}
              src={image.href}
              alt={`Slide ${index + 1}`}
              style={{
                borderRadius:"0.375rem 0.375rem 0 0",
                overflow: "hidden",
              }}
            />
          </div>
        ))}
      </Carousel>
      <div className="py-2 px-4">{text}</div>
    </div>
  );
};

export default Card;
