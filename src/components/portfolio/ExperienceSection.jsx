import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Mid-Level Software Developer",
    company: "Innovative Adhartas IT Solution",
    period: "2022 – Present",
    points: [
      "Maintain and enhance .NET enterprise applications",
      "Refactor legacy code for improved performance and maintainability",
      "Debug and optimize complex system issues",
      "Work extensively with SQL databases — design, queries, optimization",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Dav.io",
    period: "2021",
    points: [
      "Built web applications and RESTful APIs",
      "Integrated frontend and backend systems end-to-end",
      "Collaborated with team to deliver production-ready features",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2016 – Present",
    points: [
      "Built custom software systems for various clients",
      "Handled maintenance, optimization, and troubleshooting",
      "Managed end-to-end project delivery and client communications",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Career Timeline"
          description="My professional journey in software development."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-background border-2 border-primary hidden sm:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full shrink-0">
                      <Briefcase className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}