export const duration = { fast: 0.3, medium: 0.5, slow: 0.8 };

export const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  out: [0, 0, 0.2, 1],
};

export const stagger = { tight: 0.06, normal: 0.1, loose: 0.15 };

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
};

export const defaultTransition = {
  duration: duration.medium,
  ease: ease.smooth,
};
