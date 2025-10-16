import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Achievements from './components/Achievements.tsx';
import Skills from './components/Skills.tsx';
import Resume from './components/Resume.tsx';
import Contact from './components/Contact.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
