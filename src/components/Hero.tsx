import { CheckIcon, PlayIcon, SparklesIcon } from './icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="heroGrid">
          <div className="heroLeft">
            <div className="badge">
              <SparklesIcon size={18} className="badgeIcon" />
              <span>AI receptionist built for high-intent inbound calls</span>
            </div>

            <h1 className="heroTitle">The cleanest way to capture every call and convert more customers.</h1>

            <p className="heroSubtitle">
              Recepta answers instantly, qualifies leads, books appointments, and routes urgent requests to your team.
              Always on. Always consistent.
            </p>

            <div className="heroCtas">
              <a className="btn btnPrimary btnLg" href="#demo">
                Start with AI Receptionist
              </a>
              <a className="btn btnOutline btnLg" href="#demo">
                <PlayIcon size={18} />
                Talk to AI Right now
              </a>
            </div>

            <div className="heroProof">
              <div className="proofItem">
                <CheckIcon size={18} className="proofIcon" />
                <span>24/7 instant pickup</span>
              </div>
              <div className="proofItem">
                <CheckIcon size={18} className="proofIcon" />
                <span>Lead capture + CRM-ready notes</span>
              </div>
              <div className="proofItem">
                <CheckIcon size={18} className="proofIcon" />
                <span>Human handoff when it matters</span>
              </div>
            </div>
          </div>

          <div className="heroRight" aria-label="Product preview">
            <div className="previewFrame">
              <div className="previewTop">
                <div className="previewPill">Live call</div>
                <div className="previewMeta">00:32</div>
              </div>

              <div className="previewBody">
                <div className="previewPlay" aria-hidden="true">
                  <PlayIcon size={22} />
                </div>
                <div className="previewOverlay">
                  <div className="previewLabel">Call summary</div>
                  <div className="previewText">
                    “New customer wants a quote. Preferred slot: tomorrow 2–4pm. Budget confirmed.”
                  </div>
                </div>
              </div>

              <div className="previewChips" aria-label="Industries">
                <span className="chip chipActive">Plumbing</span>
                <span className="chip">Clinics</span>
                <span className="chip">Law firms</span>
                <span className="chip">Home services</span>
              </div>
            </div>

            <div className="miniCards">
              <div className="miniCard">
                <div className="miniKpi">+18%</div>
                <div className="miniLabel">More booked jobs</div>
              </div>
              <div className="miniCard">
                <div className="miniKpi">&lt;1s</div>
                <div className="miniLabel">Pickup time</div>
              </div>
              <div className="miniCard">
                <div className="miniKpi">24/7</div>
                <div className="miniLabel">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
