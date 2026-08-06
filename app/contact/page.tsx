const LINKS = [
  { label: "Email", href: "mailto:hello@example.com", text: "hello@example.com" },
  { label: "X / Twitter", href: "https://twitter.com/", text: "@placeholder" },
  { label: "Instagram", href: "https://instagram.com/", text: "@placeholder" },
  { label: "GitHub", href: "https://github.com/", text: "@placeholder" },
];

export default function ContactPage() {
  return (
    <section className="page page-contact">
      <p className="page-kicker">Contact</p>
      <ul className="contact-list">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
