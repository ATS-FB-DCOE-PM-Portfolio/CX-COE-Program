import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Get in Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Let's Talk
        </h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Looking for PM roles where systems thinking and execution rigor matter.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {/* Email */}
        <a
          href="mailto:anirudhts@outlook.com"
          className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all card-hover"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <div className="text-left">
            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Email</div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>anirudhts@outlook.com</div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anirudhnts/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all card-hover"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--accent-primary)">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <div className="text-left">
            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>LinkedIn</div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>linkedin.com/in/anirudhnts</div>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+918825976262"
          className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all card-hover"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-visible)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div className="text-left">
            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>Phone</div>
            <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>+91 8825976262</div>
          </div>
        </a>
      </motion.div>

      {/* Resume download */}
      <motion.div
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={2}
        className="text-center mb-16"
      >
        <a
          href="./Anirudh_TS_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: 'var(--accent-primary)',
            color: '#fff',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume (PDF)
        </a>
      </motion.div>

      {/* Footer */}
      <div className="pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.notion.so/3669264876af813f9599f466c69ee528"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Deep-dive case studies on Notion →
            </a>
            <span style={{ color: 'var(--border-visible)' }}>·</span>
            <a
              href="https://github.com/AnirudhTS-Portfolio/CX-COE-Program"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              View source on GitHub →
            </a>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Built with React + Tailwind + Framer Motion. This portfolio is itself a product.
          </p>
        </div>
      </div>
    </section>
  );
}
