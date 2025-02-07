import React from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export const SearchBar = ({
  searchTerm,
  handleInputChange,
  handleButtonClick,
  placeholder,
}: {
  searchTerm: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleButtonClick: () => void;
  placeholder: string;
}) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <textarea
          className="w-full rounded-xl border border-gray-300 bg-white p-4 pr-14 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none shadow-sm"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          onKeyDown={(e) => e.key === "Enter" && handleButtonClick()}
          rows={3}
        />

        <button
          className="absolute bottom-4 right-3 flex h-8 w-8 items-center justify-center rounded-full   disabled:bg-gray-400 shadow-md"
          onClick={handleButtonClick}
          disabled={!searchTerm.trim()}
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
