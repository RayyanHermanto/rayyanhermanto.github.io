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
          background: "linear-gradient(to bottom, #00f, #0ff)",
          borderRadius: "2px",
          transform: "translateX(-50%)",
          transition: "height 0.2s ease",
          marginTop: "10px"
        }}
      />

      {/* Teks di kiri */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "calc(50% - 250px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 50 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h3>Kiri: Pengalaman</h3>
        <p>Pengalaman saya dimulai dari membangun website kecil hingga aplikasi kompleks.</p>
      </div>

      {/* Teks di kanan */}
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: "calc(50% + 250px)",
          transform: "translateX(-50%)",
          opacity: lineHeight > 70 ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <h3>Kanan: Misi Saya</h3>
        <p>Menciptakan aplikasi yang tidak hanya bekerja, tapi juga memberi pengalaman menarik.</p>
      </div>

      {/* Konten utama */}
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          width: "100%",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h2>📍 Bagian Keempat</h2>
        <p>Garis ini tumbuh dari atas dan memunculkan teks saat melewatinya.</p>
      </div>
    </section>
  );
}
