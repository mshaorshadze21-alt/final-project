import "./home.css"
import HomeHero from "../../components/HomePage/HomeHero"
import HomeIntro from "../../components/HomePage/HomeIntro"
import HomeServices from "../../components/HomePage/HomeServices"




const Home = () => {
  return (
    <div className="home-page">
      <div className="circle"></div>
      <HomeHero/>
      <HomeIntro/>
      <HomeServices/>
    </div>
  )
}

export default Home