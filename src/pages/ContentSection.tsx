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
    <section className="flex flex-col mt-24 w-full min-h-[387px] max-md:mt-10 max-md:max-w-full">
      <CategoryFilters title={title} categories={categories} />
      <div className="pb-8 mt-9 w-full min-h-[322px] max-md:max-w-full">
        <ContentGrid mainImageSrc={mainImageSrc} cardImages={cardImages} />
      </div>
    </section>
  );
};

export default ContentSection;
