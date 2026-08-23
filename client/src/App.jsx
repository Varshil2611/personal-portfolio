import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

import ProjectStatus from "./pages/ProjectStatus";
import Footer from "./components/Footer";

function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Project Status Page */}
        <Route path="/project-status" element={<ProjectStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
