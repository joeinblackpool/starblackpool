// The Star, Blackpool – one Worker serving starblackpool.co.uk.
// starblackpool.com, starblackpool.uk and every www. host 301 to the main domain,
// so all three addresses open exactly the same site without duplicate content.

const MAIN = "starblackpool.co.uk";
const ORIGIN = "https://" + MAIN;
const UPDATED = "2026-11-07";

// Opening night: banner and Event markup show until the day after, then disappear by themselves.
const OPENING_DAY = "2026-11-13";
const OPENING_ENDS = Date.parse("2026-11-14T00:00:00Z");
const preOpening = () => Date.now() < OPENING_ENDS;

const BIZ = {
  name: "The Star",
  street: "29-31 Bond Street",
  town: "Blackpool",
  postcode: "FY4 1BQ",
  phone: "07843 839288",
  phoneIntl: "+447843839288",
  email: "blackpoolstar26@gmail.com",
};
const ADDR = `${BIZ.street}, ${BIZ.town} ${BIZ.postcode}`;
const Q = encodeURIComponent(`The Star, ${ADDR}`);
const MAPS = {
  google: `https://www.google.com/maps/search/?api=1&query=${Q}`,
  apple: `https://maps.apple.com/?q=${Q}`,
  waze: `https://waze.com/ul?q=${Q}&navigate=yes`,
};

// Hero photos: WebP for modern browsers, the original JPEG for anything older.
const HEROES = { "": ["cremorne", ".55", ".35", "30%"], parlour: ["parlour", ".6", ".4", "35%"], tower: ["tower", ".55", ".35", "40%"], promenade: ["promenade", ".55", ".35", "45%"], deckchairs: ["deckchairs", ".5", ".3", "72%"] };
const HERO_FOR = { "/": "cremorne", "/whats-on": "deckchairs", "/food-and-drink": "parlour", "/find-us": "promenade", "/contact": "tower" };
const HERO_WEBP = Object.entries(HEROES).map(([cls, [img, a, b]]) =>
  `.hero${cls ? "." + cls : ""}{background-image:linear-gradient(180deg,rgba(40,4,12,${a}),rgba(40,4,12,${b}) 40%,rgba(10,4,6,.92)),image-set(url(/hero-${img}.webp) type("image/webp"),url(/hero-${img}.jpg) type("image/jpeg"))}`).join("\n");

