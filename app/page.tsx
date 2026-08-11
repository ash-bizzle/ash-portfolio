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
            Hi, I&apos;m Ash — a product-minded technologist who loves
            turning ideas into things people can actually use.
          </p>
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
