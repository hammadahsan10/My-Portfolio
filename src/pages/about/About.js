import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability }) => {

  return (

    <section className="about">
      <div className="experience-inner container">
        <PageHeader title="About me" description="Get to know me" />
      </div>
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>

  );
};

export default About;
