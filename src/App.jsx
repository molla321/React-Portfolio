import About from "./Components/About/About"
// import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Qualifiaction from "./Components/Qualification/Qualifiaction"
import Services from "./Components/Services/Services"
import Skills from "./Components/Skills/Skills"
import Testimonials from "./Components/Testimonials/Testimonials"
import Bontent from './Components/Contact/Bontent';
import Portfolio from "./Components/Portfolio/Portfolio"
import Footer from "./Components/Footers/Footer"


function App() {
  

  return (
    <>
      <Header />


      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifiaction />
        <Testimonials />
        {/* <Contact /> */}
        <Portfolio />
        <Bontent />
        <Footer />
      </main>
      
    </>
  )
}

export default App
