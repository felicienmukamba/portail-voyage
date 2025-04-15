import React from "react";
import excited from '../assets/images/excited-young-woman-with-short-hair-orange-shirt-wearing-sun-hat-sunglasses-holding-map-credit-card_141793-29868 1.png'

const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-wrap items-center self-center mt-8 w-full font-semibold max-w-[1256px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
        <div className="max-w-full w-[593px]">
          <h1 className="text-6xl text-black max-md:max-w-full max-md:text-4xl">
            Une fois par an, visitez un lieu où vous n'êtes jamais allé
            auparavant.
          </h1>
          <p className="mt-5 text-xl text-neutral-600 max-md:max-w-full">
            De{" "}
            <span style={{ fontSize: "32px", color: "rgba(0,0,0,1)" }}>
              Dalai Lama
            </span>
          </p>
        </div>
      </div>
      <img
        src={excited}
        alt="Travel illustration"
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.05] basis-0 min-w-60 max-md:max-w-full"
      />
    </section>
  );
};

export default HeroSection;
