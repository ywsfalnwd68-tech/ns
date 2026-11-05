import React from 'react';
import { 
  Search, 
  X, 
  LayoutList, 
  SquareDot, 
  Sparkles,
  AlertTriangle
} from 'lucide-react';

export type FilterCategory = 'all' | 'part1' | 'part2' | 'part3' | 'wrong' | 'bookmarked' | 'unanswered';
export type ViewMode = 'single' | 'list';

interface FilterBarProps {
  currentCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  counts: {
    all: number;
    part1: number;
    part2: number;
    part3: number;
    wrong: number;
    bookmarked: number;
    unanswered: number;
  };
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  viewMode,
  onToggleViewMode,
  counts,
}) => {
  const categories: { id: FilterCategory; label: string; count: number; badgeColor?: string }[] = [
    { id: 'all', label: 'الكل', count: counts.all },
    { id: 'part1', label: 'الجزء 1 (سهل)', count: counts.part1 },
    { id: 'part2', label: 'الجزء 2 (متوسط)', count: counts.part2 },
    { id: 'part3', label: 'الجزء 3 (صعب)', count: counts.part3 },
    { id: 'wrong', label: 'الخاطئة', count: counts.wrong, badgeColor: counts.wrong > 0 ? 'text-rose-600 bg-rose-50' : undefined },
    { id: 'bookmarked', label: 'المحفوظة ⭐', count: counts.bookmarked },
    { id: 'unanswered', label: 'غير المحلولة', count: counts.unanswered },
  ];

  return (
    <div className="space-y-3">
      {/* Search Bar & View Mode Toggle */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث في الأسئلة (مثال: Firewall, ARP, Port, TLS...)"
            className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-slate-800 placeholder-slate-400 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
          <button
            onClick={() => onToggleViewMode('single')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'single'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            title="عرض بطاقة بسؤال واحد للموبايل"
          >
            <SquareDot className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">بطاقة واحدة</span>
          </button>
          <button
            onClick={() => onToggleViewMode('list')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'list'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            title="عرض قائمة مستمرة"
          >
            <LayoutList className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">قائمة</span>
          </button>
        </div>
      </div>

      {/* Categories Scrollable Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all flex items-center gap-1.5 shrink-0 active:scale-95 ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : cat.badgeColor || 'bg-slate-100 text-slate-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Warning/Help banner if reviewing wrong answers */}
      {currentCategory === 'wrong' && counts.wrong > 0 && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-rose-800 text-xs font-semibold">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>
            أنت الآن تراجع الأسئلة التي أجبت عليها بشكل خاطئ ({counts.wrong} أسئلة). ركّز على معرفة الإجابة الصحيحة!
          </span>
        </div>
      )}
    </div>
  );
};
