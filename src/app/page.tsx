"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiPython, 
  SiLinux, 
  SiKalilinux, 
  SiWireshark, 
  SiSplunk, 
  SiGnubash, 
  SiBurpsuite, 
  SiMetasploit, 
  SiJavascript 
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaWindows } from "react-icons/fa";
import { 
  Mail, 
  ArrowUpRight, 
  Shield, 
  Award, 
  Lock, 
  Activity, 
  X, 
  ArrowRight, 
  ArrowLeft,
  ArrowLeftRight,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Check,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
  Terminal,
  Layers,
  Cpu
} from "lucide-react";

import ShinyText from "@/components/ShinyText";
import SideRays from "@/components/SideRays";
import LogoLoop from "@/components/LogoLoop";
import CrystalizedBall from "@/components/CrystalizedBall";
import SpecularButton from "@/components/SpecularButton";
import PixelSwap from "@/components/PixelSwap";
import AccordionGallery from "@/components/AccordionGallery";
import MagicBento from "@/components/MagicBento";

// Custom Crisp Cyber Vector Icons for Nmap and Wazuh
const NmapIcon = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" strokeDasharray="3 3" opacity="0.5" />
    <circle cx="12" cy="12" r="6" strokeOpacity="0.8" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <line x1="12" y1="2" x2="12" y2="22" strokeOpacity="0.3" />
    <line x1="2" y1="12" x2="22" y2="12" strokeOpacity="0.3" />
    <line x1="12" y1="12" x2="19" y2="5" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const WazuhIcon = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L3 6.5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12v-6L12 2zm-1 14l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
  </svg>
);

