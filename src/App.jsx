import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "./data/projects";
import { startAmbient, stopAmbient, isAmbientPlaying, playClick } from "./utils/sound";

import ParticlesBg       from "./components/ParticlesBg";
import CustomCursor      from "./components/CustomCursor";
import Navbar            from "./components/Navbar";
import Hero              from "./components/Hero";
import University        from "./components/University";
import Builder           from "./components/Builder";
import ProjectsCarousel  from "./components/ProjectsCarousel";
import ProjectFullscreen from "./components/ProjectFullscreen";
import DataLab           from "./components/DataLab";
import Future            from "./components/Future";

export default function App() {
  const [theme, setTheme]             = useState("dark");
  const [openProject, setOpenProject] = useState(null);
  const [soundOn, setSoundOn]         = useState(false);
  const [isMobile, setIsMobile]       = useState(false);

  useEffect(() => {
    const c = () => setIsMobile(
      window.innerWidth < 768 ||
      window.matchMedia("(hover:none) and (pointer:coarse)").matches
    );
    c(); window.addEventListener("resize", c);
    return () => window.removeEventListener("resize", c);
  }, []);

  // Auto-start ambient on first interaction
  useEffect(() => {
    const handler = () => {
      if (!isAmbientPlaying()) { startAmbient(); setSoundOn(true); }
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, []);

  const toggleSound = () => {
    if (soundOn) { stopAmbient(); setSoundOn(false); }
    else { startAmbient(); setSoundOn(true); }
    playClick('soft');
  };

  const idx = openProject ? PROJECTS.findIndex(p => p.id === openProject.id) : -1;
  const handleNext = () => { setOpenProject(PROJECTS[(idx+1)%PROJECTS.length]); playClick('nav'); };
  const handlePrev = () => { setOpenProject(PROJECTS[(idx-1+PROJECTS.length)%PROJECTS.length]); playClick('nav'); };

  const bg = theme === "dark" ? "#0B0F1A" : "#F9FAFB";

  return (
    <div style={{background:bg,color:theme==="dark"?"#E5E7EB":"#0B0F1A",minHeight:"100vh",overflowX:"hidden",transition:"background .4s,color .4s"}}>
      <ParticlesBg />
      {!isMobile && <CustomCursor />}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Sound toggle */}
      <motion.button
        initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:3}}
        whileHover={{scale:1.1}} whileTap={{scale:.9}}
        onClick={toggleSound}
        title={soundOn?"إيقاف الصوت":"تشغيل الصوت"}
        style={{position:"fixed",bottom:"2rem",left:"2rem",zIndex:300,width:46,height:46,borderRadius:"50%",background:soundOn?"linear-gradient(135deg,#7C7CFF,#A78BFA)":"rgba(124,124,255,.12)",border:"1px solid rgba(124,124,255,.35)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",boxShadow:soundOn?"0 0 20px rgba(124,124,255,.5)":"none",transition:"all .3s"}}>
        {soundOn ? "🔊" : "🔇"}
      </motion.button>

      <div style={{position:"relative",zIndex:1}}>
        <Hero theme={theme} />
        <section id="journey">
          <University theme={theme} />
          <Builder    theme={theme} />
        </section>
        <ProjectsCarousel theme={theme} onOpenProject={setOpenProject} />
        <DataLab theme={theme} />
        <Future  theme={theme} />
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectFullscreen
            key={openProject.id}
            project={openProject}
            onClose={() => { setOpenProject(null); }}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
