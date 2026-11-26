# Redline | رد لاین

«رد لاین» prototype ماژولار و داده‌محور یک بازی گردش آزاد شهری است. این هستهٔ وب با HTML، CSS و JavaScript استاندارد و ES Modules ساخته شده و برای Cloudflare Pages به build یا وابستگی خارجی نیاز ندارد.

## ۱. معماری فایل‌ها

- `index.html`: پوستهٔ HTML، پیام ناسازگاری و نقطهٔ mount.
- `css/app.css`: طراحی واکنش‌گرا، تیره و RTL.
- `src/app.js`: مونتاژ ماژول‌ها و شروع برنامه.
- `src/config/app.config.js`: تنظیمات و تنها مرجع فعال/قفل بودن قابلیت‌ها.
- `src/data/cars.data.js` و `src/data/races.data.js`: دادهٔ خودروها و مسابقه‌ها.
- `src/core/`: EventBus، Storage، Router و GameState مستقل.
- `src/screens/`: منو، شهر و صفحهٔ Coming Soon.
- `src/systems/`: فیزیک رانندگی و چرخهٔ مسابقه.
- `src/platform/`: adapterهای جداگانهٔ Eitaa و Capacitor.

## ۲. اجرای محلی

می‌توانید `index.html` را مستقیم باز کنید؛ اما مرورگرها معمولاً بارگذاری ES Modules از `file://` را به دلایل امنیتی محدود می‌کنند. روش ساده، نصب افزونهٔ **Live Server** در VS Code، بازکردن پوشه و انتخاب **Open with Live Server** است. هیچ build command لازم نیست.

## ۳. انتشار GitHub و Cloudflare Pages

مخزن را در GitHub قرار دهید و در Cloudflare Pages تنظیم کنید: **Production branch = main**، **Framework = None**، **Build command** خالی، **Output directory = .**. سپس Deploy کنید؛ `index.html` در ریشه نقطهٔ ورود است.

## ۴. محدودهٔ prototype

این نسخه prototype هستهٔ وب، بدون حساب کاربری و بدون API واقعی است. احراز هویت ایتا، Cloudflare Worker و ذخیره‌سازی ابری هنوز پیاده‌سازی نشده‌اند. مدل سه‌بعدی نهایی وجود ندارد و خودرو با شکل دوبعدی ساده نمایش داده می‌شود. Adapterها فقط جایگاه اتصال آینده را جدا نگه می‌دارند.

## ۵. افزودن خودرو و مسابقه

برای افزودن خودرو فقط رکوردی با `id`، `name`، `color`، `acceleration`، `maxSpeed`، `turnRate`، `friction` و `braking` به آرایهٔ `CARS` در `src/data/cars.data.js` اضافه کنید. برای مأموریت، رکورد دارای `id`، `title`، `description`، `reward`، `duration`، `x`، `y`، `radius` و `difficulty` به `RACES` در `src/data/races.data.js` بیفزایید. مختصات در محدودهٔ نقشه باشند؛ برای افزودن داده نیازی به تغییر منطق مرکزی نیست.

## ۶. مسیر Capacitor

هستهٔ وب را در پوستهٔ Capacitor قرار دهید، پلتفرم Android را پیکربندی کنید و safe area و چرخهٔ عمر را بررسی کنید. سپس pluginهای بومی احتمالی را از `src/platform/capacitor-adapter.js` متصل نگه دارید تا سیستم‌ها و دادهٔ بازی وابسته به API بومی نشوند.

امتیاز، سکه، خودرو و تنظیمات با localStorage نگه‌داری می‌شوند و دکمهٔ «پاک‌کردن پیشرفت» در منو موجود است. رانندگی با WASD/Arrow یا دکمه‌های لمسی انجام می‌شود.
