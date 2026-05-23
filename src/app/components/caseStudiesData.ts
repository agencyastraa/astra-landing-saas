export interface CaseStudy {
  tab: string;
  tabSub: string;
  client: string;
  subtitle: string;
  heroMetric: string;
  heroCaption: string;
  heroAriaLabel: string;
  proofTiles: { value: string; caption: string }[];
  before: string;
  operationalChange: string;
  quote: string;
  quoteName: string;
  quoteTitle: string;
  quotePhoto: string;
}

export const cases: CaseStudy[] = [
  {
    tab: "OneTool",
    tabSub: "DTC Ecommerce",
    client: "OneTool",
    subtitle: "DTC Ecommerce \u00b7 Physical Product \u00b7 LATAM",
    heroMetric: "3x",
    heroCaption: "Daily order volume in 75 days",
    heroAriaLabel: "3x daily order volume in 75 days",
    proofTiles: [
      { value: "\u221250%", caption: "CPA reduction" },
      { value: "75 days", caption: "Timeline" },
    ],
    before:
      "OneTool was doing 25 orders a day with cost per purchase climbing every month. The founder was managing ads alone, with zero visibility into what was actually working. Every time they pushed more budget, CPA went up. Creative had gone stale, audiences were burned out, growth had stalled.",
    operationalChange:
      "We mapped the winning ads in their category over the last 90 days, batch-produced creative on the angles already printing in the market, and rebuilt the funnel for speed. The founder stopped managing ads. Acquisition stopped being the bottleneck \u2014 inventory became the new ceiling.",
    quote:
      "We went from 35 orders a day to over 100 in 75 days. We had to pause because we ran out of inventory, a problem I\u0027d never had before.",
    quoteName: "Oswaldo Arias",
    quoteTitle: "CEO \u00b7 OneTool \u00b7 Colombia",
    quotePhoto: "/testimonial-onetool.png",
  },
  {
    tab: "Xcore.fit",
    tabSub: "B2B SaaS",
    client: "Xcore.fit",
    subtitle: "B2B SaaS \u00b7 Vertical SaaS for gyms \u00b7 LATAM (12 countries)",
    heroMetric: "8\u201312/mo",
    heroCaption: "New gym signups across 12 countries, on autopilot",
    heroAriaLabel:
      "8 to 12 new gym signups per month across 12 countries, on autopilot",
    proofTiles: [
      { value: "12 countries", caption: "Simultaneous, no localization team" },
      { value: "Sales team grounded", caption: "No more travel-to-prospect" },
    ],
    before:
      "Xcore.fit was operating in 12 countries but almost every new gym signup came from a referral or a flight their sales team took. Growth was real, but completely dependent on human effort. If the team stopped moving, the pipeline stopped moving.",
    operationalChange:
      "We built a localized paid acquisition engine and a chatbot that pre-qualifies signups before the sales team touches them. The team stopped traveling to prospect. Pipeline became predictable across 12 countries simultaneously \u2014 without adding headcount.",
    quote:
      "We were completely dependent on referrals. Now we have 8 to 12 new gyms signing every month across 12 countries, on autopilot.",
    quoteName: "Jos\u00e9 Quintero",
    quoteTitle: "CEO \u00b7 Xcore.fit \u00b7 Mexico",
    quotePhoto: "/testimonial-xcore.png",
  },
  {
    tab: "IDACA",
    tabSub: "Multi-Location Healthcare",
    client: "IDACA",
    subtitle: "Multi-Location Healthcare \u00b7 Venezuela",
    heroMetric: "Full attribution",
    heroCaption: "Every campaign now traceable to paying patients",
    heroAriaLabel:
      "Full attribution, every campaign now traceable to paying patients",
    proofTiles: [
      { value: "21 days", caption: "From kickoff to revenue-attributed reporting" },
      { value: "Channel-level visibility", caption: "Decisions on revenue, not on leads" },
    ],
    before:
      "IDACA was already running a $1M+/month healthcare operation across multiple locations, but their ad accounts were a black box. Reports showed leads, clicks, and impressions \u2014 none of it tied back to which campaigns actually brought paying patients in. Every budget decision was a guess. They couldn\u0027t tell if a campaign was funding itself or just buying activity.",
    operationalChange:
      "We rebuilt attribution from the source, mapping ad activity to paying patients in their CRM. The team stopped optimizing on leads and started optimizing on revenue per channel. Pausing a campaign stopped being a gamble.",
    quote:
      "We were spending real money on ads every month and couldn\u0027t tell you which campaign actually brought a paying patient through the door. Astra fixed that. Now every dollar in the ad account has a name next to it.",
    quoteName: "Leyse Orlando",
    quoteTitle: "General Manager \u00b7 IDACA \u00b7 Venezuela",
    quotePhoto: "/testimonial-idaca.png",
  },
];
