import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../lib/animations';
import { learningChain } from '../data/method';

const PRODUCTS = [
  { id: 'federal247', name: 'Federal 24×7', sub: 'Consumer Onboarding', mobSub: 'Consumer Onboarding', date: 'Q1 2023', color: '#4f8cff', signalTo: 'Verified identity · Onboarding event', signalFrom: 'HNI flag · RM assignment' },
  { id: 'federemit', name: 'Fed-E-Remit', sub: 'Cross-Border Remittance', mobSub: 'Cross-Border', date: 'Q2 2023', color: '#00d4aa', signalTo: 'Txn behavior · Corridor intel', signalFrom: 'NRI propensity · FX alerts' },
  { id: 'erupee', name: 'e-Rupee', sub: 'CBDC · Greenfield', mobSub: 'CBDC · Greenfield', date: 'Q3 2024', color: '#a78bfa', signalTo: 'Wallet signals · Usage', signalFrom: 'Segment nudges · Dormancy' },
  { id: 'fedone', name: 'FedOne', sub: 'Business Banking', mobSub: 'Business Banking', date: 'Q3 2024', color: '#ff6b4a', signalTo: 'Complaints · Trade events', signalFrom: '360° view · SLA escalations' },
];

const STEPS = [
  { date: 'Aug 2022', desc: 'Oracle CX AI selected. Buy-and-Build decision.' },
  { date: 'Q1 2023', desc: 'Federal 24×7 connected. HNI scoring begins.' },
  { date: 'Q2 2023', desc: 'Fed-E-Remit connected. Two products feeding intelligence.' },
  { date: 'Q3 2024', desc: 'FedOne + e-Rupee connected. Flywheel complete.' },
  { date: 'H2 2025', desc: 'WaveBL: first product-to-product path.' },
];

const LEARNING_LINKS = [
  { fi: 0, ti: 1, label: 'Session replay > funnels', color: '#8B5CF6' },
  { fi: 1, ti: 3, label: 'Test mechanism, not outcome', color: '#F59E0B' },
  { fi: 0, ti: 2, label: 'Architecture = constraint', color: '#3B82F6' },
  { fi: 3, ti: 2, label: 'Migration ≠ adoption', color: '#10B981' },
];

// Desktop
const D = {
  vb: '0 0 700 560', cx: 350, cy: 280, hr: 52,
  n: [{ x: 350, y: 90 }, { x: 560, y: 280 }, { x: 140, y: 280 }, { x: 350, y: 470 }],
  nw: 144, nh: 68,
  subTL: 120, hubTL: 80, // textLength limits
  fs: { t: 11, s: 8.5, d: 8, h: 10, hs: 8, l: 8 }, py: 505,
};

// Mobile — generous sizing, short text, textLength enforced
const M = {
  vb: '0 0 390 680', cx: 195, cy: 320, hr: 62,
  n: [{ x: 98, y: 75 }, { x: 292, y: 75 }, { x: 98, y: 560 }, { x: 292, y: 560 }],
  nw: 160, nh: 68,
  subTL: 135, hubTL: 100, // textLength: subtitle max width, hub subtitle max width
  fs: { t: 11, s: 7.5, d: 8.5, h: 10, hs: 7.5, l: 8 }, py: 630,
};

