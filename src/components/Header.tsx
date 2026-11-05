import React from 'react';
import { 
  ShieldCheck, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Zap, 
  Grid3X3,
  CheckCircle2, 
  XCircle,
  UserCheck
} from 'lucide-react';

interface HeaderProps {
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  autoAdvance: boolean;
  onToggleAutoAdvance: () => void;
  onReset: () => void;
  onOpenGrid: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentIndex,
  totalQuestions,
  correctCount,
  wrongCount,
  soundEnabled,
  onToggleSound,
  autoAdvance,
  onToggleAutoAdvance,
  onReset,
  onOpenGrid,
}) => {
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <header className="w-full bg-[#0d1424]/90 backdrop-blur-xl border-b border-slate-800/80 sticky top-0 z-30 shadow-md">
      <div className="max-w-2xl mx-auto px-4 py-3">
        {/* Top row: Title + Author Credit + Quick utility buttons */}
        <div className="flex items-center justify-between gap-2">
          {/* Title & Author */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-black flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-white tracking-tight">
                  الكوز الاول
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Network Security
                </span>
              </div>
              {/* Prominent Author Credit */}
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>إعداد: أحمد مثنى حسن</span>
              </div>
            </div>
          </div>

          {/* Quick controls with minimal noise */}
          <div className="flex items-center gap-1.5">
            {/* Auto Advance Toggle */}
            <button
              onClick={onToggleAutoAdvance}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                autoAdvance
                  ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-xs'
                  : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
              }`}
              title={autoAdvance ? 'الانتقال التلقائي مفعّل' : 'الانتقال التلقائي معطّل'}
            >
              <Zap className={`w-3.5 h-3.5 ${autoAdvance ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">انتقال تلقائي</span>
            </button>

            {/* Questions Grid Button */}
            <button
              onClick={onOpenGrid}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-mono-code font-bold text-xs border border-slate-700 transition-colors"
              title="خريطة الأسئلة"
            >
              <Grid3X3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentIndex + 1}/{totalQuestions}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className={`p-2 rounded-xl border transition-colors ${
                soundEnabled
                  ? 'bg-slate-800 text-emerald-400 border-slate-700'
                  : 'bg-slate-800/40 text-slate-500 border-slate-800'
              }`}
              title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Reset Progress */}
            <button
              onClick={onReset}
              className="p-2 rounded-xl bg-slate-800/60 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 border border-slate-700/60 transition-colors"
              title="إعادة البدء"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live minimalistic score & progress indicator */}
        <div className="mt-2.5 flex items-center justify-between text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">
              السؤال {currentIndex + 1} من {totalQuestions}
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{correctCount} صحيح</span>
            </span>
            <span className="flex items-center gap-1 text-rose-400">
              <XCircle className="w-3.5 h-3.5" />
              <span>{wrongCount} خطأ</span>
            </span>
          </div>

          <div className="font-mono-code text-[11px] text-slate-400">
            {progressPercent}%
          </div>
        </div>

        {/* Thin progress line */}
        <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
