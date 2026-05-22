export function Orbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.27 295 / 0.7), transparent 70%)",
          animation: "orb-float 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.24 255 / 0.6), transparent 70%)",
          animation: "orb-float 22s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.16 85 / 0.5), transparent 70%)",
          animation: "orb-float 26s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,oklch(0.08_0.01_280)_70%)]" />
    </div>
  );
}