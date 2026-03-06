import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "../data/projects";
import { playClick } from "../utils/sound";

export default function Hero({ theme }) {
  const [displayed, setDisplayed] = useState("");
  const fullText = PERSONAL.title;

  useEffect(() => {
    let i = 0; setDisplayed("");
    const t = setInterval(() => { setDisplayed(fullText.slice(0, ++i)); if (i >= fullText.length) clearInterval(t); }, 80);
    return () => clearInterval(t);
  }, [fullText]);

  const tc = theme === "dark" ? "#E5E7EB" : "#0B0F1A";

  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"80px 1.5rem 0",textAlign:"center"}}>
      <div style={{position:"absolute",width:700,height:700,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,124,255,.1) 0%,transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}}/>

      <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.2,ease:[.16,1,.3,1]}}
        style={{position:"relative",zIndex:1,maxWidth:800,width:"100%"}}>

        <motion.div initial={{opacity:0,scale:.75}} animate={{opacity:1,scale:1}} transition={{delay:.3}}
          style={{display:"inline-flex",alignItems:"center",gap:".6rem",background:"rgba(124,124,255,.09)",border:"1px solid rgba(124,124,255,.28)",borderRadius:100,padding:".4rem 1.3rem",marginBottom:"2rem",fontSize:".78rem",color:"#A78BFA",fontFamily:"'Cairo',sans-serif",fontWeight:600}}>
          <span className="pulse-dot" style={{display:"inline-block",width:7,height:7,borderRadius:"50%",background:"#10B981",flexShrink:0}}/>
          Full-Stack Developer · متاح للعمل
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.5,duration:1}}
          style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2.8rem,9vw,7.5rem)",fontWeight:900,lineHeight:.95,marginBottom:"1.8rem",background:theme==="dark"?"linear-gradient(135deg,#E5E7EB 0%,#7C7CFF 55%,#A78BFA 100%)":"linear-gradient(135deg,#0B0F1A 0%,#4F46E5 55%,#7C3AED 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"-.025em"}}>
          {PERSONAL.name}
        </motion.h1>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
          style={{fontFamily:"'Cairo',sans-serif",fontSize:"clamp(.95rem,2.5vw,1.5rem)",color:theme==="dark"?"#9CA3AF":"#6B7280",marginBottom:"3rem",minHeight:"2.2em"}}>
          {displayed}
          <motion.span animate={{opacity:[1,0,1]}} transition={{repeat:Infinity,duration:.75}} style={{color:"#7C7CFF",marginRight:2}}>|</motion.span>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.3}}
          style={{display:"flex",gap:"3rem",justifyContent:"center",marginBottom:"3rem",flexWrap:"wrap"}}>
          {[{n:PERSONAL.yearsExp,l:"سنوات خبرة"},{n:PERSONAL.projectsCount,l:"مشروع منجز"},{n:PERSONAL.techCount,l:"تقنية متقنة"}].map(s=>(
            <motion.div key={s.n} whileHover={{y:-4}} style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.6rem",fontWeight:800,color:"#7C7CFF",lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:".78rem",color:"#6B7280",fontFamily:"'Cairo',sans-serif",marginTop:".3rem"}}>{s.l}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.6}}
          style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <motion.a href="#projects" whileHover={{scale:1.06,y:-3}} whileTap={{scale:.97}}
            onClick={()=>playClick('soft')}
            style={{background:"linear-gradient(135deg,#7C7CFF,#A78BFA)",color:"#fff",padding:".85rem 2.4rem",borderRadius:100,textDecoration:"none",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".95rem",boxShadow:"0 0 35px rgba(124,124,255,.45)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
            🚀 اكتشف أعمالي
          </motion.a>
          <motion.a href="#contact" whileHover={{scale:1.06,y:-3}} whileTap={{scale:.97}}
            onClick={()=>playClick('soft')}
            style={{background:"transparent",color:tc,padding:".85rem 2.4rem",borderRadius:100,textDecoration:"none",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".95rem",border:"1px solid rgba(124,124,255,.38)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
            تواصل معي
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3}}
        style={{position:"absolute",bottom:"2rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:".5rem"}}>
        <span style={{fontSize:".65rem",color:"#6B7280",letterSpacing:".1em",fontFamily:"'Cairo',sans-serif"}}>اسكرول</span>
        <motion.div animate={{y:[0,10,0]}} transition={{repeat:Infinity,duration:1.6}} style={{width:1,height:44,background:"linear-gradient(to bottom,rgba(124,124,255,.9),transparent)"}}/>
      </motion.div>
    </section>
  );
}
