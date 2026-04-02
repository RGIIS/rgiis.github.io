import { motion } from "framer-motion";
import { Code2, Database, Bug, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Strong focus on writing clean, maintainable, and well-structured code across all projects.",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    desc: "Deep experience maintaining and enhancing enterprise-level .NET applications and SQL databases.",
  },
  {
    icon: Bug,
    title: "Problem Solver",
    desc: "Exceptional debugging and problem-solving skills with a systematic approach to troubleshooting.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    desc: "Versatile developer comfortable working across frontend, backend, and database layers.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          description="A mid-level developer with strong experience in C#, .NET, and full-stack development — focused on delivering clean, reliable software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-card border border-border rounded-xl p-6 sm:p-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a results-driven software developer based in{" "}
            <span className="text-foreground font-medium">Digos City, Philippines</span>.
            With years of hands-on experience in{" "}
            <span className="text-foreground font-medium">C#, .NET, and full-stack development</span>,
            I specialize in building, maintaining, and optimizing enterprise systems. I thrive on
            refactoring legacy code, debugging complex issues, and ensuring applications run smoothly
            and efficiently. My experience spans working with existing systems, designing SQL databases,
            and building modern web applications from the ground up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}