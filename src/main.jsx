import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Menu,
  Phone,
  X
} from "lucide-react";
import "./styles.css";

const phone = "385-597-2007";
const email = "office@drjohnvarner.com";
const consultationUrl = "https://www.jotform.com/261048507792058";
const instagramUrl = "https://www.instagram.com/drjohnvarner/";
const legalHashMap = {
  "#privacy-policy": "privacy",
  "#terms-of-use": "terms"
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Procedures", href: "#procedures" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

const credentials = [
  ["Facial Plastic & Reconstructive Surgery", ""],
  ["Maxillofacial Surgery", ""],
  ["Comprehensive Facial Surgery Specialist", ""],
  ["Aesthetics, Function, Reconstruction", ""]
];

const coreValues = [
  "Transparency and integrity at the forefront.",
  "Patient centered experience where safety, comfort, and personalized care are paramount.",
  "Committed to excellence, continuous mastery, being a student for life, constantly refining my skills.",
  "Healing optimization through proper nutrition, preparation, overall health and wellness.",
  "Respecting your identity, seeking to refresh and refine.",
  "Results that look like the best version of you.",
  "Harmony over isolation, treating the face as a unified whole.",
  "Committed to long term healing and satisfaction.",
  "No short cuts taken. Real results. Nothing fabricated.",
  "When you choose me, you are choosing a partnership built on trust."
];

const procedures = [
  {
    title: "Deep Plane Facelift (Rhytidectomy)",
    description:
      "A deep plane facelift addresses the visible signs of aging in the lower two-thirds of the face and jawline. This procedure goes beneath the surface to reposition displaced fat, tighten underlying muscles (the SMAS layer), and drape the skin for a naturally firmer appearance. It is ideal for individuals looking to correct deep nasolabial folds, jowls, and loose skin along the jawline."
  },
  {
    title: "Deep Necklift (Lower Rhytidectomy)",
    description:
      'Designed to restore a youthful profile, a deep plane structural necklift specifically targets the area from the jawline down to the collarbone. By tightening the underlying platysma muscles and removing excess, sagging skin and stubborn fat deposits, it eliminates the appearance of a "turkey neck" or double chin, creating a sharp, well-defined jawline.'
  },
  {
    title: "Eyelid Surgery (Blepharoplasty)",
    description:
      "Eyelid surgery rejuvenates the area immediately surrounding the eyes, making you look more rested, alert, and refreshed. It can be performed on the upper lids to remove hooded skin that may interfere with vision, or on the lower lids to eliminate under-eye bags, puffiness, and fine wrinkles."
  },
  {
    title: "Brow Lift (Forehead Lift)",
    description:
      "A brow lift elevates a heavy, drooping brow line to restore a more youthful, approachable expression. To achieve natural-looking results with minimal recovery, advanced techniques are customized to your anatomy. An endoscopic approach brow lift utilizes hidden, minimal incisions to comprehensively lift the entire forehead and brow. Alternatively, a temporal (lateral) brow lift specifically targets the outer tail of the brow through small incisions near the temples, beautifully opening up the eyes and correcting outer lid hooding."
  },
  {
    title: "Nose Surgery (Rhinoplasty)",
    description:
      "Commonly known as a nose job, rhinoplasty enhances facial harmony by modifying the size, shape, and proportions of the nose. Whether reducing a bridge bump, refining the tip, or narrowing the nostrils, it is highly customized. It can also be performed simultaneously with septoplasty to correct structural issues like a deviated septum to improve breathing."
  },
  {
    title: "Laser Resurfacing",
    description:
      "This non-surgical treatment uses targeted beams of light to precisely remove damaged outer layers of skin while heating the deeper layers to stimulate collagen production. It is highly effective for reducing the appearance of fine lines, wrinkles, acne scars, sun damage, and uneven pigmentation, resulting in smoother, tighter skin."
  },
  {
    title: "Ear Surgery (Otoplasty)",
    description:
      "Otoplasty is performed to improve the shape, position, or proportion of the ear. Most commonly used to pin back prominent ears that protrude too far from the head, it can also correct structural deformities from birth or injury. This procedure can be performed on both children (once ear cartilage is stable) and adults to boost self-confidence."
  },
  {
    title: "Jaw Surgery (Orthognathic Surgery)",
    description:
      "This corrective procedure realigns the upper and lower jaws to fix structural, functional, and aesthetic concerns. It is often a collaborative effort with orthodontics to correct severe underbites, overbites, and crossbites. Beyond significantly improving speech, chewing, and breathing (sleep apnea), it restores facial symmetry."
  },
  {
    title: "Lip Lift",
    description:
      "Unlike dermal fillers that add temporary volume, a surgical lip lift permanently alters the anatomy of the upper lip. By removing a small strip of skin directly beneath the nose, it shortens the space above the mouth. This rolls the pink tissue of the lip outward, creating a fuller, more youthful appearance and exposing more of the upper teeth when smiling."
  },
  {
    title: "Fat Grafting (Fat Transfer)",
    description:
      "Fat grafting is a natural approach to restoring youthful volume using your own living tissue. Fat is gently harvested via liposuction from an area with an excess (like the abdomen or thighs), purified, and then meticulously injected into areas experiencing volume loss, such as the cheeks, hollows under the eyes, or lips."
  },
  {
    title: "Facial Augmentation",
    description:
      "This category focuses on enhancing and balancing the underlying structural framework of the face. It typically involves the surgical placement of custom-shaped implants (often for the chin, jaw, cheeks or temples) or the strategic use of high-density dermal fillers to create strong contours, define weak jawlines, and bring features into harmony."
  },
  {
    title: "Injectables",
    description:
      "Injectables are minimally invasive, zero-downtime treatments divided into two main categories: neuromodulators (like Botox) and dermal fillers. Neuromodulators temporarily relax the facial muscles responsible for dynamic wrinkles (like crow's feet and frown lines), while fillers restore lost volume, smooth deep creases, and plump the lips."
  }
];

const procedureId = (title) =>
  `procedure-${title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

const process = [
  ["Schedule", "Request a private consultation online or by phone."],
  ["Consult", "Meet with Dr. Varner to discuss your goals and options."],
  ["Plan", "Receive a personalized treatment plan and clear next steps."],
  ["Procedure", "Move forward with confidence and a thoughtful recovery plan."]
];

const galleryItems = [
  {
    title: "Upper Blepharoplasty & Brow Lift",
    image: "/assets/gallery-upper-bleph-brow-lift.webp"
  },
  {
    title: "Isolated Deep Neck Lift",
    image: "/assets/gallery-isolated-deep-neck-lift.webp"
  },
  {
    title: "Rhinoplasty",
    image: "/assets/gallery-rhinoplasty.webp"
  },
  {
    title: "Isolated Deep Neck Lift",
    image: "/assets/gallery-isolated-deep-neck-lift-2.webp"
  },
  {
    title: "Upper Blepharoplasty",
    image: "/assets/gallery-upper-blepharoplasty.webp"
  }
];

const practiceLocations = [
  {
    city: "Spanish Fork",
    address: "128 W 900 N Ste. A, Spanish Fork, UT 84660",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=128%20W%20900%20N%20Ste.%20A%2C%20Spanish%20Fork%2C%20UT%2084660",
    embedUrl: "https://maps.google.com/maps?q=128%20W%20900%20N%20Ste.%20A%2C%20Spanish%20Fork%2C%20UT%2084660&output=embed"
  },
  {
    city: "American Fork",
    address: "48 N 1100 E A, American Fork, UT 84003",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=48%20N%201100%20E%20A%2C%20American%20Fork%2C%20UT%2084003",
    embedUrl: "https://maps.google.com/maps?q=48%20N%201100%20E%20A%2C%20American%20Fork%2C%20UT%2084003&output=embed"
  }
];

const legalDocuments = {
  privacy: {
    title: "Privacy Policy",
    content: `Effective Date: June 10, 2026

Introduction
Welcome to Varner Facial Plastics & Jaw Surgery PLLC ("we," "us," or "our"). We are committed to protecting the privacy and security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our Patient Portal, book appointments, or communicate with us electronically.

By accessing or using our website and services, you agree to the terms of this Privacy Policy.

1. Information We Collect
We may collect several types of information from and about users of our website, including:

• Personal Identification Information: Name, email address, phone number, mailing address, date of birth, and payment/billing details when you request an appointment, submit an intake form, or make a payment.
• Protected Health Information (PHI): Medical history, symptoms, clinical photographs, and signed consent forms that you voluntarily submit through our HIPAA-compliant patient portal or intake features powered by our electronic medical records system, 4D EMR.
• Technical and Usage Data: IP address, browser type, operating system, and tracking details collected via cookies to help improve website performance.

2. How We Use Your Information
We use the information we collect to:

• Schedule appointments, collect deposits, and facilitate virtual consultations (telehealth).
• Deliver and manage clinical intake forms, medical records, and surgical consents via our 4D EMR system.
• Send automated transaction confirmations, billing receipts, and administrative updates.
• Send appointment reminders, pre-operative instructions, and follow-up communications via email or SMS (text messaging).

3. SMS/Text Messaging Communication & Opt-Out
If you opt-in to receive text messages from us (such as appointment reminders or clinical follow-ups), we will use your mobile number strictly for those purposes.

• Consent: Mobile numbers collected for SMS communication and the explicit consent provided will not be shared, sold, or leased to third parties or affiliates for marketing or promotional purposes.
• Opt-Out: You can opt-out of text messages at any time by replying "STOP" to any text message you receive from us.

4. Sharing and Disclosure of Information
We treat your data with the highest level of confidentiality. We do not sell, rent, or trade your personal or health information. We only share information with:

• Service Providers: Trusted third-party vendors—such as our cloud-based software 4D EMR and integrated secure payment processors—who assist us in operating our practice, provided they are bound by strict Business Associate Agreements (BAAs) to maintain HIPAA compliance.
• Legal Requirements: When required by law, court order, or government regulation to protect the safety, rights, or property of our practice, patients, or the public.

5. HIPAA Compliance and Data Security
As a medical practice, we implement stringent administrative, physical, and technical safeguards to secure your Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA). Data transmitted through our integrated 4D EMR system is encrypted both in transit and at rest. Please note, however, that standard email and web browsing are not fully secure; clinical information should only be submitted through our designated, secure portal.

