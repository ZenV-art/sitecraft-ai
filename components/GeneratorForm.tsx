"use client";

import { BusinessData } from "@/lib/types";
import { BUSINESS_TYPE_OPTIONS } from "@/lib/themes";
import { Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";

interface Props {
  value: BusinessData;
  onChange: (next: BusinessData) => void;
  onGenerate: () => void;
}

export default function GeneratorForm({ value, onChange, onGenerate }: Props) {
  const [servicesText, setServicesText] = useState(value.services.join("\n"));
  const [generating, setGenerating] = useState(false);

  function update<K extends keyof BusinessData>(key: K, v: BusinessData[K]) {
    onChange({ ...value, [key]: v });
  }

  function handleGenerate() {
    const services = servicesText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    onChange({ ...value, services });
    setGenerating(true);
    setTimeout(() => {
      onGenerate();
      setGenerating(false);
    }, 600);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 px-8 py-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Sparkles className="h-3.5 w-3.5" /> SiteCraft Studio
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Describe your business
        </h1>
        <p className="mt-1.5 text-sm text-slate-600">
          We'll generate a premium landing page in seconds.
        </p>
      </div>

      <div className="preview-scroll flex-1 overflow-y-auto px-8 py-6">
        <div className="space-y-5">
          <Field label="Business Type" required>
            <div className="grid grid-cols-2 gap-2">
              {BUSINESS_TYPE_OPTIONS.map((opt) => {
                const active = value.type === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => update("type", opt.value)}
                    className={`group relative flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all ${
                      active
                        ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-base">{opt.emoji}</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Business Name" required>
            <Input
              value={value.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Lumière Bistro"
            />
          </Field>

          <Field label="Tagline" hint="A short line that captures your essence">
            <Input
              value={value.tagline}
              onChange={(e) => update("tagline", e.target.value)}
              placeholder="e.g. Where every plate tells a story"
            />
          </Field>

          <Field label="Description" hint="1–2 sentences about what you do">
            <textarea
              value={value.description}
              onChange={(e) => update("description", e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              placeholder="Describe your business in a sentence or two..."
            />
          </Field>

          <Field label="Services" hint="One per line — up to 6 will be featured">
            <textarea
              value={servicesText}
              onChange={(e) => setServicesText(e.target.value)}
              rows={4}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
              placeholder={"Seasonal Tasting Menu\nPrivate Dining\nWine Pairings"}
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Location">
              <Input
                value={value.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Brooklyn, NY"
              />
            </Field>
            <Field label="Phone">
              <Input
                value={value.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(555) 000-0000"
              />
            </Field>
          </div>

          <Field label="Contact Email">
            <Input
              value={value.email}
              onChange={(e) => update("email", e.target.value)}
              type="email"
              placeholder="hello@yourbusiness.com"
            />
          </Field>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white p-5">
        <button
          onClick={handleGenerate}
          disabled={generating || !value.name.trim()}
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {generating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Crafting your site...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Generate Landing Page
            </>
          )}
        </button>
        <p className="mt-2.5 text-center text-xs text-slate-500">
          Updates the preview on the right — no account needed
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
        {label}
        {required && <span className="text-slate-400">*</span>}
        {hint && <span className="font-normal text-slate-400">— {hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
    />
  );
}
