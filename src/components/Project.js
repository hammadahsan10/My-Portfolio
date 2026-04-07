import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";

const Project = ({ technologies, title, image, color, id, github, deployed, description }) => {
  const hexToRgba = (hex, alpha) => {
    const validHex = hex?.replace("#", "");
    if (!validHex || validHex.length !== 6) return `rgba(15, 23, 42, ${alpha})`;
    const r = parseInt(validHex.slice(0, 2), 16);
    const g = parseInt(validHex.slice(2, 4), 16);
    const b = parseInt(validHex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px 15% 0px",
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? 40 : -40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}
      className="col-12 col-sm-12 col-lg-6 col-xl-4"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(135deg, ${hexToRgba(color, 0.95)} 0%, ${hexToRgba(color, 0.78)} 50%, rgba(15, 23, 42, 0.92) 100%)`,
        }}
        className="projectCard d-flex align-items-center justify-content-center project-card-inner"
        onClick={handleOpenModal}
      >
        <div className="textWrap project-card-text d-flex flex-column justify-content-center align-items-center">
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">Project Details &#8594;</span>
        </div>
        <div className="imageContainer project-card-media d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="project-modal-content"
        overlayClassName="project-modal-overlay"
        closeTimeoutMS={240}
        contentLabel={title}
      >
        <div className="project-modal-inner">
          <button
            type="button"
            className="project-modal-close"
            onClick={handleCloseModal}
            aria-label="Close project details"
          >
            <img src={closeModal} alt="" width={18} height={18} />
          </button>

          <div className="project-modal-accent" aria-hidden />

          <header className="project-modal-header">
            <h2 className="project-modal-title">{title}</h2>
            <p className="project-modal-tech">{technologies}</p>
          </header>

          <div className="project-modal-body">
            {description.split("\n").map((paragraph, i) => (
              <p key={i} className="project-modal-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="project-modal-footer">
            {github ? (
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn project-modal-btn project-modal-btn--secondary"
                onClick={() => {
                  window.location.href = github;
                }}
              >
                Get code
              </motion.button>
            ) : null}
            {deployed ? (
              <motion.a
                href={deployed}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn project-modal-btn project-modal-btn--primary"
              >
                View site
              </motion.a>
            ) : null}
          </footer>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Project;
