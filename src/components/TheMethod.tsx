import { useState } from 'react';
import { motion } from 'framer-motion';
import { methodPrinciples } from '../data/method';
import { fadeInUp, viewportConfig } from '../lib/animations';

export default function TheMethod() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="method" className="section">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-16"
      >
        <p
          className="text-xs uppercase tracking-[3px] mb-3"
          style={{ color: 'var(--text-secondary)' }}
        >
          The Method
        </p>
        <h2
          className="font-display text-3xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          How I Deliver Products
        </h2>
        <p
          className="text-sm max-w-xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          Not ceremony lists. Three principles that repeat across every product — each proven by a specific moment where the obvious path was wrong.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {methodPrinciples.map((principle, i) => (
          <motion.div
            key={principle.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={i}
            className="rounded-xl p-6 relative overflow-hidden group"
            style={{
              background: 'var(--bg-secondary)',
              border: `1px solid ${hoveredIdx === i ? 'var(--accent-primary)' : 'var(--border-visible)'}`,
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(79,140,255,0.04) 0%, transparent 70%)',
              }}
            />

            {/* Icon */}
            <div className="text-2xl mb-4">{principle.icon}</div>

            {/* Title */}
            <h3
              className="font-display text-lg font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {principle.title}
            </h3>

            {/* Subtitle / principle statement */}
            <p
              className="text-sm italic mb-6 leading-relaxed"
              style={{ color: 'var(--accent-primary)' }}
            >
              "{principle.subtitle}"
            </p>

            {/* Evidence box */}
            <div
              className="rounded-lg p-4 mb-4"
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="text-[10px] uppercase tracking-wider font-semibold mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                Evidence: {principle.evidence.product}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-primary)', opacity: 0.85 }}
              >
                {principle.evidence.story}
              </p>
            </div>

            {/* Metric */}
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-lg font-bold gradient-text"
              >
                {principle.metric}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom credential bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={4}
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-secondary)' }} />
          0 compliance rejections
        </span>
        <span style={{ color: 'var(--border-visible)' }}>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-primary)' }} />
          4 products · 3.5 years
        </span>
        <span style={{ color: 'var(--border-visible)' }}>·</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-gold)' }} />
          Hybrid Agile/Waterfall
        </span>
        <span style={{ color: 'var(--border-visible)' }}>·</span>
        <span>PMP® · Atlassian Agile</span>
      </motion.div>
    </section>
  );
}
