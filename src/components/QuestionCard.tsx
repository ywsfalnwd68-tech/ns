import React from 'react';
import { Question } from '../data/questions';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: 'A' | 'B' | 'C' | 'D' | 'E';
  onSelectAnswer: (questionId: number, answerKey: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  onResetAnswer: (questionId: number) => void;
  isBookmarked: boolean;
  onToggleBookmark: (questionId: number) => void;
  highlightCorrectDirectly?: boolean; // in study mode or if answered
  showQuestionIndex?: number;
  totalFiltered?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onResetAnswer,
  isBookmarked,
  onToggleBookmark,
  showQuestionIndex,
  totalFiltered,
}) => {
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;
  const isWrong = isAnswered && selectedAnswer !== question.correctAnswer;

  const getDifficultyBadge = (part: number) => {
    switch (part) {
      case 1:
        return {
          label: 'Part 1 — Easy (سهل)',
          style: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        };
      case 2:
        return {
          label: 'Part 2 — Medium (متوسط)',
          style: 'bg-amber-50 text-amber-700 border-amber-200',
        };
      case 3:
        return {
          label: 'Part 3 — Hard (صعب ومتقدم)',
          style: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        };
      default:
        return {
          label: question.partName,
          style: 'bg-slate-50 text-slate-700 border-slate-200',
        };
    }
  };

  const badgeInfo = getDifficultyBadge(question.part);

  return (
    <div 
      id={`question-${question.id}`}
      className={`relative bg-white rounded-2xl border transition-all duration-200 shadow-xs hover:shadow-md p-4 sm:p-6 ${
        isCorrect
          ? 'border-emerald-300 ring-1 ring-emerald-200/60'
          : isWrong
          ? 'border-rose-300 ring-1 ring-rose-200/60'
          : 'border-slate-200/90'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-black bg-slate-900 text-white rounded-lg shadow-xs">
            <span>سؤال</span>
            <span className="font-mono-code text-sm">#{question.id}</span>
          </span>

          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-lg border ${badgeInfo.style}`}>
            <Layers className="w-3 h-3" />
            <span>{badgeInfo.label}</span>
          </span>

          {showQuestionIndex !== undefined && totalFiltered !== undefined && (
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              ({showQuestionIndex} من {totalFiltered})
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {isAnswered && (
            <button
              onClick={() => onResetAnswer(question.id)}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1"
              title="إعادة حل هذا السؤال"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">إعادة</span>
            </button>
          )}

          <button
            onClick={() => onToggleBookmark(question.id)}
            className={`p-2 rounded-xl transition-all ${
              isBookmarked
                ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
            }`}
            title={isBookmarked ? 'إزالة من المحفوظات' : 'حفظ السؤال للمراجعة'}
            aria-label="حفظ السؤال"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Question Text (English) */}
      <div className="mb-5 text-left" dir="ltr">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-en">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5 text-left" dir="ltr">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.key;
          const isThisCorrect = option.key === question.correctAnswer;

          let buttonStyle = 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300';
          let keyBadgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';
          let statusIcon = null;

          if (isAnswered) {
            if (isSelected && isThisCorrect) {
              // User clicked this and it is correct -> GREEN
              buttonStyle = 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-300 font-medium';
              keyBadgeStyle = 'bg-white/20 text-white border-white/30';
              statusIcon = <CheckCircle2 className="w-5 h-5 text-white shrink-0 ml-auto" />;
            } else if (isSelected && !isThisCorrect) {
              // User clicked this and it is WRONG -> RED
              buttonStyle = 'bg-rose-600 text-white border-rose-600 shadow-md ring-2 ring-rose-300 font-medium';
              keyBadgeStyle = 'bg-white/20 text-white border-white/30';
              statusIcon = <XCircle className="w-5 h-5 text-white shrink-0 ml-auto" />;
            } else if (!isSelected && isThisCorrect) {
              // This is the actual correct answer when user picked wrong -> Highlight Green
              buttonStyle = 'bg-emerald-50 text-emerald-900 border-2 border-emerald-500 ring-2 ring-emerald-200 font-semibold';
              keyBadgeStyle = 'bg-emerald-200 text-emerald-900 border-emerald-300';
              statusIcon = (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold shrink-0 ml-auto" dir="rtl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>الجواب الصح</span>
                </div>
              );
            } else {
              // Other unselected options
              buttonStyle = 'bg-slate-50/60 text-slate-400 border-slate-200 opacity-70';
              keyBadgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
            }
          }

          return (
            <button
              key={option.key}
              onClick={() => onSelectAnswer(question.id, option.key)}
              disabled={isAnswered}
              className={`w-full group flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.99] disabled:cursor-default ${buttonStyle}`}
            >
              {/* Option Key Letter Pill (A, B, C, D, E) */}
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border transition-colors font-en ${keyBadgeStyle}`}>
                {option.key}
              </span>

              {/* Option Text */}
              <span className="text-sm sm:text-base leading-snug font-en flex-1">
                {option.text}
              </span>

              {/* Status Indicator */}
              {statusIcon}
            </button>
          );
        })}
      </div>

      {/* Answer feedback summary footer if answered */}
      {isAnswered && (
        <div 
          className={`mt-4 pt-3.5 border-t flex items-center justify-between text-xs sm:text-sm font-semibold rounded-b-xl transition-all ${
            isCorrect 
              ? 'border-emerald-100 text-emerald-700' 
              : 'border-rose-100 text-rose-700'
          }`}
        >
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>إجابة ممتازة وصحيحة! ({question.correctAnswer})</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>
                  إجابتك ({selectedAnswer}) غير صحيحة. الإجابة النموذجية هي ({question.correctAnswer}).
                </span>
              </>
            )}
          </div>

          <button
            onClick={() => onResetAnswer(question.id)}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 underline underline-offset-2 shrink-0 mr-2"
          >
            إعادة التجربة
          </button>
        </div>
      )}
    </div>
  );
};
