"use client";
import { useCart } from "./CartContext";
export default function AddToCart({ id, big }) {
  const { add } = useCart();
  return <button className={big ? "btn big" : "btn"} onClick={() => add(id)}>افزودن به سبد خرید</button>;
}
