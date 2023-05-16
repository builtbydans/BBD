import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
import Bio from './components/Bio';
import Projects from './components/Projects';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "darkmode" : "lightmode"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
