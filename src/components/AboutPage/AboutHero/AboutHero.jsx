import "./AboutHero.css"
import heroImage from "../../../assets/heroImageDark.png"
import paw from "../../../assets/paw.svg"
import Button from "../../buttons/Button"

const AboutHero = () => {
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

        <Button text="Explore Services"/>
      </div>

      <div className="about-hero-image">
        <img
          src={heroImage} alt="Hero Image"
        />
      </div>
      <span className="about-hero-paw">
        <img src={paw} alt="paw"/>
        <img src={paw} alt="paw"/>
      </span>
    </section>
  )
}

export default AboutHero