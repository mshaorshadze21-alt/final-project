import "./HomeHero.css"
import heroImage from "../../assets/homehero-image.png"
import Button from "../buttons/Button"
import "../buttons/Button.css"

const HomeHero = () => {
  return (
    // <div className="hero">HomeHero</div>
    <section className="home-hero">
        <div className="home-hero-content">
            <h1>Your pet, <br/> our priority</h1>
            <div className="buttons">
              <Button variant="secondary" children="Learn More"/>
              <Button variant="primary" children="Explore Services"/>
            </div>
        </div>
        <div className="home-hero-image">
            {/* <img src="https://placehold.co/600x400" alt="Hero Image" /> */}
            <img src={heroImage} alt="Hero Image" />
        </div>
    </section>
  )
}

export default HomeHero