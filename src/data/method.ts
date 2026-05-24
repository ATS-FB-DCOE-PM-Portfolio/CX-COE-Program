export interface MethodPrinciple {
  title: string;
  subtitle: string;
  evidence: {
    product: string;
    productId: string;
    story: string;
  };
  metric: string;
  icon: string;
}

export const methodPrinciples: MethodPrinciple[] = [
  {
    title: 'Architecture First',
    subtitle: 'I ask for 4 weeks of diagnosis before committing to a solution.',
    evidence: {
      product: 'Federal 24×7',
      productId: 'federal247',
      story: 'Business hired UX agency. I asked for 4 weeks. Three research streams independently proved architecture was the blocker — not UX. Saved months of wasted redesign.',
    },
    metric: '28% → 85%',
    icon: '🔬',
  },
  {
    title: 'Evidence Over Intuition',
    subtitle: 'Test the mechanism, not the outcome.',
    evidence: {
      product: 'Fed-E-Remit',
      productId: 'federemit',
      story: 'A/B tested price sensitivity: noise. Six weeks, ~$28K lost to the wrong hypothesis. Session replay showed opacity — not price. Correct fix: rate-lock + transparency.',
    },
    metric: '$180K recovered',
    icon: '🧪',
  },
  {
    title: 'Process as Infrastructure',
    subtitle: 'Enforce at the system level, not the policy level.',
    evidence: {
      product: 'CX-COE Platform',
      productId: 'platform',
      story: 'You cannot instruct 200 RMs to check queues faster. EDA webhook enforces response time at infrastructure level. ~4 hours → ~2.4 hours — structurally, not behaviorally.',
    },
    metric: '40% faster response',
    icon: '⚙️',
  },
];

export interface LearningChainLink {
  from: string;
  fromId: string;
  to: string;
  toId: string;
  learning: string;
  application: string;
}

export const learningChain: LearningChainLink[] = [
  {
    from: 'Federal 24×7',
    fromId: 'federal247',
    to: 'Fed-E-Remit',
    toId: 'federemit',
    learning: 'Session replay reveals root cause faster than funnel analytics',
    application: 'Used session replay to discover rate opacity (not price sensitivity)',
  },
  {
    from: 'Fed-E-Remit',
    fromId: 'federemit',
    to: 'FedOne',
    toId: 'fedone',
    learning: 'Test mechanism, not outcome. Understand why before you A/B test.',
    application: 'Session replay as Day-1 monitoring, not T+21 afterthought',
  },
  {
    from: 'Federal 24×7',
    fromId: 'federal247',
    to: 'Federal e-Rupee',
    toId: 'erupee',
    learning: 'Architecture creates the constraint, not the user.',
    application: 'Layer separation absorbs regulatory uncertainty without UX disruption',
  },
  {
    from: 'FedOne',
    fromId: 'fedone',
    to: 'All Products',
    toId: 'all',
    learning: 'Migration ≠ adoption. Technical quality and adoption are independent.',
    application: 'Generalized into launch methodology for all future products',
  },
];
