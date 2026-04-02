import { motion } from "framer-motion";

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <span className="inline-block font-mono text-xs font-medium text-primary tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}