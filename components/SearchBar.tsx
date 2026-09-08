import { useState, KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 3 || isLoading) return;
    onSearch(trimmed);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder="Search by meaning... e.g. 'how do I keep my site secure'"
            className="w-full bg-gray-800 text-gray-100 placeholder-gray-600
                       border border-gray-700 rounded-xl px-4 py-3 pr-10
                       text-sm outline-none focus:border-violet-500
                       transition-colors duration-150 disabled:opacity-50"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         text-gray-500 hover:text-gray-300
                         transition-colors duration-150"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={handleSearch}
          disabled={isLoading || !query.trim() || query.trim().length < 3}
          className="px-6 py-3 rounded-xl font-medium text-sm
                     bg-violet-600 hover:bg-violet-500 text-white
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-150 active:scale-95
                     flex items-center gap-2"
        >
          {isLoading ? (
            <span
              className="w-4 h-4 border-2 border-white/30
                            border-t-white rounded-full animate-spin"
            />
          ) : (
            "Search"
          )}
        </button>
      </div>

      {query.trim().length > 0 && query.trim().length < 3 && (
        <p className="text-xs text-amber-400 px-1">
          Enter at least 3 characters to search
        </p>
      )}
    </div>
  );
}
