import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: [
        'Python',
        'SQL',
        'C#',
        'JavaScript',
        'REST APIs',
      ],
    },
    {
      title: t('skills.datascience'),
      skills: [
        'Pandas',
        'NumPy',
        'Power BI',
        'Matplotlib',
        'ETL',
        'Statistical Analysis',
        'Feature Engineering',
      ],
    },
    {
      title: t('skills.ml'),
      skills: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'LLMs',
        'RAG',
        'Generative AI',
        'Trajectory Prediction',
        'Fine-tuning',
        'Prompt Engineering',
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        'PyTorch',
        'FAISS',
        'Git',
        'Docker',
        'Linux',
        'React',
        'Django',
        'ASP.NET',
        'Waymo Dataset',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="container">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              SKILLS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('skills.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-200 hover:shadow-lg hover:translate-y-[-4px]"
              >
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">
                    {idx === 0 && '{}'}
                    {idx === 1 && '📊'}
                    {idx === 2 && '⚡'}
                    {idx === 3 && '🛠️'}
                  </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
