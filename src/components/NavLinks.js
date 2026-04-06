import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSectionNav } from "../hooks/useSectionNav";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const goToSection = useSectionNav();

  const isActive = (id) => {
    const hash = location.hash || "";
    if (id === "home") {
      return !hash || hash === "#home";
    }
    return hash === `#${id}`;
  };

  const handleNav = (e, id) => {
    e.preventDefault();
    goToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <button className="dropdown-toggle" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={isActive(id) ? "active" : ""}
            onClick={(e) => handleNav(e, id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavLinks;
