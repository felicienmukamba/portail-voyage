import React from "react";

interface ContentCardProps {
  imageSrc: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ imageSrc }) => {
  return (
    <article className="flex flex-1 shrink gap-4 items-start basis-0 min-w-60">
      <img
        src={imageSrc}
        alt="Travel destination"
        className="object-contain shrink-0 aspect-square w-[140px]"
      />
      <div className="flex flex-col w-[223px]">
        <p className="leading-6 text-neutral-600">
          With supporting text below as a natural lead-in to additional content.
        </p> 
        <button className="gap-2.5 self-start px-6 py-3 mt-4 font-bold text-blue-600 hover:bg-blue-600 transition-all[1s] hover:text-white  rounded-lg border-2 border-blue-600 border-solid max-md:px-5">
          Go Somewhere
        </button>
      </div>
    </article>
  );
};

export default ContentCard;
