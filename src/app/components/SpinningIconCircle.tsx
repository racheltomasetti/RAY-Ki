"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpinningIconCircle() {
  const [mounted, setMounted] = useState(false);
  const iconCount = 8;
  const radius = 80; // Distance from center in pixels
  const containerSize = radius * 2 + 40; // radius * 2 + icon size

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      />
    );
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: containerSize, height: containerSize }}
    >
      {/* Spinning circle container */}
      <div className="absolute inset-0 animate-spin-circle">
        {Array.from({ length: iconCount }).map((_, index) => {
          const angle = (360 / iconCount) * index;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="animate-spin-icon w-10 h-10 flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="ki logo"
                  width={40}
                  height={40}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
