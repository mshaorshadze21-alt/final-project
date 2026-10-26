import "./HomeIntro.css"
import image from "../../assets/homeIntro-image.png"
import Button from "../buttons/Button"
import "../buttons/Button.css"
import { useNavigate } from "react-router-dom"


const HomeIntro = () => {

  const navigate = useNavigate();
  
  return (
    <section className="home-intro">
        <div className="home-intro-image">
            <img src={image} alt="intro-image" />
            <div className="home-intro-circle"></div>
        </div>
        <div className="home-intro-content">
            <h2>Happy pets, happy humans</h2>
            <p>We believe happy pets make happy people. That's why PetCare connects you with caring people and trusted services to make everyday pet care easier. From daily walks to professional care, we're here to help your furry friend live a healthier, happier life.</p>
            <Button onClick={() => navigate ("/about")}>Learn More</Button>
        </div>
    </section>
  )
}

export default HomeIntro