// Dique Piscu Yaco — 客户端交互（原生 JS，无框架）

type AppLocale = 'es' | 'en' | 'zh' | 'it';
const LOCALES: AppLocale[] = ['es', 'en', 'zh', 'it'];

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* ignore */
  }
});

// 语言切换：替换路径首段 locale，保留 hash
document.querySelectorAll<HTMLButtonElement>('.lang-btn[data-locale]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const l = btn.dataset.locale as string;
    const segs = window.location.pathname.split('/').filter(Boolean);
    if (segs.length && (LOCALES as string[]).includes(segs[0])) {
      segs[0] = l;
    } else {
      segs.unshift(l);
    }
    window.location.href = '/' + segs.join('/') + window.location.hash;
  });
});

// 导航滚动态
const nav = document.getElementById('site-nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 滚动揭示
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}

// FAQ 折叠
document.querySelectorAll<HTMLButtonElement>('.faq-question[data-faq]').forEach((q) => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    if (!item) return;
    const expanded = item.classList.toggle('expanded');
    q.querySelector('.faq-icon')?.classList.toggle('rotated', expanded);
  });
});

// 画廊灯箱
const galleryItems = Array.from(document.querySelectorAll<HTMLElement>('.gallery-item'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
let lightboxIndex: number | null = null;

function openLightbox(i: number) {
  const item = galleryItems[i];
  const img = item?.querySelector('img');
  if (!img || !lightbox || !lightboxImg) return;
  lightboxImg.src = img.getAttribute('src') || '';
  lightboxImg.alt = img.alt;
  lightbox.style.display = 'flex';
  lightboxIndex = i;
}
function closeLightbox() {
  if (lightbox) lightbox.style.display = 'none';
  lightboxIndex = null;
}
galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});
document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (lightboxIndex !== null) openLightbox((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
});
document.getElementById('lightbox-next')?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (lightboxIndex !== null) openLightbox((lightboxIndex + 1) % galleryItems.length);
});
lightbox?.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => {
  if (lightboxIndex === null) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') openLightbox((lightboxIndex + 1) % galleryItems.length);
  else if (e.key === 'ArrowLeft') openLightbox((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
});

// 天气小组件
const weatherEl = document.getElementById('weather-widget');
if (weatherEl) {
  const locale = (document.documentElement.lang || 'es').split('-')[0] as AppLocale;
  const labels: Record<AppLocale, string[]> = {
    zh: ['低', '中等', '高', '极高', '危险'],
    en: ['Low', 'Moderate', 'High', 'Very High', 'Extreme'],
    es: ['Bajo', 'Moderado', 'Alto', 'Muy Alto', 'Extremo'],
    it: ['Basso', 'Moderato', 'Alto', 'Molto Alto', 'Estremo'],
  };
  const titles: Record<AppLocale, string> = {
    zh: '圣路易斯实时天气',
    en: 'Live Weather in San Luis',
    es: 'Clima en San Luis',
    it: 'Meteo a San Luis',
  };
  const msgs: Record<AppLocale, (uv: string) => string> = {
    zh: (uv) => `当前紫外线指数：${uv}。圣路易斯高原日照强烈，请备好防晒霜！`,
    en: (uv) => `Current UV Index: ${uv}. San Luis sun is strong at altitude, apply sunscreen!`,
    es: (uv) => `Índice UV actual: ${uv}. ¡Use protector solar, el sol en San Luis es intenso!`,
    it: (uv) => `Indice UV attuale: ${uv}. Il sole a San Luis è forte, usa la crema solare!`,
  };
  const colors = ['#28a745', '#ffc107', '#fd7e14', '#dc3545', '#6f42c1'];
  fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=-32.37&longitude=-65.03&current=temperature_2m,precipitation,uv_index'
  )
    .then((r) => r.json())
    .then((data) => {
      if (!data || !data.current) return;
      const temp = data.current.temperature_2m;
      const precip = data.current.precipitation;
      const uv = data.current.uv_index;
      let idx = 0;
      if (uv >= 3 && uv < 6) idx = 1;
      else if (uv >= 6 && uv < 8) idx = 2;
      else if (uv >= 8 && uv < 11) idx = 3;
      else if (uv >= 11) idx = 4;
      const uvLevel = labels[locale][idx];
      const uvColor = colors[idx];
      const uvText = `${uv} (${uvLevel})`;
      weatherEl.innerHTML = `
        <h3 style="font-size:1.2rem;font-weight:700;color:var(--color-deep);display:flex;align-items:center;gap:0.5rem;margin:0;">🌤️ ${titles[locale]}</h3>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin:0.5rem 0;">
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">🌡️ ${temp}°C</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">🌧️ ${precip}mm</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;color:${uvColor};">☀️ UV: ${uvText}</div>
        </div>
        <p style="margin:0;font-size:0.95rem;color:var(--color-earth);line-height:1.5;">${msgs[locale](uvText)}</p>
      `;
    })
    .catch(() => {
      /* ignore */
    });
}
