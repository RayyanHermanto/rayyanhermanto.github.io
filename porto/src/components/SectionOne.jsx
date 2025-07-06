import { Center } from "@react-three/drei";
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
          color: "#fff",
          zIndex: 5,
          transform: "translatey(-150px)",
        }}
      >
        <h2
          style={{
            fontSize: "26px", // kecil
            margin: "0 0 0px 0", // menempel di atas nama
            color: "rgba(255, 255, 255, 0.6)", // lebih pudar
            fontWeight: "normal",
          }}
        >
          Hi! Saya
        </h2>
        <p
          style={{
            fontSize: "46px", // besar
            margin: 0,
            fontWeight: "700", // lebih tebal
            color: "#ffffff", // putih solid
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.4)", // agar menonjol
          }}
        >
          Rayyan Syahbani<br></br> Hermanto
        </p>
      </div>

      <div
        style={{
          flex: 1,
          margin: "10px",
          padding: "20px",
          color: "#fff",
          zIndex: 5,
          textAlign: "center",
          fontSize: "20px",
          transform: "translatex(+30px)",
        }}
      >
        <h2>Fullstack Web Developer</h2>
        <h2>&</h2>
        <h2>Game Dev</h2>
      </div>
    </section>
  );
}
