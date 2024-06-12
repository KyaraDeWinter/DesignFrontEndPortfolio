import Image from "next/image";

type ImageProps = {
  href: string;
  width: number;
  height: number;
};

interface CardProps {
  text: string;
  image: ImageProps;
}

const Card = ({ text, image }: CardProps) => {
  return (
    <div
      className="shadow-md rounded-md
    h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
    >
      <Image
        width={image.width}
        height={image.height}
        src={image.href}
        alt="project"
        style={{
          borderRadius: "0.375rem 0.375rem 0 0",
        }}
      />

      <div className="py-2 px-4">{text}</div>
    </div>
  );
};

export default Card;
