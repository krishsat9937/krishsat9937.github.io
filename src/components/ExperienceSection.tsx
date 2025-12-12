import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Speedinvest",
    role: "Software Developer",
    location: "Berlin, Germany",
    period: "06/2023 - 06/2025",
    type: "Onsite",
    highlights: [
      "Built scalable data pipelines integrating LinkedIn, Handelsregister, and GitHub data, reducing lead qualification time by 45%.",
      "Integrated OpenAI and Llama-based filters to auto-rank startups and founders by signal strength and domain relevance, improving deal-sourcing precision.",
      "Designed data-enrichment workflows pulling from LinkedIn, Crunchbase, and Bloomberg APIs, enabling AI-driven founder scoring models.",
      "Designed modular microservices using Django, REST, Redis, and AWS Lambda, improving reliability and maintainability.",
      "Automated CI/CD workflows with Terraform and GitHub Actions, reaching 90% test coverage.",
      "Led code reviews and mentored engineers, promoting robust Kubernetes and Jenkins practices.",
      "Strengthened system compliance with OAuth and GraphQL APIs for secure data operations.",
    ],
  },
  {
    company: "JustPaid.io",
    role: "Software Engineer",
    location: "California, United States",
    period: "08/2022 - 05/2023",
    type: "Remote",
    highlights: [
      "Built and deployed a financial web platform using Django, Next.js, React, and Stripe API, integrating OpenAI-powered document parsing and chat automation for invoice processing and financial Q&A, reducing manual review time by 35% and delivering the company’s MVP.",
      "Integrated QuickBooks, Stripe, and AWS APIs to automate AR/AP workflows and enable real-time financial insights for users.",
      "Deployed containerized microservices via AWS Fargate and Vercel, reducing downtime by 40% and improving release reliability.",
      "Developed React-based dashboards with WebSockets and Redis for real-time updates and user activity tracking.",
      "Collaborated with founders and cross-functional teams to design AI-assisted accounting workflows, ensuring data integrity, security, and compliance across all financial operations.",
    ],
  },
  {
    company: "Cronycle",
    role: "Software Engineer in Data Science",
    location: "London, United Kingdom",
    period: "07/2021 - 10/2022",
    type: "Remote",
    highlights: [
      "Created spaCy-based NER modules for financial data enrichment, improving relevance by 25%.",
      "Architected document workflows with pyMuPDF & Airflow, reducing processing latency by 40%.",
      "Developed data ingestion pipelines using Kafka, PostgreSQL, and Databricks for real-time analytics.",
    ],
  },
  {
    company: "Zuci Systems",
    role: "Module lead",
    location: "Chennai, Tamil Nadu",
    period: "02/2017 - 06/2021",
    type: "Onsite",
    highlights: [
      "Led cross-functional projects for clients, including DrChrono (US healthcare) and Crayon Data (Singapore fintech), architecting scalable backend systems with Node.js (TypeScript), Flask, and Django, and improving data-processing throughput by 15%.",
      "Delivered machine learning-driven reconciliation and forecasting pipelines using PySpark and MongoDB, enhancing automation accuracy and increasing client ROI by 20%.",
      "Developed integration services for healthcare and financial platforms using RESTful and GraphQL APIs, ensuring high data integrity and interoperability across systems.",
      "Mentored engineering teams and implemented CI/CD automation with Jenkins, Docker, and PyTest, reducing production issues by 30% and accelerating delivery cycles.",
      "Collaborated with data science and analytics teams to deploy predictive insights for patient billing (DrChrono) and personalized recommendation engines (Crayon Data).",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2 text-sm">Career Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            8+ years building scalable systems across VC tech, fintech, and healthtech industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-full bg-gradient-to-b from-primary/50 to-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>

              {/* Content Card */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:glow-primary/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-mono">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;