const CSS = `:root{--bg:#0a0406;--velvet:#3d0a14;--oxblood:#5c0f1e;--crimson:#a3162b;--neon:#ff2e4d;--ink:#f7ece0;--muted:#d9bfb4;--gold:#d9b25f;--gold2:#f2d68d;--line:#6b4a1f;--panel:#1a070b}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;color:var(--ink);font:17px/1.65 Georgia,"Times New Roman",serif;background-color:var(--bg);background-image:radial-gradient(circle at 50% 0,rgba(163,22,43,.28),transparent 60%),repeating-linear-gradient(45deg,rgba(217,178,95,.035) 0 2px,transparent 2px 22px),repeating-linear-gradient(-45deg,rgba(217,178,95,.035) 0 2px,transparent 2px 22px)}
a{color:var(--gold2)}a:hover{color:#fff}
.wrap{max-width:1040px;margin:0 auto;padding:0 16px}
header{background:#050203;border-bottom:3px double var(--gold);position:relative}
header:after{content:"";position:absolute;left:0;right:0;bottom:-9px;height:6px;background:radial-gradient(circle,#ffe7b0 0 2px,rgba(255,200,120,.5) 3px,transparent 4px) 0 0/22px 6px repeat-x;pointer-events:none}
.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;padding:14px 16px}
.logo{display:flex;align-items:center;gap:12px;color:var(--gold2);text-decoration:none;font:700 26px/1 "Playfair Display",Georgia,serif;letter-spacing:1.5px;text-transform:uppercase;text-shadow:0 0 12px rgba(217,178,95,.35)}
.logo svg{width:42px;height:42px;filter:drop-shadow(0 0 6px rgba(242,214,141,.45))}
nav ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:4px 18px}
nav a{color:var(--muted);text-decoration:none;font:600 14px/1.8 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase}nav a:hover,nav a[aria-current]{color:var(--gold2)}
.hero{position:relative;padding:72px 0 56px;text-align:center;overflow:hidden;border-bottom:3px double var(--gold);background:radial-gradient(ellipse at 50% 30%,rgba(255,46,77,.22),transparent 55%),radial-gradient(circle at 50% 50%,rgba(0,0,0,.35) 0 3px,transparent 4px) 0 0/44px 44px,radial-gradient(circle at 50% 50%,rgba(0,0,0,.35) 0 3px,transparent 4px) 22px 22px/44px 44px,radial-gradient(ellipse at 50% 50%,#7a1426 0,#4a0b17 60%,#22050b 100%)}
.hero:before,.hero:after{content:"";position:absolute;top:0;bottom:0;width:14%;background:repeating-linear-gradient(90deg,#3a0711 0,#7d1427 18px,#3a0711 36px);box-shadow:inset 0 0 40px rgba(0,0,0,.6)}
.hero:before{left:0}.hero:after{right:0}
.hero .wrap{position:relative;z-index:1;max-width:780px}
.kicker{display:inline-block;color:var(--gold2);font:600 13px/1 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:4px;text-transform:uppercase;border-top:1px solid var(--gold);border-bottom:1px solid var(--gold);padding:8px 14px;margin-bottom:18px}
h1,h2,h3{font-family:"Playfair Display",Georgia,serif}
h1{font-size:clamp(34px,7vw,64px);line-height:1.08;margin:0 0 16px;font-weight:700}
h1 span{color:#ffe3e7;text-shadow:0 0 4px #fff,0 0 10px var(--neon),0 0 22px var(--neon),0 0 42px var(--neon),0 0 80px #ff0033}
h2{font-size:clamp(24px,3.8vw,34px);margin:48px 0 14px;color:var(--gold2);font-weight:700;font-style:italic}
h2:after{content:"";display:block;width:90px;height:2px;margin-top:10px;background:linear-gradient(90deg,var(--gold),transparent)}
h3{font-size:21px;margin:0 0 6px;color:var(--ink)}
.lead{font-size:clamp(18px,2.4vw,21px);color:var(--muted);max-width:720px}
.hero .lead{margin:0 auto}
.btns{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0 0}
.hero .btns{justify-content:center}
.btn{display:inline-block;padding:12px 20px;border-radius:2px;background:linear-gradient(180deg,var(--gold2),var(--gold));color:#2a0a10;font:800 15px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;text-decoration:none;border:1px solid #f7e2a8;box-shadow:0 0 0 3px rgba(217,178,95,.18)}
.btn:hover{background:#fff3cf;color:#2a0a10}
.btn.alt{background:rgba(10,4,6,.55);border:1px solid var(--gold);color:var(--gold2);box-shadow:none}
.btn.alt:hover{background:var(--gold);color:#2a0a10}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin:18px 0}
.card{position:relative;background:radial-gradient(ellipse at 50% 0,rgba(163,22,43,.35),transparent 70%),var(--panel);border:1px solid var(--gold);outline:1px solid rgba(217,178,95,.35);outline-offset:-7px;border-radius:2px;padding:24px}
.card p{margin:6px 0 0;color:var(--muted)}
.when{display:inline-block;margin-top:8px;font:700 13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:#ff8a99;text-shadow:0 0 10px rgba(255,46,77,.6)}
table{width:100%;border-collapse:collapse;margin:10px 0 0}
th,td{text-align:left;padding:10px 8px;border-bottom:1px solid rgba(217,178,95,.3);vertical-align:top}
th{color:var(--gold2);font-weight:600;width:45%}
main{padding-bottom:48px}
.note{color:var(--muted);font-size:15px;font-style:italic}
footer{border-top:3px double var(--gold);background:#050203;color:var(--muted);font-size:15px;padding:30px 0}
footer .grid{margin:0}
footer strong{color:var(--gold2);font-family:"Playfair Display",Georgia,serif;font-size:17px}
.crumbs{font:14px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:var(--muted);padding-top:22px}.crumbs a{color:var(--muted)}
@media (max-width:560px){.bar{flex-direction:column;align-items:flex-start}.hero:before,.hero:after{width:9%}.hero{padding:56px 0 44px}}
.chand{position:absolute;left:50%;top:0;width:220px;height:150px;transform:translateX(-50%);z-index:1;pointer-events:none;filter:drop-shadow(0 0 10px rgba(255,214,140,.55))}
.hero{padding-top:150px}
.hero .glow{position:absolute;left:50%;top:0;width:620px;height:460px;transform:translateX(-50%);background:radial-gradient(ellipse closest-side at 50% 30%,rgba(255,210,140,.38),rgba(255,120,90,.12) 45%,transparent 70%);pointer-events:none}
.lamp{position:absolute;top:120px;width:34px;height:34px;border-radius:50%;z-index:1;background:radial-gradient(circle at 40% 35%,#fffaf0,#ffe1a8 40%,#f2b25c 75%);box-shadow:0 0 18px 6px rgba(255,205,130,.55),0 0 70px 30px rgba(255,170,90,.22)}
.lamp:after{content:"";position:absolute;left:50%;top:100%;width:4px;height:26px;margin-left:-2px;background:linear-gradient(var(--gold2),var(--gold))}
.lamp.l{left:calc(14% + 22px)}.lamp.r{right:calc(14% + 22px)}
.kicker{border:2px solid #ff5a73;border-radius:6px;color:#ffd3da;box-shadow:0 0 6px #ff2e4d,0 0 18px rgba(255,46,77,.6),inset 0 0 8px rgba(255,46,77,.5);text-shadow:0 0 6px #ff2e4d,0 0 14px rgba(255,46,77,.8);background:rgba(20,0,4,.35)}
.bulbs{position:absolute;left:0;right:0;bottom:10px;height:12px;z-index:1;background:radial-gradient(circle,#fff6dc 0 3px,rgba(255,206,120,.55) 4px,transparent 7px) 0 0/30px 12px repeat-x}
h2{text-shadow:0 0 18px rgba(242,214,141,.25)}
.card{background:radial-gradient(ellipse at 50% -10%,rgba(255,200,120,.30),rgba(163,22,43,.25) 40%,transparent 70%),var(--panel)}
.card:before{content:"";position:absolute;left:50%;top:-7px;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fffaf0,#ffd38a 55%,#d99a3c);box-shadow:0 0 12px 4px rgba(255,200,120,.6)}
@keyframes flick{0%,18%,22%,62%,64%,100%{opacity:1}20%,63%{opacity:.55}}
@keyframes twinkle{0%,100%{opacity:1}50%{opacity:.7}}
@media (prefers-reduced-motion:no-preference){.kicker,h1 span{animation:flick 7s infinite}.bulbs,header:after{animation:twinkle 2.4s ease-in-out infinite}}
@media (max-width:560px){.hero{padding-top:130px}.chand{width:170px;height:116px}.lamp{display:none}.hero .glow{width:340px}}
.hero{background:linear-gradient(180deg,rgba(40,4,12,.55),rgba(40,4,12,.35) 40%,rgba(10,4,6,.92)),url(/hero-cremorne.jpg) center 30%/cover;padding-bottom:90px}
.hero.parlour{background:linear-gradient(180deg,rgba(40,4,12,.6),rgba(40,4,12,.4) 40%,rgba(10,4,6,.92)),url(/hero-parlour.jpg) center 35%/cover}
.hero:before,.hero:after{opacity:.92}.hero .glow,.lamp{display:none}
.hero h1{text-shadow:0 2px 18px #000}
.hero .lead{color:#fff;text-shadow:0 1px 8px #000;background:rgba(10,4,6,.55);padding:12px 18px;border-top:1px solid var(--gold);border-bottom:1px solid var(--gold)}
.hero.sub{padding:64px 0 76px}
.hero.sub .crumbs{padding:0 0 14px;color:var(--gold2)}.hero.sub .crumbs a{color:var(--gold2)}
.hero.sub h1 span{color:#ffe3e7}
.hero.tower{background:linear-gradient(180deg,rgba(40,4,12,.55),rgba(40,4,12,.35) 40%,rgba(10,4,6,.92)),url(/hero-tower.jpg) center 40%/cover}
.hero.promenade{background:linear-gradient(180deg,rgba(40,4,12,.55),rgba(40,4,12,.35) 40%,rgba(10,4,6,.92)),url(/hero-promenade.jpg) center 45%/cover}
.hero.deckchairs{background:linear-gradient(180deg,rgba(40,4,12,.5),rgba(40,4,12,.3) 40%,rgba(10,4,6,.92)),url(/hero-deckchairs.jpg) center 72%/cover}
.logo img{display:block;height:64px;width:auto}
.hero .brand{display:block;width:min(360px,70vw);height:auto;margin:0 auto 6px;filter:drop-shadow(0 4px 18px rgba(0,0,0,.7))}
@media (max-width:560px){.logo img{height:52px}}
.opening{display:inline-block;margin:0 0 18px;padding:10px 18px;border:2px solid var(--gold);border-radius:4px;background:rgba(10,4,6,.7);color:var(--gold2);font:800 15px/1.3 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;box-shadow:0 0 18px rgba(242,214,141,.35)}
.opening b{color:#fff;text-shadow:0 0 8px var(--neon),0 0 18px var(--neon)}
nav a{display:inline-flex;align-items:center;min-height:44px;padding:0 4px}
footer a{display:inline-block;padding:8px 0}
.crumbs a{display:inline-block;padding:6px 0}
.kicker,h1 span,.bulbs,header:after{will-change:opacity}
${HERO_WEBP}`;

