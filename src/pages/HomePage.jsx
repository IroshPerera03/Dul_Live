import Logo from "../assets/Logos/Logo_White.png";
import "../styles/homePage.css";
const HomePage = () => {
  return (
    <div className="home">
      <div className="home-hero container">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default HomePage;
