import { Github, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Revan C. Llanos. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://rgiis.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Portfolio"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          {/* <a
            href="https://github.com/rgiis"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a> */}
          <a
            href="mailto:revan.llanos4@gmail.com"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}