import React, { useEffect, useState } from "react";
import ModelViewer from "./components/ModelViewer";
import { ScrollProvider } from "./ScrollContext";

export default function PageWithCanvas() {
  const [isSecondSection, setIsSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollY = window.scrollY;

      setIsSecondSection(scrollY > pageHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      {/* === ModelViewer dengan posisi absolut === */}
      <div
        style={{
          position: "absolute",
          top: isSecondSection ? "120vh" : "30vh", // pos Y berubah sesuai scroll
          left: isSecondSection ? "5%" : "50%",
          transform: isSecondSection ? "translateX(0)" : "translateX(-50%)",
          transition: "all 0.8s ease",
          width: "500px",
          height: "500px",
          zIndex: 10,
        }}
      >
        <ScrollProvider>
          <ModelViewer />
        </ScrollProvider>
      </div>

      {/* === Halaman Pertama === */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>Teks Kiri</h2>
          <p>Deskripsi, fitur, atau info teknis tentang model.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Teks Kanan</h2>
          <p>Informasi tambahan, link, atau CTA.</p>
        </div>
      </section>

      {/* === Halaman Kedua === */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 2 }}>
          <h2>Halaman 2</h2>
          <p>Penjelasan lanjut dengan model di sisi kiri.</p>
        </div>
      </section>
    </div>
  );
}
