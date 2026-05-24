import { motion } from 'framer-motion';
import { skills } from '../data/timeline';
import { fadeInUp, viewportConfig } from '../lib/animations';

const certifications = [
  { name: 'PMP®', org: 'PMI', detail: 'Valid through 2029' },
  { name: 'Atlassian Agile', org: 'Atlassian', detail: '2026' },
  { name: 'SQL Advanced', org: 'HackerRank', detail: '2026' },
  { name: 'JAIIB', org: 'IIBF', detail: '2024' },
];

const categoryColors: Record<string, string> = {
  'Product & Delivery': 'var(--accent-primary)',
  'Data & Analytics': 'var(--accent-secondary)',
  'Architecture & Domain': '#a78bfa',
  'Tools': 'var(--accent-gold)',
  'Stakeholder & Communication': 'var(--accent-warm)',
};

// Skills that are core to the agile narrative — highlighted
const highlightedSkills = new Set([
  'Sprint Planning', 'Hybrid Agile/Waterfall', 'Regulatory Stage-Gating',
  'A/B Testing', 'Session Replay', 'Funnel Optimization', 'UAT Governance',
  'Jira', 'Confluence',
  'Oracle CX AI', 'EDA', 'API Design',
  'Cross-Functional Translation', 'Influence-Without-Authority',
]);

export default function Skills() {
  return (
    <section className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Capabilities</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Skills & Certifications
        </h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Highlighted skills are directly demonstrated in the case studies above.
        </p>
      </motion.div>

      {/* Certifications */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
      >
        {certifications.map((c) => (
          <div
            key={c.name}
            className="rounded-lg p-4 text-center"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
          >
            <div className="font-mono text-sm font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>{c.name}</div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{c.org} · {c.detail}</div>
          </div>
        ))}
      </motion.div>

      {/* Skill categories */}
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={i + 2}
          >
            <h3
              className="text-xs uppercase tracking-wider font-semibold mb-3"
              style={{ color: categoryColors[category] || 'var(--text-secondary)' }}
            >
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => {
                const isHighlighted = highlightedSkills.has(skill);
                return (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full transition-colors"
                    style={{
                      background: isHighlighted
                        ? `${categoryColors[category] || 'var(--accent-primary)'}12`
                        : 'var(--bg-secondary)',
                      border: `1px solid ${isHighlighted
                        ? `${categoryColors[category] || 'var(--accent-primary)'}30`
                        : 'var(--border-visible)'}`,
                      color: isHighlighted
                        ? categoryColors[category] || 'var(--accent-primary)'
                        : 'var(--text-primary)',
                      fontWeight: isHighlighted ? 600 : 400,
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
