import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container-width flex flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row md:px-12">
        <div>
          © {new Date().getFullYear()} {portfolio.name}. Built with React,
          TypeScript & Tailwind CSS.
        </div>

        <div className="flex items-center gap-5 text-lg">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}