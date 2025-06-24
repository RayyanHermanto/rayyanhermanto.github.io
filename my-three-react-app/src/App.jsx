import React from 'react'

const App = () => {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ textAlign: 'center' }}>
        <h1>Hello, I’m <span style={{ color: '#ffffff' }}>Rayyan Syahbani Hermanto</span></h1>
        <p style={{ fontSize: '1.2rem' }}>Creative Web Developer with futuristic touch</p>
        <a className="btn" href="#projects">View Projects</a>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer who blends clean code with futuristic design.
          Skilled in React, Three.js, and creative frontend tools.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '10px' }}>
            <h3>🛸 Futuristic Portfolio</h3>
            <p>A clean and interactive portfolio site using React & Three.js</p>
          </div>
          <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '10px' }}>
            <h3>🌌 Space Explorer</h3>
            <p>3D space visualizer with camera orbit and starfield</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Let’s collaborate! Reach me via:</p>
        <ul>
          <li>Email: you@example.com</li>
          <li>GitHub: github.com/yourusername</li>
        </ul>
      </section>
    </main>
  )
}

export default App
