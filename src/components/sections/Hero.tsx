'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link";
import Animate from "@/components/Animate";

export default function Hero() {
  const roles = [
    'Web Developer',
    'Creative Designer',
    'Problem Solver',
    'Full Stack Engineer',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const pathData =
    "M358 119.276L155.485 2.39743L2 119.276V314.746L155.485 401.397L256.743 358.072L358 314.746V119.276Z";

  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 lg:px-16 overflow-hidden bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300 pt-20">

      {/* Subtle Background Glow for Light & Dark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Grid Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-12">

        {/* LEFT COLUMN: Text & Actions */}
        <div className="flex flex-col items-start gap-6">
          <div className="space-y-3">
            <Animate type="up">
              <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium tracking-wide">
                Hi, I'm Shaik 👋
              </h3>
            </Animate>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight min-h-[1.2em] flex flex-wrap items-center gap-2 text-slate-900 dark:text-white">
              <span>A</span>
              <motion.span
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </h1>
          </div>
          <Animate type="up">
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              I build modern, reliable web solutions focused on high performance, clean user interaction, and scalable execution.
            </p>
          </Animate>

            <Animate type="up">
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.upwork.com/freelancers/~016245cb361bf528ed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              See Profile
            </a>
            <Link href="/projects">
              <button className="px-6 py-3 rounded-xl border-2 border-emerald-500/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-900 dark:text-white font-medium transition-all active:scale-95">
                View More
              </button>
            </Link>
          </div>
          </Animate>
        </div>
        

        {/* RIGHT COLUMN: Profile Image Shape & Floating Icons */}
        <div className="relative flex flex-col items-center justify-center min-h-[440px]">

          {/* Wrapper for Shape + Floating Icons */}
          <div className="relative flex items-center justify-center">

            {/* SVG Container */}
            <div className="relative w-[320px] sm:w-[420px] h-[360px] sm:h-[460px] flex items-center justify-center">
              <svg
                viewBox="0 0 372 351"
                className="absolute inset-0 w-full h-full drop-shadow-xl"
              >
                <defs>
                  {/* Background Gradient inside shape */}
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
                  </linearGradient>

                  {/* SVG ClipPath */}
                  <clipPath id="profileClip">
                    <path d={pathData} />
                  </clipPath>
                </defs>

                {/* 1. Gradient Shape Layer */}
                <path
                  d={pathData}
                  fill="url(#heroGradient)"
                  className="animate-draw-and-fill"
                />

                {/* 2. Profile Image Masked inside Shape */}
                <g clipPath="url(#profileClip)">
                  <foreignObject x="0" y="0" width="372" height="380">
                    <div className="w-full h-full flex items-end justify-center">
                      <Animate type="zoom" delay={0.2}>
                      <Image
                        src="/images/hero-profile.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        priority
                        className="object-cover translate-y-2 scale-100"
                      />
                      </Animate>
                    </div>
                  </foreignObject>
                </g>

                {/* 3. Animated Border Line around Shape */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  className="animate-draw-and-fill"
                />
              </svg>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 left-2 z-20 bg-white dark:bg-[#0C1322] border border-slate-200 dark:border-sky-500/30 p-3 rounded-2xl shadow-xl transition-colors"
            >
              <Image src="/svgs/api-icon.svg" alt="API" width={28} height={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-1/3 -right-4 z-20 bg-white dark:bg-[#0C1322] border border-slate-200 dark:border-sky-500/30 p-3 rounded-2xl shadow-xl transition-colors"
            >
              <Image src="/svgs/javascript.svg" alt="JS" width={28} height={28} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-6 left-6 z-20 bg-white dark:bg-[#0C1322] border border-slate-200 dark:border-sky-500/30 p-3 rounded-2xl shadow-xl transition-colors"
            >
              <Image src="/svgs/database-icon.svg" alt="DB" width={28} height={28} />
            </motion.div>
          </div>

          {/* Bottom Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white dark:bg-[#0C1322] border border-slate-200 dark:border-sky-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold shadow-lg z-20 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for Freelance
          </motion.div>

        </div>

      </div>
    </section>
  );
}