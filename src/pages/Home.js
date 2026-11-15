import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Landing from "./landing/Landing";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import "./skills/Skills.css";

const Home = ({ personalDetails }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <main>
      <AnimatedSection
        id="home"
        className="page-section page-section--hero"
        variant="hero"
        hero
        aria-label="Home"
      >
        <Landing name={personalDetails.name} />
      </AnimatedSection>

      <AnimatedSection id="about" className="page-section" variant="fromLeft" aria-label="About">
        <About
          name={personalDetails.name}
          location={personalDetails.location}
          email={personalDetails.email}
          availability={personalDetails.availability}
          brand={personalDetails.brand}
        />
      </AnimatedSection>

      <AnimatedSection id="experience" className="page-section" variant="fromRight" aria-label="Experience">
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="portfolio" className="page-section" variant="zoomSoft" aria-label="Projects">
        <Portfolio />
      </AnimatedSection>

      <AnimatedSection id="skills" className="page-section" variant="fromLeft" aria-label="Skills">
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="contact" className="page-section" variant="fadeUp" aria-label="Contact">
        <Contact
          name={personalDetails.name}
          location={personalDetails.location}
          email={personalDetails.email}
        />
      </AnimatedSection>
    </main>
  );
};

export default Home;
