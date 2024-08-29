import React from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="mt-2 border border-gray-300 rounded-lg p-3 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;
