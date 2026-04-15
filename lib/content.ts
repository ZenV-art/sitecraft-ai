import { BusinessData, BusinessType } from "./types";

interface GeneratedCopy {
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  aboutTitle: string;
  aboutBody: string;
  servicesTitle: string;
  servicesSubtitle: string;
  testimonialsTitle: string;
  testimonials: { name: string; role: string; quote: string }[];
  stats: { label: string; value: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const copyByType: Record<BusinessType, (b: BusinessData) => GeneratedCopy> = {
  restaurant: (b) => ({
    heroTitle: b.tagline || `A taste worth remembering at ${b.name}`,
    heroSubtitle: b.description,
    heroCta: "Reserve a Table",
    aboutTitle: `The story behind ${b.name}`,
    aboutBody: `At ${b.name}, we believe great food starts with great relationships — with local farmers, with craft, and with the people we serve. Every dish is made from scratch daily, using seasonal ingredients sourced within 100 miles.`,
    servicesTitle: "What's on the menu",
    servicesSubtitle: "Crafted with care. Served with pride.",
    testimonialsTitle: "Tables of happy guests",
    testimonials: [
      { name: "Emma Richardson", role: "Food Critic, Gourmet Monthly", quote: `${b.name} delivers an experience that rivals any fine-dining establishment in the city. Every detail, from the plating to the service, felt intentional.` },
      { name: "Marcus Chen", role: "Regular Guest", quote: "I've been coming here every Friday for two years. The menu changes with the seasons, but the warmth never does." },
      { name: "Sophie Laurent", role: "Food Blogger", quote: "The seasonal tasting menu is a love letter to local produce. Don't skip the wine pairings." },
    ],
    stats: [
      { label: "Happy Guests", value: "12K+" },
      { label: "Years Serving", value: "8" },
      { label: "Avg. Rating", value: "4.9" },
      { label: "Local Farms", value: "24" },
    ],
    ctaTitle: "Book your table tonight",
    ctaSubtitle: "Walk-ins welcome. Reservations fill up fast on weekends.",
  }),
  cafe: (b) => ({
    heroTitle: b.tagline || `Slow mornings, great coffee.`,
    heroSubtitle: b.description,
    heroCta: "Find Us",
    aboutTitle: `Small-batch roastery, neighborhood heart`,
    aboutBody: `${b.name} is more than a café — it's a corner of the neighborhood where strangers become regulars, and mornings get a little brighter. We roast our beans in-house and bake everything fresh each day.`,
    servicesTitle: "On the menu",
    servicesSubtitle: "Fresh. Fair-trade. Made with care.",
    testimonialsTitle: "Loved by locals",
    testimonials: [
      { name: "James Ortega", role: "Neighborhood regular", quote: `I've tried every café in a 20-mile radius. ${b.name} is the only place I keep coming back to — every single morning.` },
      { name: "Priya Nair", role: "Remote worker", quote: "Great Wi-Fi, unbeatable coffee, and the quiet buzz I need to get real work done." },
      { name: "Liam Foster", role: "Coffee enthusiast", quote: "Their single-origin pour-over is the best I've had outside of Melbourne. That's saying something." },
    ],
    stats: [
      { label: "Cups Served Daily", value: "400+" },
      { label: "Fair-Trade Blends", value: "12" },
      { label: "Years Brewing", value: "6" },
      { label: "Review Score", value: "4.9" },
    ],
    ctaTitle: "Come say hello",
    ctaSubtitle: "Open early. Closed late. Always freshly brewed.",
  }),
  gym: (b) => ({
    heroTitle: b.tagline || `Train harder. Become stronger.`,
    heroSubtitle: b.description,
    heroCta: "Start Free Trial",
    aboutTitle: `Built for people who don't quit`,
    aboutBody: `At ${b.name}, we don't sell memberships — we build athletes. Our coaches have trained Olympians, fighters, and first-timers alike. No egos. No fluff. Just work that actually gets results.`,
    servicesTitle: "Programs that deliver",
    servicesSubtitle: "Choose your weapon.",
    testimonialsTitle: "Real members. Real results.",
    testimonials: [
      { name: "Derek Collins", role: "Lost 40 lbs in 6 months", quote: `${b.name} changed my life. The coaches don't let you settle — they push you to find strength you didn't know you had.` },
      { name: "Anya Volkov", role: "Competitive Powerlifter", quote: "Best programming I've ever followed. I added 50kg to my squat in one year." },
      { name: "Malik Thompson", role: "Member, 3 years", quote: "The community here is unmatched. Everyone shows up for each other — that's rare." },
    ],
    stats: [
      { label: "Active Members", value: "850+" },
      { label: "Expert Coaches", value: "14" },
      { label: "Classes / Week", value: "60" },
      { label: "Transformations", value: "320" },
    ],
    ctaTitle: "Your first week is on us",
    ctaSubtitle: "No contracts. No pressure. Just results.",
  }),
  salon: (b) => ({
    heroTitle: b.tagline || `Beauty, reimagined.`,
    heroSubtitle: b.description,
    heroCta: "Book Appointment",
    aboutTitle: `A sanctuary of craft and care`,
    aboutBody: `${b.name} was founded on a single idea: that true beauty is personal. Our stylists spend years mastering their craft, and every appointment begins with a quiet moment to truly understand you.`,
    servicesTitle: "Our signature services",
    servicesSubtitle: "Tailored entirely to you.",
    testimonialsTitle: "What our clients say",
    testimonials: [
      { name: "Isabella Rossi", role: "Client since 2020", quote: `Every visit to ${b.name} feels like a retreat. They don't just cut hair — they listen, they understand, and they deliver.` },
      { name: "Amara Okoye", role: "Bridal client", quote: "They made me feel radiant on the most important day of my life. I can't recommend them enough." },
      { name: "Victoria Lin", role: "Regular client", quote: "The attention to detail is unreal. I've never left feeling anything less than incredible." },
    ],
    stats: [
      { label: "5-Star Reviews", value: "640+" },
      { label: "Expert Stylists", value: "9" },
      { label: "Years Established", value: "12" },
      { label: "Return Guests", value: "92%" },
    ],
    ctaTitle: "Reserve your moment",
    ctaSubtitle: "Appointments available this week.",
  }),
  clinic: (b) => ({
    heroTitle: b.tagline || `Modern care you can trust.`,
    heroSubtitle: b.description,
    heroCta: "Book a Consultation",
    aboutTitle: `Care built around you`,
    aboutBody: `${b.name} combines advanced medical technology with a human touch. Our team of specialists is committed to personalized care — because no two patients are ever the same.`,
    servicesTitle: "Comprehensive services",
    servicesSubtitle: "Advanced care. Trusted results.",
    testimonialsTitle: "Patient stories",
    testimonials: [
      { name: "Dr. Neha Patel", role: "Referring physician", quote: `I refer my most complex patients to ${b.name}. Their standard of care is exceptional.` },
      { name: "Thomas Reilly", role: "Patient since 2019", quote: "The staff here genuinely cares. I've never felt rushed or ignored — a rare thing these days." },
      { name: "Elena Morales", role: "Patient", quote: "Modern, spotless, and the entire team is professional yet warm. Highly recommend." },
    ],
    stats: [
      { label: "Patients Served", value: "15K+" },
      { label: "Specialists", value: "22" },
      { label: "Years Practicing", value: "18" },
      { label: "Satisfaction Rate", value: "98%" },
    ],
    ctaTitle: "Schedule your visit",
    ctaSubtitle: "Same-week appointments available.",
  }),
  studio: (b) => ({
    heroTitle: b.tagline || `Creative work that moves people.`,
    heroSubtitle: b.description,
    heroCta: "Start a Project",
    aboutTitle: `Craft-driven. Detail-obsessed.`,
    aboutBody: `${b.name} is a small team of designers, photographers, and makers dedicated to telling stories that last. We work closely with every client to produce work we're all proud to sign our name to.`,
    servicesTitle: "What we do",
    servicesSubtitle: "Thoughtful work for bold brands.",
    testimonialsTitle: "Clients we've made things with",
    testimonials: [
      { name: "Rachel Kim", role: "Founder, Nomad Coffee", quote: `Working with ${b.name} felt like hiring a team that actually got what we wanted. The work was spectacular.` },
      { name: "Oliver Bennett", role: "Creative Director", quote: "Rare blend of sharp design thinking and meticulous craft. They raised our brand to a new level." },
      { name: "Mia Tanaka", role: "Marketing Lead", quote: "Delivered ahead of schedule, above expectations. Can't wait to work with them again." },
    ],
    stats: [
      { label: "Projects Delivered", value: "180+" },
      { label: "Clients Worldwide", value: "45" },
      { label: "Awards", value: "12" },
      { label: "Years", value: "7" },
    ],
    ctaTitle: "Let's build something great",
    ctaSubtitle: "Taking new projects for next quarter.",
  }),
  shop: (b) => ({
    heroTitle: b.tagline || `Everyday goods, thoughtfully made.`,
    heroSubtitle: b.description,
    heroCta: "Shop Now",
    aboutTitle: `Thoughtful curation, honest goods`,
    aboutBody: `${b.name} is an independent shop built on a simple belief: the things you use every day should be made well, made to last, and made with care. We work directly with makers we trust.`,
    servicesTitle: "What you'll find",
    servicesSubtitle: "Carefully curated. Honestly priced.",
    testimonialsTitle: "Customer love",
    testimonials: [
      { name: "Grace Hill", role: "Repeat customer", quote: `${b.name} has replaced about half of my usual shopping. The quality is just in a different league.` },
      { name: "Noah Martinez", role: "Local shopper", quote: "Every time I walk in, I find something I didn't know I needed. And the staff are genuinely lovely." },
      { name: "Clara Weiss", role: "Customer", quote: "The curation is spot on. Nothing feels mass-produced — everything has a story." },
    ],
    stats: [
      { label: "Happy Customers", value: "8K+" },
      { label: "Maker Partners", value: "60+" },
      { label: "Years Open", value: "5" },
      { label: "Review Rating", value: "4.9" },
    ],
    ctaTitle: "Visit us in person",
    ctaSubtitle: "Or shop online — free shipping over $50.",
  }),
  agency: (b) => ({
    heroTitle: b.tagline || `We build what others can't.`,
    heroSubtitle: b.description,
    heroCta: "Book a Call",
    aboutTitle: `Senior talent. No middlemen.`,
    aboutBody: `${b.name} is a focused team of senior engineers and designers. We skip the account managers and agency overhead — just the people who do the work, collaborating directly with your team.`,
    servicesTitle: "How we help",
    servicesSubtitle: "End-to-end product engineering.",
    testimonialsTitle: "Founders we've worked with",
    testimonials: [
      { name: "Alex Hartman", role: "CEO, Linear Logistics", quote: `${b.name} shipped in 6 weeks what our in-house team couldn't in 6 months. Honest, fast, excellent.` },
      { name: "Nina Chowdhury", role: "CTO, Fintech startup", quote: "Their team integrated with ours from day one. Smart, thoughtful, and a pleasure to collaborate with." },
      { name: "Ben Kaplan", role: "Founder, SaaS company", quote: "Best outsourced team we've ever hired. We now treat them as permanent partners." },
    ],
    stats: [
      { label: "Products Shipped", value: "120+" },
      { label: "Senior Engineers", value: "18" },
      { label: "Client Retention", value: "94%" },
      { label: "Years Building", value: "9" },
    ],
    ctaTitle: "Let's talk",
    ctaSubtitle: "Free 30-minute technical consultation.",
  }),
};

export function generateCopy(b: BusinessData): GeneratedCopy {
  return copyByType[b.type](b);
}
