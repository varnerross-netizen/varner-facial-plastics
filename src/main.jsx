import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X
} from "lucide-react";
import "./styles.css";

const phone = "385-597-2007";
const email = "info@varnerfacialplastics.com";
const consultationUrl = "https://www.jotform.com/261048507792058";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Procedures", href: "#procedures" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

const credentials = [
  ["Magna Cum Laude", "BYU Graduate"],
  ["OKU", "National Honor Society"],
  ["Chief Resident", "OMS Residency"],
  ["Fellowship", "Facial Plastics & Reconstruction"]
];

const credentialRows = [
  ["Undergraduate", "BYU - Magna Cum Laude"],
  ["Dental School", "University of Utah - Ranked #1 - OKU"],
  ["Medical School", "University of Nebraska - MD"],
  ["Residency", "OMS - Chief Resident"],
  ["Fellowship", "Facial Plastic & Reconstructive Surgery"]
];

const procedures = [
  ["Deep Plane Facelift", "Surgical"],
  ["Neck Lift", "Surgical"],
  ["Blepharoplasty", "Surgical"],
  ["Brow Lift", "Surgical"],
  ["Rhinoplasty", "Surgical"],
  ["Laser Resurfacing", "Non-surgical"],
  ["Otoplasty", "Surgical"],
  ["Jaw Surgery", "Orthognathic"]
];

const differentiators = [
  ["Facial Plastic Surgery", "Natural, refined results designed around each patient's features."],
  [
    "Maxillofacial Expertise",
    "A deeper understanding of facial structure, bite, jaw position, airway, and skeletal balance."
  ],
  ["Personalized Care", "Private consultations and treatment plans built directly around your goals."]
];

const testimonials = [
  "Dr. Varner was thoughtful, precise, and made me feel completely comfortable.",
  "He explained every option clearly and created a plan that felt personal to me.",
  "The entire experience felt professional, calm, and confidence-building."
];

