import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import awardsData from '../data/awards.data';
import { FaFilePdf, FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const MAX_TITLE_LENGTH = 50;

function AwardCard({ award }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTooLong = award.title.length > MAX_TITLE_LENGTH;
  
  const displayedTitle = isTooLong && !isExpanded 
    ? award.title.substring(0, MAX_TITLE_LENGTH) + "..." 
    : award.title;

  return (
    <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 hover:border-[#AAEDEF] transition-all duration-300 group shadow-lg flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#AAEDEF] group-hover:text-neutral-900 transition-colors duration-300">
          {award.type === 'pdf' ? <FaFilePdf size={24} /> : <FaAward size={24} />}
        </div>
        <span className="text-sm font-bold text-neutral-500">{award.year}</span>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#AAEDEF] transition-colors leading-snug">
          {displayedTitle}
          {isTooLong && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#AAEDEF] text-xs font-semibold ml-2 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Sembunyikan' : 'Selengkapnya'}
            </button>
          )}
        </h3>
        <p className="text-neutral-400 text-sm mb-6">
          {award.issuer}
        </p>
      </div>

      <div className="mt-auto">
        <a 
          href={award.image} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-bold text-[#AAEDEF] hover:underline"
        >
          Lihat Sertifikat <FaExternalLinkAlt className="ml-2" size={12} />
        </a>
      </div>
    </div>
  );
}

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
              <AwardCard award={award} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
