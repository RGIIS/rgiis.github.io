import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Primary",
    color: "bg-primary/10 text-primary border-primary/20",
    skills: ["C#", ".NET / ASP.NET", "VB.NET", "Entity Framework", "ADO.NET", "SQL", "REST APIs"],
  },
  {
    title: "Frontend",
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    skills: ["JavaScript", "React", "Angular", "Vue", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Tools",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    skills: ["Node.js", "PHP (Laravel)", "Git"],
  },
  {
    title: "Others",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    skills: ["Ionic", "Flutter", "Network Config"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="My Tech Stack"
          description="Technologies and tools I use to build reliable, scalable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border ${group.color} transition-transform hover:scale-105`}
                  >
                    {skill}
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