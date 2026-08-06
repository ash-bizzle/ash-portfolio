"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface Blob {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hueOffset: number;
}

export default function Background() {
  const { accentHue } = useTheme();
  const hueRef = useRef(accentHue);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    hueRef.current = accentHue;
  }, [accentHue]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let blobs: Blob[] = [];
    let raf = 0;

    function resize() {
      width = container!.clientWidth;
      height = container!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initBlobs() {
      blobs = Array.from({ length: 5 }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.min(width, height) * (0.28 + Math.random() * 0.22),
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hueOffset: i * 15,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const hue = hueRef.current + b.hueOffset;
        const gradient = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        gradient.addColorStop(0, `hsla(${hue}, 65%, 55%, 0.32)`);
        gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)");
        ctx!.fillStyle = gradient;
        ctx!.fillRect(0, 0, width, height);
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    initBlobs();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="background" ref={containerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
