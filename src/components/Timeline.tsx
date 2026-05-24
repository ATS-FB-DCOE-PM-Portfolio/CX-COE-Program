import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timeline';
import { fadeInUp, viewportConfig } from '../lib/animations';

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Compounding</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Impact Timeline
        </h2>
        <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          3.5 years of layered delivery. Each milestone enabled — and taught — the next.
        </p>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
          style={{ background: 'var(--border-visible)' }}
        />

        {timelineEvents.map((event, i) => {
          const colors: Record<string, string> = {
            federal247: '#4f8cff',
            federemit: '#00d4aa',
            erupee: '#a78bfa',
            fedone: '#ff6b4a',
          };
          const dotColor = event.productIds.length > 0
            ? colors[event.productIds[0]] || 'var(--accent-primary)'
            : 'var(--accent-primary)';

          return (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i}
              className="relative pl-12 md:pl-16 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: dotColor,
                  background: i === timelineEvents.length - 1 ? dotColor : 'var(--bg-primary)',
                  boxShadow: `0 0 8px ${dotColor}33`,
                }}
              />

              {/* Date badge */}
              <div className="flex items-center gap-3 mb-1.5">
                <span
                  className="font-mono text-xs font-semibold px-2 py-0.5 rounded"
                  style={{ background: 'var(--bg-surface)', color: dotColor }}
                >
                  {event.date}
                </span>
                {event.productIds.map(pid => (
                  <span key={pid} className="w-1.5 h-1.5 rounded-full" style={{ background: colors[pid] }} />
                ))}
              </div>

              {/* Label */}
              <h3 className="font-display text-base md:text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {event.label}
              </h3>

              {/* Detail */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {event.detail}
              </p>

              {/* Learning moment callout */}
              {event.learningMoment && (
                <div
                  className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2"
                  style={{
                    background: 'rgba(139,92,246,0.04)',
                    border: '1px solid rgba(139,92,246,0.1)',
                  }}
                >
                  <span className="text-xs mt-0.5" style={{ color: '#8B5CF6' }}>📝</span>
                  <span className="text-xs leading-relaxed" style={{ color: '#8B5CF6' }}>
                    <span className="font-semibold">Learning: </span>
                    {event.learningMoment}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
