"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyNavigation() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["what-is-ki", "how-it-works", "about-the-builder"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate height of the sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getButtonClassName = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-sm md:text-lg lg:text-2xl transition-colors duration-200 whitespace-nowrap ${
      isActive
        ? "text-[var(--accent)] font-bold"
        : "text-[var(--tx-2)] hover:text-[var(--accent)] font-medium hover:font-bold"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--bg)] border-b border-[var(--ui-2)] backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo on the left */}
          <div className="flex justify-center">
            <Image
              src="/icon.png"
              alt="ki logo"
              width={50}
              height={50}
              className="rounded-full animate-bob"
              priority
            />
          </div>

          {/* Navigation links on the right */}
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => scrollToSection("what-is-ki")}
              className={getButtonClassName("what-is-ki")}
            >
              what ki is
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={getButtonClassName("how-it-works")}
            >
              how ki works
            </button>
            <button
              onClick={() => scrollToSection("about-the-builder")}
              className={getButtonClassName("about-the-builder")}
            >
              building ki
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
