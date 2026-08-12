'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SKILLS_DATA, Skill } from '@/data/skillsData';
import Animate from "@/components/Animate";

type TabCategory = 'design' | 'development' | 'tools' | 'deployment';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabCategory>('design');

  // Filter skills based on selected tab
  const filteredSkills = SKILLS_DATA.filter((skill) => skill.category === activeTab);

  const tabs: { label: string; value: TabCategory }[] = [
    { label: 'Design', value: 'design' },
    { label: 'Development', value: 'development' },
    { label: 'Tools / Software', value: 'tools' },
    { label: 'Deployment', value: 'deployment' },
  ];

  return (
  <section className="py-16 px-6 lg:px-16 bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
    
    {/* Title Section */}
    <Animate type="down">
    <div className="text-center max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        My Tech Stack & Skills
      </h2>
      <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
        Technologies, tools, and platforms I use to build seamless digital experiences.
      </p>
    </div>
    </Animate>

    {/* Tab Buttons */}
    <div className="flex flex-wrap justify-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4 w-full max-w-2xl">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all cursor-pointer ${
            activeTab === tab.value
              ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Skills Cards Grid Container */}
    <div className="min-h-[280px] w-full max-w-5xl">
      <Animate type="up">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredSkills.map((skill: Skill) => (
          <div
            key={skill.id}
            className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon Container */}
            <div className="w-14 h-14 relative flex items-center justify-center mb-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
              <Image
                src={skill.image}
                alt={skill.title}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Percentage */}
            <h4 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
              {skill.percentage}%
            </h4>

            {/* Skill Title */}
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mt-1">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
      </Animate>
    </div>

  </div>
</section>
  );
}