import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About/>
      <Projects/>
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
