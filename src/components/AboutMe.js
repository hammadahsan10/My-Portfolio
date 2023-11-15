import aboutMeImg from "../images/mypic.jpg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
 import resume from "../pages/about/Hammad Ahsan's Resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

  return (
    <>

      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-4"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src={aboutMeImg} alt={name} className="img-top"/>
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-8"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >

            <div className="contentContainer">
              <h4>Nice to meet you</h4>
              <h5>Hello! I'm Hammad Ahsan, a dedicated Front-end-Developer with 2 years of experience as React Developer.</h5>
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
                <button className="btn downloadCV" onClick={handleDownload}> {downloading}
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
