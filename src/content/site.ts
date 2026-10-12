// Single source of truth for every page of the site.
// Each language holds the same shape; the three focus views (all, ai, devops)
// reorder and emphasize this content rather than duplicating it.

export type Lang = "en" | "es";
export type Focus = "all" | "ai" | "devops";
export type Tag = "ai" | "devops";

export const LANGS: Lang[] = ["en", "es"];
export const FOCUSES: Focus[] = ["all", "ai", "devops"];

export const SITE_URL = "https://estebangzam.github.io";

export const PERSON = {
  name: "Esteban Gaviria Zambrano",
  email: "estebangaviria82@gmail.com",
  linkedin: "https://www.linkedin.com/in/esteban-gaviria-zambrano/",
  github: "https://github.com/EstebanGZam",
  formspree: "https://formspree.io/f/mjkoanwg",
};

export interface Bullet {
  tags: Tag[];
  text: string;
}

export interface FlowStep {
  title: string;
  detail?: string;
}

export interface FlowRow {
  label: string;
  steps: FlowStep[];
}

export interface Flow {
  title: string;
  caption: string;
  rows: FlowRow[];
}

export interface Link {
  label: string;
  href: string;
}

export interface Entry {
  name: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  tags: Tag[];
  links: Link[];
  bullets: Bullet[];
  flow?: Flow;
}

export interface Fact {
  label: string;
  value: string;
}

export interface SkillGroup {
  name: string;
  tags: Tag[];
  items: string[];
}

