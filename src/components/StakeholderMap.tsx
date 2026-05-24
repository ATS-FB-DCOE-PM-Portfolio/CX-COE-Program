import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../lib/animations';

interface SH { id: string; role: string; mobRole: string; team: string; is: string; fs: string; concern: string; resolution: string; dx: number; dy: number; mx: number; my: number; }
const SC: Record<string, string> = { sponsor: '#10B981', neutral: '#F59E0B', resistance: '#EF4444', resolved: '#4f8cff' };

const SHS: SH[] = [
  { id: 'cto', role: 'CTO Office', mobRole: 'CTO Office', team: 'Executive', is: 'neutral', fs: 'sponsor', concern: 'Favored full-buy for speed.', resolution: 'Buy-and-Build scored highest.', dx: 350, dy: 52, mx: 195, my: 55 },
  { id: 'priority', role: 'Priority Banking', mobRole: 'Priority Bkg', team: 'Business', is: 'sponsor', fs: 'sponsor', concern: 'Needed HNI pipeline.', resolution: 'EDA webhook: 1,000+ HNI accounts.', dx: 120, dy: 130, mx: 100, my: 165 },
  { id: 'eng', role: 'Engineering Lead', mobRole: 'Eng. Lead', team: 'DCOE', is: 'resistance', fs: 'resolved', concern: 'Preferred full-build.', resolution: 'Custom layers preserved ownership.', dx: 580, dy: 130, mx: 290, my: 165 },
  { id: 'treasury', role: 'Treasury', mobRole: 'Treasury', team: 'Finance', is: 'resistance', fs: 'resolved', concern: 'Contingent corridor risk.', resolution: 'Resequencing, not shortcuts.', dx: 120, dy: 310, mx: 100, my: 400 },
  { id: 'compliance', role: 'Compliance Head', mobRole: 'Compliance', team: 'Legal/Risk', is: 'neutral', fs: 'sponsor', concern: 'UAT rigor non-negotiable.', resolution: 'Decisive voice for rebuild.', dx: 580, dy: 310, mx: 290, my: 400 },
  { id: 'ops', role: 'Ops Managers', mobRole: 'Ops Mgrs', team: 'Enterprise', is: 'resistance', fs: 'resolved', concern: 'Fed-E-Biz muscle memory.', resolution: 'Co-designed. +34% DAU.', dx: 220, dy: 400, mx: 100, my: 505 },
  { id: 'credit', role: 'Credit Team', mobRole: 'Credit Team', team: 'Risk', is: 'resistance', fs: 'resolved', concern: 'BG bypass concern.', resolution: 'Standard auto, complex manual.', dx: 480, dy: 400, mx: 290, my: 505 },
];

const D_PM = { x: 350, y: 230, r: 32 };
const M_PM = { x: 195, y: 285, r: 34 };

