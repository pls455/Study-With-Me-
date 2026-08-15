window.SWM = window.SWM || {};
SWM.state = { data: null };
SWM.loadData = async function(){
  if (SWM.state.data) return SWM.state.data;
  try {
    const res = await fetch('data/content.json', {cache:'no-store'});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    SWM.state.data = await res.json();
    return SWM.state.data;
  } catch (err) {
    console.error('Failed to load content.json', err);
    const box = document.querySelector('[data-load-error]');
    if (box) { box.hidden = false; box.textContent = 'تعذر تحميل المحتوى حالياً. حاول تحديث الصفحة.'; }
    return null;
  }
};
SWM.esc = function(v=''){ return String(v).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); };
SWM.branchName = function(data,id){ return data?.branches?.find(x=>x.id===id)?.name || (id==='all'?'كل الفروع':id||''); };
SWM.resourceIcon = function(type){ return ({folder:'📂',pdf:'📄',exam:'📝',quiz:'📝',form:'📝',document:'📑',telegram:'✈️',external:'🔗','online-exam':'📝',video:'🎬'}[type]||'🔗'); };
SWM.typeName = function(type){ return ({folder:'مجلد',pdf:'PDF',exam:'اختبار',quiz:'اختبار',form:'Google Forms',document:'Google Docs',telegram:'Telegram',external:'مصدر خارجي','online-exam':'اختبار إلكتروني',video:'فيديو'}[type]||type||'مصدر'); };
SWM.getFavorites = function(key='swm-favorites'){ try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]} };
SWM.toggleFavorite = function(id,key='swm-favorites'){ const s=new Set(SWM.getFavorites(key)); s.has(id)?s.delete(id):s.add(id); localStorage.setItem(key,JSON.stringify([...s])); return s.has(id); };
SWM.isFavorite = (id,key='swm-favorites')=>SWM.getFavorites(key).includes(id);
