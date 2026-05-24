export interface PivotPhase {
  label: string;
  duration: string;
  color: 'discovery' | 'build' | 'test' | 'scale';
}

export interface Pivot {
  wrongAssumption: string;
  evidence: string;
  pivotDecision: string;
  correctedOutcome: string;
  lesson: string;
  appliedTo?: string;
  appliedToId?: string;
  phases: PivotPhase[];
}

export interface StakeholderStory {
  resistance: string;
  resolution: string;
  principle: string;
}

export interface Execution {
  deliveryModel: string;
  sprintCadence: string;
  tools: string[];
  uatPassRate: string;
  complianceReviews: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  cxDate: string;
  status: 'live' | 'shipped';
  color: string;
  headline: string;
  metrics: { value: string; label: string; detail?: string }[];
  problem: string;
  diagnosis: string;
  build: string;
  outcomes: string[];
  gotWrong: string;
  signalTo: string;
  signalFrom: string;
  notionUrl?: string;
  pivot: Pivot;
  stakeholderStory?: StakeholderStory;
  execution: Execution;
}

export const products: Product[] = [
  {
    id: 'federal247',
    name: 'Federal 24×7',
    subtitle: 'Consumer Onboarding',
    period: 'Dec 2020 – Ongoing',
    cxDate: 'Q1 2023',
    status: 'live',
    color: '#4f8cff',
    headline: 'Diagnosed 72% abandonment as architecture, not UX — then rebuilt it.',
    metrics: [
      { value: '2M+', label: 'Profiles', detail: 'compliant profiles processed' },
      { value: '82%', label: 'TAT Reduction', detail: '11 min → 2 min' },
      { value: '3×', label: 'Completion Lift', detail: '28% → 85%' },
      { value: '1,000+', label: 'HNI Accounts', detail: 'since CX AI connection' },
    ],
    problem: 'The business contracted a UX agency to simplify the onboarding form. 72% abandonment looked like a UX problem. It wasn\'t.',
    diagnosis: 'Three research streams — funnel analytics (12K sessions), exit surveys (340 responses), session replay (150 sessions) — all pointed to the same thing: 62% of abandonment happened at the post-submission wait screen. 78% completed the form. They left after. The system gated account confirmation behind a KYC queue with no visibility and no guaranteed timeline.',
    build: 'Generate & Freeze architecture. GENERATE: Aadhaar API validates identity, Computer Vision validates documents, account number issued — under 2 minutes. Customer committed. FREEZE: Video KYC scheduled at customer\'s convenience, asynchronous. The regulatory posture is unchanged. The wait is eliminated.',
    outcomes: [
      '2,000,000+ compliant profiles processed',
      '82% TAT reduction (11 min → 2 min)',
      '3× completion rate (28% → 85%)',
      '1,000+ HNI accounts since CX AI connection',
      'Zone #1 HNI acquisition (Interstellar 2024)',
      'National HNI TLV growth (Pathfinder 2025)',
    ],
    gotWrong: 'Initial Video KYC scheduling was passive — a link and a deadline. FREEZE completion was below target. Fix: proactive SMS/email sequencing and RM outreach for HNI profiles not completing within 48 hours. Lesson: solving one abandonment point exposes the next.',
    signalTo: 'Verified identity · Onboarding completion event',
    signalFrom: 'HNI flag · RM assignment · Segment classification',
    notionUrl: 'https://www.notion.so/3669264876af813da744d946665622ac',

    pivot: {
      wrongAssumption: 'UX friction causes 72% abandonment. The business had already hired a UX agency to simplify the form.',
      evidence: '3 research streams (12K sessions, 340 surveys, 150 session replays) all pointed to the same finding: 62% abandoned AFTER completing the form — at the wait screen. 78% finished the form. The problem was architecture, not UX.',
      pivotDecision: 'Generate & Freeze: separate deterministic steps (Aadhaar validation, doc check, account generation) from human-judgment steps (Video KYC). Eliminate the wait entirely.',
      correctedOutcome: '28% → 85% completion. 11 min → 2 min TAT. 2M+ profiles. Not a UX fix — an architectural separation.',
      lesson: 'Solving one abandonment point exposes the next.',
      appliedTo: 'Fed-E-Remit: session replay revealed rate opacity, not price sensitivity',
      appliedToId: 'federemit',
      phases: [
        { label: 'Diagnosis', duration: '4 weeks', color: 'discovery' },
        { label: 'Architecture', duration: '2 weeks', color: 'discovery' },
        { label: 'Build G&F', duration: '8 weeks', color: 'build' },
        { label: 'UAT', duration: '4 weeks', color: 'test' },
        { label: 'Scale', duration: 'Ongoing', color: 'scale' },
      ],
    },
    stakeholderStory: {
      resistance: 'The business had already contracted a UX agency. Asking for 4 weeks of diagnosis before committing felt like stalling.',
      resolution: 'Requested 4 weeks of diagnostic data before the agency started. Three research streams independently converged on architecture, not UX. Data moved the room.',
      principle: 'Let data override organizational momentum.',
    },
    execution: {
      deliveryModel: 'Hybrid Agile/Waterfall',
      sprintCadence: '2-week sprints',
      tools: ['Jira', 'Confluence', 'Tableau', 'Session Replay'],
      uatPassRate: '100% first-pass',
      complianceReviews: 6,
    },
  },
  {
    id: 'federemit',
    name: 'Fed-E-Remit',
    subtitle: 'Cross-Border Remittance',
    period: 'Jan 2021 – Ongoing',
    cxDate: 'Q2 2023',
    status: 'live',
    color: '#00d4aa',
    headline: 'Grew the market and fixed the funnel simultaneously — without letting one block the other.',
    metrics: [
      { value: '18%', label: 'Market Share ↑', detail: 'South India corridor' },
      { value: '$2.4M', label: 'Net-New Volume', detail: 'Q1 post-launch' },
      { value: '23%', label: 'Abandon ↓', detail: 'rate-lock intervention' },
      { value: '5→0', label: 'Corridors', detail: 'UAE, UK, USA, SG, CA' },
    ],
    problem: 'Two simultaneous jobs: add 5 new corridors (UAE, UK, USA, Singapore, Canada) and reduce funnel abandonment. In remittance, these conflict — corridor compliance overhead delays funnel work.',
    diagnosis: 'First hypothesis for abandonment: price sensitivity. A/B tested spread reduction — conversion delta within noise. Six weeks and ~$28K in unrealized revenue lost to the wrong hypothesis. Session replays (200 sessions) showed hesitation at confirmation, not fee display. The problem was opacity: "I don\'t know if this rate is guaranteed."',
    build: 'GTM: parallelized compliance and treasury work (previously sequential), cutting corridor launch from 8 to 5 weeks. Funnel: shipped itemized rate breakdown + rate-lock confirmation with countdown timer. Also delivered SWIFT ISO 20022 migration across all 5 corridors, unified multi-device Send Money flow, inline FEMA/LRS compliance surfacing, and real-time transaction tracking.',
    outcomes: [
      '18% regional market share increase',
      '$2.4M net-new remittance volume',
      '23% cart abandonment reduction',
      '$180K annualized revenue recovered',
      'ISO 20022: all 5 corridors, zero disruption',
      'Unified UX across mobile, web, internet banking',
    ],
    gotWrong: 'Spent 6 weeks and ~$28K on the wrong hypothesis (price sensitivity). Lesson: form a hypothesis about mechanism, not just outcome. Run A/B after you understand why, not before.',
    signalTo: 'Transaction behavior · Corridor intelligence',
    signalFrom: 'NRI propensity scores · Proactive FX alerts',
    notionUrl: 'https://www.notion.so/3669264876af81168362ce3f0a9bfa71',

    pivot: {
      wrongAssumption: 'Price sensitivity drives checkout abandonment. Ran A/B test on spread reduction.',
      evidence: 'A/B conversion delta: within noise. Six weeks and ~$28K in unrealized revenue lost. Session replays (200 sessions) showed hesitation at the confirmation step — "I don\'t know if this rate is guaranteed." Not price. Opacity.',
      pivotDecision: 'Shipped itemized rate breakdown (mid-rate + spread + fee in both currencies) + rate-lock confirmation with countdown timer. Transparency, not discounting.',
      correctedOutcome: '23% abandonment reduction. $180K annualized recovery. 35 bps conversion improvement. Treasury P&L: zero margin impact.',
      lesson: 'Form a hypothesis about mechanism, not just outcome. Run A/B after you understand why, not before.',
      appliedTo: 'FedOne: session replay as Day-1 monitoring, not T+21 afterthought',
      appliedToId: 'fedone',
      phases: [
        { label: 'Wrong A/B', duration: '6 weeks', color: 'discovery' },
        { label: 'Session Replay', duration: '2 weeks', color: 'discovery' },
        { label: 'Root Cause', duration: '1 week', color: 'discovery' },
        { label: 'Build Fix', duration: '3 weeks', color: 'build' },
        { label: 'Validate', duration: '2 weeks', color: 'test' },
      ],
    },
    stakeholderStory: {
      resistance: 'Treasury felt parallelizing corridor launches created contingent risk. Compliance felt the process was being shortened without approval.',
      resolution: 'Every provisional margin tagged "contingent on compliance approval." No shortcuts — resequencing only. Result: ~5 weeks per corridor vs. ~8.',
      principle: 'Reframe: not faster process, just better sequencing. Same gates, different order.',
    },
    execution: {
      deliveryModel: 'Hybrid Agile/Waterfall',
      sprintCadence: '2-week sprints',
      tools: ['Jira', 'Confluence', 'Session Replay', 'A/B Testing'],
      uatPassRate: '100% first-pass',
      complianceReviews: 5,
    },
  },
  {
    id: 'erupee',
    name: 'Federal e-Rupee',
    subtitle: 'CBDC · 0-to-1 Greenfield',
    period: 'Dec 2022 – Ongoing',
    cxDate: 'Q3 2024',
    status: 'live',
    color: '#a78bfa',
    headline: 'Built one of India\'s earliest private-bank CBDCs from zero — among <12 banks in production.',
    metrics: [
      { value: 'May 2025', label: 'GA Launch', detail: 'one of India\'s earliest' },
      { value: '<12', label: 'Banks Live', detail: 'private banks with CBDC' },
      { value: '0→1', label: 'Greenfield', detail: 'wallet + compliance + settlement' },
      { value: '2', label: 'RBI Updates', detail: 'absorbed, UX untouched' },
    ],
    problem: 'RBI authorized CBDC pilots in 2022. Framework was explicit on regulatory requirements, silent on implementation. Several banks waited for stability. They were still waiting at our May 2025 launch.',
    diagnosis: 'The risk was not building under uncertainty — it was ceding first-mover position. The framework would not stabilize on a comfortable timeline. The architecture needed to absorb regulatory changes without disrupting the consumer experience.',
    build: 'Two-layer architecture: a versioned regulatory layer (RBI API, settlement, identity binding, audit trail) and a stable consumer layer (wallet UX, onboarding, transactions). Framework update = regulatory layer only. Consumer layer: untouched. Also integrated WaveBL eBL for cross-border trade settlement via CBDC — the first direct product-to-product edge in the flywheel.',
    outcomes: [
      'May 6, 2025 GA launch',
      '<12 private banks in India with live CBDC',
      'Full greenfield: wallet, compliance, settlement',
      '2 RBI framework updates absorbed, UX unchanged',
      'WaveBL eBL: cross-border CBDC settlement live',
    ],
    gotWrong: 'Initial dormancy intervention used automated push notifications at 30-day inactivity. Engagement was below target. Fix: RM-led personal outreach for HNI dormant accounts; automated push reserved for mass segment. The unified CX AI profile made this segmentation executable.',
    signalTo: 'Wallet adoption signals · Usage patterns',
    signalFrom: 'Segment nudges · Dormancy risk flags',
    notionUrl: 'https://www.notion.so/3669264876af81c6986fdd57143c43dd',

    pivot: {
      wrongAssumption: 'Automated push notifications would re-engage dormant CBDC wallets at 30-day inactivity.',
      evidence: 'Engagement rate below target. Mass automated outreach lacked personalization. HNI customers expected relationship-manager contact, not push notifications.',
      pivotDecision: 'Segmented intervention: RM-led personal outreach for HNI dormant accounts, automated push reserved for mass segment. Oracle CX AI unified profile made the HNI/mass distinction executable at scale.',
      correctedOutcome: 'Targeted dormancy intervention by segment. HNI re-engagement through relationship, not automation.',
      lesson: 'The same intervention at different segments produces different results. Segment before you automate.',
      appliedTo: 'Generalized: CX AI segmentation enables targeted intervention across all products',
      phases: [
        { label: 'Regulatory Build', duration: '12 months', color: 'build' },
        { label: 'Layer Separation', duration: '4 months', color: 'build' },
        { label: 'GA Launch', duration: 'May 2025', color: 'scale' },
        { label: 'Dormancy Fix', duration: '6 weeks', color: 'discovery' },
        { label: 'WaveBL Integration', duration: 'H2 2025', color: 'build' },
      ],
    },
    stakeholderStory: {
      resistance: 'Leadership wanted to wait for RBI framework stability before committing engineering resources.',
      resolution: '"The risk is not building under uncertainty — it is ceding first-mover position." Layer separation architecture meant framework changes affected only the regulatory layer. Consumer layer was insulated.',
      principle: 'Architectural decisions can absorb strategic uncertainty. Design for change, not stability.',
    },
    execution: {
      deliveryModel: 'Hybrid Agile/Waterfall',
      sprintCadence: '2-week sprints',
      tools: ['Jira', 'Confluence', 'RBI Compliance Tracker'],
      uatPassRate: '100% first-pass',
      complianceReviews: 4,
    },
  },
  {
    id: 'fedone',
    name: 'FedOne',
    subtitle: 'Enterprise Business Banking',
    period: '2024 – Launch Jan 2025',
    cxDate: 'Q3 2024',
    status: 'shipped',
    color: '#ff6b4a',
    headline: 'Rebuilt legacy platform against organizational resistance — because patching was the riskier choice.',
    metrics: [
      { value: '14hr', label: 'Saved per LC', detail: 'trade finance digitization' },
      { value: '99.9%', label: 'SLA', detail: 'Jan 2025 – Mar 2026' },
      { value: '120+', label: 'Clients', detail: 'migrated, zero incidents' },
      { value: '200%', label: 'Capacity ↑', detail: 'zero headcount added' },
    ],
    problem: 'The organization wanted to patch Fed-E-Biz. But Fed-E-Biz was architecturally incompatible with Oracle CX AI — keeping it meant a permanent gap in the enterprise flywheel.',
    diagnosis: 'Patching optimizes for the next six months and creates a rearchitecture obligation in year two. Rebuilding is slower now and removes a structural ceiling permanently. The Compliance Head — escalating unresolved regulatory exposure — became the decisive voice. Their regulatory credibility carried the room where a technology argument alone would not have.',
    build: 'Full trade finance lifecycle digitized: LC, forward contracts, Bank Guarantees, CGSE export bills. SLA enforcement at infrastructure level via EDA (same pattern as CX-COE). Every complaint state change fires a notification; breach-threshold triggers escalation before the window closes.',
    outcomes: [
      '14 hours saved per LC application',
      '200% platform capacity increase (3×, zero headcount)',
      '120+ clients migrated, zero incidents',
      '99.9% SLA adherence',
      '62% average TTR reduction',
      '34% DAU lift within 60 days (post-correction)',
    ],
    gotWrong: 'Technical migration was flawless. Behavioral adoption was not. Day-30 DAU below target by ~25%. 68% of support tickets were "how do I do X" — not bugs. Session replay should have been Day-1 monitoring. Migration ≠ adoption. Fix: biweekly check-ins with 5 enterprise clients, 3 highest-friction workflows redesigned with ops managers as co-designers.',
    signalTo: 'Complaint lifecycle · Trade finance events',
    signalFrom: '360° enterprise client view · SLA escalations',
    notionUrl: 'https://www.notion.so/3669264876af814cacb8c779d471701d',

    pivot: {
      wrongAssumption: 'Flawless technical migration would equal smooth adoption. Day-30 target: healthy DAU.',
      evidence: 'Day-30 DAU below target by ~25%. Support tickets at 2.3× projected. Session replay revealed: 68% of tickets were "how do I do X" — users navigating to where Fed-E-Biz had placed functions, finding them absent.',
      pivotDecision: 'Three corrections: (1) Session replay as Day-1 monitoring, not T+21. (2) Biweekly check-ins with 5 enterprise clients. (3) Three highest-friction workflows redesigned with ops managers as co-designers, not just testers.',
      correctedOutcome: '34% DAU increase within 60 days. 40% task completion time reduction. +11 pts CSAT. 28% secondary feature adoption increase.',
      lesson: 'Technical quality and adoption velocity are independent variables. Plan for both. Separately. Before launch.',
      appliedTo: 'Generalized: migration ≠ adoption. Applied to all future product launches.',
      phases: [
        { label: 'Build & Test', duration: '8 months', color: 'build' },
        { label: 'Migration', duration: 'Jan 2025', color: 'test' },
        { label: 'Adoption Gap', duration: 'Day 1-30', color: 'discovery' },
        { label: 'Correction', duration: '60 days', color: 'build' },
        { label: 'Recovery', duration: 'Ongoing', color: 'scale' },
      ],
    },
    stakeholderStory: {
      resistance: 'Organization preferred patching Fed-E-Biz. Rebuilding felt risky and slow.',
      resolution: 'Reframed: "Patching is the aggressive choice — it disrupts the existing system. Rebuilding is conservative — it is consistent with the CX-COE investment." The Compliance Head\'s regulatory credibility was non-substitutable in carrying the room.',
      principle: 'Identify whose credibility is irreplaceable in that specific decision. Influence-without-authority: route through the stakeholder whose voice carries unique weight.',
    },
    execution: {
      deliveryModel: 'Hybrid Agile/Waterfall',
      sprintCadence: '2-week sprints',
      tools: ['Jira', 'Confluence', 'Session Replay', 'Tableau'],
      uatPassRate: '100% first-pass',
      complianceReviews: 3,
    },
  },
];
