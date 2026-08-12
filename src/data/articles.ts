export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  codeSnippet?: string;
  image: string;
  date: string;
  likes: number;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Understanding CSS Flexbox in 5 Minutes",
    description: "Master essential flexbox alignment and responsive layout techniques.",
    content: "Flexbox provides an efficient way to lay out, align, and distribute space among items in a container, even when their size is dynamic. It makes responsive layout design simple and robust.",
    codeSnippet: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
    image: "/post-img/post-img.jpg",
    date: "Aug 10, 2026",
    likes: 5,
  },
  {
    id: "2",
    title: "Next.js App Router State Management",
    description: "Learn how to keep your client and server components synchronized cleanly.",
    content: "The App Router uses React Server Components by default. Keep state localized to client components for optimal performance and cleaner state architecture.",
    codeSnippet: `'use client';\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}`,
    image: "/post-img/post-img2.jpg",
    date: "Aug 08, 2026",
    likes: 8,
  },
];