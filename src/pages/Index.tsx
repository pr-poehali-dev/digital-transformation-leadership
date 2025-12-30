import HeroSection from "@/components/HeroSection";
import LeadershipPhilosophy from "@/components/LeadershipPhilosophy";
import ProjectsExpertise from "@/components/ProjectsExpertise";
import ContactForm from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="tech-grid fixed inset-0 opacity-50" />
      
      <div className="relative">
        <HeroSection />
        <LeadershipPhilosophy />
        <ProjectsExpertise />
        <ContactForm />
      </div>
    </div>
  );
}