export default function StakeholderMap() {
  const [sel, setSel] = useState<string | null>(null);
  const [res, setRes] = useState(true);
  const [mob, setMob] = useState(false);
  useEffect(() => { const c = () => setMob(window.innerWidth < 640); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c); }, []);

  const pm = mob ? M_PM : D_PM;
  const vb = mob ? '0 0 390 600' : '0 0 700 470';
  const nw = mob ? 140 : 116;
  const nh = mob ? 55 : 48;
  const fsR = mob ? 10 : 9;
  const fsT = mob ? 7.5 : 7.5;
  const roleTL = mob ? 110 : undefined; // textLength for role text

  return (
    <section id="stakeholders" className="section">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-6">
        <p className="text-xs uppercase tracking-[3px] mb-3" style={{ color: 'var(--text-secondary)' }}>Influence Without Authority</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Stakeholder Map</h2>
        <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Every product had resistance. {mob ? 'Tap' : 'Hover over'} a stakeholder to see details.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={0.5} className="flex justify-center mb-4">
        <div className="inline-flex rounded-lg p-0.5" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-visible)' }}>
          <button onClick={() => setRes(false)} className="px-4 py-1.5 rounded-md text-xs font-semibold"
            style={{ background: !res ? '#EF4444' : 'transparent', color: !res ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>Initial Stance</button>
          <button onClick={() => setRes(true)} className="px-4 py-1.5 rounded-md text-xs font-semibold"
            style={{ background: res ? '#10B981' : 'transparent', color: res ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', border: 'none' }}>After Resolution</button>
        </div>
      </motion.div>

      <div className="flex justify-center gap-4 mb-6">
        {res ? <>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: SC.sponsor }} /><span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Sponsor</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: SC.resolved }} /><span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Resolved</span></div>
        </> : <>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: SC.sponsor }} /><span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Sponsor</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: SC.neutral }} /><span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Neutral</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{ background: SC.resistance }} /><span className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Resistance</span></div>
        </>}
      </div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1} className="flex justify-center">
        <svg viewBox={vb} className="w-full" style={{ maxWidth: mob ? '420px' : '700px', fontFamily: "'DM Sans', sans-serif" }}>
          <defs><pattern id="sg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#sg)" rx="12" />

          {SHS.map(s => {
            const sx = mob ? s.mx : s.dx, sy = mob ? s.my : s.dy;
            const col = res ? SC[s.fs] : SC[s.is];
            const act = sel === null || sel === s.id;
            return <line key={`l-${s.id}`} x1={pm.x} y1={pm.y} x2={sx} y2={sy} stroke={col} strokeWidth="1" strokeDasharray="4 4" opacity={act ? 0.25 : 0.04} style={{ transition: 'opacity 0.3s' }} />;
          })}

          {/* PM — only "PM" and "(Anirudh)", no "Product Owner" */}
          <g>
            <circle cx={pm.x} cy={pm.y} r={pm.r} fill="var(--bg-secondary)" stroke="var(--accent-primary)" strokeWidth="1.5" />
            <text x={pm.x} y={pm.y - 4} textAnchor="middle" fill="var(--accent-primary)" fontSize={mob ? 12 : 9} fontWeight="700">PM</text>
            <text x={pm.x} y={pm.y + 12} textAnchor="middle" fill="var(--text-primary)" fontSize={mob ? 8 : 8}>(Anirudh)</text>
          </g>

          {SHS.map(s => {
            const sx = mob ? s.mx : s.dx, sy = mob ? s.my : s.dy;
            const isSel = sel === s.id, dim = sel !== null && !isSel;
            const col = res ? SC[s.fs] : SC[s.is];
            const label = mob ? s.mobRole : s.role;
            return <g key={s.id} opacity={dim ? 0.2 : 1} style={{ cursor: 'pointer', transition: 'opacity 0.3s' }}
              onMouseEnter={() => !mob && setSel(s.id)} onMouseLeave={() => !mob && setSel(null)}
              onClick={() => setSel(p => p === s.id ? null : s.id)}>
              <rect x={sx - nw / 2} y={sy - nh / 2} width={nw} height={nh} rx={6}
                fill={isSel ? 'var(--bg-surface)' : 'var(--bg-secondary)'} stroke={isSel ? col : 'var(--border-visible)'} strokeWidth={isSel ? 1.5 : 1} />
              {/* Role text with dot — vertically separated */}
              <circle cx={sx - nw / 2 + 12} cy={sy - 8} r="3.5" fill={col} />
              <text x={sx - nw / 2 + 20} y={sy - 4} fill="var(--text-primary)" fontSize={fsR} fontWeight="600"
                {...(roleTL ? { textLength: roleTL, lengthAdjust: 'spacingAndGlyphs' } : {})}>{label}</text>
              {/* Team text — well below role */}
              <text x={sx} y={sy + 15} textAnchor="middle" fill="var(--text-secondary)" fontSize={fsT}>{s.team}</text>
            </g>;
          })}

          {sel && (() => {
            const s = SHS.find(n => n.id === sel); if (!s) return null;
            const col = res ? SC[s.fs] : SC[s.is];
            const txt = res ? s.resolution : s.concern;
            const pw = mob ? 370 : 620, px = mob ? 10 : 40, py = mob ? 560 : 435;
            return <g><rect x={px} y={py} width={pw} height={24} rx={4} fill="var(--bg-secondary)" stroke={col} strokeWidth="0.5" opacity="0.95" />
              <text x={px + 8} y={py + 16} fill={col} fontSize={mob ? 7.5 : 8} fontWeight="600"
                textLength={txt.length * 5 > pw - 20 ? pw - 20 : undefined} lengthAdjust="spacingAndGlyphs">{res ? '✓ ' : '⚡ '}{txt}</text></g>;
          })()}
        </svg>
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={2} className="max-w-2xl mx-auto mt-8">
        <div className="rounded-xl p-5 text-center" style={{ background: 'rgba(79,140,255,0.04)', border: '1px solid rgba(79,140,255,0.1)' }}>
          <p className="text-sm italic leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
            "The stakeholder who moved the room wasn't the most senior — it was the Compliance Head, whose regulatory credibility was non-substitutable."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