export interface Content {
  meta: { title: Record<Focus, string>; description: Record<Focus, string> };
  ui: {
    skip: string;
    primaryNav: string;
    focusNav: string;
    focus: Record<Focus, string>;
    sections: { about: string; experience: string; projects: string; skills: string; credentials: string; contact: string };
    themeToggle: string;
    languageName: string;
    switchLanguage: string;
    downloadCv: string;
    cvAi: string;
    cvDevops: string;
    photoAlt: string;
    opensInNewTab: string;
    viewOnGithub: string;
  };
  hero: {
    greeting: string;
    role: Record<Focus, string>;
    lead: Record<Focus, string>;
    location: string;
  };
  about: Record<Focus, string[]>;
  facts: Fact[];
  experience: Entry[];
  teaching: { name: string; role: string; period: string; text: string };
  projects: Entry[];
  smallProjects: { name: string; period: string; text: string; tags: Tag[]; href: string }[];
  skills: SkillGroup[];
  credentials: {
    educationTitle: string;
    education: { school: string; degree: string; detail: string };
    certsTitle: string;
    certs: { name: string; detail: string; tags: Tag[] }[];
    otherTitle: string;
    other: { label: string; text: string }[];
  };
  contact: {
    lead: string;
    emailLabel: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { built: string; source: string };
  notFound: { title: string; text: string; home: string };
}

const en: Content = {
  meta: {
    title: {
      all: "Esteban Gaviria — AI & DevOps Engineer",
      ai: "Esteban Gaviria — AI Engineer",
      devops: "Esteban Gaviria — DevOps Engineer",
    },
    description: {
      all: "Esteban Gaviria Zambrano builds AI systems (LLMs, RAG, real-time voice) and the cloud platforms that take them to production (Kubernetes, AWS, Terraform, GitOps).",
      ai: "AI Engineer building LLM orchestration, RAG and real-time voice pipelines for a production conversational AI platform.",
      devops: "DevOps Engineer building Kubernetes platforms on AWS with Terraform, GitOps (ArgoCD), supply-chain security and an Azure recovery domain.",
    },
  },
  ui: {
    skip: "Skip to content",
    primaryNav: "Sections",
    focusNav: "Focus",
    focus: { all: "Overview", ai: "AI", devops: "DevOps" },
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      credentials: "Education & credentials",
      contact: "Contact",
    },
    themeToggle: "Toggle light and dark theme",
    languageName: "Español",
    switchLanguage: "Ver esta página en español",
    downloadCv: "Download CV",
    cvAi: "AI Engineer CV",
    cvDevops: "DevOps Engineer CV",
    photoAlt: "Portrait of Esteban Gaviria Zambrano",
    opensInNewTab: "(opens in a new tab)",
    viewOnGithub: "GitHub",
  },
  hero: {
    greeting: "Hi, I'm Esteban Gaviria",
    role: {
      all: "AI & DevOps Engineer",
      ai: "AI Engineer",
      devops: "DevOps Engineer",
    },
    lead: {
      all: "I build AI systems and the platforms that take them to production.",
      ai: "I build LLM, RAG and real-time voice systems, and ship them to production.",
      devops: "I build Kubernetes platforms with Terraform and GitOps, and automate them with AI agents.",
    },
    location: "Cali, Colombia · Open to remote",
  },
  about: {
    all: [
      "I'm a software engineer from Cali, Colombia. I work at Brain AIX, where we build conversational AI agents that talk with a cloned voice and an avatar, and I enjoy both sides of that work: the AI that makes a conversation feel natural, and the infrastructure that keeps it running.",
      "Outside work I lead the infrastructure of MicroTodoSuite, a team project where we take a microservices platform to Kubernetes on AWS. I'm finishing a double degree in Telematics and Systems Engineering at Universidad Icesi, and I compete in judo.",
    ],
    ai: [
      "I'm an AI engineer from Cali, Colombia. At Brain AIX I build conversational AI agents that talk with a cloned voice and an avatar: the way they use language models, look up each user's documents and answer by voice in real time.",
      "I also take care of getting that work to production, from containers to CI/CD. I'm finishing a double degree in Telematics and Systems Engineering at Universidad Icesi, and I compete in judo.",
    ],
    devops: [
      "I'm a DevOps engineer from Cali, Colombia. I like building platforms where every deployment is automated, reviewed and easy to roll back. I lead the infrastructure of MicroTodoSuite, a team project where we take a microservices platform to Kubernetes on AWS, and I run the delivery of a production AI product at Brain AIX.",
      "I'm preparing the CNCF Kubestronaut certifications, finishing a double degree in Telematics and Systems Engineering at Universidad Icesi, and I compete in judo.",
    ],
  },
  facts: [
    { label: "Currently", value: "AI Software Developer at Brain AIX" },
    { label: "Studying", value: "Telematics & Systems Engineering, Universidad Icesi" },
    { label: "Languages", value: "Spanish (native), English (C1)" },
  ],
  experience: [
    {
      name: "Brain AIX",
      role: "AI Software Developer",
      period: "September 2025 – Present",
      location: "Remote",
      summary: "Conversational AI platform where agents talk in real time with a cloned voice and an avatar.",
      tags: ["ai", "devops"],
      links: [{ label: "brainaix.online", href: "https://brainaix.online/" }],
      bullets: [
        {
          tags: ["ai"],
          text: "Built the LLM orchestration layer: memory, tool use and streaming across OpenAI, Anthropic, Gemini and open-source models.",
        },
        {
          tags: ["ai"],
          text: "Built the RAG pipeline that grounds each agent in its user's own documents, with a fine-tuned embedding model.",
        },
        {
          tags: ["ai"],
          text: "Built the real-time, multilingual voice pipeline, from speech recognition to voice-cloned speech.",
        },
        {
          tags: ["devops"],
          text: "Containerized the platform's services and built the CI/CD that releases them to AWS without downtime.",
        },
        {
          tags: ["ai", "devops"],
          text: "Brought agent-assisted development to the team, with our own skills and MCP servers.",
        },
      ],
      flow: {
        title: "How a conversation flows",
        caption: "Simplified view of the voice and retrieval pipeline. Provider names are the ones used in production; internal details are omitted.",
        rows: [
          {
            label: "Voice",
            steps: [
              { title: "User speaks" },
              { title: "Speech-to-text", detail: "Deepgram · Whisper" },
              { title: "LLM orchestration", detail: "memory · tools · streaming" },
              { title: "Text-to-speech", detail: "voice cloning" },
              { title: "Avatar answers" },
            ],
          },
          {
            label: "Grounding",
            steps: [
              { title: "User documents", detail: "PDF · Word" },
              { title: "Chunking" },
              { title: "Embeddings", detail: "fine-tuned model" },
              { title: "Vector search", detail: "context for the LLM" },
            ],
          },
        ],
      },
    },
  ],
  teaching: {
    name: "Universidad Icesi",
    role: "Teaching Assistant · Mathematics & Computational Thinking",
    period: "2023 – 2026",
    text: "Supported engineering students in applied mathematics, calculus and programming fundamentals.",
  },
  projects: [
    {
      name: "MicroTodoSuite",
      role: "Infrastructure Lead · team of 3",
      period: "April 2025 – Present",
      summary: "A microservices platform my team of three moved from Azure to Kubernetes on AWS, with dev, staging and production environments.",
      tags: ["devops", "ai"],
      links: [
        { label: "Case study", href: "https://microtodosuite.github.io/microservice-app-showcase/" },
        { label: "GitHub", href: "https://github.com/MicroTodoSuite" },
      ],
      bullets: [
        {
          tags: ["devops"],
          text: "Led the migration to Amazon EKS, with all the infrastructure written in Terraform.",
        },
        {
          tags: ["devops"],
          text: "Designed an economical and a full architecture, plus a recovery environment on Azure with tested failover.",
        },
        {
          tags: ["devops"],
          text: "Built the delivery path: shared CI that scans and signs images, and GitOps deployments with ArgoCD.",
        },
        {
          tags: ["ai", "devops"],
          text: "Built AI agents and skills that write, review and audit the project's infrastructure code.",
        },
      ],
      flow: {
        title: "From a merged pull request to a running cluster",
        caption: "The delivery path every service shares. Nothing reaches a cluster by hand.",
        rows: [
          {
            label: "Delivery",
            steps: [
              { title: "Service repo", detail: "thin CI caller" },
              { title: "Reusable CI", detail: "build · Trivy · SBOM · Cosign" },
              { title: "Amazon ECR", detail: "signed image" },
              { title: "GitOps PR", detail: "digest bump" },
              { title: "ArgoCD", detail: "Kyverno verifies" },
              { title: "Amazon EKS", detail: "dev · staging · prod" },
            ],
          },
          {
            label: "Foundations",
            steps: [
              { title: "Terraform roots", detail: "saved plans only" },
              { title: "AWS", detail: "VPC · EKS · IAM · Route 53" },
              { title: "Azure", detail: "AKS warm standby" },
            ],
          },
        ],
      },
    },
  ],
  smallProjects: [
    {
      name: "EcommerceCoZam",
      period: "2025",
      text: "Multi-cloud e-commerce on Azure and Google Cloud Kubernetes, with Terraform and GitHub Actions.",
      tags: ["devops"],
      href: "https://github.com/EcommerceCoZam",
    },
  ],
  skills: [
    {
      name: "LLM engineering",
      tags: ["ai"],
      items: ["LLM orchestration", "Prompt engineering & evaluation", "RAG", "Embeddings & fine-tuning", "Weaviate", "Agents & tool use (MCP)", "LangChain", "LangGraph", "LlamaIndex", "Hugging Face"],
    },
    {
      name: "Models & voice AI",
      tags: ["ai"],
      items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Alibaba Qwen", "Open-source LLMs", "Deepgram", "Whisper", "ElevenLabs", "Azure/Google Speech", "Voice cloning"],
    },
    {
      name: "Cloud",
      tags: ["devops"],
      items: ["AWS EKS", "EC2", "VPC", "IAM/IRSA", "ECR", "Route 53", "Transit Gateway", "Azure AKS", "Azure Container Apps", "GCP GKE"],
    },
    {
      name: "Kubernetes & delivery",
      tags: ["devops"],
      items: ["Kubernetes", "Docker", "Kustomize", "Istio", "Argo Rollouts", "ArgoCD", "GitHub Actions", "Terraform", "tflint", "Jenkins"],
    },
    {
      name: "Security & observability",
      tags: ["devops"],
      items: ["Trivy", "Syft", "Cosign", "Kyverno", "External Secrets", "Prometheus", "Grafana", "Loki", "Jaeger", "Infracost"],
    },
    {
      name: "Software engineering",
      tags: ["ai", "devops"],
      items: ["Python", "FastAPI", "TypeScript", "Node.js", "NestJS", "React", "Next.js", "Java", "Bash", "PostgreSQL", "MongoDB"],
    },
    {
      name: "AI-assisted engineering",
      tags: ["ai", "devops"],
      items: ["Claude Code", "Codex", "Cursor", "Antigravity", "Custom skills", "MCP servers"],
    },
  ],
  credentials: {
    educationTitle: "Education",
    education: {
      school: "Universidad Icesi · Cali, Colombia",
      degree: "B.Sc. Telematics Engineering & B.Sc. Systems (Software) Engineering, double degree",
      detail: "Final semester · expected graduation August 2027",
    },
    certsTitle: "Certifications",
    certs: [
      { name: "CNCF Kubestronaut path", detail: "CKA scheduled for January 2027; KCNA, KCSA, CKAD and CKS for March 2027", tags: ["devops"] },
      { name: "EF SET English Certificate", detail: "C1 Advanced, 2025", tags: ["ai", "devops"] },
    ],
    otherTitle: "Beyond the code",
    other: [
      { label: "Community", text: "CNCF Colombia member since 2025; Kubernetes Community Days Bogotá 2025 attendee." },
      { label: "Judo", text: "Bronze medal (3rd place), −90 kg, ASCUN 2026 National University Games, representing Universidad Icesi." },
    ],
  },
  contact: {
    lead: "Open to AI engineering and DevOps roles, remote or hybrid. The fastest way to reach me is email.",
    emailLabel: "Email me",
    formTitle: "Or send a message",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    success: "Thanks, your message was sent. I'll reply by email.",
    error: "The message could not be sent. Please email me directly.",
  },
  footer: {
    built: "Designed and built by Esteban Gaviria with Astro. Deployed to GitHub Pages with GitHub Actions.",
    source: "Source code",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist.",
    home: "Go to the home page",
  },
};

