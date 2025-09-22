import { useState, useEffect } from 'react';
import { carouselSlides } from '@/data/schemes';

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="banner bg-surface min-h-[420px] rounded-scheme mt-9 shadow-portal-md overflow-hidden">
      <div className="carousel relative overflow-hidden rounded-scheme w-full h-full">
        <div 
          className="slides flex transition-transform duration-700 ease-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide min-w-full h-[420px] relative flex items-center justify-center overflow-hidden ${
                index === currentSlide ? 'active' : ''
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-[6s] ease-in-out"
                style={{
                  filter: 'saturate(1.05) contrast(1) brightness(0.98)',
                  transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/65 pointer-events-none" />
              
              {/* Caption */}
              <div className="absolute left-10 bottom-10 max-w-2xl z-10 text-white fade-in-up">
                <h1 className="text-4xl font-bold leading-tight mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-3 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/75 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};