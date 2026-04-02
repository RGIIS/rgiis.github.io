import { motion } from "framer-motion";
import { Film, Wifi, Palette } from "lucide-react";
import SectionHeader from "./SectionHeader";

const extras = [
  {
    icon: Film,
    title: "Audio & Video Editor",
    desc: "Experienced in audio and video production and editing at DXPM.",
  },
  {
    icon: Wifi,
    title: "Wireless Internet Provider",
    desc: "Part-time experience managing wireless internet services and network configuration.",
  },
  {
    icon: Palette,
    title: "Graphic Designer",
    desc: "Creative design skills applied to various branding and digital media projects.",
  },
];

export default function AdditionalSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Beyond Code"
          title="Additional Experience"
          description="Other roles and skills that complement my development career."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {extras.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="text-center bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}