"use client";

import { useState } from "react";
import GeneratorForm from "@/components/GeneratorForm";
import LandingPreview from "@/components/LandingPreview";
import { BusinessData, DEFAULT_BUSINESS } from "@/lib/types";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  Github,
  Sparkles,
  Check,
} from "lucide-react";

export default function HomePage() {
  const [business, setBusiness] = useState<BusinessData>(DEFAULT_BUSINESS);
  const [preview, setPreview] = useState<BusinessData>(DEFAULT_BUSINESS);
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [published, setPublished] = useState(false);

  function handleGenerate() {
    setPreview(business);
  }

  function slugify(s: string) {
    return (
      s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 40) || "landing"
    );
  }

  function handlePublish() {
    const node = document.getElementById("landing-preview");
    if (!node) return;
    const inner = node.innerHTML;
    const title = preview.name ? `${preview.name} — ${preview.tagline || "Landing"}` : "Landing";
    const desc = preview.description || preview.tagline || "";
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Playfair Display', 'Georgia', 'serif'],
          display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        },
      },
    },
  };
<\/script>
<style>
  :root {
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-display: 'Space Grotesk', system-ui, sans-serif;
  }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; margin: 0; }
  .font-serif { font-family: var(--font-serif); }
  .font-display { font-family: var(--font-display); }
  .grid-bg {
    background-image:
      linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }
</style>
</head>
<body>
${inner}
</body>
</html>`;

    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slugify(preview.name)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setPublished(true);
    setTimeout(() => setPublished(false), 2200);
  }

  return (
    <div className="flex h-screen flex-col bg-slate-100">
      {/* TOP BAR */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">SiteCraft AI</div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
              Instant landing pages for small business
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1 md:flex">
          <button
            onClick={() => setViewport("desktop")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
              viewport === "desktop"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" /> Desktop
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
              viewport === "mobile"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" /> Mobile
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ZenV-art/sitecraft-ai"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 md:inline-flex"
          >
            <Github className="h-3.5 w-3.5" /> Source
          </a>
          <button
            onClick={handlePublish}
            className={`hidden items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors md:inline-flex ${
              published
                ? "bg-emerald-600 hover:bg-emerald-600"
                : "bg-slate-900 hover:bg-slate-800"
            }`}
          >
            {published ? (
              <>
                <Check className="h-3.5 w-3.5" /> Downloaded
              </>
            ) : (
              <>
                <ExternalLink className="h-3.5 w-3.5" /> Publish
              </>
            )}
          </button>
        </div>
      </header>

      {/* MAIN SPLIT */}
      <div className="flex flex-1 overflow-hidden">
        {/* FORM SIDE */}
        <aside className="hidden w-[420px] flex-shrink-0 border-r border-slate-200 bg-white lg:block">
          <GeneratorForm
            value={business}
            onChange={setBusiness}
            onGenerate={handleGenerate}
          />
        </aside>

        {/* PREVIEW SIDE */}
        <main className="preview-scroll flex-1 overflow-y-auto bg-slate-100">
          <div className="min-h-full p-6">
            <div
              className={`mx-auto overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ${
                viewport === "mobile" ? "max-w-[390px]" : "max-w-full"
              }`}
            >
              <BrowserChrome businessName={preview.name} />
              <div
                className={`${
                  viewport === "mobile" ? "max-h-[780px]" : ""
                } preview-scroll overflow-y-auto`}
                style={{ maxHeight: viewport === "mobile" ? "780px" : "none" }}
              >
                <div id="landing-preview">
                  <LandingPreview data={preview} />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* MOBILE FORM (bottom sheet visible below lg) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 max-h-[55vh] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <GeneratorForm
            value={business}
            onChange={setBusiness}
            onGenerate={handleGenerate}
          />
        </div>
      </div>
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function BrowserChrome({ businessName }: { businessName: string }) {
  const domain = businessName
    ? businessName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "")
        .slice(0, 30) + ".com"
    : "yourbusiness.com";
  return (
    <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-amber-400" />
        <div className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-slate-500 ring-1 ring-slate-200">
        <span className="text-slate-400">🔒</span>
        {domain}
      </div>
      <div className="w-12" />
    </div>
  );
}
