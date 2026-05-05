import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Education = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: t('education.msc'),
      university: t('education.btu_full'),
      location: t('education.cottbus'),
      date: '10/2024 - Present',
      courses: t('education.msc_courses'),
    },
    {
      degree: t('education.be'),
      university: t('education.presidency'),
      location: t('education.bangalore'),
      date: '09/2019 - 05/2023',
      courses: t('education.be_courses'),
    },
  ];

  const awards = [
    {
      title: t('awards.fsr'),
      org: t('awards.fsr_org'),
      date: '01/11/2024',
      description: t('awards.fsr_desc'),
    },
    {
      title: t('awards.kodezenie'),
      org: t('awards.kodezenie_org'),
      date: '01/11/2023',
      description: t('awards.kodezenie_desc'),
    },
  ];

  return (
    <section id="education" className="py-20 border-t border-border">
      <div className="container">
        <div
          ref={ref}
          className={`space-y-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">
                EDUCATION
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('education.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.university}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{edu.date}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-mono text-muted-foreground mb-2">// key_courses</p>
                    <p className="text-sm text-muted-foreground">{edu.courses}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-widest">
                AWARDS
              </p>
              <h3 className="text-3xl font-bold text-foreground">{t('awards.title')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🏆</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground">{award.title}</h4>
                      <p className="text-primary font-medium text-sm">{award.org}</p>
                      <p className="text-xs text-muted-foreground">{award.date}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
