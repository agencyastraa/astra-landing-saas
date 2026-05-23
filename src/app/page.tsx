import CaseStudies from "./components/CaseStudies";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

export default function Home() {
  return (
    <div style={{ fontFamily: fb }}>

      {/* ── 1. NAV ── */}
      <nav className="m-nav" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 4rem",
        borderBottom: "0.5px solid var(--g200)",
        background: "var(--white)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div>
          <img src="/logo-astra.png" alt="Astra Agency" style={{ height: 52, mixBlendMode: "multiply" }} />
        </div>
        <a href="https://calendly.com/admin-agencyastra/30min" target="_blank" rel="noopener noreferrer" className="m-nav-cta" style={{
          fontFamily: fb,
          fontSize: "0.85rem",
          fontWeight: 500,
          padding: "0.65rem 1.4rem",
          background: "var(--red)",
          color: "var(--white)",
          border: "none",
          borderRadius: 5,
          textDecoration: "none",
          display: "inline-block",
        }}>
          Get an audit →
        </a>
      </nav>

      {/* ── 2. HERO ── */}
      <section className="m-hero" style={{
        padding: "4rem 4rem 3.5rem",
        maxWidth: 960,
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--g600)",
          marginBottom: "1.5rem",
          border: "0.5px solid var(--g200)",
          padding: "0.4rem 1.1rem",
          borderRadius: 100,
          background: "var(--white)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0, display: "inline-block" }} />
          Profit-first Meta Ads for SaaS and DTC brands spending $10K+/mo
        </div>

        <h1 style={{
          fontFamily: fd,
          fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
          fontWeight: 900,
          lineHeight: 1.0,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--black)",
          marginBottom: "1.25rem",
        }}>
          Lower CAC.<br />
          Higher margin.<br />
          <em style={{ color: "var(--red)" }}>Same ad budget.</em>
        </h1>

        <p className="m-hero-sub" style={{
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "var(--g600)",
          maxWidth: 620,
          margin: "0 auto 2rem",
        }}>
          Profit-first Meta Ads for SaaS and DTC founders spending $10K+/mo. Your agency sends you a monthly PDF while your CAC quietly doubles. We fix that — senior strategists on your account, weekly creative cycles, and a live dashboard that replaces the Friday report.
        </p>

        <a href="https://calendly.com/admin-agencyastra/30min" target="_blank" rel="noopener noreferrer" className="btn-primary m-btn-full">
          Get your 20-min Meta Ads teardown →
        </a>
        <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--g400)" }}>
          Free. No deck. No pitch. We show you 3 leaks in your account live on the call.
        </p>
      </section>

      {/* ── 3. TRUST BAR ── */}
      <div className="m-trust" style={{
        padding: "2.5rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {[
            { num: "15+", lbl: "Founders backed" },
            { num: "$1M+", lbl: "Profit driven" },
            { num: "3.2x", lbl: "Avg ROAS lift" },
            { num: "4 yrs", lbl: "Running profitable Meta accounts" },
          ].map((s, i, arr) => (
            <div key={i} className="m-trust-stat" style={{
              padding: "1.25rem 1.5rem",
              borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}>
              <div style={{
                fontFamily: fd,
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "var(--white)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 400,
              }}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. LOGOS ── */}
      {(() => {
        const logos = [
          { src: "/logo-1.png", alt: "Client logo" },
          { src: "/logo-2.png", alt: "Client logo", height: 90 },
          { src: "/logo-3.png", alt: "Client logo" },
          { src: "/logo-4.png", alt: "Client logo" },
          { src: "/logo-5.png", alt: "Client logo", height: 96 },
          { src: "/logo-6.png", alt: "Publimax" },
          { src: "/logo-7.png", alt: "WiseGuyz" },
        ];
        return (
          <section className="m-logos" style={{
            padding: "1.75rem 0",
            background: "var(--white)",
            borderBottom: "0.5px solid var(--g200)",
          }}>
            <p style={{
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--g400)",
              textAlign: "center",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}>
              Brands we run profit for
            </p>
            <div className="marquee-outer">
              <div className="marquee-track">
                {[...logos, ...logos, ...logos].map((logo, i) => (
                  <div key={i} className="marquee-logo">
                    <img src={logo.src} alt={logo.alt} style={logo.height ? { height: logo.height } : undefined} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── 5. CASE STUDIES ── */}
      <CaseStudies />

      {/* ── 6. PROBLEM ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
        borderTop: "0.5px solid var(--g200)",
        background: "var(--off)",
      }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <p className="section-label">The real problem</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            color: "var(--black)",
          }}>
            You already tried the agency route. Here&apos;s why it didn&apos;t work.
          </h2>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            A senior closed the sale. A junior ran your account. Three months later you were staring at a report full of clicks and signups that never converted, wondering where your budget went.
          </p>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            You couldn&apos;t get anyone on the phone. Your ad account was in their name. And when you finally walked away, you lost everything. The data, the history, the attribution work. Back to zero.
          </p>

          <div style={{
            fontFamily: fd,
            fontSize: "1.3rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--black)",
            borderLeft: "3px solid var(--red)",
            paddingLeft: "1.25rem",
            margin: "1.5rem 0",
            lineHeight: 1.3,
          }}>
            Sound familiar?
          </div>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginBottom: "0.75rem" }}>
            After auditing hundreds of accounts, the ads were rarely the problem. What was broken was always the same three things.
          </p>

          <div style={{
            border: "0.5px solid var(--g200)",
            borderRadius: 8,
            overflow: "hidden",
            marginTop: "1.5rem",
            background: "var(--white)",
          }}>
            {[
              { n: "01", title: "Wrong priorities", desc: "Your budget was going to what looked busy on the dashboard, not to what was actually driving paying customers." },
              { n: "02", title: "A weak funnel", desc: "No amount of ad spend fixes a funnel that drops users between signup and activation. You need the right message, the right landing page, and the right onboarding before you need more traffic." },
              { n: "03", title: "Zero visibility", desc: "You had no clear picture of which campaigns were generating paying customers versus burning budget on signups that churned. Every decision was a guess." },
            ].map((item, i, arr) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.25rem",
                padding: "1.1rem 1.75rem",
                borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
              }}>
                <div style={{ fontFamily: fd, fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.1em", color: "var(--red)", minWidth: 24, paddingTop: 2 }}>{item.n}</div>
                <div>
                  <div style={{ fontFamily: fd, fontWeight: 800, fontSize: "1.05rem", textTransform: "uppercase", marginBottom: "0.2rem", letterSpacing: "0.02em" }}>{item.title}</div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 300, color: "var(--g600)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.7, color: "var(--g600)", marginTop: "1.25rem" }}>
            That&apos;s what Astra fixes. Not just the campaigns. The entire customer acquisition equation behind them.
          </p>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ── */}
      <section className="m-section" style={{
        padding: "4rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>What founders say</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            color: "var(--white)",
          }}>
            What founders say
          </h2>
          <div className="m-testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {[
              {
                quote: "We were completely dependent on referrals. Now we have 8 to 12 new gyms signing every month across 12 countries, on autopilot.",
                photo: "/testimonial-xcore.png",
                name: "Jos\u00e9 Quintero",
                role: "CEO \u00b7 Xcore.fit \u00b7 Mexico",
              },
              {
                quote: "Before Astra, we were spending a lot of money every month with no idea what was working. The clarity alone was worth it.",
                photo: "/testimonial-idaca.png",
                name: "Leyse Orlando",
                role: "General Manager \u00b7 IDACA \u00b7 Venezuela",
              },
              {
                quote: "We went from 35 orders a day to over 100 in 75 days. We had to pause because we ran out of inventory, a problem I\u0027d never had before.",
                photo: "/testimonial-onetool.png",
                name: "Oswaldo Arias",
                role: "CEO \u00b7 OneTool \u00b7 Colombia",
              },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#1a1614",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                padding: "1.25rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                <div style={{ fontFamily: fd, fontSize: "2rem", fontWeight: 900, color: "var(--red)", lineHeight: 0.8, marginBottom: "0.25rem" }}>&ldquo;</div>
                <p style={{ fontSize: "0.84rem", fontWeight: 300, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", fontStyle: "normal", flex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ height: "0.5px", background: "rgba(255,255,255,0.08)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <img src={t.photo} alt={t.name} style={{
                    width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "0.82rem", color: "var(--white)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COMPARISON ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
        background: "var(--white)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">Why Astra</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--black)",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}>
            Not all agencies<br />are the same.
          </h2>

          <div className="m-comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* Other agencies card */}
            <div style={{
              border: "0.5px solid var(--g200)",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <div style={{
                padding: "0.85rem 1.5rem",
                borderBottom: "0.5px solid var(--g200)",
                background: "var(--off)",
              }}>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--g400)" }}>Other agencies</div>
              </div>
              {[
                "Optimizes for ROAS while CAC quietly climbs",
                "Senior closes the sale, junior runs the account",
                "A monthly PDF full of impressions and CPCs",
                "Three months of \"testing\" before anything moves",
                "Their ad account, their pixel, their attribution",
                "Ecommerce playbooks run on SaaS funnels (or vice versa)",
                "You\u2019re one of 40+ accounts in a queue",
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "0.85rem 1.5rem",
                  borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  background: "var(--white)",
                }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--g300)", flexShrink: 0, marginTop: 2 }}>&#x2715;</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "var(--g400)", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Astra card */}
            <div style={{
              border: "2px solid var(--red)",
              borderRadius: 10,
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                padding: "0.85rem 1.5rem",
                borderBottom: "0.5px solid rgba(241,42,41,0.15)",
                background: "rgba(241,42,41,0.04)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--red)" }}>Astra Agency</div>
              </div>
              {[
                "Optimizes for CAC payback and contribution margin",
                "The strategist who built your plan runs your account",
                "Live dashboard: CAC, conversion velocity, channel-level profit",
                "First winning creative live in under 14 days",
                "Your account, your pixel, your data — always",
                "SaaS-native or DTC-native playbook, never one forced on the other",
                "Max 10 accounts at a time, by design",
              ].map((item, i, arr) => (
                <div key={i} style={{
                  padding: "0.85rem 1.5rem",
                  borderBottom: i < arr.length - 1 ? "0.5px solid var(--g200)" : "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  background: "var(--white)",
                }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--red)", flexShrink: 0, marginTop: 2 }}>&#x2713;</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "var(--black)", lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. WEEK ONE ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
        background: "var(--white)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">Week one</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginBottom: "2rem",
            color: "var(--black)",
          }}>
            Day 1 to first winning ad:{" "}
            <span style={{ color: "var(--red)" }}>14 days.</span>
          </h2>

          <div className="m-timeline-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            position: "relative",
          }}>
            {/* Dashed line connecting cards */}
            <div className="m-timeline-line" style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              right: "10%",
              height: 1,
              background: "repeating-linear-gradient(to right, var(--g200) 0, var(--g200) 6px, transparent 6px, transparent 12px)",
              zIndex: 0,
            }} />

            {[
              { label: "Day 1\u20133", desc: "Onboarding call. Full account audit. Competitor and funnel teardown \u2014 done by the strategist who\u2019ll run your account, not handed off." },
              { label: "Day 4\u20137", desc: "Attribution rebuilt, creative library produced, test campaigns live." },
              { label: "Day 8\u201314", desc: "First winning creative identified and ready to scale." },
            ].map((step, i) => (
              <div key={i} style={{
                border: "0.5px solid var(--g200)",
                borderRadius: 8,
                padding: "1.5rem 1.25rem",
                background: "var(--white)",
                position: "relative",
                zIndex: 1,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}>
                <div style={{
                  fontFamily: fd,
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  marginBottom: "0.65rem",
                }}>
                  {step.label}
                </div>
                <p style={{ fontSize: "0.92rem", fontWeight: 400, color: "var(--black)", lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. OUR EDGE ── */}
      <section className="m-section" style={{
        padding: "4.5rem 4rem",
        background: "var(--off)",
        borderTop: "0.5px solid var(--g200)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p className="section-label">Our edge</p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            textTransform: "uppercase",
            marginBottom: "1rem",
            color: "var(--black)",
          }}>
            We start from what&apos;s already converting{" "}
            <span style={{ color: "var(--red)" }}>in your category.</span>
          </h2>

          <p style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "var(--g600)",
            maxWidth: 680,
            marginBottom: "2rem",
          }}>
            Before we touch your budget, we map every winning ad in your category from the last 90 days — competitor angles, funnel patterns, creative formats — and use it as the floor, not the ceiling, of what we test.
          </p>

          <div className="m-edge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {[
              {
                title: "Winning ads mapped",
                desc: "Every top-performing ad in your category from the last 90 days. We know what\u2019s converting before we write a single line of copy.",
              },
              {
                title: "Angles decoded",
                desc: "We cluster the positioning patterns your competitors are using and surface the angles your funnel is missing.",
              },
              {
                title: "Funnels audited",
                desc: "We map your top competitors\u2019 trial flows, demo bookings, pricing pages (SaaS) or PDPs, checkout, and post-purchase (DTC) \u2014 and find their leaks before we build yours.",
              },
            ].map((card, i) => (
              <div key={i} style={{
                border: "0.5px solid var(--g200)",
                borderRadius: 8,
                padding: "1.5rem 1.25rem",
                background: "var(--white)",
              }}>
                <div style={{
                  fontFamily: fd,
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  marginBottom: "0.5rem",
                  color: "var(--black)",
                }}>
                  {card.title}
                </div>
                <p style={{ fontSize: "0.84rem", fontWeight: 300, color: "var(--g600)", lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "2rem",
            borderLeft: "3px solid var(--red)",
            paddingLeft: "1.25rem",
          }}>
            <p style={{
              fontFamily: fd,
              fontSize: "1.15rem",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--black)",
              lineHeight: 1.3,
              marginBottom: "0.5rem",
            }}>
              Your day-one creatives aren&apos;t a gamble. They&apos;re backed by hundreds of ads that already proved what works in your category.
            </p>
            <p style={{ fontSize: "0.84rem", color: "var(--g400)", fontWeight: 400 }}>
              What used to take a month of testing now happens in less than a week.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. CTA ── */}
      <section className="m-cta" style={{
        background: "var(--red)",
        padding: "8rem 4rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem", fontWeight: 500 }}>
            Free account teardown
          </p>
          <h2 style={{
            fontFamily: fd,
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "var(--white)",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}>
            Get your 20-min Meta Ads teardown.
          </h2>
          <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            Send us your account. A senior reviews it. We get on a 20-minute call and show you the 3 biggest leaks live — what&apos;s costing you money, what&apos;s hidden, and what would move the needle if fixed this month. If we&apos;re not a fit, you walk with a teardown worth keeping.
          </p>
          <a href="https://calendly.com/admin-agencyastra/30min" target="_blank" rel="noopener noreferrer" className="btn-white m-btn-full">
            Book the teardown →
          </a>
          <p style={{ marginTop: "1.25rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
            For SaaS and DTC brands spending $10K+/mo on Meta Ads.
          </p>
        </div>
      </section>

      {/* ── 12. FOOTER ── */}
      <footer className="m-footer" style={{
        padding: "1.75rem 4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}>
        <img src="/logo-astra.png" alt="Astra Agency" style={{ height: 90, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
          © 2026 Astra Agency. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