const STAR = `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset=".45" stop-color="#f2b81c"/><stop offset=".7" stop-color="#ffe066"/><stop offset="1" stop-color="#b37a08"/></linearGradient></defs><rect width="64" height="64" rx="12" fill="#0a0406"/><path fill="url(#g)" fill-rule="evenodd" stroke="#7a4d00" stroke-width="1" d="M32 4l7.6 18.2 19.6 1.5-15 12.8 4.6 19.1L32 45.3 15.2 55.6l4.6-19.1-15-12.8 19.6-1.5zM32 18.5l-4.1 9.8-10.6.8 8.1 6.9-2.5 10.3 9.1-5.6 9.1 5.6-2.5-10.3 8.1-6.9-10.6-.8z"/></svg>`;

const CHANDELIER = `<svg class="chand" viewBox="0 0 220 150" aria-hidden="true"><g stroke="#d9b25f" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M110 0v38"/><path d="M110 70c-30 0-58-6-78-22M110 70c30 0 58-6 78-22M110 70c-18 0-34-4-46-12M110 70c18 0 34-4 46-12"/><path d="M32 48v-10M188 48v-10M64 58v-12M156 58v-12M110 70v-16"/></g><g fill="#d9b25f"><ellipse cx="110" cy="44" rx="16" ry="7"/><ellipse cx="110" cy="74" rx="22" ry="7"/><path d="M105 80h10l-5 18z"/></g><g fill="#fff3d6"><rect x="29" y="28" width="6" height="11" rx="1"/><rect x="185" y="28" width="6" height="11" rx="1"/><rect x="61" y="36" width="6" height="11" rx="1"/><rect x="153" y="36" width="6" height="11" rx="1"/><rect x="107" y="44" width="6" height="11" rx="1" opacity="0"/></g><g fill="#ffcf6b"><path d="M32 18c3 4 3 8 0 10-3-2-3-6 0-10zM188 18c3 4 3 8 0 10-3-2-3-6 0-10zM64 26c3 4 3 8 0 10-3-2-3-6 0-10zM156 26c3 4 3 8 0 10-3-2-3-6 0-10z"/></g><g fill="#fff" opacity=".85"><path d="M110 104l4 10-4 10-4-10z"/><path d="M84 84l3 8-3 8-3-8z"/><path d="M136 84l3 8-3 8-3-8z"/><path d="M58 70l2.5 7-2.5 7-2.5-7z"/><path d="M162 70l2.5 7-2.5 7-2.5-7z"/><circle cx="40" cy="58" r="2.5"/><circle cx="180" cy="58" r="2.5"/><circle cx="72" cy="66" r="2.5"/><circle cx="148" cy="66" r="2.5"/></g></svg>`;

