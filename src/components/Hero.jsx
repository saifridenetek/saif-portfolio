import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium mb-8 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Profile Image with modern glowing ring */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
              }}
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400">Saif Eddine Ridene</span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 font-mono">
          Software Engineer <span className="text-blue-400">•</span> Cloud & DevSecOps <span className="text-teal-400">•</span> Full Stack
        </p>

        {/* Description */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Engineering graduate from <strong>TEK-UP</strong> & Valedictorian in Electromechanics. 
          Architect of Cloud-native microservices, automated <strong>GitLab CI/CD</strong> pipelines, 
          <strong> Kubernetes (K3s)</strong> orchestration, and AI-driven platforms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="#leadership" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.43.43 0 0 1 .4.28L8 10h8l2.5-7.72a.43.43 0 0 1 .4-.28.42.42 0 0 1 .39.19l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.91z"/>
            </svg>
            GitLab Leadership (2 PFE)
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:border-slate-600 transition-all"
          >
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Explorer tous les projets
          </a>
          <a 
            href={personalInfo.resumeFr}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 font-medium text-sm hover:text-white hover:bg-slate-800 transition-all"
          >
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger CV
          </a>
        </div>

        {/* Quick Social & Repository Badges */}
        <div className="flex items-center gap-6 text-slate-400">
          <a 
            href={personalInfo.gitlab} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors group"
            title="Mon profil GitLab"
          >
            <svg className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.43.43 0 0 1 .4.28L8 10h8l2.5-7.72a.43.43 0 0 1 .4-.28.42.42 0 0 1 .39.19l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.91z"/>
            </svg>
            <span className="text-xs font-mono font-semibold">GitLab (RIDENESAIF)</span>
          </a>

          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
            title="Mon profil GitHub"
          >
            <svg className="w-6 h-6 text-slate-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="text-xs font-mono font-semibold">GitHub (saifridenetek)</span>
          </a>

          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
            title="Mon profil LinkedIn"
          >
            <svg className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-xs font-mono font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

