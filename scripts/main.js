let showContrast = false;

function emailMe() {
  document.location.href = 'mailto:wilvoss@me.com';
}

function loadPage() {
  swapHero();
  getContrastSetting();
  document.getElementsByTagName('article')[0].style.opacity = 1;
  var a = document.getElementsByTagName('aside')[0];
  if (a != null) a.style.opacity = 1;
}

function toggleContrast() {
  showContrast = !showContrast;
  localStorage.setItem('contrastmode', JSON.stringify(showContrast));
  applyContrast();
}

function applyContrast() {
  if (showContrast) {
    var a = document.createElement('link');
    a.setAttribute('rel', 'stylesheet');
    a.setAttribute('type', 'text/css');
    a.setAttribute('href', 'styles/accessibility.css');
    a.id = 'accessibility';
    document.getElementsByTagName('head')[0].appendChild(a);
  } else {
    document.getElementById('accessibility') != null && document.getElementsByTagName('head')[0].removeChild(document.getElementById('accessibility'));
  }
}

function getContrastSetting() {
  if (localStorage.getItem('contrastmode') !== null && localStorage.getItem('contrastmode') === 'true') {
    showContrast = true;
    applyContrast();
  }
}

function swapHero() {
  var a = ['images/OneHeroToRuleThemAll.jpg'],
    b = document.getElementById('homeHero');
  if (b != null) {
    b.style.background = 'url(' + a[Math.floor(Math.random() * a.length)] + ')';
    b.style.webkitTransform = 'translate(0px, 30px)';
    b.style.MozTransform = 'translate(0px, 30px)';
    b.style.transform = 'translate(0px, 30px)';
  }
}

window.onload = loadPage;
