import groq from "@/lib/groq";
import { Document, DocumentWithEmbedding } from "@/types/search";

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await groq.embeddings.create({
    model: "nomic-embed-text-v1_5",
    input: text,
  });

  const embedding = response.data[0].embedding;

  if (typeof embedding === "string") {
    throw new Error("Unexpected string embedding returned from API");
  }

  return embedding;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);

  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

  if (magnitudeA === 0 || magnitudeB === 0) return 0;

  return dotProduct / (magnitudeA * magnitudeB);
}

export async function embedDocuments(
  documents: Document[],
): Promise<DocumentWithEmbedding[]> {
  const embedded = await Promise.all(
    documents.map(async (doc) => ({
      ...doc,
      embedding: await generateEmbedding(doc.content),
    })),
  );

  return embedded;
}

export function findSimilarDocuments(
  queryEmbedding: number[],
  documents: DocumentWithEmbedding[],
  topK: number = 5,
) {
  return documents
    .map((doc) => ({
      document: doc,
      similarity: cosineSimilarity(queryEmbedding, doc.embedding),
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK)
    .map(({ document, similarity }) => ({
      document: {
        id: document.id,
        title: document.title,
        content: document.content,
        category: document.category,
      },
      similarity,
    }));
}
