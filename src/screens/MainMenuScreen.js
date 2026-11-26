// منوی سینمایی بازی؛ وضعیت قفل قابلیت‌ها همچنان از app.config خوانده می‌شود.
export class MainMenuScreen{
 constructor({config,state,onEnter,onComingSoon}){Object.assign(this,{config,state,onEnter,onComingSoon})}
 mount(root){
  const score=this.state.data.score.toLocaleString('fa-IR'),coins=this.state.data.coins.toLocaleString('fa-IR');
  root.innerHTML=`<section class="screen menu-screen">
   <div class="menu-backdrop" aria-hidden="true"></div>
   <header class="menu-topbar">
    <a class="brand redline-brand" href="#" aria-label="رد لاین، منوی اصلی" data-home>
     <span class="brand-mark">R</span><span class="brand-copy"><strong>REDLINE</strong><small>رد لاین · رانندگی آزاد</small></span>
    </a>
    <div class="menu-hud" aria-label="وضعیت بازیکن">
     <div class="hud-chip"><span class="hud-icon" aria-hidden="true">✦</span><span><small>امتیاز</small><strong>${score}</strong></span></div>
     <div class="hud-chip coin-chip"><span class="hud-icon" aria-hidden="true">◉</span><span><small>سکه</small><strong>${coins}</strong></span></div>
    </div>
   </header>
   <div class="menu-content">
    <div class="menu-intro"><div class="eyebrow"><span class="status-dot"></span> تهران · مسیر آزاد</div>
     <h1>رد <em>لاین</em></h1><p class="menu-lead">شهر زیر پایت است.<br>مسیرت را انتخاب کن و بران.</p>
     <p class="menu-description">پشت فرمان بادپا S1 بنشین، آزادانه در شهر بگرد و با پیدا کردن نشانگرهای مسابقه، چالش‌های خیابان را آغاز کن.</p>
    </div>
    <nav class="menu-list" aria-label="منوی اصلی">
     <button class="menu-button primary" data-action="city"><span class="card-icon" aria-hidden="true">➜</span><span class="card-copy"><strong>ورود به شهر</strong><small>شروع گردش آزاد</small></span><span class="card-arrow" aria-hidden="true">←</span></button>
     <button class="menu-button locked" data-action="upgrade" aria-disabled="${this.config.features.upgrades?'false':'true'}"><span class="card-icon" aria-hidden="true">⚙</span><span class="card-copy"><strong>ارتقای ماشین</strong><small>${this.config.features.upgrades?'بهبود خودرو':'به‌زودی فعال می‌شود'}</small></span><span class="lock-tag">قفل</span></button>
     <button class="menu-button locked" data-action="shop" aria-disabled="${this.config.features.carShop?'false':'true'}"><span class="card-icon" aria-hidden="true">◇</span><span class="card-copy"><strong>فروشگاه ماشین</strong><small>${this.config.features.carShop?'انتخاب خودرو':'به‌زودی فعال می‌شود'}</small></span><span class="lock-tag">قفل</span></button>
    </nav>
    <div class="menu-bottom"><span class="edition-label">OPEN WORLD · TEHRAN</span><button class="reset-progress" data-action="reset">پاک‌کردن پیشرفت</button></div>
   </div>
   <div class="menu-caption" aria-hidden="true"><span>01 / FREE DRIVE</span><span>هر خیابان، یک مسیر تازه</span></div>
  </section>`;
  root.querySelector('[data-home]').onclick=e=>e.preventDefault();
  root.querySelector('[data-action=city]').onclick=this.onEnter;
  root.querySelector('[data-action=upgrade]').onclick=()=>this.onComingSoon('ارتقای ماشین');
  root.querySelector('[data-action=shop]').onclick=()=>this.onComingSoon('فروشگاه ماشین');
  root.querySelector('[data-action=reset]').onclick=()=>{if(confirm('پیشرفت، سکه‌ها و تنظیمات پاک شود؟')){this.state.reset(this.state.data.carId);this.onEnter();location.reload()}};
 }
}
