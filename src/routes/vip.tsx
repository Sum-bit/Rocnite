import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { vipTiers } from "@/data/clubs";
import { motion } from "framer-motion";
import { Check, Crown, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/vip")({
  head: () => ({
    meta: [
      { title: "VIP Table Booking — RocNite Pune" },
      { name: "description", content: "Reserve VIP tables at Pune's top clubs. Silver, Gold and Platinum tiers with bottle service and dedicated host." },
      { property: "og:title", content: "VIP Table Booking — RocNite Pune" },
      { property: "og:description", content: "Reserve VIP tables, bottle service and private cabanas." },
    ],
  }),
  component: VipPage,
});

function VipPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
            <Crown className="h-3 w-3" /> VIP Experience
          </p>
          <h1 className="font-display mt-2 text-5xl md:text-7xl">
            Bottles, booths,
            <br />
            <span className="text-gradient-gold italic">no waiting.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Skip the queue. Land at a reserved table with bottles chilled and your host already waiting. Three tiers — built for everything from intimate to all-out.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {vipTiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl glass p-8 ${t.highlight ? "ring-1 ring-accent/40" : ""}`}
              style={t.highlight ? { boxShadow: "var(--shadow-gold)" } : undefined}
            >
              {t.highlight && (
                <span
                  className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold text-background"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Most Booked
                </span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.seats}</p>
              <p className="font-display mt-6 text-5xl text-gradient-gold">₹{t.price.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">starting from · per night</p>
              <ul className="mt-6 space-y-3">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-primary-foreground"
                style={{ background: t.highlight ? "var(--gradient-gold)" : "var(--gradient-neon)" }}
              >
                Reserve {t.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 rounded-3xl glass p-8 text-center"
        >
          <h3 className="font-display text-2xl">Custom group? Birthday? Bachelor?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Ping our concierge — we'll curate the club, bottles and table to your exact night.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-3 text-sm text-emerald-300 ring-1 ring-emerald-400/30 hover:bg-emerald-500/20"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    </Layout>
  );
}