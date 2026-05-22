import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { events } from "@/data/clubs";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Nights — RocNite Pune" },
      { name: "description", content: "DJ nights, ladies nights and Saturday specials at Pune's top venues. Reserve a spot instantly." },
      { property: "og:title", content: "Events & Nights — RocNite Pune" },
      { property: "og:description", content: "DJ nights, ladies nights and Saturday specials." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">What's on</p>
          <h1 className="font-display mt-2 text-5xl md:text-7xl">
            Nights with <span className="text-gradient-gold italic">a pulse.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From Wednesday ladies nights to Saturday headliner takeovers — here's what's playing this week in Pune.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {events.map((e, i) => {
            const wa = `https://wa.me/919999999999?text=${encodeURIComponent(`Hey RocNite! I want to book ${e.title} (${e.date}).`)}`;
            return (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={e.cover} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-[11px] uppercase tracking-wider">{e.tag}</span>
                  {e.price === 0 && (
                    <span
                      className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold text-background"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      Free for ladies
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground">{e.date} · {e.club}</p>
                  <h2 className="font-display mt-1 text-3xl">{e.title}</h2>
                  <p className="mt-1 text-sm text-accent">{e.dj}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Cover</p>
                      <p className="font-display text-xl">{e.price === 0 ? "Free entry" : `₹${e.price.toLocaleString()}`}</p>
                    </div>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 ring-1 ring-emerald-400/30 hover:bg-emerald-500/20"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}