export default function Portfolio() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [certFilter, setCertFilter] = useState<'all' | 'industry' | 'offensive' | 'simulation'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [skillTab, setSkillTab] = useState<'offensive' | 'defensive'>('offensive');

  const handleMailClick = () => {
    // Attempt system mailto client
    window.location.href = "mailto:nandhanaks321@gmail.com";
    // Also copy to clipboard for seamless reliability
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("nandhanaks321@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const phrases = [
    "Offensive and Defensive Security Specialist",
    "SC-900 Certified"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentPhrase < phrases.length) {
      const timer = setTimeout(() => {
        setCurrentPhrase(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [currentPhrase, phrases.length]);

  const handleNavClick = (section: string) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 350);
  };

  // Pure White Monochrome Tool Ticker Icons (No Text Labels)
  const logos = [
    { node: <SiBurpsuite size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Burp Suite" /> },
    { node: <SiMetasploit size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Metasploit" /> },
    { node: <NmapIcon size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Nmap" /> },
    { node: <SiWireshark size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Wireshark" /> },
    { node: <SiSplunk size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Splunk" /> },
    { node: <WazuhIcon size={34} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Wazuh" /> },
    { node: <SiKalilinux size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Kali Linux" /> },
    { node: <SiLinux size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Linux OS" /> },
    { node: <FaWindows size={34} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Windows OS" /> },
    { node: <SiPython size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Python" /> },
    { node: <SiJavascript size={34} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="JavaScript" /> },
    { node: <SiGnubash size={36} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300" title="Bash" /> }
  ];

  // Experience Timeline Data (Work & Internship Roles Only)
  const timelineData = [
    {
      type: "work",
      status: "current",
      role: "Cybersecurity Researcher & Trainer",
      company: "Offenso Hackers Academy",
      period: "September 2025 — Present",
      description: "Leading security research, developing hands-on lab environments, and training students across offensive and defensive cybersecurity disciplines.",
      skills: ["Research", "Security Labs", "Training", "Engineering"]
    },
    {
      type: "internship",
      status: "completed",
      role: "Cybersecurity Intern",
      company: "Kerala Police Academy",
      period: "January 2025",
      description: "Conducted malware analysis, threat investigation, and IOC extraction for law enforcement cybersecurity operations.",
      skills: ["Malware Analysis", "Threat Investigation", "IOC Extraction"]
    }
  ];

  // Certifications Data from workspace with High-Res Previews
  const certificationsData = [
    {
      id: "sc-900",
      title: "Microsoft Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      category: "Cloud Security & Identity",
      group: "industry",
      previewImage: "/certificates/sc-900.png",
      file: "/certificates/sc-900.pdf"
    },
    {
      id: "ec-council-ethical-hacking",
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council",
      category: "Offensive Security & Pentesting",
      group: "offensive",
      previewImage: "/certificates/EC-council ethical hacking.png",
      file: "/certificates/EC-council ethical hacking.png"
    },
    {
      id: "ec-council-digital-forensic",
      title: "Digital Forensics Essentials (DFE)",
      issuer: "EC-Council",
      category: "Digital Forensics & Incident Response",
      group: "offensive",
      previewImage: "/certificates/EC-council Digital forensic.png",
      file: "/certificates/EC-council Digital forensic.png"
    },
    {
      id: "palo-alto-secops",
      title: "Security Operations Fundamentals",
      issuer: "Palo Alto Networks",
      category: "SOC & Security Operations",
      group: "industry",
      previewImage: "/certificates/Palo alto security operations.png",
      file: "/certificates/Palo alto security operations.pdf"
    },
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Network Defense & Architecture",
      group: "industry",
      previewImage: "/certificates/cisco intro to cybersecurity.png",
      file: "/certificates/cisco intro to cybersecurity.pdf"
    },
    {
      id: "iit-kanpur",
      title: "Cybersecurity Specialization",
      issuer: "IIT Kanpur",
      category: "Advanced Cybersecurity Research",
      group: "simulation",
      previewImage: "/certificates/IIT kanpur.png",
      file: "/certificates/IIT kanpur.pdf"
    },
    {
      id: "deloitte-simulation",
      title: "Cybersecurity Job Simulation",
      issuer: "Deloitte / Forage",
      category: "Enterprise Incident Triage & Response",
      group: "simulation",
      previewImage: "/certificates/deloitte.png",
      file: "/certificates/deloitte.pdf"
    },
    {
      id: "tata-simulation",
      title: "Cybersecurity Analyst Simulation",
      issuer: "Tata Consultancy Services / Forage",
      category: "Vulnerability & Security Advisory",
      group: "simulation",
      previewImage: "/certificates/tata.png",
      file: "/certificates/tata.pdf"
    },
    {
      id: "nptel-privacy",
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL / IIT",
      category: "OSINT & Privacy Defense",
      group: "simulation",
      previewImage: "/certificates/Privacy And Security - NPTEL.png",
      file: "/certificates/Privacy And Security - NPTEL.pdf"
    },
    {
      id: "nptel-usable-security",
      title: "Systems and Usable Security",
      issuer: "NPTEL / IIT",
      category: "System Hardening & Cryptography",
      group: "simulation",
      previewImage: "/certificates/Systems and Usable Security - NPTEL.png",
      file: "/certificates/Systems and Usable Security - NPTEL.pdf"
    }
  ];

  // Projects Data with Strict Cybersecurity Researcher Knowledge Base
  const projectsData = [
    {
      id: "veylance",
      title: "VEYLANCE",
      desc: "Full-Stack SOC Investigation & Simulation Platform.",
      image: "/assets/project 1.jpg",
      domain: "Defensive Operations / Blue Team",
      liveLink: "https://your-veylance-link-here.com",
      details: {
        objective: "To build an end-to-end SOC investigation platform that models the progression of a security incident from telemetry generation to incident closure.",
        problem: "In conventional environments, SIEM monitoring, detection rules, IOC analysis, and digital forensics are explored in silos. This makes it difficult for analysts to understand the complete investigation lifecycle. VEYLANCE unifies these into one controlled workflow.",
        overview: "A unified SOC platform modeling the complete attack lifecycle—from raw endpoint and network telemetry ingestion to automated case documentation and closure.",
        skillsResearcher: "Detection engineering, alert triage, MITRE ATT&CK integration, forensic timeline reconstruction, and incident reporting semantics.",
        skillsStudent: "Full-stack application architecture, database management, and understanding basic SOC workflows.",
        audience: "SOC Analysts, Detection Engineers, Blue Teams, and Cybersecurity Students.",
        futureEnhancements: "Completing production backend integration, adding advanced multi-stage synthetic attack scenarios, and strengthening horizontal WebSocket scaling.",
        keyLearnings: "Understanding how individual security telemetry becomes an actionable detection signal, and the engineering challenge of maintaining detection integrity without hardcoding alerts.",
        techStack: "React, TypeScript, Vite, TailwindCSS, Python, FastAPI, PostgreSQL, SQLite, WebSockets",
        statusBadge: "Architecture & Pipelines Verified"
      }
    },
    {
      id: "threat-intel",
      title: "Threat Intelligence Aggregator",
      desc: "Real-time threat feed consolidation and IOC triage.",
      image: "/assets/project 2.jpg",
      domain: "Threat Intelligence & SecOps",
      liveLink: "https://threat-intel-aggregator-pa9c9rdgja5iqpyh4teskk.streamlit.app/",
      details: {
        objective: "To create a centralized dashboard that aggregates and visualizes real-time intelligence from multiple threat feeds.",
        problem: "SOC analysts frequently face alert fatigue and spend excessive time manually parsing fragmented threat data across disjointed external feeds (VirusTotal, Shodan, AbuseIPDB) during incident triage.",
        overview: "A centralized threat intelligence console aggregating live feeds, automating risk metrics, and presenting unified correlation graphs for rapid triage.",
        skillsResearcher: "Automated risk categorization (High, Medium, Low), bulk IOC processing, and accelerating the incident triage phase.",
        skillsStudent: "API integration, Python scripting, and data visualization.",
        audience: "Threat Hunters, Incident Responders, and SOC Teams.",
        futureEnhancements: "Integrating custom STIX/TAXII feeds and enabling real-time alerting via Webhooks (e.g., Slack/Teams integration).",
        keyLearnings: "Securely managing API interactions, handling rate limits, and formatting complex JSON data into compliance-ready PDF/CSV reports.",
        techStack: "Python, Streamlit, Plotly, REST APIs, VirusTotal, Shodan, AbuseIPDB",
        statusBadge: "Live Production App"
      }
    },
    {
      id: "modus",
      title: "MODUS",
      desc: "Cybersecurity Learning Management & Interactive Lab System.",
      image: "/assets/project 6.jpg",
      domain: "Adversary Emulation & Training",
      details: {
        objective: "To design a unified cybersecurity-focused Learning Management System (LMS) combining training management with hands-on security practice.",
        problem: "Managing students, learning resources, and practical cybersecurity exercises across separate tools creates massive administrative overhead and limits visibility into student progress.",
        overview: "An integrated cybersecurity LMS orchestrating structured instructional modules, CTF flag submission logic, and browser-accessible simulated terminal labs.",
        skillsResearcher: "Designing security learning methodologies, structuring CTF-style challenges, integrating Linux terminal simulators, and utilizing AI-assisted development workflows.",
        skillsStudent: "UI/UX design, state management, and basic API routing.",
        audience: "Cybersecurity Trainers, Educational Institutions, and Security Students.",
        futureEnhancements: "Cloud-based dynamic VM provisioning for isolated lab environments and expanding into advanced SOC simulator modules.",
        keyLearnings: "Translating theoretical cybersecurity training requirements into practical application features and securely structuring assessment/examination workflows.",
        techStack: "React, Vite, Tailwind CSS, Python, Flask, SQLite, JWT Authentication",
        statusBadge: "Lab Platform & Exam Workflows Verified"
      }
    },
    {
      id: "workledger",
      title: "WorkLedger",
      desc: "Personal Productivity & Operational Integrity Platform.",
      image: "/assets/project 4.jpg",
      domain: "Systems Engineering & Operational Analytics",
      details: {
        objective: "To develop a personal productivity intelligence platform for tracking, understanding, and optimizing free-time utilization.",
        problem: "Generic task timers fail to separate scheduled capacity from actual work. They mix overtime, learning, and regular work, which distorts true productivity metrics and idle time analysis.",
        overview: "A deterministic operational ledger enforcing strict mathematical accounting rules to isolate base working capacity, extra study, and idle intervals.",
        skillsResearcher: "Complex business logic design (time accounting), separating regular capacity from extra work without double-counting, and developing an accurate analytics engine.",
        skillsStudent: "Frontend-backend communication, relational database design, and CRUD operations.",
        audience: "Professionals, Researchers, and Students seeking advanced time and productivity analytics.",
        futureEnhancements: "Automated insights based on historical activity patterns and schedule-aware learning suggestions.",
        keyLearnings: "Centralizing calculation logic in the backend (rather than frontend) to ensure data consistency, and handling edge cases like holidays and out-of-hours work natively.",
        techStack: "Python, Flask, Vanilla JavaScript, HTML, CSS, SQLite",
        statusBadge: "Operational Accounting Engine Verified"
      }
    },
    {
      id: "vulnai",
      title: "VulnAI",
      desc: "AI-driven vulnerability assessment engine.",
      image: "/assets/project 3.jpg",
      domain: "Vulnerability Management & Predictive ML",
      details: {
        objective: "To develop an AI-driven vulnerability assessment engine that prioritizes risks based on actual exploitability.",
        problem: "Traditional vulnerability scanners generate overwhelming volumes of false positives and prioritize solely on static CVSS scores, hindering effective remediation planning.",
        overview: "An intelligent vulnerability assessment engine applying machine learning classifiers to predict active exploitability and weaponization in the wild.",
        skillsResearcher: "Predictive security modeling, contextualizing vulnerability severity beyond CVSS, and designing targeted remediation workflows.",
        skillsStudent: "Machine Learning model training, data preprocessing, and web dashboard integration.",
        audience: "Security Engineers, Vulnerability Management Teams, and DevSecOps.",
        futureEnhancements: "Integrating real-time exploit intelligence (e.g., CISA KEV catalog integration) and automated patching ticket generation.",
        keyLearnings: "Balancing false positives and negatives in ML security models and training algorithms to understand threat actor behavior regarding exploitability.",
        techStack: "Python, Scikit-learn, NumPy, Flask, Streamlit, CVE/NVD Feeds",
        statusBadge: "Predictive Security Model Verified"
      }
    },
    {
      id: "ddos-detect",
      title: "DDoS Detection Engine",
      desc: "ML-based network anomaly detection for SDN.",
      image: "/assets/project 5.jpg",
      domain: "Network Security & Anomaly Detection",
      details: {
        objective: "To design and implement a machine learning-based network anomaly detection system in a Software-Defined Networking (SDN) environment.",
        problem: "Volumetric and protocol-based DDoS attacks rapidly overwhelm critical network infrastructure before manual mitigation strategies can be successfully deployed.",
        overview: "An SDN-integrated anomaly detection engine that monitors live OpenFlow packet rates, computes flow entropy, and dynamically triggers controller mitigation rules.",
        skillsResearcher: "Extracting statistical features from live packet flows, dynamic threshold monitoring, and SDN-based rapid mitigation engineering.",
        skillsStudent: "Network simulation (Mininet), packet capturing, and implementing deep learning models.",
        audience: "Network Security Engineers, Infrastructure Teams, and NOC/SOC Analysts.",
        futureEnhancements: "Automated real-time traffic blocking via SDN controller APIs and extending detection capabilities to Application-Layer (L7) DDoS attacks.",
        keyLearnings: "Establishing baseline traffic patterns in simulated environments and identifying anomalies accurately without disrupting legitimate traffic spikes.",
        techStack: "Mininet, Ryu Controller, TensorFlow, Wireshark, Scikit-learn, OpenFlow",
        statusBadge: "SDN Testbed & Anomaly Mitigation Verified"
      }
    }
  ];

  const filteredCertifications = certFilter === 'all'
    ? certificationsData
    : certificationsData.filter(cert => cert.group === certFilter);

  return (
    <div className="bg-[#050507] text-white font-sans h-screen w-screen overflow-hidden relative selection:bg-white/20 selection:text-white">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-30px); filter: blur(4px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }
        @keyframes zoomInView {
          from { opacity: 0; transform: scale(0.92); filter: blur(6px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-down { animation: fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-zoom-in { animation: zoomInView 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fade-transition { transition: opacity 0.35s ease; }
        .fade-out { opacity: 0; }
        .fade-in { opacity: 1; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Preloader */}
      <div
        className={`z-[100] fixed inset-0 bg-[#050507] flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 text-center px-6">
          {currentPhrase < phrases.length && (
            <ShinyText
              key={currentPhrase}
              className="text-sm md:text-2xl tracking-[0.3em] font-display uppercase font-bold text-white"
              color="#94a3b8"
              shineColor="#ffffff"
              speed={2}
              trigger="view"
              text={phrases[currentPhrase]}
            />
          )}
        </div>
      </div>

      {/* Restored Original Ambient Background Rays */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <SideRays 
          rayColor1="#06b6d4" 
          rayColor2="#3b82f6" 
          speed={2.5} 
          intensity={2} 
          origin="top-right" 
          spread={2.5}
        />
      </div>

      {/* Top Navbar (Clean Typography Without Pill Outlines) */}
      {!isLoading && (
        <nav 
          className="absolute top-8 left-1/2 -translate-x-1/2 z-40 px-6 md:px-8 py-3 rounded-full backdrop-blur-xl bg-white/[0.04] border border-white/10 shadow-2xl opacity-0 animate-fade-in-down" 
          style={{ animationDelay: '2.5s' }}
        >
          <ul className="flex items-center gap-4 md:gap-8 text-[10px] md:text-xs font-display tracking-[0.2em] text-slate-400 uppercase">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'certifications', label: 'Certifications' }
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`transition-colors duration-300 py-1 ${
                    activeSection === id 
                      ? 'text-white font-bold tracking-wider' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Floating Toast Notification on Email Copy */}
      {copiedEmail && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full bg-[#050508]/95 border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl flex items-center gap-2.5 animate-[fadeIn_0.2s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Email copied: nandhanaks321@gmail.com</span>
        </div>
      )}

      {/* Vertical Social Links (Far Left Rail) */}
      {!isLoading && (
        <div className="hidden md:flex flex-col items-center gap-5 absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/20 mb-1"></div>
          <a href="https://linkedin.com/in/nandhana-k-s-49b79827b" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-lg" title="LinkedIn Profile"><FaLinkedin size={18} /></a>
          <a href="https://github.com/Nandhanaks2004" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-lg" title="GitHub Profile"><FaGithub size={18} /></a>
          <button onClick={handleMailClick} className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-lg cursor-pointer" title="Email: nandhanaks321@gmail.com (Click to open / copy)"><Mail size={18} /></button>
          <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-white/20 mt-1"></div>
        </div>
      )}

      {/* MAIN CONTENT VIEWPORT */}
      <div className={`relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 lg:px-20 flex items-center justify-center fade-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        
        {/* HERO SECTION */}
        {activeSection === 'hero' && !isLoading && (
          <div className="flex flex-col text-left max-w-3xl w-full">
            {/* Live Status Pill */}
            <div className="mb-6 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center gap-2.5 backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-full px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Cybersecurity Researcher & Specialist</span>
              </div>
            </div>
            
            {/* Hi, I'm Nandhana K S with High-Gloss Shiny Text */}
            <div className="mb-2 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.8s' }}>
              <span className="font-display text-xl md:text-3xl text-slate-400 font-light tracking-wide">
                Hi, I'm
              </span>
            </div>
            <div className="mb-6 opacity-0 animate-fade-in-down flex" style={{ animationDelay: '1.2s' }}>
              <ShinyText
                text="Nandhana K S"
                className="text-[clamp(3.4rem,7.5vw,5.8rem)] font-black text-white leading-none tracking-tight font-display"
                color="#94a3b8"
                shineColor="#ffffff"
                speed={2.5}
                trigger="loop"
              />
            </div>

            {/* Sub-headline in High-Gloss Shiny White */}
            <h2 className="font-display font-medium text-xl md:text-2xl lg:text-3xl leading-snug mb-6 tracking-wide opacity-0 animate-fade-in-down" style={{ animationDelay: '1.8s' }}>
              <ShinyText
                text="Penetration Testing, SOC Operations & Digital Forensics"
                className="text-white font-medium"
                color="#94a3b8"
                shineColor="#ffffff"
                speed={3}
                trigger="loop"
              />
            </h2>
            
            {/* Bio statement */}
            <p className="font-sans text-slate-300 text-sm md:text-base max-w-2xl font-normal leading-relaxed mb-10 tracking-wide opacity-0 animate-fade-in-down" style={{ animationDelay: '2.4s' }}>
              Investigating attack vectors, executing offensive simulations, triaging telemetry, and engineering end-to-end incident response workflows. Fusing adversary emulation with disciplined blue-team defense.
            </p>

            {/* Specular Action Buttons */}
            <div className="flex items-center gap-5 opacity-0 animate-fade-in-down" style={{ animationDelay: '3.0s' }}>
              <SpecularButton
                onClick={() => handleNavClick('projects')}
                size="md"
                baseColor="#050507"
                lineColor="#ffffff"
                tint="#ffffff"
                tintOpacity={0.2}
                blur={10}
                textColor="#ffffff"
                className="font-display tracking-widest uppercase text-xs"
              >
                Explore Work
              </SpecularButton>
              <SpecularButton
                onClick={() => setShowResumeModal(true)}
                size="md"
                baseColor="#050507"
                lineColor="#ffffff"
                tint="#ffffff"
                tintOpacity={0.2}
                blur={10}
                textColor="#ffffff"
                className="font-display tracking-widest uppercase text-xs"
              >
                Resume <ArrowUpRight size={16} />
              </SpecularButton>
            </div>
          </div>
        )}

        {/* ABOUT SECTION */}
        {activeSection === 'about' && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-zoom-in">
            {/* Left Column: Interactive 3D Sphere */}
            <div className="relative w-full h-[380px] lg:h-[480px] flex justify-center items-center">
              <div className="absolute inset-0 z-10 opacity-80">
                <CrystalizedBall
                  preset="abyss"
                  size={0.8}
                  crackle={0.5}
                  fill={0.7}
                  interactive
                  hoverStrength={0.8}
                />
              </div>
            </div>
            
            {/* Right Column: Narrative with Shiny Text */}
            <div className="flex flex-col text-left justify-center z-20">
              <div className="mb-3">
                <ShinyText
                  text="ABOUT ME"
                  className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-white font-bold"
                  color="#94a3b8"
                  shineColor="#ffffff"
                  speed={2.5}
                  trigger="loop"
                />
              </div>
              <h4 className="font-display font-bold text-xs md:text-sm text-slate-300 tracking-[0.25em] uppercase mb-5">
                Microsoft SC-900 Certified Specialist
              </h4>
              <h2 className="font-display font-bold text-2xl lg:text-3xl leading-tight mb-5">
                <ShinyText
                  text="I am a Cybersecurity Professional specializing in offensive and defensive security operations."
                  className="text-white font-bold"
                  color="#94a3b8"
                  shineColor="#ffffff"
                  speed={3.5}
                  trigger="loop"
                />
              </h2>
              <p className="font-sans font-normal text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-6">
                Fusing deep offensive knowledge—thinking like an adversary—with disciplined defensive strategy to safeguard digital frontiers. From digital forensics to real-time SOC investigations and interactive security research.
              </p>
              <div>
                <span className="backdrop-blur-md bg-white/[0.04] border border-white/10 rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase inline-block text-white">
                  Currently: Cybersecurity Researcher & Trainer at Offenso Hackers Academy
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SKILLS SECTION: Single Tap-to-Swap Card with Refined Compact Spacing */}
        {activeSection === 'skills' && (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center animate-zoom-in min-h-full pt-20 md:pt-24 pb-4">
            {/* Clean Section Title with Shiny Text */}
            <div className="text-center mb-4 md:mb-5">
              <ShinyText
                text="WHAT I OFFER"
                className="font-display text-base md:text-lg tracking-[0.35em] uppercase font-bold text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.25)]"
                color="#cbd5e1"
                shineColor="#ffffff"
                speed={2.5}
                trigger="loop"
              />
            </div>

            {/* Single Interactive Tap-to-Swap Card with Framer Motion (Tap card to toggle Offensive <-> Defensive) */}
            <div 
              className="w-full max-w-2xl mx-auto mb-4 md:mb-5 cursor-pointer select-none"
              onClick={() => setSkillTab(prev => prev === 'offensive' ? 'defensive' : 'offensive')}
              title="Click card to toggle domain perspective"
            >
              <AnimatePresence mode="wait">
                {skillTab === 'offensive' ? (
                  <motion.div
                    key="offensive"
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-medium">Domain Perspective</span>
                        <h4 className="font-display text-lg md:text-xl font-bold text-white tracking-wide mt-0.5">
                          Offensive Security
                        </h4>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/10 text-white border border-white/15 uppercase font-medium">
                          Red Team
                        </span>
                        <div 
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 group-hover:text-white transition-all shadow-md group-hover:rotate-180 duration-500" 
                          title="Click to toggle perspective"
                        >
                          <ArrowLeftRight size={14} />
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3.5">
                      Proactively uncovering attack surfaces through deep exploitation, privilege escalation, and adversary emulation across web, cloud, and enterprise infrastructure.
                    </p>

                    <ul className="space-y-2 mb-4 text-xs text-slate-200 font-sans">
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Web Application & API Penetration Testing (OWASP Top 10, REST/GraphQL)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Active Directory Exploitation & Windows Privilege Escalation</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Android Mobile Application Pentesting (Static & Dynamic APK Audits)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Vulnerability Assessment, Threat Modeling & Proof-of-Concept Verification</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Security Lab Architecture & Custom Exploit Scripting (Python / Bash)</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10">
                      {["Burp Suite", "Metasploit", "Nmap", "Kali Linux", "Active Directory", "Android Pentest", "Python", "Bash"].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-wider bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="defensive"
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-medium">Domain Perspective</span>
                        <h4 className="font-display text-lg md:text-xl font-bold text-white tracking-wide mt-0.5">
                          Defensive Operations
                        </h4>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/10 text-white border border-white/15 uppercase font-medium">
                          Blue Team
                        </span>
                        <div 
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 group-hover:text-white transition-all shadow-md group-hover:rotate-180 duration-500" 
                          title="Click to toggle perspective"
                        >
                          <ArrowLeftRight size={14} />
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3.5">
                      Guarding enterprise infrastructure through real-time telemetry analysis, digital forensics, SIEM correlation, and disciplined incident containment.
                    </p>

                    <ul className="space-y-2 mb-4 text-xs text-slate-200 font-sans">
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>SOC Telemetry Monitoring & SIEM Incident Correlation (Splunk & Wazuh)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Real-Time Malware Threat Triage, Static Inspection & IOC Extraction</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Digital Forensics & Incident Response (DFIR Artifacts, Autopsy & Volatility)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Network Traffic Deep Packet Inspection & Anomaly Hunting (Wireshark)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                        <span>Cloud Security Posture, Identity Governance & IAM Compliance (SC-900)</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10">
                      {["Splunk", "Wazuh", "Wireshark", "Autopsy", "VirusTotal", "SC-900", "Volatility", "Linux/Windows"].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono tracking-wider bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Branded Tool Loop Ticker (Pure White Icons Only, No Names) */}
            <div className="w-full backdrop-blur-md bg-white/[0.02] border border-white/10 rounded-xl py-3 px-5 shadow-xl">
              <LogoLoop
                logos={logos}
                speed={60}
                direction="left"
                logoHeight={32}
                gap={45}
                fadeOut={true}
                fadeOutColor="#050507"
                scaleOnHover={true}
              />
            </div>
          </div>
        )}

        {/* PROJECTS SECTION */}
        {activeSection === 'projects' && (
          <div className="w-full flex flex-col items-center justify-center animate-[fadeIn_0.8s_ease-out_forwards] mt-10">
            {/* Clean Section Title with Shiny Text */}
            <div className="mb-10 text-center">
              <ShinyText
                text="FEATURED ARCHITECTURE"
                className="font-display text-sm md:text-base tracking-[0.35em] uppercase font-bold text-white"
                color="#94a3b8"
                shineColor="#ffffff"
                speed={2.5}
                trigger="loop"
              />
            </div>

            <section className="w-full max-w-[1400px] mx-auto px-4">
              <AccordionGallery
                items={projectsData.map(p => ({
                  image: p.image,
                  label: p.title,
                  desc: p.desc,
                  onClick: () => setActiveCaseStudy(p)
                }))}
                defaultIndex={-1}
                expandRatio={0.42}
                height={500}
                gap={16}
                radius={24}
              />
            </section>
          </div>
        )}

        {/* EXPERIENCE SECTION: Two-Column Split Layout with Transparent Ambient Background */}
        {activeSection === 'experience' && (
          <div className="w-full h-full max-w-6xl mx-auto px-6 py-24 md:py-32 overflow-y-auto no-scrollbar">
            {/* Section Heading in Bold Pure Metallic Shiny Text */}
            <div className="text-center mb-20 md:mb-24">
              <ShinyText
                text="WHERE I'VE WORKED & LEARNED"
                className="font-display text-2xl md:text-3xl tracking-[0.3em] uppercase font-bold text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.25)]"
                color="#cbd5e1"
                shineColor="#ffffff"
                speed={2.5}
                trigger="loop"
              />
            </div>

            {/* Two-Column Grid Implementation with Framer Motion */}
            <div className="max-w-4xl mx-auto pb-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 mb-16 relative group">
                    {/* Left Column (Dates - md:col-span-3, Clean & Minimal without Redundant Status Badges) */}
                    <div className="md:col-span-3 md:text-right pt-0.5">
                      <span className="text-slate-400 font-mono text-sm tracking-widest block">
                        {item.period}
                      </span>
                    </div>

                    {/* Right Column (Content & Line - md:col-span-9) */}
                    <div className="md:col-span-9 border-l border-white/10 pl-8 md:pl-10 relative">
                      {/* Timeline Dot Indicator: Blinking beacon for current role, emerald checkmark for completed internship */}
                      {item.status === 'current' ? (
                        <div 
                          className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06b6d4] group-hover:scale-125 transition-transform duration-300"
                          title="Currently Active"
                        >
                          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-ping opacity-75"></span>
                          <span className="absolute w-2 h-2 rounded-full bg-cyan-400"></span>
                        </div>
                      ) : (
                        <div 
                          className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_12px_rgba(52,211,153,0.5)] group-hover:scale-125 transition-transform duration-300"
                          title="Completed"
                        >
                          <Check size={10} className="text-emerald-300 stroke-[3]" />
                        </div>
                      )}

                      {/* Content Card (Clean, text-focused, no heavy background box) */}
                      <div>
                        <h3 className="text-xl text-slate-100 font-bold tracking-wide mb-1 group-hover:text-cyan-300 transition-colors font-display">
                          {item.role}
                        </h3>
                        <p className="text-slate-400 font-medium mb-4">
                          {item.company}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                          {item.description}
                        </p>

                        {/* Skills/Tags Container */}
                        {item.skills && item.skills.length > 0 && (
                          <div className="flex flex-wrap">
                            {item.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-mono tracking-wider mr-2 mb-2 inline-block hover:bg-white/10 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS SECTION: Clean Rows Without Chunky Code Boxes */}
        {activeSection === 'certifications' && (
          <div className="w-full max-w-5xl mx-auto flex flex-col justify-center animate-zoom-in h-full pt-16 pb-8">
            {/* Clean Section Title with Shiny Text */}
            <div className="text-center mb-8">
              <ShinyText
                text="CREDENTIALS & ACCREDITATIONS"
                className="font-display text-sm md:text-base tracking-[0.35em] uppercase font-bold text-white"
                color="#94a3b8"
                shineColor="#ffffff"
                speed={2.5}
                trigger="loop"
              />
            </div>

            {/* Category Filter Pills in Minimal Monochrome Glass */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[
                { id: 'all', label: 'All Credentials (10)' },
                { id: 'industry', label: 'Industry Certifications' },
                { id: 'offensive', label: 'Offensive & DFIR' },
                { id: 'simulation', label: 'Simulations & Research' }
              ].map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setCertFilter(filter.id as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    certFilter === filter.id
                      ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Clean Credential Strips with Cascading Deck Entrance Animation */}
            <div className="flex-1 max-h-[60vh] overflow-y-auto no-scrollbar space-y-3 pr-2">
              <AnimatePresence mode="popLayout">
                {filteredCertifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onClick={() => setSelectedCert(cert)}
                    className="backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 cursor-pointer group shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-display text-sm md:text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                          <span className="text-white font-medium">{cert.issuer}</span>
                          <span>•</span>
                          <span className="font-mono text-[11px] text-slate-400">{cert.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Clean Action Button */}
                    <div className="self-end md:self-center px-4 py-2 rounded-xl bg-white/5 group-hover:bg-cyan-500/15 border border-white/15 group-hover:border-cyan-500/30 text-xs font-display tracking-wider uppercase text-white flex items-center gap-2 transition-all flex-shrink-0">
                      <span>View Credential</span>
                      <ExternalLink size={14} className="text-cyan-400" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>

      {/* FULLSCREEN CERTIFICATE VIEWER LIGHTBOX (Zero Browser Plugins, Pure Theme Integration) */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 md:p-6 animate-[fadeIn_0.25s_ease-out]"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl overflow-hidden relative shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 bg-[#09090d] animate-[zoomInView_0.3s_cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Themed Header Bar */}
            <div className="w-full px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FileText size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-white font-display truncate">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                    <span className="text-cyan-400 font-medium">{selectedCert.issuer}</span>
                    <span>•</span>
                    <span className="truncate">{selectedCert.category}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={selectedCert.file}
                  download
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-all shadow-md"
                  title="Download File"
                >
                  <Download size={13} className="text-cyan-400" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-all shadow-md"
                  title="Open in Full Tab"
                >
                  <ExternalLink size={13} />
                  <span className="hidden sm:inline">Open</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all ml-1"
                  title="Close Modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Document Content Viewport: Pure High-Res Render (Zero Scrollbars, Zero Iframe Plugin Controls) */}
            <div className="w-full flex-1 bg-[#050508] p-3 sm:p-6 flex items-center justify-center overflow-hidden relative select-none">
              <img
                src={selectedCert.previewImage || selectedCert.file}
                alt={selectedCert.title}
                className="max-h-[80vh] max-w-full w-auto object-contain rounded-2xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      )}

      {/* THEMED RESUME MODAL VIEWER (Zero Browser Plugins, Entire 1-Page Viewport) */}
      {showResumeModal && (
        <div 
          onClick={() => setShowResumeModal(false)}
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 md:p-6 animate-[fadeIn_0.25s_ease-out]"
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="w-full max-w-5xl h-[92vh] flex flex-col rounded-3xl overflow-hidden relative shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 bg-[#09090d] animate-[zoomInView_0.3s_cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Themed Header Bar */}
            <div className="w-full px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between gap-4 flex-shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <FileText size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-white font-display truncate">
                    Nandhana K S — Professional Curriculum Vitae
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 font-medium">Cybersecurity Specialist</span> • Complete 1-Page Document
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="/resume.pdf"
                  download="Nandhana_KS_Resume.pdf"
                  className="px-4 py-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-mono text-cyan-200 flex items-center gap-2 transition-all shadow-md font-semibold"
                  title="Download Resume PDF"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-mono text-white flex items-center gap-1.5 transition-all shadow-md"
                  title="Open Original in New Tab"
                >
                  <ExternalLink size={13} />
                  <span className="hidden sm:inline">Open</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all ml-1"
                  title="Close Resume"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Document Content Viewport: Fits Entire Single Page on Screen with Zero Scrollbars */}
            <div className="w-full flex-1 bg-[#050508] p-3 sm:p-6 flex items-center justify-center overflow-hidden relative select-none">
              <img
                src="/resume-preview.png"
                alt="Nandhana K S Resume"
                className="max-h-[81vh] max-w-full w-auto object-contain rounded-xl border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
              />
            </div>
          </div>
        </div>
      )}

      {/* CASE STUDY OVERLAY WITH PRISM/PIXEL TRANSITION */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-[9999] bg-transparent">
          <CaseStudyTransition project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
        </div>
      )}
    </div>
  );
}

const CaseStudyTransition = ({ project, onClose }: { project: any; onClose: () => void }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1100);
    const t3 = setTimeout(() => setShowDetails(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full h-full relative animate-slideDownFull bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <PixelSwap
        active={showDetails}
        trigger="manual"
        pixelSize={250}
        duration={700}
        pixelDuration={200}
        pattern="diagonal"
        className="w-full h-full"
        aspectRatio="auto"
        firstContent={
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className={`transition-opacity duration-700 ${phase === 1 && !showDetails ? 'opacity-100' : 'opacity-0'} px-4`}>
              <ShinyText 
                text={project.title} 
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-center" 
                color="#000000"
                shineColor="#a8a29e" 
                speed={2} 
              />
            </div>
          </div>
        }
        secondContent={
          <div className="h-full w-full bg-[#050507] p-4 md:p-6 lg:p-8 overflow-y-auto no-scrollbar flex flex-col relative z-20">
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 md:left-6 text-slate-400 hover:text-white transition-all z-30 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-2.5 flex items-center justify-center cursor-pointer shadow-lg"
              title="Return to Projects"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="relative z-10 w-full flex flex-col items-center max-w-6xl mx-auto my-auto py-6">
              {/* Scaled High-Visibility Title with Domain Perspective */}
              <div className="text-center mb-6">
                <span className="text-[10px] md:text-[11px] font-mono tracking-[0.28em] uppercase text-slate-400 font-medium block mb-1.5">
                  {project.domain || "Cybersecurity Architecture"}
                </span>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider">
                  {project.title}
                </h2>
              </div>
              
              <div className="w-full flex-grow">
                {phase >= 2 && (
                  <MagicBento
                    data={[
                      { 
                        color: '#050507', 
                        title: 'The Problem Solved', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.problem}</p>`, 
                        label: 'The Challenge' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Primary Objective', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.objective}</p>`, 
                        label: 'Mission & Goal' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Architecture Overview', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.overview}</p>`, 
                        label: 'System Engineering' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Researcher Competencies', 
                        description: `<div class="text-xs text-slate-200 leading-relaxed font-sans space-y-1"><p class="text-slate-300 text-xs leading-relaxed">${project.details.skillsResearcher}</p></div>`, 
                        label: 'Research & Defense' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Engineering Foundation', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.skillsStudent}</p>`, 
                        label: 'Student & Dev Skills' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Target Audience', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.audience}</p>`, 
                        label: 'Users & Scope' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Key Engineering Learnings', 
                        description: `<p class="leading-relaxed text-slate-300 text-xs">${project.details.keyLearnings}</p>`, 
                        label: 'Critical Insights' 
                      },
                      { 
                        color: '#050507', 
                        title: 'Tooling & Verification', 
                        description: `<div class="space-y-2.5 pt-0.5"><div class="font-mono text-xs text-white leading-relaxed flex flex-wrap gap-1.5">${project.details.techStack.split(', ').map((t: string) => `<span class="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px]">${t}</span>`).join('')}</div><div class="text-[11px] text-slate-400 font-mono leading-relaxed"><span class="text-white/80 font-medium">Roadmap:</span> ${project.details.futureEnhancements}</div>${project.liveLink && !project.liveLink.includes('your-veylance-link') ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center text-white transition-all gap-2 group shadow-lg mt-1.5"><span class="uppercase tracking-widest text-xs font-bold">Launch Live App</span><svg class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>` : `<div class="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white font-mono mt-1"><span class="truncate">${project.details.statusBadge || "Verified Architecture"}</span><span class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span></div>`}</div>`, 
                        label: 'Stack & Roadmap' 
                      }
                    ]}
                    textAutoHide={false}
                    enableStars={false}
                    enableSpotlight={true}
                    spotlightRadius={380}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={false}
                    clickEffect={true}
                    glowColor="255, 255, 255"
                  />
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
