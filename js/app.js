import { LANGS, T } from './i18n.js?v=2611142337';

/* ---------------- Ayarlar ---------------- */
const PHONE = '+380970400353';
const PHONE_TXT = '+380 97 040 0353';
const TG_URL = 'https://t.me/ferrizo_by_simurg';
const SITE = 'FERRIZO';

/* ---------------- Durum ---------------- */
const state = {
  lang: readLang(),
  products: [],
  filter: 'all',
  sort: 'rec',
  size: null,
  homeScroll: null
};

function readLang() {
  try {
    localStorage.removeItem('fz-lang'); // eski kalıcı seçim temizlenir
    const l = sessionStorage.getItem('fz-lang');
    if (l && T[l]) return l;
  } catch (e) { /* yok */ }
  return 'uk';
}
const t = (k) => (T[state.lang] && T[state.lang][k] != null ? T[state.lang][k] : (T.uk[k] != null ? T.uk[k] : k));
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const loc = (o) => (o && typeof o === 'object' ? (o[state.lang] || o.uk || '') : (o || ''));
const nameOf = (p) => loc(p.name);
const descOf = (p) => loc(p.description);
const money = (v) => String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ' + t('currency');
const pctOf = (p) => (p.oldPrice > 0 ? '−' + Math.round((1 - p.price / p.oldPrice) * 100) + '%' : '');
const matOf = (p) => (p.material === 'fur' ? t('mat_fur') : t('mat_leather'));
const imagesOf = (p) => [p.image].concat(Array.isArray(p.images) ? p.images : []).filter(Boolean);
const $ = (s, r = document) => r.querySelector(s);
const reduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function variantsOf(p) {
  if (p.variants && p.variants.length) return p.variants;
  return (p.colors || []).map((c) => ({ color: c, filter: 'none', still: true }));
}

/* ---------------- İkonlar ---------------- */
const BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';
const TG = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/></svg>';
const PHONE_ICO = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>';
const SHARE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg>';
const ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/* ---------------- Sayfa başlığı & arama motoru bilgisi ---------------- */
function setMeta(title, desc, ld) {
  document.title = title ? title + ' — ' + SITE : SITE + ' — ' + t('kicker');
  const d = $('meta[name="description"]');
  if (d) d.setAttribute('content', desc || t('hero_sub'));
  const old = $('#fzLd');
  if (old) old.remove();
  if (ld) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'fzLd';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }
}

/* ---------------- Dil ---------------- */
function applyStatic() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-label]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nLabel)); });
  const cur = LANGS.find((l) => l[0] === state.lang) || LANGS[0];
  $('#langCode').textContent = cur[1];
  buildMenuLangs();
}

function setLang(code) {
  if (!T[code] || code === state.lang) return;
  state.lang = code;
  try { sessionStorage.setItem('fz-lang', code); } catch (err) { /* yok */ }
  applyStatic();
  route(true);
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
    if (menu.hidden) {
      build(); menu.hidden = false; btn.setAttribute('aria-expanded', 'true');
      const on = menu.querySelector('[aria-selected="true"]');
      if (on) on.focus();
    } else close();
  });
  menu.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]');
    if (!b) return;
    close();
    btn.focus();
    setLang(b.dataset.lang);
  });
  menu.addEventListener('keydown', (e) => {
    const items = [...menu.querySelectorAll('button')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener('click', (e) => { if (!menu.hidden && !e.target.closest('#lang')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { close(); btn.focus(); } });
}

/* ---------------- Telefon menüsü ---------------- */
function buildMenuLangs() {
  const box = $('#drawerLangs');
  if (!box) return;
  box.innerHTML = LANGS.map(([code, short, label]) =>
    `<button type="button" data-dlang="${code}" class="${code === state.lang ? 'is-on' : ''}" aria-pressed="${code === state.lang}" title="${label}">${short}</button>`
  ).join('');
}

function setupDrawer() {
  const btn = $('#menuBtn');
  const drawer = $('#drawer');
  const panel = $('.drawer__panel', drawer);
  let lastFocus = null;
  const open = () => {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    requestAnimationFrame(() => drawer.classList.add('is-open'));
    btn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    const first = panel.querySelector('a, button');
    if (first) first.focus();
  };
  const close = (restore = true) => {
    if (drawer.hidden) return;
    drawer.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    setTimeout(() => { drawer.hidden = true; }, reduceMotion() ? 0 : 320);
    if (restore && lastFocus) lastFocus.focus();
  };
  btn.addEventListener('click', open);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer || e.target.closest('[data-close]')) return close();
    const l = e.target.closest('[data-dlang]');
    if (l) { setLang(l.dataset.dlang); return; }
    if (e.target.closest('a')) close(false);
  });
  document.addEventListener('keydown', (e) => {
    if (drawer.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = [...panel.querySelectorAll('a, button')];
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) close(false); });
}

