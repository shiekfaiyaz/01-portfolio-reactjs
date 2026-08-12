"use client";
import { motion } from "framer-motion";

export default function Animate({
  children,
  type = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  type?: "up" | "down" | "zoom";
  delay?: number;
}) {
  const variants = {
    up: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    zoom: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      initial={variants[type].initial}
      whileInView={variants[type].animate}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}