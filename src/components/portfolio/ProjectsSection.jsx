import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import dashboardImg from '../../assets/img/dashboard.jpg'
import ispImg from '../../assets/img/ISP.jpg'
import loyaltyImg from '../../assets/img/zarapp2.png'

const PROJECT_1_IMG = ispImg;
const PROJECT_2_IMG = dashboardImg;
const PROJECT_3_IMG = loyaltyImg;

const projects = [
  {
    title: "Client Monitoring + Billing System for Wireless ISP",
    desc: "A robust system designed for wireless internet service providers to monitor client connectivity, manage subscriptions, automate billing, and track payments in real-time. It includes network status monitoring, usage tracking, and seamless invoice generation to streamline ISP operations.",
    tech: [".NET", "C#", "SQL Server", "Entity Framework"],
    image: PROJECT_1_IMG,
  },
  {
    title: "Web Application Dashboard",
    desc: "Full-stack analytics dashboard with real-time data visualization, REST API integration, and responsive design for monitoring key business metrics.",
    tech: ["React", "Node.js", "REST API", "SQL"],
    image: PROJECT_2_IMG,
  },
  {
    title: "QR Loyalty Mobile App",
    desc: "A mobile application that enables businesses to build customer loyalty through QR-based rewards and seamless engagement. Customers can scan QR codes to earn points, redeem rewards, and track their activity, while businesses gain insights through real-time analytics and customer behavior tracking.",
    tech: ["React Native", "Firebase", "Node.js"],
    image: PROJECT_3_IMG,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="A selection of projects showcasing my development expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-accent text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {/* <Button variant="outline" size="sm" className="gap-1.5 text-xs rounded-full" asChild>
                    <a href="https://rgiis.github.io" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs rounded-full" asChild>
                    <a href="https://rgiis.github.io" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </Button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}