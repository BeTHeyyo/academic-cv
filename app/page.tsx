import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Progress from "@/components/Progress";
import Education from "@/components/Education";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import MLExperience from "@/components/MlExperience";

export default function Home() {
  return (
    <div className="grid-bg min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-7">
        <Hero />
        <Research />
        <Skills />
        <Progress />
        <Education />
        <MLExperience />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