function markNav(key) {
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

/* ---------------- Ortak parçalar ---------------- */
function badgesOf(p) {
  const b = [];
  if (p.oldPrice > 0) b.push(`<span class="pb pb--sale">${pctOf(p)}</span>`);
  if (p.isNew) b.push(`<span class="pb pb--new">${esc(t('new_badge'))}</span>`);
  if (p.stock === 'order') b.push(`<span class="pb pb--order">${esc(t('on_order'))}</span>`);
  return b.join('');
}

function priceHTML(p) {
  return `<strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span><span class="pct">${pctOf(p)}</span>` : ''}`;
}

function cardHTML(p) {
  const colors = p.colors || [];
  return `<a class="pcard reveal" href="#/product/${esc(p.slug)}">
    <div class="pcard__media">
      <div class="pcard__badges">${badgesOf(p)}</div>
      <img src="${esc(p.image)}" alt="${esc(nameOf(p))}" loading="lazy" decoding="async" draggable="false" width="600" height="750">
      <span class="pcard__cta" aria-hidden="true">${esc(t('details'))}${ARROW}</span>
    </div>
    <div class="pcard__body">
      <span class="pcard__name">${esc(nameOf(p))}</span>
      <span class="pcard__price"><strong>${money(p.price)}</strong>${p.oldPrice > 0 ? `<span class="old">${money(p.oldPrice)}</span>` : ''}</span>
      ${colors.length > 1 ? `<span class="pcard__dots" aria-hidden="true">${colors.map((c) => `<i style="background:${esc(c)}"></i>`).join('')}</span>` : ''}
    </div>
  </a>`;
}


/* ---------------- Son bakılanlar ---------------- */
function readRecent() {
  try { const a = JSON.parse(localStorage.getItem('fz-recent') || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; }
}
function pushRecent(id) {
  const a = [id].concat(readRecent().filter((x) => x !== id)).slice(0, 8);
  try { localStorage.setItem('fz-recent', JSON.stringify(a)); } catch (e) { /* yok */ }
}
function recentHTML(exceptId) {
  const list = readRecent().filter((id) => id !== exceptId).map((id) => state.products.find((p) => p.id === id)).filter(Boolean).slice(0, 6);
  if (!list.length) return '';
  return `<section class="recent">
    <h2 class="section-title section-title--sm">${esc(t('recent'))}</h2>
    <div class="recent__row">${list.map((o) => `<a class="recent__item" href="#/product/${esc(o.slug)}"><span class="recent__img"><img src="${esc(o.image)}" alt="" loading="lazy"></span><span class="recent__name">${esc(nameOf(o))}</span><span class="recent__price">${money(o.price)}</span></a>`).join('')}</div>
  </section>`;
}

/* ---------------- Beden tablosu (genel; firma ölçüleri gelince güncellenecek) ---------------- */
const SIZE_TABLE = {
  XS: [44, '88–92', '76–80', '92–96'],
  S: [46, '92–96', '80–84', '96–100'],
  M: [48, '96–100', '84–88', '100–104'],
  L: [50, '100–104', '88–92', '104–108'],
  XL: [52, '104–108', '92–96', '108–112'],
  XXL: [54, '108–112', '96–100', '112–116'],
  '3XL': [56, '112–116', '100–104', '116–120']
};
const STORES = [
  { city: 'city1', addr: 'addr1', link: 'tel:' + PHONE, label: PHONE_TXT },
  { city: 'city2', addr: 'addr2', link: 'https://instagram.com/ferrizo_ivanofrankivsk', label: '@ferrizo_ivanofrankivsk' },
  { city: 'city3', addr: 'store_tbd', link: 'https://instagram.com/ionia.ua', label: '@ionia.ua' }
];

function attrRows(p) {
  const a = p.attrs || {};
  const rows = [[t('material'), matOf(p)]];
  if (a.leather) rows.push([t('a_leather'), t('lt_' + a.leather)]);
  if (a.lining) rows.push([t('a_lining'), t('ln_' + a.lining)]);
  if (a.closure) rows.push([t('a_closure'), t('cl_' + a.closure)]);
  rows.push([t('a_origin'), t('origin_val')], [t('code'), p.code]);
  return rows.map(([k, v]) => `<div><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join('');
}

