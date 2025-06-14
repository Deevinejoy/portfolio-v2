import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const iconStyles = [
  {
    gradient: 'from-pink-400 to-purple-500',
    glow: 'shadow-pink-400/30',
    stroke: 'stroke-pink-400',
  },
  {
    gradient: 'from-purple-400 to-pink-500',
    glow: 'shadow-purple-400/30',
    stroke: 'stroke-purple-400',
  },
  {
    gradient: 'from-pink-500 to-rose-400',
    glow: 'shadow-rose-400/30',
    stroke: 'stroke-pink-500',
  },
  {
    gradient: 'from-rose-400 to-pink-500',
    glow: 'shadow-pink-500/30',
    stroke: 'stroke-rose-400',
  },
  {
    gradient: 'from-red-500 to-rose-400',
    glow: 'shadow-red-500/30',
    stroke: 'stroke-red-500',
  },
  {
    gradient: 'from-rose-500 to-red-400',
    glow: 'shadow-rose-500/30',
    stroke: 'stroke-rose-500',
  },
];

const codeIcons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M4 12l6-6m-6 6l6 6" />
      </svg>
    ),
    size: 'w-8 h-8',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4c0 2.21-1.79 4-4 4m0 0v8m0 0c2.21 0 4 1.79 4 4M17 4c0 2.21 1.79 4 4 4m0 0v8m0 0c-2.21 0-4 1.79-4 4" />
      </svg>
    ),
    size: 'w-10 h-10',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    size: 'w-12 h-12',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    size: 'w-10 h-10',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    size: 'w-16 h-16',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    size: 'w-14 h-14',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    size: 'w-12 h-12',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    size: 'w-10 h-10',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 14h20" />
      </svg>
    ),
    size: 'w-12 h-12',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l1.5 10h11L19 10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4c0-2-1-3-2-3s-2 1-2 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 6s2 0.5 2 2.5-2 2.5-2 2.5" />
      </svg>
    ),
    size: 'w-10 h-10',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zm0 0V9A7 7 0 005 9v5m14 0h-3M5 14h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-4" />
      </svg>
    ),
    size: 'w-14 h-14',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <circle cx="12" cy="12" r="4" strokeWidth={2} />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4"
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2}
          d="M15.5 7.5c0.5-0.5 2-0.5 2.5 0s0.5 2 0 2.5-2 0.5-2.5 0-0.5-2 0-2.5"
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2}
          d="M6 14c-0.5-0.5-0.5-2 0-2.5s2-0.5 2.5 0 0.5 2 0 2.5-2 0.5-2.5 0"
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2}
          d="M12 16c-0.5 0.5-2 0.5-2.5 0s-0.5-2 0-2.5 2-0.5 2.5 0 0.5 2 0 2.5"
        />
      </svg>
    ),
    size: 'w-16 h-16',
  },
];

interface IconPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  styleIndex: number;
}

// Divide the screen into sections for better distribution
const generateRandomPosition = (index: number): IconPosition => {
  // Divide screen into 4 columns, 5 icons per column
  const section = index % 4;
  const xMin = section * 25;
  const xMax = (section + 1) * 25;
  
  // Divide height into 2 rows for better spacing with fewer icons
  const row = Math.floor((index / 4) % 2);
  const yMin = row * 50;
  const yMax = (row + 1) * 50;

  return {
    x: xMin + Math.random() * (xMax - xMin),
    y: yMin + Math.random() * (yMax - yMin),
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
    styleIndex: Math.floor(Math.random() * iconStyles.length),
  };
};

export default function FloatingIcons() {
  const [positions, setPositions] = useState<IconPosition[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const newPositions = Array.from({ length: 20 }).map((_, index) => generateRandomPosition(index));
    setPositions(newPositions);
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {positions.map((position, index) => {
        const iconIndex = index % codeIcons.length;
        const style = iconStyles[position.styleIndex];
        
        return (
          <motion.div
            key={index}
            className={`absolute ${codeIcons[iconIndex].size}`}
            initial={{
              x: `${position.x}vw`,
              y: `${position.y}vh`,
              rotate: position.rotation,
              scale: position.scale,
            }}
            animate={{
              y: [`${position.y}vh`, `${(position.y + 15) % 100}vh`],
              rotate: [position.rotation, position.rotation + 180],
              scale: [position.scale, position.scale * 1.2, position.scale],
            }}
            transition={{
              duration: 20 + (index % 10),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div 
              className={`
                bg-gradient-to-br ${style.gradient}
                shadow-lg ${style.glow}
                rounded-lg p-1
                opacity-70 hover:opacity-90
                transition-all duration-300
                backdrop-blur-sm
              `}
            >
              <div className={`${style.stroke} dark:text-white`}>
                {codeIcons[iconIndex].icon}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 