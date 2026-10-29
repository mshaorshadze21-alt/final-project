import "./AboutHero.css"
import heroImage from "../../../assets/heroImageDark.webp"
import Paw from "../../../assets/paw.svg?react";
import Button from "../../buttons/Button"
import { useNavigate } from "react-router-dom";

const AboutHero = () => {

  const navigate = useNavigate();

  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <span className="about-hero-label">
          ABOUT PETCARE
        </span>

        <h1>Better care for happier pets.</h1>

        <p>
          PetCare brings pet owners, caregivers,
          and pet care services together in one
          simple and convenient platform.
        </p>

        <Button children="Explore Services" onClick={() => navigate ("/services")}/>
      </div>

      <div className="about-hero-image">
        <img
          src={heroImage} alt="Hero Image"
        />
      </div>
        <Paw className="paw-icon"/>
        <Paw className="paw-icon"/>
        {/* <div className="about-hero-circle">

        </div> */}
    </section>
  )
}

export default AboutHero