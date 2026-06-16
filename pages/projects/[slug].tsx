import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { projects, ProjectSummary } from '../../content/projects';

type Props = {
  project: ProjectSummary;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <Layout>
      <CaseStudyLayout title={project.title}>
        <div className="case-study-block">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div className="case-study-block">
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </div>
        <div className="case-study-block">
          <h2>Impact</h2>
          <p>{project.impact}</p>
        </div>
        <div className="case-study-block">
          <h2>Tech stack</h2>
          <ul className="stack-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="case-study-block">
          <h2>Links</h2>
          <ul className="link-list">
            {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudyLayout>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
