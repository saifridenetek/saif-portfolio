export const personalInfo = {
  name: "Saif Eddine RIDENE",
  title: "Software Engineer | Cloud, DevSecOps & Full Stack",
  tagline: "Engineering graduate specializing in modern distributed architectures, CI/CD automation, Kubernetes, and AI-driven systems.",
  location: "Tunis / Kélibia, Tunisia",
  email: "saifeddineridene@gmail.com",
  phone: "+216 55 39 32 23",
  status: "Available for Hire (CDI / SIVP / Relocation)",
  github: "https://github.com/saifridenetek",
  gitlab: "https://gitlab.com/RIDENESAIF",
  linkedin: "https://linkedin.com/in/saif-eddine-ridene",
  avatar: "/photo_profil.jpeg",
  resumeFr: "/cv_ridene_saif_eddine.pdf",
  resumeEn: "/cv_ridene_saif_eddine_en.pdf"
};

export const leadershipHighlight = {
  badge: "Repository Lead & CI/CD Architect",
  title: "GitLab Leadership: 2 PFE Teams & Production-Grade Repositories",
  description: "As the repository maintainer and DevOps architect for two concurrent engineering graduation teams, I orchestrated the multi-project Git workflows, designed zero-trust CI/CD pipelines, and enforced code quality and security gates from commit to cloud deployment.",
  projects: [
    {
      id: "docucheck",
      title: "DocuCheck — Banking Compliance & KYB Platform",
      role: "Lead Backend & DevSecOps Engineer (PFE Team Lead)",
      platform: "GitLab",
      repoUrl: "https://gitlab.com/RIDENESAIF/docuchek-backend",
      summary: "Cloud-native microservices platform for automated Know Your Business (KYB) verification powered by asynchronous AI agents and strict Shift-Left security.",
      architecture: [
        "Spring Boot 3 Microservices (Gateway, Eureka, JWT Identity, Cases)",
        "Asynchronous AI Inference Engine (FastAPI, Redis, TaskIQ, Mistral 7B LLM, Tesseract OCR)",
        "Kubernetes K3s Cluster on GCP with Traefik Ingress routing and persistent storage",
        "Multi-project GitLab CI/CD with automated SAST (Semgrep), image scanning (Trivy), secret audits (Gitleaks), and SonarQube"
      ],
      tags: ["Spring Boot 3", "FastAPI", "Kubernetes", "GitLab CI/CD", "Docker", "Redis", "PostgreSQL", "Ollama"]
    },
    {
      id: "pma",
      title: "PMA — Predictive Maintenance & Industrial Automation",
      role: "Lead Backend & Integration Architect (PFE Team Lead)",
      platform: "GitLab",
      repoUrl: "https://gitlab.com/RIDENESAIF/pma-backend",
      summary: "Enterprise industrial monitoring and predictive maintenance system with sensor data ingestion, real-time alert dispatching, and robust RESTful services.",
      architecture: [
        "Scalable RESTful Backend architecture with secure token-based authentication",
        "Real-time event logging, status monitoring, and incident mitigation workflows",
        "Automated CI/CD deployment pipeline with Docker containerization",
        "Optimized relational database schema for high-throughput operational metrics"
      ],
      tags: ["Python", "FastAPI", "Docker", "GitLab CI/CD", "PostgreSQL", "REST APIs", "Microservices"]
    }
  ]
};

