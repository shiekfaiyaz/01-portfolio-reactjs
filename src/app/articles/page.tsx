'use client';

import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "../../data/articles";
import Navbar from '@/components/sections/Navbar';

export default function ArticlesPage() {
  return (
    <>
    <Navbar />
    <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
      
      {/* Top Title & Subtitle */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Articles
        </h2>
        <p className="text-slate-400 text-sm">
          Thoughts, tutorials, and practical web development guides.
        </p>
      </div>

      {/* Post Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {ARTICLES.map((post) => (
          <Link
            key={post.id}
            href={`/articles/${post.id}`}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-[260px] mx-auto h-[320px]"
          >
            {/* Image Container */}
            <div className="relative h-36 w-full shrink-0 overflow-hidden bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Container */}
            <div className="p-3.5 flex flex-col justify-between flex-1">
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Date at the Bottom */}
              <div className="border-t border-slate-100 pt-2 mt-auto">
                <span className="text-[11px] text-slate-400 font-medium">
                  {post.date}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
    </>
  );
}