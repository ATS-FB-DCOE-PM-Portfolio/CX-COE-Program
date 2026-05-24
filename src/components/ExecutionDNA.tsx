import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, viewportConfig } from '../lib/animations';

const ceremonies = [
  {
    frequency: 'Daily',
    activity: '15-min blocker resolution with Engineering',
    detail: 'Not status updates — those are in Jira',
  },
  {
    frequency: 'Bi-weekly',
    activity: 'Sprint demo: live product, not PowerPoint',
    detail: 'Stakeholders see working software',
  },
  {
    frequency: 'Monthly',
    activity: 'Compliance gate: UAT package reviewed',
    detail: '100% first-pass rate across 4 products',
  },
  {
    frequency: 'Per-sprint',
    activity: 'Retrospective → "What I Got Wrong" is the artifact',
    detail: 'Not a feel-good exercise — a correction mechanism',
  },
];

export default function ExecutionDNA() {
  return (
    <section id="execution" className="section">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>
          Execution DNA
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Hybrid Agile/Waterfall
        </h2>
        <p className="text-sm max-w-xl mx-auto italic" style={{ color: 'var(--accent-primary)' }}>
          "I am not asking you to change your process. I am changing when your process begins."
        </p>
      </motion.div>

      {/* Two-column: Agile vs Waterfall */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Agile side */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={0}
            className="rounded-xl p-6 relative overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)' }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}
              >
                ⚡
              </div>
              <div>
                <h3 className="font-display text-lg font-bold" style={{ color: '#3B82F6' }}>
                  Agile Governs the Build
                </h3>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Move fast
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {['2-week sprint cadence', 'Jira + Confluence', 'Daily standups with Eng', 'Sprint demos with stakeholders', 'Retrospectives → corrections'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full" style={{ background: '#3B82F6' }} />
                  <span className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Waterfall side */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            custom={1}
            className="rounded-xl p-6 relative overflow-hidden"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(245,158,11,0.2)',
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444)' }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}
              >
                🛡️
              </div>
              <div>
                <h3 className="font-display text-lg font-bold" style={{ color: '#F59E0B' }}>
                  Waterfall Governs the Release
                </h3>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                  Move right
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {['Legal review gate', 'Compliance UAT sign-off', 'RBI stage-gate approval', 'Security audit checkpoint', 'Production release authorization'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full" style={{ background: '#F59E0B' }} />
                  <span className="text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Connecting result bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={2}
          className="mt-6 rounded-xl p-5 text-center"
          style={{
            background: 'rgba(16,185,129,0.04)',
            border: '1px solid rgba(16,185,129,0.15)',
          }}
        >
          <div className="font-mono text-sm font-semibold mb-1" style={{ color: '#10B981' }}>
            The Result
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--text-primary)' }}>
            <span>Zero compliance rejections</span>
            <span style={{ color: 'var(--border-visible)' }}>·</span>
            <span>4 products</span>
            <span style={{ color: 'var(--border-visible)' }}>·</span>
            <span>3.5 years</span>
            <span style={{ color: 'var(--border-visible)' }}>·</span>
            <span>18 release cycles</span>
            <span style={{ color: 'var(--border-visible)' }}>·</span>
            <span>100% first-pass UAT</span>
          </div>
        </motion.div>
      </div>

      {/* Ceremonies as lived */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={3}
        className="max-w-3xl mx-auto"
      >
        <h3 className="text-xs uppercase tracking-[3px] text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
          Ceremonies as Lived
        </h3>
        <div className="space-y-1">
          {ceremonies.map((c, i) => (
            <motion.div
              key={c.frequency}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
              className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr_1fr] gap-4 py-4 items-start"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              <div className="font-mono text-xs font-semibold" style={{ color: 'var(--accent-primary)' }}>
                {c.frequency}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {c.activity}
              </div>
              <div className="text-xs hidden md:block" style={{ color: 'var(--text-secondary)' }}>
                {c.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
