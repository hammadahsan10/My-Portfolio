import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hammad Ahsan",
    location: "Islamabad, Pakistan",
    email: "hammadahsan07@gmail.com",
    availability: "Open for work",
    brand:
      "Highly skilled React JS Developer with over 2 years of experience. Currently Working as a React Developer at App-In-Snap with over 1.5 years of experience, having a strong focus on API integration and expertise in building scalable, responsive web applications. Committed to contributing to the thriving tech industry, I embrace new challenges and seek opportunities for continuous professional growth"
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
