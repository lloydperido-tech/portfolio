import Link from 'next/link';
import { ReactNode } from 'react';

export default function CaseStudyLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <div>
          <Link href="/projects" className="link-back">
            ← Back to projects
          </Link>
          <h1>{title}</h1>
        </div>
      </div>
      <section className="case-study-content">{children}</section>
    </div>
  );
}
