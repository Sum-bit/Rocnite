import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ClubCard } from "@/components/ClubCard";
import { clubs } from "@/data/clubs";
import { motion } from "framer-motion";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs in Pune — RocNite" },
      { name: "description", content: "Browse Pune's best clubs — entry prices, table pricing, vibe and availability. Book in seconds." },
      { property: "og:title", content: "Clubs in Pune — RocNite" },
      { property: "og:description", content: "Browse Pune's best clubs and book entry or tables instantly." },
    ],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Directory</p>
          <h1 className="font-display mt-2 text-5xl md:text-7xl">
            Every room <span className="text-gradient-neon italic">worth knowing.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Hand-picked clubs across Koregaon Park, Baner, Viman Nagar, Hinjewadi and more. Live capacity, transparent pricing, instant confirmation.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clubs.map((c, i) => (
            <ClubCard key={c.id} club={c} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}