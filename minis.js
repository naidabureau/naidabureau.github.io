/* Живі мініатюри трьох інтерактивних версій: NaidaOS, Живий редактор, Naida Quest.
   Використання: <div class="minis" data-minis></div> + <script src="minis.js" defer></script>
   Тексти карток — у масиві CARDS нижче. */
(() => {
const CARDS = [
  { key: 'os', href: 'os.html', n: '01 · ОС', name: 'NaidaOS', text: 'Моя операційна система в браузері', go: 'Запустити' },
  { key: 'ed', href: 'editor.html', n: '02 · Редактор', name: 'Живий редактор', text: 'Змініть дизайн — код оновиться', go: 'Відкрити' },
  { key: 'qu', href: 'game.html', n: '03 · Гра', name: 'Naida Quest', text: 'Впіймайте знижку −20%', go: 'Зіграти' },
];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const css = `
.minis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;max-width:1180px}
.mini{position:relative;display:flex;flex-direction:column;border-radius:22px;background:#0b0b0dd9;border:1px solid #ffffff1f;color:#F4F2EC;text-decoration:none;overflow:hidden;backdrop-filter:blur(14px);
  transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .25s,box-shadow .35s}
.mini:hover,.mini:focus-visible{transform:translateY(-6px);border-color:#D7FF3D;box-shadow:0 30px 60px #000a,0 0 0 1px #D7FF3D33;outline:none}
.mini .pv{position:relative;height:210px;margin:10px 10px 0;border-radius:14px;background:#111115;overflow:hidden;border:1px solid #ffffff10}
.mini .ft{display:flex;align-items:center;gap:14px;padding:16px 18px 18px}
.mini .ft div{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
.mini .n{font:500 11px 'JetBrains Mono',monospace;color:#A3A1AA;letter-spacing:.06em;text-transform:uppercase}
.mini b{font:400 22px/1.1 'Dela Gothic One',sans-serif}
.mini .tx{font-size:13.5px;color:#CFCDD4}
.mini .ar{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#ffffff10;color:#F4F2EC;font:500 18px 'JetBrains Mono',monospace;transition:background .25s,color .25s,transform .35s}
.mini:hover .ar{background:#D7FF3D;color:#0B0B0D;transform:rotate(-45deg)}
.mini .ar span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
/* --- OS --- */
.pv.os{background:radial-gradient(circle at 70% 120%,#d7ff3d26,transparent 60%),#0f0f12}
.os .mtop{position:absolute;left:0;right:0;top:0;height:16px;background:#ffffff0d;display:flex;align-items:center;justify-content:space-between;padding:0 8px;font:500 8px 'JetBrains Mono',monospace;color:#A3A1AA}
.os .ic{position:absolute;left:10px;width:20px;height:20px;border-radius:6px}
.os .mwin{position:absolute;border-radius:8px;background:#1a1a20;border:1px solid #ffffff1a;box-shadow:0 12px 24px #0008;opacity:0;transform:scale(.85) translateY(8px);transition:opacity .35s,transform .45s cubic-bezier(.2,.8,.2,1)}
.os .mwin.on{opacity:1;transform:none}
.os .mwin i{position:absolute;top:6px;width:5px;height:5px;border-radius:50%;background:#3a3a42}
.os .mwin i:nth-child(1){left:7px;background:#ff5f57}.os .mwin i:nth-child(2){left:15px;background:#febc2e}.os .mwin i:nth-child(3){left:23px;background:#28c840}
.os .mterm{font:500 9px/1.5 'JetBrains Mono',monospace;color:#CFCDD4;padding:18px 9px 6px;white-space:pre}
.os .mterm .p{color:#D7FF3D}
.os .mph{position:absolute;left:10px;top:18px;width:34px;height:60px;border-radius:7px;background:#0b0b0d;border:1px solid #ffffff22;overflow:hidden}
.os .mph::before{content:"";position:absolute;inset:6px 4px auto;height:16px;border-radius:3px;background:linear-gradient(90deg,#3b2e14,#D4AF6B)}
.os .mph::after{content:"";position:absolute;left:4px;right:4px;top:26px;height:24px;background:repeating-linear-gradient(#ffffff1c 0 4px,transparent 4px 8px)}
.os .dock{position:absolute;left:50%;bottom:7px;transform:translateX(-50%);display:flex;gap:5px;padding:4px 6px;border-radius:9px;background:#ffffff12}
.os .dock span{width:12px;height:12px;border-radius:4px;transition:transform .25s}
.mini:hover .os .dock span{animation:bob .6s ease-in-out infinite alternate}
.os .dock span:nth-child(2){animation-delay:.1s!important}.os .dock span:nth-child(3){animation-delay:.2s!important}.os .dock span:nth-child(4){animation-delay:.3s!important}
@keyframes bob{to{transform:translateY(-4px)}}
/* --- Editor --- */
.pv.ed{display:grid;grid-template-columns:1.25fr .9fr;--acc:#D7FF3D;--bg:#0f0f12;--fg:#F4F2EC}
.ed .pg{position:relative;background:var(--bg);transition:background .5s;padding:16px 12px;display:flex;flex-direction:column;gap:7px}
.ed .pg .h1{height:16px;width:80%;border-radius:4px;background:var(--fg);transition:background .5s,width .5s}
.ed .pg .h2{height:16px;width:55%;border-radius:4px;background:var(--acc);transition:background .5s,width .5s}
.ed .pg .ln{height:5px;border-radius:3px;background:var(--fg);opacity:.25;transition:background .5s}
.ed .pg .bt{margin-top:6px;width:56px;height:18px;border-radius:6px;background:var(--acc);transition:background .5s,transform .4s,border-radius .5s}
.ed .pg .img{position:absolute;right:10px;bottom:12px;width:44px;height:56px;border-radius:8px;background:linear-gradient(135deg,var(--acc),transparent);opacity:.7;transition:all .5s}
.ed .sel{position:absolute;border:1.5px solid #D7FF3D;border-radius:5px;pointer-events:none;transition:all .45s cubic-bezier(.2,.8,.2,1)}
.ed .sel::after{content:attr(data-l);position:absolute;left:-1px;top:-14px;font:600 8px 'JetBrains Mono',monospace;background:#D7FF3D;color:#0B0B0D;padding:1px 4px;border-radius:3px}
.ed .cd{background:#0b0b0d;border-left:1px solid #ffffff12;padding:14px 10px;font:500 9px/1.7 'JetBrains Mono',monospace;color:#8d8b94;white-space:pre;overflow:hidden}
.ed .cd .ck{color:#b392f0}.ed .cd .cv{color:#D7FF3D}.ed .cd .hl{background:#d7ff3d22;border-radius:3px;margin:0 -4px;padding:0 4px;display:inline-block}
.ed .cur{position:absolute;left:0;top:0;width:13px;height:14px;z-index:3;transition:transform .55s cubic-bezier(.3,.7,.2,1);filter:drop-shadow(0 2px 3px #000a)}
/* --- Quest --- */
.pv.qu{background:repeating-linear-gradient(135deg,#ffffff06 0 12px,transparent 12px 24px),#0f0f12;cursor:crosshair}
.qu .hud{position:absolute;left:10px;right:10px;top:9px;display:flex;align-items:center;gap:8px;font:600 9px 'JetBrains Mono',monospace;color:#A3A1AA}
.qu .qbar{flex:1;height:5px;border-radius:3px;background:#ffffff14;overflow:hidden}
.qu .qbar div{height:100%;width:30%;background:#D7FF3D;transition:width .6s}
.qu .deal{position:absolute;left:0;top:0;padding:7px 11px;border-radius:10px;background:#D7FF3D;color:#0B0B0D;font:800 13px 'Manrope',sans-serif;white-space:nowrap;box-shadow:0 8px 22px #d7ff3d44;will-change:transform}
.qu .deal small{display:block;font:600 7px 'JetBrains Mono',monospace;opacity:.7}
.qu .say{position:absolute;left:0;top:0;font:700 9px 'JetBrains Mono',monospace;color:#F4F2EC;background:#1d1d22;border:1px solid #ffffff22;padding:3px 6px;border-radius:6px;opacity:0;transition:opacity .25s;white-space:nowrap}
.qu .qhint{position:absolute;left:10px;bottom:8px;font:500 9px 'JetBrains Mono',monospace;color:#A3A1AA}
.qu .ghost{position:absolute;left:0;top:0;width:13px;height:14px;transition:opacity .3s}
@media (max-width:860px){.minis{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:min(82%,320px);overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px;margin-right:calc(-1 * max(24px,env(safe-area-inset-right)))}.mini{scroll-snap-align:start}.mini .pv{height:190px}}
`;
const CUR = '<svg viewBox="0 0 22 24"><path d="M2 2l17 9-7.5 2L8 21z" fill="#F4F2EC" stroke="#0B0B0D" stroke-width="1.6" stroke-linejoin="round"/></svg>';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const PV = {
  os: () => `<div class="mtop"><span>NaidaOS</span><span data-clock></span></div>
    <span class="ic" style="top:26px;background:#D7FF3D33"></span><span class="ic" style="top:52px;background:#ffffff1a"></span><span class="ic" style="top:78px;background:#4d5bff55"></span>
    <div class="mwin" data-w="a" style="left:48px;top:26px;width:150px;height:96px"><i></i><i></i><i></i><div class="mph"></div><div style="position:absolute;left:52px;top:22px;right:8px;display:flex;flex-direction:column;gap:5px"><span style="height:8px;width:70%;border-radius:3px;background:#F4F2EC"></span><span style="height:4px;border-radius:2px;background:#ffffff30"></span><span style="height:4px;width:80%;border-radius:2px;background:#ffffff30"></span><span style="height:11px;width:50px;margin-top:6px;border-radius:4px;background:#D4AF6B"></span></div></div>
    <div class="mwin" data-w="b" style="right:12px;top:60px;width:160px;height:104px"><i></i><i></i><i></i><div class="mterm" data-term></div></div>
    <div class="dock"><span style="background:#D7FF3D"></span><span style="background:#D4AF6B"></span><span style="background:#F0566A"></span><span style="background:#2c2c33"></span><span style="background:#4d5bff"></span></div>`,
  ed: () => `<div class="pg" data-pg><span class="h1"></span><span class="h2"></span><span class="ln" style="width:90%;margin-top:4px"></span><span class="ln" style="width:70%"></span><span class="bt" data-bt></span><span class="img"></span><span class="sel" data-sel data-l="h1"></span></div>
    <div class="cd" data-cd></div><span class="cur" data-cur>${CUR}</span>`,
  qu: () => `<div class="hud"><span>LVL <span data-lvl>3</span>/5</span><span class="qbar"><div data-bar></div></span><span>0:48</span></div>
    <span class="say" data-say></span><div class="deal" data-deal>Лови −20%<small>на мої послуги</small></div><span class="ghost" data-ghost>${CUR}</span>
    <span class="qhint" data-hint>спробуйте впіймати →</span>`,
};

/* ---------- NaidaOS: вікна відкриваються, термінал друкує ---------- */
async function runOS(el, alive) {
  const a = el.querySelector('[data-w=a]'), b = el.querySelector('[data-w=b]'), t = el.querySelector('[data-term]'), clk = el.querySelector('[data-clock]');
  const tick = () => { const d = new Date(); clk.textContent = d.toTimeString().slice(0, 5); }; tick(); setInterval(tick, 20000);
  const LINES = [['help', 'about · projects · hire'], ['open vidvazhni', '→ відкрито'], ['hire', '→ напишіть мені :)']];
  let i = 0;
  while (true) {
    await alive(); b.classList.add('on'); t.innerHTML = '';
    for (let k = 0; k < 2; k++) {
      const [cmd, out] = LINES[(i + k) % LINES.length];
      t.innerHTML += '<span class="p">~ %</span> '; for (const ch of cmd) { t.innerHTML += ch; await wait(reduce ? 0 : 70); }
      await wait(300); t.innerHTML += '\n' + out + '\n';
      if (cmd.startsWith('open')) { a.classList.add('on'); }
      await wait(700);
    }
    await wait(1600); a.classList.remove('on'); b.classList.remove('on'); await wait(700); i++;
  }
}
/* ---------- Редактор: курсор вибирає елемент, дизайн і код змінюються ---------- */
async function runED(el, alive) {
  const pv = el, pg = el.querySelector('[data-pg]'), sel = el.querySelector('[data-sel]'), cd = el.querySelector('[data-cd]'), cur = el.querySelector('[data-cur]');
  const THEMES = [
    { name: 'lime', acc: '#D7FF3D', bg: '#0f0f12', fg: '#F4F2EC' },
    { name: 'rose', acc: '#FF5C8A', bg: '#F4F2EC', fg: '#141418' },
    { name: 'gold', acc: '#D4AF6B', bg: '#101010', fg: '#F5F4EF' },
    { name: 'sky', acc: '#4D5BFF', bg: '#EEF0FF', fg: '#0d1030' },
  ];
  const code = (th, key) => [
    ['<span class="ck">.hero</span> {'],
    ['  bg: <span class="cv">' + th.bg + '</span>;', key === 'bg'],
    ['  color: <span class="cv">' + th.fg + '</span>;'],
    ['  accent: <span class="cv">' + th.acc + '</span>;', key === 'acc'],
    ['  radius: <span class="cv">' + (th.r || 6) + 'px</span>;', key === 'r'],
    ['}'],
  ].map(([l, h]) => h ? `<span class="hl">${l}</span>` : l).join('\n');
  const targets = [['.h1', 'h1'], ['[data-bt]', 'button'], ['.img', 'image'], ['.h2', 'h2']];
  let i = 0; cd.innerHTML = code(THEMES[0]);
  while (true) {
    await alive();
    const [s, label] = targets[i % targets.length], tg = pg.querySelector(s);
    const pr = pv.getBoundingClientRect(), r = tg.getBoundingClientRect();
    const x = r.left - pr.left, y = r.top - pr.top;
    cur.style.transform = `translate(${x + r.width * .6}px,${y + r.height * .6}px)`; await wait(600);
    Object.assign(sel.style, { left: (r.left - pg.getBoundingClientRect().left - 3) + 'px', top: (r.top - pg.getBoundingClientRect().top - 3) + 'px', width: r.width + 6 + 'px', height: r.height + 6 + 'px' }); sel.dataset.l = label;
    await wait(500);
    const th = { ...THEMES[(i + 1) % THEMES.length], r: [6, 12, 2, 9][i % 4] };
    Object.entries({ '--acc': th.acc, '--bg': th.bg, '--fg': th.fg }).forEach(([k, v]) => pv.style.setProperty(k, v));
    pg.querySelector('[data-bt]').style.borderRadius = th.r + 'px';
    cd.innerHTML = code(th, ['acc', 'r', 'acc', 'bg'][i % 4]);
    await wait(1300); i++;
  }
}
/* ---------- Гра: знижка тікає від справжньої мишки, а без мишки — від «привида» ---------- */
function runQU(el, alive) {
  const deal = el.querySelector('[data-deal]'), say = el.querySelector('[data-say]'), ghost = el.querySelector('[data-ghost]'), bar = el.querySelector('[data-bar]'), lvl = el.querySelector('[data-lvl]'), hint = el.querySelector('[data-hint]');
  const SAYS = ['Не так швидко!', 'Майже!', 'Ха-ха', 'Ще трошки!'];
  let W = 0, H = 0, x = 0, y = 0, vx = 0, vy = 0, px = -999, py = -999, gx = 0, gy = 0, real = false, lastReal = 0, hits = 0, sayT = 0;
  const size = () => { W = el.clientWidth; H = el.clientHeight; if (!x) { x = W * .55; y = H * .5; gx = W * .1; gy = H * .8; } };
  size(); addEventListener('resize', size);
  el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; real = true; lastReal = performance.now(); ghost.style.opacity = 0; });
  el.addEventListener('pointerleave', () => { real = false; px = py = -999; });
  let last = performance.now();
  function frame(now) {
    const dt = Math.min(3, (now - last) / 16.7); last = now;
    if (!real && now - lastReal > 1200) { // привид ганяється за знижкою
      ghost.style.opacity = 1; const tx = x + 40, ty = y + 18; gx += (tx - gx) * .045 * dt; gy += (ty - gy) * .045 * dt;
      ghost.style.transform = `translate(${gx}px,${gy}px)`; px = gx; py = gy;
    }
    const dw = deal.offsetWidth, dh = deal.offsetHeight, cx = x + dw / 2, cy = y + dh / 2, dx = cx - px, dy = cy - py, d = Math.hypot(dx, dy) || 1;
    if (d < 90) { const f = (1 - d / 90) * 2.2; vx += dx / d * f * dt; vy += dy / d * f * dt; if (now - sayT > 900) { sayT = now; say.textContent = SAYS[hits++ % SAYS.length]; say.style.opacity = 1; setTimeout(() => say.style.opacity = 0, 700);
        bar.style.width = Math.min(95, 30 + hits * 8) + '%'; lvl.textContent = Math.min(5, 3 + (hits > 3) + (hits > 6)); if (real) hint.textContent = 'майже впіймали — відкрийте гру →'; } }
    vx *= Math.pow(.9, dt); vy *= Math.pow(.9, dt); x += vx * dt; y += vy * dt;
    if (x < 6) { x = 6; vx = Math.abs(vx) + 1; } if (x > W - dw - 6) { x = W - dw - 6; vx = -Math.abs(vx) - 1; }
    if (y < 26) { y = 26; vy = Math.abs(vy) + 1; } if (y > H - dh - 22) { y = H - dh - 22; vy = -Math.abs(vy) - 1; }
    deal.style.transform = `translate(${x}px,${y}px) rotate(${Math.max(-12, Math.min(12, vx * 2))}deg)`;
    say.style.transform = `translate(${x + 6}px,${y - 18}px)`;
    if (!reduce) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function mount(host) {
  if (!document.getElementById('minis-css')) { const st = document.createElement('style'); st.id = 'minis-css'; st.textContent = css; document.head.appendChild(st); }
  host.classList.add('minis');
  host.innerHTML = CARDS.map((c) => `<a class="mini" href="${c.href}"><div class="pv ${c.key}" aria-hidden="true">${PV[c.key]()}</div>
    <div class="ft"><div><span class="n">${c.n}</span><b>${c.name}</b><span class="tx">${c.text}</span></div><span class="ar">→<span>${c.go}</span></span></div></a>`).join('');
  host.querySelectorAll('.pv').forEach((pv) => {
    let visible = false, wake = null;
    const alive = () => visible ? Promise.resolve() : new Promise((r) => { wake = r; });
    if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && wake) { wake(); wake = null; } }).observe(pv); else visible = true;
    ({ os: runOS, ed: runED, qu: runQU })[[...pv.classList].find((k) => k !== 'pv')](pv, alive);
  });
}
document.querySelectorAll('[data-minis]').forEach(mount);
})();
