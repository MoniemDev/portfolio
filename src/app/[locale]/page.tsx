import { useTranslations } from 'next-intl';
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import { Project } from "@/types";

export default function Home() {
  // Sample projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with payment integration and inventory management.",
      image: "",
      link: "https://example.com",
      github: "https://github.com",
      date: "2024-01-15",
      technologies: ["Next.js", "React", "TypeScript", "Stripe"],
    },
    {
      id: "2",
      title: "Portfolio Website",
      description: "A beautiful portfolio website for a creative agency with smooth animations.",
      image: "",
      link: "https://example.com",
      github: "https://github.com",
      date: "2024-01-10",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "3",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "",
      link: "https://example.com",
      date: "2024-01-05",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
    },
    {
      id: "4",
      title: "Restaurant Website",
      description: "A responsive restaurant website with online ordering and reservation system.",
      image: "",
      link: "https://example.com",
      date: "2023-12-20",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      id: "5",
      title: "Corporate Dashboard",
      description: "A data visualization dashboard for business analytics and reporting.",
      image: "",
      link: "https://example.com",
      github: "https://github.com",
      date: "2023-12-15",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    },
    {
      id: "6",
      title: "Landing Page Design",
      description: "A conversion-optimized landing page for a SaaS product launch.",
      image: "",
      link: "https://example.com",
      date: "2023-12-10",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects projects={projects} />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}
