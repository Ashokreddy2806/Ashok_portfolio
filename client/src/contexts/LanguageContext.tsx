import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.hi': 'HI, I\'M',
    'hero.name': 'Kesari Venkata Ashok Reddy',
    'hero.role': 'AI/ML Engineer',
    'hero.intro': 'I\'m an AI Master\'s student at Brandenburg University of Technology with hands-on experience in machine learning, autonomous driving simulation, and large language models. I build RAG systems, trajectory prediction frameworks, and full-stack AI applications — turning research into deployable solutions.',
    'hero.location': 'Based in Cottbus, Germany',
    'hero.viewWork': 'View My Work',
    'hero.downloadCV': 'Download CV',
    'about.headline': 'Building AI that works in the real world',
    'about.experience': 'Years Experience',
    'about.projects': 'AI Projects',
    'about.awards': 'Hackathon Awards',
    'about.currentFocus': '// current_focus',
    'about.focus1': 'Autonomous Driving Simulation @ Cognibit',
    'about.focus2': 'RAG-based Hallucination Detection @ BTU',
    'about.focus3': 'M.Sc. Artificial Intelligence @ BTU Cottbus',
    'about.languages': 'English – Fluent | German – Conversational',
    'experience.title': 'Where I\'ve worked',
    'experience.intern': 'AI/ML Intern',
    'experience.cognibit': 'Cognibit',
    'experience.intern_desc1': 'Developed a simulation framework to evaluate trajectory prediction models in braking and car-following scenarios.',
    'experience.intern_desc2': 'Analyzed multi-agent trajectory predictions using Waymo Open Dataset and computed safety metrics.',
    'experience.intern_desc3': 'Visualized and evaluated 32-rollout future trajectory predictions to study model behavior.',
    'experience.research': 'Student Research Intern',
    'experience.btu': 'Brandenburg Technical University',
    'experience.research_desc1': 'Developed a RAG-based system using FAISS and LLMs to detect hallucinated historical entities.',
    'experience.research_desc2': 'Built a custom historical knowledge base and semantic retrieval pipeline.',
    'experience.research_desc3': 'Designed an LLM-assisted analysis framework to explain and classify incorrect entities.',
    'experience.trainee': 'Associate Trainee',
    'experience.kanini': 'Kanini Software Solutions',
    'experience.trainee_desc1': 'Developed and fine-tuned Generative AI models (GPT, LLaMA).',
    'experience.trainee_desc2': 'Built automation scripts and data workflows using Python and SQL.',
    'experience.trainee_desc3': 'Collaborated with cross-functional teams to develop full-stack applications.',
    'projects.title': 'What I\'ve built',
    'projects.featured': 'Featured',
    'projects.autonomous': 'Autonomous Driving Simulation Framework',
    'projects.autonomous_desc': 'Evaluation framework for CATK trajectory prediction model.',
    'projects.rag': 'RAG-Based Hallucination Detector',
    'projects.rag_desc': 'System using FAISS and LLMs to detect hallucinated entities.',
    'projects.chatbot': 'Generative AI Chatbot Platform',
    'projects.chatbot_desc': 'Fine-tuned GPT and LLaMA models integrated into production.',
    'projects.analytics': 'Predictive Analytics Dashboard',
    'projects.analytics_desc': 'Data workflows and Power BI dashboards for business intelligence.',
    'projects.fullstack': 'Full-Stack AI Web Application',
    'projects.fullstack_desc': 'Cross-functional applications with REST APIs and dashboards.',
    'projects.entity': 'LLM-Assisted Entity Analysis Framework',
    'projects.entity_desc': 'Framework to explain and classify incorrect entities in narratives.',
    'projects.viewProject': 'View Project',
    'projects.github': 'GitHub',
    'skills.title': 'Skills & Technologies',
    'skills.programming': 'Programming & Databases',
    'skills.datascience': 'Data Science & Visualization',
    'skills.ml': 'Machine Learning & AI',
    'skills.tools': 'Tools & Frameworks',
    'education.title': 'Academic Background',
    'education.msc': 'M.Sc. Artificial Intelligence',
    'education.btu_full': 'Brandenburg University of Technology',
    'education.cottbus': 'Cottbus, Germany',
    'education.msc_courses': 'Machine Learning, Deep Learning, NLP, Cloud Computing',
    'education.be': 'B.E. Computer Engineering',
    'education.presidency': 'Presidency University',
    'education.bangalore': 'Bengaluru, India',
    'education.be_courses': 'Data Structures, Algorithms, Databases, Operating Systems, Web Development',
    'awards.title': 'Awards',
    'awards.fsr': 'FSR-AI Hackathon Winner',
    'awards.fsr_org': 'BTU Cottbus',
    'awards.fsr_desc': 'Awarded for designing and delivering a high-impact generative AI solution.',
    'awards.kodezenie': 'Kodezenie Hackathon Award',
    'awards.kodezenie_org': 'Kanini',
    'awards.kodezenie_desc': 'Recognized for excellence in full-stack web development and data science.',
    'contact.title': 'Let\'s work together',
    'contact.desc': 'I\'m open to AI/ML roles, research collaborations, and interesting projects. Feel free to reach out.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.emailMe': 'Email Me',
    'footer.madeWith': 'Made with React & Framer Motion',
  },
  de: {
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Ausbildung',
    'nav.contact': 'Kontakt',
    'hero.hi': 'HALLO, ICH BIN',
    'hero.name': 'Kesari Venkata Ashok Reddy',
    'hero.role': 'AI/ML Ingenieur',
    'hero.intro': 'Ich bin ein KI-Master-Student an der Brandenburgischen Technischen Universität mit praktischer Erfahrung in maschinellem Lernen, autonomer Fahrsimulation und großen Sprachmodellen. Ich baue RAG-Systeme, Trajektorienvorhersage-Frameworks und Full-Stack-KI-Anwendungen – Forschung in einsatzfähige Lösungen umwandeln.',
    'hero.location': 'Ansässig in Cottbus, Deutschland',
    'hero.viewWork': 'Meine Arbeiten ansehen',
    'hero.downloadCV': 'CV herunterladen',
    'about.headline': 'KI bauen, die in der realen Welt funktioniert',
    'about.experience': 'Jahre Erfahrung',
    'about.projects': 'KI-Projekte',
    'about.awards': 'Hackathon-Preise',
    'about.currentFocus': '// aktueller_fokus',
    'about.focus1': 'Autonome Fahrsimulation @ Cognibit',
    'about.focus2': 'RAG-basierte Halluzinations-Erkennung @ BTU',
    'about.focus3': 'M.Sc. Künstliche Intelligenz @ BTU Cottbus',
    'about.languages': 'Englisch – Fließend | Deutsch – Konversation',
    'experience.title': 'Wo ich gearbeitet habe',
    'experience.intern': 'KI/ML-Praktikant',
    'experience.cognibit': 'Cognibit',
    'experience.intern_desc1': 'Entwickelt ein Simulationsframework zur Bewertung von Trajektorienvorhersage-Modellen.',
    'experience.intern_desc2': 'Analysierte Multi-Agent-Trajektorienvorhersagen mit dem Waymo Open Dataset.',
    'experience.intern_desc3': 'Visualisierte und bewertete 32-Rollout-Zukunftstrajektorien.',
    'experience.research': 'Student Research Intern',
    'experience.btu': 'Brandenburgische Technische Universität',
    'experience.research_desc1': 'Entwickelt ein RAG-basiertes System mit FAISS und LLMs.',
    'experience.research_desc2': 'Erstellte eine benutzerdefinierte historische Wissensdatenbank.',
    'experience.research_desc3': 'Entwarf ein LLM-gestütztes Analysisframework.',
    'experience.trainee': 'Associate Trainee',
    'experience.kanini': 'Kanini Software Solutions',
    'experience.trainee_desc1': 'Entwickelt und optimiert generative KI-Modelle (GPT, LLaMA).',
    'experience.trainee_desc2': 'Erstellte Automatisierungsskripte und Daten-Workflows.',
    'experience.trainee_desc3': 'Zusammenarbeit mit funktionsübergreifenden Teams.',
    'projects.title': 'Was ich gebaut habe',
    'projects.featured': 'Hervorgehoben',
    'projects.autonomous': 'Autonomous Driving Simulation Framework',
    'projects.autonomous_desc': 'Evaluierungs-Framework für CATK-Trajektorienvorhersage-Modell.',
    'projects.rag': 'RAG-basierte Halluzinations-Detektor',
    'projects.rag_desc': 'System mit FAISS und LLMs zur Erkennung halluzinierter Entitäten.',
    'projects.chatbot': 'Generative KI Chatbot-Plattform',
    'projects.chatbot_desc': 'Fine-getunte GPT- und LLaMA-Modelle in Produktion.',
    'projects.analytics': 'Predictive Analytics Dashboard',
    'projects.analytics_desc': 'Daten-Workflows und Power BI Dashboards.',
    'projects.fullstack': 'Full-Stack KI Web-Anwendung',
    'projects.fullstack_desc': 'Funktionsübergreifende Anwendungen mit REST APIs.',
    'projects.entity': 'LLM-gestütztes Entity-Analyse-Framework',
    'projects.entity_desc': 'Framework zur Erklärung falscher Entitäten in Narrativen.',
    'projects.viewProject': 'Projekt ansehen',
    'projects.github': 'GitHub',
    'skills.title': 'Fähigkeiten & Technologien',
    'skills.programming': 'Programmierung & Datenbanken',
    'skills.datascience': 'Datenwissenschaft & Visualisierung',
    'skills.ml': 'Maschinelles Lernen & KI',
    'skills.tools': 'Tools & Frameworks',
    'education.title': 'Akademischer Hintergrund',
    'education.msc': 'M.Sc. Künstliche Intelligenz',
    'education.btu_full': 'Brandenburgische Technische Universität',
    'education.cottbus': 'Cottbus, Deutschland',
    'education.msc_courses': 'Machine Learning, Deep Learning, NLP, Cloud Computing',
    'education.be': 'B.E. Informatik',
    'education.presidency': 'Presidency University',
    'education.bangalore': 'Bengaluru, Indien',
    'education.be_courses': 'Datenstrukturen, Algorithmen, Datenbanken, Betriebssysteme, Webentwicklung',
    'awards.title': 'Auszeichnungen',
    'awards.fsr': 'FSR-AI Hackathon Gewinner',
    'awards.fsr_org': 'BTU Cottbus',
    'awards.fsr_desc': 'Ausgezeichnet für die Gestaltung und Lieferung einer hochimpactiven generativen KI-Lösung.',
    'awards.kodezenie': 'Kodezenie Hackathon Award',
    'awards.kodezenie_org': 'Kanini',
    'awards.kodezenie_desc': 'Anerkannt für Exzellenz in Full-Stack-Webentwicklung und Datenwissenschaft.',
    'contact.title': 'Lass uns zusammenarbeiten',
    'contact.desc': 'Ich bin offen für KI/ML-Rollen, Forschungszusammenarbeit und interessante Projekte. Kontaktiere mich gerne.',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.emailMe': 'Schreib mir',
    'footer.madeWith': 'Erstellt mit React & Framer Motion',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
