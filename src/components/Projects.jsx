import { ExternalLink, Shield, Server, Lock, Workflow, X, Network, Zap, GitBranch, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "SOAR + EDR Integration Project",
      description: 'Implemented a modern security automation solution integrating SOAR orchestration with EDR endpoint monitoring for automated threat detection and response. Built an intelligent workflow that detects malicious activity, orchestrates multi-channel alerting, and enables automated endpoint isolation to significantly reduce Mean Time To Respond (MTTR).',
      technologies: ['Tines', 'LimaCharlie', 'SOAR', 'EDR', 'Security Automation', 'Incident Response', 'Slack API', 'Email Integration', 'Workflow Orchestration'],
      icon: <Zap size={32} />,
      color: 'from-purple-500 to-indigo-600',
      github: 'https://www.notion.so/Projet-d-Int-gration-SOAR-EDR-281527a5476e800aa75de905eba073e6?source=copy_link',
      demo: '#',
      hasDetails: true,
      detailedInfo: {
        introduction: "This project demonstrates the implementation of an advanced security automation solution that integrates SOAR (Security Orchestration, Automation and Response) with EDR (Endpoint Detection and Response) technologies. The growing complexity and volume of cyber threats demand faster, more coordinated responses—making automation essential for modern security operations.\n\nThe architecture leverages Tines as the SOAR platform to orchestrate intelligent workflows and LimaCharlie as the EDR solution for real-time endpoint monitoring. The system automatically detects threats, orchestrates investigations across multiple channels, and executes coordinated response actions. This integration dramatically reduces response time, eliminates manual errors, and improves overall SOC operational efficiency.",
        challenges: [
          "Critical time delays between threat detection and containment provide attackers extended dwell time to compromise systems",
          "SOC teams experience severe alert fatigue from overwhelming volumes, leading to missed critical incidents",
          "Response actions are fragmented across disconnected teams and tools, creating operational inefficiencies",
          "Manual investigation and response processes introduce delays and human errors during time-critical security incidents",
          "Lack of standardized response procedures results in inconsistent threat handling across different analysts"
        ],
        solution: [
          "Endpoint Detection: LimaCharlie EDR continuously monitors endpoints and identifies suspicious behaviors including HackTool execution, malware activity, and anomalous processes",
          "Automated Alerting: Tines SOAR receives detailed telemetry (timestamp, hostname, source IP, command line, file path, sensor ID) and enriches alerts with contextual information",
          "Multi-Channel Notification: Intelligent alert distribution via Slack and Email with complete detection details, severity scoring, and recommended actions",
          "Interactive Decision Workflow: Security analysts receive interactive prompts to approve/deny endpoint isolation with one-click response capability",
          "Automated Containment: Upon approval, Tines orchestrates automatic endpoint isolation via LimaCharlie API to prevent lateral movement",
          "Confirmation & Logging: System sends confirmation messages with isolation status, affected endpoints, and timestamps for audit trail and documentation"
        ],
        benefits: [
          "Achieved automated response to critical threats within seconds, eliminating manual intervention delays",
          "Ensured consistent application of response procedures across all security incidents and analysts",
          "Freed security analysts to focus on complex threat hunting and investigations rather than repetitive manual tasks",
          "Delivered measurable reduction in Mean Time To Respond (MTTR) from hours to minutes",
          "Improved SOC operational efficiency through workflow automation and standardized response playbooks"
        ],
        architectureImage: '/assets/soar-edr-architecture.png'
      }
    },
    {
      title: 'ELK-CTI Integration: Advanced Threat Detection System',
      description: 'Designed and implemented a comprehensive SIEM system enhanced with Cyber Threat Intelligence (CTI) integration, leveraging open-source technologies to create a proactive threat detection platform. Built automated threat intelligence pipelines with real-time IOC matching, custom detection rules, and interactive dashboards for security monitoring and incident response.',
      technologies: ['ELK Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'MISP', 'AlienVault OTX', 'Filebeat', 'Detection Engineering', 'Threat Intelligence', 'IOC Correlation'],
      icon: <Network size={32} />,
      color: 'from-blue-500 to-cyan-600',
      github: 'https://drive.google.com/file/d/1MxyNazaRm4OtnvnsBrxi_ynD_KgVZOPb/view?usp=sharing',
      demo: '#',
      hasDetails: true,
      detailedInfo: {
        introduction: "This project demonstrates the design and implementation of a comprehensive SIEM (Security Information and Event Management) system enhanced with Cyber Threat Intelligence (CTI) integration. By leveraging open-source technologies, the system creates a proactive threat detection platform capable of identifying and responding to security threats in real-time with context-aware intelligence.\n\nThe architecture integrates the ELK Stack (Elasticsearch, Logstash, Kibana) with threat intelligence feeds from MISP (Malware Information Sharing Platform) and AlienVault OTX (Open Threat Exchange). This integration enables automated correlation of security events with known Indicators of Compromise (IOCs), significantly improving detection accuracy, reducing false positives, and accelerating incident response times.",
        challenges: [
          "Managing and processing high volumes of security events (millions of logs daily) while maintaining real-time system performance",
          "Reducing false positive alerts through effective threat intelligence correlation and contextual enrichment",
          "Integrating multiple heterogeneous threat intelligence sources (MISP, OTX) into a unified detection pipeline",
          "Creating actionable, prioritized alerts with sufficient context for security teams to respond quickly and effectively",
          "Building scalable detection rules that adapt to evolving threat landscapes without manual intervention"
        ],
        solution: [
          "Threat Intelligence Integration: Connected MISP and AlienVault OTX threat feeds into ELK Stack for continuous real-time IOC matching against incoming security events",
          "Automated Pipelines: Configured automated threat intelligence ingestion pipelines using Filebeat threat modules with scheduled updates and data normalization",
          "Detection Engineering: Developed custom detection rules and correlation queries for domains, IP addresses, file hashes, and URLs with dynamic risk scoring algorithms",
          "Visualization & Dashboards: Built interactive Kibana dashboards for real-time security monitoring, threat hunting, incident investigation, and executive reporting",
          "Validation & Tuning: Successfully detected simulated attack scenarios (phishing, malware C2, data exfiltration) with significantly reduced false positives through CTI enrichment"
        ],
        benefits: [
          "Achieved real-time correlation of security events with global threat intelligence feeds from multiple trusted sources",
          "Reduced false positive alerts by 60% through intelligent IOC matching, risk scoring, and contextual enrichment",
          "Built fully automated threat detection pipeline requiring minimal manual intervention and continuous threat feed updates",
          "Delivered comprehensive visibility into organizational security posture through custom dashboards and threat analytics",
          "Enabled proactive threat hunting capabilities by correlating internal events with external threat intelligence"
        ],
        architectureImage: '/assets/elk-cti-architecture.png'
      }
    },
    {
      title: 'Full IDS/SIEM Deployment with Secure Firewall',
      description: 'Designed and implemented a complete, production-like security infrastructure integrating firewall protection, intrusion detection, and centralized log management to simulate a real-world Security Operations Center (SOC) environment with end-to-end visibility and automated threat response.',
      technologies: ['pfSense', 'Snort IDS', 'Wazuh', 'Elastic Stack', 'Kibana', 'Suricata', 'VLANs', 'VPN', 'Bash', 'Python'],
      icon: <Shield size={32} />,
      color: 'from-red-500 to-orange-600',
      github: '#',
      demo: '#',
      hasDetails: true,
      detailedInfo: {
        introduction: "This project demonstrates the design and implementation of a complete, production-like security infrastructure that simulates a real-world Security Operations Center (SOC) environment. The objective was to build a fully functional security stack integrating firewall protection, intrusion detection, and centralized log management for proactive threat detection and incident response.\n\nThe architecture combines pfSense firewall for network segmentation and traffic control, Snort IDS for deep packet inspection and threat detection, and Wazuh SIEM for centralized log collection and correlation. This integration provides end-to-end visibility across the entire infrastructure with real-time monitoring and automated alerting capabilities.",
        challenges: [
          "Integrating multiple security layers (firewall, IDS, SIEM) into a cohesive detection pipeline",
          "Achieving real-time log correlation across different security tools and data sources",
          "Tuning IDS rules to minimize false positives while maintaining high detection accuracy",
          "Building a unified monitoring dashboard that provides actionable threat intelligence",
          "Simulating realistic attack scenarios to validate detection capabilities and response workflows"
        ],
        solution: [
          "Firewall Layer: Configured and hardened pfSense for network segmentation, traffic control, VPN management, and secure routing between network zones",
          "Intrusion Detection: Deployed Snort IDS on mirrored network interface for deep packet inspection with rule-based threat detection and real-time alerting",
          "SIEM Integration: Integrated Wazuh (SIEM + XDR) for centralized log collection, correlation, and visualization across all security infrastructure",
          "System Hardening: Applied security best practices for Linux and pfSense systems, including rule optimization and secure network zone configuration",
          "Unified Dashboard: Created comprehensive Wazuh-Kibana dashboard visualizing alerts from Snort, firewall logs, and system events for complete visibility"
        ],
        benefits: [
          "Built fully functional SOC-style lab with real-time detection and correlation capabilities",
          "Enabled centralized visibility over all network devices, endpoints, and security events",
          "Achieved proactive threat detection by integrating Snort signatures with Wazuh alert correlation",
          "Successfully simulated and detected multiple attack scenarios (port scanning, brute-force, DNS tunneling)",
          "Strengthened incident response workflows through automated log correlation and alert management"
        ]
      }
    },
    {
      title: 'Secure CI/CD Pipeline with Modern DevSecOps Practices',
      description: 'Implemented a comprehensive secure CI/CD pipeline for a microservices-based application, seamlessly integrating automated security scanning, GitOps deployment, and robust monitoring. Built an end-to-end DevSecOps workflow that embeds security at every stage—from code commit to production deployment—ensuring secure, fast, and reliable software delivery.',
      technologies: ['GitLab CI', 'Docker', 'Kubernetes', 'Argo CD', 'OWASP Dependency-Check', 'Trivy', 'Semgrep', 'Prometheus', 'Grafana', 'Elasticsearch', 'Fluentd', 'Helm', 'Maven'],
      icon: <Workflow size={32} />,
      color: 'from-green-500 to-teal-600',
      github: 'https://drive.google.com/file/d/16NjNY7dfDr9y_KX2U5AmBlfINq_18KiP/view?usp=sharing',
      demo: 'https://gitlab.com/anasselmazdougui/product-microservice',
      hasDetails: true,
      detailedInfo: {
        introduction: "This project demonstrates the implementation of a comprehensive secure CI/CD pipeline for a microservices-based application using modern DevSecOps practices. The objective was to build an end-to-end automated workflow that seamlessly integrates security into every stage of the software development lifecycle—from code commit through build, test, scan, and deployment to production.\n\nThe architecture leverages GitLab CI for continuous integration and deployment automation, Docker for containerization, Kubernetes (Minikube) for orchestration, and Argo CD for GitOps-based deployments. Security is embedded throughout the pipeline with SAST (Static Application Security Testing), SCA (Software Composition Analysis), and container security scanning tools. Comprehensive monitoring via Prometheus, Grafana, and Elasticsearch ensures complete visibility into application performance, security posture, and operational health.",
        challenges: [
          "Integrating multiple security scanning tools (SAST, SCA, container scanning) without significantly impacting pipeline performance and developer velocity",
          "Managing complex microservices deployments across multiple environments (dev, staging, production) with consistent configurations",
          "Ensuring repeatable, auditable deployments while maintaining strict security standards and compliance requirements",
          "Balancing automation speed with thorough security validation, vulnerability scanning, and comprehensive testing",
          "Implementing effective monitoring and observability across distributed microservices architecture with centralized log aggregation"
        ],
        solution: [
          "Automated CI/CD Pipeline: Built comprehensive GitLab CI pipeline with Maven for builds, automated testing, Docker for containerization, and Kubernetes deployment automation",
          "GitOps Integration: Implemented Argo CD for automated, declarative Kubernetes deployments with version-controlled infrastructure as code and automated sync",
          "Security-First Approach: Integrated SAST scanning (Semgrep), SCA vulnerability analysis (OWASP Dependency-Check), and container image scanning (Trivy) at multiple pipeline stages",
          "Monitoring & Observability: Deployed Prometheus for metrics collection, Grafana for real-time visualization, and Elasticsearch with Fluentd for centralized log management and analysis",
          "Pipeline Optimization: Leveraged Docker layer caching, artifact caching, protected branch policies, and custom GitLab runners to maximize efficiency while maintaining security"
        ],
        benefits: [
          "Achieved automated security validation at every pipeline stage, dramatically reducing vulnerability exposure in production",
          "Implemented GitOps approach ensuring consistent, auditable, and version-controlled deployments with complete rollback capabilities",
          "Delivered comprehensive monitoring providing real-time visibility into application health, security events, and performance metrics",
          "Reduced deployment time from hours to minutes while improving reliability through automation and standardization",
          "Enabled proactive vulnerability detection and remediation before production deployment, shifting security left in the development lifecycle"
        ],
        repositories: [
          {
            name: 'Source Code Repository',
            url: 'https://gitlab.com/anasselmazdougui/product-microservice',
            description: 'Main application source code with CI/CD pipeline configuration'
          },
          {
            name: 'Kubernetes Files Repository',
            url: 'https://gitlab.com/nabilmidelt17/produit-microservice-kubernetes',
            description: 'Kubernetes manifests and Helm charts for GitOps deployment'
          }
        ]
      }
    },
    {
      title: 'P2P SecureChat',
      description: 'Developed a peer-to-peer instant messaging application focused on privacy and security, enabling encrypted communications through a fully decentralized P2P network. Built with React.js frontend and C++ backend, implementing end-to-end encryption, real-time WebSocket communication, and localhost-only architecture for maximum security and privacy.',
      technologies: ['React.js', 'C++', 'Drogon Framework', 'Tox Protocol', 'WebSocket', 'Ant Design', 'Vite', 'GoogleLog', 'Copper', 'P2P Networking', 'End-to-End Encryption'],
      icon: <MessageSquare size={32} />,
      color: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/m-elhamlaoui/projet-web-p2p_tox_team',
      demo: '#',
      hasDetails: true,
      detailedInfo: {
        introduction: "P2P SecureChat is a peer-to-peer instant messaging application designed with privacy and security as core principles. The objective was to create a fully decentralized communication platform that enables encrypted conversations between users without relying on centralized servers or third-party intermediaries.\n\nThe architecture combines a modern React.js frontend with a high-performance C++ backend, leveraging the Tox protocol for peer-to-peer communication and Drogon framework for WebSocket connectivity. Each instance runs in complete isolation on localhost, ensuring that communications remain private, secure, and inaccessible to external threats. This design eliminates single points of failure and provides users with complete control over their data.",
        challenges: [
          "Implementing secure peer-to-peer networking without centralized infrastructure or trusted intermediaries",
          "Integrating C++ backend networking layer with modern React.js frontend over WebSocket protocol",
          "Ensuring end-to-end encryption while maintaining real-time communication performance",
          "Preventing XSS attacks and other web-based vulnerabilities in the messaging interface",
          "Managing event loops, message queues, and asynchronous communication for reliability and performance"
        ],
        solution: [
          "Frontend Architecture: Built responsive UI with React.js, Ant Design components, and Vite for fast development. Leveraged React's Virtual DOM to safely escape dynamic content and prevent XSS attacks",
          "Backend Implementation: Developed high-performance C++ backend using Drogon framework for HTTP/WebSocket handling and Tox protocol for decentralized P2P communication layer",
          "Security Model: Implemented localhost-only server listening to ensure each chat instance runs in complete isolation, preventing external access and unauthorized connections",
          "Real-Time Communication: Established WebSocket connections for instant message delivery with Copper event loop queue system for efficient asynchronous processing",
          "Logging & Debugging: Integrated GoogleLog for comprehensive logging, debugging, and performance monitoring throughout the application lifecycle"
        ],
        benefits: [
          "Achieved fully decentralized peer-to-peer architecture eliminating single points of failure and central authority",
          "Implemented end-to-end encryption ensuring complete privacy and security of all communications",
          "Built localhost-only architecture preventing external intrusion and unauthorized access to chat instances",
          "Mitigated XSS vulnerabilities through React's Virtual DOM and secure content rendering practices",
          "Gained deep understanding of P2P protocols, secure communication architectures, and cross-language integration (C++ backend with React frontend)"
        ],
        architectureImage: '/assets/p2p_architecture.png'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-card dark:from-cyber-darker dark:via-gray-950 dark:to-dark-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyber-blue rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-purple rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 cyber-gradient">
          Featured Projects
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Real-world cybersecurity projects demonstrating expertise in SOAR/EDR integration, threat detection, security infrastructure, and DevSecOps
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up border border-cyber-green/30 hover:border-cyber-green/60"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-white">
                  {project.icon}
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded-full text-xs text-gray-300 hover:border-cyber-green/60 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-cyber-blue/20 border border-cyber-blue/50 hover:bg-cyber-blue/30 hover:border-cyber-blue text-white rounded-lg transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Report</span>
                  </a>
                  {project.hasDetails ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green text-white rounded-lg transition-all"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Details</span>
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-cyber-green/20 border border-cyber-green/50 hover:bg-cyber-green/30 hover:border-cyber-green text-white rounded-lg transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Details</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && selectedProject.hasDetails && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-effect rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-neon animate-slide-up border border-cyber-green/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-br ${selectedProject.color} p-6 relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="text-white">
                  {selectedProject.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Objective */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-white">Objective</h4>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedProject.detailedInfo.introduction}
                </p>
              </div>

              {/* Architecture Diagram */}
              {selectedProject.detailedInfo.architectureImage && (
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">Architecture Summary</h4>
                  <div className="bg-gray-800/50 rounded-xl p-4 overflow-hidden border border-cyber-blue/30">
                    <img 
                      src={selectedProject.detailedInfo.architectureImage} 
                      alt="Project Architecture"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Technical Overview */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-white">Technical Overview</h4>
                <div className="space-y-3">
                  {selectedProject.detailedInfo.solution.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-cyber-blue/10 border border-cyber-blue/30 p-4 rounded-lg">
                      <span className="bg-cyber-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-white">Learning Outcomes</h4>
                <ul className="space-y-3">
                  {selectedProject.detailedInfo.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-cyber-purple mt-1 font-bold">✓</span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 text-white">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProject.detailedInfo.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-cyber-green/10 border border-cyber-green/30 p-4 rounded-lg">
                      <span className="text-cyber-green text-xl font-bold">+</span>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repositories */}
              {selectedProject.detailedInfo.repositories && (
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">Project Repositories</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.detailedInfo.repositories.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 bg-cyber-purple/10 rounded-lg hover:shadow-neon-purple transition-all border border-cyber-purple/30 hover:border-cyber-purple/60"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <ExternalLink size={18} className="text-cyber-purple" />
                          <span className="font-semibold text-white">{repo.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{repo.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Team & Supervisor */}
              {(selectedProject.detailedInfo.team || selectedProject.detailedInfo.supervisor) && (
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4 text-white">Team & Collaboration</h4>
                  <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg p-6">
                    {selectedProject.detailedInfo.supervisor && (
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-gray-400">Supervised by:</span>
                        <p className="text-lg font-bold text-white">{selectedProject.detailedInfo.supervisor}</p>
                      </div>
                    )}
                    {selectedProject.detailedInfo.team && (
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Team Members:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.detailedInfo.team.map((member, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cyber-purple/20 rounded-full text-sm text-gray-300 border border-cyber-purple/50"
                            >
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
