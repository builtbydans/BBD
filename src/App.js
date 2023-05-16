import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "darkmode" : "lightmode"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero />
    </div>
  );
}

export default App;
