class CaseStudyObject {
  constructor(spec) {
    this.html = spec.html === undefined ? '' : spec.html;
    this.afterImageHtml = spec.afterImageHtml === undefined ? '' : spec.afterImageHtml;
    this.image = spec.image == undefined ? '' : spec.image;
    this.imageZoomed = spec.imageZoomed == undefined ? '' : spec.imageZoomed;
    this.images = spec.images == undefined ? [] : spec.images;
    this.imagesZoomed = spec.imagesZoomed == undefined ? [] : spec.imagesZoomed;
    this.isMobile = spec.isMobile == undefined ? false : spec.isMobile;
    this.alt = spec.alt == undefined ? '' : spec.alt;
    this.show = spec.show === undefined ? true : spec.show;
    this.darkBackground = spec.darkBackground === undefined ? false : spec.darkBackground;
  }
}
