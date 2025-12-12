import { GraduationCap, Award, FileText } from "lucide-react";

const education = [
  {
    institution: "IU Internationale Hochschule",
    degree: "Masters in Computer Science",
    location: "Berlin, Germany",
    period: "04/2023 - 07/2025",
  },
  {
    institution: "International Institute of Information Technology Bangalore",
    degree: "Executive PG in Data Science",
    location: "Bangalore, India",
    period: "10/2021 - 10/2022",
  },
  {
    institution: "Anna University",
    degree: "BE in Electronics and Communication Engineering",
    location: "Chennai, India",
    period: "07/2012 - 06/2016",
  },
];

const publication = {
  title: "Edge AI for Voice to Symptom Clinical Intake and Triage",
  conference: "IEEE International Conference on Emerging Trends in Engineering and Computing (ETECOM 2025)",
  description: "Raspberry Pi–based offline voice-to-FHIR pipeline for clinical settings, integrating Vosk ASR, LLaMA 3.2, and ICD-10 retrieval for privacy-preserving, low-cost symptom intake and appointment triage.",
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2 text-sm">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient-primary">Publications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.institution}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all"
                >
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{edu.location}</span>
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publication */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Publication
            </h3>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all h-fit">
              <div className="flex items-start gap-3 mb-4">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono text-accent mb-2">{publication.conference}</p>
                  <h4 className="font-semibold text-foreground mb-3">{publication.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {publication.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <h3 className="text-xl font-semibold mt-8 mb-6 flex items-center gap-2">
              <span className="text-primary">🌐</span>
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "English", level: "Native" },
                { lang: "German", level: "Intermediate" },
                { lang: "Tamil", level: "Native" },
                { lang: "Telugu", level: "Proficient" },
              ].map((item) => (
                <div 
                  key={item.lang}
                  className="bg-card border border-border rounded-lg px-4 py-2"
                >
                  <span className="font-medium text-foreground">{item.lang}</span>
                  <span className="text-muted-foreground text-sm ml-2">• {item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;