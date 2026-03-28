import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, ArrowUpRight, ExternalLink, Trophy, Medal, Award, Sparkles } from 'lucide-react';

// --- STATIC DATA (Extracted for Performance) ---
const PHILOSOPHY_WORDS = "There's a difference between a developer who codes and a developer who thinks. I sit at the intersection of clean frontend engineering, conversion-focused design, and AI-native development which means I move faster, build smarter, and deliver work that actually serves a business goal. I'm not here to write boilerplate. I'm here to solve problems.".split(" ");

const ABOUT_WORDS = "I'm Kritagya — a 20-year-old Computer Science student at Chameli Devi Group of Institutions, Indore, with hands-on freelancing experience building real products for real clients. I started building on the web because I was obsessed with one question: why do some digital experiences make you feel something, and most don't? That obsession turned into a skillset. I learned HTML, CSS, JavaScript, and React — and then pushed further into AI-native development, which lets me build faster and think at a systems level most junior developers don't reach for years. Outside of code, I read deeply into human psychology, philosophy, and how people make decisions. That's not a hobby that lives separately from my work — it's why my interfaces feel intentional. I'm currently in my third year of BTech. I'm not looking for something to put on a CV. I'm looking to build things that matter.".split(" ");

const PROJECTS_DATA = [
  {
    id: "01",
    title: "A Landing Page Engineered to Sell",
    desc: "Built a high-converting landing page from the ground up — structured around proven persuasion frameworks, mobile-first responsive layout, and sub-2s load times. Every section was written and designed to guide the visitor toward one action.",
    category: "Conversion & Performance",
    imgUrl: "/beauty.webp",
    projectUrl: "https://beautyhub-flax.vercel.app/" 
  },
  {
    id: "02",
    title: "A Full-Stack Web App, Built Solo, Shipped Fast",
    desc: "Designed and developed a complete web application using React on the frontend, with AI-assisted backend logic and database integration. Handled everything from component architecture to deployment — demonstrating that one developer with the right tools can replace a small team's output.",
    category: "Full-Stack AI Engineering",
    imgUrl: "/nanofile.webp",
    projectUrl: "http://nano-file.vercel.app/" 
  },
  {
    id: "03",
    title: "Built Under Pressure. Recognised on a National Stage.",
    desc: "As part of Smart India Hackathon 2025, our team engineered a solution under 36-hour sprint conditions. I led the frontend — from wireframe to working interface — while coordinating with teammates on integration in real time.",
    category: "SIH 2025 Lead Frontend",
    imgUrl: "/sih.webp",
    projectUrl: "https://github.com/Harsh231075/Tashi-Delek" 
  }
];

const SKILLS_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
  },
  {
    title: "AI & Modern Development",
    skills: ["Prompt Engineering", "Vibe Coding", "AI Automation (Make.com, n8n)", "ChatGPT", "Claude", "Gemini"]
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Git & GitHub", "Cursor", "Claude Code", "Antigravity"]
  },
  {
    title: "What Makes the Work Convert",
    skills: ["Landing Page Optimisation", "Conversion-Focused UI", "Consumer Psychology", "Content Strategy", "Personal Branding", "Persuasion Architecture"]
  }
];

const ACHIEVEMENTS_DATA = [
  {
    id: "01",
    title: "SIH 2025 Finalist",
    subtitle: "Smart India Hackathon",
    desc: "One of the most competitive collegiate tech competitions in the country. We made it to the final round.",
    icon: Trophy
  },
  {
    id: "02",
    title: "SnowHack 2026",
    subtitle: "Overall Winner",
    desc: "Competed, built, and won. Delivered a complete solution under time pressure that beat every other team in the room.",
    icon: Medal
  },
  {
    id: "03",
    title: "Vibeathon",
    subtitle: "1st Place Winner",
    desc: "Won my college's AI website-building competition. Built a fully functional, AI-assisted website faster and better than anyone else.",
    icon: Award
  }
];

