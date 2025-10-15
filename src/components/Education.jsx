import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Cybersecurity and Digital Trust Engineering Program',
      institution: 'National Institute of Posts and Telecommunications (INPT)',
      location: 'Rabat, Morocco',
      period: '2023 - 2026',
      description: 'Specialized program focusing on cybersecurity, network security, cryptography, and digital trust technologies.',
      color: 'from-primary to-primary/70'
    },
    {
      degree: 'University Degree in Scientific and Technical Studies (DEUST)',
      institution: 'Faculty of Sciences and Technology',
      location: 'Al Hoceima, Morocco',
      period: '2021 - 2023',
      description: 'Foundation in scientific and technical studies with emphasis on mathematics, physics, and computer science.',
      color: 'from-accent to-accent/70'
    }
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyber-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 cyber-gradient">
          Education
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Academic background in cybersecurity and engineering
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-20 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                <div className="glass-effect rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-cyber-green/30 hover:border-cyber-green/60">
                  {/* Colored header */}
                  <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>

                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                        <div className="flex items-center space-x-2 text-gray-300 mb-2">
                          <GraduationCap size={20} className="text-cyber-green" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 mb-3">
                          <MapPin size={18} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-cyber-blue font-medium lg:ml-4">
                        <Calendar size={18} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a 
            href="https://tryhackme.com/p/targ45"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-6 rounded-2xl text-center shadow-lg hover:shadow-neon transition-all hover:-translate-y-1 block border border-cyber-green/30 hover:border-cyber-green/60"
          >
            <div className="text-4xl font-bold text-cyber-green mb-2">Top 1%</div>
            <p className="text-gray-300">TryHackMe Ranking</p>
          </a>

          <div className="glass-effect p-6 rounded-2xl text-center shadow-lg hover:shadow-neon-blue transition-all hover:-translate-y-1 border border-cyber-blue/30 hover:border-cyber-blue/60">
            <div className="text-4xl font-bold text-cyber-blue mb-2">3+</div>
            <p className="text-gray-300">Years of Study</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl text-center shadow-lg hover:shadow-neon-purple transition-all hover:-translate-y-1 border border-cyber-purple/30 hover:border-cyber-purple/60">
            <div className="text-4xl font-bold text-cyber-purple mb-2">Multiple</div>
            <p className="text-gray-300">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
