import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/NavBar/NavBar";
import { About } from "./components/About/About";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
