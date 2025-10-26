import { useState } from 'react'
import { Download, FileText, CheckCircle, Shield, Lock, Terminal } from 'lucide-react'

const CVDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)
      setDownloaded(true)
      
      // Create download link
      const link = document.createElement('a')
      link.href = '/assets/cv/CV_Anass_El_Mazdougui.pdf'
      link.download = 'CV_Anass_El_Mazdougui.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Reset downloaded state after 3 seconds
      setTimeout(() => setDownloaded(false), 3000)
    }, 1000)
  }

  return (
    <section 
      id="cv-download" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Shield className="text-cyber-green animate-pulse" size={32} />
            <Terminal className="text-cyber-blue animate-pulse" style={{ animationDelay: '0.5s' }} size={32} />
            <Lock className="text-cyber-purple animate-pulse" style={{ animationDelay: '1s' }} size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 cyber-gradient">
            Download My CV
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and certifications in Network Security, Penetration Testing, and SOC Operations
          </p>
        </div>

        {/* Main CV Card */}
        <div className="glass-effect rounded-3xl p-8 sm:p-12 shadow-2xl animate-slide-up border border-cyber-green/30 hover:border-cyber-green/60 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - CV Preview */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl transform group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full animate-float">
                    <FileText size={64} className="text-white" />
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Anass El Mazdougui
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-full text-xs font-semibold border border-cyber-green/50">
                      Network Security
                    </span>
                    <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-xs font-semibold border border-cyber-blue/50">
                      SOC Analyst
                    </span>
                    <span className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-xs font-semibold border border-cyber-purple/50">
                      Penetration Testing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Download Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <span className="text-cyber-green">{'>'}</span>
                  <span>What's Inside?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    'Professional Experience & Projects',
                    'Technical Skills & Certifications',
                    'Education & Training',
                    'Contact Information'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start space-x-3 text-gray-300 animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="text-cyber-green flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`
                  w-full py-4 px-8 rounded-xl font-bold text-lg
                  transition-all duration-300 transform
                  cv-button-glow
                  ${isDownloading 
                    ? 'bg-gray-600 cursor-wait' 
                    : downloaded
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-blue hover:to-cyber-green'
                  }
                  text-white shadow-neon
                  hover:scale-105 hover:shadow-neon-blue
                  active:scale-95
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center space-x-3
                `}
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Preparing Download...</span>
                  </>
                ) : downloaded ? (
                  <>
                    <CheckCircle size={24} />
                    <span>Downloaded Successfully!</span>
                  </>
                ) : (
                  <>
                    <Download size={24} />
                    <span>Download CV (PDF)</span>
                  </>
                )}
              </button>

              {/* File Info */}
              <div className="flex items-center justify-between text-sm text-gray-400 pt-2">
                <span className="flex items-center space-x-2">
                  <FileText size={16} />
                  <span>PDF Format</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Lock size={16} />
                  <span>Secure Download</span>
                </span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-cyber-green/10 rounded-xl border border-cyber-green/30 hover:border-cyber-green/60 transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-green mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="p-4 bg-cyber-blue/10 rounded-xl border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-blue mb-1">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="p-4 bg-cyber-purple/10 rounded-xl border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-purple mb-1">4+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-gray-400 text-sm">
            <span className="text-cyber-green font-mono">$</span> Seeking Network Security, Penetration Testing, or SOC Analyst internships • 
            <span className="text-cyber-blue"> Available for PFE 2026</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CVDownload
