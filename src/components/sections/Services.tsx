'use client';

import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/servicesData";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Animate from "@/components/Animate";

export default function Service() {
    return (
       <section id="services" className="py-16 px-6 lg:px-16 bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-7xl mx-auto">
    
    {/* Main Large Title Section */}
    <Animate type="zoom" delay={0.2}>
    <div className="text-center mb-12 space-y-3">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        My <span className="text-emerald-500 dark:text-emerald-400">Services</span>
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
        Explore the wide range of services I offer, tailored to build high-quality web applications.
      </p>
    </div>
    </Animate>

    {/* 2-Column Grid for Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SERVICES_DATA.map((service: ServiceItem) => (
     
        <div
          key={service.id}
          className="group flex flex-col justify-between p-6 md:p-8 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Top Content: Title & Subtitle */}
          <div className="space-y-2 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Bottom Section: Media Preview */}
          <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500/50 transition-colors flex items-center justify-center">
            {service.isAnimated ? (
              <DotLottieReact
                src="/animations/api.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </div>
       
      ))}
    </div>

  </div>
</section>
    );
}