6. Contact Information
If you have any questions or concerns regarding this Privacy Policy, please contact us at:

Varner Facial Plastics & Jaw Surgery
385-597-2007
office@drjohnvarner.com`
  },
  terms: {
    title: "Terms of Use",
    content: `Effective Date: June 10, 2026

Introduction
These Terms of Use govern your access to and use of the website, patient portal, and digital communication channels provided by Varner Facial Plastics & Jaw Surgery PLLC ("Practice," "we," "us," or "our"). By browsing this website, scheduling an appointment, or using our digital forms, you agree to comply with and be bound by these Terms. If you do not agree, please do not use this site.

1. No Medical Advice Provided via Website Content
The information, text, graphics, images, and descriptions of medical or cosmetic procedures (such as facelifts, rhinoplasty, or jaw surgery) found on this website are provided strictly for educational and informational purposes. They do not constitute medical advice, diagnosis, or a guarantee of treatment outcomes. Browsing this website or communicating with the Practice via web forms does not establish a doctor-patient relationship. A formal doctor-patient relationship is only established after an in-person or formal telehealth consultation and a signed treatment plan with our licensed provider. If you are experiencing a medical emergency, call 911 or visit the nearest emergency room immediately.

2. Patient Portal and Accounts
To complete intake forms, upload clinical photos, sign surgical consents, or access medical records, you may be directed to our secure Patient Portal powered by 4D EMR. You are responsible for:

