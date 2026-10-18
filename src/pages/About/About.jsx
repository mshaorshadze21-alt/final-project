import AboutHero from "../../components/AboutPage/AboutHero/AboutHero"
import HowItWorks from "../../components/AboutPage/HowItWorks/HowItWorks"
import HomeIntro from "../../components/HomePage/HomeIntro"
import "./about.css"


const About = () => {
  return (
    <div className="about-page">
      <AboutHero/>
      <HomeIntro/>
      <HowItWorks/>
    </div>
  )
}

export default About