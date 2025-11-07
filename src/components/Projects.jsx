// import React from 'react'
// import '../styles/Projects.css'


// import p1 from '../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg' ;
// // import p2 from '../assets/website-features.png';
// // import p3 from '../assets/contact-ui.png';

// const projects = [
//   { 
//     id: 1, 
//     title: 'dom site', 
//     img: '../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg', 
//     desc: 'Showcasing our latest premium human hair wigs — bone straight, body wave, HD lace, and glueless frontal styles. Includes pricing and customer reviews.', 
//     demo: 'https://jovial-bienenstitch-26b684.netlify.app/', 
//     code: 'https://github.com/Anthony-dorcas/originalproject.git'
//   },
//   { 
//     id: 2, 
//     title: 'Hair Installation Showcase', 
//     img: 'https://images.unsplash.com/photo-1613553474177-86a3e8a0b59b?auto=format&fit=crop&w=800&q=80', 
//     desc: 'A gallery featuring different installation techniques — frontal, closure, and glue-less units — with before & after transformations.', 
//     demo: 'https://www.tiktok.com/@yourhairbrand', 
//     code: 'https://www.yourhairbrand.com/installations'
//   },
//   { 
//     id: 3, 
//     title: 'Brand Campaign: “Slay With Confidence”', 
//     img: 'https://images.unsplash.com/photo-1589923188900-15a4d4e2c5a0?auto=format&fit=crop&w=800&q=80', 
//     desc: 'Marketing campaign featuring real clients rocking our wigs and extensions. Includes promotional videos, influencer collabs, and testimonials.', 
//     demo: 'https://youtube.com/@yourhairbrand', 
//     code: 'https://www.yourhairbrand.com/campaigns/slay-with-confidence'
//   },
// ];



// export default function Projects(){
//   return (
//     <section id="projects" className="projects">
//       <div className="container">
//         <h2>MY WORK</h2>
//         <div className="projects-grid">
//           {projects.map(p => (
//             <article className="project-card" key={p.id}>
//               <div className="project-thumb">
//                 <img src={p.img} alt={p.title}/>
//                 <div className="overlay">
//                   <h3>{p.title}</h3>
//                   <p>{p.desc}</p>
//                   <div className="links">
//                     <a href={p.demo} className="btn small">Demo</a>
//                     <a href={p.code} className="btn small outline">Code</a>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import React from 'react'
import '../styles/Projects.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import p1 from '../assets/WhatsApp Image 2025-11-06 at 01.42.41_cde863e8.jpg';
import p2 from '../assets/WhatsApp Image 2025-11-07 at 08.56.38_ebeea6b3.jpg';
import p3 from '../assets/WhatsApp Image 2025-11-07 at 08.12.57_603fd4db.jpg';
const projects = [
  { 
    id: 1, 
    title: 'DOM Site', 
    img: p1, 
    desc: 'A modern and visually appealing static website built with React to demonstrate clean UI design, responsive layouts,. The project focuses on showcasing brand identity and front-end development skills without backend integration.', 
    demo: 'https://jovial-bienenstitch-26b684.netlify.app/', 
    code: 'https://github.com/Anthony-dorcas/originalproject.git'
  },
  { 
  id: 2,
  title: 'School Database Management System',
  img: p2,
  desc: 'A PostgreSQL-based database system built and managed through pgAdmin 4 to handle student records, course data, teacher details, and grading structures efficiently. Focused on relational data integrity, normalization, and optimized SQL queries for performance and scalability.',
  demo: 'https://www.tiktok.com/@yourhairbrand',
  code: 'https://github.com/Anthony-dorcas/school-DB-project.git'
  },
  { 
    id: 3, 
    title: 'Personal Portfolio — Dorcas Anthony', 
    img: p3, 
    desc: 'A fully responsive personal portfolio website built with React to showcase my web development and design skills. It highlights my projects, technical expertise, and contact information through a clean, elegant interface that reflects my creativity and attention to detail.', 
    demo: 'https://youtube.com/@yourhairbrand', 
    code: 'https://www.yourhairbrand.com/campaigns/slay-with-confidence'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>MY WORK</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <article className="project-card" key={p.id}>
              <div className="project-thumb">
                <img src={p.img} alt={p.title} />
                <div className="overlay">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="links">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaExternalLinkAlt /> 
                    </a>
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaGithub /> 
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