function accordionsHTML(p) {
  const list = (k) => { const v = t(k); return (Array.isArray(v) ? v : [v]).map((x) => `<li>${esc(x)}</li>`).join(''); };
  const sizes = (p.sizes || []).filter((s) => SIZE_TABLE[s]);
  const cols = t('size_cols');
  const sizeBlock = sizes.length ? `<details class="acc" id="accSize">
      <summary>${esc(t('acc_size'))}</summary>
      <div class="acc__body">
        <div class="sizetable" role="region" aria-label="${esc(t('acc_size'))}" tabindex="0"><table>
          <thead><tr>${cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
          <tbody>${sizes.map((s) => `<tr${s === state.size ? ' class="is-on"' : ''} data-row="${esc(s)}"><th scope="row">${esc(s)}</th>${SIZE_TABLE[s].map((v) => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>
        <p class="acc__sub">${esc(t('size_how'))}</p>
        <ul>${list('size_how_p')}</ul>
        <p class="acc__note">${esc(t('size_note'))} <a href="${TG_URL}" target="_blank" rel="noopener">Telegram</a></p>
      </div>
    </details>` : '';
  return `<div class="accs">
    ${sizeBlock}
    <details class="acc"><summary>${esc(t('acc_delivery'))}</summary><div class="acc__body"><ul>${list('delivery_p')}</ul></div></details>
    <details class="acc"><summary>${esc(t('acc_care'))}</summary><div class="acc__body"><ul>${list('care_p')}</ul></div></details>
    <details class="acc"><summary>${esc(t('acc_stores'))}</summary><div class="acc__body">
      <p>${esc(t('stores_p'))}</p>
      <ul class="acc__stores">${STORES.map((st) => `<li><b>${esc(t(st.city))}</b><span>${esc(t(st.addr))}</span><a href="${st.link}"${st.link.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${esc(st.label)}</a></li>`).join('')}</ul>
    </div></details>
  </div>`;
}

/* ---------------- Ana sayfa bölümleri ---------------- */
function newInHTML() {
  let list = state.products.filter((p) => p.isNew);
  if (list.length < 4) list = list.concat(state.products.filter((p) => !p.isNew)).slice(0, 4);
  return `<section class="newin">
    <div class="sec-head reveal">
      <h2 class="section-title">${esc(t('new_in'))}</h2>
      <a class="link-arrow" href="#/#shop">${esc(t('see_all'))}${ARROW}</a>
    </div>
    <div class="grid grid--row">${list.slice(0, 4).map(cardHTML).join('')}</div>
  </section>`;
}

function atelierHTML() {
  const steps = t('atelier_s');
  const W = (id) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=900&h=1100&q=80';
  const pics = [W('1793502618517-e888f447ee42'), W('1787070534639-8fc823677aff'), W('1644258676710-ffb99d7d7a1b')];
  return `<section class="atelier" id="about">
    <div class="atelier__inner">
      <div class="atelier__head reveal">
        <div class="kicker kicker--light">${esc(t('atelier_k'))}</div>
        <h2 class="atelier__title">${esc(t('about_title'))}</h2>
        <p class="atelier__text">${esc(t('about_text'))} ${esc(t('atelier_d'))}</p>
      </div>
      <div class="atelier__pics reveal" aria-hidden="true">${pics.map((src) => `<img src="${esc(src)}" alt="" loading="lazy">`).join('')}</div>
      <ol class="atelier__steps">${(Array.isArray(steps) ? steps : []).map(([h, d], i) => `<li class="reveal"><span class="step__n">0${i + 1}</span><h3>${esc(h)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
    </div>
  </section>`;
}

function mtmHTML() {
  const steps = t('mtm_steps');
  return `<section class="mtm" id="made-to-measure">
    <div class="mtm__inner">
      <div class="mtm__head reveal">
        <div class="kicker">${esc(t('mtm_k'))}</div>
        <h2 class="mtm__title">${esc(t('mtm_t'))}</h2>
        <p class="mtm__text">${esc(t('mtm_d'))}</p>
        <a class="btn btn--red" href="${TG_URL}" target="_blank" rel="noopener">${TG}${esc(t('mtm_btn'))}</a>
      </div>
      <ol class="mtm__steps">${(Array.isArray(steps) ? steps : []).map(([h, d], i) => `<li class="reveal"><span class="mtm__n">${i + 1}</span><div><h3>${esc(h)}</h3><p>${esc(d)}</p></div></li>`).join('')}</ol>
    </div>
  </section>`;
}

function guideHTML() {
  const items = t('guide_items');
  const tips = t('care_tips');
  return `<section class="guide" id="guide">
    <div class="guide__inner">
      <div class="kicker reveal">${esc(t('guide_k'))}</div>
      <h2 class="section-title reveal">${esc(t('guide_t'))}</h2>
      <div class="guide__grid">
        ${(Array.isArray(items) ? items : []).map(([h, d]) => `<div class="gcard reveal"><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join('')}
        <div class="gcard gcard--care reveal"><h3>${esc(t('care_title'))}</h3><ul>${(Array.isArray(tips) ? tips : []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
    </div>
  </section>`;
}

/* ---------------- Ana sayfa (mağaza) ---------------- */
const CAT_KEYS = [['coats', 'f_coats'], ['jackets', 'f_jackets'], ['sheepskins', 'f_sheepskins'], ['bags', 'f_bags']];

function shopList() {
  const l = state.filter === 'all' ? state.products.slice() : state.products.filter((p) => p.category === state.filter);
  if (state.sort === 'asc') l.sort((x, y) => x.price - y.price);
  if (state.sort === 'desc') l.sort((x, y) => y.price - x.price);
  return l;
}

function homeHTML() {
  const feat = state.products.find((p) => p.isFeatured) || state.products.slice().sort((x, y) => y.price - x.price)[0];
  const CATS = CAT_KEYS.map(([k, l]) => ({ k, l, items: state.products.filter((p) => p.category === k) })).filter((c) => c.items.length);
  const chip = (key, label) => `<button type="button" class="chip${state.filter === key ? ' is-on' : ''}" data-filter="${key}" aria-pressed="${state.filter === key}">${esc(t(label))}</button>`;
  const opt = (v, l) => `<option value="${v}"${state.sort === v ? ' selected' : ''}>${esc(t(l))}</option>`;
  return `
  <section class="hero2">
    <div class="hero2__text reveal">
      <div class="hero__kicker">${esc(t('kicker'))}</div>
      <h1 class="hero2__title">${t('hero_title')}</h1>
      <p class="hero2__sub">${esc(t('hero_sub'))}</p>
      <div class="hero2__ctas">
        <a class="btn btn--red" href="#/collection">${esc(t('cta_collection'))}</a>
        <a class="btn btn--ghost" href="#/#shop">${esc(t('nav_shop'))}</a>
      </div>
    </div>
    ${feat ? `<a class="hero2__media reveal" href="#/product/${esc(feat.slug)}">
      <span class="hero2__ring" aria-hidden="true"></span>
      <span class="hero2__label">${esc(t('featured'))}</span>
      <img src="${esc(feat.image)}" alt="${esc(nameOf(feat))}" draggable="false" fetchpriority="high">
      <span class="hero2__cap"><span>${esc(nameOf(feat))}</span><strong>${money(feat.price)}</strong></span>
    </a>` : ''}
  </section>

  <section class="cats" aria-label="${esc(t('categories_title'))}">
    <div class="cats__grid">
      ${CATS.map((c) => `<button type="button" class="cat reveal" data-cat="${c.k}">
        <span class="cat__media"><img src="${esc(c.items[0].image)}" alt="" loading="lazy" decoding="async" draggable="false"></span>
        <span class="cat__row"><span class="cat__name">${esc(t(c.l))}</span><span class="cat__count">${c.items.length}</span>
        <svg class="cat__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </button>`).join('')}
    </div>
  </section>

  ${newInHTML()}
  ${atelierHTML()}

  <section class="shop" id="shop">
    <div class="shop__head">
      <h2 class="shop__title">${esc(t('closet_kicker'))} <span id="shopCount"></span></h2>
      <div class="shop__tools">
        <div class="filters" role="group" aria-label="${esc(t('categories_title'))}">${chip('all', 'f_all')}${CATS.map((c) => chip(c.k, c.l)).join('')}</div>
        <label class="sort"><span class="sr">${esc(t('sort_rec'))}</span>
          <select id="sort">${opt('rec', 'sort_rec')}${opt('asc', 'sort_asc')}${opt('desc', 'sort_desc')}</select>
        </label>
      </div>
    </div>
    <div class="grid" id="grid" aria-live="polite"></div>
  </section>

  ${mtmHTML()}
  ${guideHTML()}
  ${recentHTML()}

  <section class="stores" id="stores">
    <div class="stores__inner">
      <h2 class="section-title">${esc(t('stores_title'))}</h2>
      <div class="stores__grid">
        <div class="store reveal"><span class="store__num">01</span><span class="store__city">${esc(t('city1'))}</span><span class="store__addr">${esc(t('addr1'))}</span><a href="tel:${PHONE}">${PHONE_TXT}</a></div>
        <div class="store reveal"><span class="store__num">02</span><span class="store__city">${esc(t('city2'))}</span><span class="store__addr">${esc(t('addr2'))}</span><a href="https://instagram.com/ferrizo_ivanofrankivsk" target="_blank" rel="noopener">@ferrizo_ivanofrankivsk</a></div>
        <div class="store reveal"><span class="store__num">03</span><span class="store__city">${esc(t('city3'))}</span><span class="store__addr">${esc(t('store_tbd'))}</span><a href="https://instagram.com/ionia.ua" target="_blank" rel="noopener">@ionia.ua</a></div>
      </div>
    </div>
  </section>`;
}

let revealObs = null;
function observeReveal(root) {
  if (!('IntersectionObserver' in window) || reduceMotion()) { root.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')); return; }
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
  g.innerHTML = l.length ? l.map(cardHTML).join('') : `<p class="grid__empty">${esc(t('empty'))}</p>`;
  g.querySelectorAll('.pcard').forEach((c, i) => { c.style.transitionDelay = (i % 4) * 70 + 'ms'; });
  $('#shopCount').textContent = '(' + l.length + ')';
  observeReveal(g);
}

function renderHome(anchor, restoreY) {
  const app = $('#app');
  app.innerHTML = homeHTML();
  const setFilter = (key) => {
    state.filter = key;
    app.querySelectorAll('[data-filter]').forEach((x) => {
      const on = x.dataset.filter === key;
      x.classList.toggle('is-on', on);
      x.setAttribute('aria-pressed', String(on));
    });
    renderGrid();
  };
  app.querySelectorAll('[data-filter]').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter)));
  app.querySelectorAll('[data-cat]').forEach((b) => b.addEventListener('click', () => {
    setFilter(b.dataset.cat);
    $('#shop').scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' });
  }));
  $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });
  renderGrid();
  observeReveal(app);
  setMeta('', t('hero_sub'), {
    '@context': 'https://schema.org', '@type': 'ClothingStore', name: 'Ferrizo by Simurg',
    telephone: PHONE, url: location.href.split('#')[0],
    sameAs: ['https://instagram.com/ferrizo_by_simurg', TG_URL],
    address: { '@type': 'PostalAddress', addressLocality: t('city1'), streetAddress: t('addr1'), addressCountry: 'UA' }
  });
  markNav(anchor || 'home');
  if (anchor) {
    const el = document.getElementById(anchor);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }), 60);
  } else if (restoreY != null) {
    app.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    requestAnimationFrame(() => window.scrollTo({ top: restoreY }));
  }
}

/* ---------------- Ürün sayfası ---------------- */
function renderProduct(p, keepScroll) {
  if (!p.sizes) p.sizes = [];
  if (!p.sizes.includes(state.size)) state.size = p.sizes.length ? p.sizes[Math.min(1, p.sizes.length - 1)] : null;
  const imgs = imagesOf(p);
  const vars = variantsOf(p);
  const desc = descOf(p);
  const sameCat = state.products.filter((x) => x.id !== p.id && x.category === p.category);
  const others = sameCat.concat(state.products.filter((x) => x.id !== p.id && x.category !== p.category)).slice(0, 4);

  $('#app').innerHTML = `
  <section class="product">
    <a class="back" href="#/#shop" id="backBtn">${BACK}${esc(t('back_shop'))}</a>
    <div class="product__grid">
      <div class="product__gallery">
        <div class="product__media">
          <img class="product__photo" id="mainPhoto" src="${esc(imgs[0])}" alt="${esc(nameOf(p))}" fetchpriority="high">
          <img class="product__mark" src="logo.svg" alt="" width="44" height="44">
          ${imgs.length > 1 ? `<span class="product__count" id="photoCount">1 / ${imgs.length}</span>` : ''}
        </div>
        ${imgs.length > 1 ? `<div class="thumbs" role="group" aria-label="${esc(t('photo'))}">${imgs.map((src, i) => `<button type="button" class="thumb${i === 0 ? ' is-on' : ''}" data-img="${i}" aria-label="${esc(t('photo'))} ${i + 1}" aria-pressed="${i === 0}"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
      </div>
      <div class="product__info">
        <span class="badge ${p.stock === 'order' ? 'badge--order' : 'badge--in'}">${esc(p.stock === 'order' ? t('on_order') : t('in_stock'))}</span>
        <h1 class="product__name">${esc(nameOf(p))}</h1>
        <div class="product__price">${priceHTML(p)}</div>
        ${desc ? `<p class="product__desc">${esc(desc)}</p>` : ''}
        ${p.sizes.length ? `<div>
          <div class="label-row"><div class="label" id="lblSize">${esc(t('sizes'))}</div>${p.sizes.some((x) => SIZE_TABLE[x]) ? `<button type="button" class="link-btn" id="sizeGuideBtn">${esc(t('acc_size'))}</button>` : ''}</div>
          <div class="pills" role="group" aria-labelledby="lblSize">${p.sizes.map((s) => `<button type="button" class="pill${s === state.size ? ' is-on' : ''}" data-size="${esc(s)}" aria-pressed="${s === state.size}">${esc(s)}</button>`).join('')}</div>
          ${p.model && p.model.height ? `<p class="model-info">${esc(t('model_info').replace('{h}', p.model.height).replace('{s}', p.model.size || ''))}</p>` : ''}
        </div>` : ''}
        ${vars.length ? `<div>
          <div class="label" id="lblColor">${esc(t('color'))}</div>
          <div class="swatches" role="group" aria-labelledby="lblColor">${vars.map((v, i) => `<button type="button" class="swatch${i === 0 ? ' is-on' : ''}" data-v="${i}" style="background:${esc(v.color)}" aria-label="${esc(t('color'))} ${i + 1}" aria-pressed="${i === 0}"></button>`).join('')}</div>
        </div>` : ''}
        <div class="specs">${attrRows(p)}</div>
        <div class="actions">
          <a class="btn btn--red" href="${TG_URL}" target="_blank" rel="noopener">${TG}${esc(t('order_tg'))}</a>
          <a class="btn btn--ghost" href="tel:${PHONE}">${PHONE_ICO}${esc(t('call'))}</a>
        </div>
        <p class="order-note">${esc(t('order_note'))} <b>${esc(p.code)}</b></p>
        ${accordionsHTML(p)}
        <div class="product__foot">
          <p class="addr">${esc(t('city1'))}, ${esc(t('addr1'))} · ${PHONE_TXT}</p>
          <button type="button" class="share" id="shareBtn">${SHARE}<span>${esc(t('share'))}</span></button>
        </div>
      </div>
    </div>
    ${others.length ? `<div class="also">
      <h2 class="section-title">${esc(t('also'))}</h2>
      <div class="also__grid">
        ${others.map((o) => `<a class="mini" href="#/product/${esc(o.slug)}"><img src="${esc(o.image)}" alt="" loading="lazy"><span class="mini__name">${esc(nameOf(o))}</span><span class="mini__price">${money(o.price)}</span></a>`).join('')}
      </div>
    </div>` : ''}
    ${recentHTML(p.id)}
  </section>
  <div class="buybar" role="region" aria-label="${esc(t('order_tg'))}">
    <div class="buybar__price">${priceHTML(p)}</div>
    <a class="buybar__call" href="tel:${PHONE}" aria-label="${esc(t('call'))}">${PHONE_ICO}</a>
    <a class="btn btn--red buybar__btn" href="${TG_URL}" target="_blank" rel="noopener">${TG}${esc(t('order_tg'))}</a>
  </div>`;

  const app = $('#app');
  const photo = $('#mainPhoto');
  let cur = 0;
  let curFilter = vars[0] ? vars[0].filter || 'none' : 'none';
  const show = (i) => {
    cur = (i + imgs.length) % imgs.length;
    photo.classList.remove('is-in'); void photo.offsetWidth;
    photo.src = imgs[cur];
    photo.classList.add('is-in');
    app.querySelectorAll('[data-img]').forEach((b) => { const on = +b.dataset.img === cur; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', String(on)); });
    const c = $('#photoCount'); if (c) c.textContent = (cur + 1) + ' / ' + imgs.length;
  };
  app.querySelectorAll('[data-img]').forEach((b) => b.addEventListener('click', () => show(+b.dataset.img)));
  // Galeride parmakla kaydırma
  if (imgs.length > 1) {
    let sx = null;
    const media = $('.product__media', app);
    media.addEventListener('pointerdown', (e) => { sx = e.clientX; });
    media.addEventListener('pointerup', (e) => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); });
  }
  photo.style.filter = curFilter === 'none' ? '' : curFilter;

  app.querySelectorAll('[data-size]').forEach((b) => b.addEventListener('click', () => {
    state.size = b.dataset.size;
    app.querySelectorAll('[data-size]').forEach((x) => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
    app.querySelectorAll('[data-row]').forEach((r) => r.classList.toggle('is-on', r.dataset.row === state.size));
  }));
  const sg = $('#sizeGuideBtn');
  if (sg) sg.addEventListener('click', () => { const d = $('#accSize'); d.open = true; d.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' }); });
  app.querySelectorAll('[data-v]').forEach((b) => b.addEventListener('click', () => {
    const v = vars[+b.dataset.v];
    app.querySelectorAll('[data-v]').forEach((x) => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
    if (v.image) { photo.src = v.image; photo.style.filter = ''; }
    else if (!v.still) { if (photo.getAttribute('src') !== imgs[cur]) photo.src = imgs[cur]; photo.style.filter = v.filter && v.filter !== 'none' ? v.filter : ''; }
  }));

  $('#backBtn').addEventListener('click', (e) => {
    if (navCount > 0 && lastHome) { e.preventDefault(); history.back(); }
  });
  $('#shareBtn').addEventListener('click', async () => {
    const url = location.href;
    try {
      if (navigator.share) { await navigator.share({ title: nameOf(p) + ' — ' + SITE, url }); return; }
      await navigator.clipboard.writeText(url);
      toast(t('copied'));
    } catch (err) { /* iptal */ }
  });

  const plain = (desc || t('hero_sub'));
  setMeta(nameOf(p), plain, {
    '@context': 'https://schema.org', '@type': 'Product', name: nameOf(p), sku: p.code,
    image: imgs.map((s) => new URL(s, location.href).href), description: plain,
    brand: { '@type': 'Brand', name: 'Ferrizo' },
    offers: { '@type': 'Offer', priceCurrency: 'UAH', price: p.price, availability: p.stock === 'order' ? 'https://schema.org/PreOrder' : 'https://schema.org/InStock' }
  });
  pushRecent(p.id);
  markNav('product');
  if (!keepScroll) window.scrollTo({ top: 0 });
}

/* ---------------- Gizlilik, 404 ---------------- */
function renderPrivacy() {
  const ps = t('privacy_p');
  $('#app').innerHTML = `<section class="page">
    <a class="back" href="#/">${BACK}${esc(t('back_shop'))}</a>
    <h1 class="page__title">${esc(t('privacy'))}</h1>
    ${(Array.isArray(ps) ? ps : [ps]).map((x) => `<p>${esc(x)}</p>`).join('')}
    <p class="page__meta">Ferrizo by Simurg · <a href="tel:${PHONE}">${PHONE_TXT}</a></p>
  </section>`;
  setMeta(t('privacy'), (Array.isArray(ps) ? ps[0] : ps));
  markNav('privacy');
  window.scrollTo({ top: 0 });
}

function renderNotFound() {
  $('#app').innerHTML = `<section class="nf">
    <div class="nf__code" aria-hidden="true">404</div>
    <h1 class="nf__title">${esc(t('nf_title'))}</h1>
    <p class="nf__text">${esc(t('nf_text'))}</p>
    <a class="btn btn--red" href="#/#shop">${esc(t('nf_btn'))}</a>
  </section>`;
  setMeta(t('nf_title'), t('nf_text'));
  markNav('');
  window.scrollTo({ top: 0 });
}

let toastTimer = 0;
function toast(msg) {
  let el = $('#toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-on'), 2200);
}

/* ---------------- Koleksiyon: yörünge vitrini ---------------- */
let orbit = null;

function renderCollection() {
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
  setMeta(t('orbit_title'), t('hero_sub'));
  markNav('collection');

  const stage = $('#orbitStage');
  const panel = $('#orbitPanel');
  const items = [...stage.querySelectorAll('.orb')];
  const n = items.length;
  if (!n) return;
  const TAU = Math.PI * 2;
  const step = TAU / n;
  const still = reduceMotion();
  let ang = 0, vel = 0, target = null, pendingOpen = -1, openIdx = -1, front = 0;
  let dragging = false, hover = false, moved = false, startX = 0, lastX = 0, raf = 0, t0 = performance.now();

  function layout(now) {
    const W = stage.clientWidth, H = stage.clientHeight;
    const Rx = Math.min(W * 0.38, 520), Ry = Math.min(H * 0.1, 60);
    let best = -2;
    items.forEach((el, i) => {
      const th = i * step + ang;
      const sn = Math.sin(th), cs = Math.cos(th);
      const depth = (cs + 1) / 2;
      if (cs > best) { best = cs; front = i; }
      let sc = 0.48 + 0.52 * depth;
      if (i === openIdx) sc *= 1.18;
      const bob = still ? 0 : Math.sin(now / 900 + i * 1.7) * 6;
      el.style.transform = `translate(-50%, -50%) translate(${(sn * Rx).toFixed(1)}px, ${(cs * Ry + bob).toFixed(1)}px) scale(${sc.toFixed(3)})`;
      el.style.zIndex = String(Math.round(depth * 100));
      el.style.opacity = openIdx >= 0 ? (i === openIdx ? 1 : 0.14) : (0.32 + 0.68 * depth).toFixed(2);
      const blur = ((1 - depth) * 2.4).toFixed(2);
      el.style.filter = `blur(${blur}px) brightness(${(0.5 + 0.5 * depth).toFixed(2)})`;
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
      else if (!hover && openIdx < 0 && !still && !document.hidden) ang -= 0.00016 * dt;
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
      <div class="op__price">${priceHTML(p)}</div>
      ${vars.length > 1 ? `<div><div class="label">${esc(t('color'))}</div><div class="swatches">${vars.map((v, k) => `<button type="button" class="swatch${k === 0 ? ' is-on' : ''}" data-v="${k}" style="background:${esc(v.color)}" aria-label="${esc(t('color'))} ${k + 1}" aria-pressed="${k === 0}"></button>`).join('')}</div></div>` : ''}
      ${p.sizes && p.sizes.length ? `<div><div class="label">${esc(t('sizes'))}</div><div class="pills">${p.sizes.map((sz, k) => `<button type="button" class="pill${k === Math.min(1, p.sizes.length - 1) ? ' is-on' : ''}" data-s="${esc(sz)}">${esc(sz)}</button>`).join('')}</div></div>` : ''}
      <div class="op__actions">
        <a class="btn btn--red" href="${TG_URL}" target="_blank" rel="noopener">${TG}${esc(t('order_tg'))}</a>
        <a class="btn btn--light" href="#/product/${esc(p.slug)}">${esc(t('details'))}</a>
      </div>`;
    panel.hidden = false;
    img.style.filter = vars[0] && vars[0].filter && vars[0].filter !== 'none' ? vars[0].filter : '';
    panel.querySelector('.op__close').onclick = closePanel;
    panel.querySelectorAll('[data-v]').forEach((b) => b.addEventListener('click', () => {
      panel.querySelectorAll('[data-v]').forEach((x) => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
      const v = vars[+b.dataset.v];
      if (v.image) img.src = v.image;
      else if (!v.still) img.style.filter = v.filter && v.filter !== 'none' ? v.filter : '';
    }));
    panel.querySelectorAll('[data-s]').forEach((b) => b.addEventListener('click', () => {
      panel.querySelectorAll('[data-s]').forEach((x) => x.classList.toggle('is-on', x === b));
    }));
    panel.querySelector('.op__close').focus({ preventScroll: true });
  }

  function closePanel() {
    if (openIdx >= 0) {
      const el = items[openIdx];
      const img = el.querySelector('img');
      img.style.filter = '';
      img.src = list[openIdx].image;
      el.focus({ preventScroll: true });
    }
    openIdx = -1;
    panel.hidden = true;
    stage.classList.remove('is-open');
  }

  const select = (i) => {
    if (openIdx === i) return;
    if (openIdx >= 0) closePanel();
    pendingOpen = i;
    bringToFront(i);
  };
  items.forEach((el, i) => el.addEventListener('click', () => { if (!moved) select(i); }));

  const onMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    if (Math.abs(e.clientX - startX) > 6) moved = true;
    ang += dx * 0.005;
    vel = dx * 0.005;
  };
  const onUp = () => { if (!dragging) return; dragging = false; stage.classList.remove('is-grab'); setTimeout(() => { moved = false; }, 30); };
  stage.addEventListener('pointerdown', (e) => {
    if (openIdx >= 0) return;
    dragging = true; moved = false; target = null; pendingOpen = -1;
    startX = lastX = e.clientX; vel = 0;
    stage.classList.add('is-grab');
  });
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);
  stage.addEventListener('mouseenter', () => { hover = true; });
  stage.addEventListener('mouseleave', () => { hover = false; });
  const onKey = (e) => {
    if (e.key === 'Escape') { closePanel(); return; }
    if (e.target.closest && e.target.closest('input, select, textarea, #orbitPanel, #langMenu')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nxt = (front + (e.key === 'ArrowRight' ? 1 : -1) + n) % n;
      if (openIdx >= 0) select(nxt); else { bringToFront(nxt); }
      items[nxt].focus({ preventScroll: true });
    }
  };
  document.addEventListener('keydown', onKey);

  raf = requestAnimationFrame(tick);
  orbit = {
    stop() {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
      document.removeEventListener('keydown', onKey);
    }
  };
  window.scrollTo({ top: 0 });
}

/* ---------------- Yönlendirme ---------------- */
let navCount = 0;
let lastHome = false;
let curView = '';

function route(keepScroll) {
  if (orbit) { orbit.stop(); orbit = null; }
  const leaving = curView;
  if (leaving === 'home' && !keepScroll) state.homeScroll = window.scrollY;
  const h = location.hash || '#/';
  document.body.classList.remove('has-buybar');

  if (h === '#/collection' || h.startsWith('#/collection?')) { curView = 'collection'; return renderCollection(); }
  if (h === '#/privacy') { curView = 'privacy'; return renderPrivacy(); }
  const m = h.match(/^#\/product\/([^/?#]+)\/?$/);
  if (m) {
    let slug = m[1];
    try { slug = decodeURIComponent(slug); } catch (e) { /* bozuk adres */ }
    const p = state.products.find((x) => x.slug === slug);
    if (!p) { curView = '404'; return renderNotFound(); }
    lastHome = leaving === 'home';
    curView = 'product';
    document.body.classList.add('has-buybar');
    return renderProduct(p, keepScroll);
  }
  const anchor = (h.match(/^#\/#([\w-]+)$/) || [])[1];
  if (h === '#/' || h === '#' || h === '' || anchor) {
    const back = !anchor && leaving === 'product' && state.homeScroll != null ? state.homeScroll : null;
    curView = 'home';
    renderHome(anchor, keepScroll ? window.scrollY : back);
    if (!keepScroll && !anchor && back == null) window.scrollTo({ top: 0 });
    return;
  }
  curView = '404';
  renderNotFound();
}

/* ---------------- Başlat ---------------- */
async function loadProducts() {
  for (const url of ['data/products.json']) {
    try {
      const r = await fetch(url, { cache: 'no-cache' });
      if (r.ok && (r.headers.get('content-type') || '').includes('json')) return await r.json();
    } catch (e) { /* sıradaki */ }
  }
  return [];
}

async function init() {
  $('#year').textContent = new Date().getFullYear();
  applyStatic();
  setupLang();
  setupDrawer();
  const skip = $('.skip');
  if (skip) skip.addEventListener('click', (e) => { e.preventDefault(); $('#app').focus(); });
  state.products = await loadProducts();
  window.addEventListener('hashchange', () => { navCount++; route(false); });
  route(false);

  const loader = $('#loader');
  let seen = false;
  try { seen = sessionStorage.getItem('fz-intro') === '1'; sessionStorage.setItem('fz-intro', '1'); } catch (e) { /* yok */ }
  setTimeout(() => loader.classList.add('is-done'), seen || reduceMotion() ? 0 : 1200);
}

init();
