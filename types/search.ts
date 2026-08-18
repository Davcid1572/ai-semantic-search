export interface Document {
  id: string;
  title: string;
  content: string;
  category: string;
}

export interface DocumentWithEmbedding extends Document {
  embedding: number[];
}

export interface SearchResult {
  document: Document;
  similarity: number;
}

export interface SearchResponse {
  results: SearchResult[];
  query: string;
}
