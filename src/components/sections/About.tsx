'use client';

import { useState } from "react";
import Image from "next/image";
import Animate from "@/components/Animate";

export default function About() {
  const [ActiveTab, setActiveTab] = useState<'about' | 'certificates' | 'education'>('about');

  // Dynamic image switching based on tab
  const tabImages = {
    about: '/images/about.jpg',
    certificates: '/images/about2.jpg',
    education: '/images/about3.jpg',
  };

  return (
<section id="about" className="py-16 px-6 lg:px-16 bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

    {/* LEFT COLUMN: Image Showcase with Floating Stat Tags */}
    <div className="w-full lg:w-[45%] flex flex-col gap-6">
      <div>
        <Animate type="up">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          About Me
        </h2>
        </Animate>
        <Animate type="up">
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-base">
          A brief introduction covering my journey, education, and development experience.
        </p>
        </Animate>
      </div>

      {/* Image Container with Floating Tags */}
      <div className="relative w-full max-w-[400px] mx-auto lg:max-w-none h-[350px] sm:h-[400px] my-6">

        {/* Masked Image Frame */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div className="w-full h-full relative [clip-path:polygon(50%_0%,_96%_5%,_100%_60%,_84%_100%,_10%_82%,_0_44%,_16%_15%)]">
            <Animate type="zoom" delay={0.2}>
            <Image
              src={tabImages[ActiveTab]}
              alt="About Shaik"
              fill
              priority
              className="object-cover transition-all duration-500"
            />
            </Animate>
          </div>
        </div>

        {/* TAG 1: Top Left */}
        <div className="absolute -top-4 -left-4 z-20 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all duration-300">
          <h5 className="text-emerald-500 font-bold text-2xl">100+</h5>
          <p className="text-slate-900 dark:text-slate-200 text-[15px] font-medium leading-tight">Projects Completed</p>
        </div>

        {/* TAG 2: Bottom Right */}
        <div className="absolute bottom-4 -right-4 z-20 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all duration-300">
          <h5 className="text-emerald-500 font-bold text-2xl">Happy</h5>
          <p className="text-slate-900 dark:text-slate-200 text-[15px] font-medium leading-tight">Clients & Partners</p>
        </div>

        {/* TAG 3: Bottom Left */}
        <div className="absolute -bottom-6 left-8 z-20 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all duration-300">
          <h5 className="text-emerald-500 font-bold text-2xl">100%</h5>
          <p className="text-slate-900 dark:text-slate-200 text-[15px] font-medium leading-tight">Quality & Value</p>
        </div>

      </div>
    </div>

    {/* RIGHT COLUMN: Interactive Tabs & Content */}
    <div className="w-full lg:w-[55%] flex flex-col gap-6">

      {/* Tab Navigation Buttons */}
      <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('about')}
          className={`cursor-pointer pb-2 font-semibold text-sm sm:text-base transition-all border-b-2 ${
            ActiveTab === 'about'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          About
        </button>

        <button
          onClick={() => setActiveTab('certificates')}
          className={`cursor-pointer pb-2 font-semibold text-sm sm:text-base transition-all border-b-2 ${
            ActiveTab === 'certificates'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Certifications
        </button>

        <button
          onClick={() => setActiveTab('education')}
          className={`cursor-pointer pb-2 font-semibold text-sm sm:text-base transition-all border-b-2 ${
            ActiveTab === 'education'
              ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Education & Experience
        </button>
      </div>

      {/* TAB CONTENT WRAPPER */}
      <div className="min-h-[320px]">
        {/* TAB 1: About Text */}
        {ActiveTab === 'about' && (
          <Animate type="down">
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am a passionate developer focused on building functional, responsive, and high-performance web applications. I enjoy tackling complex logic challenges and converting visual designs into polished user experiences.
            </p>
            <p>
              Having completed my Master’s in Computer Science, I blend strong theoretical foundations in algorithms and system architecture with modern web stack frameworks like React, Next.js, and Tailwind CSS.
            </p>
          </div>
          </Animate>
        )}

        {/* TAB 2: Certifications Grid */}
        {ActiveTab === 'certificates' && (
           <Animate type="down">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-emerald-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Web Development</h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Udemy</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Gained practical full-stack knowledge through hands-on exercises and mini projects.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-emerald-500 transition-colors">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Cloud Computing</h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">NPTEL (SWAYAM)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Learned the fundamentals of cloud infrastructure, scalability, and distributed systems.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-emerald-500 transition-colors sm:col-span-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">Machine Learning Fundamentals</h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Gyanastha IT Solutions</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Covered core data models, pattern recognition concepts, and predictive algorithms.
              </p>
            </div>
          </div>
          </Animate>
        )}

        {/* TAB 3: Education & Experience */}
        {ActiveTab === 'education' && (
          <Animate type="down">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">Education</h3>
              <div className="space-y-4 border-l-2 border-emerald-500 pl-4">
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Master of Science (MSc) in Computer Science</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Bhavan's Vivekananda College</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Built advanced understanding of core computer science concepts and modern technologies.</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white">Bachelor of Science (BSc) in Computers</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Osmania University</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Gained foundational experience through academic computer science projects.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">Freelance Work</h3>
              <div className="border-l-2 border-emerald-500 pl-4">
                <h5 className="font-bold text-slate-900 dark:text-white">Web Developer & Designer</h5>
                <p className="text-sm text-slate-500 dark:text-slate-400">Collaborated via Trello / Upwork</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Worked on client web applications, responsive UI implementations, and feature enhancements.</p>
              </div>
            </div>
          </div>
          </Animate>
        )}
      </div>

    </div>

  </div>
</section>
  );
}