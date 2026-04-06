import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from "react-hot-toast";

const ease = [0.16, 1, 0.3, 1];

const Form = () => {
  const secretKey = "35ea19f7-fba5-49ca-93d7-8fe931677c86";
  const reduceMotion = useReducedMotion();

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
              color: "white",
              background: "green",
            },
          },
          error: {
            style: {
              color: "white",
              background: "red",
            },
          },
        }}
      />
      <motion.form
        className="contactForm contact-form-card"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.68, ease }}
        onSubmit={handleSubmit}
      >
        <div className="contact-form-card__head">
          <h4 className="contact-form-card__title">Send a message</h4>
          <p className="contact-form-card__subtitle">Share your project idea or question — I’ll reply as soon as I can.</p>
        </div>

        <div className="contact-form-fields">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="contact-form-label" htmlFor="contactName">
                Name
              </label>
              <input
                type="text"
                className="formControl"
                onChange={handleChange}
                value={formData.name}
                id="contactName"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label className="contact-form-label" htmlFor="contactEmail">
                Email
              </label>
              <input
                type="email"
                className="formControl"
                onChange={handleChange}
                value={formData.email}
                id="contactEmail"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="col-12">
              <label className="contact-form-label" htmlFor="contactSubject">
                Subject
              </label>
              <input
                type="text"
                className="formControl"
                onChange={handleChange}
                value={formData.subject}
                id="contactSubject"
                name="subject"
                placeholder="What is this about?"
                required
              />
            </div>
            <div className="col-12">
              <label className="contact-form-label" htmlFor="contactMessage">
                Message
              </label>
              <textarea
                className="formControl formControl--message"
                onChange={handleChange}
                value={formData.message}
                name="message"
                id="contactMessage"
                rows={5}
                placeholder="Tell me more about your project or inquiry…"
                required
              />
            </div>
          </div>

          <div className="contact-form-actions">
            <button type="submit" className="btn contact-form-submit">
              {success ? "Sent — thank you!" : "Send message"}
            </button>
          </div>
        </div>
      </motion.form>
    </>
  );
};

export default Form;
