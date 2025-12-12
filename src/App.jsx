import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="card header">
        <h1>Krishna Kumar Sathyan</h1>
        <p className="subtitle">
          Full-Stack Developer. Building scalable apps with Python, Django, React, and AWS.
        </p>

        <div className="links">
          <a className="btn" href="mailto:krishsat9937@gmail.com">Email</a>
          <a className="btn" href="https://www.linkedin.com/in/krishna-kumar-sathyan-89b694112/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href="https://github.com/krishsat9937" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2>About</h2>
          <p>
            I’m Krishna Sathyan, a full-stack developer with 8 years of experience across web
            applications, AI integrations, and scalable architectures. Based in Berlin.
          </p>
        </section>

        <section className="card">
          <h2>Services</h2>
          <ul>
            <li>Full-stack development (Python, Django, React, AWS)</li>
            <li>AI/ML integrations for real-time apps</li>
            <li>Automation and data pipelines</li>
            <li>Consulting and project delivery</li>
          </ul>
        </section>

        <section className="card">
          <h2>Contact</h2>
          <ul>
            <li>
              Email: <a href="mailto:krishsat9937@gmail.com">krishsat9937@gmail.com</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/krishna-kumar-sathyan-89b694112/" target="_blank" rel="noreferrer">
                krishna-kumar-sathyan
              </a>
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Privacy</h2>
          <p>
            Any personal information shared via contact is kept confidential and used only for
            communication. For details, email me.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Krishna Sathyan. All rights reserved.</p>
      </footer>
    </div>
  );
}
