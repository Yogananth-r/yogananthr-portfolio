import { motion } from "framer-motion";
import { Cloud, Terminal, Server, Activity } from "lucide-react";

const cards = [
  {
    title: "AWS & GCP",
    description:
      "Experience managing EC2, Lambda, IAM, RDS, CloudWatch, Compute Engine, Monitoring, Filestore and cloud operations.",
    icon: Cloud,
  },
  {
    title: "Automation",
    description:
      "Python, Bash and PowerShell automation for cloud infrastructure, monitoring and DevOps workflows.",
    icon: Terminal,
  },
  {
    title: "Linux & Windows",
    description:
      "Administration, troubleshooting, patching and system management across RHEL, Debian, SLES and Windows Server.",
    icon: Server,
  },
  {
    title: "Monitoring",
    description:
      "Dynatrace dashboards, CloudWatch metrics, GCP Monitoring API, Grafana and Prometheus integrations.",
    icon: Activity,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Building reliable cloud infrastructure and automation.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Cloud Engineer with 2.5+ years of experience working across AWS and GCP,
            focused on infrastructure automation, cloud operations, monitoring,
            and DevOps tooling. I enjoy building practical cloud utilities that
            solve real operational problems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 transition duration-300 hover:border-sky-500/40 hover:bg-slate-900/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>

                <p className="leading-7 text-slate-400">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}