import profilePic from '../assets/profile.png';
import TypingEffect from '../components/TypingEffect'; 

export default function Home() {
  return (
    <section id='home' className="bg-neutral-800 text-white min-h-[calc(100vh-60px)] flex items-center justify-evenly p-8 md:p-16">
      
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Konten Teks Kiri */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl mb-2 font-serif">
            Hello, i'm Putra
          </p>
          <h1 className="text-5xl   font-serif font-bold leading-tight"> 
            <TypingEffect /> 
            
          </h1>
        </div>
        
        {/* Kotak Gambar Kanan (Disesuaikan) */}
        <div className="flex-1 flex justify-center md:justify-end">
        
          <div className="w-[300px] h-[350px] md:w-[400px] md:h-[450px] bg-neutral-800 
                        rounded-3xl p-0 shadow-xl overflow-hidden 
                        ring-2 ring-neutral-700"> 
            
            <img 
              src={profilePic} 
              alt="Putra - Full Stack Developer Profile"
             
              className="w-full h-full object-cover object-top rounded-3xl" 
            />
            
          </div>
        </div>
        
      </div>
    </section>
  );
}