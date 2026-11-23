const PRODUCTS=[{"name": "Brew 21 ground", "price": 22, "cat": "Coffee", "url": "https://store.brew21.coffee/product/brew-21-ground/R6WQ3GUZQ6QWI2AH5ISUVUND", "img": "/assets/img/product-brew-21-ground.webp", "home": true, "contain": false}, {"name": "Brew 21 whole bean", "price": 22, "cat": "Coffee", "url": "https://store.brew21.coffee/product/brew-21-whole-bean/QM4VHX2Z5CRA3UUHZXMQANO4", "img": "/assets/img/product-brew-21-whole-bean.webp", "home": true, "contain": false}, {"name": "Extra Chromosome Coffee ground", "price": 22, "cat": "Coffee", "url": "https://store.brew21.coffee/product/extra-chromosome-coffee-ground/5KFVMDFSYVL3KPHTBP3XK76N", "img": "/assets/img/product-extra-chromosome-coffee-ground.webp", "home": false, "contain": false}, {"name": "Extra Chromosome Coffee whole bean", "price": 22, "cat": "Coffee", "url": "https://store.brew21.coffee/product/extra-chromosome-coffee-whole-bean/4Q5LIDVHEL53WDN2NXDZLZQ7", "img": "/assets/img/product-extra-chromosome-coffee-ground.webp", "home": false, "contain": false}, {"name": "Lemonade", "price": 3, "cat": "Menu", "url": "https://store.brew21.coffee/product/lemonade/65", "img": "/assets/img/product-lemonade.webp", "home": true, "contain": false}, {"name": "Coffee mug", "price": 16, "cat": "Merchandise", "url": "https://store.brew21.coffee/product/coffee-mug/5UL5IUTEUIWHNHWL6NO5DEBD", "img": "/assets/img/product-coffee-mug.webp", "home": true, "contain": false}, {"name": "T-shirt", "price": 30, "cat": "Merchandise", "url": "https://store.brew21.coffee/product/t-shirt/F4SDDWUUQLLAETBOLDACZH7W", "img": "/assets/img/product-t-shirt.webp", "home": false, "contain": true}, {"name": "Hat", "price": 35, "cat": "Merchandise", "url": "https://store.brew21.coffee/product/hat/VI5E7WVRDLFTX7Q4IEBZ7FTW", "img": "/assets/img/product-hat.webp", "home": false, "contain": true}, {"name": "Sticker", "price": 1.5, "cat": "Merchandise", "url": "https://store.brew21.coffee/product/sticker/50", "img": "/assets/img/product-sticker.webp", "home": false, "contain": false}];
const FEED=[{"img": "/assets/img/instagram-1.webp", "alt": "Friday night is Art Walk on C-street! We will be OPEN-5:00-8:00pm come see us 🎨🖌️🖼️"}, {"img": "/assets/img/instagram-2.webp", "alt": ""}, {"img": "/assets/img/instagram-3.webp", "alt": "TOMMORROW only, with the purchase of a pumpkin drink, you get a pumpkin roll!!!! 🧋✨"}, {"img": "/assets/img/instagram-4.webp", "alt": "What a BUSY weekend for Brew 21! ☕️🤎 From serving up coffee at a festival, to a fun-filled weekend at the shop, and celebrating all our friends at the Buddy Walk—we are so thankful for every opportunity to be out in our community! Thank you for your continued support and love! ❤️ #extrachromosomecoffee #coffeematters #morealikethandifferent💙💛"}, {"img": "/assets/img/instagram-5.webp", "alt": "Happy 18th birthday to the guy that started it all, our son Wyatt, Brew 21 CEO. 🎉 Wyatt is the life of every party, thoughtful, kind, and has the biggest heart!!❤️ He is so proud of his business and excited for his future! His favorite drink is of course his JW! 🧋🍰"}, {"img": "/assets/img/instagram-6.webp", "alt": "Halloween weekend was SO much fun!! Thank you all for celebrating a fun day with us! 🎶🎤🎃👻🍪☕️🍩"}, {"img": "/assets/img/instagram-7.webp", "alt": "Happy birthday Chris!! Everyone’s favorite, 🤟🏻they were all excited to make him a video! ♥️🎂 Chris keeps everything going, is so creative, and is always there for us all!! We love you and wish you the best day!🎁❣️🫶"}, {"img": "/assets/img/instagram-8.webp", "alt": "We’re on a mission to bring Brew 21 coffee to more places! From local coffee bars and churches to offices and businesses, we would love to see our coffee become part of your everyday routine. Every bag of coffee has a purpose beyond the cup. When you choose Brew 21, you’re helping us create meaningful opportunities for young adults with unique abilities to learn, grow, work, and thrive. Know a local coffee bar, church, or business that would love to serve or carry our coffee? We would LOVE an introduction! 🤎 🫶Tag them in this post for a chance to win a 1 lb bag of beans! #coffee #extrachromosomecoffee #makingadifferenceeveryday #417coffee"}];
const IG="https://www.instagram.com/extrachromosomecoffee/";
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const money=n=>"$"+n.toFixed(2);
function card(p){return `<li class="item"><a href="${p.url}"><div class="ph${p.contain?" contain":""}"><img src="${p.img}" alt="${esc(p.name)}" loading="lazy"></div><b>${esc(p.name)}</b><span>${money(p.price)}</span></a></li>`}
$("#g-home").innerHTML=PRODUCTS.filter(p=>p.home).map(card).join("");
$("#s-home").innerHTML=FEED.slice(0,8).map(f=>`<a href="${IG}"><img src="${f.img}" alt="${esc(f.alt)}" loading="lazy">${f.alt?`<span class="cap" aria-hidden="true"><span>${esc(f.alt)}</span></span>`:""}</a>`).join("");
(()=>{
  const strip=$("#s-home");let timer=null,held=false;
  const clearShown=()=>strip.querySelectorAll(".show").forEach(a=>a.classList.remove("show"));
  strip.addEventListener("pointerdown",e=>{
    if(e.pointerType==="mouse")return;
    const a=e.target.closest("a");if(!a)return;
    held=false;clearTimeout(timer);
    timer=setTimeout(()=>{held=true;clearShown();a.classList.add("show")},400);
  });
  ["pointerup","pointercancel"].forEach(ev=>strip.addEventListener(ev,()=>clearTimeout(timer)));
  document.addEventListener("pointerdown",e=>{
    if(e.pointerType==="mouse")return;
    const a=e.target.closest&&e.target.closest("#s-home a");
    if(!a||!a.classList.contains("show"))clearShown();
  });
  strip.addEventListener("click",e=>{if(held){e.preventDefault();held=false}});
  strip.addEventListener("contextmenu",e=>{if(matchMedia("(hover:none)").matches)e.preventDefault()});
})();
let cat="All";
const cats=["All","Coffee","Merchandise","Menu"];
function shop(){
  $("#chips").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c===cat}" data-c="${c}">${c==="Menu"?"Drinks":c}</button>`).join("");
  const list=PRODUCTS.filter(p=>cat==="All"||p.cat===cat);
  $("#g-shop").innerHTML=list.map(card).join("");
  $("#count").textContent=list.length+" items";
}
$("#chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b){cat=b.dataset.c;shop();}});
shop();
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  let cur=null;
  const reset=()=>{if(cur){cur.style.transform="";cur=null}};
  document.addEventListener("pointermove",e=>{
    const ph=e.target.closest&&e.target.closest(".ph");
    if(cur&&cur!==ph)reset();
    if(!ph)return;
    cur=ph;
    const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    ph.style.transform=`perspective(700px) rotateY(${(x-.5)*16}deg) rotateX(${(.5-y)*16}deg) scale(1.04)`;
    ph.style.setProperty("--gx",x*100+"%");ph.style.setProperty("--gy",y*100+"%");
  });
  document.documentElement.addEventListener("mouseleave",reset);
}
function route(){
  const h=location.hash.slice(1);
  const view=h==="shop"?h:"home";
  for(const v of ["home","shop"]) $("#v-"+v).hidden=v!==view;
  document.querySelectorAll("[data-nav]").forEach(a=>{a.dataset.nav===view?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")});
  const t=view==="home"&&h&&document.getElementById(h);
  if(t) t.scrollIntoView(); else window.scrollTo(0,0);
}
function status(){
  const f=new Intl.DateTimeFormat("en-US",{timeZone:"America/Chicago",weekday:"short",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date());
  const g=k=>f.find(p=>p.type===k).value, days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const d=days.indexOf(g("weekday")), now=+g("hour")*60+ +g("minute"), openDay=x=>x>=3&&x<=6;
  let txt,open=false;
  if(openDay(d)&&now>=480&&now<840){open=true;txt="Open now, until 2 PM"}
  else if(openDay(d)&&now<480){txt="Closed now, opens today at 8 AM"}
  else{let n=1;while(!openDay((d+n)%7))n++;txt="Closed now, opens "+(n===1?"tomorrow":days[(d+n)%7])+" at 8 AM"}
  const el=$("#status");el.textContent=txt;el.classList.toggle("open",open);
}
status();
addEventListener("hashchange",route);route();