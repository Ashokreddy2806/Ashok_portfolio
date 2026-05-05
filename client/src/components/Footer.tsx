import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Kesari Venkata Ashok Reddy
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t('footer.madeWith')}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:k.venkataashok123@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ashokreddykesari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Ashokreddy2806"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
