import { Shield, Server, Container, Search, Network, Lock, Award, ExternalLink } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Network Security & Defense',
      icon: <Shield size={32} />,
      color: 'from-primary to-primary/70',
      skills: [
        'SIEM (ELK, Wazuh)',
        'IDS/IPS (Suricata)',
        'EDR (LimaCharlie)',
        'Wireshark',
        'TCPdump',
        'pfSense',
        'ACL Management',
        'VPN Configuration'
      ]
    },
    {
      title: 'Infrastructure & Routing',
      icon: <Network size={32} />,
      color: 'from-blue-500 to-blue-400',
      skills: [
        'BGP (Route Optimization)',
        'OSPF (Enterprise Routing)',
        'VLAN Segmentation',
        'NAT & Subnetting',
        'TCP/IP Stack',
        'DNS & DHCP',
        'HTTP/HTTPS',
        'FTP/SFTP'
      ]
    },
    {
      title: 'Systems & Administration',
      icon: <Server size={32} />,
      color: 'from-accent to-accent/70',
      skills: [
        'Linux (Debian/Ubuntu)',
        'Windows Server',
        'VMware & VirtualBox',
        'Container Technologies',
        'DNS & DHCP Services',
        'PKI Management',
        'Syslog Monitoring'
      ]
    },
    {
      title: 'Offensive Security Tools',
      icon: <Search size={32} />,
      color: 'from-red-500 to-red-400',
      skills: [
        'Nmap',
        'WPScan',
        'Burp Suite',
        'Metasploit',
        'Hydra',
        'John the Ripper',
        'Hashcat'
      ]
    },
    {
      title: 'Development & Automation',
      icon: <Lock size={32} />,
      color: 'from-purple-500 to-purple-400',
      skills: [
        'Python (Security Scripts)',
        'C (System Programming)',
        'SOAR Integration',
        'Workflow Development',
        'Security Automation'
      ]
    },
    {
      title: 'DevSecOps',
      icon: <Container size={32} />,
      color: 'from-green-500 to-teal-600',
      skills: [
        'GitLab CI',
        'Docker',
        'Kubernetes',
        'Argo CD (GitOps)',
        'SAST/SCA',
        'Prometheus',
        'Grafana'
      ]
    }
  ]

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Critical Thinking',
    'Communication',
    'Time Management',
    'Adaptability'
  ]

  const certifications = [
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      link: 'https://www.credly.com/badges/c95c40e2-2ce5-4ec4-9881-c18f5445ad7c/public_url',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Junior Cybersecurity Analyst Career Path',
      issuer: 'Cisco',
      link: 'https://www.credly.com/badges/6f0739d5-1b3d-4f18-afd7-1a4d0eca4e67/public_url',
      color: 'from-cyan-600 to-cyan-700'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      link: 'https://www.credly.com/badges/118fedce-4bde-4aeb-89d3-c1764850cc66/public_url',
      color: 'from-teal-600 to-teal-700'
    },
    {
      title: 'Practical Ethical Hacking',
      issuer: 'TCM Academy',
      link: 'https://drive.google.com/file/d/1JbjQ70jfuIatMk6DBaBdcaCnnWudkB7E/view',
      color: 'from-red-600 to-red-700'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-green rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 cyber-gradient">
          Skills & Expertise
        </h2>
       

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-cyber-green/20 hover:border-cyber-green/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-neutral/50 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="glass-effect p-8 rounded-2xl shadow-lg border border-cyber-purple/30">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-white rounded-full font-medium shadow-neon hover:shadow-neon-blue transition-all hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 glass-effect p-8 rounded-2xl shadow-lg border border-cyber-green/30">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🇲🇦</div>
              <p className="font-semibold text-white">Arabic</p>
              <p className="text-sm text-gray-400">Native</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇫🇷</div>
              <p className="font-semibold text-white">French</p>
              <p className="text-sm text-gray-400">Fluent</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇬🇧</div>
              <p className="font-semibold text-white">English</p>
              <p className="text-sm text-gray-400">Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
