import { ArrowDown, Linkedin, Mail, Download, Shield, Terminal, Lock } from 'lucide-react'
import TryHackMeIcon from './TryHackMeIcon'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyber-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8">
          {/* Animated Icons */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="p-3 bg-cyber-green/20 rounded-lg border border-cyber-green/50 animate-float">
              <Shield className="text-cyber-green" size={32} />
            </div>
            <div className="p-3 bg-cyber-blue/20 rounded-lg border border-cyber-blue/50 animate-float" style={{ animationDelay: '0.5s' }}>
              <Terminal className="text-cyber-blue" size={32} />
            </div>
            <div className="p-3 bg-cyber-purple/20 rounded-lg border border-cyber-purple/50 animate-float" style={{ animationDelay: '1s' }}>
              <Lock className="text-cyber-purple" size={32} />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm{' '}</span>
            <span className="cyber-gradient">Anass El Mazdougui</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-2">
            Final Year Engineering Student at INPT
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            <span className="text-cyber-green">Network Security</span> • <span className="text-cyber-blue">Penetration Testing</span> • <span className="text-cyber-purple">SOC Analyst</span>
          </p>
          <div className="flex items-center justify-center space-x-2 text-cyber-green text-sm mb-8">
            <Terminal size={16} />
            <span className="font-mono">$ seeking_internship --year=2026 --role="Security Specialist"</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="mailto:anasselmazdougui@gmail.com"
            className="p-3 rounded-full bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green text-cyber-green transition-all hover:scale-110 shadow-neon hover:shadow-neon-blue"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anass-el-mazdougui-886112286"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green text-cyber-green transition-all hover:scale-110 shadow-neon hover:shadow-neon-blue"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://tryhackme.com/p/targ45"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green text-cyber-green transition-all hover:scale-110 shadow-neon hover:shadow-neon-blue"
            aria-label="TryHackMe"
          >
            <TryHackMeIcon size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="#cv-download"
            className="group px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue hover:from-cyber-blue hover:to-cyber-green text-white rounded-full font-semibold transition-all hover:scale-105 shadow-neon hover:shadow-neon-blue flex items-center justify-center space-x-2 cv-button-glow"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-cyber-blue/20 border-2 border-cyber-blue/50 hover:bg-cyber-blue/30 hover:border-cyber-blue text-white rounded-full font-semibold transition-all hover:scale-105 shadow-neon-blue"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-cyber-purple/20 border-2 border-cyber-purple/50 hover:bg-cyber-purple/30 hover:border-cyber-purple text-white rounded-full font-semibold transition-all hover:scale-105 shadow-neon-purple"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="mx-auto text-cyber-green" size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
