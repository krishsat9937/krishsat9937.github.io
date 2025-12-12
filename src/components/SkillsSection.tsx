const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Kotlin", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend Frameworks",
    skills: ["Node.js", "Django", "Flask", "FastAPI", "Express.js", "Hibernate", "JOOQ"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "Angular", "Redux", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    title: "APIs & Communication",
    skills: ["GraphQL", "RESTful API", "WebSockets"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RDBMS", "Snowflake"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "Azure Pipelines", "Terraform", "AWS Lambda", "S3", "Google Firebase"],
  },
  {
    title: "Data Engineering & AI",
    skills: ["Apache Spark", "Databricks", "Google BigQuery", "RabbitMQ", "OpenAI", "LLaMA", "spaCy"],
  },
  {
    title: "Security & Tools",
    skills: ["OAuth", "OWASP", "Canva", "Agile"],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2 text-sm">Technical Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions with modern technologies across the full stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "8+", label: "Years Experience" },
            { value: "4", label: "Countries Worked" },
            { value: "20+", label: "Projects Delivered" },
            { value: "90%", label: "Test Coverage Goal" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card/50 border border-border rounded-xl">
              <p className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;