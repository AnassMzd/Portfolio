import { User, Target, Award, Shield, Terminal, Lock } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Shield className="text-cyber-green animate-pulse" size={32} />
            <Terminal className="text-cyber-blue animate-pulse" style={{ animationDelay: '0.5s' }} size={32} />
            <Lock className="text-cyber-purple animate-pulse" style={{ animationDelay: '1s' }} size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold cyber-gradient">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-cyber-green to-cyber-blue shadow-neon overflow-hidden border-2 border-cyber-green/30">
                <img
                  src="/profile.jpg"
                  alt="Anass El Mazdougui"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-6xl font-bold">AEM</div>'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyber-blue rounded-full opacity-50 blur-xl animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-cyber-green rounded-full opacity-30 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon transition-all duration-500 border border-cyber-green/30 hover:border-cyber-green/60">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyber-green/20 rounded-lg border border-cyber-green/50">
                  <User className="text-cyber-green" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Profile</h3>
                  <p className="text-gray-300">
                    Final-year Cybersecurity Engineering student at INPT, ranked Top 1% on TryHackMe, 
                    specializing in Network Security, Penetration Testing, and SOC Operations. Experienced in 
                    threat detection, incident response, and security automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon-blue transition-all duration-500 border border-cyber-blue/30 hover:border-cyber-blue/60">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyber-blue/20 rounded-lg border border-cyber-blue/50">
                  <Target className="text-cyber-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Current Goal</h3>
                  <p className="text-gray-300">
                    Actively seeking PFE 2026 internship opportunities in Network Security, Penetration Testing, 
                    or SOC Analyst roles to apply my cybersecurity expertise in real-world scenarios and 
                    contribute to innovative security solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon-purple transition-all duration-500 border border-cyber-purple/30 hover:border-cyber-purple/60">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyber-purple/20 rounded-lg border border-cyber-purple/50">
                  <Award className="text-cyber-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Achievements</h3>
                  <p className="text-gray-300">
                    Top 1% ranking on TryHackMe platform, demonstrating strong practical skills in 
                    penetration testing, network security, and vulnerability assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
