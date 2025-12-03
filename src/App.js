import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hammad Ahsan",
    location: "Islamabad, Pakistan",
    email: "hammadahsan07@gmail.com",
    availability: "Open for work",
    brand:
    "Hi, myself Hammad, a passionate and driven Full-Stack Developer with 4 years of experience in building modern web applications using React.js, Next.js, Node.js, Express, MongoDB, MySQL, and PostgreSQL. I have strong expertise in both frontend development, creating responsive, high-performing user interfaces and backend development, designing secure, scalable APIs and efficient database structures. I thrive on learning and working with new and emerging technologies, constantly aiming to solve complex problems and create reliable, robust solutions. My goal is to contribute to innovative projects that make an impact while continuously growing and refining my skills. Let’s connect to explore opportunities and collaborate on impactful projects!"
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
