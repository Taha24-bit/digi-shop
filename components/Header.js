"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
import { fa, categories } from "@/lib/products";
import { site } from "@/lib/config";
export default function Header() {
  const { count } = useCart();
  return (<>
    <div className="promo">ارسال رایگان برای خرید بالای {fa(site.freeShipping)} تومان</div>
    <header className="header">
      <Link href="/" className="logo"><i>◆</i>{site.name}</Link>
      <form action="/" className="search"><input name="q" placeholder="جستجوی نام کالا..." /></form>
      <Link href="/cart" className="cartlink">🛒 <span>سبد خرید</span>{count > 0 && <b>{fa(count)}</b>}</Link>
    </header>
    <nav className="catnav">{categories.map((c) => <Link key={c} href={`/?cat=${encodeURIComponent(c)}`}>{c}</Link>)}</nav>
  </>);
}
