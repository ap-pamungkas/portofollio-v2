import React from 'react';
import FadeIn from '../components/FadeIn';
import awardsData from '../data/awards.data';
import { FaFilePdf, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

export default function Awards() {
  return (
    <section 
      id="awards" 
      className="bg-neutral-800 text-white p-8 md:p-24"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="left">
          <div className="flex items-center mb-12"> 
            <h2 className="text-4xl font-serif font-bold mr-4">penghargaan</h2>
            <div className="h-0.5 bg-[#AAEDEF] grow"></div> 
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 hover:border-[#AAEDEF] transition-all duration-300 group shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#AAEDEF] group-hover:text-neutral-900 transition-colors duration-300">
                    {award.type === 'pdf' ? <FaFilePdf size={24} /> : <FaAward size={24} />}
                  </div>
                  <span className="text-sm font-bold text-neutral-500">{award.year}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#AAEDEF] transition-colors">
                  {award.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  {award.issuer}
                </p>

                <a 
                  href={award.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#AAEDEF] hover:underline"
                >
                  Lihat Sertifikat <FaExternalLinkAlt className="ml-2" size={12} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
