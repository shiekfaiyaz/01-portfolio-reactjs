"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Added Skills link directly after About
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    // { name: "Skills", href: "/#skills" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/projects" },
    { name: "Articles", href: "/articles" },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0C1322]/80 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
          {/* Left: Logo (WIA + Image) */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              WIA
            </span>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Center: Desktop Dynamic Theme Links Pill */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-inner transition-colors">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle (Desktop) */}
            <button
              type="button"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex items-center justify-center p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full transition-all active:scale-95 shadow-sm"
            >
              {mounted ? (theme === "dark" ? "☀️" : "🌙") : <span className="block w-4 h-4" />}
            </button>

            {/* Upwork CTA Button (Desktop) */}
            <a
              href="https://www.upwork.com/freelancers/~016245cb361bf528ed"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/10 active:scale-95"
            >
              Upwork Profile
            </a>

            {/* Mobile Menu Icon Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE LEFT-SIDE SIDEBAR DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          />

          {/* Left Drawer (Half-width 60vw / max 300px, 100vh height) */}
          <aside className="fixed top-0 left-0 h-screen w-[60vw] max-w-[300px] bg-white dark:bg-[#0C1322] border-r border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between shadow-2xl transition-transform">
            
            {/* Top Area: Logo + Links */}
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <Link href="/" onClick={closeSidebar} className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    WIA
                  </span>
                  <Image src="/images/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6 object-contain" />
                </Link>
                <button
                  type="button"
                  onClick={closeSidebar}
                  className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeSidebar}
                      className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-emerald-500 text-slate-950"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Area: Upwork CTA & Dark Mode Toggle */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <a
                href="https://www.upwork.com/freelancers/~016245cb361bf528ed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}
                className="block w-full text-center py-2.5 px-3 text-xs font-bold text-slate-950 bg-emerald-500 rounded-xl hover:bg-emerald-400 transition-all"
              >
                Upwork Profile
              </a>

              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <>☀️ Light Mode</>
                  ) : (
                    <>🌙 Dark Mode</>
                  )
                ) : (
                  "Toggle Theme"
                )}
              </button>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}