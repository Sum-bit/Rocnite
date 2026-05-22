import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { clubs } from "@/data/clubs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Table — RocNite Pune" },
      { name: "description", content: "Fill the form, pay via UPI, confirm on WhatsApp. Your night is locked in." },
      { property: "og:title", content: "Book a Table — RocNite Pune" },
      { property: "og:description", content: "Book your club entry or VIP table in seconds." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    club: clubs[0].name,
    people: 4,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Booking request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0AClub: ${form.club}%0AGuests: ${form.people}`;
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3 w-3" /> Reserve
          </p>
          <h1 className="font-display mt-2 text-5xl md:text-7xl">
            Lock in <span className="text-gradient-neon italic">the night.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            One quick form. We'll confirm on WhatsApp within minutes, share UPI details, and you're in.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={onSubmit}
            className="rounded-3xl glass p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Aarav Mehta"
                  className="field-input"
                />
              </Field>
              <Field label="Phone (WhatsApp)">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98XXXXXXXX"
                  className="field-input"
                />
              </Field>
              <Field label="Date">
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="field-input"
                />
              </Field>
              <Field label="Club">
                <select
                  value={form.club}
                  onChange={(e) => setForm({ ...form, club: e.target.value })}
                  className="field-input"
                >
                  {clubs.map((c) => (
                    <option key={c.id} value={c.name} className="bg-background">{c.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Number of people">
                <input
                  required
                  type="number"
                  min={1}
                  max={30}
                  value={form.people}
                  onChange={(e) => setForm({ ...form, people: Number(e.target.value) })}
                  className="field-input"
                />
              </Field>
              <div className="md:col-span-2 rounded-2xl border border-accent/20 bg-accent/5 p-4 text-xs text-muted-foreground">
                <p className="text-accent">UPI payment</p>
                <p className="mt-1">A 50% advance is required to confirm. We'll share UPI details on WhatsApp right after you submit.</p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
              style={{ background: "var(--gradient-neon)", boxShadow: "var(--shadow-neon)" }}
            >
              <MessageCircle className="h-4 w-4" />
              {submitted ? "Re-send to WhatsApp" : "Submit & Continue on WhatsApp"}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-3xl glass p-8"
          >
            <h3 className="font-display text-2xl">What happens next</h3>
            <ol className="mt-6 space-y-4 text-sm">
              {[
                "We confirm availability on WhatsApp in minutes.",
                "Pay 50% advance via UPI to lock the table.",
                "Walk past the queue. Guaranteed entry, every time.",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-primary-foreground"
                    style={{ background: "var(--gradient-neon)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 space-y-2 border-t border-white/5 pt-6 text-sm text-muted-foreground">
              {[
                "Guaranteed entry for all RocNite bookings",
                "Free re-scheduling up to 6 hrs before",
                "Cashback if club is unexpectedly closed",
              ].map((b) => (
                <p key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-accent" /> {b}
                </p>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}