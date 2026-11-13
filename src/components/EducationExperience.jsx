import React from 'react';
import { educationHistory, experienceHistory } from '../data/portfolioData';

export default function EducationExperience() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">
            Expérience & Formation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Parcours Académique & Professionnel
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Une solide formation d'ingénieur complétée par une culture de rigueur scientifique et d'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Expérience Professionnelle</h3>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-slate-800">
              {experienceHistory.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                    <span className="text-xs font-mono font-semibold text-teal-400">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-slate-300 mb-3">
                      {exp.company} <span className="text-slate-500">• {exp.location}</span>
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-blue-400">▹</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-teal-600/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Formation Académique</h3>
            </div>

            <div className="space-y-8 pl-4 border-l-2 border-slate-800">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-500 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                    <span className="text-xs font-mono font-semibold text-blue-400">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-teal-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

