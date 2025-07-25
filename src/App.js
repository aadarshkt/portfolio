import About from "./components/About";
import Body from "./components/Body";
import CodingCompetitions from "./components/CodingCompetitions";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Cover from "./components/Cover";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 relative">
        <Cover />
        <div className="relative z-10">
          <Header />
          <Body />
        </div>
      </div>
      <div className="flex p-10 bg-white dark:bg-gray-800 relative z-10">
        <About />
      </div>
      <div className="flex p-10 bg-gray-50 dark:bg-gray-900 relative z-10">
        <Skills />
      </div>
      <div className="flex p-10 bg-white dark:bg-gray-800 relative z-10">
        <CodingCompetitions />
      </div>
      <div className="flex p-10 w-full bg-gray-800 dark:bg-gray-900 relative z-10">
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
