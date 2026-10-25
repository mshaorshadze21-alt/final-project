import "./HomeHero.css";
import heroImage from "../../assets/homehero-dog (3).png";
import heroCat from "../../assets/homehero-cat.png";
import Button from "../buttons/Button";
import "../buttons/Button.css";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    // <div className="hero">HomeHero</div>
    <section className="home-hero">
      <div className="home-hero-content">
        <h1>
          Your pet, <br /> our priority
        </h1>
        <div className="buttons">
          <Button
            variant="secondary"
            onClick={() => {
              console.log("Learn More clicked");
              navigate("/about");
            }}
          >
            Learn More
          </Button>
          <Button
            variant="primary"
            children="Explore Services"
            onClick={() => navigate("/services")}
          />
        </div>
      </div>
      <div className="home-hero-image">
        {/* <img src="https://placehold.co/600x400" alt="Hero Image" /> */}
        <img src={heroImage} alt="Hero Image" />
      </div>
      <div className="home-hero-cat">
        <img src={heroCat} alt="Hero Cat Image" />
      </div>
    </section>
  );
};

export default HomeHero;
