import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playClick } from "../utils/sound";

const NAV = [
  { label: "البداية",   href: "#hero"     },
  { label: "المسيرة",  href: "#journey"  },
  { label: "المشاريع", href: "#projects" },
  { label: "التواصل",  href: "#contact"  },
];

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const nb = scrolled
    ? theme === "dark" ? "rgba(11,15,26,.92)" : "rgba(249,250,251,.92)"
    : "transparent";
  const lc = theme === "dark" ? "#9CA3AF" : "#6B7280";

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .9, ease: [.16, 1, .3, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 64, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: nb, backdropFilter: scrolled ? "blur(24px)" : "none", borderBottom: scrolled ? "1px solid rgba(124,124,255,.12)" : "none", transition: "background .4s" }}
      >
        <motion.a href="#hero" whileHover={{ scale: 1.08 }} onClick={() => playClick('soft')}
          style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 900, background: "linear-gradient(135deg,#7C7CFF,#A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textDecoration: "none" }}>
          JAS.
        </motion.a>

        {/* Desktop */}
        <div className="desk-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {NAV.map(i => (
            <motion.a key={i.href} href={i.href} whileHover={{ y: -2 }}
              onClick={() => playClick('nav')}
              onMouseEnter={e => e.target.style.color = "#7C7CFF"}
              onMouseLeave={e => e.target.style.color = lc}
              style={{ color: lc, textDecoration: "none", fontSize: ".85rem", fontFamily: "'Cairo',sans-serif", fontWeight: 600, transition: "color .25s" }}>
              {i.label}
            </motion.a>
          ))}
          <motion.button whileHover={{ scale: 1.12, rotate: 20 }} whileTap={{ scale: .9 }}
            onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); playClick('soft'); }}
            style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(124,124,255,.1)", border: "1px solid rgba(124,124,255,.28)", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="mob-nav" style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
          <motion.button whileTap={{ scale: .9 }}
            onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); playClick('soft'); }}
            style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(124,124,255,.1)", border: "1px solid rgba(124,124,255,.28)", cursor: "pointer", fontSize: ".9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </motion.button>
          <motion.button whileTap={{ scale: .9 }}
            onClick={() => { setOpen(!open); playClick('nav'); }}
            style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(124,124,255,.1)", border: "1px solid rgba(124,124,255,.25)", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: "0 9px" }}>
            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: "100%", height: 2, background: "#7C7CFF", borderRadius: 2 }} />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} style={{ display: "block", width: "100%", height: 2, background: "#7C7CFF", borderRadius: 2 }} />
            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: "100%", height: 2, background: "#7C7CFF", borderRadius: 2 }} />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: .3 }}
            style={{ position: "fixed", top: 64, left: 0, right: 0, zIndex: 199, background: theme === "dark" ? "#0f1420" : "#fff", borderBottom: "1px solid rgba(124,124,255,.15)", backdropFilter: "blur(24px)", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: ".25rem" }}>
            {NAV.map((i, idx) => (
              <motion.a key={i.href} href={i.href}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * .07 }}
                onClick={() => { setOpen(false); playClick('nav'); }}
                style={{ color: theme === "dark" ? "#E5E7EB" : "#0B0F1A", textDecoration: "none", fontSize: "1.05rem", fontFamily: "'Cairo',sans-serif", fontWeight: 600, padding: ".85rem 1rem", borderRadius: 12, display: "block", transition: "background .2s" }}
                onMouseEnter={e => e.target.style.background = "rgba(124,124,255,.08)"}
                onMouseLeave={e => e.target.style.background = "transparent"}>
                {i.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){.desk-nav{display:none!important;}.mob-nav{display:flex!important;}}
        @media(min-width:769px){.desk-nav{display:flex!important;}.mob-nav{display:none!important;}}
      `}</style>
    </>
  );
}
