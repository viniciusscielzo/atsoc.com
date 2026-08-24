"use client";

import { useEffect, useRef } from "react";

export default function DigitalWavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const trackPointer = (event: PointerEvent) => {
      targetX = event.clientX / width - 0.5;
      targetY = event.clientY / height - 0.5;
    };

    const drawWave = (
      baseY: number,
      amplitude: number,
      frequency: number,
      phase: number,
      alpha: number,
      widthLine: number,
    ) => {
      context.beginPath();
      for (let x = -30; x <= width + 30; x += 10) {
        const normalized = x / Math.max(width, 1);
        const envelope = Math.sin(Math.PI * Math.min(1, Math.max(0, normalized)));
        const primary = Math.sin(normalized * Math.PI * frequency + phase) * amplitude;
        const secondary = Math.sin(normalized * Math.PI * (frequency * 0.52) - phase * 0.7) * amplitude * 0.32;
        const y = baseY + (primary + secondary) * (.45 + envelope * .55) + pointerY * 22;
        if (x === -30) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      const gradient = context.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "rgba(70, 207, 255, 0)");
      gradient.addColorStop(.2, `rgba(70, 207, 255, ${alpha * .65})`);
      gradient.addColorStop(.52, `rgba(146, 228, 255, ${alpha})`);
      gradient.addColorStop(.82, `rgba(47, 148, 237, ${alpha * .58})`);
      gradient.addColorStop(1, "rgba(47, 148, 237, 0)");
      context.strokeStyle = gradient;
      context.lineWidth = widthLine;
      context.stroke();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      pointerX += (targetX - pointerX) * .025;
      pointerY += (targetY - pointerY) * .025;
      const clock = reducedMotion ? 0 : time * .00022;

      context.save();
      context.translate(pointerX * 18, 0);
      for (let band = 0; band < 5; band += 1) {
        const baseY = height * (.13 + band * .205);
        for (let strand = 0; strand < 4; strand += 1) {
          drawWave(
            baseY + strand * 8,
            22 + band * 5 + strand * 2,
            2.2 + band * .28,
            clock * (band % 2 ? -1 : 1) + band * .72 + strand * .13,
            .15 - strand * .018,
            strand === 0 ? 1.15 : .65,
          );
        }
      }
      context.restore();

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", trackPointer, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", trackPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="digital-waves-background" aria-hidden="true" />;
}
