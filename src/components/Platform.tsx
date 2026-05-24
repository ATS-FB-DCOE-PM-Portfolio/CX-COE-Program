import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../lib/animations';

const outcomes = [
  { value: '7→1', label: 'Siloed verticals unified', color: 'var(--accent-primary)' },
  { value: '40%', label: 'Lead response time ↓', color: 'var(--accent-secondary)' },
  { value: '~18%', label: 'Profile duplication eliminated', color: 'var(--accent-primary)' },
  { value: '0', label: 'Compliance rejections (3.5yr)', color: 'var(--accent-secondary)' },
];

export default function Platform() {
  return (
    <section id="platform" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>The Platform</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          CX-COE · Oracle CX AI
        </h2>
        <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          The intelligence layer that connects all four products. Buy-and-Build: Oracle foundation + custom data governance + custom API integration.
        </p>
      </motion.div>

      {/* Key decision */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1}
        className="rounded-xl p-6 md:p-8 mb-8"
        style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
      >
        <h3 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--accent-primary)' }}>
          The Decision That Created Friction
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { option: 'Full Buy', verdict: 'Fast, but locks into Oracle\'s default schema — not designed for Aadhaar KYC, NRI corridors, CBDC, and trade finance simultaneously.', rejected: true },
            { option: 'Full Build', verdict: '18+ months minimum, institutional-knowledge risk. Perfect fit, impractical timeline.', rejected: true },
            { option: 'Buy-and-Build', verdict: 'Oracle as foundation (4.10/5.00 weighted score). Custom governance layer for schema flexibility. Custom API layer for heterogeneous stacks.', rejected: false },
          ].map((o) => (
            <div
              key={o.option}
              className="rounded-lg p-4"
              style={{
                background: o.rejected ? 'var(--bg-primary)' : 'rgba(79,140,255,0.04)',
                border: `1px solid ${o.rejected ? 'var(--border-subtle)' : 'rgba(79,140,255,0.15)'}`,
                opacity: o.rejected ? 0.6 : 1,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold" style={{ color: o.rejected ? 'var(--text-secondary)' : 'var(--accent-primary)' }}>
                  {o.option}
                </span>
                {!o.rejected && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(79,140,255,0.15)', color: 'var(--accent-primary)' }}>Selected</span>}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{o.verdict}</p>
            </div>
          ))}
        </div>
        <p className="text-xs italic" style={{ color: 'var(--text-secondary)' }}>
          "Patching is the aggressive choice (disrupts existing). Rebuilding is conservative (consistent with the CX-COE investment already approved)."
          — The reframe that moved the room.
        </p>
      </motion.div>

      {/* Mechanism */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={2}
        className="rounded-xl p-6 md:p-8 mb-8"
        style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
      >
        <h3 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--accent-secondary)' }}>
          The EDA Mechanism
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-secondary)' }}>Trigger</p>
            <p className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
              Customer completes onboarding, initiates remittance, activates CBDC wallet, submits LC, books Bank Guarantee, or presents WaveBL eBL for settlement.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-secondary)' }}>Response</p>
            <p className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
              Oracle CX AI detects state-change. Webhook fires to assigned RM within seconds. SLA clock starts at event timestamp. ~4 hrs → ~2.4 hrs — enforced at infrastructure, not policy.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Outcomes */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={3}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {outcomes.map((o) => (
          <div key={o.label} className="rounded-lg p-5 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}>
            <div className="font-mono text-2xl md:text-3xl font-bold" style={{ color: o.color }}>{o.value}</div>
            <div className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>{o.label}</div>
          </div>
        ))}
      </motion.div>

      {/* What we underestimated */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={4}
        className="mt-6 rounded-lg p-5"
        style={{ background: 'rgba(255,107,74,0.04)', border: '1px solid rgba(255,107,74,0.1)' }}
      >
        <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-warm)' }}>
          ⟳ What We Underestimated
        </p>
        <p className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
          The custom data governance layer took 8 months, not 6. The overrun came from FedOne's trade finance schema — the most complex of the four, underscoped at decision stage. Trade finance required independent entity relationships (LC, BG, exporter, importer, correspondent bank) that none of the other products needed.
        </p>
      </motion.div>

      {/* Notion link */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={5} className="mt-6 text-center">
        <a
          href="https://www.notion.so/3669264876af8135887bf68b3be6a599"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: 'var(--accent-primary)' }}
        >
          Full ADRs, stakeholder map, and data dictionary on Notion →
        </a>
      </motion.div>
    </section>
  );
}
