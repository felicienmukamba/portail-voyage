import React from "react";

interface CategoryFiltersProps {
  title: string;
  categories: string[];
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  title,
  categories,
}) => {
  return (
    <div className="flex flex-wrap gap-5 items-end self-start text-black max-md:max-w-full">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {categories.map((category, index) => (
        <button key={index} className="hover:underline focus:font-semibold">
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
