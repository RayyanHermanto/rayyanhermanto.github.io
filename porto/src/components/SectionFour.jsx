import React, { useState } from "react";

export default function SectionFour() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Game Edukasi 3D",
      image: "/images/game-edukasi.avif",
      link: "https://github.com/kamu/game-edukasi",
      logos: ["/icons/react.svg"]
    },
    {
      title: "Game Edukasi 3D",
      image: "/images/game-edukasi.avif",
      link: "https://github.com/kamu/game-edukasi",
      logos: ["/icons/react.svg", "/icons/react.svg"]
    },
    {
      title: "Landing Page Animasi",
      image: "/images/landing.jpg",
      link: "https://github.com/kamu/landing-animasi",
    },
    {
      title: "Game Sederhana Unity",
      image: "/images/unitygame.jpg",
      link: "https://github.com/kamu/unity-game",
    },
    {
      title: "Game Edukasi 3D",
      image: "/images/game-edukasi.jpg",
      link: "https://github.com/kamu/game-edukasi",
    },
    {
      title: "Dashboard Realtime",
      image: "/images/dashboard.jpg",
      link: "https://github.com/kamu/dashboard-realtime",
    },
    {
      title: "Landing Page Animasi",
      image: "/images/landing.jpg",
      link: "https://github.com/kamu/landing-animasi",
    },
    {
      title: "Game Sederhana Unity",
      image: "/images/unitygame.jpg",
      link: "https://github.com/kamu/unity-game",
    },
    {
      title: "Game Edukasi 3D",
      image: "/images/game-edukasi.jpg",
      link: "https://github.com/kamu/game-edukasi",
    },
    {
      title: "Dashboard Realtime",
      image: "/images/dashboard.jpg",
      link: "https://github.com/kamu/dashboard-realtime",
    },
    {
      title: "Landing Page Animasi",
      image: "/images/landing.jpg",
      link: "https://github.com/kamu/landing-animasi",
    },
    {
      title: "Game Sederhana Unity",
      image: "/images/unitygame.jpg",
      link: "https://github.com/kamu/unity-game",
    },
  ];

  const techs = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Three.js", icon: "/icons/threejs.svg" },
    { name: "Unity", icon: "/icons/unity.svg" },
    { name: "Blender", icon: "/icons/blender.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Three.js", icon: "/icons/threejs.svg" },
    { name: "Unity", icon: "/icons/unity.svg" },
    { name: "Blender", icon: "/icons/blender.svg" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "black",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Portofolio & Teknologi</h2>

      {/* Tab Buttons */}
      <div style={{ marginBottom: "40px" }}>
        {["projects", "techs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              background: activeTab === tab ? "#fff" : "transparent",
              color: activeTab === tab ? "#000" : "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab === "projects" ? "My Projects" : "Bahasa / Framework"}
          </button>
        ))}
      </div>

      {/* Cards with Fade Transition */}
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "30px",
    justifyItems: "center",
    maxWidth: activeTab === "techs" ? "40%" : "60%",
    margin: "0 auto",
    transition: "opacity 0.5s ease",
    opacity: 1,
  }}
>
{activeTab === "projects" &&
  projects.map((p, i) => (
    <div
      key={i}
      style={{
        width: "100%",
        maxWidth: "320px",
        background: "#222",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        transform: i % 2 !== 0 ? "translateX(20px)" : "none",
        opacity: 0,
        animation: "fadeIn 0.6s ease forwards",
        animationDelay: `${i * 0.1}s`,
      }}
    >
      <img
        src={p.image}
        alt={p.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "16px" }}
      />
      <h3 style={{ margin: "0 0 12px", fontSize: "1.25rem" }}>{p.title}</h3>
      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#0af",
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: "0.95rem",
        }}
      >
        Lihat Proyek
      </a>

      {/* Seksi logo kecil */}
      {Array.isArray(p.logos) && p.logos.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {p.logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Tech ${index}`}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "4px",
                opacity: 0.85,
              }}
            />
          ))}
        </div>
      )}
    </div>
  ))}


  {activeTab === "techs" &&
    techs.map((t, i) => (
      <div
        key={i}
        style={{
          width: "100%",
          maxWidth: "160px",
          background: "#1a1a1a",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          opacity: 0,
          animation: "fadeIn 0.6s ease forwards",
          animationDelay: `${i * 0.1}s`,
        }}
      >
        <img
          src={t.icon}
          alt={t.name}
          style={{
            width: "120px",
            height: "120px",
            marginBottom: "10px",
          }}
        />
        <h4>{t.name}</h4>
      </div>
    ))}
</div>

    </section>
  );
}
