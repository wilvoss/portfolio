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
    showCompactHeader: false,
    zoomedImage: '',
    modalContainer: null,
    onionskinContainer: null,
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
      if (this.showModal) {
        this.showOnion = !this.showOnion;
      }
      if (this.showOnion) {
        this.onionskinContainer = document.getElementsByTagName('onionskin')[0];
        this.onionskinContainer.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },

    SelectWork(_work, _toggleModal = true) {
      if (_work.caseStudyObjects.length === 0 && _work.url !== '') {
        window.open(_work.url);
      } else if (_toggleModal) {
        // this.ZoomImage(_work.zoomImage);
        this.ToggleShowModal();
      }
      this.selectedWork = _work;
      if (_work.caseStudyObjects.length > 0) {
        history.replaceState(null, null, window.location.origin + '?csid=' + _work.id);
      }
      this.modalContainer = document.getElementsByTagName('modal')[0];
      console.log(this.modalContainer);
      window.setTimeout(function () {
        app.modalContainer.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 50);
    },

    PreviousWork() {
      let currentIndex = this.activeWorks.indexOf(this.selectedWork);
      if (currentIndex === 0) currentIndex = this.activeWorks.length;
      this.SelectWork(this.activeWorks[currentIndex - 1], false);
    },

    NextWork() {
      let currentIndex = this.activeWorks.indexOf(this.selectedWork);
      if (currentIndex === this.activeWorks.length - 1) currentIndex = -1;
      this.SelectWork(this.activeWorks[currentIndex + 1], false);
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

    HandleKeyUpEvent(e) {
      switch (e.key) {
        case 'Escape':
          if (this.showOnion) {
            this.ToggleShowOnionSkin();
          } else if (this.showModal) {
            this.ToggleShowModal();
          }
          break;

        default:
          break;
      }
    },
  },

  mounted() {
    this.LoadPage();
    window.addEventListener('resize', this.CheckZoom);
    window.addEventListener('keyup', this.HandleKeyUpEvent);
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
