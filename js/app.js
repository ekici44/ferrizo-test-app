import { LANGS, T } from './i18n.js';

/* ---------------- Durum ---------------- */
const state = {
  lang: readLang(),
  products: [],
  filter: 'all',
  sort: 'rec',
  selId: null,
  size: null
};

function readLang() {
  try {
    const l = localStorage.getItem('fz-lang');
    if (l && T[l]) return l;
  } catch (e) { /* yok */ }
  return 'uk';
}
const t = (k) => (T[state.lang] && T[state.lang][k] != null ? T[state.lang][k] : (T.uk[k] != null ? T.uk[k] : k));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nameOf = (p) => (p.name && (p.name[state.lang] || p.name.uk)) || '';
const money = (v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ' + t('currency');
const pctOf = (p) => (p.oldPrice > 0 ? '−' + Math.round((1 - p.price / p.oldPrice) * 100) + '%' : '');
const matOf = (p) => (p.material === 'fur' ? t('mat_fur') : t('mat_leather'));
const $ = (s, r = document) => r.querySelector(s);

/* ---------------- Askı (ahşap) ---------------- */
const HANGER = `
<svg class="card__hanger" width="240" height="80" viewBox="0 0 240 80" aria-hidden="true">
  <defs>
    <linearGradient id="fzWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C08A57"/><stop offset=".45" stop-color="#9A6338"/><stop offset="1" stop-color="#6E4122"/></linearGradient>
    <linearGradient id="fzMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8E8E8E"/><stop offset=".5" stop-color="#E6E6E6"/><stop offset="1" stop-color="#7C7C7C"/></linearGradient>
  </defs>
  <path d="M113.4 14.4 A7 7 0 1 1 126.1 15.5 Q122 20 120 24 L120 30" fill="none" stroke="#A3A3A3" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M16 58 Q62 35 113 28 L127 28 Q178 35 224 58 Q234 63 231 73 Q227 81 216 78 Q171 55 127 45 L113 45 Q69 55 24 78 Q13 81 9 73 Q6 63 16 58 Z" fill="url(#fzWood)" stroke="#5A3319" stroke-width=".7"/>
  <path d="M22 60 Q66 39 114 31 M126 31 Q174 39 218 60" fill="none" stroke="#E2B386" stroke-opacity=".55" stroke-width="1.3" stroke-linecap="round"/>
  <rect x="115.5" y="27" width="9" height="7" rx="1.5" fill="url(#fzMetal)"/>
</svg>`;


const HOOK = `
<svg class="card__hanger" width="240" height="80" viewBox="0 0 240 80" aria-hidden="true">
  <path d="M113.4 14.4 A7 7 0 1 1 126.1 15.5 Q121 22 120 30 L120 50 Q120 60 128 60 Q135 60 135 53" fill="none" stroke="#9E9E9E" stroke-width="2.6" stroke-linecap="round"/>
</svg>`;

const ARROW_L = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>';
const ARROW_R = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
const BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';
const TG = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/></svg>';

/* ---------------- Dil ---------------- */
function applyStatic() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  const cur = LANGS.find((l) => l[0] === state.lang) || LANGS[0];
  $('#langCode').textContent = cur[1];
  const m = t('marquee');
  const mq = $('#marquee');
  if (mq) mq.innerHTML = `<span>${esc(m)}</span><span>${esc(m)}</span>`;
}

