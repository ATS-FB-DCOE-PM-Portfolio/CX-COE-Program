import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'method', label: 'Method' },
  { id: 'flywheel', label: 'Flywheel' },
  { id: 'products', label: 'Products' },
  { id: 'execution', label: 'Execution' },
  { id: 'stakeholders', label: 'Influence' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ theme, onToggleTheme }: Props) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i]!;
        if (el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-1.5 rounded-full border max-w-[calc(100vw-24px)] overflow-x-auto scrollbar-hide"
          style={{
            background: theme === 'dark' ? 'rgba(10,10,15,0.85)' : 'rgba(250,250,250,0.85)',
            borderColor: 'var(--border-visible)',
            backdropFilter: 'blur(16px)',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative px-2.5 md:px-3 py-1.5 text-[10px] md:text-xs font-medium rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
              style={{
                color: activeSection === s.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
            >
              {activeSection === s.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'var(--accent-primary)', opacity: 0.1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </a>
          ))}

          <div className="w-px h-5 mx-1 flex-shrink-0" style={{ background: 'var(--border-visible)' }} />

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-full transition-colors flex-shrink-0"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
