import { useRef, useLayoutEffect } from "react";

/**
 * Subtle mouse trail — only inside the hero (.landing). Scrolls away with home section.
 * Uses window mousemove + hero bounds so lines work over text/icons (stacked above canvas).
 */
const Draw = () => {
  const canvasRef = useRef(null);
  const lastPositionRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      lastPositionRef.current = null;
    };

    resize();
    requestAnimationFrame(resize);

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(resize);
    });
    ro.observe(parent);
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const pr = parent.getBoundingClientRect();
      const x = e.clientX - pr.left;
      const y = e.clientY - pr.top;

      if (x < 0 || y < 0 || x > pr.width || y > pr.height) {
        lastPositionRef.current = null;
        return;
      }

      ctx.lineWidth = 1.65;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.globalAlpha = 1;

      if (lastPositionRef.current) {
        const { x: lx, y: ly } = lastPositionRef.current;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      lastPositionRef.current = { x, y };
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default Draw;
