/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Shield, 
  MapPin, 
  Users, 
  MessageCircle, 
  FileText, 
  AlertTriangle, 
  UserX, 
  FileWarning, 
  Landmark, 
  Search, 
  FileCheck, 
  Gavel, 
  FileSearch, 
  Target, 
  ChevronRight, 
  Star, 
  Download, 
  Phone, 
  Mail, 
  QrCode,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/80 backdrop-blur-lg border-b border-white/5 py-5 px-6 md:px-12 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 border border-brand-gold flex items-center justify-center">
        <Shield className="text-brand-gold w-6 h-6" />
      </div>
      <div>
        <h1 className="text-xl font-medium leading-none tracking-tight">ConstructMe</h1>
        <p className="text-[9px] text-brand-gold font-sans font-bold tracking-[0.15em] uppercase mt-1">Risk Intelligence</p>
      </div>
    </div>
    
    <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase font-semibold tracking-[0.1em]">
      <a href="#" className="hover:text-brand-gold transition-colors">Solutions</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Industries</a>
      <a href="#" className="hover:text-brand-gold transition-colors">About Us</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Insights</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
    </div>

    <button className="hidden sm:flex items-center gap-2 bg-transparent border border-brand-gold/50 text-white px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-brand-gold hover:text-brand-deep transition-all">
      Book a Demo <ChevronRight className="w-4 h-4 ml-1" />
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-brand-deep">
    {/* Architectural Background */}
    <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0">
      <img 
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
        alt="Modern Architectural Risk Intelligence" 
        className="w-full h-full object-cover grayscale-[30%] contrast-[1.2]"
        referrerPolicy="no-referrer"
      />
      {/* Dark overlays to blend */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/60 to-transparent"></div>
      <div className="absolute inset-0 bg-brand-deep/20"></div>
      
      {/* Geometric Overlay Lines */}
      <svg className="absolute inset-0 w-full h-full text-brand-gold/20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 40 L40 40 L60 20 L100 20" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <path d="M0 60 L30 60 L50 40 L100 40" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <path d="M0 80 L20 80 L40 60 L100 60" fill="none" stroke="currentColor" strokeWidth="0.1" />
      </svg>
    </div>

    <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05] font-serif font-light">
          Build with Confidence.<br />
          <span className="serif-italic font-normal">Decide with Intelligence.</span>
        </h2>
        <div className="w-24 h-px bg-brand-gold mb-8"></div>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-lg font-light leading-relaxed">
          ConstructMe Risk Intelligence empowers construction and infrastructure leaders to predict risk, strengthen decisions, and deliver projects with certainty.
        </p>
        <button className="bg-brand-accent text-brand-deep px-8 py-4 rounded-sm flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-2xl">
          Explore Solutions <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </motion.div>
    </div>

    {/* Feature Bar */}
    <div className="relative z-10 bg-brand-deep/40 backdrop-blur-xl border-t border-white/10 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {[
          { icon: Target, title: "Predict Risks", desc: "Anticipate threats before they impact your projects." },
          { icon: Shield, title: "Strengthen Decisions", desc: "Leverage intelligence to make confident decisions." },
          { icon: TrendingUp, title: "Protect Value", desc: "Minimize exposure and safeguard project value." },
          { icon: FileCheck, title: "Deliver with Certainty", desc: "Ensure smoother delivery and stronger outcomes." },
        ].map((item, i) => (
          <div key={i} className="flex gap-5 group lg:border-r last:border-0 border-white/10 lg:pr-8">
            <div className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-deep transition-all duration-500">
              <item.icon className="w-5 h-5 text-brand-gold group-hover:text-inherit" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{item.title}</h4>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HiddenRisks = () => (
  <section className="py-32 px-6 md:px-12 bg-white text-brand-deep relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-3xl">
          <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-6">Market Insights</p>
          <h3 className="text-4xl md:text-6xl font-light leading-[1.1]">
            Most "Verified" Properties Still Carry <span className="serif-italic font-normal text-brand-gold">Hidden Risks</span>
          </h3>
        </div>
        <p className="text-sm text-gray-500 max-w-sm mb-2 font-light leading-relaxed">
          Standard checks often scratch the surface. Our intelligence goes deeper into the layers of legal and financial architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {[
          { icon: FileWarning, title: "Undisclosed Liens", desc: "Hidden financial claims that can lead to complete loss of ownership." },
          { icon: UserX, title: "Ownership Disputes", desc: "Conflicting claims arising from complex family or community lineage." },
          { icon: AlertTriangle, title: "Forged Documents", desc: "Highly sophisticated duplicates that bypass standard verification." },
          { icon: Landmark, title: "Gov. Acquisitions", desc: "Unrecorded zoning changes or planned future infrastructure projects." },
        ].map((risk, i) => (
          <div key={i} className="group">
            <div className="mb-8 relative w-16 h-16 border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-deep group-hover:text-white transition-all duration-700">
               <risk.icon className="w-8 h-8 text-brand-gold" />
            </div>
            <h4 className="text-lg mb-4 font-bold tracking-tight">{risk.title}</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">{risk.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-32 px-6 md:px-12 bg-gray-50 text-brand-deep">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-4">Core Intelligence</p>
        <h3 className="text-4xl md:text-6xl font-light">Comprehensive <span className="serif-italic font-normal">Risk Coverage</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {[
          { icon: Search, title: "Pre-Purchase Risk Audit", desc: "Multi-layered validation covering 50+ data points before acquisition." },
          { icon: MapPin, title: "Verified Sourcing", desc: "Curated portfolio of risk-free investment opportunities globally." },
          { icon: FileSearch, title: "Document Forensics", desc: "Deep-level authentication of titles, surveys, and planning permissions." },
          { icon: Gavel, title: "Legal Risk Mapping", desc: "Detailed visualization of litigation exposure and encumbrances." },
          { icon: Shield, title: "Title Perfection", desc: "End-to-end guidance in securing and registering your absolute ownership." },
          { icon: Target, title: "Negotiation Advisory", desc: "Intelligence-backed strategy to optimize deal value and terms." },
        ].map((service, i) => (
          <div key={i} className="bg-white p-12 border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-500"></div>
            <service.icon className="w-10 h-10 text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h4 className="text-xl font-bold mb-5 tracking-tight">{service.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-8">{service.desc}</p>
            <a href="#" className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold gap-2 group-hover:gap-4 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-32 px-6 md:px-12 bg-brand-deep text-white relative overflow-hidden">
    {/* Abstract Background Element */}
    <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-brand-gold/10 rounded-full"></div>
    <div className="absolute -top-24 -left-24 w-64 h-64 border border-brand-gold/10 rounded-full"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-4">Methodology</p>
        <h3 className="text-4xl md:text-6xl font-light">The <span className="serif-italic font-normal">Intelligence Lifecycle</span></h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden lg:block -translate-y-1/2"></div>
        {[
          { step: "01", title: "Intake", desc: "Defining project boundaries and risk tolerance thresholds.", icon: Users },
          { step: "02", title: "Discovery", desc: "Deep-web and physical asset data collection across jurisdictions.", icon: Search },
          { step: "03", title: "Forensics", desc: "Rigorous stress-testing of all documentation and legal claims.", icon: FileSearch },
          { step: "04", title: "Synthesis", desc: "Correlating data points to generate an actionable risk score.", icon: FileText },
          { step: "05", title: "Execution", desc: "Expert guidance on mitigation and acquisition finalization.", icon: Shield },
        ].map((item, i) => (
          <div key={i} className="relative text-center flex flex-col items-center px-4">
            <div className="text-brand-gold mb-6 font-serif italic text-2xl opacity-50">{item.step}</div>
            <div className="w-16 h-16 bg-brand-deep border border-brand-gold/40 rounded-full flex items-center justify-center mb-8 relative z-10 group hover:border-brand-gold transition-colors duration-500">
              <item.icon className="w-7 h-7 text-brand-gold group-hover:scale-110 transition-transform" />
            </div>
            <h5 className="text-[11px] font-bold mb-4 uppercase tracking-[0.2em]">{item.title}</h5>
            <p className="text-[12px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="py-32 px-6 md:px-12 bg-white text-brand-deep">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 bg-brand-deep text-white p-12 md:p-16 shadow-2xl rounded-sm">
          <div className="flex gap-1 mb-8">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
          </div>
          <h4 className="text-2xl md:text-4xl mb-10 serif-italic leading-tight">"By the time you find out, it's already <span className="bg-brand-gold text-brand-deep px-2 not-italic font-bold">too late</span>. ConstructMe gives you the foresight that standard solicitors simply can't."</h4>
          <div className="flex items-center gap-6 pt-10 border-t border-white/10">
            <div className="w-16 h-px bg-brand-gold"></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Chief Investment Officer</p>
              <p className="text-sm font-serif">Global Real Estate Fund</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -left-12 w-48 h-48 border border-gray-100 -z-0"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gray-50 -z-0"></div>
      </div>

      <div className="w-full lg:w-1/2">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-6">Track Record</p>
        <h3 className="text-4xl md:text-6xl mb-16 leading-tight">Trust Built on <br /><span className="serif-italic font-normal">Precision.</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">100+</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">High-Value Assets <br />Secured for Clients</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">95%</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">Success Rate in <br />Identifying Shadow Risks</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">$2B+</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">Transaction Volume <br />Under Surveillance</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">12</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">Global Markets <br />Actively Monitored</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SampleReport = () => (
  <section className="py-32 px-6 md:px-12 bg-white text-brand-deep border-t border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="w-full lg:w-1/2">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-6">Transparency</p>
        <h3 className="text-4xl md:text-6xl mb-12 font-light">The <span className="serif-italic font-normal">Risk Intelligence</span> Report</h3>
        
        <div className="space-y-8 mb-16">
          {[
            { title: "Risk Score Grading", desc: "A definitive A-F score calculated from 50+ variables." },
            { title: "Shadow Lien Analysis", desc: "Unmasking financial claims invisible to legal search." },
            { title: "Future Planning Map", desc: "Visualizing government infrastructure projects nearby." },
            { title: "Mitigation Roadmap", desc: "Step-by-step resolution path for identified red flags." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-brand-deep text-white px-10 py-5 rounded-sm flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-deep transition-all">
          <Download className="w-5 h-5 mr-2" />
          Download Sample Report
        </button>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="bg-gray-100 aspect-[4/5] rounded-sm overflow-hidden relative shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2042&auto=format&fit=crop" 
            alt="Intelligence Report Sample" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-deep/10"></div>
          <div className="absolute bottom-10 left-10 p-8 glass-panel text-white max-w-xs">
             <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4 text-brand-gold">Report V4.2</p>
             <h4 className="text-xl font-serif italic mb-4">Sample Property: The Westgate Estate</h4>
             <p className="text-xs font-light text-gray-300">Detailed risk mapping reveals 3 unrecorded liens totaling $1.2M.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-12 px-6 md:px-12 bg-brand-deep text-white">
    <div className="max-w-7xl mx-auto">
      {/* Final CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-12 lg:p-20 mb-32 rounded-sm gap-12">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl text-brand-deep font-light mb-4">Before You Commit—<span className="serif-italic font-normal">Know.</span></h3>
          <p className="text-gray-500 text-sm font-light max-w-md">One intelligence-backed decision can save years of legal and financial recovery.</p>
        </div>
        <button className="bg-brand-deep text-white px-12 py-6 rounded-sm text-xs font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl hover:-translate-y-1">
          Get Started Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 border border-brand-gold flex items-center justify-center">
              <Shield className="text-brand-gold w-5 h-5" />
            </div>
            <h1 className="text-lg font-medium leading-none tracking-tight">ConstructMe</h1>
          </div>
          <p className="text-xs text-brand-gold font-bold uppercase tracking-[0.2em] mb-6">Expertise. Precision. Security.</p>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
            The global leader in complex property risk intelligence and document forensics for institutional investors.
          </p>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Intelligence Units</h5>
          <div className="flex flex-col gap-5 text-[11px] font-semibold text-gray-300">
            <a href="#" className="hover:text-brand-gold transition-colors">Residential Forensics</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Commercial Due Diligence</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Land Ownership Mapping</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Legal Risk Visualization</a>
          </div>
        </div>

        <div>
           <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Global Access</h5>
           <div className="flex flex-col gap-5 text-[11px] font-semibold text-gray-300">
              <div className="flex items-center gap-4">
                 <Phone className="w-4 h-4 text-brand-gold" />
                 <span>+234 706 043 8091</span>
              </div>
              <div className="flex items-center gap-4">
                 <Mail className="w-4 h-4 text-brand-gold" />
                 <span>hello@constructme.ng</span>
              </div>
              <div className="flex items-center gap-4">
                 <MapPin className="w-4 h-4 text-brand-gold" />
                 <span>Abuja • London • Dubai</span>
              </div>
           </div>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Stay Informed</h5>
          <div className="flex gap-4 mb-2">
            <input type="email" placeholder="Your Email" className="bg-white/5 border border-white/10 px-4 py-3 rounded-sm text-xs w-full focus:outline-none focus:border-brand-gold" />
            <button className="bg-brand-gold p-3 rounded-sm text-brand-deep">
               <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[9px] text-gray-500 uppercase tracking-[0.1em] font-medium leading-relaxed">Join our circle for monthly market risk briefings.</p>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
        <p>© 2024 ConstructMe Risk Intelligence. All Rights Reserved.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-deep font-sans">
      <Navbar />
      <Hero />
      <HiddenRisks />
      <Services />
      <Process />
      <CaseStudy />
      <SampleReport />
      <Footer />
    </div>
  );
}
