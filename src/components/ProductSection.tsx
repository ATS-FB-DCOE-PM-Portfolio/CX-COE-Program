import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '../data/products';
import { fadeInUp, viewportConfig } from '../lib/animations';

const phaseColors = {
  discovery: '#8B5CF6',
  build: '#3B82F6',
  test: '#F59E0B',
  scale: '#10B981',
};

function MetricCard({ value, label, detail, color }: { value: string; label: string; detail?: string; color: string }) {
  return (
    <div
      className="rounded-lg p-4 text-center"
      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
    >
      <div className="font-mono text-xl md:text-2xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs font-medium mt-1" style={{ color: 'var(--text-primary)' }}>{label}</div>
      {detail && <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{detail}</div>}
    </div>
  );
}

function PivotTimeline({ product }: { product: Product }) {
  const { pivot } = product;

  return (
    <div className="space-y-6">
      {/* Phase timeline bar */}
      <div>
        <div className="flex items-center gap-1 mb-3">
          {pivot.phases.map((phase, i) => (
            <div key={i} className="flex-1 group relative">
              <div
                className="h-2 rounded-full transition-all duration-300 group-hover:h-3"
                style={{ background: phaseColors[phase.color] }}
              />
              <div className="text-[9px] font-mono mt-1.5 text-center" style={{ color: 'var(--text-secondary)' }}>
                {phase.label}
              </div>
              <div className="text-[8px] font-mono text-center" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                {phase.duration}
              </div>
            </div>
          ))}
        </div>
        {/* Phase legend */}
        <div className="flex flex-wrap gap-4 mt-3">
          {(['discovery', 'build', 'test', 'scale'] as const).map((phase) => (
            <div key={phase} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: phaseColors[phase] }} />
              <span className="text-[9px] uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {phase}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pivot story cards */}
      <div className="space-y-3">
        {/* Wrong assumption */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg p-4"
          style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs">❌</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#EF4444' }}>
              Wrong Assumption
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
            {pivot.wrongAssumption}
          </p>
        </motion.div>

        {/* Evidence arrow */}
        <div className="flex justify-center">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>

        {/* Evidence */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg p-4"
          style={{ background: 'rgba(139,92,246,0.04)', border: '1px solid rgba(139,92,246,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs">🔍</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#8B5CF6' }}>
              Evidence
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
            {pivot.evidence}
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>

        {/* Pivot decision */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg p-4"
          style={{ background: 'rgba(59,130,246,0.04)', border: '1px solid rgba(59,130,246,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs">🔄</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#3B82F6' }}>
              Pivot Decision
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
            {pivot.pivotDecision}
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>

        {/* Corrected outcome */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg p-4"
          style={{ background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.1)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs">✅</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: '#10B981' }}>
              Corrected Outcome
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
            {pivot.correctedOutcome}
          </p>
        </motion.div>
      </div>

      {/* Lesson learned + learning chain */}
      <div
        className="rounded-lg p-4 mt-4"
        style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }}
      >
        <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-gold)' }}>
          📝 Lesson Learned
        </div>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
          {pivot.lesson}
        </p>
        {pivot.appliedTo && (
          <div className="flex items-start gap-2 pt-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <span className="text-xs mt-0.5" style={{ color: 'var(--accent-primary)' }}>→</span>
            <span className="text-xs" style={{ color: 'var(--accent-primary)' }}>
              <span className="font-semibold">Applied to: </span>
              {pivot.appliedTo}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'impact' | 'pivot'>('impact');

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      custom={index}
      className="rounded-xl overflow-hidden card-hover"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-visible)',
      }}
    >
      {/* Card header — always visible */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: product.color }}>
                {product.name}
              </h3>
              <span
                className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{
                  background: product.status === 'live' ? 'rgba(0,212,170,0.1)' : 'rgba(79,140,255,0.1)',
                  color: product.status === 'live' ? 'var(--accent-secondary)' : 'var(--accent-primary)',
                }}
              >
                {product.status}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {product.subtitle} · {product.period}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="text-[10px] font-mono px-3 py-1 rounded-md"
              style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
            >
              CX AI: {product.cxDate}
            </div>
            <div
              className="text-[10px] font-mono px-3 py-1 rounded-md"
              style={{ background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}
            >
              {product.execution.sprintCadence}
            </div>
          </div>
        </div>

        <p className="text-sm md:text-base mb-6" style={{ color: 'var(--text-primary)', opacity: 0.9 }}>
          {product.headline}
        </p>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {product.metrics.map((m) => (
            <MetricCard key={m.label} {...m} color={product.color} />
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-semibold mt-4 transition-colors"
          style={{ color: product.color, cursor: 'pointer', background: 'none', border: 'none' }}
        >
          {expanded ? 'Collapse' : 'Read case study'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            ▾
          </motion.span>
        </button>
      </div>

      {/* Expanded case study */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              {/* Tab switcher */}
              <div className="flex gap-1 pt-6 mb-6">
                <button
                  onClick={() => setActiveTab('impact')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                  style={{
                    background: activeTab === 'impact' ? `${product.color}15` : 'transparent',
                    color: activeTab === 'impact' ? product.color : 'var(--text-secondary)',
                    border: `1px solid ${activeTab === 'impact' ? `${product.color}30` : 'transparent'}`,
                    cursor: 'pointer',
                  }}
                >
                  Impact
                </button>
                <button
                  onClick={() => setActiveTab('pivot')}
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                  style={{
                    background: activeTab === 'pivot' ? `${product.color}15` : 'transparent',
                    color: activeTab === 'pivot' ? product.color : 'var(--text-secondary)',
                    border: `1px solid ${activeTab === 'pivot' ? `${product.color}30` : 'transparent'}`,
                    cursor: 'pointer',
                  }}
                >
                  The Pivot
                </button>
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                {activeTab === 'impact' ? (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: product.color }}>
                        The Problem
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                        {product.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: product.color }}>
                        The Diagnosis
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                        {product.diagnosis}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: product.color }}>
                        The Build
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                        {product.build}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: product.color }}>
                        Outcomes
                      </h4>
                      <div className="space-y-1">
                        {product.outcomes.map((o, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                            <span style={{ color: product.color }}>·</span>
                            {o}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* What I Got Wrong */}
                    <div
                      className="rounded-lg p-5"
                      style={{
                        background: 'rgba(255,107,74,0.04)',
                        border: '1px solid rgba(255,107,74,0.1)',
                      }}
                    >
                      <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-warm)' }}>
                        ⟳ What I Got Wrong
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                        {product.gotWrong}
                      </p>
                    </div>

                    {/* Stakeholder story */}
                    {product.stakeholderStory && (
                      <div
                        className="rounded-lg p-5"
                        style={{
                          background: 'rgba(79,140,255,0.04)',
                          border: '1px solid rgba(79,140,255,0.1)',
                        }}
                      >
                        <h4 className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: 'var(--accent-primary)' }}>
                          🤝 Stakeholder Navigation
                        </h4>
                        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Resistance: </span>
                          {product.stakeholderStory.resistance}
                        </p>
                        <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Resolution: </span>
                          {product.stakeholderStory.resolution}
                        </p>
                        <p className="text-xs italic" style={{ color: 'var(--accent-primary)' }}>
                          Principle: {product.stakeholderStory.principle}
                        </p>
                      </div>
                    )}

                    {/* Deep dive link */}
                    {product.notionUrl && (
                      <a
                        href={product.notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-70"
                        style={{ color: product.color }}
                      >
                        Full case study on Notion →
                      </a>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="pivot"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PivotTimeline product={product} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Case Studies</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Four Products, One System
        </h2>
        <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Each card shows headline metrics. Expand for the full case study — or switch to <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>The Pivot</span> to see the moment the approach changed.
        </p>
      </motion.div>

      <div className="space-y-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
