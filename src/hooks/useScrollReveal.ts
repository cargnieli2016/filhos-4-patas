import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe the element and all children with reveal classes
    const revealEls = el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    revealEls.forEach((child) => observer.observe(child));
    
    if (el.classList.contains("reveal") || el.classList.contains("reveal-left") || 
        el.classList.contains("reveal-right") || el.classList.contains("reveal-scale")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
