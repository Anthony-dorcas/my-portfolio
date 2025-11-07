

import React, { useEffect, useState } from "react";
import "../styles/Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show loader only on first visit
    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      setVisible(false);
      return;
    }

    // Show the loader for 12 seconds, then fade out smoothly
    const timer = setTimeout(() => {
      const loader = document.querySelector(".da-loader");
      if (loader) loader.classList.add("hidden");

      // Wait 1s for fade-out animation before removing from DOM
      setTimeout(() => setVisible(false), 1000);

      sessionStorage.setItem("siteLoaded", "true");
    }, 10000); // ⏳ Show loader for 12 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // Hide loader after fade-out

  return (
    <div className="da-loader">
      <div className="loader-center">
        {/* DA Logo */}
        <div className="da-monogram">DA</div>

        {/* Rotating Rings */}
        <svg
          className="rings"
          width="220"
          height="220"
          viewBox="0 0 220 220"
          aria-hidden="true"
        >
          <circle className="outer" cx="110" cy="110" r="96" />
          <circle className="middle" cx="110" cy="110" r="66" />
          <circle className="inner" cx="110" cy="110" r="36" />
        </svg>

        {/* Particles */}
        <div className="particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <span className="particle" key={i}></span>
          ))}
        </div>

        {/* Tagline */}
        <p className="tagline">CRAFTING DIGITAL EXCELLENCE</p>
      </div>
    </div>
  );
}
