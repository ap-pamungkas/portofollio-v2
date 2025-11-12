import React from 'react';
import { FaJs, FaReact, FaPhp, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { FaDartLang } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiExpress, SiNextdotjs } from 'react-icons/si';
import FadeIn from '../components/FadeIn';
export default function About() {
  const aboutText = "Halo! Saya Putra, seorang Full Stack Developer yang bersemangat dalam membangun aplikasi web yang efisien dan skalabel. Dengan pengalaman di kedua sisi, baik frontend maupun backend, saya berfokus pada pengalaman pengguna yang mulus dan arsitektur kode yang bersih. Saya senang belajar teknologi baru dan selalu mencari tantangan untuk meningkatkan kemampuan saya dalam dunia pengembangan. Mari berkolaborasi!";

  const skills = [
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaPhp, name: 'PHP', color: '#777BB4' },
    { icon: FaDartLang, name: 'Dart', color: '#0175C2' },
    {icon: FaLaravel, name: 'Laravel', color: '#FF2D20' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' }, 
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express.js', color: '#FFFFFF' }, 
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A5' },
  ];

  return (
    <section id="about" className="bg-neutral-800 text-white p-8 md:p-16"
    >
      <div className="max-w-6xl mx-auto"> 

      
     <FadeIn direction="left">
       <div className="flex items-center mb-8">
          <h2 className="text-4xl font-serif font-bold mr-4"> 
            about
          </h2>
          
          <div className="h-0.5 bg-[#AAEDEF] grow"></div> 
        </div>
        </FadeIn>

        
       <FadeIn direction="up" delay={200}>
          <p className="text-lg leading-relaxed text-neutral-300 whitespace-pre-line mb-10">
            {aboutText}
          </p>
        </FadeIn>
        

        <div className="mt-16">
          <FadeIn direction="left">
            <div className="flex items-center mb-10">
              <h2 className="text-4xl font-serif font-bold mr-4">skills</h2>
              <div className="h-0.5 bg-[#AAEDEF] grow"></div> 
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-start gap-8">
            {skills.map((skill, index) => (
                <FadeIn key={index} direction="up" delay={200 + index * 50}>
              <div  className="flex flex-col items-center">
                <skill.icon 
                  size={48} 
                  style={{ color: skill.color === '#000000' || skill.color === '#FFFFFF' ? '#FFFFFF' : skill.color }} 
                  className="hover:scale-110 transition-transform duration-300" 
                />
              </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}