import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <div
        className="relative flex items-center 
        justify-center h-screen overflow-hidden"
      >
        <video
          src="/videos/bg-video"
          autoPlay={true}
          loop
          muted
          className="absolute"
        ></video>
      </div> */}
    </main>
  );
}
