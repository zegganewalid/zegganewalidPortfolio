import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/NavBar";
import { About } from "./components/About/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Experience/Experience";
import { Services } from "./components/Services/Services";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./components/Contact/Contact";
import { ScrollToTopButton } from "./components/Scrool/ScrollToTopButton";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTopButton /> {/* Ajout du composant ScrollToTopButton ici */}
    </div>
  );
}

export default App;