export default function Flywheel() {
  const [step, setStep] = useState(4);
  const [selected, setSelected] = useState<string | null>(null);
  const [selLearn, setSelLearn] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [mode, setMode] = useState<'data' | 'learning'>('data');
  const [mob, setMob] = useState(false);
  const ref = useRef<number>();

  useEffect(() => { const c = () => setMob(window.innerWidth < 640); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c); }, []);
  useEffect(() => {
    if (!playing) return; let s = 0; setStep(0);
    ref.current = window.setInterval(() => { s++; if (s > 4) { setPlaying(false); clearInterval(ref.current); return; } setStep(s); }, 1200);
    return () => clearInterval(ref.current);
  }, [playing]);

  const L = mob ? M : D;
  const vis = (i: number) => mode === 'learning' || step >= [1, 2, 3, 3][i];

  const curve = (fi: number, ti: number) => {
    const a = L.n[fi], b = L.n[ti], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const dx = L.cx - mx, dy = L.cy - my;
    return { path: `M${a.x},${a.y} Q${mx + dx * 0.4},${my + dy * 0.4} ${b.x},${b.y}`, mid: { x: mx + dx * 0.2, y: my + dy * 0.2 } };
  };

  return (
    <section id="flywheel" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-6">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>The Architecture</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 gradient-text">The Flywheel</h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {mode === 'data' ? 'Four products feeding one AI platform. Each connection makes every other product smarter.'
            : 'Learnings from each product improved the next.'}
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={0.5} className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg p-0.5" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-visible)' }}>
          <button onClick={() => { setMode('data'); setSelLearn(null); }} className="px-4 py-1.5 rounded-md text-xs font-semibold"
            style={{ background: mode === 'data' ? 'var(--accent-primary)' : 'transparent', color: mode === 'data' ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>Data Flows</button>
          <button onClick={() => { setMode('learning'); setSelected(null); }} className="px-4 py-1.5 rounded-md text-xs font-semibold"
            style={{ background: mode === 'learning' ? '#8B5CF6' : 'transparent', color: mode === 'learning' ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>Learning Flows</button>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1} className="flex justify-center">
        <svg viewBox={L.vb} className="w-full" style={{ maxWidth: mob ? '420px' : '700px', fontFamily: "'DM Sans', sans-serif" }}>
          <defs>
            <pattern id="fgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" /></pattern>
            <radialGradient id="hg" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={mode === 'data' ? 'var(--accent-primary)' : '#8B5CF6'} stopOpacity="0.12" /><stop offset="100%" stopOpacity="0" /></radialGradient>
            <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#8B5CF6" opacity="0.6" /></marker>
          </defs>
          <rect width="100%" height="100%" fill="url(#fgrid)" rx="12" />
          <circle cx={L.cx} cy={L.cy} r={L.hr + 50} fill="url(#hg)" />

          {/* Data lines */}
          {mode === 'data' && PRODUCTS.map((p, i) => {
            const n = L.n[i], v = vis(i), act = selected === null || selected === p.id;
            return <g key={`dl-${i}`} opacity={v ? (act ? 0.5 : 0.08) : 0} style={{ transition: 'opacity 0.4s' }}>
              <line x1={n.x} y1={n.y} x2={L.cx} y2={L.cy} stroke={p.color} strokeWidth="1.5" />
              {v && <circle r="3" fill={p.color}><animateMotion dur="2.5s" repeatCount="indefinite" path={`M${n.x},${n.y} L${L.cx},${L.cy}`} /></circle>}
            </g>;
          })}

          {/* Learning curves */}
          {mode === 'learning' && LEARNING_LINKS.map((lk, i) => {
            const { path, mid } = curve(lk.fi, lk.ti);
            const act = selLearn === null || selLearn === i;
            return <g key={`ll-${i}`} opacity={act ? 1 : 0.12} style={{ transition: 'opacity 0.3s', cursor: 'pointer' }}
              onMouseEnter={() => !mob && setSelLearn(i)} onMouseLeave={() => !mob && setSelLearn(null)}
              onClick={() => setSelLearn(p => p === i ? null : i)}>
              <path d={path} stroke={lk.color} strokeWidth="2" fill="none" strokeDasharray="6 4" markerEnd="url(#arr)" />
              <circle r="3" fill={lk.color}><animateMotion dur="3s" repeatCount="indefinite" path={path} /></circle>
              {selLearn === i
                ? <g><rect x={mid.x - 70} y={mid.y - 14} width={140} height={20} rx={4} fill="var(--bg-secondary)" stroke={lk.color} strokeWidth="0.5" opacity="0.95" />
                    <text x={mid.x} y={mid.y} textAnchor="middle" fill={lk.color} fontSize={L.fs.l - 1} fontWeight="600">{lk.label}</text></g>
                : !mob && <text x={mid.x} y={mid.y} textAnchor="middle" fill={lk.color} fontSize={L.fs.l - 1} fontWeight="500" opacity="0.6">{lk.label}</text>}
            </g>;
          })}

          {/* WaveBL — mobile: short centered text below nodes */}
          {mode === 'data' && step >= 4 && (() => {
            if (mob) {
              return <text x={L.cx} y={L.py - 6} textAnchor="middle" fill="#ffb84d" fontSize="7.5" fontWeight="600" opacity="0.7">WaveBL eBL · Direct Edge</text>;
            }
            const a = L.n[3], b = L.n[2];
            const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2 + 60;
            const act = selected === null || selected === 'fedone' || selected === 'erupee';
            return <g opacity={act ? 1 : 0.1} style={{ transition: 'opacity 0.4s' }}>
              <path d={`M${a.x},${a.y} Q${midX},${midY} ${b.x},${b.y}`} stroke="#ffb84d" strokeWidth="1.5" fill="none" strokeDasharray="6 4" opacity="0.5" />
              <text x={midX} y={midY - 6} textAnchor="middle" fill="#ffb84d" fontSize="9" fontWeight="600" opacity="0.8">WaveBL eBL</text>
              <text x={midX} y={midY + 6} textAnchor="middle" fill="#ffb84d" fontSize="7.5" opacity="0.5">Direct settlement</text>
            </g>;
          })()}

          {/* Hub — larger on mobile */}
          <g opacity={mode === 'data' ? (step >= 0 ? 1 : 0) : 0.3} style={{ transition: 'opacity 0.6s' }}>
            <circle cx={L.cx} cy={L.cy} r={L.hr} fill="var(--bg-secondary)" stroke={mode === 'data' ? 'var(--accent-primary)' : '#8B5CF6'} strokeWidth="1" opacity="0.3" />
            <circle cx={L.cx} cy={L.cy} r={L.hr} fill="var(--bg-secondary)" stroke="var(--border-visible)" strokeWidth="1" />
            {mode === 'data' ? <>
              <text x={L.cx} y={L.cy - 14} textAnchor="middle" fill="var(--accent-primary)" fontSize={L.fs.h} fontWeight="700"
                textLength={L.hubTL} lengthAdjust="spacingAndGlyphs">ORACLE CX AI</text>
              <text x={L.cx} y={L.cy + 2} textAnchor="middle" fill="var(--text-secondary)" fontSize={L.fs.hs}
                textLength={L.hubTL - 10} lengthAdjust="spacingAndGlyphs">360° · EDA · AI</text>
              {step >= 3 && <text x={L.cx} y={L.cy + 20} textAnchor="middle" fill="var(--accent-secondary)" fontSize={L.fs.hs} fontWeight="600">✦ COMPLETE</text>}
            </> : <>
              <text x={L.cx} y={L.cy - 6} textAnchor="middle" fill="#8B5CF6" fontSize={L.fs.h} fontWeight="700">LEARNING</text>
              <text x={L.cx} y={L.cy + 10} textAnchor="middle" fill="#8B5CF6" fontSize={L.fs.h} fontWeight="700">FLYWHEEL</text>
            </>}
          </g>

          {/* Product nodes — textLength enforced */}
          {PRODUCTS.map((p, i) => {
            const n = L.n[i], v = vis(i), sel = selected === p.id, dim = selected !== null && !sel;
            const hw = L.nw / 2, hh = L.nh / 2;
            const subtitle = mob ? p.mobSub : p.sub;
            return <g key={p.id} opacity={v ? (dim ? 0.2 : 1) : 0} style={{ cursor: v ? 'pointer' : 'default', transition: 'opacity 0.3s' }}
              onMouseEnter={() => !mob && v && setSelected(p.id)} onMouseLeave={() => !mob && setSelected(null)}
              onClick={() => v && setSelected(pr => pr === p.id ? null : p.id)}>
              <rect x={n.x - hw} y={n.y - hh} width={L.nw} height={L.nh} rx={8}
                fill={sel ? 'var(--bg-surface)' : 'var(--bg-secondary)'} stroke={sel ? p.color : 'var(--border-visible)'} strokeWidth={sel ? 1.5 : 1} />
              <text x={n.x} y={n.y - 12} textAnchor="middle" fill={p.color} fontSize={L.fs.t} fontWeight="700">{p.name}</text>
              <text x={n.x} y={n.y + 4} textAnchor="middle" fill="var(--text-secondary)" fontSize={L.fs.s}
                textLength={subtitle.length * 5.5 > L.subTL ? L.subTL : undefined}
                lengthAdjust="spacingAndGlyphs">{subtitle}</text>
              <text x={n.x} y={n.y + 20} textAnchor="middle" fill={p.color} fontSize={L.fs.d} fontWeight="600">{p.date}</text>
            </g>;
          })}

          {/* Detail panels */}
          {mode === 'data' && selected && (() => {
            const p = PRODUCTS.find(n => n.id === selected)!;
            const pw = mob ? 370 : 580, px = mob ? 10 : 60;
            return <g><rect x={px} y={L.py} width={pw} height={30} rx={4} fill="var(--bg-secondary)" stroke="var(--border-visible)" />
              <text x={px + 8} y={L.py + 12} fill={p.color} fontSize={mob ? 7 : 9} fontWeight="700">→ {p.signalTo}</text>
              <text x={px + 8} y={L.py + 24} fill={p.color} fontSize={mob ? 7 : 9}>← {p.signalFrom}</text></g>;
          })()}
          {mode === 'learning' && selLearn !== null && (() => {
            const c = learningChain[selLearn]; if (!c) return null;
            const pw = mob ? 370 : 620, px = mob ? 10 : 40;
            return <g><rect x={px} y={L.py} width={pw} height={30} rx={4} fill="var(--bg-secondary)" stroke="var(--border-visible)" />
              <text x={px + 8} y={L.py + 12} fill="#8B5CF6" fontSize={mob ? 7 : 9} fontWeight="700">{c.from} → {c.to}</text>
              <text x={px + 8} y={L.py + 24} fill="var(--text-secondary)" fontSize={mob ? 6.5 : 8}>{c.learning}</text></g>;
          })()}
        </svg>
      </motion.div>

      {/* Timeline */}
      {mode === 'data' && (
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={2} className="flex flex-col items-center mt-6 gap-4">
          <div className="flex items-center gap-0 w-full max-w-lg px-4">
            {STEPS.map((s, i) => (<div key={i} className="flex items-center" style={{ flex: i < STEPS.length - 1 ? 1 : 0 }}>
              <button onClick={() => { setStep(i); setPlaying(false); }} className="w-2.5 h-2.5 rounded-full flex-shrink-0 border-0"
                style={{ background: step >= i ? 'var(--accent-primary)' : 'var(--border-visible)', boxShadow: step >= i ? '0 0 8px rgba(79,140,255,0.4)' : 'none', cursor: 'pointer' }} />
              {i < STEPS.length - 1 && <div className="h-0.5 flex-1" style={{ background: step > i ? 'var(--accent-primary)' : 'var(--border-visible)' }} />}
            </div>))}
          </div>
          <div className="flex justify-between w-full max-w-lg px-4">
            {STEPS.map((s, i) => <span key={i} className="text-[9px]" style={{ color: step >= i ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>{s.date}</span>)}
          </div>
          <button onClick={() => setPlaying(true)} disabled={playing} className="px-6 py-2 rounded-md text-xs font-semibold"
            style={{ background: playing ? 'var(--bg-surface)' : 'rgba(79,140,255,0.08)', color: playing ? 'var(--text-secondary)' : 'var(--accent-primary)',
              border: '1px solid rgba(79,140,255,0.2)', cursor: playing ? 'default' : 'pointer' }}>{playing ? 'Building...' : '▶  Play Timeline'}</button>
          <p className="text-xs text-center min-h-[16px]" style={{ color: 'var(--text-secondary)' }}>{STEPS[step]?.desc}</p>
        </motion.div>
      )}
      {mode === 'learning' && (
        <div className="flex flex-col items-center mt-6 gap-3">
          <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>{mob ? 'Tap a connection for details.' : 'Hover connections for details.'}</p>
          <p className="text-xs text-center italic max-w-md" style={{ color: '#8B5CF6' }}>"Each product made every other product smarter — through methodology, not just data."</p>
        </div>
      )}
    </section>
  );
}
