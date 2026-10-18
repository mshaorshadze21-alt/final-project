import "./Hero.css"
import Button from "../buttons/Button"
import heroImage from "./../../assets/heroImageDark.png"
import paw from "../../assets/paw.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">
          ABOUT PETCARE
        </span>

        <h1>Better care for happier pets.</h1>

        <p>
          PetCare brings pet owners, caregivers,
          and pet care services together in one
          simple and convenient platform.
        </p>

        <Button text="Explore Services"/>
      </div>

      <div className="hero-image">
        <img
          src={heroImage} alt="Hero Image"
        />
      </div>
      <span className="hero-paw">
        <img src={paw} alt="paw"/>
        <img src={paw} alt="paw"/>
      </span>
    </section>
  )
}

export default Hero