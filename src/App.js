import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import TechToolBox from "./components/TechToolBox";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
   <NavBar />
   <Home />
   <About />
   <SocialLinks /> 
  <Projects />
  <TechToolBox />
  <Contact />
   </div>
  )
}

export default App;
