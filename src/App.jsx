import Home from "./component/Home"
import Navbar from "./component/Navbar"
import SocialMedia from "./component/SocialMedia"
import Skills from "./component/Skills"
import Projects from "./component/Projects"
import About from "./component/About"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <SocialMedia />
      <Skills />
      <Projects />
      <About />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
