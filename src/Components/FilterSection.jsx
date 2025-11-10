import React from "react";

const FilterSection = () => {
  return (
    <div className="bg-gray-100 my-10 p-4 rounded-md h-max ">
      <div className="flex items-center justify-end">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white lg:w-[300px]  border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-[#990099] focus:shadow-md hover:border-gray-400 "
        />
      </div>

      {/* Category only data */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-wrap gap-2 mt-3">{}</div>
      <div></div>
    </div>
  );
};

export default FilterSection;
