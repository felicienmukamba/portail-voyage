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
      {categories.map((category, index) => (
        <button key={`${index}-${title}`} className="hover:underline focus:font-semibold">
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
