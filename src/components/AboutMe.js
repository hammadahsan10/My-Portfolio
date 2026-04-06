import aboutMeImg from "../images/mypic.jpg";
import { motion, useReducedMotion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useState, useEffect } from "react";
import resume from "../pages/about/Hammad Ahsan's Resume.pdf";

const ease = [0.16, 1, 0.3, 1];

const AboutMe = ({ name, email, location, availability, brand }) => {
  const reduceMotion = useReducedMotion();
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Hammad Ahsan's Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  const imgAnim = reduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, x: -32 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.62, ease },
      };

  const textAnim = reduceMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, x: 32 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.62, ease, delay: 0.08 },
      };

  return (
    <>
      <div className="aboutContainer container">
        <div className="row">
          <motion.div className="personalImage col-12 col-lg-4" {...imgAnim}>
            <img src={aboutMeImg} alt={name} className="img-top" />
          </motion.div>
          <motion.div className="personalInfo col-12 col-lg-8" {...textAnim}>
            <div className="contentContainer">
              <h4>Nice to meet you</h4>
              <div className="contentDescription">
                <p>{brand}</p>
              </div>
              <div className="infoContainer">
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Name:</span>
                    <p>Hammad Ahsan</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Email:</span>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Location:</span>
                    <p>{location}</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Availability:</span>
                    <p>{availability}</p>
                  </div>
                </div>
              </div>

              <div className="buttonContainer">
                <button className="btn downloadCV" onClick={handleDownload}>
                  {downloading}
                  {downloading ? "Downloading..." : "Download Resume"}
                </button>{" "}
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
