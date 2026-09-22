import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently at the top of the viewport.
 * `ids` must be referentially stable (define it at module scope).
 */
export function useActiveSection(ids: readonly string[], offset = 150): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      // Empty until the first section actually reaches the top of the viewport,
      // so nothing is highlighted while the hero is on screen.
      let current = "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids, offset]);

  return active;
}

export default useActiveSection;
