import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <main className="flex flex-wrap gap-10 w-6/12 pt-20 justify-items-center">
      <Card 
        text="ChillOrb | Design for a webshop selling a brand new innovative product that helps you relax due to colour therapy."
        image={
          {
            href: "/images/chillorbV1.jpg",
            width: 400,
            height: 100
          }
        }
      />
      <Card 
        text="NextGen | Design for a job application website to connect healthcare professionals with healthcare institutions."
        image={
          {
            href: "/images/nextgenV2.jpg",
            width: 500,
            height: 200
          }
        }
      />
    </main>
  );
}
