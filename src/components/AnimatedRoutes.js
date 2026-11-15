import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const AnimatedRoutes = ({ personalDetails }) => {
  return (
    <Routes>
      <Route path="/" element={<Home personalDetails={personalDetails} />} />
      <Route path="/about" element={<Navigate to={{ pathname: "/", hash: "#about" }} replace />} />
      <Route path="/experience" element={<Navigate to={{ pathname: "/", hash: "#experience" }} replace />} />
      <Route path="/portfolio" element={<Navigate to={{ pathname: "/", hash: "#portfolio" }} replace />} />
      <Route path="/skills" element={<Navigate to={{ pathname: "/", hash: "#skills" }} replace />} />
      <Route path="/contact" element={<Navigate to={{ pathname: "/", hash: "#contact" }} replace />} />
      <Route path="/page-not-found" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AnimatedRoutes;
