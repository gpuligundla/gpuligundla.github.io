import React, { useRef, useEffect, useState } from 'react';
import type { AudienceType } from '../../types';
import { audienceContent } from '../../data/audienceContent';

interface HeaderProps {
  selectedAudience: AudienceType;
  setSelectedAudience: (audience: AudienceType) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedAudience, setSelectedAudience }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleHorizontalScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleHorizontalScroll);
      return () => container.removeEventListener('scroll', handleHorizontalScroll);
    }
  }, []);

  return (
    <header className="p-4 md:p-8 pt-24 md:pt-8">
      <div className="relative md:static mb-8">
        <div 
          className="absolute left-0 z-10 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"
          style={{
            opacity: scrollPosition > 0 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        ></div>
        <div className="absolute right-0 z-10 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}
        >
          {(['recruiters', 'engineering-managers', 'anyone'] as AudienceType[]).map((audience) => (
            <button
              key={audience}
              onClick={() => setSelectedAudience(audience)}
              className={`transition-colors whitespace-nowrap flex-shrink-0 ${
                selectedAudience === audience 
                  ? 'text-[#fefeff] font-medium' 
                  : 'text-[#969696] hover:text-[#fefeff]'
              }`}
            >
              {audienceContent[audience].title}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;