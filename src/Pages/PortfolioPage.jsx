import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bug,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  Luggage,
  MonitorPlay,
  Plane,
  UsersRound,
} from 'lucide-react';

const coverage = [
  {
    icon: UsersRound,
    number: '01',
    title: 'Passenger rules',
    detail: 'Adult/infant ratios and age-category validation',
  },
  {
    icon: Luggage,
    number: '02',
    title: 'Baggage pricing',
    detail: 'Additional baggage limits and price updates',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'Form validation',
    detail: 'Required fields, email syntax, and passenger details',
  },
  {
    icon: CircleDollarSign,
    number: '04',
    title: 'Pricing integrity',
    detail: 'Fare changes and checkout total consistency',
  },
];

const findings = [
  {
    icon: Bug,
    title: 'Intermittent blank page (WSoD) in Trip Summary when navigating back from Travelers form via browser back button',
    description:
      'The booking flow fails to retain the session state when using the browser back navigation, resulting in a blank white screen that blocks the user from continuing or modifying their itinerary.',
    status: 'Confirmed Defect',
    confirmed: true,
    screenshots: [
      {
        src: '/pictures/AviancaBug1.png',
        alt: 'Evidence screenshot 1: the Trip Summary content area appears blank after browser-back navigation.',
        caption: 'Evidence 01',
      },
      {
        src: '/pictures/AviancaBug2.png',
        alt: 'Evidence screenshot 2: a second capture showing the blank Trip Summary content area.',
        caption: 'Evidence 02',
      },
    ],
  },
  {
    icon: Bug,
    title: 'Passenger details accordion becomes unresponsive after navigating back from payment step',
    description:
      'When returning from a later checkout step, the UI components freeze. While the primary booking holder section remains active, additional passenger details cannot be opened or edited.',
    status: 'Confirmed Defect',
    confirmed: true,
    screenshots: [
      {
        src: '/pictures/Dropdownbugaviancapicture.png',
        alt: 'Evidence screenshot showing the unresponsive passenger details dropdown.',
        caption: 'Evidence Dropdown',
      },
    ],
  },
  {
    icon: Bug,
    title: 'Phone-number field accepts 10 digits with Costa Rica (+506) selected',
    description:
      'The field should enforce an eight-digit Costa Rican national number, display an inline validation error, and block progression when invalid data is entered.',
    status: 'Confirmed Defect',
    confirmed: true,
    screenshots: [
      {
        src: '/pictures/numberverificationissue.png',
        alt: 'Evidence screenshot showing the phone number field accepting 10 digits instead of 8.',
        caption: 'Evidence: Validation Issue',
      },
    ],
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Avianca QA portfolio home" data-testid="link-home">
      <span className="brand-mark">QA</span>
      <span>PORTFOLIO / RODEIMY ALLEN</span>
    </a>
  );
}

function Header() {
  return (
    <header className="topbar">
      <BrandMark />
      <nav className="top-links" aria-label="Page navigation">
        <a href="#overview">Overview</a>
        <a href="#coverage">Coverage</a>
        <a href="#findings">Findings</a>
        <a href="/documents/Avianca_Manual_QA_Portfolio_Final.pdf" download="Avianca_Manual_QA_Portfolio_Final.pdf" className="top-report" data-testid="link-full-report">
          Full report <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="ticket-scene" aria-label="Illustrated flight route from San José to Panama City">
      <div className="orbit" aria-hidden="true" />
      <div className="flight-card">
        <div className="flight-top">
          <span>GUEST JOURNEY / FLIGHT 01</span>
          <strong>BOOKING FLOW</strong>
        </div>
        <div className="flight-route">
          <div>
            <div className="airport-code">SJO</div>
            <div className="airport-city">SAN JOSÉ · CR</div>
          </div>
          <div className="route-mid">
            <div className="route-line"><Plane size={15} aria-hidden="true" /></div>
            <div className="route-meta">CHECKOUT PATH</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="airport-code">PTY</div>
            <div className="airport-city">PANAMÁ · PA</div>
          </div>
        </div>
        <div className="flight-foot">
          <span>TEST SCOPE <strong>GUEST CHECKOUT</strong></span>
          <span>STATUS <strong>REVIEWED</strong></span>
        </div>
      </div>
      <div className="stamp" aria-hidden="true">INDEPENDENT<br />QA REVIEW</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Reveal className="hero-copy">
        <div className="eyebrow">MANUAL QA · INDEPENDENT PROJECT</div>
        <h1 id="hero-title">Testing the Avianca Flight Booking <em>Experience</em></h1>
        <p className="hero-subtitle">
          Evaluating passenger business rules, checkout validation, baggage pricing, and navigation reliability.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/documents/Avianca_Manual_QA_Portfolio_Final.pdf" download="Avianca_Manual_QA_Portfolio_Final.pdf" data-testid="link-view-report">
            Download Test Report <ArrowDownRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#demo" data-testid="link-watch-demo">
            Watch Bug Demos <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-note">PUBLIC WEBSITE · GUEST USER JOURNEY · MANUAL EXECUTION</div>
      </Reveal>
      <Reveal delay={0.15}><HeroArtwork /></Reveal>
    </section>
  );
}

