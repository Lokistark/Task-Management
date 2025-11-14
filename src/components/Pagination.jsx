import React from "react";

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <span className="text-lg font-semibold text-indigo-700">Pages</span>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded-full border ${
            currentPage === i + 1
              ? "bg-indigo-600 text-white"
              : "bg-white text-indigo-600 hover:bg-indigo-100"
          } transition`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}




