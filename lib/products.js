export const categories = ["موبایل", "لپ‌تاپ", "لوازم خانگی", "پوشاک", "کتاب"];
export const products = [
  { id: 1, title: "گوشی موبایل مدل X12 ظرفیت ۱۲۸ گیگابایت", cat: "موبایل", price: 18500000, old: 20900000, rating: 4.6, emoji: "📱" },
  { id: 2, title: "لپ‌تاپ ۱۵.۶ اینچی مدل Slim 5", cat: "لپ‌تاپ", price: 42900000, old: 46000000, rating: 4.4, emoji: "💻" },
  { id: 3, title: "هدفون بی‌سیم مدل Air Pro", cat: "موبایل", price: 2350000, old: 2900000, rating: 4.2, emoji: "🎧" },
  { id: 4, title: "جاروبرقی هوشمند مدل RoboClean", cat: "لوازم خانگی", price: 9800000, old: 11200000, rating: 4.5, emoji: "🧹" },
  { id: 5, title: "قهوه‌ساز اسپرسو مدل Barista", cat: "لوازم خانگی", price: 6400000, old: 7000000, rating: 4.3, emoji: "☕" },
  { id: 6, title: "کاپشن مردانه زمستانی", cat: "پوشاک", price: 3100000, old: 3900000, rating: 4.1, emoji: "🧥" },
  { id: 7, title: "کتاب «هنر ظریف رهایی»", cat: "کتاب", price: 180000, old: 220000, rating: 4.7, emoji: "📚" },
  { id: 8, title: "ساعت هوشمند مدل Fit 3", cat: "موبایل", price: 4750000, old: 5200000, rating: 4.0, emoji: "⌚" },
];
export const fa = (n) => n.toLocaleString("fa-IR");
export const off = (p) => Math.round((1 - p.price / p.old) * 100);
