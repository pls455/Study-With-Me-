window.SWM = window.SWM || {};
SWM.favoriteButton = function(id, label='المفضلة'){ return `<button class="icon-btn fav-btn ${SWM.isFavorite(id)?'is-fav':''}" data-favorite="${SWM.esc(id)}" aria-label="${label}" title="${label}">${SWM.isFavorite(id)?'⭐':'☆'}</button>`; };
SWM.bindFavorites = function(root=document){ root.addEventListener('click',e=>{const b=e.target.closest('[data-favorite]');if(!b)return;const active=SWM.toggleFavorite(b.dataset.favorite);b.classList.toggle('is-fav',active);b.textContent=active?'⭐':'☆';}); };
