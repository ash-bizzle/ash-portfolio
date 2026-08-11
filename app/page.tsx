export default function HomePage() {
  return (
    <section className="page page-home">
      <p className="page-home_bio">
        <span>Welcome to my corner of the internet!</span>
      </p>
      <div className="info-grid">
        <div className="info-block">
          <h2>About</h2>
          <p>
            Placeholder bio paragraph. A couple of sentences about background,
            focus areas, and what drives the work go here.
          </p>
        </div>
        <div className="info-block">
          <h2>Tools</h2>
          <ul>
            <li>Next.js / React</li>
            <li>TypeScript</li>
            <li>Figma</li>
            <li>Canvas / WebGL</li>
          </ul>
        </div>
        <div className="info-block">
          <h2>Experience</h2>
          <ul>
            <li>2024 — Present · Placeholder Studio</li>
            <li>2022 — 2024 · Placeholder Agency</li>
            <li>2020 — 2022 · Freelance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
