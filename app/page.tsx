"use client";

import { useState } from "react";
import { SearchResult, SearchResponse } from "@/types/search";
import SearchBar from "@/components/SearchBar";
import SearchResultComponent from "@/components/SearchResult";

export default function Home() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true);
    setError("");
    setResults([]);
    setHasSearched(true);
    setQuery(searchQuery);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      const data: SearchResponse = await response.json();

      if (!response.ok) {
        throw new Error(
          data.results ? "Search failed" : "Something went wrong.",
        );
      }

      setResults(data.results);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-white">🔍 Semantic Search</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Search by meaning — not just keywords. Try searching for ideas, not
            exact words.
          </p>
          <div className="flex flex-wrap gap-2 justify-center mt-1">
            {[
              "how do I keep my site secure",
              "make my app load faster",
              "organise my code better",
              "async javascript",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSearch(suggestion)}
                disabled={isLoading}
                className="text-xs px-3 py-1.5 rounded-full
                           bg-gray-800 text-gray-400 border border-gray-700
                           hover:border-violet-500 hover:text-violet-400
                           transition-all duration-150 disabled:opacity-50"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && (
          <div className="flex flex-col items-center gap-3 py-8">
            <div
              className="w-8 h-8 border-2 border-violet-500/30
                           border-t-violet-500 rounded-full animate-spin"
            />
            <p className="text-gray-500 text-sm">
              Generating embeddings and searching...
            </p>
          </div>
        )}

        {error && (
          <p
            className="text-red-400 text-sm bg-red-400/10
                       px-4 py-3 rounded-lg text-center"
          >
            {error}
          </p>
        )}

        {!isLoading && hasSearched && results.length === 0 && !error && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">
              No results found for "{query}"
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Results for{" "}
                <span className="text-white font-medium">"{query}"</span>
              </p>
              <span className="text-xs text-gray-600">
                {results.length} results
              </span>
            </div>

            {results.map((result, index) => (
              <SearchResultComponent
                key={result.document.id}
                result={result}
                index={index}
              />
            ))}
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-8 flex flex-col gap-2">
            <p className="text-gray-600 text-sm">
              Try searching for concepts, not exact words
            </p>
            <p className="text-gray-700 text-xs">
              "website security" finds results about HTTPS, authentication, and
              more
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
