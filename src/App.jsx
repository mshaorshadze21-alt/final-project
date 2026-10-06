import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Caregivers from "./pages/Caregivers/Caregivers"
import Businesses from "./pages/Businesses/Businesses"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Nav from "./layouts/Nav"
import NotFound from "./layouts/NotFound"


function App() {
  

  return (
    <>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="caregivers" element={<Caregivers/>}/>
          <Route path="businesses" element={<Businesses/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
