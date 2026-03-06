export const PROJECTS = [
  {
    id:1, title:"Darsak · دارسك", subtitle:"تطبيق تعليمي ذكي — مبني بـ Vibe Coding", year:"2024",
    tags:["React Native","Node.js","MongoDB","AI","Vibe Coding"], color:"#4A6CF7", accent:"#7C7CEA",
    description:"تطبيق تعليمي متكامل بنيته بالكامل باستخدام Vibe Coding — يجمع بين الذكاء الاصطناعي وتجربة مستخدم سلسة لتقديم تجربة تعلّم شخصية وفعّالة. يساعد الطلاب على تنظيم دراستهم، تتبع تقدمهم، والوصول لمحتوى تفاعلي بواجهة عربية أنيقة.",
    details:["مبني بالكامل بـ Vibe Coding","خوارزمية تعلّم شخصية لكل طالب","تتبع التقدم والإحصائيات اليومية","واجهة عربية سلسة واحترافية"],
    liveUrl:"#", githubUrl:"https://github.com/jo04saleh", emoji:"🎓",
    gradient:"linear-gradient(135deg,#0d1535 0%,#1a2456 50%,#0d1535 100%)",
  },
  {
    id:2, title:"Sway Bar", subtitle:"نظام إدارة فعاليات متعدد الفروع", year:"2024",
    tags:["React","Laravel","PostgreSQL","Supabase"], color:"#A855F7", accent:"#D8B4FE",
    description:"تطبيق ويب Full-Stack متكامل لإدارة شركات الفعاليات متعددة الفروع. يشمل إدارة العملاء، العقود، المدفوعات، المخزون، والتقارير المالية — مع واجهة ثنائية اللغة (عربي/إنجليزي) ودعم Dark/Light mode. الـ Frontend على Netlify، Backend على Render، وقاعدة البيانات على Supabase.",
    details:["إدارة فروع متعددة مع صلاحيات Owner/Manager","تتبع العقود والمدفوعات بالكامل","إدارة المخزون مع تنبيهات النفاذ","تقارير مالية ومقارنة بين الفروع"],
    liveUrl:"https://swaybar.netlify.app/", githubUrl:"https://github.com/jo04saleh", emoji:"🎪",
    gradient:"linear-gradient(135deg,#1a0a2e 0%,#2d1054 50%,#1a0a2e 100%)",
  },
  {
    id:3, title:"Sway Manager", subtitle:"لوحة تحكم متقدمة لـ Sway Bar", year:"2025",
    tags:["React","Laravel","Supabase","Netlify","Render"], color:"#EC4899", accent:"#F9A8D4",
    description:"نظام إدارة داخلي متطور مبني فوق بنية Sway Bar — يوفر لوحة تحكم احترافية للمديرين مع تحليلات متعمقة، إدارة الفريق، وأتمتة العمليات اليومية لشركات الفعاليات.",
    details:["لوحة تحكم تحليلية متقدمة","أتمتة العمليات والمهام اليومية","إدارة الفريق والجداول الزمنية","تكامل كامل مع Supabase & Render"],
    liveUrl:"#", githubUrl:"https://github.com/jo04saleh", emoji:"📋",
    gradient:"linear-gradient(135deg,#2d0a1e 0%,#4a1035 50%,#2d0a1e 100%)",
  },
  {
    id:4, title:"Neural Commerce", subtitle:"AI-Powered E-Commerce Platform", year:"2024",
    tags:["React","Python","TensorFlow","PostgreSQL"], color:"#7C7CFF", accent:"#A78BFA",
    description:"منصة تجارة إلكترونية مدعومة بالذكاء الاصطناعي تحلل سلوك المستخدم وتقدم توصيات شخصية في الوقت الفعلي.",
    details:["خوارزمية توصية بدقة 94%","معالجة 10,000+ طلب/ثانية","لوحة تحكم تحليلية مباشرة","5 بوابات دفع مدمجة"],
    liveUrl:"#", githubUrl:"https://github.com/jo04saleh", emoji:"🧠",
    gradient:"linear-gradient(135deg,#1a1a3e 0%,#0f0f2d 50%,#1a1a3e 100%)",
  },
  {
    id:5, title:"Data Lab", subtitle:"منصة تحليل البيانات التفاعلية", year:"2024",
    tags:["Python","D3.js","FastAPI","PostgreSQL"], color:"#00D4FF", accent:"#67E8F9",
    description:"منصة Full-Stack لتحليل وتصوير البيانات الضخمة. تُمكّن المستخدمين من استكشاف البيانات وبناء تقارير احترافية بسهولة.",
    details:["50+ نوع مخطط تفاعلي","تحديث مباشر في الوقت الفعلي","تصدير PDF/PNG/SVG","تكامل مع مصادر متعددة"],
    liveUrl:"#", githubUrl:"https://github.com/jo04saleh", emoji:"📊",
    gradient:"linear-gradient(135deg,#001a2e 0%,#003355 50%,#001a2e 100%)",
  },
];

export const PERSONAL = {
  name:"Jihad Abu Saleh",
  title:"Full-Stack Developer · بيبني الأفكار كوداً",
  email:"jo04saleh@gmail.com",
  github:"https://github.com/jo04saleh",
  linkedin:"https://www.linkedin.com/in/jihad-abu-saleh-033b97388",
  yearsExp:"3+", projectsCount:"10+", techCount:"15+",
};

export const SECTIONS = [
  { id:"university", title:"البداية", subtitle:"رحلة الجامعة", year:"2021 – 2025", icon:"🎓", color:"#7C7CFF",
    content:"في قاعات الجامعة بدأت القصة. بين أسطر الكود الأول والمشاريع الصغيرة، اكتشفت أن البرمجة ليست مجرد لغة — بل طريقة تفكير. من هنا بدأ مشواري كـ Full-Stack Developer." },
  { id:"builder", title:"Full-Stack", subtitle:"من الـ Frontend للـ Backend للـ Mobile", year:"2023 – 2025", icon:"⚡", color:"#00D4FF",
    content:"أبني تطبيقات متكاملة من الصفر — React وLaravel للويب، React Native للموبايل، Python للـ AI، وC++ حين يلزم الأمر. خبرة حقيقية في Vibe Coding أثبتتها بمشروع دارسك." },
  { id:"future", title:"الأفق", subtitle:"المستقبل الذي أبنيه", year:"2025 →", icon:"🚀", color:"#10B981",
    content:"أبني اليوم ما سيُشار إليه غداً. الأفق عندي ليس وظيفة ولا مجرد مشاريع — بل إمبراطورية رقمية. أسعى لتأسيس Data Lab كشركة برمجة عالمية المستوى، تجمع أفضل العقول وتصنع منتجات تُغيّر قواعد اللعبة. من تطبيقات فخمة تُبهر العالم، لفريق يبني المستقبل بأيدٍ عربية — هذا ليس حلماً، هذا المشروع القادم." },
];

export const SKILLS = [
  { name:"React / Next.js",        pct:92, color:"#61DAFB" },
  { name:"Laravel / PHP",          pct:88, color:"#FF2D20" },
  { name:"React Native (Mobile)",  pct:85, color:"#7C7CFF" },
  { name:"Node.js / Express",      pct:84, color:"#68D391" },
  { name:"Python / FastAPI / AI",  pct:80, color:"#FFD700" },
  { name:"PostgreSQL / MongoDB",   pct:85, color:"#FF6B6B" },
  { name:"C++ / Systems",          pct:75, color:"#A8B3CF" },
  { name:"Vibe Coding / AI Tools", pct:95, color:"#A855F7" },
];
