"use client";

import { useEffect, useRef } from "react";

export default function TechGridBackground() {
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
      targetX = event.clientX / Math.max(width, 1) - .5;
      targetY = event.clientY / Math.max(height, 1) - .5;
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      pointerX += (targetX - pointerX) * .025;
      pointerY += (targetY - pointerY) * .025;

      const centerX = width * .5 + pointerX * 46;
      const horizon = height * .43 + pointerY * 24;
      const motion = reducedMotion ? 0 : (time * .000075) % 1;
      const span = width * 1.5;

      const fade = context.createLinearGradient(0, 0, 0, height);
      fade.addColorStop(0, "rgba(70, 207, 255, .015)");
      fade.addColorStop(.38, "rgba(70, 207, 255, .055)");
      fade.addColorStop(1, "rgba(70, 207, 255, .19)");
      context.strokeStyle = fade;
      context.lineWidth = .8;

      for (let column = -18; column <= 18; column += 1) {
        const bottomX = centerX + column * span / 18;
        context.beginPath();
        context.moveTo(centerX, horizon);
        context.lineTo(bottomX, height + 40);
        context.stroke();
      }

      for (let row = 0; row < 26; row += 1) {
        const progress = ((row / 26 + motion) % 1);
        const depth = Math.pow(progress, 2.35);
        const y = horizon + depth * (height - horizon + 50);
        const halfWidth = depth * span;
        const alpha = .025 + depth * .18;
        const rowGradient = context.createLinearGradient(centerX - halfWidth, 0, centerX + halfWidth, 0);
        rowGradient.addColorStop(0, "rgba(70, 207, 255, 0)");
        rowGradient.addColorStop(.18, `rgba(70, 207, 255, ${alpha})`);
        rowGradient.addColorStop(.5, `rgba(132, 224, 255, ${alpha * 1.15})`);
        rowGradient.addColorStop(.82, `rgba(70, 207, 255, ${alpha})`);
        rowGradient.addColorStop(1, "rgba(70, 207, 255, 0)");
        context.strokeStyle = rowGradient;
        context.lineWidth = depth > .55 ? 1 : .65;
        context.beginPath();
        context.moveTo(centerX - halfWidth, y);
        context.lineTo(centerX + halfWidth, y);
        context.stroke();
      }

      context.save();
      context.globalAlpha = .3;
      const upperFade = context.createLinearGradient(0, horizon, 0, 0);
      upperFade.addColorStop(0, "rgba(70, 207, 255, .11)");
      upperFade.addColorStop(1, "rgba(70, 207, 255, 0)");
      context.strokeStyle = upperFade;
      context.lineWidth = .6;
      for (let column = -12; column <= 12; column += 2) {
        context.beginPath();
        context.moveTo(centerX, horizon);
        context.lineTo(centerX + column * width / 9, -20);
        context.stroke();
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

  return <canvas ref={canvasRef} className="tech-grid-background" aria-hidden="true" />;
}
