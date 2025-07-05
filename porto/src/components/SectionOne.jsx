import React from "react";

export default function SectionOne() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          margin: "10px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          color: "#fff",
        }}
      >
        <h2>Hi! Saya</h2>
        <p>Rayyan Syahbani Hermanto</p>
      </div>
      <div
        style={{
          flex: 1,
          margin: "10px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          color: "#fff",
        }}
      >
        <h2>⚙️ Fullstack & Game Dev</h2>
        <p>React · Node.js · Three.js · Unity</p>
        <p>🎯 Interaktif & Imersif</p>
        <p>💬 Ayo Kolaborasi!</p>
      </div>
    </section>
  );
}
