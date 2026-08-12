'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const WORKFLOW_STEPS = [
  {
    step: "1",
    title: "Scope & Design",
    desc1: "Understanding project goals, wireframing UI/UX layouts, and finalizing tech stack requirements.",
    desc2: "Creating responsive design systems and interactive prototypes for seamless user experience.",
  },
  {
    step: "2",
    title: "Development / Code",
    desc1: "Building modern frontend applications using React, Next.js, HTML, CSS, and JavaScript.",
    desc2: "Connecting UI components with backend REST APIs, databases, and third-party services.",
  },
  {
    step: "3",
    title: "Debug Code & Test",
    desc1: "Performing code audits, fixing layout bugs, and testing across multiple devices.",
    desc2: "Ensuring high performance, fast loading speed, and cross-browser compatibility.",
  },
  {
    step: "4",
    title: "Deployments",
    desc1: "Deploying production-ready applications to Vercel, GitHub Pages, or cloud services.",
    desc2: "Setting up domain integration and monitoring post-launch performance.",
  },
];

export default function WorkFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this specific component container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  // Smooth out the line animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
<section className="py-20 px-6 lg:px-16 bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-3xl mx-auto">
    
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-16 text-center sm:text-left">
      Workflow
    </h2>

    {/* Timeline Wrapper */}
    <div ref={containerRef} className="relative pl-10 sm:pl-16">
      
      {/* Background Track Line */}
      <div className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] bg-slate-200 dark:bg-slate-800" />

      {/* Animated Emerald Line filling on scroll */}
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] bg-emerald-500"
      />

      {/* Steps List */}
      <div className="space-y-16">
        {WORKFLOW_STEPS.map((item) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Number Circle */}
            <div className="absolute -left-[40px] sm:-left-[64px] top-0 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0C1322] font-bold text-slate-600 dark:text-slate-300 text-sm sm:text-base group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 dark:group-hover:text-slate-950 transition-colors duration-300">
              {item.step}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-2 leading-relaxed">
                {item.desc1}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.desc2}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>

  </div>
</section>
  );
}