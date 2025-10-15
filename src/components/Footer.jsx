import { Heart, Linkedin, Mail, Shield, Terminal } from 'lucide-react'
import TryHackMeIcon from './TryHackMeIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-cyber-green/20 rounded-lg border border-cyber-green/50">
                <Shield className="text-cyber-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold cyber-gradient">Anass El Mazdougui</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Network Security & Penetration Testing Specialist | SOC Analyst | Seeking PFE 2026 Internship
            </p>
            <div className="flex items-center space-x-2 text-cyber-green text-sm">
              <Terminal size={16} />
              <span className="font-mono">$ whoami: cybersecurity_engineer</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:anasselmazdougui@gmail.com"
                className="p-3 bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green rounded-lg transition-all hover:scale-110 hover:shadow-neon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anass-el-mazdougui-886112286"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green rounded-lg transition-all hover:scale-110 hover:shadow-neon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://tryhackme.com/p/targ45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green rounded-lg transition-all hover:scale-110 hover:shadow-neon"
                aria-label="TryHackMe"
              >
                <TryHackMeIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-green/30 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span className="text-cyber-green font-mono">$</span>
            <span>© {currentYear} Anass El Mazdougui. Made with</span>
            <Heart size={16} className="text-cyber-green fill-current animate-pulse" />
            <span>and React</span>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="text-cyber-blue">Network Security</span> • <span className="text-cyber-purple">Penetration Testing</span> • <span className="text-cyber-green">SOC Operations</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
