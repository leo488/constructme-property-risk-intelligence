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
  TrendingUp,
  CheckCircle
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
        <p className="text-[9px] text-brand-gold font-sans font-bold tracking-[0.15em] uppercase mt-1">Property Risk Intelligence</p>
      </div>
    </div>

    <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase font-semibold tracking-[0.1em]">
      <a href="#" className="hover:text-brand-gold transition-colors">Home</a>
      <a href="#" className="hover:text-brand-gold transition-colors">About</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Services</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Process</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Sample Report</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Testimonials</a>
      <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
    </div>

    <a
      href="https://wa.me/+2347060438091"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden sm:flex items-center gap-2 bg-transparent border border-brand-gold/50 text-white px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-brand-gold hover:text-brand-deep transition-all"
    >
      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-brand-deep">
    {/* Architectural Background */}
    <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0">
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
        alt="Modern Property"
        className="w-full h-full object-cover grayscale-[30%] contrast-[1.2]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/60 to-transparent"></div>
      <div className="absolute inset-0 bg-brand-deep/20"></div>
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
          You Scanned This<br />for a Reason.<br />
          <span className="serif-italic font-normal">Don't Buy That<br />Property Blind.</span>
        </h2>
        <div className="w-24 h-px bg-brand-gold mb-8"></div>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-lg font-light leading-relaxed">
          We help you find, verify, and secure property safely—without hidden risks or costly mistakes.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://wa.me/+2347060438091"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent text-brand-deep px-8 py-4 rounded-sm flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp <ChevronRight className="w-4 h-4 ml-1" />
          </a>
          <a
            href="#sample-report"
            className="border border-brand-accent text-brand-accent px-8 py-4 rounded-sm flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-accent hover:text-brand-deep transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            <FileText className="w-4 h-4" /> View Sample Report <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Feature Bar */}
    <div className="relative z-10 bg-brand-deep/40 backdrop-blur-xl border-t border-white/10 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
        {[
          { icon: Shield, title: "Confidential & Discreet" },
          { icon: MapPin, title: "Abuja Market Specialist" },
          { icon: Users, title: "Trusted by Investors & Diaspora Buyers" },
        ].map((item, i) => (
          <div key={i} className="flex gap-5 group lg:border-r last:border-0 border-white/10 lg:pr-8">
            <div className="w-12 h-12 border border-brand-gold/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-deep transition-all duration-500">
              <item.icon className="w-5 h-5 text-brand-gold group-hover:text-inherit" />
            </div>
            <div className="flex items-center">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em]">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HiddenRisks = () => (
  <section className="py-32 px-6 md:px-12 bg-[#f0f4ef] text-brand-deep relative">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-3xl">
          <h3 className="text-4xl md:text-6xl font-light leading-[1.1]">
            Most "Verified" Properties Still Carry <span className="serif-italic font-normal text-brand-gold">Hidden Risks</span>
          </h3>
        </div>
        <p className="text-sm text-gray-500 max-w-sm mb-2 font-light leading-relaxed">
          By the time you find out, it's already <span className="text-brand-gold font-bold">too late!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {[
          { icon: FileWarning, title: "Undisclosed Liens", desc: "Hidden financial claims that can lead to loss of ownership." },
          { icon: UserX, title: "Ownership Disputes", desc: "Conflicting claims and family or community disputes." },
          { icon: AlertTriangle, title: "Forged or Duplicated Documents", desc: "Fake documents can make you lose everything." },
          { icon: Landmark, title: "Government Acquisition Exposure", desc: "Properties at risk of revocation or acquisition." },
        ].map((risk, i) => (
          <div key={i} className="group bg-brand-accent/10 border border-brand-accent/25 p-8 hover:bg-brand-accent/20 transition-all duration-500">
            <div className="mb-8 w-16 h-16 bg-brand-accent/40 flex items-center justify-center group-hover:bg-brand-accent transition-all duration-500">
               <risk.icon className="w-8 h-8 text-brand-deep" />
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
  <section className="py-32 px-6 md:px-12 bg-[#e8ede7] text-brand-deep">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-4">Our Services</p>
        <h3 className="text-4xl md:text-6xl font-light">Our <span className="serif-italic font-normal">Services</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {[
          { icon: Search, title: "Pre-Purchase Risk Audit", desc: "Deep forensic analysis before you commit your money." },
          { icon: MapPin, title: "Verified Property Sourcing", desc: "We identify clean, investment-grade properties that match your goals." },
          { icon: FileCheck, title: "Document Verification", desc: "We authenticate and validate documents to uncover hidden encumbrances." },
          { icon: Gavel, title: "Legal Risk Mapping", desc: "We uncover legal disputes, claims, and litigation exposures." },
          { icon: Shield, title: "Title Perfection", desc: "We guide you through the process to secure and perfect your ownership." },
          { icon: Target, title: "Acquisition Advisory", desc: "Strategic guidance on negotiation, decision-making and deal structuring." },
        ].map((service, i) => (
          <div key={i} className="bg-white p-12 border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent group-hover:h-full transition-all duration-500"></div>
            <div className="w-16 h-16 bg-brand-accent/20 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-all duration-500">
              <service.icon className="w-8 h-8 text-brand-deep group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-bold mb-5 tracking-tight">{service.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-light mb-8">{service.desc}</p>
            <a href="https://wa.me/+2347060438091" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold gap-2 group-hover:gap-4 transition-all">
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
    <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-brand-gold/10 rounded-full"></div>
    <div className="absolute -top-24 -left-24 w-64 h-64 border border-brand-gold/10 rounded-full"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <p className="text-[10px] text-brand-gold font-bold tracking-[0.3em] uppercase mb-4">Our Process</p>
        <h3 className="text-4xl md:text-6xl font-light">A Structured, <span className="serif-italic font-normal">Secure Process</span></h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 relative">
        <div className="absolute top-[4.5rem] left-0 right-0 h-px bg-white/5 hidden lg:block"></div>
        {[
          { step: "1", title: "Client Brief", desc: "We understand your needs, budget and property goals.", icon: Users },
          { step: "2", title: "Property Sourcing (If Needed)", desc: "We source verified properties aligned with your criteria.", icon: Search },
          { step: "3", title: "Risk Investigation", desc: "We conduct on-ground checks, document verification, and legal due diligence.", icon: FileSearch },
          { step: "4", title: "Analysis & Report", desc: "You receive a detailed risk report with clear findings and risk score.", icon: FileText },
          { step: "5", title: "Advisory & Title Perfection", desc: "We guide you on the next steps and help secure your title.", icon: Shield },
        ].map((item, i) => (
          <div key={i} className="relative text-center flex flex-col items-center px-4">
            <div className="text-brand-gold mb-6 font-serif italic text-2xl opacity-50">{item.step}.</div>
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
  <section className="py-32 px-6 md:px-12 bg-[#f0f4ef] text-brand-deep">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
      {/* Left: Testimonial Card */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative z-10 bg-brand-deep text-white p-12 md:p-16 shadow-2xl rounded-sm">
          <div className="flex gap-1 mb-8">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
          </div>
          <h4 className="text-2xl md:text-3xl mb-8 font-bold">A Costly Mistake—Avoided</h4>
          <p className="text-gray-300 font-light leading-relaxed text-sm">
            A buyer was about to pay for a "verified" property. We uncovered a hidden lien before payment. He walked away. <span className="text-brand-gold font-bold">Millions saved.</span>
          </p>
        </div>
        <div className="absolute -top-12 -left-12 w-48 h-48 border border-gray-100 -z-0"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gray-50 -z-0"></div>
      </div>

      {/* Right: Heading + Stats */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-4xl md:text-6xl mb-16 leading-tight font-light">
          Why Clients Trust <br /><span className="serif-italic font-normal">ConstructMe.</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">100+</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">Property Assessments<br />Completed</p>
          </div>
          <div className="space-y-4">
            <p className="text-6xl font-serif font-light text-brand-gold">90%</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">Hidden Risks<br />Identified</p>
          </div>
          <div className="space-y-4">
            <p className="text-5xl font-serif font-light text-brand-gold">Millions</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold leading-relaxed">In Client Capital<br />Protected</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SampleReport = () => (
  <section id="sample-report" className="py-32 px-6 md:px-12 bg-[#f0f4ef] text-brand-deep border-t border-brand-accent/20">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      {/* Left: Text */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-4xl md:text-6xl mb-12 font-light">What You'll <span className="serif-italic font-normal">Receive</span></h3>

        <div className="space-y-8 mb-16">
          {[
            "Risk Score (Clear Grading)",
            "Ownership & Title Analysis",
            "Red Flags Identified",
            "Legal & Documentation Status",
            "Clear Recommendation",
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="w-6 h-6 border border-brand-gold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-[0.1em]">{item}</h4>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <a
            href="/HIGH-RISK.jpeg"
            download="ConstructMe-High-Risk-Sample.jpeg"
            className="bg-brand-deep text-white px-8 py-4 rounded-sm inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-deep transition-all"
          >
            <Download className="w-4 h-4" />
            High Risk Sample
          </a>
          <a
            href="/LOW-RISK.jpeg"
            download="ConstructMe-Low-Risk-Sample.jpeg"
            className="border border-brand-deep text-brand-deep px-8 py-4 rounded-sm inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-deep hover:text-white transition-all"
          >
            <Download className="w-4 h-4" />
            Low Risk Sample
          </a>
        </div>
        <p className="text-xs text-gray-400 font-light mt-4">See the quality of our analysis before you engage.</p>
      </div>

      {/* Right: Image */}
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
             <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 text-brand-gold">ConstructMe</p>
             <h4 className="text-sm font-bold mb-1">Property Risk Intelligence Report</h4>
             <p className="text-[10px] font-light text-gray-300">Sample Report — Confidential</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-12 px-6 md:px-12 bg-brand-deep text-white">
    <div className="max-w-7xl mx-auto">
      {/* Final CTA — white box */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-12 lg:p-20 mb-32 rounded-sm gap-12">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl lg:text-5xl text-brand-deep font-light mb-4">
            Before You Pay—<span className="serif-italic font-normal">Be Certain.</span>
          </h3>
          <p className="text-gray-500 text-sm font-light max-w-md">One wrong property decision can cost years of earnings.</p>
        </div>
        <a
          href="https://wa.me/+2347060438091"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-brand-deep text-white px-12 py-6 rounded-sm text-xs font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl hover:-translate-y-1 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp Now
        </a>
      </div>

      {/* Footer columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 border border-brand-gold flex items-center justify-center">
              <Shield className="text-brand-gold w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-medium leading-none tracking-tight">ConstructMe</h1>
              <p className="text-[8px] text-brand-gold font-bold tracking-[0.15em] uppercase mt-1">Property Risk Intelligence</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
            We deliver clarity. We eliminate risk. We help you secure property the right way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Quick Links</h5>
          <div className="flex flex-col gap-5 text-[11px] font-semibold text-gray-300">
            <a href="#" className="hover:text-brand-gold transition-colors">About Us</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Services</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Our Process</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Sample Report</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Contact</h5>
          <div className="flex flex-col gap-5 text-[11px] font-semibold text-gray-300">
            <div className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <span>+234 706 043 8091</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <span>hello@constructme.ng</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-10">Scan Before You Buy</h5>
          <div className="w-24 h-24 bg-white flex items-center justify-center mb-4 rounded-sm">
            <QrCode className="w-16 h-16 text-brand-deep" />
          </div>
          <p className="text-[11px] text-gray-400 font-light leading-relaxed max-w-[180px]">
            Scan our QR code to access a property risk briefing and sample report.
          </p>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
        <p>© 2024 ConstructMe. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span>Confidential</span>
          <span>Secure</span>
          <span>Discreet</span>
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
