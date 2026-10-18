import React, { useState } from 'react';
import { QUIZZES_DATA, QuizQuestion } from '../data/quizzesData';
import {
  CheckCircle,
  HelpCircle,
  Search,
  BookOpen,
  Lightbulb,
  Check,
  Eye,
  EyeOff,
  Wrench,
  Award,
} from 'lucide-react';

interface QuizzesViewProps {
  initialQuiz?: number;
  onSelectClass?: (classId: number) => void;
}

export const QuizzesView: React.FC<QuizzesViewProps> = ({ initialQuiz, onSelectClass }) => {
  const [selectedQuiz, setSelectedQuiz] = useState<number>(initialQuiz || 1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selfTestMode, setSelfTestMode] = useState<boolean>(false);
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<string, string[]>>({});

  const currentQuizGroup = QUIZZES_DATA.find((q) => q.quizNumber === selectedQuiz) || QUIZZES_DATA[0];

  const handleToggleReveal = (qId: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleOptionClick = (qId: string, option: string, isMultiple?: boolean) => {
    if (!selfTestMode) return;
    setUserSelectedOptions((prev) => {
      const current = prev[qId] || [];
      if (isMultiple) {
        if (current.includes(option)) {
          return { ...prev, [qId]: current.filter((o) => o !== option) };
        } else {
          return { ...prev, [qId]: [...current, option] };
        }
      } else {
        return { ...prev, [qId]: [option] };
      }
    });
  };

  const filteredQuestions = currentQuizGroup.questions.filter((q) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      q.questionText.toLowerCase().includes(query) ||
      q.explanation.toLowerCase().includes(query) ||
      q.memoryTip.toLowerCase().includes(query) ||
      q.options.some((o) => o.toLowerCase().includes(query))
    );
  });

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              <span>Resolución Oficial de Cuestionarios (Exámenes 1 al 6)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Preguntas oficiales de Electrónica II con fundamento teórico, procedimientos paso a paso y respuestas para memorizar.
            </p>
          </div>

          {/* Toggle Self-test */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelfTestMode(!selfTestMode);
                setRevealedQuestions({});
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all border ${
                selfTestMode
                  ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
              }`}
            >
              {selfTestMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{selfTestMode ? 'Modo Autoevaluación Activo' : 'Activar Modo Autoevaluación'}</span>
            </button>
          </div>
        </div>

        {/* Quiz selector tabs */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          {QUIZZES_DATA.map((q) => (
            <button
              key={q.quizNumber}
              onClick={() => {
                setSelectedQuiz(q.quizNumber);
                setSearchQuery('');
              }}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedQuiz === q.quizNumber
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              Cuestionario {q.quizNumber} ({q.totalQuestions} preg.)
            </button>
          ))}
        </div>

        {/* Search bar & info banner */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por palabra clave, fórmula o concepto en este cuestionario..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-xs text-slate-800 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="font-semibold text-slate-800">{currentQuizGroup.title}</span>
            <span>&bull;</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {currentQuizGroup.passingScore}
            </span>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-xl border border-slate-200 text-slate-500 text-xs">
            No se encontraron preguntas que coincidan con la búsqueda "{searchQuery}".
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isRevealed = !selfTestMode || revealedQuestions[q.id];
            const userAns = userSelectedOptions[q.id] || [];

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 transition-all hover:border-slate-300 space-y-4"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {q.questionNumber}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {q.questionText}
                      </h3>
                      {q.isMultipleChoice && (
                        <span className="inline-block mt-1 text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          (Selección múltiple: una o más respuestas correctas)
                        </span>
                      )}
                    </div>
                  </div>

                  {onSelectClass && (
                    <button
                      onClick={() => onSelectClass(q.relatedClass)}
                      className="shrink-0 flex items-center gap-1 text-[11px] text-slate-500 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 px-2.5 py-1 rounded border border-slate-200 transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Clase {q.relatedClass}</span>
                    </button>
                  )}
                </div>

                {/* Options list */}
                <div className="space-y-2 pl-10">
                  {q.options.map((opt, oIdx) => {
                    const isCorrect = q.correctAnswers.includes(opt);
                    const isUserSelected = userAns.includes(opt);

                    let optionStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                    if (isRevealed) {
                      if (isCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                      } else if (isUserSelected && !isCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-300 text-rose-800 line-through';
                      }
                    } else if (isUserSelected) {
                      optionStyle = 'bg-blue-50 border-blue-500 text-blue-900 font-semibold';
                    }

                    return (
                      <div
                        key={oIdx}
                        onClick={() => handleOptionClick(q.id, opt, q.isMultipleChoice)}
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${optionStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isRevealed && isCorrect
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : isUserSelected
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'border-slate-400 bg-white'
                            }`}
                          >
                            {isRevealed && isCorrect ? '✓' : isUserSelected ? '•' : ''}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {isRevealed && isCorrect && (
                          <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            Correcta
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Show solution button for self-test */}
                {selfTestMode && !revealedQuestions[q.id] && (
                  <div className="pl-10">
                    <button
                      onClick={() => handleToggleReveal(q.id)}
                      className="flex items-center gap-1.5 text-xs bg-slate-800 text-white hover:bg-slate-900 px-3 py-1.5 rounded-md font-semibold transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Comprobar respuesta y ver justificación</span>
                    </button>
                  </div>
                )}

                {/* Explanation and Procedure (Revealed) */}
                {isRevealed && (
                  <div className="pl-10 space-y-3 pt-2 border-t border-slate-100">
                    {/* Mathematical procedure if available */}
                    {q.procedure && (
                      <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs space-y-1">
                        <div className="text-emerald-400 font-bold font-sans flex items-center gap-1.5 text-xs mb-1">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Procedimiento de Cálculo Paso a Paso:</span>
                        </div>
                        {q.procedure.map((step, sIdx) => (
                          <div key={sIdx} className="leading-relaxed">
                            {step}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Conceptual Foundation */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1 text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900 block">Fundamento Teórico:</span>
                      {q.explanation}
                    </div>

                    {/* Memorize tip */}
                    <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-lg text-xs text-amber-950 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900">Para memorizar en el examen: </span>
                        <span>{q.memoryTip}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
