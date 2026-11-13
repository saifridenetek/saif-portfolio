import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center font-bold text-white text-lg shadow-md group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-wide group-hover:text-teal-400 transition-colors">
                Saif Eddine RIDENE
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Cloud & DevSecOps Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              À Propos
            </a>
            <a href="#leadership" className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              GitLab Lead
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Projets
            </a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Compétences
            </a>
            <a href="#timeline" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Parcours
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </a>

            {/* Resume button */}
            <a 
              href={personalInfo.resumeFr} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md hover:shadow-blue-500/25 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV (PDF)
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white py-1"
          >
            À Propos
          </a>
          <a 
            href="#leadership" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-teal-400 py-1"
          >
            GitLab Leadership (2 PFE)
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white py-1"
          >
            Projets
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white py-1"
          >
            Compétences
          </a>
          <a 
            href="#timeline" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white py-1"
          >
            Parcours
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-white py-1"
          >
            Contact
          </a>
          <div className="pt-2 flex gap-3">
            <a 
              href={personalInfo.resumeFr} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              CV Français
            </a>
            <a 
              href={personalInfo.resumeEn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg"
            >
              CV English
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
