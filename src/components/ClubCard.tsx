import { motion } from "framer-motion";
import { MessageCircle, MapPin, Users, ShieldCheck, Crown } from "lucide-react";
import type { Club } from "@/data/clubs";

const availColor: Record<Club["availability"], string> = {
  Available: "text-emerald-300",
  "Filling Fast": "text-amber-300",
  "Almost Full": "text-rose-300",
};

export function ClubCard({ club, index = 0 }: { club: Club; index?: number }) {
  const wa = `https://wa.me/919999999999?text=${encodeURIComponent(`Hey RocNite! I want to book ${club.name}.`)}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl glass"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={club.image}
          alt={club.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {club.guaranteed && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/30">
              <ShieldCheck className="h-3 w-3" /> Guaranteed Entry
            </span>
          )}
          {club.vip && (
            <span
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-background"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <Crown className="h-3 w-3" /> VIP Table
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="font-display text-2xl leading-tight">{club.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{club.vibe}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {club.area}</span>
          <span className={`inline-flex items-center gap-1 ${availColor[club.availability]}`}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
            </span>
            {club.availability}
          </span>
        </div>

        <div>
          <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> Capacity</span>
            <span>{club.capacity}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full"
              style={{ width: `${club.capacity}%`, background: "var(--gradient-neon)" }}
            />
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-white/5 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Entry</p>
            <p className="font-display text-xl">₹{club.entry.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Table from</p>
            <p className="font-display text-xl text-gradient-gold">₹{club.table.toLocaleString()}</p>
          </div>
        </div>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition-all hover:bg-emerald-500/20 hover:ring-emerald-400/60"
        >
          <MessageCircle className="h-4 w-4" /> Book on WhatsApp
        </a>
      </div>
    </motion.article>
  );
}