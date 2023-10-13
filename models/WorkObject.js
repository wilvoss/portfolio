/// <reference path="../models/CaseStudyObject.js" />

class WorkObject {
  constructor(spec) {
    this.id = spec.id === undefined ? -1 : spec.id;
    this.name = spec.name === undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? '' : spec.description;
    this.url = spec.url == undefined ? '' : spec.url;
    this.alt = spec.alt == undefined ? '' : spec.alt;
    this.linkText = spec.linkText == undefined ? '' : spec.linkText;
    this.roleText = spec.roleText == undefined ? '' : spec.roleText;
    this.whyText = spec.whyText == undefined ? '' : spec.whyText;
    this.type = spec.type === undefined ? 'product' : spec.type;
    this.group = spec.group === undefined ? 'external links' : spec.group;
    this.backgroundImage = spec.backgroundImage === undefined ? '' : spec.backgroundImage;
    // this.isCaseStudy = spec.isCaseStudy == undefined ? false : spec.isCaseStudy;
    this.caseStudyObjects = spec.caseStudyObjects === undefined ? [] : spec.caseStudyObjects;
    this.isSelected = spec.isSelected === undefined ? false : spec.isSelected;
  }
}

var Works = [
  new WorkObject({
    id: 1,
    name: 'Like Me?',
    description: 'Casual, mobile-first, video game',
    url: 'https://bigtentgames.com/#likeme',
    alt: 'Read about the process used in creating, developing, and producing the video game Like Me?',
    linkText: 'https://bigtentgames.com/#likeme',
    roleText: 'Concept, design, code, research, marketing',
    whyText: 'Convey process and deep skillset',
    backgroundImage: 'work/likeme_thumbnail.jpg',
    group: 'case studies',
    caseStudyObjects: [
      new CaseStudyObject({
        show: false,
        html: '<h1>The finished product</h1>',
        image: 'https://www.youtube.com/embed/mgLkjLGGgu0?si=SVQBukzJ7DYLqRCl',
      }),
      new CaseStudyObject({
        show: false,
        html: '<p>This case study is a demonstration of my process in a void, working by myself. If you want to learn about my work in teams, check out my other case studies!</p>',
      }),
      new CaseStudyObject({
        html: '<h2>The challenge</h2><p>Initially, <i>Like Me?</i> was a proof-of-concept, web-based, prototype video game. While it functioned, it lacked polish and a compelling feature set. The goal was to bring this product to market as soon as possible. The core gameplay was great, but the UI was unbalanced, unintuitive, unhelpful, and somewhat unattractive. Specifically, users were unsure of where to look first, what certain icons meant, which information was useful, and how to play the game successfully without relying heavily on inference and trial and error. Features that could be added included score keeping, score sharing, and a daily call to action in addition to entirely undiscovered features at the time.</p><p>Here are what the four main screens (home, game play, game over, how to) looked like at the start of this journey:</p>',
        image: 'work/casestudies/likeme/1.png',
      }),
      new CaseStudyObject({
        html: '<h2>The solution</h2><p>You can see these four screens at the end of this process here:</p>',
        image: 'work/casestudies/likeme/2.png',
      }),
      new CaseStudyObject({
        html: '<p>After three months of hard work, the "final" product speaks for itself. In addition to creating a fantastic game, it has been released on all major app stores. Producing this game involved a ton of iteration, all of which was done in the web prototype. Instead of getting gameplay feedback from users and testers in the beginning, I worked with them to iron out the hierarchical kinks, visual anomalies, and confusing UI elements first, and then engaged with them to address gameplay issues.</p>',
      }),
      new CaseStudyObject({
        html: "<h2>A little developer context</h2><p>The <a href='https://likeme.games' target='_blank'>Like Me? prototype</a> is a progressive web app (PWA) that is built on the Vue.js framework. With a few recent exceptions, I engineered everything myself including the structure, format, html, css and javascript. I'm not a traditional developer as I have no formal education in computer science. I make code choices that are based on my experience, what I've learned from others, and what makes the most sense to me.</p><p>For example, if you crack open the developer tools and look at the html, you'll notice that I use custom elements everywhere. I do this to avoid classes, preferring to let the cascade in CSS do its thing.</p>",
        image: 'work/casestudies/likeme/3.png',
      }),
      new CaseStudyObject({
        html: '<h2>Unpacking the process</h2><p>Progress began with UI improvements like tweaking overall spacing, sizing, colors, and UX flows while generating a positive feedback loop with fellow game designers and UX designers along the way. As well, I did this when I added features that required iconography, animation, visual assets, and content by sending out texts with comparison screenshots or by updating the prototype and asking folks for their opinions. Often I would grab an existing resource, test its viability and reception, then generate my own version, only to repeat this process until I was satisfied with the results.</p>',
      }),
      new CaseStudyObject({
        html: '<p>A good example of this can be seen in my approach to giving user\'s guidance, both realtime and asynchonously. My initial attempts at a "how to" guide needed improvement. But it evolved from a poorly laid out single page modal to a polished layout, followed by version that didn\'t use imagery, but illustrated all concepts via coded design elements, and finally itereating on a full blown tutorial/oobe that really allowed users to get understand how to play.</p>',
      }),
      new CaseStudyObject({
        html: '<h2>More to come!</h2><p>Check back for more details, screenshots, and information about the process and journey of bringing this product to market.</p>',
      }),
    ],
  }),

  new WorkObject({
    id: 2,
    name: 'Impira',
    url: 'https://www.youtube.com/channel/UCDCBj9hI8mUphp-7Twc6_nA/videos',
    alt: "Watch videos about Impira 's product.",
    backgroundImage: 'work/impira_thumbnail.jpg',
  }),
  new WorkObject({
    id: 3,
    name: 'The Fight Is In Us',
    url: 'https://www.geekwire.com/2020/fight-us-blood-plasma-campaign-deploys-microsoft-bot-search-covid-19-antibodies/',
    alt: 'Read an article about The Fight Is In Us Covid Plasma Donation campaign.',
    backgroundImage: 'work/tfiiu3_thumbnail.jpg',
    type: 'website',
  }),
  new WorkObject({
    id: 4,
    name: 'Fred Hutch Cancer Center',
    url: 'https://www.fredhutch.org/en.html',
    alt: 'isit the Fred Hutch site.',
    backgroundImage: 'work/fredhutch_thumbnail.jpg',
  }),
  new WorkObject({
    id: 5,
    name: 'Microsoft Health',
    url: 'https://www.microsoft.com/microsoft-health/en-us',
    alt: 'Visit the Microsoft Health site.',
    backgroundImage: 'work/nextstart_thumbnail.jpg',
    zoomImage: 'work/nextstart_zoom.png',
  }),
  new WorkObject({
    id: 6,
    name: 'Microsoft Band 2',
    url: 'https://www.techradar.com/reviews/wearables/microsoft-band-2-1306006/review',
    alt: 'Read a review of the Microsoft Band 2.',
    backgroundImage: 'work/msband_thumbnail.jpg',
  }),
  new WorkObject({
    id: 7,
    name: 'Suplari',
    url: 'https://suplari.com',
    alt: 'Visit the Suplari site.',
    backgroundImage: 'work/suplari_thumbnail.jpg',
  }),
  new WorkObject({
    id: 8,
    name: 'Surface Remix Project',
    url: 'https://www.theverge.com/2013/9/23/4762256/surface-remix-project-hands-on-dj-setup',
    alt: 'Read a review of the Microsoft Surface Remix Project.',
    backgroundImage: 'work/remix_thumbnail.jpg',
  }),
  new WorkObject({
    id: 9,
    name: 'Big Tent Games',
    url: 'https://bigtentgames.com',
    alt: 'Visit the Big Tent Games site.',
    backgroundImage: 'work/btg_thumbnail.jpg',
    type: 'website',
  }),
  new WorkObject({
    id: 10,
    name: 'Mouse & Keyboard Center 2.0',
    url: 'https://www.microsoft.com/hardware/en-us/downloads/mouse-keyboard-center',
    alt: 'Download Mouse & Keyboard Center 2.0',
    backgroundImage: 'work/mkcenter_thumbnail.jpg',
  }),
  new WorkObject({
    id: 11,
    name: 'HTML5 Particle Engine',
    url: 'https://wilvoss.com/particles/?showsettings',
    alt: 'A simple particle generator.',
    backgroundImage: 'work/magicParticles_thumbnail.jpg',
    type: 'website',
  }),
];
