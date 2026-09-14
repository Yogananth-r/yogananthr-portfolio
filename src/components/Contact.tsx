import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's build something in the cloud.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Interested in cloud infrastructure, automation, DevOps tooling,
            AWS/GCP operations, or open-source cloud projects? Feel free to
            connect with me.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href={`mailto:${portfolio.email}`}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-sky-500/50"
            >
              <Mail className="mb-3 text-sky-400" size={24} />
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-1 font-medium">{portfolio.email}</p>
            </a>

            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-sky-500/50"
            >
              <FaGithub className="mb-3 text-slate-200" size={22} />
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-1 font-medium">View my repositories</p>
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-sky-500/50"
            >
              <FaLinkedin className="mb-3 text-sky-400" size={22} />
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="mt-1 font-medium">Connect professionally</p>
            </a>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <MapPin className="mb-3 text-emerald-400" size={24} />
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 font-medium">{portfolio.location}</p>
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-10">
            <a
              href={portfolio.resume}
              className="primary-button inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}