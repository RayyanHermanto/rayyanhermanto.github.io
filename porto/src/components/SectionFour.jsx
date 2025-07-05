import React, { useState } from "react";

export default function SectionFour() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Tanam AI (FE)",
      image: "/images/tanamai.jpg",
      link: "https://github.com/tatangwarianta/capstone_tanamAI",
      logos: ["/icons/javascript.svg", "/icons/html.svg", "/icons/css.svg"],
      description:
        "Tanam AI adalah proyek front-end yang saya kembangkan selama mengikuti bootcamp Dicoding. Website ini menampilkan fitur pendeteksian Hama melalui foto dengan antarmuka interaktif. Proyek ini dideploy di GitHub dan dibangun menggunakan Native JS, HTML, dan CSS.",
    },
    {
      title: "Tanam AI (BE)",
      image: "/images/server_tanamAi.png",
      link: "https://github.com/RayyanHermanto/server_capstone",
      logos: ["/icons/nodejs.svg", "/icons/tensorflow.svg", "/icons/hapi.svg"],
    },
    {
      title: "Guardian Forest",
      image: "/images/guardianforest.jpg",
      link: "https://github.com/kamu/landing-animasi",
      logos: ["/icons/godot.svg"],
    },
  ];

  const techs = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Three.js", icon: "/icons/threejs.svg" },
    { name: "HAPI", icon: "/icons/hapi.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "GDScript", icon: "/icons/godot.svg" },
    { name: "Unity", icon: "/icons/unity.svg" },
  ];

  const certificates = [
    {
      title: "Front-End Web Developer",
      image: "/images/frontend-cert.jpg",
      link: "https://www.dicoding.com/certificates/1234abcd",
    },
    {
      title: "Front-End Web Developer",
      image: "/images/frontend-cert.jpg",
      link: "https://www.dicoding.com/certificates/1234abcd",
    },
    {
      title: "Front-End Web Developer",
      image: "/images/frontend-cert.jpg",
      link: "https://www.dicoding.com/certificates/1234abcd",
    },
    {
      title: "Front-End Web Developer",
      image: "/images/frontend-cert.jpg",
      link: "https://www.dicoding.com/certificates/1234abcd",
    },
    {
      title: "Front-End Web Developer",
      image: "/images/frontend-cert.jpg",
      link: "https://www.dicoding.com/certificates/1234abcd",
    },
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
        {["projects", "techs", "certificates"].map((tab) => (
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
            {tab === "projects"
              ? "My Projects"
              : tab === "techs"
                ? "Bahasa / Framework"
                : "Sertifikat"}
          </button>
        ))}
      </div>

      {/* Cards with Fade Transition */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: activeTab === "techs" ?"repeat(auto-fit, minmax(100px, 1fr)" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          justifyItems: "center",
          maxWidth: "1000px", // agar tidak terlalu lebar di layar besar
          margin: "0 auto",
          padding: "0 16px", // biar ada padding di sisi kecil
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
              }}
            >
              <div
                className="project-card"
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  background: "#222",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                  opacity: 0,
                  animation: "fadeIn 0.6s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "150%";
                  card.style.maxWidth = "450px";
                  card.style.zIndex = "10";
                  card.style.position = "absolute";
                  card.querySelector(".extra-details").style.opacity = "1";
                  card.querySelector(".extra-details").style.maxHeight =
                    "250px";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "100%";
                  card.style.zIndex = "1";
                  card.style.position = "relative";
                  card.querySelector(".extra-details").style.opacity = "0";
                  card.querySelector(".extra-details").style.maxHeight = "0px";
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                />
                <h3 style={{ margin: "0 0 12px", fontSize: "1.25rem" }}>
                  {p.title}
                </h3>
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

                {/* Detail tambahan */}
                <div
                  className="extra-details"
                  style={{
                    marginTop: "12px",
                    color: "#ccc",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  {p.description || "No Description."}
                </div>

                {/* Logo kecil */}
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
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 10px",
                  display: "block",
                }}
              />
              <h4 style={{ color: "#fff", fontSize: "1rem", margin: 0 }}>
                {t.name}
              </h4>
            </div>
          ))}
        {activeTab === "certificates" &&
          certificates.map((p, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                maxWidth: "320px",
              }}
            >
              <div
                className="project-card"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  background: "#222",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                  opacity: 0,
                  animation: "fadeIn 0.6s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  overflow: "hidden",
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "150%";
                  card.style.zIndex = "10";
                  card.style.position = "absolute";
                  const extra = card.querySelector(".extra-details");
                  extra.style.opacity = "1";
                  extra.style.maxHeight = "250px";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.width = "100%";
                  card.style.zIndex = "1";
                  card.style.position = "relative";
                  const extra = card.querySelector(".extra-details");
                  extra.style.opacity = "0";
                  extra.style.maxHeight = "0px";
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "16px",
                  }}
                />
                <h3 style={{ margin: "0 0 12px", fontSize: "1.25rem" }}>
                  {p.title}
                </h3>
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
                  Lihat Sertifikat
                </a>

                <div
                  className="extra-details"
                  style={{
                    marginTop: "12px",
                    color: "#ccc",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  {p.description || "No Description."}
                </div>

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
            </div>
          ))}
      </div>
    </section>
  );
}
