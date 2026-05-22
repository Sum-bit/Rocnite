import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Crown, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ClubCard } from "@/components/ClubCard";
import { clubs, events } from "@/data/clubs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      {/* HERO */}
      <section ref={heroRef} className="relative -mt-28 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28">
        <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-cosmos)" }}
          />
        </motion.div>

        <motion.div style={{ y: yTitle, opacity }} className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-accent" />
            Curated nightlife · Pune
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
          >
            Pune's Nightlife,
            <br />
            <span className="text-gradient-neon italic">Unlocked.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Guaranteed entry to the city's most wanted rooms. VIP tables, DJ nights and Saturday specials — booked in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
            >
              Book a table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/clubs"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              Explore clubs
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-4 text-center md:gap-8"
          >
            {[
              { k: "40+", v: "Partner clubs" },
              { k: "12K+", v: "Bookings made" },
              { k: "100%", v: "Entry guaranteed" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-display text-3xl text-gradient-gold md:text-4xl">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-9 w-5 rounded-full border border-white/20"
          >
            <div className="mx-auto mt-2 h-1.5 w-1 rounded-full bg-white/60" />
          </motion.div>
        </div>
      </section>

      {/* FEATURED CLUBS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Tonight in Pune"
          title="Rooms worth showing up for"
          link={{ to: "/clubs", label: "All clubs" }}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.slice(0, 3).map((c, i) => (
            <ClubCard key={c.id} club={c} index={i} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Guaranteed Entry", d: "No queues, no door drama. Walk straight past the line." },
            { icon: Crown, t: "VIP Tables", d: "Reserved booths, premium bottles, dedicated host." },
            { icon: MessageCircle, t: "WhatsApp Booking", d: "Confirm in 60 seconds. Pay via UPI. Done." },
          ].map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl glass p-6"
            >
              <div
                className="grid h-11 w-11 place-items-center rounded-2xl"
                style={{ background: "var(--gradient-neon)" }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-2xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS PREVIEW */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="This week"
          title="Upcoming nights"
          link={{ to: "/events", label: "All events" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={e.cover} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full glass-strong px-3 py-1 text-[11px] uppercase tracking-wider">{e.tag}</span>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-muted-foreground">{e.date} · {e.club}</p>
                  <h3 className="font-display mt-1 text-2xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-accent">{e.dj}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-12 text-center md:p-20"
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-cosmos)", opacity: 0.5 }} />
          <div className="relative">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              The city is waiting. <span className="text-gradient-gold italic">Book your night.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              From a chill Wednesday at Voyage to a packed-out Saturday at NEON — RocNite handles the door.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
            >
              Reserve now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}

function SectionHeader({ eyebrow, title, link }: { eyebrow: string; title: string; link?: { to: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="font-display mt-2 text-4xl md:text-5xl">{title}</h2>
      </div>
      {link && (
        <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground">
          {link.label} →
        </Link>
      )}
    </div>
  );
}
