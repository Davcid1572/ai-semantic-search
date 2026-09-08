# Semantic Search 🔍

Search through a collection of tech documents by **meaning** —
not just keywords. Built to demonstrate how modern AI search
works under the hood using text embeddings and vector similarity.

## Live Demo

[My App](https://ai-semantic-search-eta.vercel.app/)

## How It Works

1. Every document is converted into a vector (embedding) —
   an array of numbers that captures its meaning
2. The search query is converted into a vector the same way
3. Cosine similarity measures how close the query vector is
   to each document vector
4. Results are returned ranked by similarity score

This means "make my site faster" finds documents about
"performance optimization" and "Core Web Vitals" even though
those exact words weren't in the query.

## Features

- Semantic search — finds meaning not just keywords
- Similarity scores with visual progress bars
- Color-coded category badges
- Suggestion chips for quick demos
- Built-in document collection across 6 tech categories

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Transformers.js (all-MiniLM-L6-v2 embedding model)
- Cosine similarity for vector comparison

## The Math

Cosine similarity between two vectors A and B:

similarity = (A · B) / (|A| × |B|)

Where · is the dot product and |x| is the magnitude.
Result is always between 0 (unrelated) and 1 (identical meaning).

## Running Locally

1. Clone the repo
   git clone https://github.com/Davcid1572/ai-semantic-search

2. Install dependencies
   npm install

3. Start the dev server
   npm run dev

4. Open http://localhost:3000
   Note: First search downloads the embedding model (~25MB)

## What I Learned

- How text embeddings represent meaning as vectors
- Cosine similarity for measuring vector distance
- Promise.all for parallel async operations
- Why inline styles beat Tailwind for dynamic values
- Vector databases and HNSW for production scale
- The foundation of RAG systems and AI memory
