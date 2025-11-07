
import React from 'react'
import '../styles/Skills.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs,} from 'react-icons/fa'
import { SiFirebase, SiMongodb, SiGit, SiPostgresql } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 color="#E44D26" />, name: 'HTML' },
  { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS' },
 { icon: <SiGit color="#F05033" />, name: 'Git (Version Control)' },
{ icon: <FaJs color="#F7DF1E" />, name: 'JAVASCRIPT' },
  { icon: <FaReact color="#61DBFB" />, name: 'REACT JS' },
  { icon: <FaGithub color="#fff" />, name: 'GITHUB' },
  { icon: <FaNodeJs color="#3C873A" />, name: 'NODE JS' },
  { icon: <SiFirebase color="#FFCA28" />, name: 'FIREBASE' },
  { icon: <SiMongodb color="#4DB33D" />, name: 'MONGODB' },
  { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' },

]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-main">
        <h2 className="skills-title">What I do</h2>
        <p className="skills-desc">
         <p className="skills-desc">
  I am Dorcas Anthony from Nigeria, a passionate full-stack developer and creative designer. 
  I specialize in building responsive, user-friendly websites using modern front-end technologies 
  like React, HTML, CSS, and JavaScript, as well as powerful backend tools such as Node.js, Express, 
  and MongoDB. I enjoy turning ideas into visually appealing and fully functional digital experiences.
</p>

        </p>

        <div className="skills-grid">
          {skills.map((s, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <p className="skill-name">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
