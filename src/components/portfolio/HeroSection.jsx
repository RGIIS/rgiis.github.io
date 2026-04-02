import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from '../../assets/img/Revan.jpg'

const HERO_BG = "https://media.base44.com/images/public/69ce251c0b66a140042d86cd/59b94a971_generated_fa013dad.png";
const AVATAR = avatar;

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-10 dark:opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-4 ring-offset-background mx-auto">
              <img src={AVATAR} alt="Revan C. Llanos" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2.5 h-2.5 bg-primary-foreground rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6 border border-primary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
        >
          Revan C. Llanos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl font-mono text-primary font-medium mb-6"
        >
          C# / .NET Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Results-driven Software Developer specializing in C# and .NET with
          full-stack experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="gap-2 rounded-full px-8 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="gap-2 rounded-full px-8 font-medium"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.2 }}
  className="mt-16 flex justify-center"
>
  <a
    href="#about"
    onClick={() => scrollTo("#about")}
    className="text-muted-foreground hover:text-primary transition-colors text-center"
    aria-label="Scroll down"
  >
    <ArrowDown className="w-5 h-5 animate-bounce" />
  </a>
</motion.div>
      </div>
    </section>
  );
}