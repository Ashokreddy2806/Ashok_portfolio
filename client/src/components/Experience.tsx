import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Experience = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: t('experience.intern'),
      company: t('experience.cognibit'),
      date: '02/2026 - Present',
      descriptions: [
        t('experience.intern_desc1'),
        t('experience.intern_desc2'),
        t('experience.intern_desc3'),
      ],
      tags: ['PyTorch', 'Waymo Dataset', 'Python', 'Simulation'],
    },
    {
      title: t('experience.research'),
      company: t('experience.btu'),
      date: '06/2025 - Present',
      descriptions: [
        t('experience.research_desc1'),
        t('experience.research_desc2'),
        t('experience.research_desc3'),
      ],
      tags: ['RAG', 'FAISS', 'LLMs', 'NLP', 'Python'],
    },
    {
      title: t('experience.trainee'),
      company: t('experience.kanini'),
      date: '11/2023 - 09/2024',
      descriptions: [
        t('experience.trainee_desc1'),
        t('experience.trainee_desc2'),
        t('experience.trainee_desc3'),
      ],
      tags: ['GPT', 'LLaMA', 'Python', 'SQL', 'REST APIs', 'Django'],
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="container">
        <div ref={ref} className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">EXPERIENCE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">{t('experience.title')}</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.date}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
