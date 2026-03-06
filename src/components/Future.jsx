import { motion } from "framer-motion";
import DramaticSection from "./DramaticSection";
import { SECTIONS, PERSONAL } from "../data/projects";
import { playClick } from "../utils/sound";

export default function Future({ theme }) {
  const tc = theme === "dark" ? "#E5E7EB" : "#0B0F1A";
  const sc = theme === "dark" ? "#9CA3AF" : "#6B7280";

  return (
    <>
      <DramaticSection section={SECTIONS[2]} theme={theme} index={2} />

      <section id="contact" style={{padding:"7rem 1.5rem",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",width:550,height:550,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,124,255,.07) 0%,transparent 70%)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none"}}/>

        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          style={{maxWidth:620,margin:"0 auto",position:"relative",zIndex:1}}>
          <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✉️</div>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(2rem,4.5vw,3.5rem)",fontWeight:900,color:tc,margin:"0 0 1rem 0"}}>لنتحدث</h2>
          <p style={{fontFamily:"'Cairo',sans-serif",fontSize:"1.02rem",color:sc,lineHeight:1.9,marginBottom:"2.5rem"}}>
            هل لديك مشروع يستحق البناء؟<br/>أنا دائماً مفتوح للفرص والتعاون الجديد.
          </p>

          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
            <motion.a whileHover={{scale:1.07,y:-3}} whileTap={{scale:.97}}
              href={`mailto:${PERSONAL.email}`} onClick={()=>playClick('soft')}
              style={{background:"linear-gradient(135deg,#7C7CFF,#A78BFA)",color:"#fff",padding:".9rem 2.5rem",borderRadius:100,textDecoration:"none",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".95rem",boxShadow:"0 0 30px rgba(124,124,255,.42)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
              📧 راسلني
            </motion.a>
            <motion.a whileHover={{scale:1.07,y:-3}} whileTap={{scale:.97}}
              href={PERSONAL.linkedin} target="_blank" rel="noreferrer" onClick={()=>playClick('soft')}
              style={{background:"transparent",color:tc,padding:".9rem 2.5rem",borderRadius:100,textDecoration:"none",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".95rem",border:"1px solid rgba(124,124,255,.35)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
              💼 LinkedIn
            </motion.a>
            <motion.a whileHover={{scale:1.07,y:-3}} whileTap={{scale:.97}}
              href={PERSONAL.github} target="_blank" rel="noreferrer" onClick={()=>playClick('soft')}
              style={{background:"transparent",color:tc,padding:".9rem 2.5rem",borderRadius:100,textDecoration:"none",fontFamily:"'Cairo',sans-serif",fontWeight:700,fontSize:".95rem",border:"1px solid rgba(255,255,255,.15)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
              🐱 GitHub
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer style={{padding:"1.5rem",textAlign:"center",borderTop:"1px solid rgba(124,124,255,.1)"}}>
        <p style={{fontFamily:"'Cairo',sans-serif",fontSize:".8rem",color:"#6B7280",margin:0}}>
          صُنع بـ ❤️ و ☕ · {PERSONAL.name} © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
