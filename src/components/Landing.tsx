import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import { FactoryIcon, SparklesIcon } from './icons'
import useTilt from '../hooks/useTilt'

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: 'sparkles' | 'factory'
}) {
  const Icon = icon === 'sparkles' ? SparklesIcon : FactoryIcon
  const tilt = useTilt(10)

  return (
    <div className="featureCard" ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      <div className="featureIcon">
        <Icon size={20} />
      </div>
      <div className="featureTitle">{title}</div>
      <div className="featureDesc">{description}</div>
    </div>
  )
}

function TiltCard({ className, children }: { className: string; children: ReactNode }) {
  const tilt = useTilt(10)

  return (
    <div className={className} ref={tilt.ref} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
      {children}
    </div>
  )
}

export default function Landing() {
  const pricingPlans = [
    {
      name: 'Basic Plan',
      setup: '$99 setup',
      monthly: '$50/month',
      summary: ['Simple, reliable call handling', '1 revision / month', '1 phone number included'],
      details: [
        'Handles basic information calls',
        '1 revision per month (minor changes only)',
        'Fully built and deployed by our AI team',
        '1 phone number included',
        '24/7 availability',
        'Perfect for: Businesses that want around-the-clock call coverage without complexity',
      ],
    },
    {
      name: 'Starter Plan',
      setup: '$129 setup',
      monthly: '$70/month',
      summary: ['Appointment booking + info handling', '3 revisions / month', 'Call transfer + 2 numbers'],
      details: [
        'Appointment booking + basic call information handling',
        '3 revision rounds per month (moderate changes)',
        'Partial AI customization with your input',
        '2 phone numbers included',
        '24/7 availability',
        'Call transfer functionality',
        'Perfect for: Service-oriented businesses looking to manage calls and schedules efficiently',
      ],
    },
    {
      name: 'Pro Plan',
      setup: '$199 setup',
      monthly: '$90/month',
      summary: ['Advanced call handling', 'SMS/email automations', '8 revisions + 4 numbers'],
      details: [
        'Appointment booking + advanced call handling',
        'SMS and email workflow automation',
        '8 revision rounds per month',
        'Fully custom AI built to your exact specifications',
        '4 phone numbers included',
        'Call handling aligned with your company’s business hours',
        'Call transfer functionality',
        'Perfect for: Businesses seeking full-featured automation and professional call management',
      ],
    },
  ]

  const industries = [
    {
      name: 'Plumbing',
      bestFor: 'Emergency + residential calls',
      typicalLift: 'More booked jobs',
    },
    {
      name: 'Dental',
      bestFor: 'High-volume appointment desks',
      typicalLift: 'Fewer no-shows',
    },
    {
      name: 'Real estate',
      bestFor: 'Inbound buyer + seller inquiries',
      typicalLift: 'Faster lead response',
    },
    {
      name: 'Legal',
      bestFor: 'Intake-heavy practice teams',
      typicalLift: 'More qualified consultations',
    },
    {
      name: 'Cleaning',
      bestFor: 'Recurring service bookings',
      typicalLift: 'Higher retention rate',
    },
    {
      name: 'HVAC',
      bestFor: 'Urgent service coordination',
      typicalLift: 'Better dispatch speed',
    },
  ]
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [openPlan, setOpenPlan] = useState<number | null>(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndustry((current) => (current + 1) % industries.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [industries.length])

  const activeDetails = industries[activeIndustry]

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="section" id="product">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Everything you need to turn missed calls into captured opportunities.</h2>
              <p className="sectionSubtitle">
                Designed for precision, reliability, and real business impact, so every caller feels heard, and every
                interaction drives value.
              </p>
            </div>

            <div className="featureGrid">
              <FeatureCard
                icon="sparkles"
                title="Intelligent call handling"
                description="Clear, structured conversations that answer questions, qualify leads, and guide callers smoothly without confusion."
              />
              <FeatureCard
                icon="factory"
                title="Appointment booking that actually works"
                description="Real-time scheduling aligned with your availability, reducing friction and eliminating back-and-forth."
              />
              <FeatureCard
                icon="sparkles"
                title="On-brand communication, every time"
                description="Your tone. Your messaging. Your process. Delivered consistently across every call."
              />
              <FeatureCard
                icon="factory"
                title="Smart call transfers"
                description="Instant routing to the right team member when human attention is required, no awkward delays."
              />
              <FeatureCard
                icon="sparkles"
                title="Automated follow-ups"
                description="SMS and email workflows that confirm bookings, send reminders, and keep prospects engaged."
              />
              <FeatureCard
                icon="factory"
                title="Actionable call summaries"
                description="Clean, structured notes with intent, key details, and next steps, ready for your CRM or internal team."
              />
              <FeatureCard
                icon="sparkles"
                title="Scalable phone coverage"
                description="Multiple numbers, 24/7 availability, and configurable business-hour logic to match your operations."
              />
              <FeatureCard
                icon="factory"
                title="Continuous refinement"
                description="Ongoing revision rounds to adapt scripts, flows, and automation as your business evolves."
              />
            </div>

            <div className="sectionOutro">
              <p className="sectionOutroLine">Built to remove friction.</p>
              <p className="sectionOutroLine">Built to increase conversions.</p>
              <p className="sectionOutroLine">Built so you never miss revenue again.</p>
            </div>

            <div className="sectionCtaRow" id="demo">
              <a className="btn btnPrimary btnLg" href="#pricing">
                See pricing
              </a>
              <a className="btn btnOutline btnLg" href="#industries">
                Explore industries
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="container">
            <div className="split">
              <div>
                <h2 className="sectionTitle">Fits your industry, without feeling generic.</h2>
                <p className="sectionSubtitle">
                  From home services to clinics, Recepta keeps calls structured, calm, and conversion-first.
                </p>
              </div>

              <TiltCard className="panel">
                <div className="panelRow">
                  <div className="panelItem">
                    <div className="panelLabel">Best for</div>
                    <div className="panelValue">{activeDetails.bestFor}</div>
                  </div>
                  <div className="panelItem">
                    <div className="panelLabel">Typical lift</div>
                    <div className="panelValue">{activeDetails.typicalLift}</div>
                  </div>
                </div>

                <div className="chipGrid">
                  {industries.map((industry, index) => (
                    <button
                      key={industry.name}
                      type="button"
                      className={`chip ${index === activeIndustry ? 'chipActive' : ''}`}
                      onClick={() => setActiveIndustry(index)}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Simple pricing. Premium experience.</h2>
              <p className="sectionSubtitle">Start with AI. Add humans when you want the extra touch.</p>
            </div>

            <div className="pricingGrid">
              {pricingPlans.map((plan, index) => (
                <TiltCard key={plan.name} className="pricingCard">
                  <div className="pricingName">{plan.name}</div>
                  <div className="pricingPrice">
                    {plan.setup} · {plan.monthly}
                  </div>
                  <div className="pricingDesc">{plan.summary[0]}</div>
                  <ul className="pricingBullets">
                    {plan.summary.slice(0, 3).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <button className="btn btnPrimary btnLg" type="button" onClick={() => setOpenPlan(index)}>
                    View details
                  </button>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {openPlan !== null && (
          <div className="modalOverlay" role="dialog" aria-modal="true" aria-label={`${pricingPlans[openPlan].name} details`}>
            <div className="modalCard">
              <div className="modalHeader">
                <div>
                  <div className="pricingName">{pricingPlans[openPlan].name}</div>
                  <div className="pricingPrice">
                    {pricingPlans[openPlan].setup} · {pricingPlans[openPlan].monthly}
                  </div>
                </div>
                <button className="modalClose" type="button" onClick={() => setOpenPlan(null)} aria-label="Close">
                  ×
                </button>
              </div>
              <ul className="modalList">
                {pricingPlans[openPlan].details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="modalActions">
                <button className="btn btnPrimary btnLg" type="button" onClick={() => setOpenPlan(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="footer" id="company">
          <div className="container footerInner">
            <img className="footerLogo" src="/components/logoR.png" alt="Recepta" />
            <div className="footerText">© {new Date().getFullYear()} Recepta. Less hassle, more hustle.</div>
          </div>
        </footer>
      </main>
    </>
  )
}
