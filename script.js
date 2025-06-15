function setLanguage(lang) {
  document.getElementById('lang-label').innerText =
    lang==='en' ? 'Languages' : 'اللغات';
}
function switchAvatar(i) {
  alert('Avatar '+i+' selected');
}
const langBtn      = document.getElementById('lang-btn');
const avatarBtn   = document.getElementById('avatar-btn');
const langDD      = document.getElementById('lang-dropdown');
const avatarDD    = document.getElementById('avatar-dropdown');

langBtn.addEventListener('click', e => {
  langDD.style.display = langDD.style.display==='block' ? 'none':'block';
  avatarDD.style.display='none'; e.stopPropagation();
});
avatarBtn.addEventListener('click', e => {
  avatarDD.style.display = avatarDD.style.display==='block'?'none':'block';
  langDD.style.display='none'; e.stopPropagation();
});
window.addEventListener('click', () => {
  langDD.style.display='none';
  avatarDD.style.display='none';
});
