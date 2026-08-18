import { Document } from "@/types/search";

export const documents: Document[] = [
  {
    id: "1",
    title: "What is an API?",
    content:
      "An API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information. REST APIs use HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources.",
    category: "Fundamentals",
  },
  {
    id: "2",
    title: "How does React work?",
    content:
      "React is a JavaScript library for building user interfaces. It uses a virtual DOM to efficiently update the real DOM by only re-rendering components that have changed. React components can be functional or class-based, and they manage state and props to control what gets displayed on screen.",
    category: "Frontend",
  },
  {
    id: "3",
    title: "What is TypeScript?",
    content:
      "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, interfaces, and modern JavaScript features. TypeScript helps catch errors at compile time rather than runtime, making large codebases easier to maintain and refactor.",
    category: "Languages",
  },
  {
    id: "4",
    title: "How to improve website performance?",
    content:
      "Website performance can be improved through several techniques: lazy loading images, minifying CSS and JavaScript, using a CDN, enabling browser caching, reducing HTTP requests, optimizing images, using code splitting, and implementing server-side rendering. Core Web Vitals like LCP, FID, and CLS are key metrics to monitor.",
    category: "Performance",
  },
  {
    id: "5",
    title: "What is database indexing?",
    content:
      "Database indexing is a technique to speed up data retrieval operations. An index creates a separate data structure that holds a reference to the data in the main table, allowing the database to find rows without scanning the entire table. Common index types include B-tree, hash, and full-text indexes.",
    category: "Databases",
  },
  {
    id: "6",
    title: "How does HTTPS work?",
    content:
      "HTTPS secures communication between browsers and servers using TLS encryption. When you connect to an HTTPS site, the server presents a digital certificate. The browser verifies this certificate, then both parties perform a handshake to establish an encrypted connection. All data transmitted is encrypted and cannot be read by third parties.",
    category: "Security",
  },
  {
    id: "7",
    title: "What is Docker?",
    content:
      "Docker is a platform for containerizing applications. A container packages an application with all its dependencies into a standardized unit that runs consistently across different environments. Unlike virtual machines, containers share the host OS kernel, making them lightweight and fast to start. Docker uses images to create containers.",
    category: "DevOps",
  },
  {
    id: "8",
    title: "What is CSS Flexbox?",
    content:
      "CSS Flexbox is a one-dimensional layout system for arranging items in rows or columns. The flex container controls how its children are sized and positioned using properties like justify-content, align-items, and flex-direction. Flexbox makes it easy to build responsive layouts without using floats or positioning hacks.",
    category: "Frontend",
  },
  {
    id: "9",
    title: "How does authentication work?",
    content:
      "Authentication verifies the identity of a user. Common methods include username/password, OAuth, and JWT tokens. When a user logs in, the server verifies credentials and issues a token. This token is sent with subsequent requests to prove identity. JWT tokens contain encoded claims and are signed to prevent tampering.",
    category: "Security",
  },
  {
    id: "10",
    title: "What is server-side rendering?",
    content:
      "Server-side rendering (SSR) generates the full HTML of a page on the server before sending it to the browser. This improves initial page load time and SEO because search engines can crawl the fully rendered content. Next.js supports SSR through its App Router and server components, making it easy to mix server and client rendering.",
    category: "Performance",
  },
  {
    id: "11",
    title: "What are React hooks?",
    content:
      "React hooks are functions that let you use state and other React features in functional components. useState manages local component state, useEffect handles side effects like data fetching and subscriptions, useRef accesses DOM elements directly, and useContext shares data across components without prop drilling.",
    category: "Frontend",
  },
  {
    id: "12",
    title: "What is Git version control?",
    content:
      "Git is a distributed version control system that tracks changes in source code. Developers use branches to work on features independently, then merge changes back to the main branch. Key commands include git commit to save changes, git push to upload to remote, git pull to download updates, and git merge to combine branches.",
    category: "DevOps",
  },
  {
    id: "13",
    title: "How do databases handle transactions?",
    content:
      "Database transactions are sequences of operations that are treated as a single unit of work following ACID properties: Atomicity ensures all operations succeed or all fail, Consistency maintains data integrity, Isolation prevents concurrent transactions from interfering, and Durability guarantees committed transactions persist even after system failures.",
    category: "Databases",
  },
  {
    id: "14",
    title: "What is the event loop in JavaScript?",
    content:
      "The JavaScript event loop is what allows JavaScript to perform non-blocking operations despite being single-threaded. It works by offloading operations to the browser or Node.js runtime, and when those operations complete, their callbacks are placed in a queue. The event loop continuously checks if the call stack is empty before processing queued callbacks.",
    category: "Fundamentals",
  },
  {
    id: "15",
    title: "What is GraphQL?",
    content:
      "GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST APIs that return fixed data structures, GraphQL lets clients specify the shape of the response. This reduces over-fetching and under-fetching of data. GraphQL uses a schema to define types and relationships between data.",
    category: "Fundamentals",
  },
];
