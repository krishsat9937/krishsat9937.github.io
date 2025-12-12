import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export default Index;