const PROJECTS = [
  {
    title: "AshFash",
    stack: "Python, MySQL, Flask, Vue",
    summary: "A full-stack fashion product browser with search, category browsing, and filters. Built a sync pipeline that pulls Uniqlo API listings into MySQL, with run logging and an admin refresh endpoint.",
    href: "#",
  },
  {
    title: "MealMove",
    stack: "React, Firebase, Next.js, API",
    summary:
      "Led a 6-person team building a full-stack wellness app with personalized recipes, workouts, and nutrition data viz.",
    href: "#",
  },
  {
    title: "MyShell",
    stack: "C, C++, x86, Assembly",
    summary:
      "A UNIX shell in C/C++ with piping, wildcarding, subshells, redirection, and command history.",
    href: "#",
  },
  {
    title: "CineLog",
    stack: "HTML/CSS, JavaScript, React, Node.js, API, Bootstrap",
    summary:
      "Full-stack movie tracker with user auth and CRUD for a personal movie catalog.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="page page-projects">
      <p className="page-kicker">Projects</p>
      <div className="project-list">
        {PROJECTS.map((project) => (
          <div className="project-item" key={project.title}>
            <a
              className="project-title text-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.title}
            </a>
            <p className="project-stack">{project.stack}</p>
            <p className="project-summary">{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
