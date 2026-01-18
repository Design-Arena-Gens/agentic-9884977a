// Revenue planner with interactive sliders to estimate potential earnings.
"use client";

import { useMemo, useState } from "react";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function RevenueCalculator() {
  const [price, setPrice] = useState(25);
  const [traffic, setTraffic] = useState(2500);
  const [conversion, setConversion] = useState(2.4);
  const [retention, setRetention] = useState(3);
  const [marketingCost, setMarketingCost] = useState(350);

  const metrics = useMemo(() => {
    const payingCustomers = Math.round((traffic * conversion) / 100);
    const monthlyRevenue = payingCustomers * price;
    const recurringRevenue = monthlyRevenue * retention;
    const acquisitionCost = marketingCost / Math.max(payingCustomers, 1);
    const profit = monthlyRevenue - marketingCost;
    const breakEvenVisitors = Math.ceil(
      (marketingCost / price / Math.max(conversion, 0.1)) * 100,
    );

    return {
      payingCustomers,
      monthlyRevenue,
      recurringRevenue,
      acquisitionCost,
      profit,
      breakEvenVisitors,
    };
  }, [price, traffic, conversion, retention, marketingCost]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/20 backdrop-blur">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            حاسبة الربح الذكي
          </h2>
          <p className="mt-2 text-sm text-slate-200/80">
            عدّل المدخلات لتحصل على تقدير فوري للعائد الشهري وقيمة كل عميل.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-100/90">
            سعر المنتج أو الخدمة (دولار)
            <input
              type="range"
              min={5}
              max={150}
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              className="w-full accent-green-500"
            />
            <span className="block text-lg font-semibold text-emerald-400">
              {price}$
            </span>
          </label>

          <label className="space-y-2 text-sm text-slate-100/90">
            الزيارات الشهرية
            <input
              type="range"
              min={200}
              max={10000}
              step={100}
              value={traffic}
              onChange={(event) => setTraffic(Number(event.target.value))}
              className="w-full accent-green-500"
            />
            <span className="block text-lg font-semibold text-emerald-400">
              {traffic.toLocaleString("ar-EG")}
            </span>
          </label>

          <label className="space-y-2 text-sm text-slate-100/90">
            معدل التحويل %
            <input
              type="range"
              min={0.5}
              max={12}
              step={0.1}
              value={conversion}
              onChange={(event) => setConversion(Number(event.target.value))}
              className="w-full accent-green-500"
            />
            <span className="block text-lg font-semibold text-emerald-400">
              {conversion.toFixed(1)}%
            </span>
          </label>

          <label className="space-y-2 text-sm text-slate-100/90">
            مدة الاحتفاظ بالعميل (أشهر)
            <input
              type="range"
              min={1}
              max={12}
              value={retention}
              onChange={(event) => setRetention(Number(event.target.value))}
              className="w-full accent-green-500"
            />
            <span className="block text-lg font-semibold text-emerald-400">
              {retention} أشهر
            </span>
          </label>

          <label className="md:col-span-2 space-y-2 text-sm text-slate-100/90">
            الميزانية التسويقية الشهرية (دولار)
            <input
              type="range"
              min={100}
              max={2000}
              step={50}
              value={marketingCost}
              onChange={(event) => setMarketingCost(Number(event.target.value))}
              className="w-full accent-green-500"
            />
            <span className="block text-lg font-semibold text-emerald-400">
              {marketingCost}$
            </span>
          </label>
        </div>

        <div className="grid gap-4 rounded-2xl bg-white/5 p-6 sm:grid-cols-3">
          <Metric
            label="العملاء المدفوعون المتوقعون"
            value={`${metrics.payingCustomers.toLocaleString("ar-EG")} عميل`}
          />
          <Metric
            label="الدخل الشهري المتوقع"
            value={formatCurrency(metrics.monthlyRevenue)}
          />
          <Metric
            label="العائد على ٣ أشهر"
            value={formatCurrency(metrics.recurringRevenue)}
          />
          <Metric
            label="تكلفة اكتساب العميل"
            value={formatCurrency(metrics.acquisitionCost)}
          />
          <Metric
            label="الربح الصافي الشهري"
            value={formatCurrency(metrics.profit)}
          />
          <Metric
            label="الزيارات اللازمة للتعادل"
            value={`${metrics.breakEvenVisitors.toLocaleString("ar-EG")} زيارة`}
          />
        </div>

        <p className="rounded-2xl border border-dashed border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          نصيحة: إذا كانت تكلفة اكتساب العميل أقل من ٢٠٪ من سعر المنتج فأنت
          على مسار ربح صحي؛ وإلا ارفع السعر أو حسّن التحويل.
        </p>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-white shadow-inner shadow-black/40">
      <p className="text-xs text-slate-300/80">{label}</p>
      <p className="mt-2 text-lg font-semibold text-emerald-300">{value}</p>
    </div>
  );
}
