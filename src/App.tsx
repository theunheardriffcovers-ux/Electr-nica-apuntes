import React, { useState } from 'react';
import { CLASSES_DATA } from './data/classContent';
import { ClassView } from './components/ClassView';
import { QuizzesView } from './components/QuizzesView';
import { InteractiveWorkbench } from './components/InteractiveWorkbench';
import { CheatSheetView } from './components/CheatSheetView';
import { PrintA4View } from './components/PrintA4View';
import { ExportModal } from './components/ExportModal';
import {
  BookOpen,
  Award,
  Calculator,
  AlertOctagon,
  Printer,
  Sparkles,
  ChevronRight,
  Layers,
  GraduationCap,
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'classes' | 'quizzes' | 'workbench' | 'cheatsheet' | 'print'>('classes');
  const [selectedClassId, setSelectedClassId] = useState<number>(1);
  const [selectedQuizId, setSelectedQuizId] = useState<number>(1);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  const selectedClass = CLASSES_DATA.find((c) => c.id === selectedClassId) || CLASSES_DATA[0];

  const handleGoToQuiz = (quizNum: number) => {
    setSelectedQuizId(quizNum);
    setCurrentView('quizzes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToClass = (classId: number) => {
    setSelectedClassId(classId);
    setCurrentView('classes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'print') {
    return (
      <PrintA4View onBackToApp={() => setCurrentView('classes')} />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Branding */}
            <div
              onClick={() => setCurrentView('classes')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase font-extrabold tracking-wider text-blue-400">
                  UNLP • Facultad de Artes
                </div>
                <h1 className="text-sm md:text-base font-black tracking-tight text-white flex items-center gap-1.5">
                  <span>Electrónica II</span>
                  <span className="text-slate-400 font-normal hidden sm:inline">| Apuntes & Cuestionarios</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setCurrentView('classes')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'classes'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>7 Clases</span>
              </button>

              <button
                onClick={() => setCurrentView('quizzes')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'quizzes'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Cuestionarios (1-6)</span>
              </button>

              <button
                onClick={() => setCurrentView('workbench')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'workbench'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>Simulador & Fórmulas</span>
              </button>

              <button
                onClick={() => setCurrentView('cheatsheet')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'cheatsheet'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-rose-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <AlertOctagon className="w-4 h-4" />
                <span>10 Errores Fatales</span>
              </button>
            </nav>

            {/* Print & Export Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentView('print')}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                title="Ver documento completo en formato A4 para imprimir"
              >
                <Printer className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Modo A4</span>
              </button>

              <button
                onClick={() => setIsExportModalOpen(true)}
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exportar Canva / PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex overflow-x-auto px-4 py-2 border-t border-slate-800 gap-1 text-xs">
          <button
            onClick={() => setCurrentView('classes')}
            className={`px-3 py-1 rounded-md shrink-0 font-bold ${
              currentView === 'classes' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            Clases 1-7
          </button>
          <button
            onClick={() => setCurrentView('quizzes')}
            className={`px-3 py-1 rounded-md shrink-0 font-bold ${
              currentView === 'quizzes' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            Cuestionarios
          </button>
          <button
            onClick={() => setCurrentView('workbench')}
            className={`px-3 py-1 rounded-md shrink-0 font-bold ${
              currentView === 'workbench' ? 'bg-blue-600 text-white' : 'text-slate-300'
            }`}
          >
            Calculadoras
          </button>
          <button
            onClick={() => setCurrentView('cheatsheet')}
            className={`px-3 py-1 rounded-md shrink-0 font-bold ${
              currentView === 'cheatsheet' ? 'bg-rose-600 text-white' : 'text-rose-300'
            }`}
          >
            10 Errores
          </button>
        </div>
      </header>

      {/* Secondary Bar: Class Selector when in 'classes' view */}
      {currentView === 'classes' && (
        <div className="bg-white border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center gap-2 overflow-x-auto text-xs py-1">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] shrink-0 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Clases:</span>
              </span>
              {CLASSES_DATA.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
                    selectedClassId === cls.id
                      ? 'bg-slate-900 text-white shadow-xs font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      selectedClassId === cls.id ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-700'
                    }`}
                  >
                    {cls.id}
                  </span>
                  <span>{cls.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {currentView === 'classes' && (
          <ClassView section={selectedClass} onGoToQuiz={handleGoToQuiz} />
        )}

        {currentView === 'quizzes' && (
          <QuizzesView initialQuiz={selectedQuizId} onSelectClass={handleGoToClass} />
        )}

        {currentView === 'workbench' && (
          <InteractiveWorkbench />
        )}

        {currentView === 'cheatsheet' && (
          <CheatSheetView />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-bold text-slate-200">
              Electrónica II — Tecnicatura Universitaria en Sonido y Grabación
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              Facultad de Artes • Universidad Nacional de La Plata (UNLP)
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('print')}
              className="text-slate-300 hover:text-white underline text-[11px]"
            >
              Vista de Impresión A4
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="text-blue-400 hover:text-blue-300 underline text-[11px]"
            >
              Exportar a Canva / Copiar Markdown
            </button>
          </div>
        </div>
      </footer>

      {/* Export / Canva Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onTriggerPrint={() => setCurrentView('print')}
      />
    </div>
  );
}