function subHero(cls, inner) {
  return `<section class="hero sub ${cls}"><span class="bulbs"></span><div class="wrap">${inner}</div></section>`;
}

const PAGES = [
  { path: "/", nav: "Home" },
  { path: "/whats-on", nav: "What's on" },
  { path: "/food-and-drink", nav: "Food & drink" },
  { path: "/find-us", nav: "Find us" },
  { path: "/contact", nav: "Contact" },
];

const OPENING = [
  ["Monday to Sunday", "10am to 11:30pm"],
];
const FOOD = [
  ["Monday to Saturday", "10am to 7pm"],
  ["Sunday", "10am to 2pm, then 7:30pm to 10pm"],
];
const EVENTS = [
  { name: "Delia Rocks", days: "Every Friday and Saturday", time: "7pm to 11pm", text: "Delia Rocks at The Star, Friday and Saturday from 7pm till 11pm." },
  { name: "Lee Star Sundays", days: "Every Sunday", time: "3pm to 7pm", text: "Lee Star Sundays at The Star, from 3pm to 7pm." },
  { name: "Laura's Rock Revival", days: "Every Sunday", time: "from 7pm", text: "Laura's Rock Revival at The Star, Sunday from 7pm." },
  { name: "Monday to Thursday", days: "Monday to Thursday", time: "10am to 11:30pm", text: "Good atmosphere here, warm welcome and feel-good music." },
];

