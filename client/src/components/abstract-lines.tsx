import { useEffect, useRef } from "react";

export function AbstractLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      const lines = containerRef.current.querySelectorAll<HTMLDivElement>(
        ".abstract-line"
      );

      lines.forEach((line, index) => {
        const speed = (index + 1) * 0.04;
        const translate = currentScrollY * speed;

        line.style.transform = `translateY(${translate}px)`;
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="abstract-line absolute top-0 h-[200vh] w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-40"
          style={{
            left: `${20 + i * 15}%`,
          }}
        />
      ))}
    </div>
  );
}
