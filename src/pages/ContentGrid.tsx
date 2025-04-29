import React from "react";
import ContentCard from "./ContentCard";

interface ContentGridProps {
  mainImageSrc: string;
  cardImages: string[];
}

const ContentGrid: React.FC<ContentGridProps> = ({
  mainImageSrc,
  cardImages,
}) => {
  return (
    <div
      className="flex flex-wrap gap-8 items-start w-full max-md:flex-col max-md:gap-6"
      role="region"
      aria-label="Content Grid"
    >
      <img
        src={mainImageSrc}
        alt="Featured destination"
        className="object-contain rounded-lg aspect-[1.76] min-w-60 w-[568px] max-md:w-full"
      />
      <div className="flex-1 shrink basis-0 min-w-60 max-md:w-full">
        <div
          className="grid grid-cols-2 gap-6 w-full max-md:grid-cols-1"
          role="group"
          aria-label="Top Content Cards"
        >
          <ContentCard imageSrc={cardImages[0]} />
          <ContentCard imageSrc={cardImages[1]} />
        </div>
        <div
          className="grid grid-cols-2 gap-6 mt-10 w-full max-md:grid-cols-1"
          role="group"
          aria-label="Bottom Content Cards"
        >
          <ContentCard imageSrc={cardImages[2]} />
          <ContentCard imageSrc={cardImages[3]} />
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
