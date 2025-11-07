// import React, { useEffect, useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Loader from './components/Loader'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import AboutPage from './pages/AboutPage'
// import SkillsPage from './pages/SkillsPage'
// import ProjectsPage from './pages/ProjectsPage'
// import ContactPage from './pages/ContactPage'
// import Footer from './components/Footer'
// import './styles/global.css'
//  import AOS from "aos";
// import "aos/dist/aos.css";

// export default function App(){
//   const [loading, setLoading] = useState(true)

 

// useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);


//   useEffect(() => {
//     // show loader every time (per user request)
//     setLoading(true)
//     const t = setTimeout(() => setLoading(false), 3200)
//     return () => clearTimeout(t)
//   }, [])

//   return (
//     <>
//       {loading ? <Loader/> : (
//         <div className="app">
//           <Navbar />
//           <main>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/skills" element={<SkillsPage />} />
//               <Route path="/projects" element={<ProjectsPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       )}
//     </>
//   )
// }



import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import './styles/global.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Show loader ONLY on first site visit
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      // Don’t show loader again
      setLoading(false);
      return;
    }

    // Show loader for ~3.2s on first visit only
   const timer = setTimeout(() => {
  setLoading(false);
  sessionStorage.setItem("siteLoaded", "true");
}, 10000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
