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

export interface Stat {
  value: string;
  label: string;
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
    badge: Record<Focus, string>;
  };
  stats: Record<Focus, Stat[]>;
  about: Record<Focus, string[]>;
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
    badge: {
      all: "AI Software Developer at Brain AIX",
      ai: "AI Software Developer at Brain AIX",
      devops: "On the CNCF Kubestronaut path · CKA in January 2027",
    },
  },
  stats: {
    all: [
      { value: "1 year", label: "shipping a production AI SaaS" },
      { value: "< 3 s", label: "end-to-end voice latency" },
      { value: "34", label: "ArgoCD applications healthy" },
      { value: "2 clouds", label: "AWS primary, Azure recovery" },
    ],
    ai: [
      { value: "−40%", label: "unsupported answers with RAG" },
      { value: "< 3 s", label: "end-to-end voice latency" },
      { value: "10+", label: "languages in real-time voice" },
      { value: "9+", label: "services shipped to production" },
    ],
    devops: [
      { value: "3", label: "dedicated EKS clusters (full profile)" },
      { value: "34", label: "ArgoCD applications healthy" },
      { value: "USD 617", label: "per month, priced with Infracost" },
      { value: "2 clouds", label: "AWS primary, Azure recovery" },
    ],
  },
  about: {
    all: [
      "I'm a software engineer with one year of professional experience building and shipping a multimodal conversational AI platform: real-time agents with cloned voices and avatars. I work on both sides of that product: the AI that makes the conversation feel natural, and the delivery that keeps it running.",
      "Outside work, I led the infrastructure of MicroTodoSuite, a five-service platform my team of three migrated to Amazon EKS with Terraform, GitOps and an Azure recovery domain. I'm in the final semester of a double degree in Telematics and Systems Engineering at Universidad Icesi.",
    ],
    ai: [
      "I'm an AI engineer with one year of professional experience building and shipping a multimodal conversational AI platform: real-time agents with cloned voices and avatars. I designed its LLM orchestration layer, built its RAG pipeline and engineered the low-latency voice pipeline behind every conversation.",
      "I also know how to take AI to production: I containerized the platform's services and built its CI/CD. I'm in the final semester of a double degree in Telematics and Systems Engineering at Universidad Icesi.",
    ],
    devops: [
      "I'm a DevOps engineer with one year of professional experience automating the delivery and operation of a production AI SaaS platform, and the infrastructure lead of MicroTodoSuite, a five-service platform migrated to Amazon EKS with Terraform, ArgoCD and an Azure recovery domain.",
      "I build AI agents and MCP tooling that author and review infrastructure as code. I'm on the CNCF Kubestronaut path and in the final semester of a double degree in Telematics and Systems Engineering at Universidad Icesi.",
    ],
  },
  experience: [
    {
      name: "Brain AIX",
      role: "AI Software Developer",
      period: "September 2025 – Present",
      location: "Remote",
      summary: "Multimodal conversational AI SaaS platform: real-time agents with cloned voices and avatars, marketed as digital humans.",
      tags: ["ai", "devops"],
      links: [{ label: "brainaix.online", href: "https://brainaix.online/" }],
      bullets: [
        {
          tags: ["ai"],
          text: "Designed and implemented the LLM orchestration layer (context and conversational memory, tool use, response streaming and per-session cost control) across OpenAI, Anthropic, Gemini and open-source models, with LangChain/LangGraph, LlamaIndex and native SDKs.",
        },
        {
          tags: ["ai"],
          text: "Built the end-to-end RAG pipeline (PDF/Word ingestion, chunking, embeddings and vector search) and fine-tuned the embedding model on domain data, cutting unsupported answers by 40% on an in-house evaluation set.",
        },
        {
          tags: ["ai"],
          text: "Engineered the low-latency voice pipeline (STT → LLM → TTS with voice cloning) on Deepgram, Whisper, ElevenLabs and Azure/Google Speech: natural conversations in 10+ languages at under 3 s end-to-end. Also configured a real-time speech-to-speech agent on Alibaba Cloud (Qwen-Omni, Qwen-TTS).",
        },
        {
          tags: ["devops"],
          text: "Containerized 9+ FastAPI and NestJS microservices and built GitHub Actions CI/CD from scratch, replacing manual deployments with automated, zero-downtime releases to AWS EC2 with Docker Compose. I operate the production infrastructure on AWS.",
        },
        {
          tags: ["ai", "devops"],
          text: "Co-designed the microservices architecture (authentication, multi-tenancy, third-party integrations) and introduced agent-assisted development to the team with custom skills and MCP servers that automate scaffolding, testing and documentation.",
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
    text: "Supported engineering students in Applied Math I–III and Multivariable Calculus, and coached 25+ students in programming fundamentals.",
  },
  projects: [
    {
      name: "MicroTodoSuite",
      role: "Infrastructure Lead · team of 3",
      period: "April 2025 – Present",
      summary: "A five-service polyglot platform (Go, Java, Node.js, Python, Vue) that evolved from Azure Container Apps (2025) to Amazon EKS with an Azure recovery domain (2026), built as an independent team project.",
      tags: ["devops", "ai"],
      links: [
        { label: "Case study", href: "https://microtodosuite.github.io/microservice-app-showcase/" },
        { label: "GitHub", href: "https://github.com/MicroTodoSuite" },
      ],
      bullets: [
        {
          tags: ["devops"],
          text: "Led the migration to AWS: wrote the Terraform for VPCs, EKS, IAM/IRSA, ECR, Secrets Manager, Route 53 and a Transit Gateway egress hub, plus versioned AWS and Azure module libraries with Terraform tests.",
        },
        {
          tags: ["devops"],
          text: "Designed two architecture profiles: economical (one EKS cluster, dev/staging/prod as isolated namespaces) and full (three EKS clusters with Istio mTLS, USD 617.20/month for the AWS foundations, verified with Infracost), plus an AKS warm-standby recovery domain on Azure with tested failover.",
        },
        {
          tags: ["devops"],
          text: "Authored the organization's reusable GitHub Actions workflows: build once, Trivy scan, Syft SBOM, Cosign keyless signing, promotion by immutable digest through GitOps pull requests, OIDC-only cloud access and IaC gates.",
        },
        {
          tags: ["devops"],
          text: "Co-built the GitOps repository (ArgoCD, Kustomize) with 34 healthy applications: every deploy is a commit and every rollback a git revert, with Kyverno signature checks at admission and Argo Rollouts canaries.",
        },
        {
          tags: ["devops"],
          text: "Built a saved-plan-only environment lifecycle that shuts idle environments down to cut cloud spend and rebuilds them without losing state, images or secrets.",
        },
        {
          tags: ["ai", "devops"],
          text: "Built the project's AI agent layer for infrastructure: Claude Code and Codex skills that author, review and audit Terraform, pinned documentation MCP servers, and spec-driven development with Spec Kit.",
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
      text: "Cloud-native multi-cloud e-commerce on AKS and GKE with Terraform and GitHub Actions, delivered in 3 weeks.",
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
      { label: "Languages", text: "Spanish (native), English (C1)." },
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
    badge: {
      all: "AI Software Developer en Brain AIX",
      ai: "AI Software Developer en Brain AIX",
      devops: "En ruta hacia CNCF Kubestronaut · CKA en enero de 2027",
    },
  },
  stats: {
    all: [
      { value: "1 año", label: "llevando a producción un SaaS de IA" },
      { value: "< 3 s", label: "de latencia de voz extremo a extremo" },
      { value: "34", label: "aplicaciones saludables en ArgoCD" },
      { value: "2 nubes", label: "AWS principal, Azure de recuperación" },
    ],
    ai: [
      { value: "−40%", label: "respuestas sin sustento gracias al RAG" },
      { value: "< 3 s", label: "de latencia de voz extremo a extremo" },
      { value: "10+", label: "idiomas en voz en tiempo real" },
      { value: "9+", label: "servicios llevados a producción" },
    ],
    devops: [
      { value: "3", label: "clústeres EKS dedicados (perfil completo)" },
      { value: "34", label: "aplicaciones saludables en ArgoCD" },
      { value: "USD 617", label: "al mes, calculado con Infracost" },
      { value: "2 nubes", label: "AWS principal, Azure de recuperación" },
    ],
  },
  about: {
    all: [
      "Soy ingeniero de software con un año de experiencia profesional construyendo y llevando a producción una plataforma de IA conversacional multimodal: agentes en tiempo real con voz clonada y avatar. Trabajo en los dos lados del producto: la IA que hace que la conversación se sienta natural y la entrega que lo mantiene funcionando.",
      "Fuera del trabajo, lideré la infraestructura de MicroTodoSuite, una plataforma de cinco servicios que mi equipo de tres personas migró a Amazon EKS con Terraform, GitOps y un dominio de recuperación en Azure. Curso el último semestre del doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi.",
    ],
    ai: [
      "Soy AI Engineer con un año de experiencia profesional construyendo y llevando a producción una plataforma de IA conversacional multimodal: agentes en tiempo real con voz clonada y avatar. Diseñé su capa de orquestación de LLMs, construí su pipeline de RAG e implementé el pipeline de voz de baja latencia detrás de cada conversación.",
      "También sé llevar la IA a producción: contenericé los servicios de la plataforma y construí su CI/CD. Curso el último semestre del doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi.",
    ],
    devops: [
      "Soy DevOps Engineer con un año de experiencia profesional automatizando la entrega y operación de una plataforma SaaS de IA en producción, y líder de infraestructura de MicroTodoSuite, una plataforma de cinco servicios migrada a Amazon EKS con Terraform, ArgoCD y un dominio de recuperación en Azure.",
      "Construyo agentes de IA y herramientas MCP que escriben y revisan infraestructura como código. Estoy en ruta hacia CNCF Kubestronaut y curso el último semestre del doble programa de Ingeniería Telemática e Ingeniería de Sistemas en la Universidad Icesi.",
    ],
  },
  experience: [
    {
      name: "Brain AIX",
      role: "AI Software Developer",
      period: "Septiembre 2025 – Presente",
      location: "Remoto",
      summary: "Plataforma SaaS de IA conversacional multimodal: agentes en tiempo real con voz clonada y avatar, conocidos como humanos digitales.",
      tags: ["ai", "devops"],
      links: [{ label: "brainaix.online", href: "https://brainaix.online/" }],
      bullets: [
        {
          tags: ["ai"],
          text: "Diseñé e implementé la capa de orquestación de LLMs (contexto y memoria conversacional, uso de herramientas, respuesta en streaming y control de costo por sesión) sobre OpenAI, Anthropic, Gemini y modelos open-source, con LangChain/LangGraph, LlamaIndex y SDKs nativos.",
        },
        {
          tags: ["ai"],
          text: "Construí el pipeline completo de RAG (ingesta de PDF/Word, segmentación, embeddings y búsqueda vectorial) e hice fine-tuning del modelo de embeddings con datos del dominio, reduciendo en 40% las respuestas sin sustento sobre un set de evaluación propio.",
        },
        {
          tags: ["ai"],
          text: "Implementé el pipeline de voz de baja latencia (STT → LLM → TTS con clonación de voz) sobre Deepgram, Whisper, ElevenLabs y Azure/Google Speech: conversaciones naturales en más de 10 idiomas con menos de 3 s extremo a extremo. También configuré un agente de voz a voz en tiempo real sobre Alibaba Cloud (Qwen-Omni, Qwen-TTS).",
        },
        {
          tags: ["devops"],
          text: "Contenericé más de 9 microservicios en FastAPI y NestJS y construí desde cero el CI/CD en GitHub Actions, sustituyendo los despliegues manuales por releases automatizados y sin interrupción en AWS EC2 con Docker Compose. Opero la infraestructura de producción en AWS.",
        },
        {
          tags: ["ai", "devops"],
          text: "Co-diseñé la arquitectura de microservicios (autenticación, multi-tenancy, integraciones con terceros) e introduje en el equipo el desarrollo asistido por agentes con skills y servidores MCP propios que automatizan scaffolding, pruebas y documentación.",
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
    text: "Acompañé a estudiantes de ingeniería en Matemáticas Aplicadas I–III y Cálculo Multivariable, y formé a más de 25 estudiantes en fundamentos de programación.",
  },
  projects: [
    {
      name: "MicroTodoSuite",
      role: "Líder de Infraestructura · equipo de 3",
      period: "Abril 2025 – Presente",
      summary: "Plataforma políglota de cinco servicios (Go, Java, Node.js, Python, Vue) que evolucionó de Azure Container Apps (2025) a Amazon EKS con un dominio de recuperación en Azure (2026), desarrollada como proyecto independiente del equipo.",
      tags: ["devops", "ai"],
      links: [
        { label: "Caso de estudio", href: "https://microtodosuite.github.io/microservice-app-showcase/" },
        { label: "GitHub", href: "https://github.com/MicroTodoSuite" },
      ],
      bullets: [
        {
          tags: ["devops"],
          text: "Lideré la migración a AWS: escribí el Terraform de VPCs, EKS, IAM/IRSA, ECR, Secrets Manager, Route 53 y un hub de egreso con Transit Gateway, más librerías versionadas de módulos AWS y Azure con pruebas de Terraform.",
        },
        {
          tags: ["devops"],
          text: "Diseñé dos perfiles de arquitectura: económico (un clúster EKS, dev/staging/prod como namespaces aislados) y completo (tres clústeres EKS con Istio mTLS, USD 617,20/mes para los cimientos en AWS según Infracost), más un dominio de recuperación en Azure con AKS en warm standby y failover probado.",
        },
        {
          tags: ["devops"],
          text: "Escribí los workflows reutilizables de GitHub Actions de la organización: build único, escaneo Trivy, SBOM con Syft, firma keyless con Cosign, promoción por digest inmutable mediante PRs de GitOps, acceso a la nube solo con OIDC y controles de IaC.",
        },
        {
          tags: ["devops"],
          text: "Co-construí el repositorio GitOps (ArgoCD, Kustomize) con 34 aplicaciones saludables: cada despliegue es un commit y cada rollback un git revert, con verificación de firmas en Kyverno y canaries con Argo Rollouts.",
        },
        {
          tags: ["devops"],
          text: "Construí un ciclo de vida de ambientes basado solo en planes guardados que apaga los ambientes inactivos para reducir costos y los reconstruye sin perder estado, imágenes ni secretos.",
        },
        {
          tags: ["ai", "devops"],
          text: "Construí la capa de agentes de IA para infraestructura: skills de Claude Code y Codex que escriben, revisan y auditan Terraform, servidores MCP de documentación y desarrollo guiado por especificaciones con Spec Kit.",
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
      text: "E-commerce cloud-native multicloud en AKS y GKE con Terraform y GitHub Actions, entregado en 3 semanas.",
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
      { label: "Idiomas", text: "Español (nativo), inglés (C1)." },
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