const EXPERTISE_SERVICES = [
  {
    id: "01",
    title: "Landing Pages",
    body: "Pages engineered to turn visitors into action-takers. Built with strategic copy structure, performance-first code, and conversion psychology baked into every scroll interaction.",
    graphic: (
      <div className="relative w-full h-full rounded-[2rem] flex items-center justify-center bg-[#070707] border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]">
          <div className="absolute top-0 w-full h-[150%] bg-gradient-to-b from-transparent via-[#D6B87C]/20 to-transparent animate-[scanLine_3s_linear_infinite]"></div>
        </div>
        <div className="w-24 h-24 border border-[#D6B87C]/50 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 bg-[#D6B87C] rounded-full shadow-[0_0_20px_#D6B87C]"></div>
        </div>
      </div>
    )
  },
  {
    id: "02",
    title: "React Web Apps",
    body: "Component-driven, scalable, and clean. Whether it's a dashboard, a product interface, or a dynamic user flow — I build React apps that work as good as they look.",
    graphic: (
      <div className="relative w-full h-full rounded-[2rem] flex items-center justify-center bg-[#070707] border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(214,184,124,0.05)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute w-[80%] h-[80%] animate-[spin_12s_linear_infinite]">
          <div className="absolute inset-8 border border-[#D6B87C]/30 rounded-full" style={{ transform: 'rotate(0deg) scale(1, 0.35)' }}></div>
          <div className="absolute inset-8 border border-[#D6B87C]/30 rounded-full" style={{ transform: 'rotate(60deg) scale(1, 0.35)' }}></div>
          <div className="absolute inset-8 border border-[#D6B87C]/30 rounded-full" style={{ transform: 'rotate(120deg) scale(1, 0.35)' }}></div>
        </div>
        <div className="w-5 h-5 bg-[#D6B87C] rounded-full shadow-[0_0_30px_#D6B87C] animate-pulse relative z-10"></div>
      </div>
    )
  },
  {
    id: "03",
    title: "AI-Assisted Sites",
    body: "I use AI not as a crutch — but as a force multiplier. I can architect and ship full-stack projects end-to-end, at a pace most teams can't match without a team.",
    graphic: (
      <div className="relative w-full h-full rounded-[2rem] flex items-center justify-center bg-[#070707] border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[#D6B87C]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-8 border border-dashed border-[#D6B87C]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-16 border border-[#D6B87C]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute w-16 h-16 bg-[#D6B87C]/10 backdrop-blur-md border border-[#D6B87C]/40 rounded-full flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-[#D6B87C] animate-pulse" />
        </div>
      </div>
    )
  }
];

// --- OPTIMIZATION: IntersectionObserver added to pause heavy math when offscreen ---
const useTextRevealScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    let isIntersecting = false;

    // Only run math if the component is actually visible
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const handleScroll = () => {
      if (!isIntersecting) return; // Skip CPU load
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const { top, height } = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const revealDistance = height - (2.2 * viewportHeight);
        const progress = Math.max(0, Math.min(1, -top / (revealDistance || 1)));
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [containerRef]);

  return scrollProgress;
};


