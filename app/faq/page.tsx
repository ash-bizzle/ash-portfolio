const FAQS = [
  {
    q: "What tools do you use?",
    a: "Next.js, TypeScript, and a mix of Figma and code-based prototyping depending on the project.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Placeholder answer — update with current availability.",
  },
  {
    q: "Can I use your code?",
    a: "Placeholder answer about licensing and reuse policy.",
  },
];

export default function FaqPage() {
  return (
    <section className="page page-faq">
      <p className="page-kicker">FAQ</p>
      <div className="faq-list">
        {FAQS.map((faq) => (
          <div className="faq-item" key={faq.q}>
            <h2 className="faq-q">{faq.q}</h2>
            <p className="faq-a">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
