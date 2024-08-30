import React from "react";
import "./SearchBar.css";

function SearchBar({ setSearchQuery }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search h-[50vh] w-full flex items-end justify-center pb-5">
      <div className="relative w-[400px]">
        <input
          className="rounded-2xl w-full h-[40px] pl-4 pr-12 bg-white"
          type="text"
          placeholder="Search Shoes.."
          onChange={handleInputChange}  // Update query as the user types
        />
        <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-2xl">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
