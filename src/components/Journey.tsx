import { motion } from "framer-motion";
import { timeline } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="journey" className="section-padding">
      <div className="container-width">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-400">
            Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Journey
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-10 ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[39px] top-2 h-4 w-4 rounded-full border-4 border-[#050816] bg-sky-400" />

              <span className="text-sky-400 text-sm font-medium">
                {item.year}
              </span>

              <div className="glass-card mt-2 rounded-2xl p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-1 text-sky-300">{item.company}</p>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}