/// <reference path="../models/CaseStudyObject.js" />
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
    showModal: false,
    showOnion: false,
    zoomedImageFits: false,
    zoomedImage: '',
    r: document.querySelector(':root'),
  },
  methods: {
    ToggleShowModal() {
      this.showModal = !this.showModal;
      if (!this.showModal) {
        history.replaceState(null, null, window.location.origin);
      }
    },

    ToggleShowOnionSkin() {
      this.showOnion = !this.showOnion;
    },

    SelectWork(_work) {
      if (_work.caseStudyObjects.length === 0 && _work.url !== '') {
        window.open(_work.url);
      } else if (_work.zoomImage !== '') {
        // this.ZoomImage(_work.zoomImage);
        this.ToggleShowModal();
      }
      this.selectedWork = _work;
      if (_work.caseStudyObjects.length > 0) {
        history.replaceState(null, null, window.location.origin + '?csid=' + _work.id);
      }
    },

    CheckZoom() {
      this.zoomedImageFits = document.getElementById('onionimage').offsetWidth < window.innerWidth;
    },

    EmailMe() {
      document.location.href = 'mailto:wilvoss@me.com';
    },

    LoadPage() {
      this.GetContrastSetting();
      let url = new URL(window.location.href);
      let csid = parseInt(url.searchParams.get('csid'));

      if (csid !== null && csid !== undefined) {
        let work = this.works.find((item) => item.id === csid);
        if (work !== null && work !== undefined && work.caseStudyObjects.length > 0) {
          this.SelectWork(work);
        }
      }
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

    OpenUrl(e, _url) {
      e.stopPropagation();
      e.preventDefault();

      window.open(_url);
    },
  },

  mounted() {
    this.LoadPage();
    window.addEventListener('resize', this.CheckZoom);
  },

  computed: {
    workGroups() {
      return this.works.reduce((grouped, item) => {
        const key = item.group;
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
      }, {});
    },

    activeWorks() {
      return this.works.filter((obj) => obj.caseStudyObjects.length > 0).flat();
    },
  },
});
