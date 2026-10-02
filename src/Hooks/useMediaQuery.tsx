import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  // Initialize with false or a safe fallback default state
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value immediately on mount
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Set up a listener for changes (fires only when crossing the threshold)
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Clean up listener on component unmount
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}
