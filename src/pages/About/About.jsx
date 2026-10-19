import AboutHero from "../../components/AboutPage/AboutHero/AboutHero"
import AboutIntro from "../../components/AboutPage/AboutIntro/AboutIntro"
import HowItWorks from "../../components/AboutPage/HowItWorks/HowItWorks"

import "./about.css"


const About = () => {
  return (
    <div className="about-page">
      <AboutHero/>
      <AboutIntro/>
      <HowItWorks/>
    </div>
  )
}

export default About