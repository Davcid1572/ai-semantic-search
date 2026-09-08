import type { SearchResult } from "@/types/search";

interface SearchResultProps {
  result: SearchResult;
  index: number;
}

const categoryColors: Record<string, string> = {
  Fundamentals: "bg-blue-500/20 text-blue-400",
  Frontend: "bg-green-500/20 text-green-400",
  Security: "bg-red-500/20 text-red-400",
  Performance: "bg-yellow-500/20 text-yellow-400",
  DevOps: "bg-orange-500/20 text-orange-400",
  Databases: "bg-purple-500/20 text-purple-400",
};

function SimilarityBar({ score }: { score: number }) {
  const percentage = Math.round(score * 100);

  const color =
    percentage >= 80
      ? "bg-green-500"
      : percentage >= 60
        ? "bg-yellow-500"
        : "bg-gray-500";

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-medium text-gray-400 w-8 text-right">
        {percentage}%
      </span>
    </div>
  );
}

export default function SearchResult({ result, index }: SearchResultProps) {
  const { document, similarity } = result;
  const categoryColor =
    categoryColors[document.category] || "bg-gray-500/20 text-gray-400";

  return (
    <div
      className="bg-gray-800/50 rounded-2xl border border-gray-700
                   p-5 flex flex-col gap-3 hover:border-gray-600
                   transition-colors duration-150"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm font-medium">
            #{index + 1}
          </span>
          <h3 className="text-white font-medium text-sm">{document.title}</h3>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full 
                         shrink-0 font-medium ${categoryColor}`}
        >
          {document.category}
        </span>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
        {document.content}
      </p>

      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-600">Semantic similarity</span>
        <SimilarityBar score={similarity} />
      </div>
    </div>
  );
}
