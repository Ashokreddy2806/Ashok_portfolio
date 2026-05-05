import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const About = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="container">
        <div ref={ref} className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('about.headline')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">{t('about.experience')}</p>
            </div>
            <div className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">{t('about.projects')}</p>
            </div>
            <div className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">{t('about.awards')}</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {t('hero.intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary font-mono">{t('about.currentFocus')}</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{t('about.focus1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{t('about.focus2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{t('about.focus3')}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">{t('about.languages')}</p>
              <div className="flex flex-wrap gap-2">
                {['English', 'German', 'Python', 'SQL', 'JavaScript', 'React', 'Django'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
