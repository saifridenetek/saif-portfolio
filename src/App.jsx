import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GitLabLeadership from './components/GitLabLeadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationExperience from './components/EducationExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GitLabLeadership />
        <Projects />
        <Skills />
        <EducationExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

