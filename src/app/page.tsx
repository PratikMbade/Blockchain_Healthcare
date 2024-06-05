import { CardHoverEffectDemo } from "@/components/Cards";
import { GlobeDemo } from "@/components/Earth";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ImagesSliderDemo } from "@/components/NewHero";
import Image from "next/image";


export default function Home() {
  return (
  <main>
    <Navbar/>
   <ImagesSliderDemo/>
    <GlobeDemo/>

    <CardHoverEffectDemo/>
  </main>
  );
}