• Maintaining the confidentiality of your portal username, password, and access codes.
• Providing accurate, current, and truthful information.
• Promptly notifying us of any unauthorized use or security breach of your account.

We reserve the right to terminate portal access or refuse service at our discretion.

3. SMS and Mobile Messaging Terms
By providing your mobile telephone number and opting in to receive communications, you expressly consent to receive transactional and operational text messages (including appointment confirmations, scheduling reminders, and follow-up alerts) from us via our 4D EMR communication platform.

• Message and data rates may apply depending on your mobile carrier.
• Message frequency varies based on your appointment schedule and interactions.
• To permanently stop receiving text messages, reply "STOP" to any message. For assistance, reply "HELP".

4. Online Scheduling and Payments
When booking appointments online, you may be required to pay a deposit or pre-payment. All financial transactions are securely processed through integrated, PCI-compliant vendors. Cancellation policies, refund eligibilities for deposits, and package terms are governed by our specific office financial policies provided during your onboarding.

5. Intellectual Property
All content on this website—including text, logos, procedure descriptions, layouts, graphics, and before-and-after photographs—is the property of the Practice or its content suppliers and is protected by United States copyright, trademark, and intellectual property laws. You may not copy, reproduce, or distribute any content without express written consent.

6. Limitation of Liability
To the fullest extent permitted by law, the Practice, its physicians, and staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, this website or the information contained herein.

