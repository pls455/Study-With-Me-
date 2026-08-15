window.SWM = window.SWM || {};
(function(){
  const page = location.pathname.split('/').pop() || 'index.html';
  const nav = [
    ['index.html','الرئيسية','⌂'],['subjects.html','المواد','📚'],['library.html','المكتبة','📂'],['exams.html','الاختبارات','📝'],['tools.html','أدوات الطالب','🧰'],['schools.html','الاستدراكية','🏫'],['branches.html','الفروع','🧭'],['search.html','بحث','🔎']
  ];
  function render(){
    const n=document.querySelector('[data-navbar]');
    if(n) n.innerHTML=`<header class="navbar"><div class="nav-inner"><a class="brand" href="index.html"><span class="brand-mark">✦</span><span><strong>ادرس معي</strong><small>Study With Me</small></span></a><button class="menu-btn" data-menu aria-label="فتح القائمة">☰</button><nav class="desktop-nav" aria-label="التنقل الرئيسي">${nav.map(([u,t,i])=>`<a class="nav-link ${page===u?'active':''}" href="${u}"><span>${i}</span>${t}</a>`).join('')}<button class="theme-btn" data-theme aria-label="تبديل الوضع">🌙</button></nav></div><div class="mobile-menu" data-mobile-menu>${nav.map(([u,t,i])=>`<a class="nav-link ${page===u?'active':''}" href="${u}">${i} ${t}</a>`).join('')}<button class="nav-link" data-theme>🌙 الوضع</button></div></header>`;
    const b=document.querySelector('[data-bottom-nav]');
    if(b) b.innerHTML=`<nav class="bottom-nav" aria-label="تنقل الهاتف">${[['index.html','الرئيسية','⌂'],['library.html','المكتبة','📂'],['exams.html','الاختبارات','📝'],['tools.html','الأدوات','🧰'],['search.html','بحث','🔎']].map(([u,t,i])=>`<a class="bottom-link ${page===u?'active':''}" href="${u}"><span>${i}</span>${t}</a>`).join('')}</nav>`;
    const f=document.querySelector('[data-footer]'); if(f) f.innerHTML=`<footer class="footer"><div><strong>ادرس معي</strong><span>Study With Me</span></div><p>منصة تعليمية مجانية لطلاب غزة.</p><p class="muted">جميع المصادر روابط خارجية وليست مستضافة على الموقع.</p><p>صُنع بحب لخدمة طلاب غزة ❤️<br><strong>أبو إبراهيم</strong></p></footer>`;
  }
  function theme(){ const saved=localStorage.getItem('swm-theme')||'dark'; document.documentElement.dataset.theme=saved; document.querySelectorAll('[data-theme]').forEach(b=>b.textContent=saved==='dark'?'☀️':'🌙'); }
  document.addEventListener('click',e=>{const m=e.target.closest('[data-menu]');if(m){document.querySelector('[data-mobile-menu]')?.classList.toggle('open')} const t=e.target.closest('[data-theme]');if(t){const next=(document.documentElement.dataset.theme||'dark')==='dark'?'light':'dark';localStorage.setItem('swm-theme',next);theme();}});
  document.addEventListener('DOMContentLoaded',()=>{render();theme();});
})();
