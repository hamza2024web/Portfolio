export type Language = "fr" | "en"

export interface Translations {
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    contact: string
    downloadResume: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    getInTouch: string
    viewProjects: string
    resume: string
    availability: string
    availableText: string
  }
  about: {
    title: string
    description1: string
    description2: string
    description3: string
    keyExpertise: string
    expertise: string[]
  }
  experience: {
    title: string
    jobs: Array<{
      title: string
      company: string
      period: string
      description: string[]
    }>
  }
  projects: {
    title: string
    items: Array<{
      title: string
      description: string
      tags: string[]
      status?: string
    }>
  }
  skills: {
    title: string
    backend: string
    frontend: string
    database: string
    devops: string
    methodologies: string
    additionalTech: string
  }
  education: {
    title: string
    items: Array<{
      degree: string
      school: string
      period: string
      location: string
    }>
  }
  learning: {
    title: string
    items: string[]
  }
  contact: {
    title: string
    subtitle: string
    message: string
    responseTime: string
    info: string
  }
  footer: {
    title: string
    subtitle: string
    location: string
    builtWith: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      about: "À Propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      education: "Formation",
      contact: "Contact",
      downloadResume: "Télécharger CV",
    },
    hero: {
      title: "Hamza Akroubi",
      subtitle: "Développeur Java Full Stack",
      description:
        "Développeur Full Stack basé à Agadir, passionné par la création d'applications web robustes et modernes. Je me spécialise dans l'écosystème Java/Spring Boot et Angular.",
      getInTouch: "Me Contacter",
      viewProjects: "Voir les Projets",
      resume: "Télécharger CV",
      availability: "Disponible",
      availableText: "Disponible pour nouvelles opportunités",
    },
    about: {
      title: "À Propos de Moi",
      description1:
        "Développeur Full Stack basé à Agadir, passionné par la création d'applications web robustes et modernes. Actuellement en 2ème année à YouCode-UM6P en Science des Données, je me spécialise dans l'écosystème Java/Spring Boot et Angular.",
      description2:
        "Mon approche allie la rigueur du backend (Java, Spring Boot, API REST, bases de données) à la créativité du frontend (Angular, React, TypeScript, interfaces modernes). Je suis également intéressé par les pratiques DevOps (Docker, CI/CD) et les méthodologies Agiles.",
      description3: "Je transforme des concepts complexes en solutions élégantes, performantes et évolutives.",
      keyExpertise: "Domaines d'Expertise",
      expertise: [
        "Développement Java EE & Spring Boot",
        "Applications Angular & React",
        "Architecture REST API & Microservices",
        "Bases de données PostgreSQL & MySQL",
        "DevOps avec Docker & CI/CD",
      ],
    },
    experience: {
      title: "Expérience Professionnelle",
      jobs: [
        {
          title: "Stage Développeur Full Stack",
          company: "Commune Urbaine d'Agadir",
          period: "Mai - Juillet 2025",
          description: [
            "Développement full-stack d'une plateforme événementielle municipale avec Laravel 12, Vue.js 3, et Inertia.js",
            "Implémentation d'un système multilingue (FR/AR/EN) avec support RTL",
            "Création d'un dashboard administrateur complet avec analytics",
            "Mise en place d'une authentification OAuth 2.0 pour les employés municipaux",
            "Application des méthodologies Agiles (GitFlow, ClickUp, Notion, Figma)",
          ],
        },
      ],
    },
    projects: {
      title: "Projets Principaux",
      items: [
        {
          title: "Clinique Digitale",
          description:
            "Application de gestion médicale complète avec architecture modulaire Maven comprenant 3 espaces utilisateurs (Admin, Médecin, Patient). Gestion des rendez-vous, notes médicales sécurisées, et déploiement Docker.",
          tags: ["Java EE", "WildFly", "PostgreSQL", "Docker", "Maven"],
          status: "Open Source",
        },
        {
          title: "Club Video Games",
          description:
            "Plateforme de gestion de tournois gaming avec système automatisé incluant phases de groupes et élimination directe. Interface gaming immersive avec design responsive.",
          tags: ["PHP OOP", "MySQL", "JavaScript", "Algorithmique"],
          status: "Open Source",
        },
        {
          title: "Agadir Events",
          description:
            "Plateforme événementielle municipale avec système multilingue (FR/AR/EN), dashboard administrateur, authentification OAuth 2.0, et méthodologie Agile complète.",
          tags: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Docker"],
          status: "En Production",
        },
      ],
    },
    skills: {
      title: "Compétences Techniques",
      backend: "Développement Backend",
      frontend: "Développement Frontend",
      database: "Bases de Données",
      devops: "DevOps & Outils",
      methodologies: "Méthodologies",
      additionalTech: "Technologies Additionnelles",
    },
    education: {
      title: "Formation & Éducation",
      items: [
        {
          degree: "Développeur Full Stack Java Angular - 2ème année",
          school: "YouCode - UM6P",
          period: "2024 - 2025",
          location: "Safi, Maroc",
        },
        {
          degree: "Cycle préparatoire sciences mathématiques et informatiques",
          school: "Faculté des Sciences d'Agadir",
          period: "2022 - 2023",
          location: "Agadir, Maroc",
        },
        {
          degree: "Baccalauréat Sciences Mathématiques Option A",
          school: "Lycée Almassira Al Khadra",
          period: "2022",
          location: "Agadir, Maroc",
        },
      ],
    },
    learning: {
      title: "En Cours d'Apprentissage",
      items: [
        "Architecture Microservices (Spring Cloud, Service Discovery)",
        "Kubernetes & Cloud (Docker Orchestration, AWS basics)",
        "Tests Avancés (TDD, Tests d'Intégration, Automatisation)",
        "GraphQL (Alternative moderne à REST API)",
      ],
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Informations de Contact",
      message: "Vous avez un projet en tête ou une opportunité à discuter ? Je serais ravi d'échanger avec vous !",
      responseTime: "Je réponds généralement sous 24h",
      info: "Informations de Contact",
    },
    footer: {
      title: "Hamza Akroubi",
      subtitle: "Développeur Java Full Stack",
      location: "Agadir, Maroc",
      builtWith: "Construit avec passion et beaucoup de ☕",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      downloadResume: "Download Resume",
    },
    hero: {
      title: "Hamza Akroubi",
      subtitle: "Java Full Stack Developer",
      description:
        "Full Stack Developer based in Agadir, passionate about creating robust and modern web applications. I specialize in the Java/Spring Boot and Angular ecosystem.",
      getInTouch: "Get in Touch",
      viewProjects: "View Projects",
      resume: "Download Resume",
      availability: "Available",
      availableText: "Available for new opportunities",
    },
    about: {
      title: "About Me",
      description1:
        "Full Stack Developer based in Agadir, passionate about creating robust and modern web applications. Currently in 2nd year at YouCode-UM6P in Data Science, I specialize in the Java/Spring Boot and Angular ecosystem.",
      description2:
        "My approach combines backend rigor (Java, Spring Boot, REST API, databases) with frontend creativity (Angular, React, TypeScript, modern interfaces). I'm also interested in DevOps practices (Docker, CI/CD) and Agile methodologies.",
      description3: "I transform complex concepts into elegant, performant, and scalable solutions.",
      keyExpertise: "Key Expertise",
      expertise: [
        "Java EE & Spring Boot Development",
        "Angular & React Applications",
        "REST API & Microservices Architecture",
        "PostgreSQL & MySQL Databases",
        "DevOps with Docker & CI/CD",
      ],
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          title: "Full Stack Developer Intern",
          company: "Commune Urbaine d'Agadir",
          period: "May - July 2025",
          description: [
            "Full-stack development of a municipal event platform with Laravel 12, Vue.js 3, and Inertia.js",
            "Implementation of a multilingual system (FR/AR/EN) with RTL support",
            "Creation of a complete admin dashboard with analytics",
            "Setup of OAuth 2.0 authentication for municipal employees",
            "Application of Agile methodologies (GitFlow, ClickUp, Notion, Figma)",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Digital Clinic",
          description:
            "Complete medical management application with modular Maven architecture including 3 user spaces (Admin, Doctor, Patient). Appointment management, secure medical notes, and Docker deployment.",
          tags: ["Java EE", "WildFly", "PostgreSQL", "Docker", "Maven"],
          status: "Open Source",
        },
        {
          title: "Video Games Club",
          description:
            "Gaming tournament management platform with automated system including group stages and knockout phases. Immersive gaming interface with responsive design.",
          tags: ["PHP OOP", "MySQL", "JavaScript", "Algorithms"],
          status: "Open Source",
        },
        {
          title: "Agadir Events",
          description:
            "Municipal event platform with multilingual system (FR/AR/EN), admin dashboard, OAuth 2.0 authentication, and complete Agile methodology.",
          tags: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Docker"],
          status: "In Production",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      backend: "Backend Development",
      frontend: "Frontend Development",
      database: "Databases",
      devops: "DevOps & Tools",
      methodologies: "Methodologies",
      additionalTech: "Additional Technologies",
    },
    education: {
      title: "Education & Training",
      items: [
        {
          degree: "Full Stack Java Angular Developer - 2nd year",
          school: "YouCode - UM6P",
          period: "2024 - 2025",
          location: "Safi, Morocco",
        },
        {
          degree: "Preparatory cycle in mathematics and computer science",
          school: "Faculty of Sciences of Agadir",
          period: "2022 - 2023",
          location: "Agadir, Morocco",
        },
        {
          degree: "Baccalaureate in Mathematical Sciences Option A",
          school: "Lycée Almassira Al Khadra",
          period: "2022",
          location: "Agadir, Morocco",
        },
      ],
    },
    learning: {
      title: "Currently Learning",
      items: [
        "Microservices Architecture (Spring Cloud, Service Discovery)",
        "Kubernetes & Cloud (Docker Orchestration, AWS basics)",
        "Advanced Testing (TDD, Integration Tests, Test Automation)",
        "GraphQL (Modern alternative to REST API)",
      ],
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Contact Information",
      message: "Have a project in mind or an opportunity to discuss? I'd love to hear from you!",
      responseTime: "I typically respond within 24 hours",
      info: "Contact Information",
    },
    footer: {
      title: "Hamza Akroubi",
      subtitle: "Java Full Stack Developer",
      location: "Agadir, Morocco",
      builtWith: "Built with passion and lots of ☕",
    },
  },
}
