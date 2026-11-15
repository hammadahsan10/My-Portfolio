import NavLinks from "./NavLinks";
import logo from "../images/hammadlogo.png";
import { useSectionNav } from "../hooks/useSectionNav";

const Header = () => {
  const goToSection = useSectionNav();

  const handleLogoClick = (e) => {
    e.preventDefault();
    goToSection("home");
  };

  return (
    <header className="header">
      <a href="#home" className="logo-link" onClick={handleLogoClick} aria-label="Go to home">
        <img className="logo" width={52} height={52} src={logo} alt="Hammad's Logo" />
      </a>
      <div className="header-nav">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
