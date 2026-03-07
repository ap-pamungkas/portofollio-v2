import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const MAX_LENGTH = 100;

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTooLong = project.description.length > MAX_LENGTH;
  const displayedDescription = isTooLong && !isExpanded
    ? project.description.substring(0, MAX_LENGTH) + '...'
    : project.description;

  return (
    <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700/50 hover:border-[#AAEDEF]/50 transition-all duration-500 group flex flex-col h-full shadow-lg hover:shadow-[#AAEDEF]/10">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-[#AAEDEF] transition-colors duration-300">
          {project.title}
        </h3>
      </div>

      {/* Area Deskripsi */}
      <div className="flex-grow">
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {displayedDescription}
          {isTooLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#AAEDEF] font-semibold ml-2 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Sembunyikan' : 'Selengkapnya'}
            </button>
          )}
        </p>
      </div>

      {/* Daftar Teknologi */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-wider font-bold bg-neutral-900/50 text-[#AAEDEF] border border-[#AAEDEF]/20 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex gap-4">
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center bg-white text-black font-bold py-2.5 px-4 rounded-xl hover:bg-[#AAEDEF] transition-all duration-300 transform group-hover:scale-[1.02] text-xs shadow-md"
          >
            <FaExternalLinkAlt className="mr-2" size={12} /> LIVE DEMO
          </a>
        )}

        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center bg-neutral-900 text-white font-bold py-2.5 px-4 rounded-xl border border-neutral-700 hover:border-[#AAEDEF] transition-all duration-300 transform group-hover:scale-[1.02] text-xs shadow-md"
          >
            <FaGithub className="mr-2" size={14} /> SOURCE
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
