import Carousel from "@/components/carousel";

const images = [
  { image: "https://picsum.photos/seed/random101/500/500" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel data={images} />
    </main>
  );
}
