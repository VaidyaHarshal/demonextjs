import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  isSearching: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isSearching,
}) => {
  return (
    !isSearching && (
      <div className="flex justify-center mt-8">
        <button
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 rounded transition  ${
            currentPage <= 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-md hover:from-blue-500 hover:to-purple-600"
          }`}
        >
          Previous
        </button>
        <button
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 mx-2 py-2 rounded-lg transition ${
            currentPage >= totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-md hover:from-blue-500 hover:to-purple-600"
          }`}
        >
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
