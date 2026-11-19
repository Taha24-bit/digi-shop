import Link from "next/link";
import { fa, off } from "@/lib/products";
export default function ProductCard({ p }) {
  return (
    <Link href={`/product/${p.id}`} className="card">
      <div className="thumb">{p.emoji}</div>
      <h3>{p.title}</h3>
      <div className="meta"><span>★ {fa(p.rating)}</span><span className="badge">{fa(off(p))}٪</span></div>
      <div className="price">{fa(p.price)} <small>تومان</small></div>
      <s>{fa(p.old)}</s>
    </Link>
  );
}
