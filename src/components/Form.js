import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {

  const secretKey = '35ea19f7-fba5-49ca-93d7-8fe931677c86'
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: secretKey,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the access key is included in the payload
    const data = JSON.stringify({
      ...formData,
      access_key: secretKey,
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data,
      });

      const result = await response.json();
      if (result?.success === true) {
        toast.success("Message Sent Successfully!");
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          access_key: secretKey,
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
      console.log("Error:", err);
    }
  };

  return (

    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              color: 'white',
              background: 'green',
            },
          },
          error: {
            style: {
              color: 'white',
              background: 'red',
            },
          },
        }}
      />
      <motion.form
        ref={ref}
        className="contactForm"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onSubmit={handleSubmit}
      >
        <h4 className="contentTitle">Message Me</h4>
        <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
          <input
            type="text"
            className="formControl"
            onChange={handleChange}
            value={formData.name}
            id="contactName"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
          <input
            type="email"
            className="formControl"
            onChange={handleChange}
            value={formData.email}
            id="contactEmail"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12 formGroup">
          <input
            type="text"
            className="formControl"
            onChange={handleChange}
            value={formData.subject}
            id="contactSubject"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="col-12 formGroup">
          <textarea
            className="formControl"
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="contactMessage"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="col-12 formGroup formSubmit">
          <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
        </div>
      </motion.form>
    </>
  );
};

export default Form;
