'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import { CATEGORY_LIST } from "@/data/projects";

export default function ProjectCategories() {
  const [searchQuery, setSearchQuery] = useState("");

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto space-y-10">

      {/* Search Input & Filter Icon */}
      <div className="flex items-center gap-3 max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-full px-4 py-2.5 shadow-md">
        <input
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
        />
        <button type="button" className="shrink-0 p-1 hover:opacity-80 transition-opacity">
          <Image
            src="/svgs/filter.svg"
            alt="Filter Icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Note Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm text-amber-300 font-medium">
          ⚠️ <span className="font-semibold">Note:</span> These are practice and design demo projects built to demonstrate technical skills, not real client projects.
        </p>
      </div>

      {/* Category Sliders */}
      <div className="space-y-12">
        {CATEGORY_LIST.map((category, idx) => {
          const sliderRef = useRef<HTMLDivElement>(null);

          const filteredProjects = category.projects.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description?.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredProjects.length === 0) return null;

          return (
            <div key={idx} className="space-y-4">

              {/* Category Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {category.categoryTitle}
                </h3>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scroll(sliderRef, "left")}
                    className="w-8 h-8 rounded-full bg-slate-800 cursor-pointer hover:bg-slate-700 text-white flex items-center justify-center text-sm font-bold transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => scroll(sliderRef, "right")}
                    className="w-8 h-8 rounded-full bg-slate-800 cursor-pointer hover:bg-slate-700 text-white flex items-center justify-center text-sm font-bold transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Cards Container with Hidden Scrollbar */}
              <div
                ref={sliderRef}
                className="flex items-center gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="shrink-0 w-[280px] sm:w-[250px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 group flex flex-col"
                  >
                    {/* 1. Image */}
                    <div className="relative h-44 w-full bg-slate-800 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                      {/* 2. Title */}
                      <h4 className="text-base font-semibold text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h4>

                      {/* 3. Description + Action Icons (Live Demo & GitHub) */}
                      <div className="flex items-end justify-between gap-2 border-t border-slate-800/80 pt-3">
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 max-w-[65%]">
                          {project.description || "Simple web project built using HTML5 and styled with modern CSS."}
                        </p>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {/* Live Site Link */}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg transition-colors"
                              title="View Live Site"
                              aria-label="View Live Site"
                            >
                              <span className="text-xs font-bold">↗</span>
                            </a>
                          )}

                          {/* GitHub Code Link */}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-gray-300 hover:bg-slate-700 rounded-lg transition-colors"
                              title="View Source Code"
                              aria-label="GitHub Repository"
                            >
                              <Image
                                src="/svgs/github.svg"
                                alt="GitHub"
                                width={18}
                                height={18}
                                className="w-4 h-4"
                              />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}