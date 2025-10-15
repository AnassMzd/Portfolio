import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experience = {
    title: 'Cybersecurity Intern',
    company: 'SEEKA GROUP',
    location: 'Remote',
    period: '07/2025 - 09/2025',
    description: [
      'Developed a Python-based forensic email analysis tool with automated parsing, IOC enrichment, and AI-assisted content analysis',
      'Implemented a multi-phase workflow with SOC reporting and TheHive integration, reducing triage time by 80%',
      'Enabled analysts to focus on high-risk cases through automated threat intelligence enrichment',
      'Integrated with external threat intelligence sources for comprehensive IOC analysis'
    ],
    technologies: ['Python', 'Email Forensics', 'IOC Analysis', 'AI/ML', 'TheHive', 'SOC Operations']
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 cyber-gradient">
          Professional Experience
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Hands-on experience in cybersecurity operations and threat analysis
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>

          {/* Experience Card */}
          <div className="relative pl-0 md:pl-20 animate-slide-in">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

            <div className="glass-effect p-8 rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300 hover:-translate-y-1 border border-cyber-green/30 hover:border-cyber-green/60">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyber-green mb-2">{experience.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-300 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{experience.company}</span>
                    <span className="text-gray-500">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-cyber-blue font-medium">
                  <Calendar size={18} />
                  <span>{experience.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {experience.description.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-cyber-green mt-1">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-sm font-medium text-gray-300 shadow-sm hover:border-cyber-green/60 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
