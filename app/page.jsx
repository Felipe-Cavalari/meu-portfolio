import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-slate-200 dark:bg-[#121212] transition duration-300">
      
      <Navbar/>

      <div className="container mx-auto pb-12 pt-24 md:pt-0 px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      

      
    </main>
  )
}
