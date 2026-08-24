"use client";

import { useEffect, useRef } from "react";

type NodePoint = { x: number; y: number; vx: number; vy: number; size: number };

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let nodes: NodePoint[] = [];
    let routes: Array<[number, number]> = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reset = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const amount = Math.max(24, Math.min(54, Math.floor(width / 34)));
      nodes = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.18,
        size: 1.1 + Math.random() * 1.5,
      }));
      routes = [];
      const used = new Set<string>();
      for (let index = 0; index < Math.min(9, nodes.length); index += 1) {
        const start = (index * 5) % nodes.length;
        let nearest = -1;
        let nearestDistance = Number.POSITIVE_INFINITY;
        nodes.forEach((node, candidate) => {
          if (candidate === start) return;
          const distance = Math.hypot(nodes[start].x - node.x, nodes[start].y - node.y);
          if (distance < nearestDistance) {
            nearest = candidate;
            nearestDistance = distance;
          }
        });
        if (nearest >= 0) {
          const key = [start, nearest].sort((a, b) => a - b).join(":");
          if (!used.has(key)) {
            used.add(key);
            routes.push([start, nearest]);
          }
        }
      }
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const maxDistance = width < 700 ? 125 : 165;

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -20 || node.x > width + 20) node.vx *= -1;
          if (node.y < -20 || node.y > height + 20) node.vy *= -1;
        }
        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.2;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(85, 205, 255, ${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        context.beginPath();
        context.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        context.fillStyle = "rgba(119, 224, 255, .48)";
        context.fill();
      });

      if (!reducedMotion && routes.length) {
        routes.slice(0, 7).forEach(([start, end], index) => {
          const from = nodes[start];
          const to = nodes[end];
          const progress = ((time / 4800) + index * 0.143) % 1;
          const fade = Math.pow(Math.sin(Math.PI * progress), .65);
          const x = from.x + (to.x - from.x) * progress;
          const y = from.y + (to.y - from.y) * progress;
          const glow = context.createRadialGradient(x, y, 0, x, y, 8);
          glow.addColorStop(0, `rgba(165, 241, 255, ${.82 * fade})`);
          glow.addColorStop(0.28, `rgba(70, 207, 255, ${.44 * fade})`);
          glow.addColorStop(1, "rgba(70, 207, 255, 0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(x, y, 8, 0, Math.PI * 2);
          context.fill();
        });
      }

      frame = window.requestAnimationFrame(draw);
    };

    reset();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", reset);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", reset);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />;
}
