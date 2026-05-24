import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TheMethod from './components/TheMethod';
import Flywheel from './components/Flywheel';
import ProductSection from './components/ProductSection';
import Platform from './components/Platform';
import ExecutionDNA from './components/ExecutionDNA';
import StakeholderMap from './components/StakeholderMap';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Contact from './components/Contact';

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-bold mb-3 gradient-text"
        >
          Anirudh TS
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className="h-0.5 mx-auto rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs mt-3 font-mono"
          style={{ color: 'var(--text-secondary)' }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.className = next;
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="noise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <Navigation theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <TheMethod />
            <Flywheel />
            <ProductSection />
            <Platform />
            <ExecutionDNA />
            <StakeholderMap />
            <Timeline />
            <Awards />
            <Skills />
            <Contact />
          </main>
        </motion.div>
      )}
    </>
  );
}
