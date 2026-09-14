
import { motion } from "framer-motion";
import { Mail, Download, ArrowDownRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { portfolio } from "../data/portfolio";


export default function Hero() {
  return (
    <section className="section-padding flex min-h-screen items-center pt-24">
      <div className="container-width grid items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
            {portfolio.title} Portfolio
          </p> */}

          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            {portfolio.name}
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            {portfolio.title}
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            
            {portfolio.intro}
          </p>

          {/* Tech Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["AWS", "GCP", "Python", "Linux", "Terraform", "Ansible"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-sky-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button flex items-center gap-2">
                View Projects
                <ArrowDownRight size={18} />
            </a>

            <a
                href={portfolio.resume}
                className="secondary-button flex items-center gap-2"
            >
                <Download size={18} />
                Download Resume
            </a>
            </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-slate-400">
  <a
    href={portfolio.social.github}
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-white"
  >
    <FaGithub size={24} />
  </a>

  <a
    href={portfolio.social.linkedin}
    target="_blank"
    rel="noreferrer"
    className="transition hover:text-sky-400"
  >
    <FaLinkedin size={24} />
  </a>

  <a
    href={`mailto:${portfolio.email}`}
    className="transition hover:text-emerald-400"
  >
    <Mail size={24} />
  </a>
</div>
        </motion.div>

        {/* Right Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass-card w-full max-w-sm rounded-3xl p-5">
            <div className="overflow-hidden rounded-2xl border border-slate-700">
              <img
                src="/profile.jpg"
                alt="Yogananth R"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Role</span>
                <span className="font-medium text-sky-300">
                  Deloitte | Cloud Engineer
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">Experience</span>
                <span>{portfolio.experience}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">Location</span>
                <span>{portfolio.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">Cloud</span>
                <span>AWS · GCP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}