function table(rows) {
  return `<table>${rows.map(([a, b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join("")}</table>`;
}
function eventCards() {
  return `<div class="grid">${EVENTS.map(e => `<div class="card"><h3>${e.name}</h3><span class="when">${e.days}, ${e.time}</span><p>${e.text}</p></div>`).join("")}</div>`;
}
function mapButtons() {
  return `<div class="btns"><a class="btn" href="${MAPS.google}" target="_blank" rel="noopener">Google Maps</a><a class="btn alt" href="${MAPS.apple}" target="_blank" rel="noopener">Apple Maps</a><a class="btn alt" href="${MAPS.waze}" target="_blank" rel="noopener">Waze</a></div>`;
}
const callBtn = `<a class="btn" href="tel:${BIZ.phoneIntl}">Call ${BIZ.phone}</a>`;

const BODY = {
  "/": {
    title: "The Star Blackpool | Pub, Live Entertainment, Food & Drinks",
    desc: "The Star pub, Bond Street, Blackpool FY4 1BQ. Live entertainment, open mic, cabaret and food daily. Open 10am to 11:30pm.",
    html: () => `<section class="hero"><span class="glow"></span>${CHANDELIER}<span class="lamp l"></span><span class="lamp r"></span><span class="bulbs"></span><div class="wrap">
<picture><source srcset="/logo.webp" type="image/webp"><img class="brand" src="/logo.png" width="600" height="351" alt="The Star, Blackpool – pub on Bond Street"></picture>
${preOpening() ? `<span class="opening"><b>Grand opening</b> · Friday 13 November · from 10am</span><br>` : ""}<span class="kicker">Bond Street · Blackpool</span>
<h1>The <span>Star</span>, Blackpool</h1>
<p class="lead">Live entertainment, open mic nights and cabaret, food served daily and daily drinks offers on premium brands. Open 10am to 11:30pm, seven days a week, at ${ADDR}.</p>
<div class="btns">${callBtn}<a class="btn alt" href="/whats-on">What's on</a><a class="btn alt" href="/find-us">Find us</a></div>
</div></section>
<div class="wrap">
<h2>Welcome to The Star</h2>
<p>The Star is at ${BIZ.street}, Blackpool ${BIZ.postcode}. Open daily from 10am till 11:30pm, seven days a week, with live entertainment, open mic nights and cabaret, food served daily and daily drinks offers on premium brands only.</p>
<p>From Monday to Thursday you will find a good atmosphere, a warm welcome and feel-good music. Delia Rocks is on Friday and Saturday, and on Sunday it's Lee Star Sundays followed by Laura's Rock Revival.</p>
<h2>Live entertainment every weekend</h2>
${eventCards()}
<p><a href="/whats-on">See the full weekly entertainment guide</a></p>
<h2>Opening hours</h2>
<div class="grid"><div class="card"><h3>Bar</h3>${table(OPENING)}</div><div class="card"><h3>Food served</h3>${table(FOOD)}</div></div>
<h2>Food and drink</h2>
<p>Food is served every day. Monday to Saturday food is served from 10am till 7pm, and on Sunday from 10am to 2pm and again from 7:30pm to 10pm. At the bar there are daily drinks offers, and we serve premium brands only. <a href="/food-and-drink">More about food and drink at The Star</a>.</p>
<h2>Get in touch</h2>
<p>Call us on <a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a> or email <a href="mailto:${BIZ.email}">${BIZ.email}</a>. You will find us at ${ADDR}.</p>
${mapButtons()}
</div>`,
  },
  "/whats-on": {
    title: "What's On at The Star Blackpool | Live Entertainment & Cabaret",
    desc: "Live entertainment at The Star, Blackpool: Delia Rocks Fri and Sat, Lee Star Sundays, Laura's Rock Revival, open mic, cabaret.",
    html: () => `${subHero("deckchairs", `<p class="crumbs"><a href="/">Home</a> / What's on</p>
<h1>What's on at The <span>Star</span></h1>
<p class="lead">Live entertainment, open mic nights and cabaret at The Star on Bond Street, Blackpool. Here is our regular week.</p>`)}<div class="wrap">
${eventCards()}
<h2>Weekly guide</h2>
${table([
  ["Monday to Thursday", "Good atmosphere, warm welcome and feel-good music"],
  ["Friday", "Delia Rocks, 7pm to 11pm"],
  ["Saturday", "Delia Rocks, 7pm to 11pm"],
  ["Sunday afternoon", "Lee Star Sundays, 3pm to 7pm"],
  ["Sunday evening", "Laura's Rock Revival, from 7pm"],
])}
<h2>Open mic and cabaret</h2>
<p>The Star hosts open mic nights and cabaret as well as our regular acts. To find out more, call <a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a> or email <a href="mailto:${BIZ.email}">${BIZ.email}</a>.</p>
<div class="btns">${callBtn}<a class="btn alt" href="/find-us">How to find us</a></div>
</div>`,
  },
  "/food-and-drink": {
    title: "Food & Drink at The Star Blackpool | Served Daily",
    desc: "Food served daily at The Star, Bond Street, Blackpool: Mon to Sat 10am to 7pm, Sunday lunch and evening. Daily drinks offers.",
    html: () => `${subHero("parlour", `<p class="crumbs"><a href="/">Home</a> / Food &amp; drink</p>
<h1>Food and drink at The Star</h1>
<p class="lead">Food served daily, and daily drinks offers on premium brands only.</p>`)}<div class="wrap">
<h2>Food serving times</h2>
<div class="card">${table(FOOD)}</div>
<p>Food is served daily. Monday to Saturday from 10am till 7pm. Sunday from 10am till 2pm, then 7:30pm till 10pm.</p>
<h2>Drinks</h2>
<p>Daily drinks offers at The Star, premium brands only. The bar is open from 10am until 11:30pm, seven days a week.</p>
<div class="btns">${callBtn}<a class="btn alt" href="/whats-on">What's on</a></div>
</div>`,
  },
  "/find-us": {
    title: "Find The Star | 29-31 Bond Street, Blackpool FY4 1BQ",
    desc: "Directions to The Star pub, 29-31 Bond Street, Blackpool FY4 1BQ. Google Maps, Apple Maps and Waze. Phone 07843 839288.",
    html: () => `${subHero("promenade", `<p class="crumbs"><a href="/">Home</a> / Find us</p>
<h1>Find The Star</h1>
<p class="lead">${ADDR}</p>`)}<div class="wrap">
${mapButtons()}
<h2>Getting here</h2>
<p>The Star is at ${BIZ.street} in Blackpool. For a sat nav, use the postcode ${BIZ.postcode}. Tap Google Maps, Apple Maps or Waze above and your phone will plan the route to our door. If you get lost, call us on <a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a> and we will talk you in.</p>
<p>The bar is open from 10am until 11:30pm every day, so you can drop in any time. Food is served from 10am, and at the weekend there is live entertainment: Delia Rocks on Friday and Saturday from 7pm, then Lee Star Sundays and Laura's Rock Revival on Sunday. <a href="/whats-on">See what's on this week</a>.</p>
<h2>Contact</h2>
${table([
  ["Address", `${BIZ.name}<br>${BIZ.street}<br>${BIZ.town}<br>${BIZ.postcode}`],
  ["Phone", `<a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a>`],
  ["Email", `<a href="mailto:${BIZ.email}">${BIZ.email}</a>`],
])}
<h2>Opening hours</h2>
<div class="grid"><div class="card"><h3>Bar</h3>${table(OPENING)}</div><div class="card"><h3>Food served</h3>${table(FOOD)}</div></div>
</div>`,
  },
  "/contact": {
    title: "Contact The Star Blackpool | Phone, Email & Opening Hours",
    desc: "Contact The Star, 29-31 Bond Street, Blackpool FY4 1BQ. Call 07843 839288 or email us. Open 10am to 11:30pm every day.",
    html: () => `${subHero("tower", `<p class="crumbs"><a href="/">Home</a> / Contact</p>
<h1>Contact The <span>Star</span></h1>
<p class="lead">Call, email or just pop in. We are open 10am to 11:30pm, seven days a week.</p>`)}<div class="wrap">
<h2>Get in touch</h2>
<div class="grid"><div class="card"><h3>Phone</h3><p><a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a></p><p>Call The Star about live entertainment, open mic nights, cabaret or food.</p></div>
<div class="card"><h3>Email</h3><p><a href="mailto:${BIZ.email}">${BIZ.email}</a></p><p>Email The Star any time.</p></div>
<div class="card"><h3>Visit</h3><p>${BIZ.name}<br>${BIZ.street}<br>${BIZ.town} ${BIZ.postcode}</p><p><a href="/find-us">Directions and maps</a></p></div></div>
<h2>Opening hours</h2>
<div class="grid"><div class="card"><h3>Bar</h3>${table(OPENING)}</div><div class="card"><h3>Food served</h3>${table(FOOD)}</div></div>
<div class="btns">${callBtn}<a class="btn alt" href="mailto:${BIZ.email}">Email us</a></div>
</div>`,
  },
};

