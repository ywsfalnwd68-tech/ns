import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { questionsData, Question } from './data/questions';
import { sound } from './utils/sound';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  UserCheck, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Zap, 
  Grid3X3, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Layers,
  X,
  Bookmark,
  Award,
  BookOpen
} from 'lucide-react';

const STORAGE_KEYS = {
  ANSWERS: 'alkawz_answers_v2',
  AUTO_ADVANCE: 'alkawz_auto_advance_v2',
  SOUND: 'alkawz_sound_v2',
  CURRENT_INDEX: 'alkawz_current_index_v2',
  BOOKMARKS: 'alkawz_bookmarks_v2',
};

export default function App() {
  // Persistent user answers
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [autoAdvance, setAutoAdvance] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTO_ADVANCE);
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SOUND);
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI state
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filterWrongOnly, setFilterWrongOnly] = useState(false);

  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(userAnswers));
  }, [userAnswers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTO_ADVANCE, JSON.stringify(autoAdvance));
  }, [autoAdvance]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(soundEnabled));
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    };
  }, []);

  // Stats calculation
  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    questionsData.forEach((q) => {
      const a = userAnswers[q.id];
      if (a) {
        if (a === q.correctAnswer) correct++;
        else wrong++;
      }
    });
    return {
      total: questionsData.length,
      answered: correct + wrong,
      correct,
      wrong,
      accuracy: (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0,
    };
  }, [userAnswers]);

  const currentQ = questionsData[currentIndex] || questionsData[0];
  const currentAnswer = userAnswers[currentQ.id];
  const isCurrentAnswered = currentAnswer !== undefined;
  const isCurrentCorrect = isCurrentAnswered && currentAnswer === currentQ.correctAnswer;

  // Next / Prev navigation
  const handleNext = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setIsTransitioning(false);

    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      sound.playClick();
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setIsTransitioning(false);

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      sound.playClick();
    }
  }, [currentIndex]);

  // Answer selection with instant feedback & auto-progression
  const handleSelectAnswer = (optionKey: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isCurrentAnswered) return; // already answered

    const isCorrect = optionKey === currentQ.correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playWrong();
    }

    // Record answer
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionKey,
    }));

    // Trigger completion celebration if answering the last unanswered question
    if (stats.answered + 1 === questionsData.length) {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
      });
    }

    // Auto-advance to the next question smoothly
    if (autoAdvance && currentIndex < questionsData.length - 1) {
      setIsTransitioning(true);
      autoAdvanceTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prev) => prev + 1);
      }, 800);
    }
  };

  const handleResetCurrent = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    setIsTransitioning(false);
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    sound.playClick();
  };

  const handleToggleBookmark = () => {
    sound.playClick();
    setBookmarks((prev) => 
      prev.includes(currentQ.id) 
        ? prev.filter((id) => id !== currentQ.id) 
        : [...prev, currentQ.id]
    );
  };

  const handleResetAll = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setIsResetConfirmOpen(false);
    sound.playClick();
  };

  // Keyboard shortcuts (ArrowLeft / ArrowRight, or A/B/C/D/E)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isGridOpen || isResetConfirmOpen) return;
      if (e.key === 'ArrowLeft') handleNext();
      if (e.key === 'ArrowRight') handlePrev();
      if (!isCurrentAnswered) {
        if (['1', 'a', 'A'].includes(e.key)) handleSelectAnswer('A');
        if (['2', 'b', 'B'].includes(e.key)) handleSelectAnswer('B');
        if (['3', 'c', 'C'].includes(e.key)) handleSelectAnswer('C');
        if (['4', 'd', 'D'].includes(e.key)) handleSelectAnswer('D');
        if (['5', 'e', 'E'].includes(e.key)) handleSelectAnswer('E');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isGridOpen, isResetConfirmOpen, isCurrentAnswered, handleNext, handlePrev]);

  // Section difficulty badge styling
  const getDifficultyLabel = (part: number) => {
    switch (part) {
      case 1:
        return { text: 'Part 1 — Easy (سهل)', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25' };
      case 2:
        return { text: 'Part 2 — Medium (متوسط)', color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' };
      case 3:
        return { text: 'Part 3 — Hard (صعب)', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25' };
      default:
        return { text: currentQ.partName, color: 'text-slate-400 bg-slate-800 border-slate-700' };
    }
  };

  const difficulty = getDifficultyLabel(currentQ.part);
  const isBookmarked = bookmarks.includes(currentQ.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080d1a] via-[#0b1328] to-[#060a14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      {/* Distinctive Ambient Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-emerald-500/12 rounded-full blur-[110px]" />
        <div className="absolute top-1/4 -right-32 w-80 h-80 sm:w-96 sm:h-96 bg-teal-500/12 rounded-full blur-[110px]" />
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-600/12 rounded-full blur-[110px]" />
      </div>

      {/* Top Header - Distraction-free with prominent Author Credit */}
      <header className="relative z-20 w-full bg-[#0a1020]/90 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 shadow-lg shadow-black/20">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          {/* Title & Author Credit */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-black shadow-md shadow-emerald-500/25 shrink-0">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-white tracking-tight">
                  الكوز الاول
                </h1>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono-code">
                  150 سؤال
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold mt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>إعداد: أحمد مثنى حسن</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5">
            {/* Auto-Advance Mode Toggle */}
            <button
              onClick={() => {
                setAutoAdvance((prev) => !prev);
                sound.playClick();
              }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                autoAdvance
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-xs'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
              title={autoAdvance ? 'الانتقال التلقائي للسؤال التالي: مفعّل' : 'الانتقال التلقائي: معطّل'}
            >
              <Zap className={`w-3.5 h-3.5 ${autoAdvance ? 'fill-current text-emerald-400' : ''}`} />
              <span className="hidden sm:inline">انتقال تلقائي</span>
            </button>

            {/* Questions Grid Button */}
            <button
              onClick={() => setIsGridOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-mono-code font-bold text-xs border border-slate-700 transition-colors"
              title="خريطة الأسئلة"
            >
              <Grid3X3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentIndex + 1}/150</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className={`p-2 rounded-xl border transition-colors ${
                soundEnabled
                  ? 'bg-slate-800 text-emerald-400 border-slate-700'
                  : 'bg-slate-800/40 text-slate-500 border-slate-800'
              }`}
              title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset */}
            <button
              onClick={() => setIsResetConfirmOpen(true)}
              className="p-2 rounded-xl bg-slate-800/60 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 border border-slate-700/60 transition-colors"
              title="تصفير الإجابات"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Progress Line */}
        <div className="w-full bg-slate-900 h-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questionsData.length) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Single-Question Stage - Centered, Focused, Zero Noise */}
      <main className="relative z-10 flex-1 max-w-xl w-full mx-auto px-4 py-3 sm:py-6 flex flex-col justify-center">
        {/* Compact Status Indicator */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2.5 px-1">
          <div className="flex items-center gap-2.5">
            <span className="text-white font-bold font-mono-code">
              السؤال {currentIndex + 1} من 150
            </span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{stats.correct}</span>
            </span>
            <span className="flex items-center gap-1 text-rose-400 font-bold">
              <XCircle className="w-3.5 h-3.5" />
              <span>{stats.wrong}</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleToggleBookmark}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked 
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' 
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
              title={isBookmarked ? 'محفوظ للمراجعة' : 'حفظ السؤال'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {isCurrentAnswered && (
              <button
                onClick={handleResetCurrent}
                className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1 rounded-lg hover:bg-slate-800 transition-colors"
                title="إعادة حل هذا السؤال"
              >
                إعادة المحاولة
              </button>
            )}
          </div>
        </div>

        {/* The Question Card */}
        <div className={`relative bg-[#0e162a]/95 backdrop-blur-xl border rounded-3xl p-4 sm:p-6 shadow-2xl transition-all duration-200 ${
          isCurrentCorrect 
            ? 'border-emerald-500/50 shadow-emerald-950/20' 
            : isCurrentAnswered 
            ? 'border-rose-500/50 shadow-rose-950/20' 
            : 'border-slate-800/90 shadow-black/40'
        }`}>
          {/* Card Meta Row */}
          <div className="flex items-center justify-between mb-3.5">
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${difficulty.color}`}>
              <Layers className="w-3 h-3" />
              <span>{difficulty.text}</span>
            </span>

            <span className="text-xs font-mono-code font-bold text-slate-400">
              Q #{currentQ.id}
            </span>
          </div>

          {/* Question Text (English) */}
          <div className="text-left mb-5" dir="ltr">
            <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed font-en">
              {currentQ.question}
            </h2>
          </div>

          {/* Options: Clean, instant green/red touch buttons */}
          <div className="space-y-2 text-left" dir="ltr">
            {currentQ.options.map((option) => {
              const isSelected = currentAnswer === option.key;
              const isOptionCorrect = option.key === currentQ.correctAnswer;

              let buttonStyles = 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 border-slate-800 hover:border-slate-700';
              let badgeStyles = 'bg-slate-800 text-slate-300 border-slate-700';
              let icon = null;

              if (isCurrentAnswered) {
                if (isSelected && isOptionCorrect) {
                  // User chose this and it is CORRECT -> GREEN
                  buttonStyles = 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-950/60 font-semibold ring-2 ring-emerald-400/50';
                  badgeStyles = 'bg-emerald-700 text-white border-emerald-400';
                  icon = <CheckCircle2 className="w-5 h-5 text-white shrink-0 ml-auto" />;
                } else if (isSelected && !isOptionCorrect) {
                  // User chose this and it is WRONG -> RED
                  buttonStyles = 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-950/60 font-semibold ring-2 ring-rose-400/50';
                  badgeStyles = 'bg-rose-700 text-white border-rose-400';
                  icon = <XCircle className="w-5 h-5 text-white shrink-0 ml-auto" />;
                } else if (!isSelected && isOptionCorrect) {
                  // The TRUE correct answer highlighted in Green
                  buttonStyles = 'bg-emerald-950/40 text-emerald-200 border-2 border-emerald-500/90 shadow-md ring-2 ring-emerald-500/20 font-semibold';
                  badgeStyles = 'bg-emerald-600 text-white border-emerald-400';
                  icon = (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold shrink-0 ml-auto" dir="rtl">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>الجواب الصح</span>
                    </div>
                  );
                } else {
                  // Other unselected options
                  buttonStyles = 'bg-slate-950/30 text-slate-500 border-slate-900/80 opacity-40';
                  badgeStyles = 'bg-slate-900 text-slate-600 border-slate-800';
                }
              }

              return (
                <button
                  key={option.key}
                  onClick={() => handleSelectAnswer(option.key)}
                  disabled={isCurrentAnswered}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all duration-150 active:scale-[0.99] disabled:cursor-default ${buttonStyles}`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm border shrink-0 font-en ${badgeStyles}`}>
                    {option.key}
                  </span>
                  <span className="text-sm sm:text-base leading-snug font-en flex-1">
                    {option.text}
                  </span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Answer result & auto-advance notice */}
          {isCurrentAnswered && (
            <div className="mt-4 pt-3.5 border-t border-slate-800/90 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-bold">
                {isCurrentCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    <span>إجابة صحيحة وممتازة!</span>
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    <span>إجابة خاطئة. الجواب الصح هو ({currentQ.correctAnswer})</span>
                  </span>
                )}
              </div>

              {autoAdvance && currentIndex < questionsData.length - 1 && isTransitioning && (
                <span className="text-[11px] text-emerald-400 font-mono-code font-bold animate-pulse flex items-center gap-1">
                  <span>الانتقال للسؤال التالي...</span>
                  <ArrowLeft className="w-3 h-3" />
                </span>
              )}
            </div>
          )}
        </div>

        {/* Minimal Navigation Buttons */}
        <div className="flex items-center gap-3 mt-3.5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 py-3 px-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
            <span>السابق</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === questionsData.length - 1}
            className="flex-1 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 border border-emerald-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
          >
            <span>السؤال التالي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer with Prominent Author Credit */}
      <footer className="relative z-10 py-3 text-center text-xs text-slate-500 border-t border-slate-900 bg-[#060a14]/90">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span>الكوز الاول — مادة أمن الشبكات (Network Security 150 MCQs)</span>
          <span>•</span>
          <span className="text-amber-400 font-bold flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5" />
            <span>إعداد: أحمد مثنى حسن</span>
          </span>
        </div>
      </footer>

      {/* 150 Question Grid Drawer / Modal */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div 
            className="bg-[#0e162a] rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  <span>خريطة الأسئلة الـ 150</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-mono-code">
                    {stats.answered}/150
                  </span>
                </h3>
                <p className="text-xs text-amber-300 font-semibold mt-0.5">
                  إعداد: أحمد مثنى حسن
                </p>
              </div>
              <button
                onClick={() => setIsGridOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter buttons in modal */}
            <div className="px-4 py-2 border-b border-slate-800/80 flex items-center gap-2 text-xs font-bold">
              <button
                onClick={() => setFilterWrongOnly(false)}
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  !filterWrongOnly 
                    ? 'bg-slate-700 text-white' 
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                جميع الأسئلة (150)
              </button>
              {stats.wrong > 0 && (
                <button
                  onClick={() => setFilterWrongOnly(true)}
                  className={`px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 ${
                    filterWrongOnly 
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-500/30' 
                      : 'bg-slate-900 text-rose-400 hover:text-rose-300'
                  }`}
                >
                  <XCircle className="w-3.5 h-3.5" />
                  <span>الخاطئة فقط ({stats.wrong})</span>
                </button>
              )}
            </div>

            {/* Grid List */}
            <div className="p-4 overflow-y-auto flex-1 max-h-[55vh]">
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {questionsData
                  .filter((q) => {
                    if (filterWrongOnly) {
                      const ans = userAnswers[q.id];
                      return ans && ans !== q.correctAnswer;
                    }
                    return true;
                  })
                  .map((q) => {
                    const ans = userAnswers[q.id];
                    const isCurrent = currentQ.id === q.id;

                    let boxStyles = 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600';

                    if (ans) {
                      if (ans === q.correctAnswer) {
                        boxStyles = 'bg-emerald-600 text-white border-emerald-500 font-black shadow-xs';
                      } else {
                        boxStyles = 'bg-rose-600 text-white border-rose-500 font-black shadow-xs';
                      }
                    }

                    if (isCurrent) {
                      boxStyles += ' ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0e162a]';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          const targetIdx = questionsData.findIndex((item) => item.id === q.id);
                          if (targetIdx !== -1) setCurrentIndex(targetIdx);
                          setIsGridOpen(false);
                          sound.playClick();
                        }}
                        className={`h-10 rounded-xl border flex items-center justify-center text-xs font-mono-code font-bold transition-all active:scale-95 ${boxStyles}`}
                      >
                        {q.id}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> صحيح ({stats.correct})
                </span>
                <span className="flex items-center gap-1 text-rose-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> خطأ ({stats.wrong})
                </span>
              </div>
              <button
                onClick={() => setIsGridOpen(false)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div 
            className="bg-[#0e162a] rounded-3xl p-6 max-w-sm w-full border border-slate-800 text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-2xl flex items-center justify-center mx-auto border border-rose-500/20">
              <RotateCcw className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-black text-white">
                تأكيد إعادة البدء
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                هل تريد مسح جميع الإجابات والبدء من السؤال الأول مجدداً؟
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleResetAll}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
              >
                نعم، ابدأ من جديد
              </button>
              <button
                onClick={() => setIsResetConfirmOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
