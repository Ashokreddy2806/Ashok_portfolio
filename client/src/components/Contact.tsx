import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              CONTACT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:k.venkataashok123@gmail.com"
              className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px] flex flex-col items-center text-center"
            >
              <Mail className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm font-medium text-muted-foreground mb-2">{t('contact.email')}</p>
              <p className="text-foreground font-semibold break-all">
                k.venkataashok123@gmail.com
              </p>
            </a>

            <a
              href="tel:+4917675243860"
              className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px] flex flex-col items-center text-center"
            >
              <Phone className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm font-medium text-muted-foreground mb-2">{t('contact.phone')}</p>
              <p className="text-foreground font-semibold">+49 176 75243860</p>
            </a>

            <div className="p-6 border-2 border-border rounded-lg bg-card flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm font-medium text-muted-foreground mb-2">{t('contact.location')}</p>
              <p className="text-foreground font-semibold">Cottbus, Germany</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href="mailto:k.venkataashok123@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200 border border-primary text-center"
            >
              {t('contact.emailMe')}
            </a>
            <a
              href="https://linkedin.com/in/ashokreddykesari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-200 text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Ashokreddy2806"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-200 text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
