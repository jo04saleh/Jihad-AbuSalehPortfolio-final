import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { playClick } from "../utils/sound";

export default function ProjectFullscreen({ project, onClose, onNext, onPrev }) {
  useEffect(() => {
    const h = e => {
      if (e.key === "Escape") { onClose(); playClick('close'); }
      if (e.key === "ArrowRight") { onNext(); playClick('nav'); }
      if (e.key === "ArrowLeft") { onPrev(); playClick('nav'); }
    };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, onNext, onPrev]);

  const idx = PROJECTS.findIndex(p => p.id === project.id);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}
      style={{position:"fixed",inset:0,zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>{onClose();playClick('close');}}
        style={{position:"absolute",inset:0,background:"rgba(5,7,15,.88)",backdropFilter:"blur(22px)",WebkitBackdropFilter:"blur(22px)"}}/>

      <motion.div key={project.id} initial={{scale:.78,opacity:0,y:50}} animate={{scale:1,opacity:1,y:0}} exit={{scale:.82,opacity:0,y:30}} transition={{duration:.5,ease:[.16,1,.3,1]}}
        style={{position:"relative",width:"100%",maxWidth:880,maxHeight:"90vh",overflowY:"auto",borderRadius:28,background:project.gradient,border:`1px solid ${project.color}28`,boxShadow:`0 50px 130px ${project.color}28`,padding:"clamp(1.2rem,4vw,3rem)"}}>

        <motion.div animate={{y:[-25,25,-25],x:[-12,12,-12]}} transition={{duration:9,repeat:Infinity}}
          style={{position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",background:`radial-gradient(circle,${project.color}22 0%,transparent 70%)`,pointerEvents:"none"}}/>
        <motion.div animate={{y:[18,-18,18]}} transition={{duration:7,repeat:Infinity,delay:1}}
          style={{position:"absolute",bottom:"15%",left:-40,width:160,height:160,borderRadius:"50%",background:`radial-gradient(circle,${project.color}14 0%,transparent 70%)`,pointerEvents:"none"}}/>

        {/* Header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"2rem",flexWrap:"wrap",gap:"1rem"}}>
          <div style={{display:"flex",alignItems:"center",gap:"1.2rem",flexWrap:"wrap"}}>
            <motion.div animate={{rotate:[0,6,-6,0]}} transition={{duration:3.5,repeat:Infinity}} style={{fontSize:"3.5rem",lineHeight:1,flexShrink:0}}>{project.emoji}</motion.div>
            <div>
              <div style={{fontSize:".7rem",color:project.accent,letterSpacing:".16em",fontFamily:"'Cairo',sans-serif",fontWeight:700,marginBottom:".3rem",textTransform:"uppercase"}}>{project.year} · {project.subtitle}</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.4rem,4vw,2.3rem)",fontWeight:900,color:"#E5E7EB",margin:0}}>{project.title}</h2>
            </div>
          </div>
          <motion.button whileHover={{scale:1.1,rotate:90}} whileTap={{scale:.9}}
            onClick={()=>{onClose();playClick('close');}}
            style={{width:46,height:46,borderRadius:"50%",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)",color:"#E5E7EB",fontSize:"1.1rem",cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</motion.button>
        </div>

        {/* Description */}
        <p style={{fontFamily:"'Cairo',sans-serif",fontSize:"1rem",lineHeight:2,color:"#D1D5DB",margin:"0 0 2rem 0",borderRight:`3px solid ${project.color}`,paddingRight:"1.3rem"}}>{project.description}</p>

        {/* Details */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:".8rem",marginBottom:"2rem"}}>
          {project.details.map((d,i)=>(
            <motion.div key={i} initial={{opacity:0,x:-16}} animate={{opacity:1,x:0}} transition={{delay:i*.08+.25}}
              style={{background:"rgba(255,255,255,.05)",border:`1px solid ${project.color}20`,borderRadius:12,padding:".8rem 1rem",fontFamily:"'Cairo',sans-serif",fontSize:".82rem",color:"#D1D5DB",display:"flex",alignItems:"flex-start",gap:".6rem"}}>
              <span style={{color:project.color,flexShrink:0}}>✓</span>{d}
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div style={{display:"flex",flexWrap:"wrap",gap:".4rem",marginBottom:"2rem"}}>
          {project.tags.map(t=><span key={t} style={{background:`${project.color}12`,border:`1px solid ${project.color}30`,borderRadius:8,padding:".28rem .8rem",fontSize:".77rem",color:project.accent,fontFamily:"'Cairo',sans-serif"}}>{t}</span>)}
        </div>

        {/* Actions */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
          <div style={{display:"flex",gap:".8rem",flexWrap:"wrap"}}>
            <motion.a href={project.liveUrl} target="_blank" rel="noreferrer"
              whileHover={{scale:1.06,y:-2}} onClick={()=>playClick('soft')}
              style={{background:`linear-gradient(135deg,${project.color},${project.accent})`,color:"#fff",borderRadius:100,padding:".7rem 1.7rem",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".88rem",cursor:"pointer",boxShadow:`0 0 25px ${project.color}45`,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".4rem"}}>
              🔗 عرض المشروع
            </motion.a>
            <motion.a href={project.githubUrl} target="_blank" rel="noreferrer"
              whileHover={{scale:1.06,y:-2}} onClick={()=>playClick('soft')}
              style={{background:"rgba(255,255,255,.07)",color:"#E5E7EB",border:"1px solid rgba(255,255,255,.14)",borderRadius:100,padding:".7rem 1.7rem",fontFamily:"'Cairo',sans-serif",fontSize:".88rem",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:".4rem"}}>
              📂 GitHub
            </motion.a>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:".7rem"}}>
            <span style={{fontFamily:"'Cairo',sans-serif",fontSize:".75rem",color:"#6B7280"}}>{idx+1} / {PROJECTS.length}</span>
            <motion.button whileHover={{scale:1.12}} whileTap={{scale:.9}} onClick={()=>{onPrev();playClick('nav');}}
              style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)",color:"#E5E7EB",fontSize:"1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>←</motion.button>
            <motion.button whileHover={{scale:1.12}} whileTap={{scale:.9}} onClick={()=>{onNext();playClick('nav');}}
              style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.07)",border:"1px solid rgba(255,255,255,.14)",color:"#E5E7EB",fontSize:"1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>→</motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
