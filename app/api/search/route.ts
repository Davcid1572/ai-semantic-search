import {
  embedDocuments,
  generateEmbedding,
  findSimilarDocuments,
} from "@/lib/embeddings";
import { documents } from "@/data/documents";
import { SearchResponse } from "@/types/search";

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || query.trim().length === 0) {
      return Response.json(
        { error: "No search query provided" },
        { status: 400 },
      );
    }

    if (query.trim().length < 3) {
      return Response.json(
        { error: "Query too short. Please enter at least 3 characters." },
        { status: 400 },
      );
    }

    const [queryEmbedding, embeddedDocuments] = await Promise.all([
      generateEmbedding(query),
      embedDocuments(documents),
    ]);

    const results = findSimilarDocuments(queryEmbedding, embeddedDocuments);

    const response: SearchResponse = {
      results,
      query,
    };

    return Response.json(response);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    console.error("Search API error:", message);
    return Response.json({ error: message }, { status: 500 });
  }
}