7. Governing Law
These Terms of Use and any disputes arising out of your use of the website shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law principles.

8. Modifications
We reserve the right to modify these Terms of Use at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the updated Terms.`
  }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const openLegalFromHash = () => setLegalModal(legalHashMap[window.location.hash] ?? null);
    openLegalFromHash();
    window.addEventListener("hashchange", openLegalFromHash);
    return () => window.removeEventListener("hashchange", openLegalFromHash);
  }, []);

  const closeLegalModal = () => {
    setLegalModal(null);
    if (legalHashMap[window.location.hash]) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#contact`);
    }
  };

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
        <Procedures />
        <About />
        <Gallery />
        <ConsultationProcess />
        <Locations />
        <FinalCta />
      </main>

      <Footer onLegalClick={setLegalModal} />
      {legalModal && (
        <LegalModal document={legalDocuments[legalModal]} onClose={closeLegalModal} />
      )}
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
            Spanish Fork · American Fork, UTAH
          </span>
        </div>
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
            Whether you are seeking a subtle cosmetic enhancement or a complex facial rejuvenation,
            our mission is to provide surgical excellence. My team and I are dedicated to your
            safety, your recovery, and helping you look and feel your absolute best.
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
            src="/assets/dr-varner-scrubs.jpg"
            alt="Dr. John Varner in surgical scrubs"
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
            <p className="font-serif text-3xl leading-tight lg:text-4xl">{title}</p>
            {subtitle && (
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-charcoal/45">{subtitle}</p>
            )}
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
            src="/assets/dr-varner-suit.jpg"
            alt="Dr. John Varner in a professional suit"
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            fallbackClassName="scrub-portrait"
            label="Surgical portrait"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
        </div>
        <div className="self-center">
          <p className="eyebrow">Training & Background</p>
          <h2 className="mt-5 whitespace-nowrap font-serif text-[3.25rem] font-medium leading-none tracking-normal sm:text-6xl lg:text-[4.5rem]">
            John Varner, MD, DDS
          </h2>
          <p className="mt-5 text-xl leading-8 text-ivory/58">
            Board-Certified Maxillofacial Surgeon
            <br />
            Fellowship-Trained · Facial Plastic & Reconstructive Surgery
          </p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-ivory/70">
            <p>
              As a Salt Lake City native, Dr. Varner's journey began at Brigham Young University,
              where he graduated Magna Cum Laude. He then graduated number one in his class at the
              University of Utah School of Dentistry and was inducted into the prestigious Omicron
              Kappa Upsilon National Dental Honor Society.
            </p>
            <p>
              Dr. Varner then earned his Doctor of Medicine (MD) from the University of Nebraska,
              along with a rigorous six-year residency in Oral and Maxillofacial Surgery. During
              this time, he completed a General Surgery internship and received extensive experience
              in Plastic, Oculoplastic, Craniofacial, and Head and Neck surgery. Driven by a passion
              for facial esthetics, he further specialized by completing a dedicated fellowship in
              Facial Plastic and Reconstructive Surgery, focusing on aesthetic enhancement and
              complex skin cancer reconstruction.
            </p>
            <p>
              With Dr. Varner's extensive training background, he brings a meticulous,
              patient-centered approach to surgical excellence. He believes that facial surgery
              requires a perfect balance of surgical precision and aesthetic artistry.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-ivory p-5 text-charcoal sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-taupe">
              Core Values & Vision
            </p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2">
              {coreValues.map((value, index) => (
                <div key={value} className="bg-ivory p-4">
                  <span className="text-sm font-semibold text-taupe">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[0.95rem] font-medium leading-6 text-charcoal/72">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Procedures() {
  const [activeProcedure, setActiveProcedure] = useState(null);
  const selectedProcedure = activeProcedure === null ? null : procedures[activeProcedure];

  return (
    <section id="procedures" className="bg-charcoal px-3 py-3 text-charcoal sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-ivory px-5 py-20 sm:py-24 lg:px-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-charcoal/45">Signature Procedures</p>
          <h2 className="heading-dark mt-5">Facial expertise, all under one roof.</h2>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {procedures.map((procedure, index) => (
            <button
              key={procedure.title}
              id={procedureId(procedure.title)}
              className="procedure-card text-left"
              type="button"
              aria-expanded={activeProcedure === index}
              onClick={() => setActiveProcedure(activeProcedure === index ? null : index)}
            >
              <span className="text-sm text-taupe">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-6 block text-2xl font-semibold leading-tight">{procedure.title}</span>
              <span className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                Learn more
                <ArrowRight className={activeProcedure === index ? "rotate-90 text-taupe transition" : "text-taupe transition"} size={17} />
              </span>
            </button>
          ))}
        </div>
        <div className="sr-only" aria-label="Procedure descriptions">
          {procedures.map((procedure) => (
            <article key={`${procedure.title}-description`}>
              <h3>{procedure.title}</h3>
              <p>{procedure.description}</p>
            </article>
          ))}
        </div>
      </div>
      {selectedProcedure?.description && (
        <ProcedureModal procedure={selectedProcedure} onClose={() => setActiveProcedure(null)} />
      )}
    </section>
  );
}

function ProcedureModal({ procedure, onClose }) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/75 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="procedure-title">
      <div className="relative max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-auto rounded-2xl border border-charcoal/10 bg-ivory p-7 text-charcoal shadow-glow sm:p-10">
        <button
          type="button"
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 text-charcoal/60 transition hover:border-taupe hover:text-charcoal"
          aria-label="Close procedure details"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <p className="pr-12 text-xs font-semibold uppercase tracking-[0.24em] text-taupe">Procedure Detail</p>
        <h3 id="procedure-title" className="mt-5 pr-12 font-serif text-4xl leading-tight sm:text-5xl">
          {procedure.title}
        </h3>
        <p className="mt-7 text-lg leading-8 text-charcoal/68">{procedure.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ExternalConsultationLink className="btn btn-solid justify-center">
            Schedule a consultation
            <ArrowRight size={18} />
          </ExternalConsultationLink>
          <button type="button" className="btn border-charcoal/15 text-charcoal hover:border-taupe hover:text-charcoal justify-center" onClick={onClose}>
            Back to procedures
          </button>
        </div>
      </div>
    </div>
  );
}

function LegalModal({ document, onClose }) {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-charcoal/75 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="legal-title">
      <div className="relative max-h-[calc(100vh-3rem)] w-full max-w-4xl overflow-auto rounded-2xl border border-charcoal/10 bg-ivory p-7 text-charcoal shadow-glow sm:p-10">
        <button
          type="button"
          className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 text-charcoal/60 transition hover:border-taupe hover:text-charcoal"
          aria-label={`Close ${document.title}`}
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 id="legal-title" className="pr-12 font-serif text-4xl leading-tight sm:text-5xl">
          {document.title}
        </h2>
        <div className="mt-8 whitespace-pre-line text-base leading-8 text-charcoal/72">
          {document.content}
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section border-y border-line bg-[#12110f]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="eyebrow">Before & After Gallery</p>
          <h2 className="heading mt-5">Results that look natural, not operated.</h2>
          <a className="btn btn-outline-light mt-9" href={instagramUrl} target="_blank" rel="noreferrer">
            View Instagram Gallery
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="gallery-card">
              {item.image ? (
                <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-charcoal">
                  <div className="border-b border-line bg-[#0d0d0d] p-4">
                    <span className="block font-serif text-2xl leading-tight text-ivory">{item.title}</span>
                  </div>
                  <img
                    src={item.image}
                    alt={`${item.title} before and after result`}
                    className="min-h-0 flex-1 object-cover"
                    loading="lazy"
                    width="1080"
                    height="1350"
                  />
                </div>
              ) : (
                <div className="h-full rounded-xl border border-line bg-gradient-to-br from-ivory/10 to-taupe/10 p-5">
                  <span className="block text-xs uppercase tracking-[0.24em] text-mist">{item.title}</span>
                </div>
              )}
            </div>
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
            {practiceLocations.map((location) => (
              <article key={location.city} className="dark-card overflow-hidden p-0">
                <div className="p-7 sm:p-8">
                  <MapPin className="text-taupe" size={24} />
                  <h3 className="mt-8 font-serif text-4xl">{location.city}</h3>
                  <p className="mt-3 leading-7 text-ivory/62">{location.address}</p>
                  <a
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-taupe transition hover:text-ivory"
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View location
                    <ArrowRight size={16} />
                  </a>
                </div>
                <iframe
                  title={`${location.city} map`}
                  src={location.embedUrl}
                  className="h-56 w-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
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

function Footer({ onLegalClick }) {
  return (
    <footer className="bg-charcoal px-3 pb-3 text-ivory sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl bg-[#070707] px-5 py-14 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr_0.6fr]">
          <div>
            <p className="font-serif text-3xl">Varner Facial Plastics & Jaw Surgery</p>
            <div className="mt-5 space-y-2 text-sm leading-6 text-ivory/50">
              <p>Board-Certified Maxillofacial Surgery</p>
              <p>Fellowship-Trained Facial Plastic & Reconstructive Surgery</p>
              <p className="pt-4 text-xl text-taupe">{phone}</p>
            </div>
          </div>
          <FooterColumn
            title="Procedures"
            items={[
              { label: "Deep Plane Facelift", href: `#${procedureId("Deep Plane Facelift (Rhytidectomy)")}` },
              { label: "Neck Lift", href: `#${procedureId("Deep Necklift (Lower Rhytidectomy)")}` },
              { label: "Blepharoplasty", href: `#${procedureId("Eyelid Surgery (Blepharoplasty)")}` },
              { label: "Brow Lift", href: `#${procedureId("Brow Lift (Forehead Lift)")}` },
              { label: "Rhinoplasty", href: `#${procedureId("Nose Surgery (Rhinoplasty)")}` },
              { label: "Jaw Surgery", href: `#${procedureId("Jaw Surgery (Orthognathic Surgery)")}` }
            ]}
          />
          <FooterColumn
            title="Practice"
            items={[
              { label: "About Dr. Varner", href: "#about" },
              { label: "Before & After", href: instagramUrl },
              { label: "Contact", href: "#contact" }
            ]}
          />
          <FooterColumn
            title="Locations"
            items={[
              { label: "Spanish Fork, UT", href: "#contact" },
              { label: "American Fork, UT", href: "#contact" }
            ]}
          />
          <FooterColumn title="Follow" items={[{ label: "Instagram", href: instagramUrl }]} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 text-sm text-ivory/35 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>2026 © Varner Facial Plastics & Jaw Surgery</span>
            <span aria-hidden="true">·</span>
            <a href="#privacy-policy" className="transition hover:text-taupe" onClick={() => onLegalClick("privacy")}>
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#terms-of-use" className="transition hover:text-taupe" onClick={() => onLegalClick("terms")}>
              Terms of Use
            </a>
          </div>
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
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const isExternal = typeof item !== "string" && item.href.startsWith("http");
          return (
            <li key={label}>
              {typeof item === "string" ? (
                label
              ) : (
                <a
                  className="transition hover:text-taupe"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
