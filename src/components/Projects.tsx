interface Project {
  title: string;
  githubUrl: string;
  description: string;
  image?: string;
  techStack: string[];
}

const projectsData = {
  fullstack: [
    {
      title: 'Job Tracker',
      githubUrl: 'https://github.com/hr1378/Job-Tracker',
      description: 'Full-stack job application tracker featuring a Chrome extension for auto-extracting job data and a web dashboard for managing applications. Uses React 19, Node.js, and MongoDB with a shared REST API.',
      image: '/JobTracker Output.png',
      techStack: ['React 19', 'Node.js', 'MongoDB', 'Chrome Extension']
    },
    {
      title: 'Patient Management Microservices',
      githubUrl: 'https://github.com/hr1378/Patient-management-microservices',
      description: 'Production-grade patient management backend built as a polyglot microservices system for healthcare providers. Decomposes domain across bounded contexts — identity, patient records, billing, and analytics — into independently deployable services communicating via REST, gRPC, and event streaming.',
      image: '/Patient Management Architecture.png',
      techStack: ['Java', 'Spring Boot', 'gRPC', 'Kafka', 'Docker']
    }
  ],
  ml: [
    {
      title: 'EHR Readmission Predictor',
      githubUrl: 'https://github.com/hr1378/EHR-readmission-predictor',
      description: 'End-to-end healthcare ML workflow for predicting 30-day patient readmission using MIMIC-IV data. Features SQL cohort construction, SQLMesh-based data modeling, ICD diagnosis feature engineering, and calibrated model comparison (Logistic Regression, Random Forest, XGBoost) with GroupKFold validation and MLflow tracking.',
      techStack: ['Python', 'SQLMesh', 'scikit-learn', 'XGBoost', 'MLflow', 'FastAPI']
    },
    {
      title: 'Log Oracle RAG',
      githubUrl: 'https://github.com/hr1378/log-oracle-RAG',
      description: 'Retrieval-Augmented Generation system for log analysis and troubleshooting. Leverages RAG architecture to provide intelligent insights and answers from log data, combining retrieval systems with generative AI for enhanced log analysis capabilities.',
      techStack: ['Java', 'RAG', 'Vector Database', 'LLM Integration']
    }
  ],
  data: [
    {
      title: 'Zomato Analysis Data Pipeline',
      githubUrl: 'https://github.com/hr1378/Zomato-Analysis---Data-Pipeline',
      description: 'Cloud-native ETL pipeline that ingests restaurant data across multiple regions, transforms it through a medallion architecture (Bronze > Silver > Gold), enforces data quality gates, and produces analytics-ready aggregations orchestrated by AWS Step Functions.',
      techStack: ['AWS', 'AWS Glue', 'AWS Lambda', 'Step Functions', 'Python']
    }
  ]
};

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('react')) return 'fab fa-react';
  if (techLower.includes('node')) return 'fab fa-node-js';
  if (techLower.includes('mongo')) return 'fas fa-database';
  if (techLower.includes('java')) return 'fab fa-java';
  if (techLower.includes('docker')) return 'fab fa-docker';
  if (techLower.includes('python')) return 'fab fa-python';
  if (techLower.includes('aws')) return 'fab fa-aws';
  if (techLower.includes('vector') || techLower.includes('database')) return 'fas fa-database';
  return null;
};

const getTechClass = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('react')) return 'react';
  if (techLower.includes('node')) return 'nodejs';
  if (techLower.includes('mongo')) return 'mongodb';
  if (techLower.includes('java')) return 'java';
  if (techLower.includes('docker')) return 'docker';
  if (techLower.includes('python')) return 'python';
  if (techLower.includes('aws')) return 'aws';
  if (techLower.includes('vector') || techLower.includes('database')) return 'database';
  return '';
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        
        <div className="project-category" id="fullstack">
          <h3>Full Stack</h3>
          {projectsData.fullstack.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="project-category" id="ml">
          <h3>Machine Learning</h3>
          {projectsData.ml.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="project-category" id="data">
          <h3>Data Engineering</h3>
          {projectsData.data.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h4>{project.title}</h4>
        <span className="project-link">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
        </span>
      </div>
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => {
          const icon = getTechIcon(tech);
          const techClass = getTechClass(tech);
          return (
            <span key={index} className={`tech-tag ${techClass}`}>
              {icon && <i className={icon}></i>}
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
}
