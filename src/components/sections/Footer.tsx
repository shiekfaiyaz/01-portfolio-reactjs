'use client';

import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 pt-12 pb-8 border-t border-slate-900">
      
      {/* 1. Large Stroked Text Banner (webInAction) */}
      <div className="w-full overflow-hidden select-none mb-12">
        <svg
          viewBox="0 0 1000 120"
          className="w-full h-auto max-h-[12vh] tracking-widest uppercase font-black"
        >
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-transparent stroke-white stroke-[1.5] text-7xl sm:text-8xl md:text-9xl font-extrabold hover:stroke-green-400/60 transition-colors duration-500"
          >
            webInAction
          </text>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* 2. Three Column Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Core
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Data Structures
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Deployment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Engineering
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Problem Solving
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  DBMS & SQL
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Bar: Copyright & Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Copyright with dynamic year */}
          <p className="text-slate-500">
            © {currentYear} webInAction (WIA). All rights reserved.
          </p>

          {/* Social Icons (using inline SVGs for fast loading) */}
          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
               <Image src="/svgs/github-pages.svg" alt="Upwork" width={20} height={20} className="w-5 h-5" />
            </a>

            {/* Upwork */}
            <a
              href="https://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="Upwork"
            >
             <Image src="/svgs/upwork.svg" alt="Upwork" width={20} height={20} className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
                   <Image src="/svgs/linkedin.svg" alt="Upwork" width={20} height={20} className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}