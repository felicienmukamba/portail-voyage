import React from "react";
import excited from '../assets/images/excited-young-woman-with-short-hair-orange-shirt-wearing-sun-hat-sunglasses-holding-map-credit-card_141793-29868 1.png';

const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-between mt-8 w-full max-w-[1256px] px-4 mx-auto font-semibold max-md:flex-col max-md:items-center"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-col flex-1 items-start max-w-[593px] max-md:text-center max-md:items-center">
        <h1
          id="hero-heading"
          className="text-6xl text-black leading-tight max-md:text-4xl"
        >
          Une fois par an, visitez un lieu où vous n'êtes jamais allé
          auparavant.
        </h1>
        <p className="mt-5 text-xl text-neutral-600 max-md:text-lg">
          De{" "}
          <span
            style={{ fontSize: "32px", color: "rgba(0,0,0,1)" }}
            aria-label="Dalai Lama"
          >
            Dalai Lama
          </span>
        </p>
      </div>
      <div className="flex flex-1 justify-center mt-8 max-md:mt-4">
        <img
          src={excited}
          alt="Excited young woman holding a map and credit card, ready for travel"
          className="object-contain w-full max-w-[500px] aspect-[1.05] max-md:max-w-[300px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
