import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const bootLines = [
  "Loading Linux Kernel...",
  "Initializing AWS SDK...",
  "Connecting to ap-south-1...",
  "Loading Terraform Modules...",
  "Starting Cloud Monitoring Agents...",
  "Cloud Environment Ready.",
];

export default function Loader({ onComplete }: LoaderProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < bootLines.length) return prev + 1;
        clearInterval(lineTimer);
        return prev;
      });
    }, 280);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const progress = (visibleLines / bootLines.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] max-w-2xl rounded-2xl border border-slate-800 bg-[#020617] p-6 shadow-2xl">
          {/* Terminal Header */}
          <div className="mb-5 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-3 terminal-font text-sm text-slate-500">
              cloud-engineer-os
            </span>
          </div>

          <p className="terminal-font text-sky-400 text-sm mb-4">
            Cloud Engineer OS v2.0
          </p>

          <div className="space-y-2 terminal-font text-sm">
            {bootLines.slice(0, visibleLines).map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-emerald-400"
              >
                [✓] {line}
              </motion.p>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-sky-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>

          <p className="terminal-font mt-3 text-xs text-slate-500">
            Boot sequence in progress...
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}