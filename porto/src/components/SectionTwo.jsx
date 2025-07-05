import React from "react";

export default function SectionTwo() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1 }}></div>
      <div
        style={{
          flex: 2,
          paddingLeft: "300px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Tentang Saya</h2>
        <p>
          Saya adalah <strong>Fullstack Developer</strong> dan{" "}
          <strong>Game Developer</strong> yang antusias membangun aplikasi web
          dan game interaktif dari frontend hingga backend. Dengan keahlian di{" "}
          <strong>React</strong>, <strong>Node.js</strong>, dan{" "}
          <strong>Three.js</strong>, serta pengalaman membuat game menggunakan{" "}
          <strong>Unity</strong> dan <strong>Blender</strong>, saya berfokus
          menciptakan produk digital yang tidak hanya berfungsi, tapi juga
          menyenangkan digunakan dan enak dilihat.
        </p>
      </div>
    </section>
  );
}