function Overview() {
  return (
    <section className="section" id="overview" aria-labelledby="overview-title">
      <div className="wrap overview-grid">
        <Reveal>
          <div className="section-kicker">01 / Project Overview</div>
          <h2 className="section-heading" id="overview-title">A closer look at the booking journey.</h2>
        </Reveal>
        <Reveal delay={0.1} className="overview-copy">
          <p>
            This project evaluates Avianca&apos;s public flight-booking flow as a guest user, focusing on traveler information,
            passenger-age rules, additional baggage, pricing calculations, and navigation between checkout steps.
          </p>
          <p className="boundary">
            <strong>Boundary:</strong> Testing was performed strictly on the user-facing website without access to Avianca&apos;s
            internal requirements or backend implementation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    ['10', 'Unique Test Cases Executed'],
    ['4', 'Functional Areas Tested'],
    ['3', 'Distinct Issues Documented'],
  ];
  return (
    <section className="metrics-band" aria-label="Execution metrics">
      <div className="wrap metrics-inner">
        {stats.map(([number, label], index) => (
          <Reveal key={label} delay={index * 0.08} className="metric">
            <span className="metric-num">{number}</span>
            <span className="metric-label">{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="section" id="coverage" aria-labelledby="coverage-title">
      <div className="wrap">
        <Reveal className="coverage-head">
          <div>
            <div className="section-kicker">02 / Test design</div>
            <h2 className="section-heading" id="coverage-title">Testing Coverage</h2>
          </div>
          <p className="coverage-sub">Four focused areas across the passenger journey and checkout.</p>
        </Reveal>
        <div className="coverage-grid">
          {coverage.map(({ icon: Icon, number, title, detail }, index) => (
            <Reveal key={title} delay={index * 0.055} className="coverage-card">
              <div className="coverage-icon"><Icon aria-hidden="true" /></div>
              <div className="coverage-index">AREA {number}</div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Findings() {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <section className="section findings" id="findings" aria-labelledby="findings-title">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">03 / Execution evidence</div>
          <h2 className="section-heading" id="findings-title">Key Findings</h2>
          <p className="findings-intro">
            Observed issues recorded with their statuses. Validated against expected behavior and reproduced consistently.
          </p>
        </Reveal>
        <div className="finding-list">
          {findings.map(({ icon: Icon, title, description, status, confirmed, screenshots }, index) => (
            <Reveal key={title} delay={index * 0.08} className="finding">
              <div className="finding-mark"><Icon aria-hidden="true" /></div>
              <div>
                <h3>{title}</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>{description}</p>
                {screenshots && (
                  <div className="evidence-thumbnails" aria-label="Screenshot evidence">
                    {screenshots.map((shot) => (
                      <figure key={shot.src}>
                        <img 
                          src={shot.src} 
                          alt={shot.alt} 
                          loading="lazy" 
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => setExpandedImage(shot.src)}
                        />
                        <figcaption>{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
              <span className={`badge${confirmed ? ' confirmed' : ''}`}>{status}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox para ver imágenes grandes */}
      {expandedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out',
            padding: '2rem'
          }}
          onClick={() => setExpandedImage(null)}
        >
          <img
            src={expandedImage}
            alt="Expanded view of evidence"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          />
        </div>
      )}
    </section>
  );
}

function Demonstration() {
  return (
    <section className="section" id="demo" aria-labelledby="demo-title">
      <div className="wrap">
        <Reveal>
          <div className="section-kicker">04 / Reproduction walkthrough</div>
          <h2 className="section-heading" id="demo-title">Defect Reproductions</h2>
        </Reveal>
        
        {/* VIDEO 1: White Screen Bug */}
        <div className="demo-layout" style={{ marginBottom: '4rem' }}>
          <Reveal>
            <div className="video-container" style={{ borderRadius: '8px', overflow: 'hidden', background: '#000', border: '1px solid rgba(255,255,255,0.1)' }}>
              <video 
                controls 
                width="100%" 
                preload="metadata"
                src="/videos/WhiteScreenBug.mp4" 
              >
                Tu navegador no soporta el reproductor de video.
              </video>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="steps-panel">
            <h3>Checkout Navigation Failure</h3>
            <div className="demo-step">
              <span className="step-num">01</span>
              <p><strong>Expected Result</strong>The Trip Summary page should load correctly, displaying the previously selected flights and allowing the user to modify the itinerary.</p>
            </div>
            <div className="demo-step">
              <span className="step-num">02</span>
              <p><strong>Actual Result</strong>The application intermittently drops the session state, rendering a completely blank white space under the "Trip summary" header. The USD total and "Continue" button remain visible at the bottom, but the step "1" indicator is unclickable, trapping the user on a broken screen.</p>
            </div>
          </Reveal>
        </div>

        {/* VIDEO 2: DropDown Bug */}
        <div className="demo-layout">
          <Reveal>
            <div className="video-container" style={{ borderRadius: '8px', overflow: 'hidden', background: '#000', border: '1px solid rgba(255,255,255,0.1)' }}>
              <video 
                controls 
                width="100%" 
                preload="metadata"
                src="/videos/DropDownBug.mp4" 
              >
                Tu navegador no soporta el reproductor de video.
              </video>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="steps-panel">
            <h3>Unresponsive Passenger Details</h3>
            <div className="demo-step">
              <span className="step-num">01</span>
              <p><strong>Expected result</strong>The Adult 1 accordion expands so the user can edit Gender, Name, Last Name, Date of Birth, and Nationality.</p>
            </div>
            <div className="demo-step">
              <span className="step-num">02</span>
              <p><strong>Actual result</strong>The Adult 1 accordion does not expand when clicked. The Booking Holder accordion remains functional, but passenger details cannot be edited unless the user restarts the booking process.</p>
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}

function Report() {
  return (
    <section className="report-cta" id="report" aria-labelledby="report-title">
      <div className="wrap report-inner">
        <Reveal>
          <div className="section-kicker">05 / Full report and evidence</div>
          <h2 id="report-title">The details behind the findings.</h2>
          <p>
            Review the complete test report to inspect test cases, preconditions, steps, expected/actual results, and defect reproduction details.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="report-actions">
          <a className="button button-primary" href="/documents/Avianca_Manual_QA_Portfolio_Final.pdf" download="Avianca_Manual_QA_Portfolio_Final.pdf" data-testid="link-download-pdf">
            <span><FileText aria-hidden="true" /> Download PDF Version</span><ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <p className="footer-summary">
            This project demonstrates structured test design, risk-based thinking, execution, evidence collection, and defect reporting.
          </p>
          <div className="footer-tag">Independent QA<br />Portfolio snapshot</div>
        </div>
        <div className="footer-bottom">
          <BrandMark />
          <span><strong>Disclaimer:</strong> This is an independent portfolio project and is not affiliated with Avianca.</span>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <div className="wrap"><Hero /></div>
        <Overview />
        <Metrics />
        <Coverage />
        <Findings />
        <Demonstration />
        <Report />
      </main>
      <Footer />
    </div>
  );
}