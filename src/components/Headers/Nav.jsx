import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
export default function Nav({ activeSection     }) {
    const getNavLinkClass = (sectionId) => {
    // Kelas default (opacity rendah)
    let className = "nav-item opacity-75 hover:opacity-100 transition-opacity duration-300 relative group"; 
    
    // Jika aktif, tambahkan style khusus
    if (activeSection === sectionId) {
      // Menggunakan warna aksen (#AAEDEF)
      className += " !opacity-100 text-[#AAEDEF] font-bold"; 
    }
    return className;
  };
    return (
       <>
         {/* Navigasi Utama (Hanya terlihat di desktop) */}
        <nav className="hidden md:flex md:items-center">
        <ul className="flex items-center space-x-10 text-md font-medium">
          <li><a href="#home" className={`${getNavLinkClass('home')} text-white hover:text-gray-300 transition-colors`}>HOME</a></li>
          <li><a href="#about" className={`${getNavLinkClass('about')} text-white hover:text-gray-300 transition-colors`}>ABOUT</a></li>
          <li><a href="#projects" className={`${getNavLinkClass('projects')} text-white hover:text-gray-300 transition-colors`}>PROJECTS</a></li>
          <li><a href="#contact" className={`${getNavLinkClass('contact')} text-white hover:text-gray-300 transition-colors`}>CONTACT ME</a></li>
        </ul>
      </nav>

        {/* Ikon Sosial Media di Kanan */}
        <ul className="flex items-center space-x-6">
          <li>
            <a href="https://www.instagram.com/_ap_pemungkas30/" target='__blank' className="nav-item">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ap-pamungkas" target='__blank' className="nav-item">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/agustinus-putra-pemungkas-0b412427b" target='__blank' className="nav-item">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
        </ul>  
       </>
    )
}