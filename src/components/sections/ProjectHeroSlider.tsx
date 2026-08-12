'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_SLIDES } from "@/data/projects";

export default function ProjectHeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    };

    /* Fix 5: Autoplay slider every 4 seconds (pauses on hover) */
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    const currentSlide = HERO_SLIDES[currentIndex];

    return (
        /* Fix: Added pt-20 to prevent top overlap with fixed navbar */
        <section
            className="relative w-full h-[90vh] min-h-[550px] bg-slate-100 dark:bg-slate-950 pt-20 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            {/* Fix 1: Clear Background Image with Light/Dark Mode compatibility */}
            <div className="absolute inset-0 pt-20">
                <Image
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    priority
                    className="object-cover transition-all duration-700"
                />
                {/* Left side gradient for Title Card contrast */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />

                {/* Right side gradient for Thumbnail contrast */}
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Fix 2: Glassmorphism/Blurred Box for title to guarantee readability */}
            <div className="relative z-10 max-w-6xl mx-auto h-full px-0 flex items-center">
                <div className="max-w-md p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/20 dark:border-slate-800 shadow-xl space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {currentSlide.title}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        {currentSlide.description}
                    </p>
                    <div>
                        <a
                            href={currentSlide.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-xl transition-all duration-300 text-sm shadow-md"
                        >
                            <span>Live Site</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Fix 3: Center Bottom < > rounded arrows in cream/white */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-amber-50/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-lg backdrop-blur-sm flex items-center justify-center transition-transform active:scale-95 text-lg font-bold"
                    aria-label="Previous Slide"
                >
                    ‹
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-amber-50/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-lg backdrop-blur-sm flex items-center justify-center transition-transform active:scale-95 text-lg font-bold"
                    aria-label="Next Slide"
                >
                    ›
                </button>
            </div>

            {/* Fix 4: Right Side fully rounded mini thumbnails */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                {HERO_SLIDES.map((slide, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-md ${isActive
                                    ? "border-green-500 scale-110 ring-2 ring-green-400/40"
                                    : "border-white dark:border-slate-700 opacity-70 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                            />
                        </button>
                    );
                })}
            </div>

        </section>
    );
}