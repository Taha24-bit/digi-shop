import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { products, fa, off } from "@/lib/products";
export default async function Product({ params }) {
  const { id } = await params;
  const p = products.find((x) => x.id === Number(id));
  if (!p) notFound();
  const rel = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const specs = [["دسته‌بندی", p.cat], ["گارانتی", "۱۸ ماه"], ["وضعیت", "موجود در انبار"], ["زمان ارسال", "۱ تا ۳ روز کاری"]];
  return (<>
    <p className="crumb"><Link href="/">خانه</Link> / <Link href={`/?cat=${encodeURIComponent(p.cat)}`}>{p.cat}</Link></p>
    <div className="detail">
      <div className="thumb huge">{p.emoji}</div>
      <div>
        <h1>{p.title}</h1>
        <p className="meta"><span>★ {fa(p.rating)} از ۵</span></p>
        <table className="specs"><tbody>{specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
      </div>
      <aside className="buybox">
        <p><s>{fa(p.old)}</s> <span className="badge">{fa(off(p))}٪</span></p>
        <div className="price big">{fa(p.price)} <small>تومان</small></div>
        <AddToCart id={p.id} big />
        <small className="mute">✓ ضمانت اصالت و سلامت فیزیکی کالا</small>
      </aside>
    </div>
    {rel.length > 0 && <><h2 className="sec">کالاهای مشابه</h2><div className="grid">{rel.map((r) => <ProductCard key={r.id} p={r} />)}</div></>}
  </>);
}
