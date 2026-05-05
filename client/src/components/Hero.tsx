import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import profileImage from '../../../image.png';

export const Hero = () => {
  const { t } = useLanguage();
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['AI/ML Engineer', 'LLM Developer', 'Full-Stack Developer'];
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRole, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              {t('hero.hi')}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {t('hero.name')}
            </h1>
            <div className="h-12 flex items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {displayedRole}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {t('hero.intro')}
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            {t('hero.location')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200 border border-primary"
            >
              {t('hero.viewWork')}
            </button>
            <a
              href="#"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              {t('hero.downloadCV')}
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:k.venkataashok123@gmail.com"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ashokreddykesari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Ashokreddy2806"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="relative w-80 h-80 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 p-4 shadow-xl shadow-primary/10">
            <div className="absolute inset-0 rounded-2xl border border-white/40" />
            <img
              src={profileImage}
              alt="Ashok Reddy portrait"
              className="relative z-10 h-full w-full rounded-xl object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 z-20 rounded-full border border-primary/20 bg-background/90 px-4 py-1 text-sm font-semibold text-primary backdrop-blur">
              AI/ML Engineer
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};
