// import React from 'react'
// import '../styles/About.css'
// import sample from '../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg' ;

// export default function About(){
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <div className="about-grid">
//           <div className="about-text">
//             <h2>ABOUT ME</h2>
//             <p>
//               I’m Dorcas Anthony — a Full-Stack Web Developer and Creative Designer
//               who crafts elegant interfaces and robust web applications. I blend
//               design thinking with engineering to build beautiful, performant experiences.
//             </p>
//             <ul className="about-bullets">
//               <li>Creative | Reliable | Passionate</li>
//               <li>React, Node.js, Express, PostgreSQL</li>
//               <li>UI/UX Design, Figma, Accessibility</li>
//             </ul>
//           </div>
//           <div className="about-image">
//             <img src={sample} alt="About" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";
import "../styles/About.css";
import sample from "../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        {/* Image on the left */}
        <div className="about-image">
          <img src={sample} alt="Dorcas Anthony" />
        </div>

        {/* Text on the right */}
        <div className="about-text">
          <h2 className="about-heading">ABOUT ME</h2>
          <div className="about-divider"></div>

          <p className="about-desc">
  I’m <span>Dorcas Anthony</span> — a Full-Stack Web Developer and Creative Designer 
  passionate about transforming ideas into powerful digital experiences. 
  I focus on building modern, responsive, and visually engaging applications 
  where clean design meets strong functionality.
</p>

<ul className="about-bullets">
  <li> Innovative | Reliable | Passionate</li>
  <li> React • Node.js • Express • MongoDB</li>
  <li> UI/UX Design • Figma • Frontend Aesthetics • Accessibility</li>
</ul>


          <a href="/contact" className="about-btn">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
}
