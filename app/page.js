import About from "@/components/About";
import Class from "@/components/Class";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Outstanding from "@/components/Outstanding";

export default function Home() {
  return (
    <main className="min-h-screen -z-10">
      <div>
        <Hero />
        <About />
        <Class />
        <Outstanding />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
