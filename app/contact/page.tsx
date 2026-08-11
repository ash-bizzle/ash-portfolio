const LINKS = [
  { label: "Email", href: "mailto:p.ashmitha@outlook.com", text: "p.ashmitha@outlook.com" },
  { label: "Phone", text: "+1 6154249813" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashmitha-paramasivan/", text: "linkedin/ashmitha-paramasivan" },
  { label: "GitHub", href: "https://github.com/ash-bizzle", text: "github/ash-bizzle" },
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
