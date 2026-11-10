
function getTheme(){ return localStorage.getItem('davinci-theme') || 'system'; }
function applyTheme(t){ document.documentElement.setAttribute('data-theme', t); localStorage.setItem('davinci-theme', t); const label=document.getElementById('themeLabel'); if(label) label.textContent = t.toUpperCase() + (t==='system' ? ' (DEFAULT)' : ''); const icon=document.getElementById('themeIcon'); if(icon) icon.textContent = t==='light' ? '☀️' : t==='mid' ? '🌤️' : t==='dark' ? '🌙' : '💻'; }
function cycleTheme(){ const order=['system','light','mid','dark']; const cur=getTheme(); const next=order[(order.indexOf(cur)+1)%order.length]; applyTheme(next); }
function toggleMenu(){ document.getElementById('hamburgerMenu')?.classList.toggle('open'); }
document.addEventListener('DOMContentLoaded', ()=>{ applyTheme(getTheme()); document.addEventListener('click', (e)=>{ const dd=document.querySelector('.dropdown'); if(dd && !dd.contains(e.target)) document.getElementById('hamburgerMenu')?.classList.remove('open'); }); });
