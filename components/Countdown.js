"use client";
import { useEffect, useState } from "react";
const f = (x) => String(x).padStart(2, "0").replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
export default function Countdown() {
  const [t, setT] = useState(null);
  useEffect(() => {
    const tick = () => { const n = new Date(), e = new Date(n); e.setHours(24, 0, 0, 0); setT(Math.floor((e - n) / 1000)); };
    tick(); const i = setInterval(tick, 1000); return () => clearInterval(i);
  }, []);
  if (t === null) return null;
  return <span className="timer" dir="ltr">{f(Math.floor(t / 3600))}:{f(Math.floor(t / 60) % 60)}:{f(t % 60)}</span>;
}
