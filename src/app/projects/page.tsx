import Header from "@/components/sections/Navbar";
import ProjectHeroSlider from "@/components/sections/ProjectHeroSlider";
import ProjectCategories from "@/components/sections/ProjectCategories";
import Footer from "@/components/sections/Footer";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <ProjectHeroSlider />
      <ProjectCategories />
      <Footer />
    </main>
  );
}