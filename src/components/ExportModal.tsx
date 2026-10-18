import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { CLASSES_DATA } from '../data/classContent';
import { QUIZZES_DATA } from '../data/quizzesData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerPrint: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, onTriggerPrint }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const generateFullMarkdown = (): string => {
    let md = `# APUNTES MAESTROS INTEGRADOS — ELECTRÓNICA II\n`;
    md += `## Tecnicatura Universitaria en Sonido y Grabación — Facultad de Artes, UNLP\n\n`;
    md += `Documento completo integrado para examen parcial y final.\n\n---\n\n`;

    CLASSES_DATA.forEach((cls) => {
      md += `## CLASE ${cls.id}: ${cls.title}\n`;
      md += `*${cls.subtitle}*\n\n`;
      md += `### Síntesis Esencial\n${cls.summary}\n\n`;
      md += `### Explicación Concreta\n${cls.explanation}\n\n`;
      md += `### ¿Para qué sirve?\n${cls.practicalUse}\n\n`;

      md += `### Conceptos y Definiciones Clave\n`;
      cls.concepts.forEach((c) => {
        md += `- **${c.title}**: ${c.description}\n`;
        if (c.formula) md += `  Fórmula: \`${c.formula}\`\n`;
        if (c.details) {
          c.details.forEach((d) => (md += `  * ${d}\n`));
        }
      });
      md += `\n`;

      md += `### Procedimientos Paso a Paso\n`;
      cls.procedures.forEach((p, idx) => {
        md += `#### Procedimiento ${idx + 1}: ${p.title}\n`;
        md += `- **Objetivo**: ${p.objective}\n`;
        md += `- **Principio/Fórmula**: ${p.formulaOrPrinciple}\n`;
        p.steps.forEach((s) => {
          md += `  ${s.step}. **${s.action}**: ${s.justification}\n`;
        });
        md += `- **Resultado e Interpretación**: ${p.resultAndInterpretation}\n`;
        md += `- **Error Frecuente a Evitar**: ${p.commonError}\n\n`;
      });

      md += `### Ejemplo Numérico Resuelto\n`;
      md += `**${cls.keyExample.title}**\n`;
      md += `${cls.keyExample.problem}\n\n`;
      md += `*Resolución:*\n`;
      cls.keyExample.resolution.forEach((r) => (md += `- ${r}\n`));
      md += `**Resultado**: ${cls.keyExample.result}\n\n`;

      md += `### Lo que debo recordar para el examen\n`;
      cls.examKeys.forEach((k) => {
        md += `- **${k.point}**: ${k.tip} *(Evitar: ${k.frequentTrap})*\n`;
      });
      md += `\n---\n\n`;
    });

    md += `## SECCIÓN ESPECIAL: CUESTIONARIOS OFICIALES RESUELTOS\n\n`;
    QUIZZES_DATA.forEach((quiz) => {
      md += `### ${quiz.title} (${quiz.topic})\n`;
      quiz.questions.forEach((q) => {
        md += `**Pregunta ${q.questionNumber}:** ${q.questionText}\n`;
        md += `- **Respuesta correcta:** ${q.correctAnswers.join(' ; ')}\n`;
        if (q.procedure) {
          md += `- **Procedimiento:** ${q.procedure.join(' -> ')}\n`;
        }
        md += `- **Fundamento:** ${q.explanation}\n`;
        md += `- **Para memorizar:** ${q.memoryTip}\n\n`;
      });
    });

    return md;
  };

  const handleCopyMarkdown = () => {
    const text = generateFullMarkdown();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base">Exportación a Canva y PDF A4</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Declaración transparente obligatoria sobre Canva */}
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-lg text-xs text-amber-900 leading-relaxed space-y-1.5">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Aclaración formal sobre Canva (Requerimiento de la consigna):</span>
          </div>
          <p>
            Como modelo de lenguaje en este entorno, no poseo acceso directo por API ni credenciales para escribir directamente en tu cuenta privada de Canva.
          </p>
          <p className="font-semibold">
            Sin embargo, aquí tienes las dos alternativas exactas y 100% compatibles que cumplen con tu entrega:
          </p>
        </div>

        <div className="space-y-3">
          {/* Opción 1: Imprimir / Guardar en PDF A4 */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900 flex items-center gap-2">
                <Printer className="w-4 h-4 text-blue-600" />
                <span>Opción 1: PDF en Formato A4 (Recomendado)</span>
              </span>
              <button
                onClick={() => {
                  onClose();
                  onTriggerPrint();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all"
              >
                Imprimir / Guardar PDF
              </button>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Abre la vista imprimible con tipografía cuidada, márgenes A4 de 15mm, saltos de página por clase y gráficos vectoriales. Al guardarlo como PDF, puedes <strong>arrastrarlo directamente a Canva</strong> en "Proyectos / Subir" y Canva convertirá automáticamente el PDF en un diseño editable.
            </p>
          </div>

          {/* Opción 2: Copiar texto estructurado */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900 flex items-center gap-2">
                <Copy className="w-4 h-4 text-purple-600" />
                <span>Opción 2: Copiar Contenido Completo (Markdown / Docs)</span>
              </span>
              <button
                onClick={handleCopyMarkdown}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Copiar Todo'}</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Copia al portapapeles el texto íntegro estructurado con títulos, procedimientos numerados y cuestionarios resueltos listo para pegar en Canva Docs, Notion o Word.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 font-semibold text-xs transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