function setupLang() {
  const btn = $('#langBtn');
  const menu = $('#langMenu');
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  const build = () => {
    menu.innerHTML = LANGS.map(([code, short, label]) =>
      `<li><button type="button" role="option" data-lang="${code}" aria-selected="${code === state.lang}">${label}<b>${short}</b></button></li>`
    ).join('');
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.hidden) { build(); menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); } else close();
  });
  menu.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]');
    if (!b) return;
    state.lang = b.dataset.lang;
    try { localStorage.setItem('fz-lang', state.lang); } catch (err) { /* yok */ }
    close();
    applyStatic();
    route(true);
  });
  document.addEventListener('click', (e) => { if (!menu.hidden && !e.target.closest('#lang')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ---------------- Gardırop ---------------- */
const X = [0, 228, 400, 548];
const S = [1, 0.84, 0.72, 0.62];
const R = [0, 9, 13, 15];
const B = [1, 0.93, 0.86, 0.8];
const O = [1, 1, 0.92, 0];

let closet = null;

function mountCloset(root) {
  const list = state.filter === 'all' ? state.products : state.products.filter((p) => p.category === state.filter);
  const stage = $('.stage', root);
  const info = $('.info', root);
  const btnView = $('.closet__btn', root);
  stage.querySelectorAll('.card').forEach((c) => c.remove());
  if (!list.length) { info.innerHTML = ''; return; }

  const n = list.length;
  let sel = Math.max(0, list.findIndex((p) => p.id === state.selId));
  if (state.selId == null || list[sel].id !== state.selId) sel = Math.min(1, n - 1);

  const kFor = (i, s, prev) => {
    let d = ((i - s) % n + n) % n;
    if (d > n / 2) d -= n;
    if (n % 2 === 0 && Math.abs(d) === n / 2) d = prev !== undefined && prev < 0 ? -n / 2 : n / 2;
    return d;
  };
  let k = list.map((_, i) => kFor(i, sel));

  const cards = list.map((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'card';
    b.setAttribute('aria-label', nameOf(p));
    const isBag = p.type === 'bag';
    b.innerHTML = `<span class="card__price${p.oldPrice > 0 ? ' is-sale' : ''}">${money(p.price)}</span><div class="card__swing">${p.hasHanger ? '' : (isBag ? HOOK : HANGER)}
      <img class="card__img${p.hasHanger ? ' card__img--own' : ''}${isBag ? ' card__img--bag' : ''}" src="${esc(p.image)}" alt="" draggable="false">
      </div>`;
    b.addEventListener('click', () => {
      if (swiped) return;
      if (i === sel) go(p); else select(i);
    });
    stage.appendChild(b);
    return b;
  });

  function place(c, kk) {
    const a = Math.min(Math.abs(kk), 3);
    const sg = kk < 0 ? -1 : 1;
    c.style.transform = `translateX(${sg * X[a]}px) scale(${S[a]}) rotateY(${a ? -sg * R[a] : 0}deg)`;
    c.style.filter = `brightness(${B[a]})`;
    c.style.opacity = O[a];
    c.style.zIndex = 10 - a;
    c.style.pointerEvents = O[a] > 0 ? 'auto' : 'none';
    c.tabIndex = O[a] > 0 ? 0 : -1;
    c.classList.toggle('is-center', a === 0);
    return O[a];
  }

  function renderInfo(anim) {
    const p = list[sel];
    state.selId = p.id;
    info.classList.remove('is-anim');
    info.innerHTML = `<div class="info__name">${esc(nameOf(p))}</div>
      <div class="info__price"><strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span><span class="pct">${pctOf(p)}</span>` : ''}</div>`;
    if (anim) { void info.offsetWidth; info.classList.add('is-anim'); }
    btnView.onclick = () => go(p);
  }

  function select(j) {
    if (j === sel) return;
    sel = ((j % n) + n) % n;
    cards.forEach((c, i) => {
      const nk = kFor(i, sel, k[i]);
      const jumped = Math.abs(nk - k[i]) > 3;
      k[i] = nk;
      if (jumped) {
        c.classList.add('no-trans');
        const target = place(c, nk);
        void c.offsetWidth;
        c.classList.remove('no-trans');
        if (target > 0) c.animate([{ opacity: 0 }, { opacity: target }], { duration: 600, delay: 250, fill: 'backwards', easing: 'ease' });
      } else {
        place(c, nk);
      }
    });
    renderInfo(true);
  }

  // Kaydırma (mouse sürükleme / parmak)
  let downX = null;
  let swiped = false;
  stage.onpointerdown = (e) => { downX = e.clientX; swiped = false; };
  stage.onpointerup = (e) => {
    if (downX == null) return;
    const dx = e.clientX - downX;
    downX = null;
    if (Math.abs(dx) > 50) { swiped = true; select(sel + (dx < 0 ? 1 : -1)); setTimeout(() => { swiped = false; }, 50); }
  };

  $('.js-prev', root).onclick = () => select(sel - 1);
  $('.js-next', root).onclick = () => select(sel + 1);

  cards.forEach((c, i) => place(c, k[i]));
  renderInfo(false);
  closet = { prev: () => select(sel - 1), next: () => select(sel + 1) };
}

function go(p) { location.hash = '#/product/' + p.slug; }

/* ---------------- Sayfalar ---------------- */
function badgesOf(p) {
  const b = [];
  if (p.oldPrice > 0) b.push(`<span class="pb pb--sale">${pctOf(p)}</span>`);
  if (p.isNew) b.push(`<span class="pb pb--new">${esc(t('new_badge'))}</span>`);
  if (p.stock === 'order') b.push(`<span class="pb pb--order">${esc(t('on_order'))}</span>`);
  return b.join('');
}

function cardHTML(p) {
  const colors = p.colors || [];
  return `<a class="pcard reveal" href="#/product/${esc(p.slug)}">
    <div class="pcard__media">
      <div class="pcard__badges">${badgesOf(p)}</div>
      <img src="${esc(p.image)}" alt="${esc(nameOf(p))}" loading="lazy" draggable="false">
      <span class="pcard__cta">${esc(t('details'))}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </div>
    <div class="pcard__body">
      <span class="pcard__name">${esc(nameOf(p))}</span>
      <span class="pcard__price"><strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span>` : ''}</span>
      ${colors.length > 1 ? `<span class="pcard__dots">${colors.map((c) => `<i style="background:${esc(c)}"></i>`).join('')}</span>` : ''}
    </div>
  </a>`;
}

function shopList() {
  const l = state.filter === 'all' ? state.products.slice() : state.products.filter((p) => p.category === state.filter);
  if (state.sort === 'asc') l.sort((x, y) => x.price - y.price);
  if (state.sort === 'desc') l.sort((x, y) => y.price - x.price);
  return l;
}

function homeHTML() {
  const feat = state.products.find((p) => p.isFeatured) || state.products.slice().sort((x, y) => y.price - x.price)[0];
  const CATS = [['coats', 'f_coats'], ['jackets', 'f_jackets'], ['sheepskins', 'f_sheepskins'], ['bags', 'f_bags']]
    .map(([k, l]) => ({ k, l, items: state.products.filter((p) => p.category === k) }))
    .filter((c) => c.items.length);
  const chip = (key, label) => `<button type="button" class="chip${state.filter === key ? ' is-on' : ''}" data-filter="${key}">${esc(t(label))}</button>`;
  const opt = (v, l) => `<option value="${v}"${state.sort === v ? ' selected' : ''}>${esc(t(l))}</option>`;
  return `
  <section class="hero2">
    <div class="hero2__text reveal">
      <div class="hero__kicker">${esc(t('kicker'))}</div>
      <h1 class="hero2__title">${t('hero_title')}</h1>
      <p class="hero2__sub">${esc(t('hero_sub'))}</p>
      <div class="hero2__ctas">
        <a class="btn btn--red" href="#/collection">${esc(t('cta_collection'))}</a>
        <a class="btn btn--ghost" href="#/#stores">${esc(t('stores_title'))}</a>
      </div>
    </div>
    ${feat ? `<a class="hero2__media reveal" href="#/product/${esc(feat.slug)}">
      <span class="hero2__ring" aria-hidden="true"></span>
      <span class="hero2__label">${esc(t('featured'))}</span>
      <img src="${esc(feat.image)}" alt="${esc(nameOf(feat))}" draggable="false">
      <span class="hero2__cap"><span>${esc(nameOf(feat))}</span><strong>${money(feat.price)}</strong></span>
    </a>` : ''}
  </section>

  <section class="cats" aria-label="${esc(t('categories_title'))}">
    <div class="cats__grid">
      ${CATS.map((c) => `<button type="button" class="cat reveal" data-cat="${c.k}">
        <span class="cat__media"><img src="${esc(c.items[0].image)}" alt="" loading="lazy" draggable="false"></span>
        <span class="cat__row"><span class="cat__name">${esc(t(c.l))}</span><span class="cat__count">${c.items.length}</span>
        <svg class="cat__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </button>`).join('')}
    </div>
  </section>

  <section class="shop" id="shop">
    <div class="shop__head">
      <h2 class="shop__title">${esc(t('closet_kicker'))} <span id="shopCount"></span></h2>
      <div class="shop__tools">
        <div class="filters">${chip('all', 'f_all')}${CATS.map((c) => chip(c.k, c.l)).join('')}</div>
        <label class="sort"><span class="sr">${esc(t('sort_rec'))}</span>
          <select id="sort">${opt('rec', 'sort_rec')}${opt('asc', 'sort_asc')}${opt('desc', 'sort_desc')}</select>
        </label>
      </div>
    </div>
    <div class="grid" id="grid"></div>
  </section>

  <section class="about" id="about">
    <div class="about__inner">
      <div class="about__head reveal">
        <h2 class="about__title">${esc(t('about_title'))}</h2>
        <p class="about__text">${esc(t('about_text'))}</p>
      </div>
      <div class="about__grid">
        ${[1, 2, 3].map((i) => `<div class="fact reveal"><div class="fact__num">0${i}</div><h3 class="fact__t">${esc(t('about_' + i + 't'))}</h3><p class="fact__d">${esc(t('about_' + i + 'd'))}</p></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="stores" id="stores">
    <div class="stores__inner">
      <h2 class="section-title">${esc(t('stores_title'))}</h2>
      <div class="stores__grid">
        <div class="store reveal"><span class="store__num">01</span><span class="store__city">${esc(t('city1'))}</span><span class="store__addr">${esc(t('addr1'))}</span><a href="tel:+380970400353">+380 97 040 0353</a></div>
        <div class="store reveal"><span class="store__num">02</span><span class="store__city">${esc(t('city2'))}</span><span class="store__addr">${esc(t('addr2'))}</span><a href="https://instagram.com/ferrizo_ivanofrankivsk" target="_blank" rel="noopener">@ferrizo_ivanofrankivsk</a></div>
        <div class="store reveal"><span class="store__num">03</span><span class="store__city">${esc(t('city3'))}</span><span class="store__addr">${esc(t('store_tbd'))}</span><a href="https://instagram.com/ionia.ua" target="_blank" rel="noopener">@ionia.ua</a></div>
      </div>
    </div>
  </section>`;
}

let revealObs = null;
function observeReveal(root) {
  if (!('IntersectionObserver' in window)) { root.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')); return; }
  if (!revealObs) {
    revealObs = new IntersectionObserver((ents) => ents.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  }
  root.querySelectorAll('.reveal:not(.in)').forEach((el) => revealObs.observe(el));
}

function renderGrid() {
  const g = $('#grid');
  if (!g) return;
  const l = shopList();
  g.innerHTML = l.map(cardHTML).join('');
  g.querySelectorAll('.pcard').forEach((c, i) => { c.style.transitionDelay = (i % 4) * 70 + 'ms'; });
  $('#shopCount').textContent = '(' + l.length + ')';
  observeReveal(g);
}

function renderHome(scrollTo) {
  closet = null;
  const app = $('#app');
  app.innerHTML = homeHTML();
  const setFilter = (key) => {
    state.filter = key;
    app.querySelectorAll('[data-filter]').forEach((x) => x.classList.toggle('is-on', x.dataset.filter === key));
    renderGrid();
  };
  app.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  app.querySelectorAll('[data-cat]').forEach((b) => b.addEventListener('click', () => {
    setFilter(b.dataset.cat);
    $('#shop').scrollIntoView({ behavior: 'smooth' });
  }));
  $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });
  renderGrid();
  observeReveal(app);
  if (scrollTo) { const el = document.getElementById(scrollTo); if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60); }
}

function renderProduct(slug) {
  const p = state.products.find((x) => x.slug === slug);
  if (!p) { location.hash = '#/'; return; }
  closet = null;
  state.selId = p.id;
  if (!p.sizes.includes(state.size)) state.size = p.sizes[Math.min(1, p.sizes.length - 1)];
  const others = state.products.filter((x) => x.id !== p.id).slice(0, 4);
  $('#app').innerHTML = `
  <section class="product">
    <a class="back" href="#/">${BACK}${esc(t('back_closet'))}</a>
    <div class="product__grid">
      <div class="product__media">
        <img class="product__photo" src="${esc(p.image)}" alt="${esc(nameOf(p))}">
        <img class="product__mark" src="logo.svg" alt="">
      </div>
      <div class="product__info">
        <span class="badge ${p.stock === 'order' ? 'badge--order' : 'badge--in'}">${esc(p.stock === 'order' ? t('on_order') : t('in_stock'))}</span>
        <h1 class="product__name">${esc(nameOf(p))}</h1>
        <div class="product__price"><strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span><span class="pct">${pctOf(p)}</span>` : ''}</div>
        <div${p.sizes.length ? '' : ' hidden'}>
          <div class="label">${esc(t('sizes'))}</div>
          <div class="pills">${p.sizes.map((s) => `<button type="button" class="pill${s === state.size ? ' is-on' : ''}" data-size="${esc(s)}">${esc(s)}</button>`).join('')}</div>
        </div>
        <div>
          <div class="label">${esc(t('color'))}</div>
          <div class="swatches">${p.colors.map((c, i) => `<span class="swatch${i === 0 ? ' is-on' : ''}" style="background:${esc(c)}"></span>`).join('')}</div>
        </div>
        <div class="specs">
          <div><span>${esc(t('material'))}</span><span>${esc(matOf(p))}</span></div>
          <div><span>${esc(t('code'))}</span><span>${esc(p.code)}</span></div>
          <div><span>${esc(t('care'))}</span><span>${esc(t('care_text'))}</span></div>
        </div>
        <div class="actions">
          <a class="btn btn--red" href="https://t.me/ferrizo_by_simurg" target="_blank" rel="noopener">${TG}${esc(t('order_tg'))}</a>
          <a class="btn btn--ghost" href="tel:+380970400353">${esc(t('call'))}</a>
        </div>
        <p class="addr">${esc(t('city1'))}, ${esc(t('addr1'))} · +380 97 040 0353</p>
      </div>
    </div>
    <div class="also">
      <h2 class="section-title">${esc(t('also'))}</h2>
      <div class="also__grid">
        ${others.map((o) => `<a class="mini" href="#/product/${esc(o.slug)}"><img src="${esc(o.image)}" alt=""><span class="mini__name">${esc(nameOf(o))}</span><span class="mini__price">${money(o.price)}</span></a>`).join('')}
      </div>
    </div>
  </section>`;
  $('#app').querySelectorAll('[data-size]').forEach((b) => b.addEventListener('click', () => {
    state.size = b.dataset.size;
    $('#app').querySelectorAll('[data-size]').forEach((x) => x.classList.toggle('is-on', x === b));
  }));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ---------------- Koleksiyon: yörünge vitrini ---------------- */
let orbit = null;

function variantsOf(p) {
  if (p.variants && p.variants.length) return p.variants;
  return (p.colors || []).slice(0, 1).map((c) => ({ color: c, filter: 'none' }));
}

function renderCollection() {
  closet = null;
  const list = state.products;
  const app = $('#app');
  app.innerHTML = `
  <section class="orbit">
    <div class="orbit__head">
      <div class="orbit__kicker">${esc(t('kicker'))}</div>
      <h1 class="orbit__title">${esc(t('orbit_title'))}</h1>
    </div>
    <div class="orbit__stage" id="orbitStage">
      ${list.map((p, i) => `<button type="button" class="orb" data-i="${i}" aria-label="${esc(nameOf(p))}"><img src="${esc(p.image)}" alt="" draggable="false"><span class="orb__shadow" aria-hidden="true"></span></button>`).join('')}
    </div>
    <div class="orbit__hint">${esc(t('drag_hint'))}</div>
    <aside class="orbit__panel" id="orbitPanel" hidden></aside>
  </section>`;

  const stage = $('#orbitStage');
  const panel = $('#orbitPanel');
  const items = [...stage.querySelectorAll('.orb')];
  const n = items.length;
  const TAU = Math.PI * 2;
  const step = TAU / n;
  let ang = 0, vel = 0, target = null, pendingOpen = -1, openIdx = -1;
  let dragging = false, hover = false, moved = false, startX = 0, lastX = 0, raf = 0, t0 = performance.now();

  function layout(now) {
    const W = stage.clientWidth, H = stage.clientHeight;
    const Rx = Math.min(W * 0.38, 520), Ry = Math.min(H * 0.1, 60);
    items.forEach((el, i) => {
      const th = i * step + ang;
      const sn = Math.sin(th), cs = Math.cos(th);
      const depth = (cs + 1) / 2;
      let sc = 0.48 + 0.52 * depth;
      if (i === openIdx) sc *= 1.18;
      const bob = Math.sin(now / 900 + i * 1.7) * 6;
      el.style.transform = `translate(-50%, -50%) translate(${(sn * Rx).toFixed(1)}px, ${(cs * Ry + bob).toFixed(1)}px) scale(${sc.toFixed(3)})`;
      el.style.zIndex = String(Math.round(depth * 100));
      el.style.opacity = openIdx >= 0 ? (i === openIdx ? 1 : 0.14) : (0.32 + 0.68 * depth).toFixed(2);
      el.style.filter = `blur(${((1 - depth) * 2.4).toFixed(2)}px) brightness(${(0.5 + 0.5 * depth).toFixed(2)})`;
    });
  }

  function tick(now) {
    const dt = Math.min(50, now - t0);
    t0 = now;
    if (target !== null) {
      const d = target - ang;
      ang += d * 0.11;
      if (Math.abs(d) < 0.002) {
        ang = target; target = null;
        if (pendingOpen >= 0) { const k = pendingOpen; pendingOpen = -1; openPanel(k); }
      }
    } else if (!dragging) {
      if (Math.abs(vel) > 0.0002) { ang += vel; vel *= 0.94; }
      else if (!hover && openIdx < 0) ang -= 0.00016 * dt;
    }
    layout(now);
    raf = requestAnimationFrame(tick);
  }

  function bringToFront(i) {
    const base = -i * step;
    const k = Math.round((ang - base) / TAU);
    target = base + k * TAU;
    vel = 0;
  }

  function openPanel(i) {
    openIdx = i;
    const p = list[i];
    const vars = variantsOf(p);
    const img = items[i].querySelector('img');
    stage.classList.add('is-open');
    panel.innerHTML = `
      <button type="button" class="op__close" aria-label="${esc(t('close'))}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <span class="badge ${p.stock === 'order' ? 'badge--order' : 'badge--in'}">${esc(p.stock === 'order' ? t('on_order') : t('in_stock'))}</span>
      <h2 class="op__name">${esc(nameOf(p))}</h2>
      <div class="op__price"><strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span><span class="pct">${pctOf(p)}</span>` : ''}</div>
      ${vars.length ? `<div><div class="label">${esc(t('color'))}</div><div class="swatches">${vars.map((v, k) => `<button type="button" class="swatch${k === 0 ? ' is-on' : ''}" data-v="${k}" style="background:${esc(v.color)}" aria-label="${esc(t('color'))} ${k + 1}"></button>`).join('')}</div></div>` : ''}
      ${p.sizes.length ? `<div><div class="label">${esc(t('sizes'))}</div><div class="pills">${p.sizes.map((sz, k) => `<button type="button" class="pill${k === Math.min(1, p.sizes.length - 1) ? ' is-on' : ''}" data-s="${esc(sz)}">${esc(sz)}</button>`).join('')}</div></div>` : ''}
      <div class="op__actions">
        <a class="btn btn--red" href="https://t.me/ferrizo_by_simurg" target="_blank" rel="noopener">${TG}${esc(t('order_tg'))}</a>
        <a class="btn btn--light" href="#/product/${esc(p.slug)}">${esc(t('details'))}</a>
      </div>`;
    panel.hidden = false;
    img.style.filter = vars[0] ? vars[0].filter : 'none';
    panel.querySelector('.op__close').onclick = closePanel;
    panel.querySelectorAll('[data-v]').forEach((b) => b.addEventListener('click', () => {
      panel.querySelectorAll('[data-v]').forEach((x) => x.classList.toggle('is-on', x === b));
      img.style.filter = vars[+b.dataset.v].filter;
    }));
    panel.querySelectorAll('[data-s]').forEach((b) => b.addEventListener('click', () => {
      panel.querySelectorAll('[data-s]').forEach((x) => x.classList.toggle('is-on', x === b));
    }));
  }

  function closePanel() {
    if (openIdx >= 0) { const img = items[openIdx].querySelector('img'); img.style.filter = ''; }
    openIdx = -1;
    panel.hidden = true;
    stage.classList.remove('is-open');
  }

  items.forEach((el, i) => el.addEventListener('click', () => {
    if (moved) return;
    if (openIdx === i) return;
    if (openIdx >= 0) closePanel();
    pendingOpen = i;
    bringToFront(i);
  }));

  const onMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    if (Math.abs(e.clientX - startX) > 6) moved = true;
    ang += dx * 0.005;
    vel = dx * 0.005;
  };
  const onUp = () => { dragging = false; stage.classList.remove('is-grab'); setTimeout(() => { moved = false; }, 30); };
  stage.addEventListener('pointerdown', (e) => {
    if (openIdx >= 0) return;
    dragging = true; moved = false; target = null; pendingOpen = -1;
    startX = lastX = e.clientX; vel = 0;
    stage.classList.add('is-grab');
  });
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  stage.addEventListener('mouseenter', () => { hover = true; });
  stage.addEventListener('mouseleave', () => { hover = false; });
  const onKey = (e) => { if (e.key === 'Escape') closePanel(); };
  document.addEventListener('keydown', onKey);

  raf = requestAnimationFrame(tick);
  orbit = {
    stop() {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('keydown', onKey);
    }
  };
  window.scrollTo({ top: 0 });
}

/* ---------------- Yönlendirme ---------------- */
function route(keepScroll) {
  if (orbit) { orbit.stop(); orbit = null; }
  const h = location.hash || '#/';
  if (h.startsWith('#/collection')) return renderCollection();
  const m = h.match(/^#\/product\/([^/?#]+)/);
  if (m) return renderProduct(decodeURIComponent(m[1]));
  const anchor = (h.match(/^#\/#(\w+)/) || [])[1];
  renderHome(anchor);
  if (!keepScroll && !anchor) window.scrollTo({ top: 0 });
}

document.addEventListener('keydown', (e) => {
  if (!closet) return;
  if (e.target.closest && e.target.closest('input, textarea, [contenteditable]')) return;
  if (e.key === 'ArrowLeft') closet.prev();
  if (e.key === 'ArrowRight') closet.next();
});

/* ---------------- Başlat ---------------- */
async function init() {
  $('#year').textContent = new Date().getFullYear();
  applyStatic();
  setupLang();
  try {
    const r = await fetch('data/products.json');
    state.products = await r.json();
  } catch (e) {
    state.products = [];
    console.error('Ürünler yüklenemedi', e);
  }
  window.addEventListener('hashchange', () => route(false));
  route(false);

  const loader = $('#loader');
  let seen = false;
  try { seen = sessionStorage.getItem('fz-intro') === '1'; sessionStorage.setItem('fz-intro', '1'); } catch (e) { /* yok */ }
  setTimeout(() => loader.classList.add('is-done'), seen ? 0 : 1500);
}

init();
