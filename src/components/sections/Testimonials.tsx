import Image from "next/image";
import Animate from "@/components/Animate";

const TESTIMONIALS_DATA = [
  {
    id: "1",
    quote: "Delivered our React and Next.js interface ahead of schedule. The code architecture was clean, well-documented, and incredibly fast.",
    name: "Manny K",
    role: "Tech Startup CEO",
    avatar: "/images/avatar1.png",
  },
  {
    id: "2",
    quote: "Seamless REST API integration! Fixed complex state management bugs in our existing codebase that previous devs struggled with.",
    name: "R Ganesh",
    role: "Senior Software Engineer",
    avatar: "/images/avatar1.png",
  },
  {
    id: "3",
    quote: "Great communication and sharp attention to responsive UI design details. Turned our Figma files into pixel-perfect React components.",
    name: "John D.",
    role: "Product Manager",
    avatar: "/images/avatar1.png",
  },
  {
    id: "4",
    quote: "Top-tier developer! Built our workflow automation tools with clean Tailwind styling and smooth Framer Motion interactions.",
    name: "Sarah L.",
    role: "Frontend Lead",
    avatar: "/images/avatar1.png",
  },
  {
    id: "5",
    quote: "Exceptional work on web performance optimization. Our Lighthouse performance score went from 62 to 98 after the refactor.",
    name: "Alex M.",
    role: "Engineering Manager",
    avatar: "/images/avatar1.png",
  },
];

export default function Testimonials() {
  return (
   <section className="py-20 px-6 lg:px-16 bg-slate-50 dark:bg-[#0C1322] text-slate-900 dark:text-white transition-colors duration-300">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16 space-y-2">
      <Animate type="down">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          Demo Reviews - Updating Soon
        </span>
      </Animate>

      <Animate type="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Client & Team Feedback
        </h2>
      </Animate>

      <Animate type="up" delay={0.2}>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
          What founders, tech leads, and teammates say about working with me.
        </p>
      </Animate>
    </div>

    {/* Vite-Style Masonry Grid */}
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {TESTIMONIALS_DATA.map((item, index) => (
        <Animate key={item.id} type="up" delay={index * 0.1}>
          <div
            className="break-inside-avoid bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg hover:-translate-y-1 group"
          >
            {/* Quote Body */}
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              "{item.quote}"
            </p>

            {/* Profile Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-slate-300 dark:border-slate-700 group-hover:border-emerald-500 transition-colors">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
              </div>
            </div>
          </div>
        </Animate>
      ))}
    </div>

  </div>
</section>
  );
}