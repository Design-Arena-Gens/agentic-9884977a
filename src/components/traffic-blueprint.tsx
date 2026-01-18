// Static blueprint describing marketing system and monetization loops.
const pillars = [
  {
    title: "محتوى جذب ذكي",
    description:
      "٣ منشورات أسبوعية تعتمد على قصة عميل + نصيحة عملية + دعوة للحجز أو الشراء.",
    checklist: [
      "قسّم المواضيع إلى: تثقيف، تحفيز، إثبات اجتماعي.",
      "استخدم نموذج ٣ ثواني: خطاف + وعد + CTA في أول سطر.",
      "حوّل كل منشور إلى مقطع فيديو قصير للمنصات السريعة.",
    ],
    icon: "🎯",
  },
  {
    title: "نظام رعاية leads",
    description:
      "تسلسل رسائل بريدية من ٥ أجزاء يصنع علاقة ويُظهر القيمة قبل العرض.",
    checklist: [
      "رسالة ترحيب: حكاية شخصية + ما الذي سيتعلمونه.",
      "رسالة تعليمية: قالب مجاني أو ملف قابل للتنفيذ.",
      "رسالة دراسة حالة + عرض زمني (Expiry) يدفع للتحويل.",
    ],
    icon: "✉️",
  },
  {
    title: "تحويل مباشر",
    description:
      "صفحة عرض واحدة مع أقسام واضحة: النتيجة، نظام العمل، شهادات، الأسئلة.",
    checklist: [
      "استخدم فيديو قصير في الأعلى يشرح النتيجة خلال ٤٥ ثانية.",
      "ضع زر CTA واضح يفتح واتساب أو بوابة الدفع.",
      "أضف ضمان استرجاع ومدة تنفيذ محددة لتقليل المخاطرة.",
    ],
    icon: "💰",
  },
];

export function TrafficBlueprint() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/70 p-8 shadow-2xl shadow-slate-900/40">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            مخطط مضاعفة الزيارات والتحويل
          </h2>
          <p className="mt-2 text-sm text-slate-200/80">
            اتبع الركائز الثلاث لتوليد حركة مرور مستمرة واستثمارها في مبيعات
            حقيقية، بدون إعلانات مدفوعة في البداية.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white"
            >
              <span className="text-3xl">{pillar.icon}</span>
              <h3 className="text-lg font-semibold text-emerald-300">
                {pillar.title}
              </h3>
              <p className="text-slate-200/80">{pillar.description}</p>
              <ul className="flex flex-1 list-disc flex-col gap-2 pr-4 text-slate-50/90">
                {pillar.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
