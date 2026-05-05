import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Github, Linkedin } from 'lucide-react';
import profileImage from '../../../image.png';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Ashok.
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            {['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === 'de'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              DE
            </button>
          </div>

          <div className="flex items-center gap-3">
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
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 rounded-full overflow-hidden border-2 border-primary/20 hover:scale-105 transition-transform"
              title="Contact"
            >
              <img src={profileImage} alt="Ashok avatar" className="w-10 h-10 object-cover" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
