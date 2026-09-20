const experiences = [
  {
    company: 'Axial TechnoCoats',
    date: 'Jul 2022 – Jun 2023',
    title: 'Software Engineer',
    details: [
      'Independently devised 6 new RESTful APIs and improved 8 existing ones using Node.js and Express, growing the backend to 30+ endpoints for a task management platform supporting 10+ teams, replacing manual spreadsheet workflows.',
      'Reduced incident investigation time by 45% by leveraging Elasticsearch for centralized logging, monitoring and troubleshooting, ensuring data quality and service reliability.',
      'Increased automated and integration test coverage from 35% to 65% using Cucumber within an Agile sprint workflow, improving deployment reliability and reducing production regressions through clean, maintainable code.',
      'Coordinated Agile/Scrum ceremonies and peer code reviews, incorporating feedback to improve code quality, writing reusable code following best practices and collaborating with product owners and business stakeholders.'
    ]
  },
  {
    company: 'VLink Technologies',
    date: 'Nov 2021 – Apr 2022',
    title: 'Software & IoT Intern',
    details: [
      'Architected cloud services using AWS IoT Core, Lambda, and DynamoDB, processing approximately 10K events daily from more than 50 connected devices, supporting data workflows and automation.',
      'Engineered a React.js dashboard with real-time WebSocket communication for IoT telemetry, partnering with engineers in an Agile environment to deliver responsive monitoring capabilities and internal tools.',
      'Optimized application performance and resolved deployment issues, maintaining highly available services with 99%+ uptime through monitoring and reliability practices.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span className="experience-date">{exp.date}</span>
            </div>
            <p className="experience-title">{exp.title}</p>
            <ul className="experience-details">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
