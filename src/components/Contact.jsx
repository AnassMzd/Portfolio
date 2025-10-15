import { Mail, Linkedin, MapPin, Phone } from 'lucide-react'
import TryHackMeIcon from './TryHackMeIcon'

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'anasselmazdougui@gmail.com',
      link: 'mailto:anasselmazdougui@gmail.com',
      color: 'from-primary to-primary/70'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '0649011758',
      link: 'tel:0649011758',
      color: 'from-accent to-accent/70'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tetouan, Morocco',
      link: null,
      color: 'from-secondary to-secondary/70'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Anass El Mazdougui',
      link: 'https://www.linkedin.com/in/anass-el-mazdougui-886112286',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <TryHackMeIcon size={24} />,
      label: 'TryHackMe',
      value: 'targ45',
      link: 'https://tryhackme.com/p/targ45',
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-green rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 cyber-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm currently seeking PFE 2026 internship opportunities in Network Security, Penetration Testing, or SOC Analyst roles. Feel free to reach out!
        </p>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Contact Information</h3>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon transition-all hover:-translate-y-1 border border-cyber-green/30 hover:border-cyber-green/60"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-white hover:text-cyber-green transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold mb-4 text-center text-white">Connect With Me</h4>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl glass-effect border border-cyber-blue/30 hover:border-cyber-blue/60 text-white transition-all hover:scale-105 shadow-neon-blue"
                  >
                    {social.icon}
                    <div>
                      <p className="text-sm opacity-90">{social.label}</p>
                      <p className="font-semibold">{social.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
