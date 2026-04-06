import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const ContactInfo = ({ name, email, location }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="contactInfo"
      initial={reduceMotion ? false : { opacity: 0, x: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.68, ease, delay: 0.1 }}
    >
      <h4 className="contentTitle">Contact Information</h4>
      <p className="infoDescription">Open for opportunities. Let's connect and build something awesome together! </p>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Name</h6>
              <span className="infoValue">{name}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-location-pin "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Location</h6>
              <span className="infoValue">{location}</span>
            </div>
          </div>

          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Contact No.</h6>
              <span className="infoValue">03365290121</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-envelope "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Email</h6>
              <span className="infoValue">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;
