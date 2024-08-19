import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Hammad Ahsan",
    location: "Islamabad, Pakistan",
    email: "hammadahsan07@gmail.com",
    availability: "Open for work",
    brand:
    "Highly skilled MERN Stack Developer with more than 2 years of industrial experience as a React Developer and 1 year as a MERN Developer. Currently working at App-In-Snap, with a strong focus on API integration and expertise in building scalable, responsive web applications using MongoDB and Node.js on the server side. Committed to contributing to the thriving tech industry, I embrace new challenges and seek opportunities for continuous professional growth."
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
