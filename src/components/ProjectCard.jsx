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
    <div className="bg-neutral-700 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-[#AAEDEF] mb-3">{project.title}</h3>

      {/* Area Deskripsi */}
      <p className="text-neutral-300 mb-4 transition-all duration-300">
        {displayedDescription}
        {isTooLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#AAEDEF] font-semibold ml-1 hover:underline focus:outline-none text-sm"
          >
            {isExpanded ? 'Sembunyikan' : 'Selengkapnya'}
          </button>
        )}
      </p>

      {/* Daftar Teknologi */}
      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-medium bg-neutral-600 px-3 py-1 rounded-full text-neutral-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex space-x-4 pt-4 border-t border-neutral-600">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#AAEDEF] text-neutral-900 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-sm"
        >
          <FaExternalLinkAlt className="mr-2" /> View Demo
        </a>

       
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#AAEDEF] text-neutral-900 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors text-sm"
          >
            <FaGithub className="mr-2" /> View Source
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
