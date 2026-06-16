import Link from 'next/link';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../content/projects';

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(167, 139, 250, 0.2) 50%, rgba(26, 21, 48, 0.8) 100%)' }}></div>
        <div>
          <p className="eyebrow">Computer Science Engineer</p>
          <h1>Lloyd Perido</h1>
          <p className="lead">
            Building scalable software with React, Node.js, Python, and modern architecture. 
            I solve problems with algorithmic thinking and practical craftsmanship.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">
              View my work
            </Link>
            <Link href="/contact" className="button-secondary">
              Get in touch
            </Link>
          </div>
          <div className="hero-card">
            <p className="hero-card-label">Core Stack</p>
            <ul className="skill-list">
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>Python & Data Engineering</li>
              <li>Laravel & APIs</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Selected case studies</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Engineering with CS fundamentals</h2>
        </div>
        <p>
          My Computer Science background gives me a systematic approach to software engineering. 
          I apply algorithmic thinking and data structure knowledge to build efficient, scalable systems that solve real problems.
        </p>
        <p>
          This portfolio showcases projects that demonstrate full-stack capability, architectural decisions, 
          and launch-ready implementation—exactly what technical hiring managers and senior engineers look for.
        </p>
      </section>
    </Layout>
  );
}
