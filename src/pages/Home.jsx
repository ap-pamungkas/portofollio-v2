import profilePic from '../assets/profile.JPG';
import TypingEffect from '../components/TypingEffect'; 
import FadeIn from '../components/FadeIn';
export default function Home() {
  return (
    <section id='home' className="bg-neutral-800 text-white min-h-[calc(100vh-60px)] flex items-center justify-evenly p-8 md:p-16">
      
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Konten Teks Kiri */}
        <div className="flex-1 text-center md:text-left">
          <FadeIn direction="up">
            <p className="text-xl md:text-2xl mb-4 font-serif text-neutral-400">
              Hello, i'm Putra
            </p>
            <h1 className="leading-tight"> 
              <TypingEffect /> 
            </h1>
          </FadeIn>
        </div>
        {/* Kotak Gambar Kanan (Disesuaikan) */}
        <FadeIn direction='right'  delay={200} >
    <div className="flex-1 flex justify-center md:justify-end">     
          <div className="w-64 h-80 md:w-80 md:h-96 bg-neutral-800 
                        rounded-3xl p-0 shadow-xl overflow-hidden 
                        ring-2 ring-neutral-700"> 
            <img 
              src={profilePic} 
              alt="Putra - Full Stack Developer Profile"
             
              className="w-full h-full object-cover object-top rounded-3xl" 
            />
            
          </div>
        </div>
        </FadeIn>
        
      </div>

      {/* Indikator Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase mb-2">Scroll Down</span>
        <div className="w-px h-12 bg-[#AAEDEF]"></div>
      </div>
    </section>
  );
}