const POSTAL = { "@type": "PostalAddress", streetAddress: BIZ.street, addressLocality: BIZ.town, addressRegion: "Lancashire", postalCode: BIZ.postcode, addressCountry: "GB" };

function jsonLd(path, page) {
  const url = ORIGIN + path;
  const graph = [
    {
      "@type": "BarOrPub",
      "@id": ORIGIN + "/#pub",
      name: BIZ.name,
      url: ORIGIN + "/",
      telephone: BIZ.phoneIntl,
      email: BIZ.email,
      image: [ORIGIN + "/og.png", ORIGIN + "/hero-cremorne.jpg"],
      logo: { "@type": "ImageObject", url: ORIGIN + "/logo.png", width: 600, height: 351 },
      address: POSTAL,
      hasMap: MAPS.google,
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "23:30" }],
      areaServed: { "@type": "City", name: "Blackpool" },
      currenciesAccepted: "GBP",
      publicAccess: true,
      amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Live entertainment", value: true }, { "@type": "LocationFeatureSpecification", name: "Food served daily", value: true }],
    },
    { "@type": "WebSite", "@id": ORIGIN + "/#site", url: ORIGIN + "/", name: "The Star Blackpool", publisher: { "@id": ORIGIN + "/#pub" }, inLanguage: "en-GB" },
    { "@type": "WebPage", "@id": url + "#page", url, name: page.title, description: page.desc, isPartOf: { "@id": ORIGIN + "/#site" }, about: { "@id": ORIGIN + "/#pub" }, dateModified: UPDATED, inLanguage: "en-GB" },
  ];
  if (path === "/" && preOpening()) {
    graph.push({ "@type": "Event", name: "Grand opening of The Star, Blackpool", startDate: OPENING_DAY + "T10:00:00+00:00", endDate: OPENING_DAY + "T23:30:00+00:00",
      eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: BIZ.name, address: POSTAL }, organizer: { "@type": "Organization", name: BIZ.name, url: ORIGIN + "/" },
      performer: { "@type": "PerformingGroup", name: "Delia Rocks" }, image: [ORIGIN + "/og.png"], isAccessibleForFree: true,
      description: "The Star opens on Friday 13 November, 10am till 11:30pm, with Delia Rocks from 7pm till 11pm." });
  }
  if (path !== "/") {
    const nav = PAGES.find(p => p.path === path).nav;
    graph.push({ "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: nav, item: url },
    ] });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

