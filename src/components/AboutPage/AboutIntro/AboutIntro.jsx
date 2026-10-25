import "./AboutIntro.css";
import Button from "../../buttons/Button";
import "../../buttons/Button.css";
import image from "../../../assets/homehero-dog (1).png";
import { useNavigate } from "react-router-dom";
// import cat from "../../../assets/aboutintro-cat.png"

const AboutIntro = () => {

  const navigate = useNavigate();

  return (
    <section className="about-intro">
      <div className="about-intro-image">
        <img src={image} alt="intro-image" />
      </div>
      {/* <div className="about-intro-cat">
          <img src={cat} alt="" />
        </div> */}
      <div className="about-intro-content">
        <h2>A little love, a lot of happiness.</h2>
        <p>
          We connect pet owners with caring people and trusted services, making quality pet care easier to find. From daily walks to professional care, PetCare brings everything your pet needs together in one convenient place.
        </p>
        <Button onClick={() => navigate ("/businesses")}>Learn More</Button>
      </div>
      <div className="about-circle"></div>
    </section>
  );
};

export default AboutIntro;