const es: Content = {
  meta: {
    title: {
      all: "Esteban Gaviria — AI & DevOps Engineer",
      ai: "Esteban Gaviria — AI Engineer",
      devops: "Esteban Gaviria — DevOps Engineer",
    },
    description: {
      all: "Esteban Gaviria Zambrano construye sistemas de IA (LLMs, RAG, voz en tiempo real) y las plataformas cloud que los llevan a producción (Kubernetes, AWS, Terraform, GitOps).",
      ai: "AI Engineer que construye orquestación de LLMs, RAG y pipelines de voz en tiempo real para una plataforma de IA conversacional en producción.",
      devops: "DevOps Engineer que construye plataformas Kubernetes en AWS con Terraform, GitOps (ArgoCD), seguridad de la cadena de suministro y un dominio de recuperación en Azure.",
    },
  },
  ui: {
    skip: "Saltar al contenido",
    primaryNav: "Secciones",
    focusNav: "Enfoque",
    focus: { all: "General", ai: "IA", devops: "DevOps" },
    sections: {
      about: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      credentials: "Educación y certificaciones",
      contact: "Contacto",
    },
    themeToggle: "Cambiar entre tema claro y oscuro",
    languageName: "English",
    switchLanguage: "View this page in English",
    downloadCv: "Descargar hoja de vida",
    cvAi: "Hoja de vida AI Engineer",
    cvDevops: "Hoja de vida DevOps Engineer",
    photoAlt: "Retrato de Esteban Gaviria Zambrano",
    opensInNewTab: "(se abre en una pestaña nueva)",
    viewOnGithub: "GitHub",
  },
  hero: {
    greeting: "Hola, soy Esteban Gaviria",
    role: {
      all: "AI & DevOps Engineer",
      ai: "AI Engineer",
      devops: "DevOps Engineer",
    },
    lead: {
      all: "Construyo sistemas de IA y las plataformas que los llevan a producción.",
      ai: "Construyo sistemas de LLMs, RAG y voz en tiempo real, y los llevo a producción.",
      devops: "Construyo plataformas Kubernetes con Terraform y GitOps, y las automatizo con agentes de IA.",
    },
    location: "Cali, Colombia · Disponible para trabajo remoto",
  },
  about: {
    all: [
      "Soy ingeniero de software de Cali, Colombia. Trabajo en Brain AIX, donde construimos agentes de IA conversacional que hablan con voz clonada y avatar, y disfruto los dos lados de ese trabajo: la IA que hace que una conversación se sienta natural y la infraestructura que la mantiene funcionando.",
      "Fuera del trabajo lidero la infraestructura de MicroTodoSuite, un proyecto en equipo en el que llevamos una plataforma de microservicios a Kubernetes en AWS. Estoy terminando el doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi y compito en judo.",
    ],
    ai: [
      "Soy AI Engineer de Cali, Colombia. En Brain AIX construyo agentes de IA conversacional que hablan con voz clonada y avatar: cómo usan los modelos de lenguaje, cómo consultan los documentos de cada usuario y cómo responden por voz en tiempo real.",
      "También me encargo de llevar ese trabajo a producción, desde los contenedores hasta el CI/CD. Estoy terminando el doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi y compito en judo.",
    ],
    devops: [
      "Soy DevOps Engineer de Cali, Colombia. Me gusta construir plataformas donde cada despliegue es automático, revisado y fácil de revertir. Lidero la infraestructura de MicroTodoSuite, un proyecto en equipo en el que llevamos una plataforma de microservicios a Kubernetes en AWS, y me encargo de la entrega de un producto de IA en producción en Brain AIX.",
      "Me estoy preparando para las certificaciones CNCF Kubestronaut, estoy terminando el doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi y compito en judo.",
    ],
  },
  facts: [
    { label: "Actualmente", value: "AI Software Developer en Brain AIX" },
    { label: "Estudios", value: "Ingeniería Telemática y de Sistemas, Universidad Icesi" },
    { label: "Idiomas", value: "Español (nativo), inglés (C1)" },
  ],
  experience: [
    {
      name: "Brain AIX",
      role: "AI Software Developer",
      period: "Septiembre 2025 – Presente",
      location: "Remoto",
      summary: "Plataforma de IA conversacional donde los agentes hablan en tiempo real con voz clonada y avatar.",
      tags: ["ai", "devops"],
      links: [{ label: "brainaix.online", href: "https://brainaix.online/" }],
      bullets: [
        {
          tags: ["ai"],
          text: "Construí la capa de orquestación de LLMs: memoria, uso de herramientas y streaming sobre OpenAI, Anthropic, Gemini y modelos open-source.",
        },
        {
          tags: ["ai"],
          text: "Construí el pipeline de RAG que basa cada agente en los documentos de su usuario, con un modelo de embeddings ajustado.",
        },
        {
          tags: ["ai"],
          text: "Construí el pipeline de voz multilingüe en tiempo real, del reconocimiento de voz a la voz clonada.",
        },
        {
          tags: ["devops"],
          text: "Contenericé los servicios de la plataforma y construí el CI/CD que los publica en AWS sin interrupciones.",
        },
        {
          tags: ["ai", "devops"],
          text: "Introduje en el equipo el desarrollo asistido por agentes, con skills y servidores MCP propios.",
        },
      ],
      flow: {
        title: "Cómo fluye una conversación",
        caption: "Vista simplificada del pipeline de voz y recuperación. Los proveedores son los usados en producción; se omiten los detalles internos.",
        rows: [
          {
            label: "Voz",
            steps: [
              { title: "El usuario habla" },
              { title: "Voz a texto", detail: "Deepgram · Whisper" },
              { title: "Orquestación LLM", detail: "memoria · herramientas · streaming" },
              { title: "Texto a voz", detail: "clonación de voz" },
              { title: "Responde el avatar" },
            ],
          },
          {
            label: "Contexto",
            steps: [
              { title: "Documentos del usuario", detail: "PDF · Word" },
              { title: "Segmentación" },
              { title: "Embeddings", detail: "modelo ajustado" },
              { title: "Búsqueda vectorial", detail: "contexto para el LLM" },
            ],
          },
        ],
      },
    },
  ],
  teaching: {
    name: "Universidad Icesi",
    role: "Monitor Académico · Matemáticas y Pensamiento Computacional",
    period: "2023 – 2026",
    text: "Acompañé a estudiantes de ingeniería en matemáticas aplicadas, cálculo y fundamentos de programación.",
  },
  projects: [
    {
      name: "MicroTodoSuite",
      role: "Líder de Infraestructura · equipo de 3",
      period: "Abril 2025 – Presente",
      summary: "Plataforma de microservicios que mi equipo de tres personas migró de Azure a Kubernetes en AWS, con ambientes de dev, staging y producción.",
      tags: ["devops", "ai"],
      links: [
        { label: "Caso de estudio", href: "https://microtodosuite.github.io/microservice-app-showcase/" },
        { label: "GitHub", href: "https://github.com/MicroTodoSuite" },
      ],
      bullets: [
        {
          tags: ["devops"],
          text: "Lideré la migración a Amazon EKS, con toda la infraestructura escrita en Terraform.",
        },
        {
          tags: ["devops"],
          text: "Diseñé una arquitectura económica y una completa, más un ambiente de recuperación en Azure con failover probado.",
        },
        {
          tags: ["devops"],
          text: "Construí el camino de entrega: CI compartido que escanea y firma las imágenes, y despliegues GitOps con ArgoCD.",
        },
        {
          tags: ["ai", "devops"],
          text: "Construí agentes y skills de IA que escriben, revisan y auditan el código de infraestructura del proyecto.",
        },
      ],
      flow: {
        title: "De un pull request aprobado a un clúster en ejecución",
        caption: "El camino de entrega que comparten todos los servicios. Nada llega a un clúster a mano.",
        rows: [
          {
            label: "Entrega",
            steps: [
              { title: "Repo del servicio", detail: "CI mínimo" },
              { title: "CI reutilizable", detail: "build · Trivy · SBOM · Cosign" },
              { title: "Amazon ECR", detail: "imagen firmada" },
              { title: "PR de GitOps", detail: "cambio de digest" },
              { title: "ArgoCD", detail: "Kyverno verifica" },
              { title: "Amazon EKS", detail: "dev · staging · prod" },
            ],
          },
          {
            label: "Cimientos",
            steps: [
              { title: "Raíces Terraform", detail: "solo planes guardados" },
              { title: "AWS", detail: "VPC · EKS · IAM · Route 53" },
              { title: "Azure", detail: "AKS en warm standby" },
            ],
          },
        ],
      },
    },
  ],
  smallProjects: [
    {
      name: "EcommerceCoZam",
      period: "2025",
      text: "E-commerce multicloud sobre Kubernetes en Azure y Google Cloud, con Terraform y GitHub Actions.",
      tags: ["devops"],
      href: "https://github.com/EcommerceCoZam",
    },
  ],
  skills: [
    {
      name: "Ingeniería de LLMs",
      tags: ["ai"],
      items: ["Orquestación de LLMs", "Ingeniería y evaluación de prompts", "RAG", "Embeddings y fine-tuning", "Weaviate", "Agentes y tool use (MCP)", "LangChain", "LangGraph", "LlamaIndex", "Hugging Face"],
    },
    {
      name: "Modelos e IA de voz",
      tags: ["ai"],
      items: ["OpenAI", "Anthropic Claude", "Google Gemini", "Alibaba Qwen", "LLMs open-source", "Deepgram", "Whisper", "ElevenLabs", "Azure/Google Speech", "Clonación de voz"],
    },
    {
      name: "Cloud",
      tags: ["devops"],
      items: ["AWS EKS", "EC2", "VPC", "IAM/IRSA", "ECR", "Route 53", "Transit Gateway", "Azure AKS", "Azure Container Apps", "GCP GKE"],
    },
    {
      name: "Kubernetes y entrega",
      tags: ["devops"],
      items: ["Kubernetes", "Docker", "Kustomize", "Istio", "Argo Rollouts", "ArgoCD", "GitHub Actions", "Terraform", "tflint", "Jenkins"],
    },
    {
      name: "Seguridad y observabilidad",
      tags: ["devops"],
      items: ["Trivy", "Syft", "Cosign", "Kyverno", "External Secrets", "Prometheus", "Grafana", "Loki", "Jaeger", "Infracost"],
    },
    {
      name: "Ingeniería de software",
      tags: ["ai", "devops"],
      items: ["Python", "FastAPI", "TypeScript", "Node.js", "NestJS", "React", "Next.js", "Java", "Bash", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Desarrollo asistido por IA",
      tags: ["ai", "devops"],
      items: ["Claude Code", "Codex", "Cursor", "Antigravity", "Skills propias", "Servidores MCP"],
    },
  ],
  credentials: {
    educationTitle: "Educación",
    education: {
      school: "Universidad Icesi · Cali, Colombia",
      degree: "Ingeniería Telemática e Ingeniería de Sistemas (Software), doble programa",
      detail: "Último semestre · grado estimado en agosto de 2027",
    },
    certsTitle: "Certificaciones",
    certs: [
      { name: "Ruta CNCF Kubestronaut", detail: "CKA programada para enero de 2027; KCNA, KCSA, CKAD y CKS para marzo de 2027", tags: ["devops"] },
      { name: "EF SET English Certificate", detail: "C1 Avanzado, 2025", tags: ["ai", "devops"] },
    ],
    otherTitle: "Más allá del código",
    other: [
      { label: "Comunidad", text: "Miembro de CNCF Colombia desde 2025; asistente a Kubernetes Community Days Bogotá 2025." },
      { label: "Judo", text: "Medalla de bronce (tercer lugar), −90 kg, Juegos Universitarios Nacionales ASCUN 2026, en representación de la Universidad Icesi." },
    ],
  },
  contact: {
    lead: "Abierto a roles de ingeniería de IA y DevOps, remotos o híbridos. La forma más rápida de contactarme es por correo.",
    emailLabel: "Escríbeme",
    formTitle: "O envía un mensaje",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    send: "Enviar mensaje",
    sending: "Enviando…",
    success: "Gracias, tu mensaje fue enviado. Te responderé por correo.",
    error: "No se pudo enviar el mensaje. Escríbeme directamente al correo.",
  },
  footer: {
    built: "Diseñado y construido por Esteban Gaviria con Astro. Desplegado en GitHub Pages con GitHub Actions.",
    source: "Código fuente",
  },
  notFound: {
    title: "Página no encontrada",
    text: "La página que buscas no existe.",
    home: "Ir a la página principal",
  },
};

export const CONTENT: Record<Lang, Content> = { en, es };

// Stable sort: items tagged with the active focus come first; the overview keeps authored order.
export function byFocus<T extends { tags: Tag[] }>(items: T[], focus: Focus): T[] {
  if (focus === "all") return items;
  return items
    .map((item, index) => ({ item, index, hit: item.tags.includes(focus) ? 0 : 1 }))
    .sort((a, b) => a.hit - b.hit || a.index - b.index)
    .map(({ item }) => item);
}

export function pathFor(lang: Lang, focus: Focus): string {
  const prefix = lang === "es" ? "/es" : "";
  return focus === "all" ? `${prefix}/` : `${prefix}/${focus}/`;
}

export function cvHref(kind: Tag, lang: Lang): string {
  const name = kind === "ai" ? "ai-engineer" : "devops-engineer";
  return `/cv/esteban-gaviria-${name}-${lang}.pdf`;
}
