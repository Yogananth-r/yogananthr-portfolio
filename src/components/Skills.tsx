import { Cloud, Terminal, Activity, Server } from "lucide-react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const sections = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: skills.cloud,
  },
  {
    title: "Automation",
    icon: Terminal,
    items: skills.automation,
  },
  {
    title: "Monitoring",
    icon: Activity,
    items: skills.monitoring,
  },
  {
    title: "Operating Systems",
    icon: Server,
    items: skills.systems,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Cloud & DevOps Toolkit
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center gap-3 text-sky-400">
                  <Icon size={24} />
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}