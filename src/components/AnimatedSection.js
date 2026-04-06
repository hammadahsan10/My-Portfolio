import { motion, useReducedMotion } from "framer-motion";

/* Softer “premium” ease — long deceleration */
const ease = [0.16, 1, 0.3, 1];

const variants = {
  hero: {
    initial: { opacity: 0, y: 28, scale: 0.992 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  fromLeft: {
    initial: { opacity: 0, x: -44 },
    animate: { opacity: 1, x: 0 },
  },
  fromRight: {
    initial: { opacity: 0, x: 44 },
    animate: { opacity: 1, x: 0 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  zoomSoft: {
    initial: { opacity: 0, y: 32, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
};

const viewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -14% 0px",
};

const AnimatedSection = ({
  children,
  id,
  className,
  variant = "fadeUp",
  hero = false,
  "aria-label": ariaLabel,
}) => {
  const reduceMotion = useReducedMotion();
  const v = variants[variant] || variants.fadeUp;

  if (reduceMotion) {
    return (
      <div id={id} className={className} role="region" aria-label={ariaLabel}>
        {children}
      </div>
    );
  }

  if (hero) {
    return (
      <motion.div
        id={id}
        className={className}
        role="region"
        aria-label={ariaLabel}
        initial={v.initial}
        animate={v.animate}
        transition={{ duration: 1.05, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      role="region"
      aria-label={ariaLabel}
      initial={v.initial}
      whileInView={v.animate}
      viewport={viewport}
      transition={{ duration: 0.78, ease }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
