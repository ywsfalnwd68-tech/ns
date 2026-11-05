import React, { useState, useEffect } from 'react';
import { Question, questionsData } from '../data/questions';
import { 
  X, 
  Award, 
  Clock, 
  RotateCcw, 
  CheckCircle2, 
  XCircle,
  Play,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose }) => {
  const [examState, setExamState] = useState<'setup' | 'active' | 'results'>('setup');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [selectedPart, setSelectedPart] = useState<number | 'all'>('all');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && examState === 'active') {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, examState]);

  if (!isOpen) return null;

  const startExam = () => {
    let pool = [...questionsData];
    if (selectedPart !== 'all') {
      pool = pool.filter((q) => q.part === selectedPart);
    }

    // Shuffle questions
    const shuffled = pool.sort(() => 0.5 - Math.random()).slice(0, questionCount);
    setExamQuestions(shuffled);
    setAnswers({});
    setCurrentIndex(0);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setExamState('active');
  };

  const handleSelectAnswer = (qId: number, key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    const isCorrect = key === examQuestions[currentIndex].correctAnswer;
    if (isCorrect) sound.playCorrect();
    else sound.playWrong();

    setAnswers((prev) => ({
      ...prev,
      [qId]: key,
    }));
  };

  const finishExam = () => {
    setIsTimerRunning(false);
    setExamState('results');

    // Calculate score for confetti
    let correct = 0;
    examQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });

    const percent = Math.round((correct / examQuestions.length) * 100);
    if (percent >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQ = examQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  // Score calculations
  let correctCount = 0;
  let wrongCount = 0;
  if (examState === 'results') {
    examQuestions.forEach((q) => {
      const a = answers[q.id];
      if (a) {
        if (a === q.correctAnswer) correctCount++;
        else wrongCount++;
      }
    });
  }
  const scorePercent = examQuestions.length > 0 ? Math.round((correctCount / examQuestions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                اختبار تجريبي — Network Security
              </h3>
              {examState === 'active' && (
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mt-0.5">
                  <span className="flex items-center gap-1 font-mono-code text-indigo-600">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatTime(timerSeconds)}</span>
                  </span>
                  <span>•</span>
                  <span>سؤال {currentIndex + 1} من {examQuestions.length}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {examState === 'setup' && (
            <div className="space-y-6">
              <div className="text-center py-2">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-indigo-100">
                  <Trophy className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-black text-slate-900">ابدأ اختبارك التجريبي</h4>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                  اختر عدد الأسئلة وقسم الصعوبة لاختبار مستواك قبل الكوز الحقيقي.
                </p>
              </div>

              {/* Number of questions */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  عدد الأسئلة:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 20, 30, 50].map((num) => (
                    <button
                      key={num}
                      onClick={() => setQuestionCount(num)}
                      className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                        questionCount === num
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {num} سؤال
                    </button>
                  ))}
                </div>
              </div>

              {/* Part selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  نطاق الصعوبة:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'all', label: 'كافة الأقسام' },
                    { id: 1, label: 'Part 1 (سهل)' },
                    { id: 2, label: 'Part 2 (متوسط)' },
                    { id: 3, label: 'Part 3 (صعب)' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPart(p.id as typeof selectedPart)}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedPart === p.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={startExam}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md hover:from-emerald-700 hover:to-teal-700 transition-all active:scale-[0.99]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>بدء الاختبار الآن</span>
              </button>
            </div>
          )}

          {examState === 'active' && currentQ && (
            <div className="space-y-4">
              {/* Question header */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 text-xs font-black bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100">
                  سؤال {currentIndex + 1} / {examQuestions.length}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  المجاب: {answeredCount}
                </span>
              </div>

              {/* Question Text */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-left" dir="ltr">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-en">
                  {currentQ.question}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-2 text-left" dir="ltr">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.key;
                  const hasAnswered = answers[currentQ.id] !== undefined;
                  const isThisCorrect = opt.key === currentQ.correctAnswer;

                  let style = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
                  let keyStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                  if (hasAnswered) {
                    if (isSelected && isThisCorrect) {
                      style = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                      keyStyle = 'bg-white/20 text-white border-white/30';
                    } else if (isSelected && !isThisCorrect) {
                      style = 'bg-rose-600 text-white border-rose-600 font-bold';
                      keyStyle = 'bg-white/20 text-white border-white/30';
                    } else if (!isSelected && isThisCorrect) {
                      style = 'bg-emerald-50 text-emerald-900 border-emerald-400 font-bold';
                      keyStyle = 'bg-emerald-200 text-emerald-900 border-emerald-300';
                    } else {
                      style = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectAnswer(currentQ.id, opt.key)}
                      disabled={hasAnswered}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all active:scale-[0.99] font-en ${style}`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs border shrink-0 ${keyStyle}`}>
                        {opt.key}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                      {hasAnswered && isSelected && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-white ml-auto shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-white ml-auto shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="px-3 py-2 text-xs font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>السابق</span>
                </button>

                {currentIndex < examQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 flex items-center gap-1 shadow-xs"
                  >
                    <span>التالي</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={finishExam}
                    className="px-4 py-2 text-xs font-black text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 flex items-center gap-1 shadow-md"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>إنهاء الاختبار</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {examState === 'results' && (
            <div className="space-y-6 text-center py-2">
              <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-3xl font-black shadow-lg ${
                scorePercent >= 80 
                  ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300' 
                  : scorePercent >= 50 
                  ? 'bg-amber-100 text-amber-700 border-2 border-amber-300' 
                  : 'bg-rose-100 text-rose-700 border-2 border-rose-300'
              }`}>
                {scorePercent}%
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">
                  {scorePercent >= 85
                    ? 'أداء رائع جداً! مبروك 🌟'
                    : scorePercent >= 60
                    ? 'نتيجة جيدة، استمر بالمراجعة 💪'
                    : 'تحتاج لمزيد من التركيز والمراجعة 📚'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  استغرقت في الحل: {formatTime(timerSeconds)}
                </p>
              </div>

              {/* Stats card */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <div>
                  <span className="block text-lg font-black text-emerald-600">{correctCount}</span>
                  <span className="text-xs text-slate-500 font-bold">صحيح</span>
                </div>
                <div>
                  <span className="block text-lg font-black text-rose-600">{wrongCount}</span>
                  <span className="text-xs text-slate-500 font-bold">خطأ</span>
                </div>
                <div>
                  <span className="block text-lg font-black text-slate-700">{examQuestions.length - (correctCount + wrongCount)}</span>
                  <span className="text-xs text-slate-500 font-bold">متروك</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setExamState('setup')}
                  className="flex-1 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إجراء اختبار جديد</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  العودة للرئيسية
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
