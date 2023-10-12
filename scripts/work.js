/// <reference path="../models/WorkObject.js" />

// if (!UseDebug) {
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
// }

Vue.config.ignoredElements = ['app', 'page', 'navbar', 'settings', 'splash', 'splashwrap', 'message', 'notifications', 'speedControls', 'state', 'bank', 'commodity', 'detail', 'pageover', 'listheader', 'listings', 'category', 'name', 'units', 'currentPrice', 'description', 'market', 'currentValue', 'contractSize', 'goldbacking', 'contractUnit'];

var app = new Vue({
  el: '#app',
  data: {
    works: Works,
    showContrast: false,
    showArticle: false,
    year: new Date().getFullYear(),
    selectedWork: null,
    showOnionskin: false,
    r: document.querySelector(':root'),
  },
  methods: {
    ToggleShowOnionSkin() {
      this.showOnionskin = !this.showOnionskin;
      if (!this.showOnionskin && document.getElementById('onionvideo') != undefined) {
        document.getElementById('onionvideo').pause();
      } else if (document.getElementById('onionvideo') != undefined) {
        document.getElementById('onionvideo').play();
      }
    },

    SelectWork(_work) {
      if (_work.zoomImages.length === 0 && _work.url !== '') {
        window.open(_work.url);
      } else if (_work.zoomImage !== '') {
        // this.ZoomImage(_work.zoomImage);
        this.ToggleShowOnionSkin();
      }
      this.selectedWork = _work;
    },

    EmailMe() {
      document.location.href = 'mailto:wilvoss@me.com';
    },

    LoadPage() {
      this.GetContrastSetting();
      window.setTimeout(function () {
        app.showArticle = true;
      }, 10);
    },

    ToggleContrast() {
      this.showContrast = !this.showContrast;
      localStorage.setItem('contrastmode', JSON.stringify(this.showContrast));
    },

    GetContrastSetting() {
      if (localStorage.getItem('contrastmode') !== null && localStorage.getItem('contrastmode') === 'true') {
        this.showContrast = true;
      }
    },
  },

  mounted() {
    this.LoadPage();
  },

  computed: {},
});
