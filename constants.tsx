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
  bio: "Data Analyst and Python Developer with expertise in Excel and data visualization. Achieved a 25% improvement in data-driven outcomes through effective analysis. Experienced in developing SQL solutions and creating dashboards.",
  aboutMe: `As a Data Analyst and Python Developer, I specialize in transforming complex data into actionable insights. With a strong foundation in data analysis, visualization, and machine learning, I've successfully improved business outcomes by 25% through data-driven solutions. My expertise spans across Python programming, SQL database management, and advanced data visualization using Power BI and other tools.`,
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],

  projects: [
    {
      id: "proj4",
      title: "Webserver Log Analysis",
      description: "Analyzed webserver logs to identify patterns, detect anomalies, and optimize server performance. Implemented log parsing, data visualization, and automated reporting.",
      technologies: ["Python", "Log Parsing", "Data Visualization", "Automation"],
      imageUrl: "/webserver.png",
      repoUrl: "https://github.com/venkey024/webserver-log-analysis",
      demoUrl: "https://webserver-log-analysis-demo.vercel.app",
    },
    {
      id: "proj1",
      title: "Airbnb Analytics",
      description: "Analyzed data from over 20,000 Airbnb listings, revealing pricing trends that led to a 15% increase in occupancy rates. Built predictive models with 85% accuracy, forecasting pricing and occupancy trends, guiding strategic business decisions. Delivered 5 Power BI visualizations, improving data comprehension for various stakeholders.",
      technologies: ["Python", "Power BI", "Machine Learning", "Data Analysis", "SQL"],
      imageUrl: "/airbnb-project.jpg",
      repoUrl: "https://github.com/venkey024/airbnb-analytics",
      demoUrl: "https://airbnb-analytics-demo.vercel.app",
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
      title: "Courier Charges Verification",
      description: "Developed an automated system to verify courier charges using Python and Excel automation. The system processes shipping data, validates charges against predefined rules, and identifies discrepancies, resulting in cost savings and improved accuracy in logistics operations.",
      technologies: ["Python", "Excel Automation", "Data Analysis", "Pandas"],
      imageUrl: "/courier-project.jpg",
      repoUrl: "https://github.com/venkey024/Courier-charges-verification",
    },
  ],
  experiences: [
    {
      id: "exp1",
      company: "Quanta People Solutions",
      role: "Data Analyst Intern",
      duration: "March 2025 – Present",
      responsibilities: [
        "Consulting: Delivered analytics for over 10,000+ frontline employees across 4+ BFSI clients, improving team performance by 20% and reducing attrition by 10%.",
        "Built 10+ interactive Power BI dashboards to visualize KPIs such as productivity, 90-day attrition, underperformer trends, and headcount across 10 departments.",
        "Provided insights to Company Managers suite executives, driving workforce planning and retention strategies that improved staff stability by 18%.",
        "Developed RMF based on interviews with 25+ top performers to identify 30+ success behaviors across frontline roles.",
        "Conducted 50+ structured interviews to capture habits, KPIs, and qualitative traits responsible for 25% higher productivity in top quartile performers.",
        "Documented 12+ differentiating behaviors and used them to design 3 performance coaching frameworks for field teams.",
        "Calculated cost of failure for 10+ critical roles, identifying up to 14C annual loss from delayed onboarding or untrained staff.",
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
    { id: "sk1", name: "Python", category: SkillCategory.LANGUAGES },
    { id: "sk2", name: "SQL", category: SkillCategory.LANGUAGES },
    { id: "sk3", name: "Advanced Excel", category: SkillCategory.LANGUAGES },
    { id: "sk4", name: "Pandas", category: SkillCategory.BACKEND },
    { id: "sk5", name: "NumPy", category: SkillCategory.BACKEND },
    { id: "sk6", name: "ETL", category: SkillCategory.BACKEND },
    { id: "sk7", name: "Power BI", category: SkillCategory.TOOLS },
    { id: "sk8", name: "Matplotlib", category: SkillCategory.TOOLS },
    { id: "sk9", name: "Seaborn", category: SkillCategory.TOOLS },
    { id: "sk10", name: "Scikit-Learn", category: SkillCategory.TOOLS },
    { id: "sk11", name: "MySQL", category: SkillCategory.DATABASE },
    { id: "sk12", name: "SQLite", category: SkillCategory.DATABASE },
    { id: "sk13", name: "Data Modeling", category: SkillCategory.DATABASE },
    { id: "sk14", name: "Statistics", category: SkillCategory.TOOLS },
    { id: "sk15", name: "Machine Learning", category: SkillCategory.TOOLS },
    { id: "sk16", name: "MS Office", category: SkillCategory.TOOLS },
    { id: "sk17", name: "Git/GitHub", category: SkillCategory.TOOLS, icon: <GitHubIcon className="w-5 h-5" /> },
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
