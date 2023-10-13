class CaseStudyObject {
  constructor(spec) {
    this.html = spec.html === undefined ? '' : spec.html;
    this.image = spec.image == undefined ? '' : spec.image;
    this.isMobile = spec.isMobile == undefined ? false : spec.isMobile;
    this.alt = spec.alt == undefined ? '' : spec.alt;
    this.show = spec.show === undefined ? true : spec.show;
  }
}
