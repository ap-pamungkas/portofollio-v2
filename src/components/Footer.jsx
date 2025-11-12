// src/components/Footer.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    // Menggunakan bg-neutral-900 (sama dengan ContactMe) atau yang lebih gelap
    <footer className="bg-neutral-900 text-white p-6 md:p-8 border-t border-neutral-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
        
        {/* Hak Cipta */}
        <p className="mb-3 md:mb-0">
          © {currentYear} **AGPRA**. All rights reserved. Developed by Putra.
        </p>

        {/* Ikon Sosial Media (Duplikasi dari Header, tanpa teks) */}
        <ul className="flex items-center space-x-6">
          <li>
            <a href="https://www.instagram.com/_ap_pemungkas30/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#AAEDEF] transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ap-pamungkas" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#AAEDEF] transition-colors">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/agustinus-putra-pemungkas-0b412427b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#AAEDEF] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}