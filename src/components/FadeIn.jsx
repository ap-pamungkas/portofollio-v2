import React from 'react';
import { useInView } from 'react-intersection-observer';

function FadeIn({ children, direction = 'up', delay = 0, duration = 'duration-1000', className = '' }) {
  
  const { ref, inView } = useInView({
   
    triggerOnce: false, 
  
    threshold: 0.1, 
  });

  // Tentukan kelas animasi berdasarkan arah
  const getTransformClass = () => {
    switch (direction) {
      case 'left':
        return inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0';
      case 'right':
        return inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0';
      case 'up':
      default:
        return inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-in-out ${duration} ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeIn;