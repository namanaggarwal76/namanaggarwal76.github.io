"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function TypingIntro({ lines }: { lines: string[] }) {
  const fullText = useMemo(() => lines.join("\n"), [lines]);
  const [visibleText, setVisibleText] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleText(fullText);
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(fullText.slice(0, index));

      if (index >= fullText.length) {
        window.clearInterval(interval);
      }
    }, 24);

    return () => window.clearInterval(interval);
  }, [fullText, shouldReduceMotion]);

  return (
    <pre className="min-h-[7.5rem] whitespace-pre-wrap text-base leading-7 text-ink sm:text-lg">
      {visibleText}
      <span className="terminal-cursor" aria-hidden="true" />
    </pre>
  );
}
