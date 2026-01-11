import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./etce.css";

const images = [
  "/JUOne.png",
  "/logo.png",
  "/favicon.ico",
];

export default function ETCEFacultyLandingPage() {
  const [index, setIndex] = useState(0);
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="etce-root">

      {/* ================= HEADER ================= */}
      <header className="etce-top">
        <div className="etce-left">
          <img src="/JUOne.png" alt="Jadavpur University" />
          <div>
            <h1>Department of Electronics & Telecommunication Engineering</h1>
            <p>Jadavpur University, Kolkata</p>
          </div>
        </div>

        <div className="etce-right">
          <img src="/logo.png" alt="JU Logo" />
        </div>
      </header>

      {/* ================= NAVBAR ================= */}
      <nav className="etce-nav">
        <Link to="/organisation">Organisation</Link>
        <Link to="/offerings">Faculty</Link>
        <Link to="/documents">Research</Link>
        <Link to="/resources">Publications</Link>
        <Link to="/connect">Contact</Link>

        {/* PORTAL BUTTON */}
        <button
          className="portal-btn"
          onClick={() => setShowPortal(!showPortal)}
        >
          Portal Access
        </button>
      </nav>

      {/* ================= PORTAL DROPDOWN ================= */}
      {showPortal && (
        <section className="etce-portal-section">
          <div className="portal-card">
            <h3>Student Portal</h3>
            <Link to="/student-login">Login</Link>
            <Link to="/student-signup">Sign Up</Link>
          </div>

          <div className="portal-card">
            <h3>Faculty Portal</h3>
            <Link to="/faculty-login">Login</Link>
            <Link to="/faculty-signup">Sign Up</Link>
          </div>
        </section>
      )}

      {/* ================= CAROUSEL ================= */}
      <section className="etce-hero">
        <img
          src={images[index]}
          alt="ETCE Campus"
          className="etce-hero-bg"
        />

        <div className="etce-overlay"></div>

        <div className="etce-hero-content">
          <h2>ETCE Faculty & Research Ecosystem</h2>
          <p>
            Advancing education, research, and innovation in Electronics and
            Telecommunication Engineering.
          </p>
        </div>

        <button className="etce-arrow left" onClick={prev}>‹</button>
        <button className="etce-arrow right" onClick={next}>›</button>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="etce-info-section">
        <div className="etce-info-card">
          <h3>About the ETCE Department</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="etce-info-card">
          <h3>Faculty & Research</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="etce-info-card">
          <h3>Academics & Outreach</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
      {/*=======Depaartment Head ======*/}
      {/* ================= HOD SECTION ================= */}
<section className="etce-extra-section">
  <div className="etce-section-bar">
    Head of the Department
  </div>

  <div className="etce-extra-content">
    <img
      src="/SubhabinduSir.png"
      title="Subhabindu Sir"
      alt="HOD"
      className="etce-extra-img"
    />

    <div>
      <h3>Prof. Subhabindu Sir</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prof. Subhabindu
        Sir provides academic leadership to the ETCE department with a strong
        emphasis on research excellence, innovation, and student mentorship.
        Under his guidance, the department continues to evolve as a center of
        technical and scholarly excellence.
      </p>
    </div>
  </div>
</section>
{/* ================= NOTABLE PROFESSORS ================= */}
<section className="etce-extra-section">
  <div className="etce-section-bar">
    Notable Professors
  </div>

  <div className="etce-professor-grid">
    <div className="etce-prof-card">
      <img
        src="/ShelimamSir.png"
        title="Shelimam Sir"
        alt="Shelimam Sir"
        className="etce-extra-img"
      />
      <h3>Shelimam Sir</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Areas of
        interest include communication systems, signal processing, and advanced
        research supervision.
      </p>
    </div>

    <div className="etce-prof-card">
      <img
        src="/SayanSir.png"
        title="Sayan Sir"
        alt="Sayan Sir"
        className="etce-extra-img"
      />
      <h3>Sayan Sir</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Actively
        involved in embedded systems, VLSI design, and interdisciplinary
        projects.
      </p>
    </div>

    <div className="etce-prof-card">
      <img
        src="/AmitKonarSir.png"
        title="Amit Konar Sir"
        alt="Amit Konar Sir"
        className="etce-extra-img"
      />
      <h3>Amit Konar Sir</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Renowned for
        work in artificial intelligence, neural networks, and cognitive systems.
      </p>
    </div>
  </div>
</section>
{/* ================= CONTACT US BAR ================= */}
<footer className="etce-contact-footer">
  <div className="contact-left">
    © ETCE Department, Jadavpur University
  </div>

  <div className="contact-right">
    <span>📞 +91 98765 43210</span>
    <span>✉️ etce.contact@ju.edu</span>
  </div>
</footer>

    </div>
  );
}
