"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
import Image from "next/image";

export default function MindPage() {
  const { theme } = useTheme();
  const kiImage =
    theme === "dark" ? "/assets/ki-dark.png" : "/assets/ki-light.png";
  const logoImage =
    theme === "dark" ? "/assets/logo-light.png" : "/assets/logo-dark.png";
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDuration, setSpinDuration] = useState(6);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (!isSpinning) return;

    const startTime = performance.now();
    const minDuration = 0.15;
    const maxDuration = 6;
    const rampDuration = 6000;

    let frameId = 0;

    const tick = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / rampDuration, 1);
      const nextDuration =
        maxDuration - (maxDuration - minDuration) * progress * progress;
      setSpinDuration(nextDuration);

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isSpinning]);

  useEffect(() => {
    if (!isSpinning) return;

    const timer = window.setTimeout(() => {
      setShowLogo(true);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [isSpinning]);

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes growIn {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsSpinning(true)}
            aria-label="Spin Ki"
            className="cursor-pointer"
            style={{ background: "transparent", border: "none", padding: 0 }}
          >
            <Image
              src={kiImage}
              alt="Ki"
              width={220}
              height={220}
              className="object-contain"
              priority
              style={
                isSpinning
                  ? {
                      animationName: "spin",
                      animationDuration: `${spinDuration}s`,
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                    }
                  : undefined
              }
            />
          </button>
          {showLogo && (
            <Image
              src={logoImage}
              alt="Logo"
              width={130}
              height={130}
              className="object-contain pointer-events-none"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                animation: "growIn 3.6s ease-out forwards",
              }}
            />
          )}
        </div>
        {/*
        <div className="w-3/4 max-w-2xl flex justify-center">
          <a
            href="/mind/12-favorite-problems"
            className="px-8 py-4 text-xl font-bold rounded-lg hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--accent)",
              color: "#DAD8CE"
            }}
          >
            12 Favorite Problems
          </a>
        </div>
        */}
      </div>
    </>
  );
}

