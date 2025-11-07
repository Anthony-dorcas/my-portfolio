// import React from 'react'
// import '../styles/Hero.css'
// // const heroImg = from '../assets/Gold & Black UI.png')
// import heroImg from '../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg';

// export default function Hero(){
//   return (
//     <section id="home" className="hero">
//       <div className="hero-inner">
//         <div className="hero-text">
//           <h1 className="hero-title">Hi, I’m <span>Dorcas Anthony</span></h1>
//           <p className="hero-sub">Full-Stack Web Developer & Creative Designer</p>
//           <div className="hero-cta">
//             <a href="/projects" className="btn primary">View My Work</a>
//             <a href="/contact" className="btn outline">Hire Me</a>
//           </div>
//         </div>
//         <div className="hero-art">
//           <img src={heroImg} alt="Hero art" />
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/WhatsApp Image 2025-09-30 at 05.14.30_3a23eb85.jpg";

export default function Hero() {


  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-img-wrapper">
          <img src={heroImg} alt="Dorcas Anthony" className="hero-img" />
        </div>
        <h1 className="hero-title">Hi, I'm <span>Dorcas Anthony</span></h1>
        <p className="hero-sub">Web Developer & Creative Designer</p>
        <div className="hero-buttons">
          <a href="/projects" className="btn primary">View My Work</a>
          <a href="/contact" className="btn outline">Hire Me</a>
        </div>
      </div>
     
    </section>
  );
}


