import React from 'react';
import { PortfolioData, SkillCategory } from './types';
import { GitHubIcon } from './components/icons/GitHubIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { EmailIcon } from './components/icons/EmailIcon';
const ReactIconPlaceholder: React.FC = () => <span className="font-bold text-sky-400">R</span>;
const NodeJsIconPlaceholder: React.FC = () => <span className="font-bold text-green-400">N</span>;
const TSIconPlaceholder: React.FC = () => <span className="font-bold text-blue-400">TS</span>;

export const portfolioData: PortfolioData = {
  name: "BYNA VENKATESH",
  title: "Data Analyst & Python Developer",
  bio: "Data Analyst and Python Developer with expertise in Excel, SQL, and data visualization. Achieved a 25% improvement in data-driven outcomes through effective analysis. Experienced in developing SQL solutions and creating dashboards.",
  aboutMe: `I am a Data Analyst and Python Developer based in Andhra Pradesh, India. I specialize in Excel, SQL, Power BI, and data visualization. My experience includes delivering analytics for 10,000+ employees, building interactive dashboards, and automating reporting processes. I am passionate about transforming data into actionable insights and driving business outcomes.`,
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  projects: [
    {
      id: "proj1",
      title: "Airbnb Analytics",
      description: "Analyzed 20,000+ Airbnb listings, revealing pricing trends that led to a 15% increase in occupancy rates. Built predictive models (85% accuracy) for pricing and occupancy, and delivered Power BI visualizations for stakeholders.",
      technologies: ["Python", "Pandas", "Power BI", "Excel"],
      imageUrl: "https://picsum.photos/seed/airbnb/600/400",
    },
  ],
  experiences: [
    {
      id: "exp1",
      company: "Quanta People Solutions",
      role: "Data Analyst Intern",
      duration: "March 2025 – Present",
      responsibilities: [
        "Delivered analytics for 10,000+ frontline employees across 4+ BFSI clients, improving team performance by 20% and reducing attrition by 10%.",
        "Built 10+ interactive Power BI dashboards to visualize KPIs such as productivity, attrition, and headcount.",
        "Automated 15+ Excel-based reports, reducing manual effort by 35% and improving reporting speed by 40%.",
        "Provided insights to executives, driving workforce planning and retention strategies (18% improvement in staff stability).",
        "Developed Role Modeling Framework (RMF) based on 25+ top performer interviews, identifying 30+ success behaviors.",
        "Conducted 50+ interviews to capture habits and KPIs responsible for 25% higher productivity in top performers.",
        "Documented 12+ differentiating behaviors and designed 3 coaching frameworks for field teams.",
        "Calculated cost of failure for 10+ critical roles, identifying up to 14C annual loss from delayed onboarding or untrained staff.",
        "Integrated RMF insights into executive dashboards and consulting reports, improving leadership visibility and HR actionability.",
        "Positioned RMF as a proprietary framework adopted in 3 states and 4 BFSI partners, increasing stakeholder satisfaction by 22%."
      ],
      logoUrl: "https://picsum.photos/seed/quanta/50/50",
    },
    {
      id: "exp2",
      company: "Accenture",
      role: "Data Analytics Virtual Internship",
      duration: "July 2024 - August 2024, Remote",
      responsibilities: [
        "Wrote and optimized SQL queries for business data analysis, reducing data retrieval time by 15%.",
        "Automated data aggregation with stored procedures, decreasing processing time by 20%.",
        "Developed interactive Power BI dashboards for real-time KPI access by stakeholders."
      ],
      logoUrl: "https://picsum.photos/seed/accenture/50/50",
    },
  ],
  skills: [
    { id: "sk1", name: "SQL (MySQL, SQLite)", category: SkillCategory.DATABASE },
    { id: "sk2", name: "Database Design", category: SkillCategory.DATABASE },
    { id: "sk3", name: "Data Modeling", category: SkillCategory.DATABASE },
    { id: "sk4", name: "Data Extraction, Transformation, Loading (ETL)", category: SkillCategory.BACKEND },
    { id: "sk5", name: "Python (Pandas, NumPy)", category: SkillCategory.LANGUAGES },
    { id: "sk6", name: "Excel (Advanced functions)", category: SkillCategory.TOOLS },
    { id: "sk7", name: "Power BI", category: SkillCategory.TOOLS },
    { id: "sk8", name: "Data Visualization", category: SkillCategory.TOOLS },
    { id: "sk9", name: "Inferential & Descriptive Statistics", category: SkillCategory.TOOLS },
    { id: "sk10", name: "Testing Analysis", category: SkillCategory.TOOLS },
    { id: "sk11", name: "MS Office", category: SkillCategory.TOOLS },
    { id: "sk12", name: "Git/GitHub", category: SkillCategory.TOOLS, icon: <GitHubIcon className="w-5 h-5" /> },
  ],
  contact: {
    email: "venkateshbyna14@gmail.com",
    social: [
      { name: "GitHub", url: "https://github.com/venkey024", icon: <GitHubIcon className="w-6 h-6" /> },
      { name: "LinkedIn", url: "https://linkedin.com/in/byna-venkatesh-672833243", icon: <LinkedInIcon className="w-6 h-6" /> },
      { name: "Email", url: "mailto:venkateshbyna14@gmail.com", icon: <EmailIcon className="w-6 h-6" /> },
    ],
  },
};
