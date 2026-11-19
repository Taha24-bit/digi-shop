import { Vazirmatn } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/CartContext";
import Header from "@/components/Header";
import { site } from "@/lib/config";
const font = Vazirmatn({ subsets: ["arabic", "latin"] });
export const metadata = { title: `${site.name} | فروشگاه اینترنتی`, description: "خرید آنلاین با ضمانت اصالت کالا و ارسال سریع" };
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>
        <CartProvider><Header /><main>{children}</main></CartProvider>
        <footer className="footer">
          <div><b>{site.name}</b><p>خرید مطمئن با ضمانت اصالت و بازگشت کالا.</p></div>
          <div><b>راهنمای خرید</b><p>نحوه ثبت سفارش</p><p>روش‌های ارسال</p></div>
          <div><b>خدمات مشتریان</b><p>پاسخ به پرسش‌ها</p><p>رویه بازگرداندن کالا</p></div>
          <div><b>تماس با ما</b><p>{site.phone}</p><p>همه روزه ۹ تا ۲۱</p></div>
        </footer>
      </body>
    </html>
  );
}
