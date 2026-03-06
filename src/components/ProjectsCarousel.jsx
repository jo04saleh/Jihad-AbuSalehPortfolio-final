import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { playClick } from "../utils/sound";

function ProjectCard({ project, relIndex, isActive, onClick, isMobile }) {
  const abs = Math.abs(relIndex);
  const W = isMobile ? Math.min(window.innerWidth - 48, 300) : 300;
  return (
    <div onClick={onClick} style={{
      position:"absolute", left:"50%", top:"50%",
      width:W, height:isMobile?360:400,
      marginLeft:-W/2, marginTop:isMobile?-180:-200,
      borderRadius:22, overflow:"hidden", cursor:"pointer",
      background:project.gradient,
      border:isActive?`1px solid ${project.color}55`:"1px solid rgba(255,255,255,.06)",
      transform:`translateX(${relIndex*(isMobile?0:190)}px) translateZ(${isActive?0:-abs*70}px) scale(${isActive?1:isMobile?0:Math.max(.72,1-abs*.13)}) rotateY(${isMobile?0:relIndex*-9}deg)`,
      opacity:isActive?1:isMobile?0:Math.max(.25,1-abs*.28),
      transition:"all .55s cubic-bezier(.16,1,.3,1)",
      zIndex:isActive?20:1,
      boxShadow:isActive?`0 32px 90px ${project.color}38`:"0 8px 24px rgba(0,0,0,.4)",
      userSelect:"none",
      pointerEvents:isActive||!isMobile?"auto":"none",
    }}>
      <div style={{padding:"2rem 1.8rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        <div style={{fontSize:"3.2rem",lineHeight:1}}>{project.emoji}</div>
        <span style={{background:`${project.color}1a`,border:`1px solid ${project.color}35`,borderRadius:100,padding:".25rem .75rem",fontSize:".68rem",color:project.accent,fontFamily:"'Cairo',sans-serif"}}>{project.year}</span>
      </div>
      <div style={{padding:"0 1.8rem 1.5rem"}}>
        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",fontWeight:800,color:"#E5E7EB",margin:"0 0 .3rem 0"}}>{project.title}</h3>
        <p style={{fontFamily:"'Cairo',sans-serif",fontSize:".78rem",color:project.accent,margin:"0 0 1.2rem 0"}}>{project.subtitle}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:".35rem"}}>
          {project.tags.slice(0,3).map(t=><span key={t} style={{background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.1)",borderRadius:6,padding:".18rem .55rem",fontSize:".68rem",color:"#9CA3AF",fontFamily:"'Cairo',sans-serif"}}>{t}</span>)}
        </div>
      </div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"1.2rem 1.8rem",background:`linear-gradient(to top,${project.color}18,transparent)`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{fontFamily:"'Cairo',sans-serif",fontSize:".75rem",color:"#6B7280"}}>{isActive?"اضغط للتفاصيل":"اضغط للتحديد"}</span>
        <div style={{width:30,height:30,borderRadius:"50%",background:isActive?project.color:"rgba(255,255,255,.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".85rem",transition:"background .3s"}}>→</div>
      </div>
      {isActive&&<div style={{position:"absolute",inset:0,background:`radial-gradient(circle at 50% 0%,${project.color}12,transparent 65%)`,pointerEvents:"none"}}/>}
    </div>
  );
}

export default function ProjectsCarousel({ theme, onOpenProject }) {
  const [active, setActive] = useState(0);
  const dragX = useRef(null);
  const autoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const total = PROJECTS.length;

  useEffect(() => {
    const c = () => setIsMobile(window.innerWidth <= 640);
    c(); window.addEventListener("resize", c);
    return () => window.removeEventListener("resize", c);
  }, []);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setActive(a => (a+1)%total), 3500);
  }, [total]);

  useEffect(() => { resetAuto(); return () => clearInterval(autoRef.current); }, [resetAuto]);

  const go = d => { setActive(a => (a+d+total)%total); resetAuto(); playClick('nav'); };
  const hc = theme === "dark" ? "#E5E7EB" : "#0B0F1A";

  return (
    <section id="projects" style={{padding:"6rem 0 5rem"}}>
      <motion.div initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true}} style={{textAlign:"center",marginBottom:"4rem",padding:"0 1.5rem"}}>
        <div style={{fontSize:".72rem",color:"#7C7CFF",letterSpacing:".22em",fontFamily:"'Cairo',sans-serif",fontWeight:700,marginBottom:".9rem",textTransform:"uppercase"}}>ما بنيته</div>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,5.5vw,4rem)",fontWeight:900,color:hc,margin:0}}>المشاريع</h2>
      </motion.div>

      <div style={{position:"relative",height:460,perspective:"1400px",overflow:"hidden"}}
        onMouseDown={e=>{dragX.current=e.clientX;}}
        onMouseUp={e=>{if(dragX.current!==null){const d=e.clientX-dragX.current;if(Math.abs(d)>40)go(d>0?-1:1);dragX.current=null;}}}
        onTouchStart={e=>{dragX.current=e.touches[0].clientX;}}
        onTouchEnd={e=>{if(dragX.current!==null){const d=e.changedTouches[0].clientX-dragX.current;if(Math.abs(d)>40)go(d>0?-1:1);dragX.current=null;}}}>
        {PROJECTS.map((p,i)=>{
          const rel=((i-active+total)%total+total)%total;
          const c=rel>total/2?rel-total:rel;
          return <ProjectCard key={p.id} project={p} relIndex={c} isActive={i===active} isMobile={isMobile}
            onClick={()=>{ if(i===active){onOpenProject(p);playClick('open');}else{setActive(i);resetAuto();playClick('nav');} }}/>;
        })}
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"1.2rem",marginTop:"2.5rem"}}>
        <motion.button whileTap={{scale:.88}} onClick={()=>go(-1)} style={{width:46,height:46,borderRadius:"50%",background:"rgba(124,124,255,.1)",border:"1px solid rgba(124,124,255,.28)",color:"#7C7CFF",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>←</motion.button>
        {PROJECTS.map((_,i)=><motion.button key={i} whileHover={{scale:1.3}} onClick={()=>{setActive(i);resetAuto();playClick('nav');}} style={{width:i===active?26:8,height:8,borderRadius:100,background:i===active?"#7C7CFF":"rgba(124,124,255,.22)",border:"none",cursor:"pointer",padding:0,transition:"width .35s ease"}}/>)}
        <motion.button whileTap={{scale:.88}} onClick={()=>go(1)} style={{width:46,height:46,borderRadius:"50%",background:"rgba(124,124,255,.1)",border:"1px solid rgba(124,124,255,.28)",color:"#7C7CFF",fontSize:"1.1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>→</motion.button>
      </div>

      <motion.div key={active} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} style={{textAlign:"center",marginTop:"1.5rem"}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.3rem",color:hc,marginBottom:".25rem"}}>{PROJECTS[active].title}</div>
        <div style={{fontFamily:"'Cairo',sans-serif",fontSize:".82rem",color:PROJECTS[active].color}}>{PROJECTS[active].subtitle}</div>
      </motion.div>
    </section>
  );
}
