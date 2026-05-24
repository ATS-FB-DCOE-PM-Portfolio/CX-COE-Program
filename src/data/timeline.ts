export interface TimelineEvent {
  date: string;
  label: string;
  detail: string;
  productIds: string[];
  step: number;
  learningMoment?: string;
}

export const timelineEvents: TimelineEvent[] = [
  { date: 'Aug 2022', label: 'CX-COE Begins', detail: 'Oracle CX AI selected via weighted scoring (4.10/5.00). Buy-and-Build decision.', productIds: [], step: 0 },
  { date: 'Q1 2023', label: 'Federal 24×7 Connected', detail: 'First node. HNI scoring begins. Generate & Freeze live.', productIds: ['federal247'], step: 1, learningMoment: 'Session replay > funnel analytics for root cause discovery.' },
  { date: 'Q2 2023', label: 'Fed-E-Remit Connected', detail: 'NRI behavioral layer added. Two products feeding intelligence.', productIds: ['federemit'], step: 2, learningMoment: 'Test the mechanism, not the outcome. A/B after you understand why.' },
  { date: 'Q3 2024', label: 'Flywheel Complete', detail: 'FedOne + e-Rupee connected simultaneously. All four products live.', productIds: ['fedone', 'erupee'], step: 3, learningMoment: 'Architecture absorbs regulatory uncertainty. Layer separation validated.' },
  { date: 'Jan 2025', label: 'FedOne Launch', detail: 'Trade finance digitized. 120+ clients migrated, zero incidents.', productIds: ['fedone'], step: 3, learningMoment: 'Migration ≠ adoption. Plan for both. Separately. Before launch.' },
  { date: 'May 2025', label: 'e-Rupee GA', detail: 'National Pathfinder Award. <12 private banks in production.', productIds: ['erupee'], step: 4 },
  { date: 'H2 2025', label: 'Suite Expansion', detail: 'ISO 20022 migration, WaveBL eBL, BG, Forward contracts, CGSE, UX Suite.', productIds: ['federemit', 'fedone', 'erupee'], step: 5 },
];

export interface Award {
  name: string;
  scope: string;
  year: string;
  metric: string;
  cause: string;
  processLink: string;
}

export const awards: Award[] = [
  { name: 'Pathfinder', scope: 'National', year: '2025', metric: 'Highest HNI TLV growth rate', cause: 'Generate & Freeze + EDA webhook at 60 seconds', processLink: 'Architecture-first diagnosis → 28% to 85% completion → HNI pipeline acceleration' },
  { name: 'Interstellar', scope: 'Zone #1', year: '2024', metric: 'HNI acquisition velocity (1,000+ accounts)', cause: 'System speed, not RM hustle', processLink: 'Process as infrastructure: EDA enforces response time at system level' },
  { name: 'ScoreBig', scope: 'Zone #1', year: '2024', metric: 'CX CRM performance', cause: 'Buy-and-Build outperformed every other zone', processLink: 'Evidence-based vendor decision: 7 weighted criteria → hybrid architecture' },
  { name: 'CASA Mission Possible', scope: 'Zone #1', year: '2024', metric: 'HNI liability and deposit growth', cause: 'Flywheel compounding — two consecutive years', processLink: 'Compounding effect: 4 products → unified profile → cross-sell surface' },
  { name: 'CASA Samriddhi', scope: 'Zone #1', year: '2023', metric: 'CASA growth', cause: 'Flywheel compounding — two consecutive years', processLink: 'Consistent sprint delivery: zero compliance rejections enabled speed' },
];

export const skills = {
  'Product & Delivery': ['Backlog Ownership', 'User Stories & ACs', 'BRDs', 'UAT Governance', 'KPI/OKR', 'A/B Testing', 'Funnel Optimization', 'Session Replay', 'Feature Flags', 'Sprint Planning', 'Hybrid Agile/Waterfall', 'Regulatory Stage-Gating'],
  'Data & Analytics': ['SQL (Advanced)', 'Tableau', 'Power BI', 'Looker', 'IBM TM1', 'KPI Dashboards', 'CRO', 'Post-Launch Analysis', 'Data Quality Governance', 'Funnel Analytics'],
  'Architecture & Domain': ['Oracle CX AI', 'EDA', 'API Design', 'SWIFT ISO 20022', 'WaveBL eBL', 'CBDC', 'Infosys Finacle', 'Trade Finance (LC, BG, Forwards, CGSE)', 'FEMA/LRS', 'KYC/AML'],
  'Tools': ['Jira', 'Confluence', 'ADO', 'MS Project', 'Smartsheet', 'Power Automate', 'Advanced Excel'],
  'Stakeholder & Communication': ['Cross-Functional Translation', 'Influence-Without-Authority', 'Executive Decision Papers', 'Board-Level Presentations', 'Vendor Management'],
};
