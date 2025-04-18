import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { LogoAnimation } from './components/sections/LogoAnimation';
import { Projects } from './components/sections/Projects';

import "./index.css"
import { Contact } from './components/sections/Contact';
import Footer from './components/sections/Footer';
import CyberSecuritySkills from './components/sections/CyberSecuritySkills';




function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div 
          className={`min-h-screen transition-opacity duration-700 ${ 
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100 `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <CyberSecuritySkills />
        <LogoAnimation />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </>

  );

}

export default App
