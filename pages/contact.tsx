import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Ready to collaborate?</h1>
          <p>
            I’m open to full-time positions and contract work. Reach out with details about the role, team, or project,
            and I’ll follow up within one business day.
          </p>
          <p className="note-text">
            Replace the placeholder email and profile links below with your real contact details before publishing.
          </p>
        </div>
        <div className="section-grid">
          <div className="panel">
            <h2>Email</h2>
            <p>
              <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
            </p>
          </div>
          <div className="panel">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
