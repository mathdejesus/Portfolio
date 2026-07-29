export interface Project {
  name: string;
  url: string;
  description: string;
  details: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    location: string;
    headline: string;
    email: string;
    linkedin: string;
    github: string;
  };
  about: {
    education: string;
    completion: string;
    objective: string;
    bio: string;
  };
  skills: {
    primary: string[];
    backend: string[];
    frontend: string[];
    engineering: string[];
  };
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Matheus Costa de Jesus",
    title: "Backend Engineer",
    location: "Lauro de Freitas, Bahia, Brasil",
    headline: "Desenvolvedor focado em arquitetura backend escalável (Java, Python, SQL). Trazendo uma visão única de observabilidade, monitoramento de KPIs e otimização de processos após cerca de 9 anos de experiência em operações industriais. Foco na criação de sistemas distribuídos e de alta disponibilidade.",
    email: "matheuscojesus@gmail.com",
    linkedin: "https://linkedin.com/in/matheus-costa-de-jesus",
    github: "https://github.com/mathofjesus",
  },
  about: {
    education: "Estudante do 6º semestre de Ciência da Computação na Descomplica",
    completion: "Dezembro de 2027",
    objective: "Atuar em instituições financeiras (fintechs/bancos) desenvolvendo soluções backend robustas e seguras.",
    bio: "Após 9 anos atuando com automação de ponta e monitoramento de sistemas em operações industriais críticas, direcionei minha carreira para a Engenharia de Software. Essa bagagem me deu uma mentalidade focada em SRE, observabilidade extrema, troubleshooting sob pressão e otimização contínua de processos. Atualmente, aplico esses conceitos no desenvolvimento de arquiteturas backend escaláveis, sistemas distribuídos resilientes e APIs de alta disponibilidade."
  },
  skills: {
    primary: ["Java 21", "Python", "SQL"],
    backend: [
      "Spring Boot 3.2",
      "Spring Security",
      "JWT (HS256)",
      "PostgreSQL",
      "Flyway migrations",
      "REST APIs",
      "Docker",
      "CI/CD (GitHub Actions)"
    ],
    frontend: [
      "TypeScript",
      "React",
      "Angular",
      "React Native + Expo",
      "Tailwind CSS"
    ],
    engineering: [
      "JUnit 5",
      "Git (rebase, merge, squash)",
      "Arquitetura em Nuvem",
      "SRE & Observabilidade"
    ]
  },
  projects: [
    {
      name: "Gestor de Finanças Pessoais (GFP)",
      url: "https://github.com/mathofjesus/gestor-de-financas-pessoais",
      description: "Plataforma financeira full-stack inspirada em padrões de fintechs.",
      details: "Arquitetura Maven multi-módulo. Conta com autenticação JWT com token versioning, controle de acesso baseado em regras (RBAC), banco de dados PostgreSQL com migrações gerenciadas pelo Flyway, cobertura de testes automatizados superior a 80% (JUnit 5 + TestContainers) e pipeline de CI/CD integrado.",
      tags: ["Java 21", "Spring Boot 3.2", "Preact", "TypeScript", "PostgreSQL", "Flyway", "JUnit 5", "CI/CD"]
    },
    {
      name: "Memory-game",
      url: "https://github.com/mathofjesus/memory-game",
      description: "Aplicativo mobile moderno de jogo de memória com otimização de performance.",
      details: "Desenvolvido em React Native + Expo. Possui um Custom StorageManager com validação rígida de schemas, motor de jogo (gameEngine) totalmente desacoplado da camada visual, gestão robusta de estado e resolução técnica de memory leaks críticos.",
      tags: ["React Native", "Expo", "TypeScript", "State Management", "Performance Tuning"]
    },
    {
      name: "Docker-Sandbox",
      url: "https://github.com/mathofjesus/docker-sandbox",
      description: "Ambiente isolado e descartável para execução ultrarrápida de testes e protótipos.",
      details: "Ferramenta utilitária voltada para desenvolvedores. Permite apontar para frontends TypeScript ou backends Java para rodar testes em contêineres Docker Alpine minimalistas. Os contêineres são totalmente destruídos após a conclusão, mantendo o sistema operacional host perfeitamente limpo.",
      tags: ["Docker", "Java", "TypeScript", "DevOps", "Alpine Linux", "Automation"]
    }
  ],
  experience: [
    {
      company: "M. Dias Branco",
      role: "Operador de Máquinas de Fabricação (Foco em Observabilidade & SRE Industrial)",
      period: "Maio 2018 – Presente",
      description: "Aplicação prática de conceitos de telemetria, observabilidade e confiabilidade de sistemas em larga escala no setor industrial.",
      points: [
        "Monitoramento contínuo de sistemas complexos de automação industrial através de painéis integrados de controle (IHM/SCADA), analisando métricas de vazão, temperatura e pressão em tempo real.",
        "Análise preditiva de dados de desempenho industrial e indicadores-chave de performance (KPIs) para prevenção de gargalos e downtime de máquinas de alto custo.",
        "Atuação direta em processos de troubleshooting de incidentes críticos, identificando anomalias na lógica do sistema físico e restabelecendo operações industriais sob pressão.",
        "Elaboração de documentação técnica detalhada, guias de resolução de problemas rápidos e playbooks de SRE operacional para padronização de respostas a falhas."
      ]
    }
  ]
};
