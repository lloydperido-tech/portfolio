import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <section className="about-hero">
        <div className="about-hero-left">
          <p className="eyebrow">ABOUT ME</p>
          <h1>Lloyd Perido</h1>
          <p className="about-subtitle">Computer Science Student & Full-Stack Developer</p>
          <p className="about-intro">
            Hi, I'm Lloyd Perido, a Computer Science student passionate about software development, web technologies, and artificial intelligence. 
            I enjoy building practical applications that solve real-world problems and continuously expanding my skills through hands-on projects. 
            My goal is to create efficient, user-focused solutions while growing as a developer and technology professional.
          </p>
        </div>
        <div className="about-hero-right">
          <div className="profile-card">
            <img 
              src="/images/profile.jpg" 
              alt="Lloyd Perido" 
              className="profile-image"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2>Skills & Expertise</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>React, TypeScript, Next.js, Responsive Design</p>
          </div>
          <div className="skill-card">
            <h3>Backend & APIs</h3>
            <p>Node.js, Express, Laravel, Database Design</p>
          </div>
          <div className="skill-card">
            <h3>Data & AI</h3>
            <p>Python, Data Structures, Algorithms, Automation</p>
          </div>
          <div className="skill-card">
            <h3>Tools & Practices</h3>
            <p>Git, API Design, Testing, Documentation</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Career Path</p>
          <h2>My Goals</h2>
        </div>
        <div className="goals-list">
          <div className="goal-item">
            <h3>Short Term</h3>
            <p>Build portfolio projects that demonstrate full-stack capabilities and contribute to open source.</p>
          </div>
          <div className="goal-item">
            <h3>Long Term</h3>
            <p>Secure a role as a Software Engineer where I can apply CS fundamentals and grow with a strong technical team.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Let's Connect</p>
          <h2>Get in Touch</h2>
        </div>
        <div className="cta-panel">
          <p>Interested in collaborating or just want to chat about tech? Feel free to reach out!</p>
          <div className="cta-buttons">
            <a className="button-primary" href="/contact">Send me a message</a>
            <a className="button-secondary" href="/resume.txt" target="_blank" rel="noopener noreferrer">Download resume</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
