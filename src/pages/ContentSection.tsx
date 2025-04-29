import React from "react";
import CategoryFilters from "./CategoryFilters";
import ContentGrid from "./ContentGrid";

interface ContentSectionProps {
  title: string;
  categories: string[];
  mainImageSrc: string;
  cardImages: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  categories,
  mainImageSrc,
  cardImages,
}) => {
  return (
    <section
      className="flex flex-col mt-24 w-full min-h-[387px] px-4 max-md:mt-10 max-md:px-2"
      aria-labelledby="content-section-title"
    >
      <header>
        <h2
          id="content-section-title"
          className="text-2xl font-bold text-gray-800 max-md:text-xl"
        >
          {title}
        </h2>
      </header>
      <CategoryFilters title={title} categories={categories} />
      <div
        className="pb-8 mt-9 w-full min-h-[322px] max-md:mt-6"
        role="region"
        aria-label="Content Grid"
      >
        <ContentGrid mainImageSrc={mainImageSrc} cardImages={cardImages} />
      </div>
    </section>
  );
};

export default ContentSection;
