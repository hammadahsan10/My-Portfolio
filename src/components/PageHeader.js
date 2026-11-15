import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

const titleItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

const PageHeader = ({ title, description }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="page-heading">
        {description ? <p className="pageDescription">{description}</p> : null}
        <h3 className="pageTitle">{title}</h3>
      </div>
    );
  }

  return (
    <motion.div
      className="page-heading"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {description ? (
        <motion.p className="pageDescription" variants={item}>
          {description}
        </motion.p>
      ) : null}
      <motion.h3 className="pageTitle" variants={titleItem}>
        {title}
      </motion.h3>
    </motion.div>
  );
};

export default PageHeader;
