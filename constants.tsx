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
  bio: "Recent Electronics and Communication Engineering graduate with expertise in data analysis and visualization. Proficient in Python, SQL, and Power BI, with hands-on experience in developing dynamic dashboards and deriving actionable insights from complex datasets.",
  aboutMe: `I am a passionate data analyst with a Bachelor's degree in Electronics and Communication Engineering. My technical journey has equipped me with strong analytical skills and programming expertise in Python and SQL. Through various projects, I've developed a keen eye for transforming raw data into meaningful visualizations using Power BI, helping stakeholders make data-driven decisions. I am enthusiastic about leveraging technology to solve real-world problems and continuously expanding my knowledge in the field of data analytics.`,
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
      title: "Courier Charges Verification",
      description: "Developed an automated system to verify courier charges using Python and Excel automation. The system processes shipping data, validates charges against predefined rules, and identifies discrepancies, resulting in cost savings and improved accuracy in logistics operations.",
      technologies: ["Python", "Excel Automation", "Data Analysis", "Pandas"],
      imageUrl: "/courier-project.jpg",
      repoUrl: "https://github.com/venkey024/Courier-charges-verification",
    },
    {
      id: "proj2",
      title: "User Authentication System",
      description: "Developed a secure user authentication system with registration and login functionality. Implemented data validation, password hashing, and secure session management. Features include real-time validation, user data management, and secure authentication flows.",
      technologies: ["Python", "HTML/CSS", "JavaScript", "SQL", "Flask"],
      imageUrl: "/authentic-project.jpeg",
      repoUrl: "https://github.com/venkey024/user-authentication-form",
    },
    {
      id: "proj3",
      title: "Data Analytics Dashboard",
      description: "Created interactive Power BI dashboards analyzing performance metrics for 10,000+ employees. Implemented data modeling, ETL processes, and dynamic visualizations that reduced reporting time by 40% and improved decision-making efficiency.",
      technologies: ["Power BI", "SQL", "Python", "Excel"],
      imageUrl: "/airbnb-project.jpg",
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
    phone: "7995798027",
    email: "venkateshbyna14@gmail.com",
    location: "Andhra Pradesh, India",
    social: [
      { name: "GitHub", url: "https://github.com/venkey024", icon: <GitHubIcon className="w-6 h-6" /> },
      { name: "LinkedIn", url: "https://linkedin.com/in/byna-venkatesh-672833243", icon: <LinkedInIcon className="w-6 h-6" /> },
      { name: "Email", url: "mailto:venkateshbyna14@gmail.com", icon: <EmailIcon className="w-6 h-6" /> },
    ],
  },
};
