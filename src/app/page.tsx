import Image from "next/image";
import HeroSection from "./component/Navigation/hero-section";
import ProductCard from "./component/Navigation/card-product";
import { CardSection } from "./component/Navigation/card-section";

export default function Home() {
  return (
   <div className="bg-yellow-400">
       <HeroSection/>
       < ProductCard/>   

       <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardSection
       </main>

    <center className="font-2xl">Welcom to our website</center>
   </div>
  );
}
