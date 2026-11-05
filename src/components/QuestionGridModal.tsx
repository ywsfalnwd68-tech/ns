import React, { useState } from 'react';
import { Question } from '../data/questions';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  CircleDot, 
  Bookmark,
  Sparkles
} from 'lucide-react';

interface QuestionGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  userAnswers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  bookmarks: number[];
  onSelectQuestion: (questionId: number) => void;
  currentQuestionId?: number;
}

export const QuestionGridModal: React.FC<QuestionGridModalProps> = ({
  isOpen,
  onClose,
  questions,
  userAnswers,
  bookmarks,
  onSelectQuestion,
  currentQuestionId,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'unanswered' | 'bookmarked'>('all');

  if (!isOpen) return null;

  const total = questions.length;
  let correctCount = 0;
  let wrongCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans) {
      if (ans === q.correctAnswer) correctCount++;
      else wrongCount++;
    }
  });

  const unansweredCount = total - (correctCount + wrongCount);

  const filteredQuestions = questions.filter((q) => {
    const ans = userAnswers[q.id];
    const isBookmarked = bookmarks.includes(q.id);

    if (filter === 'correct') return ans && ans === q.correctAnswer;
    if (filter === 'wrong') return ans && ans !== q.correctAnswer;
    if (filter === 'unanswered') return !ans;
    if (filter === 'bookmarked') return isBookmarked;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>خريطة الأسئلة</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                150 سؤال
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              اضغط على أي رقم للانتقال المباشر إلى السؤال
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats summary banner */}
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>{correctCount} صحيح</span>
            </span>
            <span className="flex items-center gap-1 text-rose-600">
              <XCircle className="w-4 h-4" />
              <span>{wrongCount} خطأ</span>
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <CircleDot className="w-4 h-4" />
              <span>{unansweredCount} متبقي</span>
            </span>
          </div>

          {bookmarks.length > 0 && (
            <span className="flex items-center gap-1 text-amber-600">
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{bookmarks.length} محفوظ</span>
            </span>
          )}
        </div>

        {/* Filters pills */}
        <div className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          {[
            { id: 'all', label: `الكل (${total})` },
            { id: 'correct', label: `الصحيحة (${correctCount})` },
            { id: 'wrong', label: `الخاطئة (${wrongCount})` },
            { id: 'unanswered', label: `غير المحلولة (${unansweredCount})` },
            { id: 'bookmarked', label: `المحفوظة (${bookmarks.length})` },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as typeof filter)}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* The 150 Grid */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 max-h-[55vh]">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold">لا توجد أسئلة تطابق هذا التصنيف</p>
            </div>
          ) : (
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {filteredQuestions.map((q) => {
                const ans = userAnswers[q.id];
                const isBookmarked = bookmarks.includes(q.id);
                const isCurrent = currentQuestionId === q.id;

                let stateClasses = 'bg-white text-slate-700 border-slate-200 hover:border-slate-400';

                if (ans) {
                  if (ans === q.correctAnswer) {
                    stateClasses = 'bg-emerald-500 text-white border-emerald-600 font-black shadow-xs';
                  } else {
                    stateClasses = 'bg-rose-500 text-white border-rose-600 font-black shadow-xs';
                  }
                }

                if (isCurrent) {
                  stateClasses += ' ring-2 ring-indigo-500 ring-offset-2';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(q.id);
                      onClose();
                    }}
                    className={`relative h-11 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all active:scale-95 ${stateClasses}`}
                  >
                    <span className="font-mono-code">{q.id}</span>
                    {isBookmarked && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> صحيح
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" /> خطأ
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-white border border-slate-300 inline-block" /> لم يُحل
            </span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
