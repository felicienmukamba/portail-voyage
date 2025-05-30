"use client";
import HeroSection from "./HeroSection";
import Header from "./Header";
import ContentSection from "./ContentSection";
import Footer from "./Footer";
import istockphoto from '../assets/images/istockphoto-621246966-612x612 1.png'
import Rectangle14 from '../assets/images/Rectangle 14.png'
import Rectangle15 from '../assets/images/Rectangle 14 (1).png'
import Rectangle16 from '../assets/images/Rectangle 14 (2).png'
import news from "../assets/images/news.png"
import news2 from "../assets/images/news2.png"
import news3 from "../assets/images/news3.png"
import news4 from "../assets/images/news4.png"
import { useEffect } from "react";



const PortailSurLesVoyages = () => {
  useEffect(() => {
    document.title = "Portail Sur Les Voyages";
  }, []);

  return (
    <main className="flex flex-col overflow-hidden bg-white">
      <div className="flex flex-col justify-center py-2 w-full bg-violet-100 rounded-none max-md:max-w-full">
        <div className="relative flex flex-col pb-24 mb-0 w-full min-h-[855px] max-md:mb-4 max-md:min-h-[600px]">
          <img
            src={istockphoto}
            alt="Background landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Header />
          <HeroSection />
        </div>
      </div>
      <section className="self-center mt-20 w-full text-base max-w-[1348px] min-h-[1364px] px-4 max-md:mt-10 max-md:px-2 max-md:max-w-full">
        <ContentSection
          title="Découverte"
          categories={["Europe", "Asie", "Amérique", "Afrique", "Océanie"]}
          mainImageSrc={Rectangle14}
          cardImages={[news, news2, news3, news4]}
        />
        <ContentSection
          title="Hébergement"
          categories={["Hôtels", "Chambres d'hôtels", "Camping", "Gîtes"]}
          mainImageSrc={Rectangle15}
          cardImages={[news, news2, news3, news4]}
        />
        <ContentSection
          title="Loisirs"
          categories={[
            "Bateaux",
            "Trains",
            "Parcs d'attraction",
            "Navigation Fluide",
            "Fêtes",
            "Safaris",
            "Aéronautique",
            "Autres",
          ]}
          mainImageSrc={Rectangle16}
          cardImages={[news, news2, news3, news4]}
        />
      </section>
      <Footer />
    </main>
  );
};

export default PortailSurLesVoyages;
