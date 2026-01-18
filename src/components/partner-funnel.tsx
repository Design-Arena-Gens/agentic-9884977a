// Estimate revenue generated from collaborations and affiliates.
"use client";

import { useMemo, useState } from "react";

const formatter = new Intl.NumberFormat("ar-EG", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function PartnerFunnel() {
  const [partners, setPartners] = useState(5);
  const [salesPerPartner, setSalesPerPartner] = useState(12);
  const [commission, setCommission] = useState(20);

  const data = useMemo(() => {
    const totalSales = partners * salesPerPartner;
    const revenueShare = (totalSales * commission) / 100;
    const netRevenue = totalSales * 49 - revenueShare; // assume منتج متوسط بسعر ٤٩$
    const partnerBonus = revenueShare / Math.max(partners, 1);
    return {
      totalSales,
      revenueShare,
      netRevenue,
      partnerBonus,
    };
  }, [partners, salesPerPartner, commission]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            محاكي أرباح الشراكات
          </h2>
          <p className="mt-2 text-sm text-slate-200/85">
            وسّع دخلك عبر ممثلين (Affiliates) أو شركاء محتوى وحدد العمولات التي
            تبقي الربحية مرتفعة.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <InputCard
            label="عدد الشركاء النشطين"
            value={partners}
            onChange={(value) => setPartners(value)}
            min={1}
            max={20}
            step={1}
          />
          <InputCard
            label="المبيعات لكل شريك شهرياً"
            value={salesPerPartner}
            onChange={(value) => setSalesPerPartner(value)}
            min={5}
            max={60}
            step={1}
          />
          <InputCard
            label="نسبة العمولة %"
            value={commission}
            onChange={(value) => setCommission(value)}
            min={10}
            max={40}
            step={1}
          />
        </div>

        <div className="grid gap-4 rounded-2xl bg-slate-900/60 p-6 text-sm text-white md:grid-cols-4">
          <Metric label="إجمالي المبيعات المتوقعة" value={`${data.totalSales} عملية`} />
          <Metric
            label="العمولات المصروفة"
            value={formatter.format(data.revenueShare)}
          />
          <Metric label="صافي دخلك" value={formatter.format(data.netRevenue)} />
          <Metric
            label="مكافأة الشريك الواحد"
            value={formatter.format(data.partnerBonus)}
          />
        </div>

        <p className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-200/80">
          حافظ على عمولة لا تتجاوز ٣٠٪ طالما أن الشريك ينتج مبيعات ثابتة، وفعّل
          مخطط مكافأة إضافية إذا تجاوز ٢٠ مبيع في الشهر لزيادة الولاء.
        </p>
      </div>
    </section>
  );
}

function InputCard({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <label className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-white shadow-inner shadow-black/40">
      <span className="text-sm text-slate-100/80">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-emerald-400"
      />
      <span className="text-xl font-semibold text-emerald-300">{value}</span>
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-slate-200/80">{label}</p>
      <p className="mt-2 text-lg font-semibold text-emerald-300">{value}</p>
    </div>
  );
}
