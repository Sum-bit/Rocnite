import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: "var(--gradient-neon)" }}>
              <span className="font-display text-lg font-bold">R</span>
            </span>
            <span className="font-display text-2xl">RocNite</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Pune's curated nightlife — guaranteed entry to the city's most wanted rooms.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link to="/clubs" className="hover:text-foreground">Clubs</Link>
          <Link to="/events" className="hover:text-foreground">Events</Link>
          <Link to="/vip" className="hover:text-foreground">VIP</Link>
          <Link to="/book" className="hover:text-foreground">Book</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent">
            <Instagram className="h-4 w-4" /> @rocnite
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} RocNite. Pune, India. All rights reserved.
      </p>
    </footer>
  );
}