import { ActionPlan } from "@/components/action-plan";
import { ContentIdeas } from "@/components/content-ideas";
import { PartnerFunnel } from "@/components/partner-funnel";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { TrafficBlueprint } from "@/components/traffic-blueprint";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-12 lg:py-20">
      <GradientBackground />
      <HeroSection />

      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <RevenueCalculator />
        <PartnerFunnel />
      </div>

      <ContentIdeas />
      <TrafficBlueprint />
      <ActionPlan />

      <Footer />
    </main>
  );
}

function HeroSection() {
  const highlights = [
    "حوّل خبرتك إلى منتج أو خدمة قابلة للبيع خلال أسبوع.",
    "احسب الأرباح المتوقعة وحدد تسعيراً مربحاً فورياً.",
    "نفّذ خطة محتوى وتسويق جاهزة بدون تخمين.",
  ];

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-emerald-500/20 via-slate-900/70 to-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
      <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-200">
          🚀 برنامج جاهز للربح عبر الإنترنت
        </span>

        <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
          منصة الربح الذكي
        </h1>

        <p className="max-w-2xl text-lg text-slate-200/85">
          صُممت لتمنحك خطة تنفيذ عملية خطوة بخطوة: من اختيار الفكرة وتجهيز العرض
          وحتى التسويق والمبيعات. كل الأدوات في مكان واحد لتصل إلى أول ١٠٠٠ دولار
          بأسرع وقت ممكن.
        </p>

        <ul className="grid gap-3 text-sm text-slate-100/90 md:grid-cols-3">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#plan"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
          >
            ابدأ بخطتك الآن
          </a>
          <span className="text-xs text-slate-200/70">
            ✔️ لا تحتاج إلى خبرة تقنية • ⏱️ تنفيذ خلال ٧ أيام
          </span>
        </div>
      </div>
    </section>
  );
}

function GradientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-10 -z-10 flex justify-center"
    >
      <div className="h-[540px] w-[540px] rounded-full bg-emerald-500/20 blur-3xl" />
    </div>
  );
}

function Footer() {
  return (
    <footer
      id="plan"
      className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center text-sm text-slate-400"
    >
      <p>
        ✨ كل ما تحتاجه للانطلاق موجود هنا. طبّق، راقب الأرقام في الحاسبات
        أعلاه، وحسّن عروضك باستمرار. النجاح يأتي مع الاستمرارية والجرأة على
        الإطلاق.
      </p>
    </footer>
  );
}
