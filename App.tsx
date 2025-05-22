
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SectionWrapper } from './components/SectionWrapper';
import { portfolioData } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={portfolioData.navLinks} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection 
          name={portfolioData.name}
          title={portfolioData.title}
          bio={portfolioData.bio}
          socialLinks={portfolioData.contact.social}
        />
        <SectionWrapper id="about" title="About Me">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate leading-relaxed">
              {portfolioData.aboutMe}
            </p>
          </div>
        </SectionWrapper>
        <SectionWrapper id="projects" title="Projects">
          <ProjectsSection projects={portfolioData.projects} />
        </SectionWrapper>
        <SectionWrapper id="experience" title="Experience">
          <ExperienceSection experiences={portfolioData.experiences} />
        </SectionWrapper>
        <SectionWrapper id="skills" title="Skills">
          <SkillsSection skills={portfolioData.skills} />
        </SectionWrapper>
        <SectionWrapper id="contact" title="Get In Touch">
          <ContactSection contact={portfolioData.contact} />
        </SectionWrapper>
      </main>
      <Footer name={portfolioData.name} />
    </div>
  );
};

export default App;
