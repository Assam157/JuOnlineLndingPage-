import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./etce.css";
export function ProjectResearchCarousels() {
  const videoUrl = "https://www.youtube.com/embed/PukqEK_CPaQ?si=bV9LGRgjNxHyJIDn";

  const projects = [
    { title: "Smart Communication System", img: "/SayanSir.png" },
    { title: "IoT Based Monitoring", img: "/logo.png" },
    { title: "AI Assisted Signal Processing", img: "/JUOne.png" }
  ];

  const research = [
    { title: "AI in Communication Networks", img: "/SayanSir.png" },
    { title: "VLSI Optimization Research", img: "/JUOne.png" },
    { title: "Neural Networks & Cognition", img: "/logo.png" }
  ];

  const [pIndex, setPIndex] = useState(0);
  const [rIndex, setRIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPIndex(i => (i + 1) % projects.length);
      setRIndex(i => (i + 1) % research.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="etce-dual-section">

        {/* PROJECTS */}
         <div className="etce-carousel-card">
  <h3>Projects Done</h3>
  
  <div className="etce-slide-wrapper">
    {/* Buttons are now INSIDE the wrapper with the image */}
    <button className="carousel-control left" onClick={() => setPIndex((pIndex - 1 + projects.length) % projects.length)}>‹</button>
    
    <div className="etce-carousel-slide" onClick={() => setShowVideo(true)}>
      <img src={projects[pIndex].img} alt="Project"  style={{
      width: "100%",          // 👈 IMAGE IS NOW SMALLER
      height: "100%",         // 👈 IMAGE IS NOW SMALLER
      objectFit: "contain",  // 👈 NO CROPPING
      border: "4px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
      background: "#000",
    }} />
      <div className="slide-overlay">
        <h4>{projects[pIndex].title}</h4>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </div>

    <button className="carousel-control right" onClick={() => setPIndex((pIndex + 1) % projects.length)}>›</button>
  </div>
</div>

        {/* RESEARCH */}
        <div className="etce-carousel-card">
  <h3>Research Work Published</h3>

  {/* Wrap the slide and buttons in a relative container */}
  <div className="etce-slide-wrapper" style={{ position: 'relative' }}>
    
    {/* Left Button */}
    <button 
      className="carousel-control left" 
      onClick={() => setRIndex((rIndex - 1 + research.length) % research.length)}
    >
      ‹
    </button>

    <div className="etce-carousel-slide" onClick={() => setShowVideo(true)}>
      <img src={research[rIndex].img} alt="Research"  style={{
      width: "100%",          // 👈 IMAGE IS NOW SMALLER
      height: "100%",         // 👈 IMAGE IS NOW SMALLER
      objectFit: "contain",  // 👈 NO CROPPING
      border: "4px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
      background: "#000",
    }}/>
      {/* Container for text so it sits over/under the image nicely */}
      <div className="slide-content">
        <h4>{research[rIndex].title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    {/* Right Button */}
    <button 
      className="carousel-control right" 
      onClick={() => setRIndex((rIndex + 1) % research.length)}
    >
      ›
    </button>
    
  </div>
</div>

      </div>

      {/* VIDEO MODAL */}
       {showVideo && (
  <div
    onClick={() => setShowVideo(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.75)",
      zIndex: 10000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "80%",
        maxWidth: "900px",
        aspectRatio: "16 / 9",
        background: "#000",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
        position: "relative",
      }}
    >
      <button
        onClick={() => setShowVideo(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 2,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          fontSize: "18px",
          padding: "6px 12px",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        ✕
      </button>

      <iframe
        src="https://www.youtube.com/embed/PukqEK_CPaQ?si=bV9LGRgjNxHyJIDn"
        title="Project Video"
        allowFullScreen
        frameBorder="0"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  </div>
)}

    </>
  );
}
