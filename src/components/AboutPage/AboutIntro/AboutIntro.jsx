import "./AboutIntro.css"
import Button from "../../buttons/Button"
import "../../buttons/Button.css"
import image from "../../../assets/aboutintro-image.png"

const AboutIntro = () => {
  return (
    <section className="about-intro">
        <div className="about-intro-image">
            <img src={image} alt="intro-image" />
        </div>
        <div className="about-intro-content">
            <h2>Happy pets, happy humans</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis cupiditate veritatis voluptatum, reprehenderit dolor omnis nemo praesentium atque repellat minima et repudiandae quasi similique quam accusamus quos veniam assumenda?</p>
            <Button>Learn More</Button>
        </div>
        <div className="about-circle">

        </div>
    </section>
  )
}

export default AboutIntro