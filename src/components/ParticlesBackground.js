import { useEffect, useRef } from "react";
import "./ParticlesBackground.css";

const getDotCount = () => (window.innerWidth < 768 ? 95 : 155);

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId;
    let dots = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      dots = Array.from({ length: getDotCount() }, () => {
        const sparkle = Math.random() > 0.55;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: sparkle ? Math.random() * 0.7 + 0.7 : Math.random() * 0.9 + 0.5,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseOpacity: sparkle ? Math.random() * 0.25 + 0.35 : Math.random() * 0.35 + 0.18,
          twinkleAmp: sparkle ? Math.random() * 0.45 + 0.35 : Math.random() * 0.2 + 0.08,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 2.5 + 1.8,
          hue: sparkle || Math.random() > 0.4 ? "255, 255, 255" : "72, 163, 198",
        };
      });
    };

    const tick = (time) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = time * 0.001;
      ctx.clearRect(0, 0, w, h);

      dots.forEach((dot) => {
        const twinkle = reducedMotion
          ? 0.5
          : (Math.sin(t * dot.speed + dot.phase) + 1) * 0.5;
        const opacity = Math.min(0.95, dot.baseOpacity + twinkle * dot.twinkleAmp);
        const radius = dot.r * (reducedMotion ? 1 : 0.92 + twinkle * 0.12);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.hue}, ${opacity})`;
        ctx.fill();

        if (!reducedMotion) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.x < -6) dot.x = w + 6;
          if (dot.x > w + 6) dot.x = -6;
          if (dot.y < -6) dot.y = h + 6;
          if (dot.y > h + 6) dot.y = -6;
        }
      });

      animationId = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      seed();
    };

    resize();
    seed();
    animationId = requestAnimationFrame(tick);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-background" aria-hidden="true" />;
};

export default ParticlesBackground;