// --- LOADING SCREEN COMPONENT ---
const LoadingScreen = ({ stage }: { stage: string }) => {
  if (stage === 'ready') return null;
  const word = ['K', 'r', 'i', 't', 'a', 'g', 'y', 'a'];

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#0A0A0A] transition-transform duration-[1.8s] ease-[cubic-bezier(0.64,0,0.08,1)]
        ${stage === 'sliding' ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-0"></div>
      <div className="relative z-10 px-4 py-8 flex items-center justify-center">
        <h1 className="font-heading text-[12vw] sm:text-6xl md:text-7xl lg:text-[7.5rem] text-[#F3F2EE] tracking-tight leading-tight whitespace-nowrap">
          {word.map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-[revealLetter_1s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 will-change-[transform,opacity,filter]"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};


// --- HERO SECTION COMPONENT ---
const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center mt-[-2rem] md:mt-[-4rem]">
        <div className="animate-fade-in-up [animation-delay:100ms] opacity-0 fill-mode-forwards flex flex-col items-center w-full">
          <p className="font-body text-lg sm:text-xl md:text-3xl font-light text-[#A1A1AA] mb-4 md:mb-6 tracking-tight">
            I Don't Just Write Code.
          </p>
          <h1 className="font-heading text-[13vw] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] md:leading-[0.85] text-[#F3F2EE] tracking-tight max-w-6xl w-full">
            I Build Experiences<br />
            <span className="text-[#D6B87C] italic pr-2 md:pr-4">That Convert</span>
          </h1>
        </div>

        <p className="animate-fade-in-up [animation-delay:300ms] opacity-0 fill-mode-forwards font-body mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed font-light">
          Frontend developer who ships fast, thinks in systems, and uses AI to build what takes others a sprint —{' '}
          <span className="text-[#F3F2EE] font-normal border-b border-[#D6B87C]/30 pb-0.5 relative inline-block group cursor-default">
            in a day.
            <span className="absolute inset-0 bg-[#D6B87C]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></span>
          </span>
        </p>

        <div className="animate-fade-in-up [animation-delay:500ms] opacity-0 fill-mode-forwards mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <button 
            onClick={scrollToWork}
            className="group relative inline-flex items-center justify-center gap-4 px-2 py-2 pr-6 font-body font-medium text-[15px] text-[#0A0A0A] bg-[#F3F2EE] rounded-full overflow-hidden transition-all duration-400 ease-out hover:scale-[1.04] hover:shadow-[0_0_40px_-10px_#D6B87C] w-full sm:w-auto"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A]/10 group-hover:bg-[#D6B87C] transition-colors duration-400">
               <ArrowRight className="w-5 h-5 text-[#0A0A0A] group-hover:translate-x-0.5 transition-transform duration-400" />
            </div>
            <span className="tracking-wide">See My Work</span>
          </button>

          <a 
            href="YOUR_RESUME_URL_HERE.pdf" // Replace with your actual resume URL
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:py-4 rounded-full font-body font-medium text-[15px] text-[#F3F2EE] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-400 ease-out hover:bg-white/[0.08] hover:border-[#D6B87C]/50 hover:scale-[1.02] w-full sm:w-auto"
          >
            <span className="tracking-wide">Download Resume</span>
            <Download className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#D6B87C] group-hover:-translate-y-0.5 transition-all duration-400" />
          </a>
        </div>
      </div>
    </div>
  );
};


// --- PHILOSOPHY SECTION COMPONENT ---
const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollProgress = useTextRevealScroll(containerRef);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#0A0A0A] border-t border-white/[0.05] z-0">
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto py-24">
        <div className="mb-12 md:mb-20">
          <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
            01 Philosophy
          </p>
          <h2 className="font-heading text-[10vw] sm:text-5xl md:text-6xl lg:text-[5rem] text-[#F3F2EE] max-w-4xl leading-[1.05] tracking-tight">
            Most developers can build a website.<br />
            <span className="text-[#A1A1AA] italic">Few can build one that works</span>
          </h2>
        </div>

        <div className="font-body text-lg sm:text-xl md:text-3xl lg:text-4xl leading-relaxed md:leading-[1.4] text-[#F3F2EE] font-light max-w-4xl">
          {PHILOSOPHY_WORDS.map((word, i) => {
            const start = i / PHILOSOPHY_WORDS.length;
            const end = start + (1 / PHILOSOPHY_WORDS.length);
            let opacity = 0.15;
            if (scrollProgress >= end) {
              opacity = 1;
            } else if (scrollProgress > start) {
              opacity = 0.15 + 0.85 * ((scrollProgress - start) / (end - start));
            }

            return (
              <span key={i} style={{ opacity, transition: 'opacity 0.1s ease-out' }} className="inline-block mr-[0.25em] mb-[0.1em]">
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// --- EXPERTISE SECTION COMPONENT ---
const Expertise = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let isVisible = false;

    // OPTIMIZATION: Pause physics engine when user scrolls past this section
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (sectionRef.current) observer.observe(sectionRef.current);

    const loop = () => {
      if (isVisible) {
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;
        
        if (followerRef.current) {
          followerRef.current.style.transform = `translate3d(calc(${currentPos.current.x}px - 50%), calc(${currentPos.current.y}px - 50%), 0)`;
        }
      }
      rafId = requestAnimationFrame(loop);
    };
    
    loop();

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden z-20 mt-[-100vh] shadow-[0_-30px_50px_rgba(0,0,0,0.8)] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
              02 Expertise
            </p>
            <h2 className="font-heading text-[11vw] sm:text-6xl md:text-7xl lg:text-[6rem] text-[#F3F2EE] max-w-3xl leading-[0.95] tracking-tight">
              Here's What You're <br />
              <span className="text-[#A1A1AA] italic">Actually Getting</span>
            </h2>
          </div>
          <p className="font-accent text-[#A1A1AA]/50 text-xs tracking-widest uppercase hidden lg:block pb-4">
            [ Hover to Reveal ]
          </p>
        </div>

        <div className="flex flex-col w-full border-t border-white/10" onMouseLeave={() => setHoveredIdx(null)}>
          {EXPERTISE_SERVICES.map((s, i) => {
            const isHovered = hoveredIdx === i;
            const isDimmed = hoveredIdx !== null && !isHovered;

            return (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredIdx(i)}
                className={`group flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 md:py-12 border-b border-white/10 transition-all duration-300 ease-out cursor-pointer
                  ${isDimmed ? 'opacity-30 blur-[2px]' : 'opacity-100 blur-0'}
                  ${isHovered ? 'lg:px-8 bg-white/[0.02]' : 'lg:px-0'}
                `}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 w-full lg:w-1/2 relative z-20">
                  <span className={`font-accent text-sm md:text-base transition-colors duration-300 ${isHovered ? 'text-[#D6B87C]' : 'text-[#A1A1AA]/50'}`}>
                    /{s.id}
                  </span>
                  <h3 className={`font-heading text-[10vw] sm:text-6xl md:text-7xl lg:text-[4.5rem] transition-all duration-300 ease-out ${isHovered ? 'text-[#D6B87C]' : 'text-[#F3F2EE]'}`}>
                    {s.title}
                  </h3>
                </div>

                <div className={`mt-4 lg:mt-0 w-full lg:w-[500px] lg:shrink-0 transition-opacity duration-300 ease-out relative z-20
                  ${isHovered ? 'opacity-100' : 'lg:opacity-0'}
                `}>
                  <p className="font-body text-[#A1A1AA] text-base md:text-lg leading-relaxed font-light">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div 
        ref={followerRef}
        className={`hidden lg:block fixed top-0 left-0 w-[380px] h-[450px] pointer-events-none z-[100] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${hoveredIdx !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}
      >
        {EXPERTISE_SERVICES.map((s, i) => (
          <div 
            key={`follower-${s.id}`}
            className={`absolute inset-0 transition-opacity duration-500
              ${hoveredIdx === i ? 'opacity-100 delay-100' : 'opacity-0'}
            `}
          >
            {s.graphic}
          </div>
        ))}
      </div>
    </section>
  );
};


// --- PROJECTS SECTION COMPONENT ---
const Projects = () => {
  return (
    <section id="work" className="relative py-32 md:py-48 bg-[#0A0A0A] border-t border-white/[0.05] z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <div className="mb-16 md:mb-32">
          <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
            03 Selected Works
          </p>
          <h2 className="font-heading text-[11vw] sm:text-6xl md:text-7xl lg:text-[6rem] text-[#F3F2EE] max-w-3xl leading-[0.95] tracking-tight">
            Work That <br />
            <span className="text-[#A1A1AA] italic">Speaks For Itself</span>
          </h2>
        </div>

        <div className="relative mt-12 md:mt-20 w-full pb-[15vh] lg:pb-[10vh]">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id}
              className="sticky w-full"
              style={{
                top: `calc(8vh + ${index * 25}px)`,
                paddingBottom: '6vh'
              }}
            >
              <div className="group relative w-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/10 bg-[#0F0F0F] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:shadow-[0_-20px_50px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out hover:border-[#D6B87C]/30 flex flex-col gap-6 hover:bg-[#121212]">
                
                <div className="w-full flex flex-col relative z-10 max-w-4xl">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 font-accent text-[#F3F2EE] text-xs md:text-sm group-hover:bg-[#D6B87C] group-hover:text-[#0A0A0A] transition-colors duration-500">
                      {project.id}
                    </span>
                    <span className="font-accent text-[#A1A1AA] text-[10px] md:text-xs uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-[8vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] text-[#F3F2EE] mb-4 group-hover:text-[#D6B87C] transition-colors duration-500">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-[#A1A1AA] text-sm sm:text-base lg:text-lg leading-relaxed font-light mb-6">
                    {project.desc}
                  </p>
                  
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 w-fit font-accent text-xs sm:text-sm text-[#F3F2EE] uppercase tracking-widest hover:text-[#D6B87C] transition-colors group/btn mb-2"
                  >
                    <span className="border-b border-[#F3F2EE]/30 group-hover/btn:border-[#D6B87C] pb-1 transition-colors">View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center mt-auto">
                  <div className="absolute inset-0 bg-noise opacity-[0.05] z-20 pointer-events-none mix-blend-screen"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none"></div>
                  {/* OPTIMIZATION: Added loading="lazy" so heavy images don't block initial page render */}
                  <img 
                    src={project.imgUrl} 
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SKILLS & STACK SECTION COMPONENT ---
const SkillsStack = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#0A0A0A] border-t border-white/[0.05] z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
                04 Stack
              </p>
              <h2 className="font-heading text-[11vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#F3F2EE] leading-[0.95] tracking-tight">
                The Tools I <br />
                <span className="text-[#A1A1AA] italic">Think In</span>
              </h2>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col">
            {SKILLS_CATEGORIES.map((category, idx) => (
              <div 
                key={idx}
                className="group flex flex-col border-b border-white/10 py-10 first:pt-0 last:border-b-0 hover:border-[#D6B87C]/40 transition-colors duration-500"
              >
                <h3 className="font-body text-xl md:text-2xl text-[#F3F2EE] mb-6 md:mb-8 group-hover:text-[#D6B87C] transition-colors duration-500 flex items-center gap-3 md:gap-4">
                  <span className="font-accent text-[#A1A1AA] text-xs uppercase tracking-widest group-hover:text-[#D6B87C]/70 transition-colors">
                    0{idx + 1} //
                  </span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx}
                      className="px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm font-body text-[#A1A1AA] text-xs md:text-sm transition-all duration-400 ease-out cursor-default hover:bg-[#D6B87C] hover:text-[#0A0A0A] hover:border-[#D6B87C] hover:scale-105 hover:shadow-[0_0_20px_rgba(214,184,124,0.3)] group-hover:border-white/20 group-hover:bg-white/[0.03]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- SPOTLIGHT CARD COMPONENT (OPTIMIZED NO-RENDER PHYSICS) ---
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  // OPTIMIZATION: Writing directly to CSS variables bypasses React's render cycle completely.
  // This changes the hover from causing 60 re-renders per second down to 0!
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] transition-all duration-500 hover:border-[#D6B87C]/30 hover:shadow-[0_0_40px_-15px_rgba(214,184,124,0.15)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(214,184,124,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.03] z-0 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};


// --- ACHIEVEMENTS SECTION COMPONENT ---
const Achievements = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#0A0A0A] border-t border-white/[0.05] z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#D6B87C]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
                05 Social Proof
              </p>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#D6B87C]/30 bg-[#D6B87C]/10 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D6B87C] animate-pulse"></div>
                <span className="font-accent text-[9px] md:text-[10px] text-[#D6B87C] uppercase tracking-widest hidden sm:block">Live Impact</span>
              </div>
            </div>
            
            <h2 className="font-heading text-[11vw] sm:text-6xl md:text-7xl lg:text-[6rem] text-[#F3F2EE] leading-[0.95] tracking-tight">
              Proof Of <br />
              <span className="text-[#A1A1AA] italic">Performance</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {ACHIEVEMENTS_DATA.map((award, idx) => {
            const Icon = award.icon;
            const isFeatured = idx === 0; 

            return (
              <SpotlightCard key={award.id} className={isFeatured ? "lg:col-span-2" : "lg:col-span-1"}>
                <div className={`flex flex-col h-full ${isFeatured ? "lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20" : "gap-10"}`}>

                  <div className="flex justify-between items-start lg:w-auto">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-[#0A0A0A] group-hover:border-[#D6B87C]/50 group-hover:bg-[#D6B87C]/10 group-hover:scale-110 transition-all duration-500 ease-out shadow-[0_0_0_0_rgba(214,184,124,0)] group-hover:shadow-[0_0_30px_0_rgba(214,184,124,0.2)]">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#A1A1AA] group-hover:text-[#D6B87C] transition-colors duration-500" />
                    </div>
                    {!isFeatured && (
                      <span className="font-accent text-[#A1A1AA]/40 text-sm group-hover:text-[#D6B87C]/80 transition-colors duration-500">
                        /{award.id}
                      </span>
                    )}
                  </div>

                  <div className={`flex flex-col ${isFeatured ? "lg:w-[70%]" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="font-accent text-[#D6B87C] text-[10px] md:text-xs uppercase tracking-[0.2em]">
                        {award.subtitle}
                      </p>
                      {isFeatured && (
                        <span className="font-accent text-[#A1A1AA]/40 text-sm group-hover:text-[#D6B87C]/80 transition-colors duration-500 ml-auto lg:ml-0">
                          /{award.id}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-heading text-[#F3F2EE] leading-[1.05] mb-4 md:mb-6 group-hover:text-white transition-colors duration-500 ${isFeatured ? "text-4xl md:text-5xl lg:text-[3.5rem]" : "text-3xl md:text-4xl"}`}>
                      {award.title}
                    </h3>

                    <p className={`font-body text-[#A1A1AA] leading-relaxed font-light group-hover:text-[#E0E0E0] transition-colors duration-500 ${isFeatured ? "text-base md:text-lg max-w-2xl" : "text-sm md:text-base"}`}>
                      {award.desc}
                    </p>
                  </div>

                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// --- ABOUT SECTION COMPONENT ---
const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollProgress = useTextRevealScroll(containerRef);

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#0A0A0A] border-t border-white/[0.05] z-20">
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto pt-20 pb-32 md:py-20">
        <div className="mb-8 md:mb-16">
          <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
            06 The Person
          </p>
          <h2 className="font-heading text-[11vw] sm:text-6xl md:text-7xl lg:text-[5rem] text-[#F3F2EE] leading-[1.05] tracking-tight">
            Driven By <br />
            <span className="text-[#A1A1AA] italic">Obsession</span>
          </h2>
        </div>

        <div className="font-body text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.5] text-[#F3F2EE] font-light max-w-5xl">
          {ABOUT_WORDS.map((word, i) => {
            const start = i / ABOUT_WORDS.length;
            const end = start + (1 / ABOUT_WORDS.length);
            let opacity = 0.15;
            
            if (scrollProgress >= end) {
              opacity = 1;
            } else if (scrollProgress > start) {
              opacity = 0.15 + 0.85 * ((scrollProgress - start) / (end - start));
            }

            return (
              <span 
                key={i} 
                style={{ opacity, transition: 'opacity 0.1s ease-out' }} 
                className="inline-block mr-[0.25em] mb-[0.1em]"
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};


// --- CONTACT SECTION COMPONENT ---
const Contact = () => {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-8 md:pt-48 md:pb-12 bg-[#0A0A0A] overflow-hidden flex flex-col items-center text-center z-20 mt-[-100vh] shadow-[0_-30px_50px_rgba(0,0,0,0.8)] border-t border-white/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[#D6B87C]/5 rounded-t-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl flex flex-col items-center flex-1">
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <p className="font-accent text-[#D6B87C] text-xs md:text-sm tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
            07 Contact
            <span className="w-8 h-[1px] bg-[#D6B87C]/50"></span>
          </p>

          <h2 className="font-heading text-[12vw] sm:text-6xl md:text-7xl lg:text-[7rem] text-[#F3F2EE] leading-[0.95] tracking-tight mb-8 md:mb-10 w-full">
            Let's Build Something <br />
            <span className="text-[#A1A1AA] italic">That Works</span>
          </h2>

          <p className="font-body text-[#A1A1AA] text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-12 md:mb-16">
            If you need a frontend developer who ships fast, thinks clearly, and takes ownership — I'm ready. Whether it's an internship, a project, or a conversation, my inbox is open.
          </p>

          <a 
            href="mailto:kritagya1905@gmail.com"
            className="group relative inline-flex items-center justify-center gap-4 px-3 py-3 pr-8 font-body font-medium text-[15px] md:text-[17px] text-[#0A0A0A] bg-[#F3F2EE] rounded-full overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_40px_-15px_#D6B87C] w-fit mb-12"
          >
            <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0A0A0A]/10 group-hover:bg-[#D6B87C] transition-colors duration-500">
               <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#0A0A0A] group-hover:translate-x-1 transition-transform duration-500" />
            </div>
            <span>Get In Touch</span>
          </a>
        </div>

        <div className="w-full mt-auto pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
          <div className="font-accent text-[#A1A1AA] text-[10px] md:text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Kritagya
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {[
              { name: 'Email', url: 'mailto:kritagya1905@gmail.com' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kritagyajaiswal19/' },
              { name: 'GitHub', url: 'https://github.com/kritagya-19' }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 md:gap-2 font-accent text-xs md:text-sm text-[#F3F2EE] uppercase tracking-widest hover:text-[#D6B87C] transition-colors duration-300"
              >
                <span className="relative overflow-hidden pb-1">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D6B87C] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </span>
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-[#A1A1AA] group-hover:text-[#D6B87C] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- CURSOR TRAIL ANIMATION COMPONENT ---
const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number }[]>(Array.from({ length: 30 }, () => ({ x: 0, y: 0 })));
  const mouse = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMoving.current) {
        for (let i = 0; i < points.current.length; i++) {
          points.current[i] = { x: e.clientX, y: e.clientY };
        }
        isMoving.current = true;
      }
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMoving.current) {
        points.current[0].x = mouse.current.x;
        points.current[0].y = mouse.current.y;

        for (let i = 1; i < points.current.length; i++) {
          const pt = points.current[i];
          const prevPt = points.current[i - 1];
          pt.x += (prevPt.x - pt.x) * 0.4;
          pt.y += (prevPt.y - pt.y) * 0.4;
        }

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < points.current.length; i++) {
          ctx.beginPath();
          ctx.moveTo(points.current[i - 1].x, points.current[i - 1].y);
          ctx.lineTo(points.current[i].x, points.current[i].y);
          
          const progress = 1 - (i / points.current.length);
          ctx.strokeStyle = `rgba(214, 184, 124, ${progress})`;
          ctx.lineWidth = progress * 2.5;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block" 
    />
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const [appState, setAppState] = useState('loading'); 

  useEffect(() => {
    // Ensure we start at top
    window.scrollTo(0, 0); 
    
    // FIX: Intercept scroll events instead of hiding the scrollbar. 
    // This keeps the scrollbar visible during loading, preventing layout shifts!
    const preventScroll = (e: Event) => e.preventDefault();
    const preventKeyScroll = (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyScroll, { passive: false });
    
    // OPTIMIZATION: Timers increased by 100ms to perfectly accommodate the new buttery-smooth base delay
    const t1 = setTimeout(() => {
      setAppState('sliding');
    }, 1900); 
    
    const t2 = setTimeout(() => {
      setAppState('ready');
      // Release the scroll lock when loading finishes
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
    }, 3700); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap');
          
          .font-heading { font-family: 'Instrument Serif', serif; }
          .font-body { font-family: 'DM Sans', sans-serif; }
          .font-accent { font-family: 'Space Mono', monospace; }
          
          .bg-noise {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px) scale(0.98); filter: blur(5px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
          
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .fill-mode-forwards { animation-fill-mode: forwards; }

          @keyframes scanLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
          
          .app-loading .animate-fade-in-up { animation: none !important; opacity: 0; }

          /* OPTIMIZATION: Using translate3d offloads the blur/movement rendering directly to the GPU */
          @keyframes revealLetter {
            0% { transform: translate3d(0, 60px, 0); opacity: 0; filter: blur(10px); }
            100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
          }
        `}
      </style>

      <div className={`bg-[#0A0A0A] bg-noise min-h-screen text-[#F3F2EE] selection:bg-[#D6B87C]/30 selection:text-[#0A0A0A] ${appState === 'loading' ? 'app-loading' : ''}`}>
        
        <LoadingScreen stage={appState} />
        <CursorTrail />
        
        <div className={`transition-all duration-[1.8s] ease-[cubic-bezier(0.64,0,0.08,1)] w-full will-change-transform
          ${appState === 'loading' ? 'translate-y-24 scale-[0.98] blur-[8px] opacity-0 pointer-events-none' : 'translate-y-0 scale-100 blur-0 opacity-100'}
        `}>
          <Hero />
          <Philosophy />
          <Expertise />
          <Projects />
          <SkillsStack />
          <Achievements />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}