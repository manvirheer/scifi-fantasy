"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { stagger } from '@/lib/animations';

export default function StaggerGroup({ children, speed = "normal", className, ...props }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger[speed] } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
