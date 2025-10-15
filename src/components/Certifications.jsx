import { Award, ExternalLink, Shield } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco',
      link: 'https://www.credly.com/badges/your-badge-link',
      color: 'from-cyber-green to-green-600',
      icon: <Shield size={24} />
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      link: 'https://www.credly.com/badges/your-badge-link',
      color: 'from-cyber-blue to-blue-600',
      icon: <Shield size={24} />
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      link: 'https://www.credly.com/badges/your-badge-link',
      color: 'from-cyber-purple to-purple-600',
      icon: <Shield size={24} />
    },
    {
      title: 'Practical Ethical Hacking',
      issuer: 'TCM Academy',
      link: 'https://drive.google.com/file/d/1JbjQ70jfuIatMk6DBaBdcaCnnWudkB7E/view',
      color: 'from-red-600 to-red-700',
      icon: <Shield size={24} />
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Award className="text-cyber-green animate-pulse" size={32} />
            <Shield className="text-cyber-blue animate-pulse" style={{ animationDelay: '0.5s' }} size={32} />
            <Award className="text-cyber-purple animate-pulse" style={{ animationDelay: '1s' }} size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold cyber-gradient mb-4">
            Certifications
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Professional certifications and training in cybersecurity, network security, and ethical hacking
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon-blue transition-all duration-300 hover:-translate-y-2 border border-cyber-blue/20 hover:border-cyber-blue/60 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">{cert.issuer}</p>
                  
                  {/* View Certificate Link */}
                  <div className="flex items-center text-cyber-green text-sm font-medium group-hover:text-cyber-blue transition-colors">
                    <span>View Certificate</span>
                    <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyber-blue/50 transition-all pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-2xl text-center border border-cyber-green/30 hover:border-cyber-green/60 transition-all hover:shadow-neon">
            <div className="text-4xl font-bold text-cyber-green mb-2">4+</div>
            <p className="text-gray-300">Professional Certifications</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl text-center border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all hover:shadow-neon-blue">
            <div className="text-4xl font-bold text-cyber-blue mb-2">Top 1%</div>
            <p className="text-gray-300">TryHackMe Ranking</p>
          </div>
          
          <div className="glass-effect p-6 rounded-2xl text-center border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all hover:shadow-neon-purple">
            <div className="text-4xl font-bold text-cyber-purple mb-2">Continuous</div>
            <p className="text-gray-300">Learning & Development</p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-gray-400 text-sm">
            <span className="text-cyber-green font-mono">$</span> Committed to continuous learning and professional development in cybersecurity
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
