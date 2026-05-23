export const stagger = { tight: 0.06, normal: 0.1, loose: 0.15 }
export const defaultTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }

export const variants = {
  fadeUp:    { hidden: { opacity: 0, y: 24 },      visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },              visible: { opacity: 1 } },
  scaleIn:   { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -30 },      visible: { opacity: 1, x: 0 } },
}
