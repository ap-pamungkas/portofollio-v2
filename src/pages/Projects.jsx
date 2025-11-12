import ProjectCard from '../components/ProjectCard'; // Import komponen baru
import FadeIn from '../components/FadeIn';
// Data proyek dummy (pindahkan ke sini jika ProjectCard dibuat terpisah)
import projectsData from '../data/project.data';

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="bg-neutral-800 text-white p-8 md:p-16"
      style={{ marginTop: '-6rem', paddingTop: '6rem' }} 
    >
      <div className="max-w-6xl mx-auto">

        {/* Header Section dengan Garis Pembatas */}
        <FadeIn direction="left">
          <div className="flex items-center mb-12"> 
            <h2 className="text-4xl font-serif font-bold mr-4">projects</h2>
            <div className="h-0.5 bg-[#AAEDEF] flex-grow"></div> 
          </div>
        </FadeIn>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            // Gunakan ProjectCard di sini
           <FadeIn key={index} direction="up" delay={index * 150}> 
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}