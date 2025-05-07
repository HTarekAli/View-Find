// components/Pagination.tsx
import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  setPage,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        onClick={() => setPage(Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="font-medium">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        onClick={() => setPage(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};
