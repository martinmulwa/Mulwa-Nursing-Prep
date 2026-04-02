'use client';

import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, BookOpen, RefreshCw, BookX, GraduationCap, Filter, Stethoscope, ShieldCheck } from 'lucide-react';
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
  const [currentTopic, setCurrentTopic] = useState<string>('all');
  const [currentPaper, setCurrentPaper] = useState<string>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  const topics = useMemo(() => {
    const t = new Set<string>();
    questions.forEach(q => t.add(q.topic));
    return Array.from(t).sort();
  }, []);

  const papers = useMemo(() => {
    const p = new Set<string>();
    questions.forEach(q => {
      if (q.paper) p.add(q.paper);
    });
    return Array.from(p).sort();
  }, []);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchTopic = currentTopic === 'all' || q.topic === currentTopic;
      const matchPaper = currentPaper === 'all' || q.paper === currentPaper;
      return matchTopic && matchPaper;
    });
  }, [currentTopic, currentPaper]);

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
      <header className="sticky top-0 z-50 bg-[#0f1117] text-[#faf8f3] border-b-[3px] border-[#c8392b] shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="bg-[#c8392b] p-2.5 rounded-xl shadow-lg shadow-[#c8392b]/20 transform group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-white p-0.5 rounded-full shadow-sm">
                <ShieldCheck className="w-3 h-3 text-[#c8392b]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-2xl font-black tracking-tighter leading-none flex items-baseline gap-1">
                MULWA <span className="text-[#c8392b] font-light">PREP</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mt-1">
                Nursing Excellence
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto flex-1 max-w-[340px]">
            <div className="flex-1 h-2 bg-white/15 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#c8392b] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${stats.totalAnswered > 0 && filteredQuestions.length > 0 ? (stats.totalAnswered / filteredQuestions.length) * 100 : 0}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="text-sm font-medium whitespace-nowrap text-white/80">
              {stats.totalAnswered} / {filteredQuestions.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Filters & Stats */}
        <div className="mb-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-black/5">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              <Filter className="w-4 h-4" /> Filters
            </div>
            <select 
              className="bg-[#faf8f3] border border-black/10 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c8392b]/50"
              value={currentPaper}
              onChange={(e) => setCurrentPaper(e.target.value)}
            >
              <option value="all">All Papers</option>
              {papers.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select 
              className="bg-[#faf8f3] border border-black/10 rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#c8392b]/50"
              value={currentTopic}
              onChange={(e) => setCurrentTopic(e.target.value)}
            >
              <option value="all">All Topics</option>
              {topics.map(t => (
                <option key={t} value={t}>{topicEmojiMap[t] || '📝'} {t}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{stats.wrong}</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Wrong</div>
              </div>
              <div className="text-center pl-4 border-l border-gray-200">
                <div className="text-2xl font-bold text-[#0f1117]">{stats.score}%</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Score</div>
              </div>
            </div>
            <button 
              onClick={resetAll}
              className="p-2 text-gray-400 hover:text-[#c8392b] hover:bg-red-50 rounded-full transition-colors"
              title="Reset Progress"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-8">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <BookX className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">No questions found for the selected filters.</p>
            </div>
          ) : (
            filteredQuestions.map((q, index) => {
              const ans = answered[q.num];
              const isAnswered = ans !== undefined;
              const isCorrect = ans === q.correct;
              const isExpanded = expandedExplanations[q.num];

              return (
                <motion.div 
                  key={q.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.5) }}
                  className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border transition-all duration-300 ${
                    isAnswered 
                      ? isCorrect 
                        ? 'border-green-200 bg-green-50/30' 
                        : 'border-red-200 bg-red-50/30'
                      : 'border-black/5 hover:border-black/15 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0f1117] text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      {q.paper && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 uppercase tracking-wider">
                          {q.paper}
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${topicColorMap[q.topic] || 'bg-gray-100 text-gray-800'}`}>
                        {topicEmojiMap[q.topic] || '📝'} {q.topic}
                      </span>
                    </div>
                    {isAnswered && (
                      <div className="shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        ) : (
                          <XCircle className="w-8 h-8 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-medium leading-relaxed mb-6 text-[#0f1117]">
                    {q.text}
                  </h3>

                  <div className="space-y-3">
                    {q.options.map((opt, i) => {
                      const isSelected = ans === i;
                      const isActualCorrect = q.correct === i;
                      
                      let btnClass = "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium text-[15px] leading-snug flex items-start gap-3 ";
                      
                      if (!isAnswered) {
                        btnClass += "border-gray-100 bg-white hover:border-[#c8392b]/30 hover:bg-red-50/30 text-gray-700";
                      } else {
                        if (isActualCorrect) {
                          btnClass += "border-green-500 bg-green-50 text-green-900 shadow-sm";
                        } else if (isSelected && !isCorrect) {
                          btnClass += "border-red-500 bg-red-50 text-red-900";
                        } else {
                          btnClass += "border-gray-100 bg-gray-50/50 text-gray-400 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleSelectOption(q.num, i)}
                          disabled={isAnswered}
                          className={btnClass}
                        >
                          <span className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold mt-0.5 ${
                            isAnswered 
                              ? isActualCorrect 
                                ? 'bg-green-500 border-green-500 text-white' 
                                : isSelected 
                                  ? 'bg-red-500 border-red-500 text-white'
                                  : 'border-gray-300 text-gray-400'
                              : 'border-gray-300 text-gray-500'
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-black/5">
                          <button 
                            onClick={() => toggleExplanation(q.num)}
                            className="flex items-center gap-2 text-sm font-bold text-[#c8392b] hover:text-red-800 transition-colors uppercase tracking-wider"
                          >
                            <BookOpen className="w-4 h-4" />
                            {isExpanded ? 'Hide Explanation' : 'Show Explanation'}
                          </button>
                          
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-4 space-y-4"
                              >
                                <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xl text-blue-900 text-sm leading-relaxed">
                                  <strong className="block mb-2 text-blue-950">Why it&apos;s correct:</strong>
                                  {q.explanation}
                                </div>
                                
                                {q.wrongReasons && Object.keys(q.wrongReasons).length > 0 && (
                                  <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 text-sm leading-relaxed">
                                    <strong className="block mb-3 text-gray-900">Why others are wrong:</strong>
                                    <ul className="space-y-3">
                                      {q.options.map((opt, i) => {
                                        const key = i.toString() as keyof typeof q.wrongReasons;
                                        if (i === q.correct || !q.wrongReasons![key]) return null;
                                        return (
                                          <li key={i} className="flex gap-3">
                                            <span className="shrink-0 font-bold text-gray-400">{String.fromCharCode(65 + i)}.</span>
                                            <span>{q.wrongReasons![key]}</span>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}

                                {q.memory && (
                                  <div className="p-4 bg-[#fff9e6] border border-[#ffe69c] rounded-xl text-[#856404] text-sm font-medium flex gap-3 items-start">
                                    <span className="text-xl shrink-0">💡</span>
                                    <p className="pt-0.5">{q.memory}</p>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
