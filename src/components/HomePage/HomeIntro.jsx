import "./HomeIntro.css"
import image from "../../assets/homeIntro-image.png"
import Button from "../buttons/Button"
import "../buttons/Button.css"


const HomeIntro = () => {
  return (
    <section className="home-intro">
        <div className="home-intro-image">
            <img src={image} alt="intro-image" />
        </div>
        <div className="home-intro-content">
            <h2>Happy pets, happy humans</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis cupiditate veritatis voluptatum, reprehenderit dolor omnis nemo praesentium atque repellat minima et repudiandae quasi similique quam accusamus quos veniam assumenda?</p>
            <Button>Learn More</Button>
        </div>
    </section>
  )
}

export default HomeIntro