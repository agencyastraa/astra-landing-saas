"use client";

import { useState, useRef, useCallback } from "react";
import { cases } from "./caseStudiesData";

const fd = "var(--font-display), sans-serif";
const fb = "var(--font-body), sans-serif";

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const goTo = useCallback((dir: 1 | -1) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return cases.length - 1;
      if (next >= cases.length) return 0;
      return next;
    });
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? 1 : -1);
  };

  const renderTabs = (prefix: string) => (
    <div
      role="tablist"
      style={{
        display: "flex",
        border: "0.5px solid rgba(255,255,255,0.1)",
        borderRadius: 8,
        marginBottom: "2rem",
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {cases.map((cs, i) => (
        <button
          key={i}
          role="tab"
          id={`${prefix}-tab-${i}`}
          aria-selected={active === i}
          aria-controls={`${prefix}-panel-${i}`}
          onClick={() => setActive(i)}
          style={{
            flex: 1,
            padding: "1rem 0.5rem",
            minHeight: 44,
            background:
              active === i ? "rgba(241,42,41,0.15)" : "transparent",
            border: "none",
            borderRight:
              i < cases.length - 1
                ? "0.5px solid rgba(255,255,255,0.08)"
                : "none",
            fontFamily: fb,
            fontSize: "0.78rem",
            fontWeight: active === i ? 500 : 400,
            color:
              active === i ? "var(--red)" : "rgba(255,255,255,0.5)",
            textAlign: "center",
            lineHeight: 1.4,
            cursor: "pointer",
          }}
        >
          {cs.tab}
          <span
            style={{
              display: "block",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color:
                active === i
                  ? "rgba(241,42,41,0.5)"
                  : "rgba(255,255,255,0.2)",
              marginTop: 2,
            }}
          >
            {cs.tabSub}
          </span>
        </button>
      ))}
    </div>
  );

  const renderQuote = (photoSize: number) => (
    <div>
      <div
        style={{
          fontFamily: fd,
          fontSize: "2rem",
          fontWeight: 900,
          color: "var(--red)",
          lineHeight: 0.8,
          marginBottom: "0.5rem",
        }}
      >
        &ldquo;
      </div>
      <blockquote style={{ margin: 0, padding: 0 }}>
        <p
          style={{
            fontSize: "0.88rem",
            fontWeight: 300,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.65)",
            fontStyle: "normal",
            marginBottom: "0.75rem",
          }}
        >
          {c.quote}
        </p>
      </blockquote>
      <div
        style={{
          height: "0.5px",
          background: "rgba(255,255,255,0.08)",
          marginBottom: "0.75rem",
        }}
      />
      <cite
        style={{
          fontStyle: "normal",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <img
          src={c.quotePhoto}
          alt={`${c.quoteName}, ${c.quoteTitle}`}
          loading="lazy"
          style={{
            width: photoSize,
            height: photoSize,
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "var(--white)",
            }}
          >
            {c.quoteName}
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {c.quoteTitle}
          </div>
        </div>
      </cite>
    </div>
  );

  const renderProofTiles = (size: "desktop" | "mobile") => {
    const radius = size === "mobile" ? 10 : 6;
    const padding = size === "mobile" ? "1.1rem 1rem" : "1rem";
    const valSize = size === "mobile" ? "1.4rem" : "1.6rem";
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: size === "mobile" ? "0.75rem" : "1rem",
        }}
      >
        <div
          style={{
            background: "rgba(241,42,41,0.12)",
            borderRadius: radius,
            padding,
          }}
        >
          <div
            style={{
              fontFamily: fd,
              fontSize: valSize,
              fontWeight: 800,
              color: "var(--red)",
              lineHeight: 1,
            }}
          >
            {c.proofTiles[0].value}
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              marginTop: 4,
            }}
          >
            {c.proofTiles[0].caption}
          </div>
        </div>
        <div
          style={{
            background:
              size === "mobile" ? "#1a1614" : "rgba(255,255,255,0.05)",
            borderRadius: radius,
            padding,
          }}
        >
          <div
            style={{
              fontFamily: fd,
              fontSize: valSize,
              fontWeight: 800,
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            {c.proofTiles[1].value}
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 300,
              marginTop: 4,
            }}
          >
            {c.proofTiles[1].caption}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="m-cases"
      style={{
        padding: "4rem 4rem",
        background: "var(--black)",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* ── HEADER ── */}
        <div
          className="cases-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "1.75rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: fd,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--white)",
              lineHeight: 1.1,
            }}
          >
            Real accounts.
            <br />
            Real numbers.
          </h2>
          <p
            className="cases-sub"
            style={{
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 280,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            Active client results. No outliers, no ad-spend theater.
          </p>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP LAYOUT
        ══════════════════════════════════════ */}
        <div className="cases-desktop">
          {renderTabs("dt")}

          <div
            role="tabpanel"
            id={`dt-panel-${active}`}
            aria-labelledby={`dt-tab-${active}`}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 8,
            }}
          >
            {/* LEFT — situation */}
            <div
              style={{
                background: "#1a1614",
                padding: "2.5rem 2.25rem",
                borderRadius: "8px 0 0 8px",
              }}
            >
              <div
                style={{
                  fontFamily: fd,
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {c.client}
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "2rem",
                  fontWeight: 300,
                }}
              >
                {c.subtitle}
              </div>

              {/* Before Astra */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 6,
                  padding: "1.25rem 1.5rem",
                  borderLeft: "2px solid rgba(241,42,41,0.4)",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "0.6rem",
                    fontWeight: 500,
                  }}
                >
                  Before Astra
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {c.before}
                </p>
              </div>

              {/* What changed */}
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "0.6rem",
                    fontWeight: 500,
                  }}
                >
                  What changed
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {c.operationalChange}
                </p>
              </div>
            </div>

            {/* RIGHT — results */}
            <div
              style={{
                background: "#221e1b",
                padding: "2.5rem 2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--red)",
                }}
              >
                Results
              </p>

              {/* Hero metric */}
              <div
                aria-label={c.heroAriaLabel}
                style={{
                  borderBottom: "0.5px solid rgba(255,255,255,0.08)",
                  paddingBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: fd,
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    color: "var(--red)",
                    lineHeight: 1,
                  }}
                >
                  {c.heroMetric}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 300,
                    marginTop: "0.2rem",
                  }}
                >
                  {c.heroCaption}
                </div>
              </div>

              {/* Proof tiles */}
              {renderProofTiles("desktop")}

              {/* Quote */}
              {renderQuote(56)}
            </div>
          </div>

          {/* Desktop arrows + dots */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <button
              onClick={() => goTo(-1)}
              aria-label="Previous case study"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              &larr;
            </button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to case study ${i + 1}`}
                  style={{
                    width: active === i ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    border: "none",
                    background:
                      active === i
                        ? "var(--red)"
                        : "rgba(255,255,255,0.15)",
                    cursor: "pointer",
                    padding: 0,
                    transition:
                      "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(1)}
              aria-label="Next case study"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE LAYOUT
            One card at a time, swipeable.
            Top tabs only — no bottom pills.
        ══════════════════════════════════════ */}
        <div
          className="cases-mobile"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {renderTabs("mb")}

          <div
            role="tabpanel"
            id={`mb-panel-${active}`}
            aria-labelledby={`mb-tab-${active}`}
          >
            {/* Client + subtitle */}
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  fontFamily: fd,
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {c.client}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "0.3rem",
                  fontWeight: 300,
                }}
              >
                {c.subtitle}
              </div>
            </div>

            {/* Hero metric — largest element on mobile */}
            <div
              aria-label={c.heroAriaLabel}
              style={{
                background: "var(--red)",
                borderRadius: 10,
                padding: "1.5rem 1.25rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                Results
              </div>
              <div
                style={{
                  fontFamily: fd,
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "var(--white)",
                  lineHeight: 1,
                }}
              >
                {c.heroMetric}
              </div>
              <div
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 300,
                  marginTop: "0.4rem",
                  lineHeight: 1.5,
                }}
              >
                {c.heroCaption}
              </div>
            </div>

            {/* Proof tiles */}
            <div style={{ marginBottom: "0.75rem" }}>
              {renderProofTiles("mobile")}
            </div>

            {/* Before Astra */}
            <div
              style={{
                background: "#1a1614",
                borderRadius: 10,
                padding: "1.25rem",
                marginBottom: "0.75rem",
                borderLeft: "3px solid rgba(241,42,41,0.4)",
              }}
            >
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                Before Astra
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {c.before}
              </p>
            </div>

            {/* What changed */}
            <div
              style={{
                background: "#1a1614",
                borderRadius: 10,
                padding: "1.25rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "0.5rem",
                  fontWeight: 500,
                }}
              >
                What changed
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {c.operationalChange}
              </p>
            </div>

            {/* Quote */}
            <div
              style={{
                background: "#1a1614",
                borderRadius: 10,
                padding: "1.25rem",
              }}
            >
              {renderQuote(48)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