// The stylesheet is served as its own file, cached for a year; the version changes whenever the CSS does.
const CSS_VER = (() => { let h = 5381; for (let i = 0; i < CSS.length; i++) h = (h * 33 + CSS.charCodeAt(i)) >>> 0; return h.toString(36); })();

const FONTS = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap";

function render(path, status = 200) {
  const page = BODY[path] || {
    title: "Page not found | The Star Blackpool",
    desc: "Sorry, that page could not be found.",
    html: () => `<div class="wrap"><h1>Page not found</h1><p>Sorry, we could not find that page. <a href="/">Go to The Star home page</a>.</p></div>`,
  };
  const url = ORIGIN + path;
  const nav = PAGES.map(p => `<li><a href="${p.path}"${p.path === path ? ' aria-current="page"' : ""}>${p.nav}</a></li>`).join("");
  const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title}</title><meta name="description" content="${page.desc}">
${status === 200 ? `<link rel="canonical" href="${url}"><meta name="robots" content="index,follow,max-image-preview:large">` : `<meta name="robots" content="noindex">`}
<meta name="theme-color" content="#0a0406">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="${FONTS}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${FONTS}"></noscript>${HERO_FOR[path] && BODY[path] ? `<link rel="preload" as="image" href="/hero-${HERO_FOR[path]}.webp" type="image/webp" fetchpriority="high">` : ""}<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website"><meta property="og:site_name" content="The Star Blackpool"><meta property="og:locale" content="en_GB">
<meta property="og:title" content="${page.title}"><meta property="og:description" content="${page.desc}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="The Star, 29-31 Bond Street, Blackpool">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${page.title}"><meta name="twitter:description" content="${page.desc}"><meta name="twitter:image" content="${ORIGIN}/og.png">
${status === 200 ? `<script type="application/ld+json">${jsonLd(path, page)}</script>` : ""}
<link rel="stylesheet" href="/style.css?v=${CSS_VER}"></head><body>
<header><div class="wrap bar"><a class="logo" href="/"><picture><source srcset="/logo-sm.webp" type="image/webp"><img src="/logo-sm.png" width="150" height="88" alt="The Star, Blackpool"></picture></a><nav aria-label="Main"><ul>${nav}</ul></nav></div></header>
<main>${page.html()}</main>
<footer><div class="wrap grid">
<div><strong>The Star</strong><br>${BIZ.street}<br>${BIZ.town} ${BIZ.postcode}</div>
<div><strong>Contact</strong><br><a href="tel:${BIZ.phoneIntl}">${BIZ.phone}</a><br><a href="mailto:${BIZ.email}">${BIZ.email}</a></div>
<div><strong>Open daily</strong><br>10am to 11:30pm<br>Seven days a week</div>
</div></footer></body></html>`;
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" } });
}

const ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${STAR.replace(/<svg[^>]*>/, "").replace("</svg>", "")}</svg>`;

function sitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map(p => `<url><loc>${ORIGIN}${p.path}</loc><lastmod>${UPDATED}</lastmod></url>`).join("\n")}\n</urlset>\n`;
}
const ROBOTS = `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
const LLMS = `# The Star, Blackpool\n\n> The Star, ${ADDR}. Open 10am to 11:30pm, seven days a week. Live entertainment, open mic nights and cabaret. Food served daily. Daily drinks offers, premium brands only.\n\n- Phone: ${BIZ.phone}\n- Email: ${BIZ.email}\n- Food: Monday to Saturday 10am to 7pm; Sunday 10am to 2pm and 7:30pm to 10pm\n- Entertainment: Delia Rocks (Friday and Saturday 7pm to 11pm); Lee Star Sundays (3pm to 7pm); Laura's Rock Revival (Sunday from 7pm); feel-good music Monday to Thursday\n\n## Pages\n${PAGES.map(p => `- [${p.nav}](${ORIGIN}${p.path})`).join("\n")}\n`;

const SECURITY = {
  "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-frame-options": "SAMEORIGIN",
};

async function handle(request, env) {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  // Every other domain (and www, and http) goes to the one main address.
  if (host !== MAIN || url.protocol !== "https:") {
    if (host.endsWith("workers.dev") || host === "localhost" || host === "127.0.0.1") {
      // allow previews
    } else {
      return Response.redirect(ORIGIN + url.pathname + url.search, 301);
    }
  }
  let path = url.pathname;
  if (path.length > 1 && path.endsWith("/")) return Response.redirect(ORIGIN + path.slice(0, -1) + url.search, 301);
  if (path === "/index.html") return Response.redirect(ORIGIN + "/", 301);

  if (BODY[path]) return render(path);
  const txt = (body, type, age = 86400) => new Response(body, { headers: { "content-type": type, "cache-control": `public, max-age=${age}` } });
  switch (path) {
    case "/robots.txt": return txt(ROBOTS, "text/plain; charset=utf-8");
    case "/sitemap.xml": return txt(sitemap(), "application/xml; charset=utf-8");
    case "/llms.txt": return txt(LLMS, "text/plain; charset=utf-8");
    case "/favicon.svg": return txt(ICON, "image/svg+xml", 31536000);
    case "/style.css": {
      const r = txt(CSS, "text/css; charset=utf-8", 31536000);
      if (url.searchParams.get("v") === CSS_VER) r.headers.set("cache-control", "public, max-age=31536000, immutable");
      else r.headers.set("cache-control", "public, max-age=300");
      return r;
    }
    case "/favicon.ico": return Response.redirect(ORIGIN + "/favicon.svg", 301);
  }
  // Binary assets (og.png, apple-touch-icon.png) and verification files come from the assets folder.
  if (env && env.ASSETS) {
    const r = await env.ASSETS.fetch(request);
    if (r.status !== 404) {
      if (r.status !== 200 || !/\.(png|jpe?g|webp|svg|ico)$/i.test(path)) return r;
      const out = new Response(r.body, r);
      out.headers.set("cache-control", "public, max-age=86400, stale-while-revalidate=604800");
      return out;
    }
  }
  return render(path, 404);
}

export default {
  async fetch(request, env) {
    const res = await handle(request, env);
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(SECURITY)) out.headers.set(k, v);
    // Preview addresses (workers.dev) must never compete with the real domain on Google.
    if (new URL(request.url).hostname.endsWith("workers.dev")) out.headers.set("x-robots-tag", "noindex, nofollow");
    return out;
  },
};
