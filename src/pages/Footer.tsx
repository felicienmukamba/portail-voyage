import React from "react";

import logo from '../assets/images/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-8 items-center px-24 py-8 mt-32 text-sm leading-5 text-black bg-stone-50 min-h-[147px] max-md:px-5 max-md:mt-10">
      <img
            src={logo}
            alt="Company logo"
        className="object-contain flex-1 shrink self-stretch my-auto w-40 aspect-[1.82] basis-0"
      />
      <p className="flex-1 shrink my-auto basis-0">
        G.NIOOS © <br />
        2021
      </p>
      <a href="#support" className="flex-1 shrink my-auto basis-0">
        Support <br />
        membres
      </a>
      <a href="#legal" className="flex-1 shrink my-auto basis-0">
        Mentions <br />
        légales
      </a>
      <a href="#terms" className="flex-1 shrink my-auto basis-0">
        Conditions <br />
        d'utilisations
      </a>
      <a href="#careers" className="flex-1 shrink my-auto basis-0">
        G.nioos <br />
        recrute
      </a>
      <a href="#privacy" className="flex-1 shrink my-auto basis-0">
        Données <br />
        personnelles
      </a>
    </footer>
  );
};

export default Footer;
