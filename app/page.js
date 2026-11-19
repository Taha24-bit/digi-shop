import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Countdown from "@/components/Countdown";
import { products, categories, off } from "@/lib/products";
const icons = { "موبایل": "📱", "لپ‌تاپ": "💻", "لوازم خانگی": "🏠", "پوشاک": "👕", "کتاب": "📚" };
const sorts = [["", "پیش‌فرض"], ["cheap", "ارزان‌ترین"], ["exp", "گران‌ترین"], ["rating", "بیشترین امتیاز"]];
const trust = [["🚚", "ارسال سریع"], ["🛡️", "ضمانت اصالت"], ["↩️", "بازگشت ۷ روزه"], ["💬", "پشتیبانی ۷ روز هفته"]];
export default async function Home({ searchParams }) {
  const { q = "", cat = "", sort = "" } = await searchParams;
  let list = products.filter((p) => p.title.includes(q) && (!cat || p.cat === cat));
  const by = { cheap: (a, b) => a.price - b.price, exp: (a, b) => b.price - a.price, rating: (a, b) => b.rating - a.rating }[sort];
  if (by) list = [...list].sort(by);
  const href = (o) => { const s = new URLSearchParams({ q, cat, sort, ...o }); for (const [k, v] of [...s]) if (!v) s.delete(k); return "/?" + s; };
  const home = !q && !cat;
  const deals = [...products].sort((a, b) => off(b) - off(a)).slice(0, 4);
  return (<>
    {home && <>
      <section className="hero">
        <div className="banner main"><h1>جشنواره زمستانه</h1><p>تا ۲۵٪ تخفیف روی کالاهای منتخب</p><Link href="/?sort=cheap" className="btn light">مشاهده تخفیف‌ها</Link></div>
        <Link href="/?cat=موبایل" className="banner s1">📱 جدیدترین گوشی‌ها</Link>
        <Link href="/?cat=لپ‌تاپ" className="banner s2">💻 لپ‌تاپ‌های اقتصادی</Link>
      </section>
      <div className="circles">{categories.map((c) => <Link key={c} href={href({ cat: c })}><span>{icons[c]}</span>{c}</Link>)}</div>
      <section className="deals"><div className="dealhead"><h2>پیشنهاد شگفت‌انگیز</h2><Countdown /></div>
        <div className="grid">{deals.map((p) => <ProductCard key={p.id} p={p} />)}</div></section>
      <div className="trust">{trust.map(([i, t]) => <div key={t}><span>{i}</span>{t}</div>)}</div>
    </>}
    <div className="listhead"><h2>{cat || (q ? `نتایج «${q}»` : "همه کالاها")}</h2>
      <div className="sorts">{sorts.map(([k, l]) => <Link key={k} href={href({ sort: k })} className={sort === k ? "on" : ""}>{l}</Link>)}</div></div>
    {list.length === 0 ? <p className="empty">کالایی پیدا نشد. عبارت دیگری را جستجو کنید.</p> :
      <div className="grid">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>}
  </>);
}
