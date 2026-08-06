"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/info", label: "Info" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <ol>
        {NAV.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={isActive ? "is-active" : undefined}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
