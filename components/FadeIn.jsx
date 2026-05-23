"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { variants, defaultTransition } from '@/lib/animations';

export default function FadeIn({ children, variant = "fadeUp", delay = 0, className, ...props }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[variant]}
      transition={{ ...defaultTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
