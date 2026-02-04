import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";


function App() {
  // Console message for F12 people
  useEffect(() => {
    console.log(
      '%c👀 I see you wanna see the code! 👨‍💻',
      'color: #FFD700; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'
    );
    console.log(
      '%cFeel free to check out the source code on GitHub: https://github.com/ibrahimyondem/My-Portfolio',
      'color: #FFA500; font-size: 14px;'
    );
    console.log(
      '%c💼 Let\'s connect!',
      'color: #FFD700; font-size: 14px; font-weight: bold;'
    );
  }, []);

  // Prevent right-click menu
  useEffect(() => {
    const handleContextMenu = (e) =>{
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;