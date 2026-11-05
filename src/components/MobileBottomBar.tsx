import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  FileSpreadsheet, 
  CheckCircle2, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { ViewMode } from './FilterBar';

interface MobileBottomBarProps {
  currentIndex: number;
  totalFiltered: number;
  viewMode: ViewMode;
  onNext: () => void;
  onPrev: () => void;
  onOpenGrid: () => void;
  answeredCount: number;
  totalCount: number;
  onScrollToTop: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentIndex,
  totalFiltered,
  viewMode,
  onNext,
  onPrev,
  onOpenGrid,
  answeredCount,
  totalCount,
  onScrollToTop,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 shadow-lg safe-bottom">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {viewMode === 'single' ? (
          <>
            <button
              onClick={onPrev}
              disabled={currentIndex <= 0}
              className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={onOpenGrid}
              className="py-2 px-3 rounded-xl bg-slate-900 text-white font-mono-code font-bold text-xs flex items-center gap-1.5 shadow-xs hover:bg-slate-800 transition-all active:scale-95"
              title="خريطة الأسئلة"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-slate-300" />
              <span>
                {currentIndex + 1} / {totalFiltered}
              </span>
            </button>

            <button
              onClick={onNext}
              disabled={currentIndex >= totalFiltered - 1}
              className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xs active:scale-95"
            >
              <span>التالي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>تم حل {answeredCount} من أصل {totalCount} سؤال</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenGrid}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-600" />
                <span>الخريطة</span>
              </button>

              <button
                onClick={onScrollToTop}
                className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                للأعلى ↑
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
