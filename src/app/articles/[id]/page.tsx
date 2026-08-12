'use client';

import { useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/articles";

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const post = ARTICLES.find((article) => article.id.toString() === id.toString());

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post?.likes || 0);

  if (!post) {
    notFound();
  }

  const toggleHeart = () => {
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <article className="py-12 px-6 max-w-4xl mx-auto space-y-8">
      
      {/* Title & Metadata Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between pt-2 border-b border-slate-800 pb-4">
          <span className="text-xs sm:text-sm text-slate-400">
            Published on {post.date}
          </span>

          {/* Heart Like Toggle Button */}
          <button
            onClick={toggleHeart}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-semibold ${
              isLiked
                ? "bg-rose-500/10 border-rose-500 text-rose-500"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition-transform active:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span>{likesCount}</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-80 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content & Code Snippet */}
      <div className="text-slate-300 leading-relaxed space-y-6 text-sm sm:text-base">
        <p>{post.content}</p>

        {post.codeSnippet && (
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400">Example Code:</span>
            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-4 overflow-x-auto text-xs sm:text-sm font-mono text-emerald-400">
              <code>{post.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>

    </article>
  );
}