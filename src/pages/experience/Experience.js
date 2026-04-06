import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import experienceData from "./experienceData";

const ease = [0.16, 1, 0.3, 1];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="experience">
      <div className="experience-inner container">
        <div className="experience-intro">
          <PageHeader title="Experience" description="Professional journey" />
        </div>

        {reduceMotion ? (
          <div className="experience-list">
            {experienceData.map((job) => (
              <article key={job.id} className="experience-card">
                <ExperienceCardContent job={job} />
              </article>
            ))}
          </div>
        ) : (
          <motion.div
            className="experience-list"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
          >
            {experienceData.map((job) => (
              <motion.article
                key={job.id}
                className="experience-card"
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.42, ease } }}
              >
                <ExperienceCardContent job={job} />
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

function ExperienceCardContent({ job }) {
  return (
    <>
      <header className="experience-card__header">
        <div className="experience-card__title-block">
          <h4 className="experience-card__role">
            {job.role}
            <span className="experience-card__sep"> | </span>
            <span className="experience-card__company">{job.company}</span>
            <span className="experience-card__sep"> | </span>
            <span className="experience-card__location">{job.location}</span>
          </h4>
        </div>
        <time className="experience-card__period" dateTime={job.period}>
          {job.period}
        </time>
      </header>

      <div className="experience-card__divider" aria-hidden />

      <ul className="experience-card__bullets">
        {job.bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
