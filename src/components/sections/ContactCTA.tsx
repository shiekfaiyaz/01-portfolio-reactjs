'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Main Container */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
        
        {/* Left Side: Animated SVG/Lottie (Message Sending Visual) */}
        <div className="w-full lg:w-1/3 h-48 sm:h-60 flex items-center justify-center">
          <DotLottieReact
            src="/animations/hello.lottie" // Place your Lottie file in public/animations/
            loop
            autoplay
          />
        </div>

        {/* Center: Title and Subtitle */}
        <div className="flex-1 text-center lg:text-left space-y-3">
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Let's connect on <span className="text-green-400">Upwork</span>
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            Have a project in mind? Send a message on Upwork and let's turn your ideas into a production-ready web app.
          </p>
        </div>

        {/* Right Side: Status Tag & Animated Line Border Button */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-6 shrink-0">
          
          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-4 py-1.5 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">
              Status: Available
            </span>
          </div>

          {/* Upwork Button with Moving Line Border */}
          <a
            href="https://www.upwork.com/freelancers/~016245cb361bf528ed"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-[2px] overflow-hidden rounded-xl group transition-transform active:scale-95"
          >
            {/* Rotating Gradient for Moving Line Border */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#020617_50%,#10B981_100%)]" />

            {/* Button Inner Content */}
            <span className="relative inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 text-white font-semibold text-sm rounded-[10px] group-hover:bg-slate-900 transition-colors">
              <span>View Upwork Profile</span>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}