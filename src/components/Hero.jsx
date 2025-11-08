

import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
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
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn outline">Hire Me</Link>
        </div>
      </div>

    </section>
  );
}