export const featuredProjects = [
  {
    id: "provesta",
    title: "Price Comparison Platform with Automated Alerts",
    client: "Provesta Software",
    year: "2025",
    platform: "GitHub",
    repoUrl: "https://github.com/saifridenetek",
    description: "Multi-vendor tech product comparison platform with automated web scraping and instant email alert notifications on price drops.",
    highlights: [
      "Spring Boot 3.5 backend with @Scheduled background polling engine",
      "Python BeautifulSoup multi-source data extraction pipeline",
      "Angular 18 frontend with interactive Chart.js price trend visualization",
      "MySQL relational database with indexed product search"
    ],
    tags: ["Angular 18", "Spring Boot 3.5", "Python", "BeautifulSoup", "MySQL", "Chart.js"]
  },
  {
    id: "digistore",
    title: "DigiStore — E-Commerce with Smart AI Recommendations",
    client: "Academic Project",
    year: "2024",
    platform: "GitHub",
    repoUrl: "https://github.com/saifridenetek",
    description: "Modern e-commerce platform integrated with Machine Learning models for personalized product recommendations and intelligent catalog search.",
    highlights: [
      "Angular 17 user interface and administrative analytics dashboard",
      "Django REST Framework backend with secure JWT authentication",
      "Recommendation engine powered by TensorFlow 2.16 & Keras",
      "PostgreSQL database optimized for high-volume transactions"
    ],
    tags: ["Angular 17", "Django REST", "TensorFlow 2", "Keras", "PostgreSQL", "JWT"]
  },
  {
    id: "medical",
    title: "Medical Practice Management Application",
    client: "Academic Project",
    year: "2024",
    platform: "GitHub",
    repoUrl: "https://github.com/saifridenetek",
    description: "Cross-platform consultation and appointment scheduling system with digital patient records and multi-role access control (Doctor, Patient, Admin).",
    highlights: [
      "React + Ionic responsive frontend",
      "Node.js & Express RESTful API backend",
      "MongoDB NoSQL data store with secure document schemas",
      "Real-time appointment slot reservation and cancellation"
    ],
    tags: ["React", "Ionic", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    id: "bakery",
    title: "Bakery Inventory & Order Management System",
    client: "Academic Project",
    year: "2023",
    platform: "GitHub",
    repoUrl: "https://github.com/saifridenetek",
    description: "Comprehensive product catalog, inventory tracking, and client order management application utilizing the classic MVC pattern.",
    highlights: [
      "ASP.NET Core backend with Razor Pages rendering",
      "SQL Server relational database design",
      "Automated cart price calculation and order lifecycle management",
      "Strict role-based authorization for store staff"
    ],
    tags: ["ASP.NET Core", "C#", "SQL Server", "Razor Pages", "MVC"]
  }
];

export const skillCategories = [
  {
    category: "Cloud, DevOps & Security",
    skills: [
      { name: "Kubernetes (K8s / K3s)", level: 88 },
      { name: "Docker & Multi-Stage Builds", level: 95 },
      { name: "GitLab CI/CD & GitHub Actions", level: 92 },
      { name: "Shift-Left Security (Semgrep, Trivy, Gitleaks)", level: 90 },
      { name: "SonarQube & Code Quality", level: 90 },
      { name: "Traefik Ingress & Nginx", level: 85 },
      { name: "Google Cloud Platform (GCP)", level: 82 },
      { name: "Linux System Administration (Ubuntu, Alpine)", level: 92 }
    ]
  },
  {
    category: "Backend & Microservices",
    skills: [
      { name: "Java 17+ & Spring Boot 3", level: 92 },
      { name: "Python 3.11+ & FastAPI", level: 90 },
      { name: "Django REST Framework", level: 85 },
      { name: "Node.js & Express", level: 80 },
      { name: "C# / ASP.NET Core", level: 82 },
      { name: "RESTful API Architecture & JWT", level: 95 },
      { name: "Microservices (Eureka, Cloud Gateway, Zipkin)", level: 88 }
    ]
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "React & React Hooks", level: 88 },
      { name: "Angular 17 / 18", level: 86 },
      { name: "TypeScript & JavaScript ES6+", level: 90 },
      { name: "Tailwind CSS & Modern UI", level: 92 },
      { name: "HTML5, CSS3 & Responsive Design", level: 95 }
    ]
  },
  {
    category: "Databases, Caching & Storage",
    skills: [
      { name: "PostgreSQL & Complex SQL", level: 90 },
      { name: "MySQL & MariaDB", level: 88 },
      { name: "Redis (Cache & TaskIQ Broker)", level: 86 },
      { name: "MongoDB NoSQL", level: 82 },
      { name: "MinIO (S3 Object Storage)", level: 84 },
      { name: "SQL Server (T-SQL)", level: 80 }
    ]
  },
  {
    category: "AI, Data & Development Tools",
    skills: [
      { name: "AI Coding Assistants (Claude Code, Agents)", level: 95 },
      { name: "LLM Inference (Ollama, Mistral 7B, LangChain)", level: 86 },
      { name: "OCR Processing (Tesseract)", level: 85 },
      { name: "TensorFlow 2 & Keras", level: 78 },
      { name: "Git, GitHub & GitLab", level: 95 },
      { name: "Agile, Scrum & Jira", level: 90 }
    ]
  }
];

export const educationHistory = [
  {
    period: "2023 — 2026",
    degree: "National Engineering Degree in Software Engineering",
    institution: "TEK-UP Private Higher School of Technologies and Engineering",
    details: "Advanced curriculum covering Distributed Systems, Microservices, Cloud Computing, DevSecOps, Advanced Algorithms, and AI integrations."
  },
  {
    period: "2017 — 2020",
    degree: "Applied Bachelor's Degree in Electromechanics",
    institution: "Arab University of Sciences",
    details: "Graduated Valedictorian (Top of Class). In-depth mastery of mechanical modeling, physical systems, electronics, and rigorous scientific calculus."
  },
  {
    period: "2008 — 2012",
    degree: "High School Diploma in Technical Sciences",
    institution: "High School of Kelibia",
    details: "Foundation in physics, mechanics, electronics, and technical sciences with Honors (Fairly Good)."
  }
];

export const experienceHistory = [
  {
    period: "Feb 2026 — Jul 2026",
    role: "DevSecOps, Cloud & Full-Stack Engineering Intern",
    company: "DeepShift AI — Software Engineering & AI Startup",
    location: "Tunis, Tunisia",
    description: "Engineered and deployed the production-ready DocuCheck platform for automated banking compliance and KYB verification.",
    achievements: [
      "Architected multi-project GitLab CI/CD with automated SAST, secret audits, and container scans.",
      "Orchestrated Kubernetes (K3s) cluster on GCP with Traefik Ingress routing and PVC persistence.",
      "Built Spring Boot 3 microservices and asynchronous FastAPI AI pipelines with Redis and local LLMs.",
      "Hardened Docker multi-stage images, enforcing zero-trust non-root execution."
    ]
  }
];

