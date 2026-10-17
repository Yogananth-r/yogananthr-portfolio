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
        {item.roles ? (
          <>
            {/* Company header */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-2xl font-bold text-black">
                D<span className="text-emerald-500">.</span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Full-time · {item.year}
                </p>
              </div>
            </div>

            {/* Roles timeline */}
            <div className="ml-6 mt-6 border-l border-slate-700 pl-6">
              {item.roles.map((role, roleIndex) => (
                <div
                  key={role.title}
                  className={`relative ${
                    roleIndex === item.roles.length - 1 ? "" : "mb-6"
                  }`}
                >
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[#0b1120] bg-slate-400" />

                  <h4 className="font-semibold text-slate-200">
                    {role.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {role.period}
                  </p>

                  {role.location && (
                    <p className="mt-1 text-sm text-slate-400">
                      {role.location}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-800 pt-5">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="mt-1 text-sky-300">{item.company}</p>

            <p className="mt-4 leading-7 text-slate-400">
              {item.description}
            </p>
          </>
        )}
      </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}