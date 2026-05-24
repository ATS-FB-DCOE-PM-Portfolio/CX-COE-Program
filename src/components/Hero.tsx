import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../lib/animations';

const heroMetrics = [
  { value: '4', label: 'Products' },
  { value: '3.5yr', label: 'Tenure' },
  { value: '2M+', label: 'Profiles' },
  { value: '₹2.7L Cr', label: 'AUM' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,140,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-8"
          style={{
            background: 'var(--bg-surface)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-visible)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Anirudh TS
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-body text-lg md:text-xl mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Product Manager · PMP · Atlassian Agile
        </motion.p>

        {/* Thesis */}
        <motion.blockquote
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="relative text-lg md:text-xl font-body italic mb-12 px-6"
          style={{ color: 'var(--text-primary)' }}
        >
          <span className="gradient-text not-italic font-semibold">"</span>
          I don't manage products in sequence.{' '}
          <span className="gradient-text not-italic font-semibold">
            I architect systems where each product makes every other product smarter.
          </span>
          <span className="gradient-text not-italic font-semibold">"</span>
        </motion.blockquote>

        {/* Context line */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="text-sm mb-10 max-w-xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          3.5 years at Federal Bank's Digital Centre of Excellence — one of India's top-10 private banks
          (₹2.7L Cr AUM, 15M+ customers, NSE/BSE listed). Four concurrent products on a shared AI intelligence layer.
        </motion.p>

        {/* Metrics bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {heroMetrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-mono text-2xl md:text-3xl font-semibold gradient-text">{m.value}</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--text-secondary)' }}>
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Process credential line */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-8 text-[11px] font-mono"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981' }} />
            0 compliance rejections
          </span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>PMP®</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Atlassian Agile</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Hybrid Agile/Waterfall</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={7}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border-visible)' }}
          >
            <div className="w-1 h-1.5 rounded-full" style={{ background: 'var(--text-secondary)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
