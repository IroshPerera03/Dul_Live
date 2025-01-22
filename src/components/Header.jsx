import "../styles/header.css";
import logoImage from "../assets/Logos/Logo_White.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="">Projects</a>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#contact">Contact Me</a>
      </nav>
      <div className="social-section">
        <div className="social">
          <i className="fab fa-tiktok"></i>
          <span>SHUTTERBUG EXTRAORDINAIRE | DUL LIVE</span>
        </div>
        <div className="social">
          <i className="fab fa-instagram"></i>
          <span>AVAILABLE FOR FREELANCE WORK | HIRE ME</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
