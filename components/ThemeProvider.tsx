"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | null;

const DEFAULT_HUE = 332;

interface ThemeContextValue {
  theme: Theme;
  accentHue: number;
  setTheme: (theme: Theme) => void;
  shuffleAccent: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(null);
  const [accentHue, setAccentHue] = useState<number>(DEFAULT_HUE);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const storedHue = window.localStorage.getItem("accentHue");
    if (storedTheme === "light" || storedTheme === "dark") setThemeState(storedTheme);
    if (storedHue !== null) {
      const parsed = Number(storedHue);
      if (!Number.isNaN(parsed)) setAccentHue(parsed);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      window.localStorage.setItem("theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.removeItem("theme");
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", String(accentHue));
    window.localStorage.setItem("accentHue", String(accentHue));
  }, [accentHue]);

  function setTheme(next: Theme) {
    setThemeState(next);
  }

  function shuffleAccent() {
    setAccentHue((prev) => {
      let next = Math.floor(Math.random() * 360);
      if (Math.abs(next - prev) < 15) {
        next = (next + 180) % 360;
      }
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, accentHue, setTheme, shuffleAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
