import React, { useEffect, useRef, useState } from "react";

export default function SectionThree() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;

      const scrollY = rect.top;
      const progress = 1 - (scrollY - end) / (start - end);

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineHeight = Math.min(scrollProgress * 150, 75);
  const lineHeightVh = `${lineHeight}vh`;

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "black",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Garis vertikal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "4px",
          height: lineHeightVh,
          background: "linear-gradient(to bottom, #ff66cc, #ff99cc)",
          borderRadius: "2px",
          transform: "translateX(-50%)",
          transition: "height 0.2s ease",
          marginTop: "10px",
          boxShadow: "0 0 15px 5px rgba(255, 102, 204, 0.6)", // Efek glow
        }}
      />
      {/* Titik di ujung bawah garis */}
      {lineHeight >= 10 && (
        <div
          style={{
            position: "absolute",
            top: `calc(${lineHeight}vh + 10px)`, // ikuti tinggi garis
            left: "50%",
            transform: "translateX(-50%)",
            width: "12px",
            height: "12px",
            backgroundColor: "#ff66cc",
            borderRadius: "50%",
            boxShadow: "0 0 10px 4px rgba(255, 102, 204, 0.5)",
            transition: "top 0.2s ease", // transisi sinkron dengan garis
          }}
        />
      )}

      {/* Teks kiri atas */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "calc(50% - 250px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 50 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Front-End And Back-End Cohort
        </h2>
        <p style={{ color: "#aaa", marginTop: "0px", fontSize: "0.9rem" }}>
          Coding Camp Powered By DBS Foundation
        </p>
      </div>

      {/* Teks kiri bawah */}
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "calc(50% - 290px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 70 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Internship At Diskominfo
          <br />
          Kota Semarang
        </h2>
      </div>

      {/* Teks kanan atas */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "calc(50% + 150px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 50 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Feb - Jun 2025
        </h2>
      </div>

      {/* Teks kanan bawah */}
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "calc(50% + 150px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 70 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h2 style={{ color: "#c77dff", marginBottom: "4px" }}>
          Mar 2025 - Now
        </h2>
      </div>
    </section>
  );
}
