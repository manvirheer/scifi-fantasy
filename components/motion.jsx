"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { variants, defaultTransition, stagger } from '@/lib/animations'

export function FadeIn({ children, variant = "fadeUp", delay = 0, className, ...props }) {
  const r = useReducedMotion()
  return <motion.div initial={r ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={variants[variant]} transition={{ ...defaultTransition, delay }} className={className} {...props}>{children}</motion.div>
}

export function StaggerGroup({ children, speed = "normal", className, ...props }) {
  const r = useReducedMotion()
  return <motion.div initial={r ? false : "hidden"} whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger[speed] } } }} className={className} {...props}>{children}</motion.div>
}

export function StaggerItem({ children, variant = "fadeUp", className, ...props }) {
  return <motion.div variants={variants[variant]} transition={defaultTransition} className={className} {...props}>{children}</motion.div>
}
