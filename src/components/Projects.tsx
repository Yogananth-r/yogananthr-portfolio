import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";

const featuredProject = projects.find((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Things I've Built
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Practical cloud engineering tools built around AWS, GCP,
            infrastructure automation and DevOps operations.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card mb-10 overflow-hidden rounded-3xl border border-sky-500/20"
          >
            <div className="h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

            <div className="p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Featured Project
                </span>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              <h3 className="mb-2 text-3xl font-bold text-white">
                {featuredProject.title}
              </h3>

              <p className="mb-6 text-sky-300">
                {featuredProject.category}
              </p>

              <p className="max-w-3xl leading-8 text-slate-400">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
              >
                View Repository
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 transition duration-300 hover:border-sky-500/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
              </div>

              <p className="mb-4 text-sky-300">{project.category}</p>

              <p className="leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}