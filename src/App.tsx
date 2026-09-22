import About from "./components/About";
import Achievements from "./components/Achievements";
import BackToTop from "./components/BackToTop";
import CodingCompetitions from "./components/CodingCompetitions";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingCompetitions />
        <Achievements />
      </main>

      <Contact />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
