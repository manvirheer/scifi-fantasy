"use client";

import { motion } from 'framer-motion';
import { variants, defaultTransition } from '@/lib/animations';

export default function StaggerItem({ children, variant = "fadeUp", className, ...props }) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={defaultTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
