import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: t('projects.autonomous'),
      description: t('projects.autonomous_desc'),
      tags: ['PyTorch', 'Waymo Dataset', 'Python', 'Simulation', 'Safety Metrics'],
      featured: true,
    },
    {
      title: t('projects.rag'),
      description: t('projects.rag_desc'),
      tags: ['RAG', 'FAISS', 'LLMs', 'NLP', 'Python', 'Semantic Search'],
      featured: true,
    },
    {
      title: t('projects.chatbot'),
      description: t('projects.chatbot_desc'),
      tags: ['GPT', 'LLaMA', 'Fine-tuning', 'REST APIs', 'Django'],
      featured: true,
    },
    {
      title: t('projects.analytics'),
      description: t('projects.analytics_desc'),
      tags: ['Python', 'SQL', 'Power BI', 'ETL', 'Pandas'],
    },
    {
      title: t('projects.fullstack'),
      description: t('projects.fullstack_desc'),
      tags: ['React', 'Django', 'ASP.NET', 'REST APIs', 'JavaScript'],
    },
    {
      title: t('projects.entity'),
      description: t('projects.entity_desc'),
      tags: ['LLMs', 'Prompt Engineering', 'Python', 'NLP', 'Analysis'],
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              PROJECTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('projects.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 border-2 border-border rounded-lg bg-card hover:border-primary transition-all duration-300 hover:shadow-lg hover:translate-y-[-8px] flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                        {t('projects.featured')}
                      </span>
                    )}
                  </div>
                  <div className="text-3xl">📦</div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-foreground text-xs rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <a
                    href="https://github.com/Ashokreddy2806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded transition-colors"
                  >
                    <Github size={16} />
                    {t('projects.github')}
                  </a>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded transition-colors">
                    <ExternalLink size={16} />
                    {t('projects.viewProject')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
