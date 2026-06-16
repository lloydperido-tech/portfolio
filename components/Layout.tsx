import Link from 'next/link';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="site-nav">
          <Link 
            href="/projects" 
            className={`nav-link ${isActive('/projects') || router.pathname.startsWith('/projects/') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="page-content">{children}</main>
      <footer className="site-footer">
        <p>Built with Next.js · Designed for recruiters and hiring managers.</p>
      </footer>
    </div>
  );
}
