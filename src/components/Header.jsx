import "../styles/header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/Logos/Logo_White.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logoImage} alt="Logo" />
        </NavLink>
      </div>

      <div className="nav-links">
        <nav>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </nav>
      </div>

      <div className="social-section">
        <div className="social-icons">
          <div className="tiktok-icon">
            <i className="fab fa-tiktok"></i>
          </div>
          <div className="instagram-icon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="social-text">
          <div>
            <span>AVAILABLE FOR FREELANCE WORK</span>
          </div>
          <div>
            <span>SHUTTERBUG EXTRAORDINAIRE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