const process = [
  ["Schedule", "Request a private consultation online or by phone."],
  ["Consult", "Meet with Dr. Varner to discuss your goals and options."],
  ["Plan", "Receive a personalized treatment plan and clear next steps."],
  ["Procedure", "Move forward with confidence and a thoughtful recovery plan."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <UtilityBar />
      <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory text-charcoal shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
          <a href="#top" className="group flex min-w-0 items-center" onClick={closeMenu}>
            <LogoMark />
            <div className="sr-only">
              <p className="font-serif text-xl leading-none tracking-wide sm:text-2xl">
                Varner Facial Plastics & Jaw Surgery
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-charcoal/55">
                Dr. John Varner · MD, DDS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <ExternalConsultationLink className="btn btn-solid">
              Schedule Consultation
            </ExternalConsultationLink>
          </nav>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-charcoal/15 text-charcoal lg:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-charcoal/10 px-5 pb-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-3 pt-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-link" onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <ExternalConsultationLink className="btn btn-solid mt-2 justify-center" onClick={closeMenu}>
                Schedule Consultation
              </ExternalConsultationLink>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <Hero />
        <TrustBar />
        <About />
        <Procedures />
        <Difference />
        <Gallery />
        <Testimonials />
        <ConsultationProcess />
        <Locations />
        <ConsultationForm />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

function ExternalConsultationLink({ className, children, onClick }) {
  return (
    <a className={className} href={consultationUrl} target="_blank" rel="noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}

function UtilityBar() {
  return (
    <div className="bg-charcoal text-xs uppercase tracking-[0.22em] text-taupe">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <a className="utility-link" href={`tel:${phone.replaceAll("-", "")}`}>
            <Phone size={14} />
            {phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Spanish Fork · American Fork
          </span>
        </div>
        <ExternalConsultationLink className="rounded-md border border-line px-5 py-3 font-semibold text-ivory transition hover:border-taupe hover:text-taupe">
          Book Online
        </ExternalConsultationLink>
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid h-16 w-[300px] max-w-[62vw] shrink-0 place-items-center overflow-hidden bg-ivory text-charcoal sm:w-[420px] lg:w-[520px]">
      <img src="/assets/logo-horizontal.png" alt="" className="h-full w-full object-contain object-left" />
    </span>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <div className="hero-backdrop" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="eyebrow">Board-Certified · Fellowship-Trained · Utah County</p>
          <h1 className="mt-8 font-serif text-6xl font-medium leading-[0.9] tracking-normal sm:text-7xl lg:text-8xl">
            Precision
            <br />
            Surgery.
            <br />
            <em className="text-taupe">Natural Results.</em>
          </h1>
          <p className="mt-7 text-sm uppercase tracking-[0.28em] text-mist">Dr. John Varner · MD, DDS</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/75 sm:text-xl">
            Combining the disciplines of maxillofacial and facial plastic surgery - from corrective
            jaw surgery to deep plane facelift - all under one roof.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ExternalConsultationLink className="btn btn-outline-light">
              Schedule a consultation
              <ArrowRight size={18} />
            </ExternalConsultationLink>
            <a className="btn btn-dark" href="#procedures">
              View procedures
            </a>
          </div>
          <p className="mt-8 text-sm uppercase tracking-[0.28em] text-mist">
            Spanish Fork · American Fork · Utah County
          </p>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#191919] lg:min-h-full">
          <ImageFallback
            src="/assets/dr-varner-suit.jpg"
            alt="Dr. John Varner in a professional suit"
            className="absolute inset-0 h-full w-full object-cover object-[50%_16%]"
            fallbackClassName="hero-portrait"
            label="Professional portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-charcoal/10" />
        </div>
      </div>
    </section>
  );
}

function ImageFallback({ src, alt, className, fallbackClassName, label }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
  }

  return (
    <div className={`${className} ${fallbackClassName}`} aria-label={alt} role="img">
      <span>{label}</span>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="bg-charcoal px-3 pb-12 text-charcoal sm:px-5">
      <div className="mx-auto -mt-8 grid max-w-7xl divide-y divide-charcoal/10 rounded-2xl bg-ivory px-5 py-8 shadow-glow sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {credentials.map(([title, subtitle]) => (
          <div key={title} className="px-0 py-5 text-center sm:px-7 lg:px-9">
            <p className="font-serif text-4xl leading-none">{title}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/45">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-8">
        <div className="relative min-h-[620px] overflow-hidden rounded-2xl bg-[#171717]">
          <ImageFallback
            src="/assets/dr-varner-scrubs.jpg"
            alt="Dr. John Varner in surgical scrubs"
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            fallbackClassName="scrub-portrait"
            label="Surgical portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
        </div>
        <div className="self-center">
          <p className="eyebrow">Training & Background</p>
          <h2 className="heading mt-5">John Varner, MD, DDS</h2>
          <p className="mt-5 text-xl leading-8 text-ivory/58">
            Board-Certified Maxillofacial Surgeon
            <br />
            Fellowship-Trained · Facial Plastic & Reconstructive Surgery
          </p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-ivory/70">
            <p>
              A Salt Lake City native, Dr. Varner graduated Magna Cum Laude from BYU, ranked first
              in his class at the University of Utah School of Dentistry, and earned induction into
              the OKU National Dental Honor Society.
            </p>
            <p>
              He completed a six-year OMS residency as Chief Resident, with rotations in plastic,
              oculoplastic, craniofacial, and head & neck surgery, followed by a fellowship in
              facial plastic and reconstructive surgery.
            </p>
          </div>
          <a href="#contact" className="btn btn-outline-light mt-9">
            Meet Dr. Varner
            <ArrowRight size={18} />
          </a>
          <div className="mt-10 border-t border-line">
            {credentialRows.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-line py-4 text-sm sm:grid-cols-[170px_1fr]">
                <span className="font-semibold text-ivory/44">{label}</span>
                <span className="italic text-ivory/62">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Procedures() {
  return (
    <section id="procedures" className="bg-charcoal px-3 py-3 text-charcoal sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-ivory px-5 py-20 sm:py-24 lg:px-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-charcoal/45">Signature Procedures</p>
          <h2 className="heading-dark mt-5">Facial expertise, all under one roof.</h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/60">
            Dr. Varner's dual MD and DDS training provides anatomical depth that sets his surgical
            outcomes apart.
          </p>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map(([title, category], index) => (
            <ExternalConsultationLink key={title} className="procedure-card">
              <span className="text-sm text-taupe">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-6 block text-2xl font-semibold leading-tight">{title}</span>
              <span className="mt-3 block text-lg font-semibold text-charcoal/42">{category}</span>
              <ArrowRight className="mt-5 text-taupe" size={19} />
            </ExternalConsultationLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section className="section bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {differentiators.map(([title, copy]) => (
            <article key={title} className="dark-card">
              <div className="mb-10 grid h-11 w-11 place-items-center rounded-xl border border-taupe/40 text-taupe">
                <Check size={19} />
              </div>
              <h3 className="font-serif text-4xl">{title}</h3>
              <p className="mt-5 leading-7 text-ivory/70">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section border-y border-line bg-[#12110f]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Before & After Gallery</p>
          <h2 className="heading mt-5">Results that look natural, not operated.</h2>
          <ExternalConsultationLink className="btn btn-outline-light mt-9">
            View Gallery
            <ArrowRight size={18} />
          </ExternalConsultationLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="gallery-card">
              <div className="h-full rounded-xl border border-line bg-gradient-to-br from-ivory/10 to-taupe/10 p-5">
                <span className="block text-xs uppercase tracking-[0.24em] text-mist">
                  Gallery image coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-charcoal px-3 py-3 text-charcoal sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-ivory px-5 py-20 sm:py-24 lg:px-20">
        <p className="eyebrow text-charcoal/45">Patient Stories</p>
        <h2 className="heading-dark mt-5">Calm, precise, confidence-building care.</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((quote) => (
            <article key={quote} className="light-card">
              <div className="flex gap-1 text-taupe" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-8 text-2xl font-semibold leading-tight">"{quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationProcess() {
  return (
    <section className="section bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Consultation Process</p>
          <h2 className="heading mt-5">Clear steps, thoughtful guidance.</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([title, copy], index) => (
            <article key={title} className="bg-[#111] p-7">
              <span className="text-sm text-taupe">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 font-serif text-4xl">{title}</h3>
              <p className="mt-5 leading-7 text-ivory/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="contact" className="section bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Locations</p>
            <h2 className="heading mt-5">Serving Utah County.</h2>
            <div className="mt-8 space-y-3 text-lg text-ivory/75">
              <a className="flex items-center gap-3 transition hover:text-taupe" href={`tel:${phone.replaceAll("-", "")}`}>
                <Phone size={18} />
                {phone}
              </a>
              <a className="flex items-center gap-3 transition hover:text-taupe" href={`mailto:${email}`}>
                <CalendarDays size={18} />
                {email}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Spanish Fork", "American Fork"].map((city) => (
              <article key={city} className="dark-card">
                <MapPin className="text-taupe" size={24} />
                <h3 className="mt-10 font-serif text-4xl">{city}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-mist">Utah County, UT</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationForm() {
  return (
    <section id="consultation" className="section bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Private Consultation</p>
          <h2 className="heading mt-5">Schedule your consultation.</h2>
          <p className="mt-6 text-lg leading-8 text-ivory/60">
            Two convenient Utah County locations. For now, consultation requests are handled
            through our secure JotForm intake.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl bg-ivory p-7 text-charcoal sm:p-10">
            <h3 className="font-serif text-3xl">Request a consultation</h3>
            <p className="mt-5 text-lg leading-8 text-charcoal/60">
              Complete the consultation request form and our team will follow up with next steps.
              The form opens in a new tab.
            </p>
            <ExternalConsultationLink className="btn btn-solid mt-8 w-full justify-center">
              Open consultation request
              <ArrowRight size={18} />
            </ExternalConsultationLink>
          </div>
          <div className="rounded-2xl border border-line bg-[#090909] p-7 sm:p-10">
            <ContactItem icon={<Phone size={22} />} label="Phone" value={phone} href={`tel:${phone.replaceAll("-", "")}`} />
            <ContactItem icon={<Mail size={22} />} label="Email" value={email} href={`mailto:${email}`} />
            <ContactItem icon={<Clock size={22} />} label="Hours" value={"Mon-Fri 9am-5pm\nSat by appointment"} />
            <div className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              {["Spanish Fork", "American Fork"].map((city) => (
                <div key={city} className="rounded-xl border border-line bg-white/[0.025] p-5">
                  <div className="flex items-center gap-2 font-semibold text-taupe">
                    <MapPin size={17} />
                    {city}
                  </div>
                  <p className="mt-2 text-sm text-ivory/45">Utah County, UT</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex gap-5 border-b border-line py-6 first:pt-0">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white/[0.055] text-taupe">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-[0.28em] text-mist">{label}</span>
        <span className="mt-2 block whitespace-pre-line text-xl font-semibold leading-7 text-ivory/82">{value}</span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:text-taupe">
      {content}
    </a>
  ) : (
    content
  );
}

function FinalCta() {
  return (
    <section className="bg-charcoal px-3 pb-3 text-ivory sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#080808] px-5 py-20 text-center shadow-glow sm:py-24 lg:px-16">
        <p className="eyebrow text-mist">Varner Facial Plastics & Jaw Surgery</p>
        <h2 className="mx-auto mt-7 max-w-5xl font-serif text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">
          Ready to take the <em className="text-taupe">next step?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ivory/55">
          Schedule a private consultation with Dr. Varner in Spanish Fork or American Fork.
        </p>
        <a className="mt-7 inline-flex items-center gap-3 font-serif text-5xl text-taupe" href={`tel:${phone.replaceAll("-", "")}`}>
          {phone}
        </a>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ExternalConsultationLink className="btn btn-outline-light justify-center">
            Book a consultation
          </ExternalConsultationLink>
          <a href="#contact" className="btn btn-dark justify-center">
            Spanish Fork · American Fork
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-3 pb-3 text-ivory sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#070707] px-5 py-14 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.9fr_0.9fr]">
          <div>
            <p className="font-serif text-3xl">Varner Facial Plastics & Jaw Surgery</p>
            <div className="mt-5 space-y-2 text-sm leading-6 text-ivory/50">
              <p>Board-Certified Maxillofacial Surgery</p>
              <p>Fellowship-Trained Facial Plastic & Reconstructive Surgery</p>
              <p className="pt-4 text-xl text-taupe">{phone}</p>
            </div>
          </div>
          <FooterColumn title="Procedures" items={["Deep Plane Facelift", "Neck Lift", "Blepharoplasty", "Brow Lift", "Rhinoplasty", "Jaw Surgery"]} />
          <FooterColumn title="Practice" items={["About Dr. Varner", "Before & After", "Patient Stories", "Contact"]} />
          <FooterColumn title="Locations" items={["Spanish Fork, UT", "American Fork, UT"]} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 text-sm text-ivory/35 sm:flex-row sm:justify-between">
          <p>2026 © Varner Facial Plastics & Jaw Surgery · Privacy Policy</p>
          <p>Spanish Fork & American Fork, Utah</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.24em] text-mist">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-ivory/45">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
