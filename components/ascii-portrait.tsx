"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portraitAscii } from "@/lib/ascii-art";

export function AsciiPortrait() {
  const [displayedAscii, setDisplayedAscii] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedAscii(portraitAscii);
      return;
    }

    const lines = portraitAscii.split("\n");
    let line = 0;
    const interval = window.setInterval(() => {
      line += 1;
      setDisplayedAscii(lines.slice(0, line).join("\n"));

      if (line >= lines.length) {
        window.clearInterval(interval);
      }
    }, 18);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="ascii-frame terminal-card noise-flicker w-full overflow-hidden p-4 sm:p-5"
    >
      <figcaption className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-3 text-xs text-dim">
        <span>ascii://portrait.txt</span>
        <span>static-render</span>
      </figcaption>
      <pre
        className="ascii-pre mx-auto text-left text-accent"
        aria-label="ASCII portrait of Naman Aggarwal"
      >
        {displayedAscii}
      </pre>
    </motion.figure>
  );
}
