"use client";

import { BusinessData } from "@/lib/types";
import { themes } from "@/lib/themes";
import { generateCopy } from "@/lib/content";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Star,
  Menu as MenuIcon,
  Quote,
} from "lucide-react";

interface Props {
  data: BusinessData;
}

export default function LandingPreview({ data }: Props) {
  const theme = themes[data.type];
  const copy = generateCopy(data);
  const services = data.services.length ? data.services.slice(0, 6) : [];
  const initials =
    data.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase() || "CO";
  const isDark = theme.mode === "dark";

  return (
    <div
      key={`${data.type}-${data.name}`}
      className={`${theme.bg} ${theme.text} ${theme.fontBody} min-h-full animate-fade-in`}
    >
      {/* NAVBAR */}
      <nav
        className={`${theme.navStyle} ${theme.border} sticky top-0 z-50 border-b`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div
              className={`${theme.accent} flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white`}
            >
              {initials}
            </div>
            <span className={`${theme.fontDisplay} text-lg font-bold`}>
              {data.name || "Your Business"}
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {["Services", "About", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`${theme.textMuted} ${theme.navHoverText} text-sm font-medium transition-colors`}
              >
                {l}
              </a>
            ))}
          </div>
          <button
            className={`${theme.accent} ${theme.accentHover} hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all md:inline-flex`}
          >
            {copy.heroCta}
          </button>
          <button className="md:hidden">
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className={`${theme.heroBg} relative overflow-hidden`}>
        {!isDark && (
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        )}
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="animate-slide-up">
              <div
                className={`${theme.surface} ${theme.border} mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${theme.accentText}`}
              >
                <span className={`${theme.accent} h-1.5 w-1.5 rounded-full`} />
                {data.location || "Now open"}
              </div>
              <h1
                className={`${theme.fontDisplay} text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight`}
              >
                {copy.heroTitle}
              </h1>
              <p
                className={`${theme.textMuted} mt-6 max-w-xl text-lg leading-relaxed`}
              >
                {copy.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  className={`${theme.accent} ${theme.accentHover} group flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
                >
                  {copy.heroCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  className={`${theme.border} ${theme.outlineHover} rounded-full border-2 bg-transparent px-7 py-3.5 text-sm font-semibold transition-colors`}
                >
                  Learn more
                </button>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-9 w-9 rounded-full bg-gradient-to-br ring-2 ${
                        isDark ? "ring-white/20" : "ring-white"
                      } ${
                        [
                          "from-amber-200 to-amber-500",
                          "from-rose-200 to-rose-500",
                          "from-sky-200 to-sky-500",
                          "from-emerald-200 to-emerald-500",
                        ][i]
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className={`${theme.accentText} h-3.5 w-3.5 fill-current`}
                      />
                    ))}
                  </div>
                  <p className={`${theme.textMuted} mt-1 text-xs`}>
                    Rated {copy.stats[3]?.value || "4.9"} by our guests
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div
                className={`${theme.surface} ${theme.border} aspect-[4/5] w-full overflow-hidden rounded-3xl border shadow-2xl`}
              >
                <HeroVisual vibe={theme.vibe} initials={initials} />
              </div>
              <div
                className={`${theme.surface} ${theme.border} absolute -bottom-6 -left-6 rounded-2xl border p-4 shadow-xl`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${theme.accent} h-10 w-10 rounded-full`} />
                  <div>
                    <p className="text-sm font-semibold">Available Today</p>
                    <p className={`${theme.textMuted} text-xs`}>
                      Book in &lt; 30 seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className={`${theme.bg} ${theme.border} border-y`}>
        <div
          className={`${theme.dividerBg} mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4`}
        >
          {copy.stats.map((stat, i) => (
            <div
              key={i}
              className={`${theme.surfaceAlt} px-6 py-10 text-center`}
            >
              <div
                className={`${theme.fontDisplay} text-3xl font-bold lg:text-4xl`}
              >
                {stat.value}
              </div>
              <div
                className={`${theme.textMuted} mt-1 text-xs font-semibold uppercase tracking-wider`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={theme.sectionPad}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div
              className={`${theme.accentText} text-xs font-semibold uppercase tracking-wider`}
            >
              {copy.servicesSubtitle}
            </div>
            <h2
              className={`${theme.fontDisplay} mt-3 text-4xl font-bold tracking-tight lg:text-5xl`}
            >
              {copy.servicesTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.length === 0 ? (
              <div
                className={`${theme.textMuted} col-span-full text-center text-sm italic`}
              >
                Add services in the form to see them here.
              </div>
            ) : (
              services.map((service, i) => (
                <div
                  key={i}
                  className={`${theme.surface} ${theme.border} group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
                    isDark
                      ? "hover:shadow-2xl hover:shadow-black/50"
                      : "hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`${theme.accent} mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white`}
                  >
                    <span className="text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className={`${theme.fontDisplay} text-xl font-bold`}>
                    {service}
                  </h3>
                  <p
                    className={`${theme.textMuted} mt-3 text-sm leading-relaxed`}
                  >
                    {serviceDescription(service, data)}
                  </p>
                  <div
                    className={`${theme.accentText} mt-5 flex items-center gap-1.5 text-sm font-semibold`}
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`${theme.surfaceAlt} ${theme.sectionPad} ${theme.border} border-y`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div
                className={`${theme.surface} ${theme.border} aspect-[4/3] overflow-hidden rounded-3xl border shadow-xl`}
              >
                <HeroVisual vibe={theme.vibe} initials={initials} alt />
              </div>
            </div>
            <div>
              <div
                className={`${theme.accentText} text-xs font-semibold uppercase tracking-wider`}
              >
                About Us
              </div>
              <h2
                className={`${theme.fontDisplay} mt-3 text-4xl font-bold tracking-tight lg:text-5xl`}
              >
                {copy.aboutTitle}
              </h2>
              <p
                className={`${theme.textMuted} mt-5 text-lg leading-relaxed`}
              >
                {copy.aboutBody}
              </p>
              <ul className="mt-8 space-y-3">
                {aboutPoints(data).map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`${theme.accent} mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className={theme.sectionPad}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div
              className={`${theme.accentText} text-xs font-semibold uppercase tracking-wider`}
            >
              Testimonials
            </div>
            <h2
              className={`${theme.fontDisplay} mt-3 text-4xl font-bold tracking-tight lg:text-5xl`}
            >
              {copy.testimonialsTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {copy.testimonials.map((t, i) => (
              <div
                key={i}
                className={`${theme.surface} ${theme.border} rounded-2xl border p-7 transition-all ${
                  isDark
                    ? "hover:shadow-2xl hover:shadow-black/50"
                    : "shadow-sm hover:shadow-lg"
                }`}
              >
                <Quote
                  className={`${theme.accentText} h-6 w-6`}
                  strokeWidth={1.5}
                />
                <p className="mt-4 text-[15px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className={`${theme.border} mt-6 flex items-center gap-3 border-t pt-5`}
                >
                  <div
                    className={`${theme.accent} flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className={`${theme.textMuted} text-xs`}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${theme.surfaceAlt} ${theme.sectionPad}`}>
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2
            className={`${theme.fontDisplay} text-4xl font-bold tracking-tight lg:text-6xl`}
          >
            {copy.ctaTitle}
          </h2>
          <p className={`${theme.textMuted} mx-auto mt-5 max-w-xl text-lg`}>
            {copy.ctaSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              className={`${theme.accent} ${theme.accentHover} group flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
            >
              {copy.heroCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            {data.phone && (
              <a
                href={`tel:${data.phone}`}
                className={`${theme.border} ${theme.outlineHover} rounded-full border-2 bg-transparent px-8 py-4 text-sm font-semibold transition-colors`}
              >
                Or call {data.phone}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={theme.sectionPad}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard
              theme={theme}
              isDark={isDark}
              icon={<MapPin className="h-5 w-5" />}
              title="Visit us"
              body={data.location || "Address coming soon"}
            />
            <ContactCard
              theme={theme}
              isDark={isDark}
              icon={<Phone className="h-5 w-5" />}
              title="Call us"
              body={data.phone || "Phone coming soon"}
            />
            <ContactCard
              theme={theme}
              isDark={isDark}
              icon={<Mail className="h-5 w-5" />}
              title="Email us"
              body={data.email || "hello@yourbusiness.com"}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${theme.border} ${theme.surfaceAlt} border-t`}>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div
                  className={`${theme.accent} flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white`}
                >
                  {initials}
                </div>
                <span className={`${theme.fontDisplay} text-xl font-bold`}>
                  {data.name || "Your Business"}
                </span>
              </div>
              <p
                className={`${theme.textMuted} mt-4 max-w-sm text-sm leading-relaxed`}
              >
                {data.description}
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {["Services", "About", "Reviews", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className={`${theme.textMuted} ${theme.navHoverText} text-sm transition-colors`}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Get in touch
              </h4>
              <ul className={`${theme.textMuted} space-y-2.5 text-sm`}>
                {data.location && <li>{data.location}</li>}
                {data.phone && <li>{data.phone}</li>}
                {data.email && <li>{data.email}</li>}
              </ul>
            </div>
          </div>
          <div
            className={`${theme.border} mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row`}
          >
            <p className={`${theme.textMuted} text-xs`}>
              © {new Date().getFullYear()} {data.name || "Your Business"}. All
              rights reserved.
            </p>
            <p className={`${theme.textMuted} text-xs`}>
              Crafted with SiteCraft AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactCard({
  theme,
  isDark,
  icon,
  title,
  body,
}: {
  theme: (typeof themes)[keyof typeof themes];
  isDark: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`${theme.surface} ${theme.border} rounded-2xl border p-7 transition-all ${
        isDark ? "hover:shadow-2xl hover:shadow-black/50" : "hover:shadow-lg"
      }`}
    >
      <div
        className={`${theme.accent} mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white`}
      >
        {icon}
      </div>
      <h3 className={`${theme.fontDisplay} text-lg font-bold`}>{title}</h3>
      <p className={`${theme.textMuted} mt-2 text-sm leading-relaxed`}>
        {body}
      </p>
    </div>
  );
}

function HeroVisual({
  vibe,
  initials,
  alt = false,
}: {
  vibe: string;
  initials: string;
  alt?: boolean;
}) {
  const gradients: Record<string, string> = {
    warm: "from-amber-200 via-orange-300 to-red-400",
    bold: "from-zinc-800 via-red-900 to-black",
    elegant: "from-rose-100 via-rose-200 to-pink-300",
    clean: "from-sky-100 via-blue-200 to-indigo-300",
    modern: "from-zinc-100 via-zinc-200 to-zinc-400",
    fresh: "from-emerald-100 via-green-200 to-teal-300",
    sharp: "from-indigo-900 via-purple-900 to-slate-900",
  };
  const grad = gradients[vibe] || gradients.modern;
  return (
    <div
      className={`relative h-full w-full bg-gradient-to-br ${grad} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div
        className={`relative text-[10rem] font-black tracking-tighter text-white/80 ${
          alt ? "opacity-60" : ""
        }`}
        style={{
          textShadow: "0 8px 40px rgba(0,0,0,0.2)",
          fontFamily: "var(--font-display)",
        }}
      >
        {initials}
      </div>
    </div>
  );
}

function serviceDescription(_service: string, data: BusinessData): string {
  const base: Record<string, string> = {
    restaurant:
      "Thoughtfully prepared and beautifully presented. Available daily with seasonal variations.",
    cafe: "Made fresh each morning using ingredients we actually trust. Small batch, always.",
    gym: "Structured, coached, and designed to get you real results — not just a workout.",
    salon: "An experience tailored to you, from consultation to finishing touch.",
    clinic:
      "Delivered by specialists using modern equipment and evidence-based protocols.",
    studio:
      "Hands-on creative partnership from brief to final delivery — no hand-offs.",
    shop: "Carefully curated, thoughtfully priced, and backed by our quality guarantee.",
    agency:
      "Senior engineers embedded with your team. Weekly demos, full transparency.",
  };
  return base[data.type];
}

function aboutPoints(data: BusinessData): string[] {
  const points: Record<string, string[]> = {
    restaurant: [
      "Menu changes with the season — always fresh",
      "Locally sourced ingredients, transparent suppliers",
      "Reservations and walk-ins equally welcome",
    ],
    cafe: [
      "In-house roasted, single-origin beans",
      "Everything baked fresh in our kitchen",
      "Pet-friendly, Wi-Fi, and a patio",
    ],
    gym: [
      "Expert coaching, not just equipment",
      "Small group sessions with real accountability",
      "24/7 access for members — no excuses",
    ],
    salon: [
      "Every service begins with a consultation",
      "Eco-conscious products only",
      "Licensed stylists with 5+ years experience",
    ],
    clinic: [
      "State-of-the-art equipment and sterilization",
      "Transparent pricing, no surprise bills",
      "Most insurance plans accepted",
    ],
    studio: [
      "Direct collaboration with senior creatives",
      "Fixed scope, fixed timeline, no surprises",
      "Full ownership of final deliverables",
    ],
    shop: [
      "Direct relationships with every maker",
      "30-day returns, no questions asked",
      "Free local delivery within the city",
    ],
    agency: [
      "Senior-only team — no hand-offs",
      "Weekly demo days, full transparency",
      "Fixed-scope or ongoing partnerships",
    ],
  };
  return points[data.type];
}
