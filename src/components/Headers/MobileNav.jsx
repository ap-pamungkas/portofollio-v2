
export default function MobileNav({ open, onClose , activeSection}) {
  if (!open) return null;
  const getNavLinkClass = (sectionId) => {
    
    let className = "nav-item opacity-75 hover:opacity-100 transition-opacity duration-300 relative group"; 
    
    
    if (activeSection === sectionId) {
      
      className += " !opacity-100 text-[#AAEDEF] font-bold"; 
    }
    return className;
  };
  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-black px-4 pb-4">
      <nav onClick={onClose}>
        <ul className="flex flex-col space-y-3 mt-3">
         <li><a href="#home" className={getNavLinkClass('home')}>HOME</a></li>
          <li><a href="#about" className={getNavLinkClass('about')}>ABOUT</a></li>
          <li><a href="#projects" className={getNavLinkClass('projects')}>PROJECTS</a></li>
          <li><a href="#contact" className={getNavLinkClass('contact')}>CONTACT ME</a></li>
        </ul>
     
      </nav>
    </div>
  )
}