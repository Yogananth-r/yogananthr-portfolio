import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-slate-800/70 bg-[#050816]/80 backdrop-blur-md"
    >
      <nav className="container-width flex h-16 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-wide text-white">
          <span className="text-sky-400">YR</span> Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-sky-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-[#050816] md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-300 transition hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}