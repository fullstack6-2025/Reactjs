import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Footer from "../pages/Footer"
import Company from "../pages/Company"
import Gallery from "../pages/Gallery"

const Router = () => {
  return (
    <>

    <Routes>
      <Route path = "/" element= {<Home/>}></Route>
      <Route path = "/about" element= {<About />}></Route>
      <Route path = "/footer" element= {<Footer />}></Route>
      <Route path = "/company" element= {<Company />}></Route>
      <Route path = "/gallary" element= {<Gallery/>}></Route>
    </Routes>

    </>
  )
}

export default Router