"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme, shuffleAccent } = useTheme();

  return (
    <div className="theme-toggle">
      <button
        type="button"
        className={theme === "light" ? "is-active" : undefined}
        onClick={() => setTheme(theme === "light" ? null : "light")}
      >
        <span className="theme-toggle_swatch" aria-hidden="true" />
        Light
      </button>
      <button
        type="button"
        className={theme === "dark" ? "is-active" : undefined}
        onClick={() => setTheme(theme === "dark" ? null : "dark")}
      >
        <span className="theme-toggle_swatch" aria-hidden="true" />
        Dark
      </button>
      <button type="button" onClick={shuffleAccent}>
        <span className="theme-toggle_swatch is-filled" aria-hidden="true" />
        Surprise Me
      </button>
    </div>
  );
}
