import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/Achivement";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    // <main className="flex min-h-screen flex-col bg-[#121212]">
    //   <Navbar />
    //   <div className="container mt-24 mx-auto px-12 py-4">
    //     <HeroSection />
    //     <AchievementsSection />
    //     <AboutSection />
    //     <ProjectsSection />
    //     <EmailSection />
    //   </div>
    //   <Footer />
    // </main>
  );
}
