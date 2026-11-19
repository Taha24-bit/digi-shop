"use client";
import { createContext, useContext, useEffect, useState } from "react";
const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);
export default function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [toast, setToast] = useState("");
  useEffect(() => { try { setItems(JSON.parse(localStorage.getItem("cart") || "{}")); } catch {} }, []);
  const save = (n) => { setItems(n); try { localStorage.setItem("cart", JSON.stringify(n)); } catch {} };
  const add = (id) => { save({ ...items, [id]: (items[id] || 0) + 1 }); setToast("به سبد خرید اضافه شد"); setTimeout(() => setToast(""), 2000); };
  const dec = (id) => { const n = { ...items }; n[id] > 1 ? n[id]-- : delete n[id]; save(n); };
  const remove = (id) => { const n = { ...items }; delete n[id]; save(n); };
  const count = Object.values(items).reduce((a, b) => a + b, 0);
  return <Ctx.Provider value={{ items, add, dec, remove, count }}>{children}{toast && <div className="toast">{toast}</div>}</Ctx.Provider>;
}
