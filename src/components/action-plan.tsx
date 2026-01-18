// Lightweight kanban-style checklist to execute the monetization plan.
"use client";

import { FormEvent, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

type Step = {
  id: string;
  category: "الإعداد" | "المنتج" | "التسويق" | "التوسع";
  title: string;
  impact: "عالٍ" | "متوسط" | "سريع";
  completed: boolean;
};

const baseSteps: Step[] = [
  {
    id: "1",
    category: "الإعداد",
    title: "حدد الجمهور المثالي (شريحة واضحة مع مشكلة قابلة للقياس).",
    impact: "عالٍ",
    completed: false,
  },
  {
    id: "2",
    category: "المنتج",
    title: "ابنِ عرض قيمة مختصر يصف النتيجة، الزمن، وضمان الاسترداد.",
    impact: "عالٍ",
    completed: false,
  },
  {
    id: "3",
    category: "التسويق",
    title: "جهّز صفحة هبوط باستخدام نموذج التحويل السريع (قصة + حل + CTA).",
    impact: "عالٍ",
    completed: false,
  },
  {
    id: "4",
    category: "التسويق",
    title: "اعمل حملة محتوى يومية لمدة ١٤ يوماً مع CTA واحد وواضح.",
    impact: "متوسط",
    completed: false,
  },
  {
    id: "5",
    category: "التوسع",
    title: "أطلق برنامج إحالة يمنح العميل ٢٠٪ خصم لكل إحالة ناجحة.",
    impact: "متوسط",
    completed: false,
  },
  {
    id: "6",
    category: "التوسع",
    title: "حوّل أفضل العملاء إلى دراسة حالة قصيرة بالفيديو.",
    impact: "سريع",
    completed: false,
  },
];

export function ActionPlan() {
  const [steps, setSteps] = useState<Step[]>(baseSteps);
  const [newStep, setNewStep] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Step["category"]>("الإعداد");

  const progress = useMemo(() => {
    const completed = steps.filter((step) => step.completed).length;
    return Math.round((completed / steps.length) * 100);
  }, [steps]);

  const handleToggle = (id: string) => {
    setSteps((previous) =>
      previous.map((step) =>
        step.id === id ? { ...step, completed: !step.completed } : step,
      ),
    );
  };

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newStep.trim()) {
      return;
    }

    setSteps((previous) => [
      {
        id: uuid(),
        category: selectedCategory,
        title: newStep.trim(),
        impact: "متوسط",
        completed: false,
      },
      ...previous,
    ]);
    setNewStep("");
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/80 p-8 shadow-2xl shadow-slate-900/30">
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              لوحة التنفيذ خطوة بخطوة
            </h2>
            <p className="text-sm text-slate-200/80">
              تابع تقدمك، وأضف مهامك الخاصة، وتأكد أن كل خطوة تقترب بك من أول
              ١٠٠٠ دولار.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-emerald-300">
              %{progress}
            </span>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </header>

        <form
          onSubmit={handleAdd}
          className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-100/90 md:flex-row"
        >
          <label className="flex flex-1 flex-col gap-2">
            أضف خطوة جديدة
            <input
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none"
              placeholder="مثال: اطلب شهادة ثقة من عميل سابق"
              value={newStep}
              onChange={(event) => setNewStep(event.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2">
            المرحلة
            <select
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-white focus:border-emerald-500 focus:outline-none"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value as Step["category"])
              }
            >
              <option value="الإعداد">الإعداد</option>
              <option value="المنتج">المنتج</option>
              <option value="التسويق">التسويق</option>
              <option value="التوسع">التوسع</option>
            </select>
          </label>

          <button
            type="submit"
            className="flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-6 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            أضف الآن
          </button>
        </form>

        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleToggle(step.id)}
              className={`flex h-full flex-col items-start gap-3 rounded-2xl border p-5 text-right transition ${
                step.completed
                  ? "border-emerald-400/40 bg-emerald-500/10"
                  : "border-white/10 bg-white/5 hover:border-emerald-400/40 hover:bg-emerald-500/5"
              }`}
            >
              <span className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                {step.category}
              </span>
              <p
                className={`text-sm font-semibold ${
                  step.completed ? "text-emerald-100 line-through" : "text-white"
                }`}
              >
                {step.title}
              </p>
              <span className="text-xs text-slate-300/80">
                أولوية: {step.impact}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
