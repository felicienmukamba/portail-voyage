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
    <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
      <img
        src={mainImageSrc}
        alt="Featured destination"
        className="object-contain rounded-lg aspect-[1.76] min-w-60 w-[568px] max-md:max-w-full"
      />
      <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <ContentCard imageSrc={cardImages[0]} />
          <ContentCard imageSrc={cardImages[1]} />
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-10 w-full max-md:max-w-full">
          <ContentCard imageSrc={cardImages[2]} />
          <ContentCard imageSrc={cardImages[3]} />
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;
