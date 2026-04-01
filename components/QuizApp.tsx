'use client';

import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, BookOpen, RefreshCw, BookX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '@/lib/questions';

const topicEmojiMap: Record<string, string> = {
  "Anatomy": "🦴",
  "Fundamentals": "📚",
  "Community Health": "🌍",
  "Medical-Surgical": "🏥",
  "Paediatric": "👶",
  "Pharmacology": "💊",
  "Microbiology": "🦠",
  "Midwifery": "🤰",
  "Law": "⚖️",
  "Nutrition": "🍎"
};

const topicColorMap: Record<string, string> = {
  "Anatomy": "bg-red-100 text-red-800",
  "Fundamentals": "bg-blue-100 text-blue-800",
  "Community Health": "bg-green-100 text-green-800",
  "Medical-Surgical": "bg-purple-100 text-purple-800",
  "Paediatric": "bg-yellow-100 text-yellow-800",
  "Pharmacology": "bg-pink-100 text-pink-800",
  "Microbiology": "bg-teal-100 text-teal-800",
  "Midwifery": "bg-orange-100 text-orange-800",
  "Law": "bg-slate-100 text-slate-800",
  "Nutrition": "bg-lime-100 text-lime-800"
};

export default function QuizApp() {
  const [answered, setAnswered] = useState<Record<number, number>>({});
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  const topics = useMemo(() => {
    const t = new Set<string>();
    questions.forEach(q => t.add(q.topic));
    return Array.from(t);
  }, []);

  const filteredQuestions = useMemo(() => {
    if (currentFilter === 'all') return questions;
    return questions.filter(q => q.topic === currentFilter);
  }, [currentFilter]);

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    filteredQuestions.forEach(q => {
      const ans = answered[q.num];
      if (ans !== undefined) {
        if (ans === q.correct) correct++;
        else wrong++;
      }
    });
    const totalAnswered = correct + wrong;
    const score = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    return { correct, wrong, totalAnswered, score };
  }, [answered, filteredQuestions]);

  const handleSelectOption = (qNum: number, optIdx: number) => {
    if (answered[qNum] !== undefined) return;
    
    setAnswered(prev => ({ ...prev, [qNum]: optIdx }));
    
    // Automatically expand explanation if wrong
    const q = questions.find(x => x.num === qNum);
    if (q && optIdx !== q.correct) {
      setExpandedExplanations(prev => ({ ...prev, [qNum]: true }));
    }
  };

  const toggleExplanation = (qNum: number) => {
    setExpandedExplanations(prev => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const resetAll = () => {
    setAnswered({});
    setExpandedExplanations({});
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#0f1117] font-sans pb-12">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0f1117] text-[#faf8f3] border-b-[3px] border-[#c8392b]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="font-serif text-xl font-bold tracking-tight">
            <span className="text-[#c8392b]">Mulwa</span> Nursing Prep
          </div>
          <div className="flex items-center gap-3 flex-1 max-w-[340px]">
            <div className="flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#c8392b] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${filteredQuestions.length > 0 ? (stats.totalAnswered / filteredQuestions.length) * 100 : 0}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs font-medium text-white/70 font-mono whitespace-nowrap">
              {stats.totalAnswered} / {filteredQuestions.length}
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-[#f2ede3] border-b border-[#e2ddd4] px-6 py-3 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex gap-2 items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6b6860] whitespace-nowrap mr-1">
            Topic:
          </span>
          <button
            onClick={() => setCurrentFilter('all')}
            className={`px-3.5 py-1.5 rounded-full border-[1.5px] text-sm font-medium whitespace-nowrap transition-colors ${
              currentFilter === 'all' 
                ? 'bg-[#0f1117] border-[#0f1117] text-white' 
                : 'bg-white border-[#e2ddd4] text-[#0f1117] hover:border-[#c8392b] hover:text-[#c8392b]'
            }`}
          >
            All ({questions.length})
          </button>
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => setCurrentFilter(topic)}
              className={`px-3.5 py-1.5 rounded-full border-[1.5px] text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                currentFilter === topic 
                  ? 'bg-[#0f1117] border-[#0f1117] text-white' 
                  : 'bg-white border-[#e2ddd4] text-[#0f1117] hover:border-[#c8392b] hover:text-[#c8392b]'
              }`}
            >
              <span>{topicEmojiMap[topic]}</span> {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Score Banner */}
      <AnimatePresence>
        {stats.totalAnswered > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="max-w-4xl mx-auto px-6 mt-6"
          >
            <div className="bg-[#0f1117] text-[#faf8f3] rounded-2xl p-5 sm:p-7 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-black leading-none text-[#4ade80]">{stats.correct}</div>
                <div className="text-xs text-white/60 mt-1">Correct</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-black leading-none text-[#fbbf24]">{stats.wrong}</div>
                <div className="text-xs text-white/60 mt-1">Incorrect</div>
              </div>
              <div className="text-center">
                <div className={`font-serif text-3xl sm:text-4xl font-black leading-none ${stats.score >= 70 ? 'text-[#4ade80]' : stats.score >= 50 ? 'text-[#fbbf24]' : 'text-[#c8392b]'}`}>
                  {stats.score}%
                </div>
                <div className="text-xs text-white/60 mt-1">Score</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-black leading-none">{stats.totalAnswered}</div>
                <div className="text-xs text-white/60 mt-1">Answered</div>
              </div>
              <button 
                onClick={resetAll}
                className="px-5 py-2.5 rounded-full border-[1.5px] border-white/30 bg-transparent text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <RefreshCw size={16} /> Reset All
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-5">
        {filteredQuestions.map((q) => {
          const isAnswered = answered[q.num] !== undefined;
          const selectedIdx = answered[q.num];
          const isCorrect = selectedIdx === q.correct;
          const isExpanded = expandedExplanations[q.num];
          const letters = ['A', 'B', 'C', 'D'];

          return (
            <div 
              key={q.num} 
              className={`bg-white border-[1.5px] rounded-2xl overflow-hidden transition-shadow hover:shadow-lg ${
                isAnswered ? (isCorrect ? 'border-[#1a7a4a]' : 'border-[#c8392b]') : 'border-[#e2ddd4]'
              }`}
            >
              {/* Card Header */}
              <div className="px-5 py-3.5 flex items-start gap-3.5 border-b border-[#e2ddd4] bg-[#f2ede3]">
                <span className="font-mono text-xs font-medium text-[#6b6860] px-2 py-1 bg-[#e2ddd4] rounded-md whitespace-nowrap mt-0.5">
                  Q{q.num}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className={`text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full tracking-wide flex items-center gap-1 ${topicColorMap[q.topic] || 'bg-gray-100 text-gray-800'}`}>
                    {topicEmojiMap[q.topic]} {q.topic}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="text-[0.975rem] font-medium leading-relaxed mb-4 text-[#0f1117]">
                  {q.text}
                </div>
                
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, i) => {
                    let optClass = "border-[#e2ddd4] bg-[#faf8f3] text-[#0f1117]";
                    let letterClass = "bg-[#e2ddd4] text-[#0f1117]";
                    let icon = null;

                    if (isAnswered) {
                      if (i === q.correct) {
                        optClass = "border-[#1a7a4a] bg-[#d4f0e2] text-[#064e29]";
                        letterClass = "bg-[#1a7a4a] text-white";
                        icon = <CheckCircle2 size={18} className="text-[#1a7a4a]" />;
                      } else if (i === selectedIdx) {
                        optClass = "border-[#c8392b] bg-[#fde8e6] text-[#7f1d1d]";
                        letterClass = "bg-[#c8392b] text-white";
                        icon = <XCircle size={18} className="text-[#c8392b]" />;
                      } else {
                        optClass = "border-[#e2ddd4] bg-[#faf8f3] opacity-60";
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q.num, i)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-[1.5px] text-left text-sm transition-all ${optClass} ${!isAnswered ? 'hover:border-[#0f1117] hover:bg-[#f2ede3] cursor-pointer' : 'cursor-default'}`}
                      >
                        <span className={`font-mono text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${letterClass}`}>
                          {letters[i]}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {icon && <span className="shrink-0">{icon}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reveal Row */}
              <div className="px-5 pb-4 pt-1 flex items-center gap-3">
                <button
                  disabled={!isAnswered}
                  onClick={() => toggleExplanation(q.num)}
                  className="px-5 py-2.5 bg-[#0f1117] text-white border-none rounded-xl font-sans text-sm font-semibold cursor-pointer transition-opacity hover:opacity-85 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isExpanded ? <BookX size={16} /> : <BookOpen size={16} />}
                  {isExpanded ? 'Hide Explanation' : 'Show Explanation'}
                </button>
                
                {isAnswered && (
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${isCorrect ? 'bg-[#d4f0e2] text-[#1a7a4a]' : 'bg-[#fde8e6] text-[#c8392b]'}`}>
                    {isCorrect ? '✓ Correct!' : `✗ Incorrect (${letters[q.correct]} was correct)`}
                  </span>
                )}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#e2ddd4] p-5 bg-[#f2ede3]">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm mb-4 bg-[#d4f0e2] text-[#1a7a4a] border-[1.5px] border-[#1a7a4a]">
                        ✅ Correct Answer: {letters[q.correct]}. {q.options[q.correct]}
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#6b6860] mb-2">Explanation</div>
                        <div className="text-sm leading-relaxed text-[#2a2820]">
                          {q.explanation}
                        </div>
                      </div>

                      {q.wrongReasons && Object.keys(q.wrongReasons).length > 0 && (
                        <div className="mb-4">
                          <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#6b6860] mb-2">Why the other options are wrong</div>
                          <div className="flex flex-col">
                            {q.options.map((opt, i) => {
                              const key = i.toString() as keyof typeof q.wrongReasons;
                              if (i === q.correct || !q.wrongReasons![key]) return null;
                              return (
                                <div key={i} className="text-sm leading-relaxed py-2 border-b border-[#e2ddd4] last:border-0 text-[#3a3830]">
                                  <span className="font-mono font-semibold text-[#c8392b] mr-1">{letters[i]}.</span>
                                  {q.wrongReasons![key]}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {q.memory && (
                        <div>
                          <div className="text-[0.7rem] font-bold uppercase tracking-widest text-[#6b6860] mb-2">🧠 Memory Tip</div>
                          <div className="bg-[#fef4d6] border-[1.5px] border-[#e6b800] rounded-xl p-3.5 text-sm leading-relaxed text-[#5c3d00]">
                            {q.memory}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="text-center px-6 py-8 text-[#6b6860] text-xs border-t border-[#e2ddd4] mt-4">
        <strong className="text-[#0f1117]">Karen Hospital Medical Training College</strong> — NCK KRN Diploma Prep<br />
        Questions 1–25 &nbsp;·&nbsp; Study hard, study smart 💙 &nbsp;·&nbsp; MULWA 😎
      </footer>
    </div>
  );
}
