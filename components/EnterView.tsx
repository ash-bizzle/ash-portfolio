"use client";

import { useEffect, useState } from "react";

export default function EnterView() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`enter-view${hidden ? " is-hidden" : ""}`} aria-hidden="true">
      <span>Ash</span>
      <span>Portfolio</span>
    </div>
  );
}
