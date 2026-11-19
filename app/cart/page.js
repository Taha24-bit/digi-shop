"use client";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { products, fa } from "@/lib/products";
import { site } from "@/lib/config";
export default function Cart() {
  const { items, add, dec, remove } = useCart();
  const rows = products.filter((p) => items[p.id]);
  const sum = rows.reduce((s, p) => s + p.price * items[p.id], 0);
  const save = rows.reduce((s, p) => s + (p.old - p.price) * items[p.id], 0);
  const ship = sum >= site.freeShipping ? 0 : site.shipping;
  if (!rows.length) return <p className="empty">سبد خرید شما خالی است. <Link href="/">شروع خرید</Link></p>;
  return (
    <div className="cartwrap">
      <div className="cart">
        <h1>سبد خرید</h1>
        {rows.map((p) => (
          <div className="row" key={p.id}>
            <span className="thumb sm">{p.emoji}</span>
            <div className="grow"><Link href={`/product/${p.id}`}>{p.title}</Link><div className="price">{fa(p.price * items[p.id])} <small>تومان</small></div></div>
            <div className="qty"><button onClick={() => add(p.id)}>+</button><span>{fa(items[p.id])}</span><button onClick={() => dec(p.id)}>−</button></div>
            <button className="link" onClick={() => remove(p.id)}>حذف</button>
          </div>
        ))}
      </div>
      <aside className="buybox sum">
        <div className="line"><span>جمع کالاها</span><b>{fa(sum)}</b></div>
        <div className="line green"><span>سود شما از تخفیف</span><b>{fa(save)}</b></div>
        <div className="line"><span>هزینه ارسال</span><b>{ship ? fa(ship) : "رایگان"}</b></div>
        <div className="line tot"><span>مبلغ قابل پرداخت</span><b>{fa(sum + ship)} تومان</b></div>
        <button className="btn big">ادامه فرآیند خرید</button>
      </aside>
    </div>
  );
}
