import { motion } from 'framer-motion';
import { awards } from '../data/timeline';
import { fadeInUp, viewportConfig } from '../lib/animations';

export default function Awards() {
  return (
    <section id="awards" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Validation</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Awards
        </h2>
        <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          The awards are the measurement. The flywheel is the mechanism.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {awards.map((award, i) => (
          <motion.div
            key={award.name + award.year}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={i}
            className="rounded-xl p-5 card-hover"
            style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="font-display text-base font-bold"
                style={{ color: i === 0 ? 'var(--accent-gold)' : 'var(--text-primary)' }}
              >
                {award.name}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                {award.year}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{
                  background: award.scope === 'National' ? 'rgba(255,184,77,0.1)' : 'rgba(79,140,255,0.08)',
                  color: award.scope === 'National' ? 'var(--accent-gold)' : 'var(--accent-primary)',
                }}
              >
                {award.scope}
              </span>
            </div>

            <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
              {award.metric}
            </p>

            <div
              className="text-[11px] leading-relaxed pt-3 mb-3"
              style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)' }}
            >
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Mechanism: </span>
              {award.cause}
            </div>

            {/* Process connection — NEW */}
            <div
              className="text-[10px] leading-relaxed rounded-md px-3 py-2"
              style={{
                background: 'rgba(139,92,246,0.04)',
                border: '1px solid rgba(139,92,246,0.08)',
                color: '#8B5CF6',
              }}
            >
              <span className="font-semibold">Process → Outcome: </span>
              {award.processLink}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
