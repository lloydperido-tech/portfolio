import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../content/projects';

export default function ProjectsPage() {
  return (
    <Layout>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1>Project case studies</h1>
          <p>Explore work that demonstrates frontend polish, backend architecture, automation, and launch-ready tooling.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
