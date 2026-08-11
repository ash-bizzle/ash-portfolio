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
            Hi, I&apos;m Ash — based in Seattle, building software that
            turns ideas into things people can actually use.
          </p>
        </div>
        <div className="info-block">
          <h2>Education & Experience</h2>
          <ul>
            <li>2024 — Present · Software Engineer at Microsoft Corporation</li>
            <li>2020 — 2024 · BS in Computer Science from Purdue University</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
