// Generator offers ready-made monetization angles and content hooks.
"use client";

import { useMemo, useState } from "react";

type IdeaCluster = {
  slug: string;
  title: string;
  description: string;
  pricing: string;
  traffic: string;
  ideas: string[];
};

const clusters: IdeaCluster[] = [
  {
    slug: "الدورات",
    title: "دورات مصغرة عالية التركيز",
    description:
      "أنشئ سلسلة فيديو مدتها ٦٠ دقيقة تحل مشكلة محددة، وبيعها مع ملف تطبيقي.",
    pricing: "السعر المثالي: ٢٩ - ٤٩ دولار",
    traffic: "التوزيع: نشر على يوتيوب + تويتر + مجتمع خاص",
    ideas: [
      "دورة: أطلق مشروعك الأول في الذكاء الاصطناعي خلال ٧ أيام.",
      "Mini-course: كيف تضاعف إنتاجك كمستقل باستخدام أتمتة بسيطة.",
      "برنامج تدريبي: بناء نظام مبيعات عبر الرسائل الخاصة خلال أسبوع.",
    ],
  },
  {
    slug: "القوالب",
    title: "قوالب ومنتجات رقمية جاهزة",
    description:
      "بيع باقات جاهزة (Notion, Excel, Canva) توفر الوقت وتُظهر قيمة فورية.",
    pricing: "السعر المثالي: ١٩ - ٣٩ دولار",
    traffic: "التوزيع: Gumroad + مدونة SEO + حملات بريدية",
    ideas: [
      "باقة قوالب Notion لإدارة وكالة تسويق محتوى.",
      "مجموعة جداول Excel للتسعير الذكي لأصحاب المتاجر الإلكترونية.",
      "ملفات Canva لـ ٣٠ يوم من المحتوى القصير لقطاع التعليم.",
    ],
  },
  {
    slug: "الاشتراك",
    title: "عضوية شهرية تقدم دعم مباشر",
    description:
      "أنشئ مجتمع صغير (١٠٠ عضو) مع لقاء أسبوعي وأرشيف موارد حصرية.",
    pricing: "السعر المثالي: ١٥ - ٢٥ دولار/شهر",
    traffic: "التوزيع: LinkedIn + النشرات البريدية + الشراكات",
    ideas: [
      "مجتمع رواد الأعمال الصغار: غرفة نقاش أسبوعية مع ملفات جاهزة.",
      "اشتراك لأخصائي التسويق بالعمولة مع مراجعة حملات شهرية.",
      "نادي صناع المحتوى العرب: تقسيم المهام، مراجعة، وأفكار يومية.",
    ],
  },
  {
    slug: "الخدمات",
    title: "خدمة Done-for-you سريعة",
    description:
      "قدّم خدمة تنفذها في ٤٨ ساعة بسعر ثابت، مع مسار واضح للتسليم.",
    pricing: "السعر المثالي: ١٧٩ - ٤٩٩ دولار",
    traffic: "التوزيع: Upwork + تويتر + علاقات مباشرة",
    ideas: [
      "إعادة تصميم صفحة هبوط كاملة مع اختبار A/B خلال ٣ أيام.",
      "بناء نظام رسائل تلقائية لعملاء المتاجر الصغيرة.",
      "حزمة تدقيق لحسابات إعلانات فيسبوك مع خطة تحسين لمدة شهر.",
    ],
  },
];

export function ContentIdeas() {
  const [selectedSlug, setSelectedSlug] = useState(clusters[0].slug);
  const [ideaIndex, setIdeaIndex] = useState(0);

  const selected = useMemo(
    () => clusters.find((cluster) => cluster.slug === selectedSlug) ?? clusters[0],
    [selectedSlug],
  );

  const idea = selected.ideas[ideaIndex % selected.ideas.length];

  const handleShuffle = () => {
    setIdeaIndex((previous) => previous + 1);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              مولد أفكار المنتجات السريعة
            </h2>
            <p className="text-sm text-slate-200/80">
              اختر نموذج العمل الذي يناسبك لتحصل على عرض قوي وخطة توزيع جاهزة.
            </p>
          </div>
          <button
            onClick={handleShuffle}
            className="rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
          >
            فكرة جديدة
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {clusters.map((cluster) => (
            <button
              key={cluster.slug}
              onClick={() => setSelectedSlug(cluster.slug)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                cluster.slug === selectedSlug
                  ? "bg-emerald-500 text-slate-900"
                  : "border border-white/10 bg-slate-900/60 text-white hover:border-emerald-300/50"
              }`}
            >
              {cluster.slug}
            </button>
          ))}
        </div>

        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-white shadow-inner shadow-black/30">
          <h3 className="text-xl font-semibold text-emerald-300">
            {selected.title}
          </h3>
          <p className="mt-3 text-sm text-slate-200/85">{selected.description}</p>

          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-emerald-300">التسعير:</span>{" "}
              {selected.pricing}
            </p>
            <p>
              <span className="font-semibold text-emerald-300">خطة التوزيع:</span>{" "}
              {selected.traffic}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-emerald-300/50 bg-emerald-500/10 p-5 text-sm text-emerald-50">
            <p className="font-semibold text-emerald-200">اقترحنا لك الآن:</p>
            <p className="mt-2 leading-relaxed text-white">{idea}</p>
            <p className="mt-4 text-xs text-emerald-100/80">
              نفّذ الفكرة خلال ٧٢ ساعة ثم إبدأ بيعها مع خطة التسويق أعلاه.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
