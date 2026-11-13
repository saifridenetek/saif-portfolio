import React from 'react';
import { leadershipHighlight } from '../data/portfolioData';

export default function GitLabLeadership() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.43.43 0 0 1 .4.28L8 10h8l2.5-7.72a.43.43 0 0 1 .4-.28.42.42 0 0 1 .39.19l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.91z"/>
            </svg>
            {leadershipHighlight.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {leadershipHighlight.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {leadershipHighlight.description}
          </p>
        </div>

        {/* 2 PFE Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipHighlight.projects.map((proj) => (
            <div 
              key={proj.id}
              className="relative flex flex-col justify-between rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-orange-500/40 p-7 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5 group"
            >
              {/* Top Bar with Platform Badge and Repo Link */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-950/40 border border-orange-500/30 text-orange-400 text-xs font-mono font-medium">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.43.43 0 0 1 .4.28L8 10h8l2.5-7.72a.43.43 0 0 1 .4-.28.42.42 0 0 1 .39.19l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.91z"/>
                    </svg>
                    GitLab Repository
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Lead Maintainer
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm font-medium text-teal-400 mb-4">
                  {proj.role}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="mb-6 bg-slate-900/80 rounded-xl p-4 border border-slate-800/80">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Architecture & DevOps Highlights
                  </h4>
                  <ul className="space-y-2">
                    {proj.architecture.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-orange-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tags & Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm shadow-md transition-all group-hover:scale-[1.01]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2a.43.43 0 0 1 .4.28L8 10h8l2.5-7.72a.43.43 0 0 1 .4-.28.42.42 0 0 1 .39.19l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.91z"/>
                  </svg>
                  <span>Accéder au Repository GitLab</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
