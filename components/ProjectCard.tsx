import Link from 'next/link';
import type { ProjectSummary } from '../content/projects';

export default function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="project-card">
      <div>
        <p className="project-tag">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="project-card-footer">
        <Link
          href={`/projects/${project.slug}`}
          className="button-secondary"
          aria-label={`View information about ${project.title}`}
        >
          View project info
        </Link>
      </div>
    </article>
  );
}
