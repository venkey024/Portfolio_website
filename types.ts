
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  logoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: React.ReactNode; // Optional: For SVG icons or similar
}

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Databases",
  TOOLS = "Tools & Platforms",
  LANGUAGES = "Programming Languages"
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  aboutMe: string;
  navLinks: NavLink[];
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  contact: {
    email: string;
    social: SocialLink[];
  };
}
