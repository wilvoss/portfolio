/// <reference path="../models/CaseStudyObject.js" />

class WorkObject {
  constructor(spec) {
    this.id = spec.id === undefined ? -1 : spec.id;
    this.name = spec.name === undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? '' : spec.description;
    this.url = spec.url == undefined ? '' : spec.url;
    this.alt = spec.alt == undefined ? '' : spec.alt;
    this.heroImage = spec.heroImage === undefined ? '' : spec.heroImage;
    this.linkText = spec.linkText == undefined ? '' : spec.linkText;
    this.tileText = spec.tileText == undefined ? '' : spec.tileText;
    this.resultText = spec.resultText == undefined ? '' : spec.resultText;
    this.roleText = spec.roleText == undefined ? '' : spec.roleText;
    this.readTime = spec.readTime === undefined ? '5 minutes' : spec.readTime;
    this.whyText = spec.whyText == undefined ? '' : spec.whyText;
    this.type = spec.type === undefined ? 'product' : spec.type;
    this.group = spec.group === undefined ? 'external links' : spec.group;
    this.backgroundImage = spec.backgroundImage === undefined ? '' : spec.backgroundImage;
    this.isCaseStudy = spec.isCaseStudy == undefined ? false : spec.isCaseStudy;
    this.caseStudyObjects = spec.caseStudyObjects === undefined ? [] : spec.caseStudyObjects;
    this.feedbackImages = spec.feedbackImages === undefined ? [] : spec.feedbackImages;
    this.isSelected = spec.isSelected === undefined ? false : spec.isSelected;
  }
}

var Works = [
  new WorkObject({
    id: 1,
    isCaseStudy: true,
    name: 'Like Me?',
    tileText: 'Like Me? Video Game',
    description: 'Casual, mobile-first, video game',
    url: 'https://bigtentgames.com/likeme.html',
    alt: 'Read about the process used in creating, developing, and producing the video game "Like Me?"',
    readTime: '7 to 10 minutes',
    backgroundImage: 'work/likeme_thumbnail.jpg',
    resultText: '5-star rating in app store',
    linkText: 'https://bigtentgames.com/likeme.html',
    roleText: 'Concepting, design, code, research',
    group: 'use cases',
    feedbackImages: ['work/casestudies/likeme/feedback-1.png', 'work/casestudies/likeme/feedback-3.png', 'work/casestudies/likeme/feedback-8.png', 'work/casestudies/likeme/feedback-9.png', 'work/casestudies/likeme/feedback-4.png', 'work/casestudies/likeme/feedback-5.png', 'work/casestudies/likeme/feedback-6.png', 'work/casestudies/likeme/feedback-2.png', 'work/casestudies/likeme/feedback-7.png'],
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
        html: '<h2>The challenge</h2><p>“Like Me?” initially debuted as a web-based proof-of-concept video game that I created for fun. I revitalized the project with the goal of bringing it to market as swiftly as possible. Despite the core gameplay being exceptional, the UX unfortunately fell short, as it was unintuitive, unhelpful, and somewhat unappealing. Specifically, users struggled to understand where to focus their attention, the meaning of certain visuals, and how to successfully play the game. There was also room for enhancements like score keeping and social sharing, as well as updated daily content.</p><p>Here are what the four main screens (home, gameplay, game over, how to play) looked like at the start:</p>',
        image: 'work/casestudies/likeme/1.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h2>The solution</h2><p>You can see those same four screens at the end of this process here:</p>',
        image: 'work/casestudies/likeme/2.png',
        afterImageHtml:
          '<p>After three months of diligent work, the "final" product, now available on all major app stores, <a href="https://likeme.games" target="_blank">speaks for itself</a>. Producing this game involved much iteration, all of which was done in the web prototype. It also showcases a more organic process than the formal, team-oriented processes you\'ll find in my other case study. Although proud of my achievements, I know for a fact that this product would be better if I was working with a full team and not just the users.</p>',
      }),
      new CaseStudyObject({
        html: '<h3>Unpacking the process</h3><p>Progress began with UI improvements like tweaking overall spacing, sizing, colors, and UX flows while generating a positive feedback loop with players, fellow game designers, and UX designers along the way. I did this when adding features that required new iconography, animation, visual assets, and content by sending out texts with comparison screenshots or by updating the prototype and asking folks for their opinions. Often, I would grab an existing resource, test its viability and reception, then generate my own version, only to repeat this process until I was satisfied with the results.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: How To Play</h4><p>This methodology can be seen in my approach to giving user\'s guidance, both realtime and asynchronously. My initial attempt at a "how to" guide needed improvement as players had frequently failed to grasp how to play, even after reading the instructions. By watching new users play the game for the first time, then asking them questions, I was able to get continuous feedback for improvement. Gradually, it evolved (with many small steps in between):</p>',
        image: 'work/casestudies/likeme/4.png',
      }),
      new CaseStudyObject({
        html: '<ol><li>cluttered and confusing single page modal</li><li>polished layout with clear navigation and more thorough guidance</li><li>increased description and guidance with steps outline</li><li>full blown tutorial/oobe that really helped users with gameplay fundamentals</li></ol><p>Eventually, I added animations and interactions that emphasized key elements of gameplay. At one point I had a simple welcome screen for first time players, but chose to present the tutorial as the first time run or OOBE. Each step of the way, I asked for input from others and incorporated their feedback as needed. The final OOBE/tutorial can be seen in the following video.</p>',
        image: 'https://player.vimeo.com/video/874206343?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Home</h4><p>This is what the home screen looked like during the same versions as the How To Play screens in the previous example:</p>',
        image: 'work/casestudies/likeme/5.png',
        afterImageHtml:
          '<ol><li>hierarchy issues and clunky visuals</li><li>polished layout with clear navigation and the addition of a "Hints" preference</li><li>hints moved to settings, clearer guidance and labels, additional features</li><li>the daily challenge, refined iconography, new game mode</li></ol><p>There\'s a fair bit going on here, but important to note, my work was holistic. As I made changes in certain areas of the UX, this impacted every part of the experience. These few home screen versions demonstrate UX, UI, layout, feature, gameplay, and even marketing adjustments. All of this was done with constant feedback from players and industry experts.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: Hints</h4><p>The addition of hints and a settings toggle reflects feedback from a specific user who wanted more guidance during the game. In addition to recognizing that games let advanced players opt out of certain features like "Hints", I ultimately addressed the functional need for hints in multiple ways:</p>',
        image: 'work/casestudies/likeme/6.png',
      }),
      new CaseStudyObject({
        html: '<ul><li>if the player hasn\'t selected any correct pieces, they get a one-time notification 7 seconds into their first game</li><li>if they haven\'t tapped the "Me" piece after 25 seconds, they get a one-time notification</li><li>two unsuccessful attempts to clear a level prompts both a notification and an animation of a relevant piece on the board (shakes for "don\'t pick me", bounces and rotates for "pick me!")</li><li>you can see the final resting place for the hints toggle, now named "Tips and Hints"</li></ul>',
        image: 'https://player.vimeo.com/video/874238162?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479',
      }),
      new CaseStudyObject({
        html: "<p>The delivery of these hints and tips went through multiple versions. For me, seeing that settings screen introduces a set of features and improvements that I'm eager to go over, but first I want to talk about accessibility.</p>",
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Accessibility</h4><p>Early on, in the original prototype, I chose the initial colors with a mind towards accessibllity. I also chose patterns and shapes with this feature in mind. The default colors are each based on some variant of red, green, and blue, and then tested to ensure their uniqueness was preserved for most users with a color vision deficiency. In addition, the values needed to stand up for someone who had set their accessibility options to display all content in grayscale.</p>',
        image: 'work/casestudies/likeme/7.png',
        afterImageHtml:
          '<ol><li>baseline - vision shared by most people</li><li>protanopia - vision in which the retina doesn\'t to respond to red or green</li><li>deuteranopia - vision that tends towards muted red and green colors</li><li>tritanopia - vision with a greenish/pink tone</li><li>grayscale</li></ol><p>These are all approximations and cannot replace an actual player\'s experience if they have a color vision deficiency. Support for PC gameplay with keyboard shortcuts opened "Like Me?" up to an even larger audience. That said, I wanted to make the game accessible to as many people as possible which is why personalization became a high priority.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: Personalization</h4><p>In keeping with a player-first mindset, I decided to extend the options for gameplay colors, patterns, and even shapes. Twelve color combinations in all were added, each named after a feeling. In addition, I added an alternate pattern to help those users who found the default set less distinguishable. Support for different shape sets was added which allowed me to provide Cat Mode. Doing that pushed me to consider rebranding the entire game to "Copycats!" but I personally find the cat outlines much more difficult to play with. Finally, I recognized my own need to play in the middle of the night and not disturb my partner, so I introduced Dark Mode. This makes for a total of 96 different combinations!</p>',
        image: 'work/casestudies/likeme/8.png',
      }),
      new CaseStudyObject({
        html: '<ol><li>"moody" color theme</li><li>alternate pattern, "awake" color theme</li><li>Cat Mode, alternate pattern, "awake" color theme</li><li>Dark Mode, alternate pattern, "keen" color theme</li></ol><p>These options were provided knowing that certain users struggled with the default colors, shapes, and patterns. By opening up the possiblity of user choice, I enabled those player to adjust the game to their preferences ensuring a higher rate of success when playing. I also included music and sound effects which the user can toggle independently.</p>',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Theme Music</h4><p>My undergraduate degree is in music composition and theory. So when it came time to create a theme song, my heart was filled with joy! As with every other aspect of this production, I still asked for and incorporated feedback from players.</p><p>As you move from the first to the fourth track, note the changes in melody, texture, style, color, percussion, and mixing. It evolved from a sci-fi jazz combo to a bubblegum pop, 8-bit nod with higher pitched notes, crisper tones and a reduction of overall noise. All changes were made with both player feedback and optimization for mobile gameplay in mind.</p><iframe style="max-height: 382px; min-height: 382px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1704507636&color=%2365657c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
      }),
      new CaseStudyObject({
        html: "<h2>A little developer context</h2><p>The \"Like Me?\" <a href='https://likeme.games' target='_blank'>prototype</a> is a progressive web app (PWA) that is built on the Vue.js framework. With a few recent exceptions, I engineered everything myself including the structure, format, html, css and javascript. I'm not a traditional developer as I have no formal education in computer science. I make code choices that are based on my experience, what I've learned from others, and what makes the most sense to me.</p>",
      }),
      new CaseStudyObject({
        html: "<p>Vue.js is my go-to framework of choice because it's lightweight, handles data-binding in an intuitive way for me, and speeds research, iteration and development dramatically. Where I had to slow down and learn an incredible amount was when I worked to make this a true PWA. This was not easy, but the results are phenomenal: the prototype runs like a native app with very few exceptions. In fact, it's so solid that I opted to use PWABuilder to package it up for the major app stores. As a result of my choices, I was able to write once and then deploy onto multiple platforms without writing ANY native code. That's incredibly satisfying.</p>",
      }),
      new CaseStudyObject({
        html: '<p>When the game was just a proof-of-concept, there were so many functional engineering pieces missing that I spent a good portion of my time implementing basic features like restorable state, user preference support, different visual states like modals and notifications, score keeping, theme support, sound support, in-app updates - all things gamers take for granted in any well designed game. Even now, its not finished, but its certainly good enough to ship and improve based on real user feedback.</p>',
      }),
      new CaseStudyObject({
        html: "<h3>Conclusion</h3><p>This game has been an absolute blast to envision, design, develop, test, improve, and ultimately release. Continous improvements based on user feedback as well as bug reporting are made regularly. The next big step for this product is full marketing campaigns which will leverage the branding and communications already established up to this point. It's hard to describe every piece of this project that I worked on, every skill I either leveraged or improved during this journey. Send me a message if you want to learn more.</p>",
      }),
    ],
  }),

  new WorkObject({
    id: 2,
    isCaseStudy: true,
    name: 'Impira',
    tileText: 'Impira Product Onboarding',
    description: 'Onboarding 2.0',
    url: 'https://www.youtube.com/channel/UCDCBj9hI8mUphp-7Twc6_nA/videos',
    alt: "Watch videos about Impira's product.",
    backgroundImage: 'work/impira_thumbnail.jpg',
    resultText: '15% increase account activation',
    linkText: 'https://www.youtube.com/channel/UCDCBj9hI8mUphp-7Twc6_nA/videos',
    roleText: 'Ideation, design, prototyping, research',
    group: 'use cases',
    caseStudyObjects: [
      new CaseStudyObject({
        html: '<h2>The challenge</h2><p>Impira was a startup founded on machine learning technology that took unstructured data and automatically converted it to structured data with minimal effort from its users. The product, a complicated online web application, was logging higher occurances of falloff during key moments of the funnel. After engaging with users directly, watching online sessions of first time users, and running brainstorm sessions within the company, it became clear that the onboarding process was both confusing and too long for most users.</p><p>Here is the first screen of the original flow (click to see full flow):',
        image: 'work/casestudies/impira/1.png',
        imageZoomed: 'work/casestudies/impira/1z.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h2>The solution</h2><p>I\'m a firm believe in the idea that, together, we are stronger. Through many rounds of collaborative iteration, user research, prototyping, brainstorming, and incremental release scheduling, we deployed a new onboarding flow that improved both the "aha" and "success" moments by over 8% and our early activation by 15%. Key improvements made in this UX include starting the user in the actual application, focusing the user on clearly defined tasks with strong feedback, removing unnecessary information and steps/pages, and adding new capability to remove friction.</p><p>Here is the first screen of the final flow (click to see full flow).</p>',
        image: 'work/casestudies/impira/2.png',
        imageZoomed: 'work/casestudies/impira/2z.png',
      }),
      new CaseStudyObject({
        html: '<h3>Unpacking the process</h3><p>While at Impira, the general process for every feature and flow that I designed followed these basic steps:</p><ol><li>Gather information</li><li>Define problem and solution hypotheses</li><li>Ideate and generate artifacts</li><li>Test</li><li>Iterate (repeating steps 1-4)</li><li>Implement, observe, and adjust as needed</li></ol><p>Every single step above included some form of collaboration. This was done with individual meetings, shareout and brainstorm sessions, and observing users directly.</p>',
      }),
      new CaseStudyObject({
        html: '<h3>Unpacking the process</h3><p>There were a number of theories that the team thought might be challenging prospective customers during this experience: too many steps, unclear instruction, confusing nomenclature, etc. In terms of conversion, we knew based on research and experience that two key moments during the funnel were critical:</p><ol><li>the "success" moment - when a user creates their first extractable field</li><li>the "aha" moment - when a user has seen an extracted field\'s value automatically identified on more than one document</li></ol><p>In order to keep the team on track, I created a simplified view of the golden path with clear requirements and expected results. Every design choice I made was filtered through this framework.',
        image: 'work/casestudies/impira/3.png',
      }),
      new CaseStudyObject({
        html: '<p>With this knowledge in mind, I generated a few hypotheses, generated rough wireframes, shared with the design and development team in multiple Figma sessions and tested some of those flows with users on UserZoom, an online UX research platform. The collaboration within the Impira team was always about striving for insight and feedback, iterating, and repeating until we had versions that felt strong enough to test with users. In that spirit, I encouraged all team members to add comments and even add their own design ideas directly in the Figma file.</p>',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h4>Rough wireframe: Hero's Journey</h4><p>This flow reduced cognitive overload by removing competing visuals, confusing animations, and bringing the end product closer to the beginning of the user experience. (click to see full flow).</p>",
        image: 'work/casestudies/impira/4.png',
        imageZoomed: 'work/casestudies/impira/4z.png',
      }),
      new CaseStudyObject({
        html: '<h4>Rough wireframe: Small But Mighty</h4><p>Small adjustments to the original flow, reduced content, and stronger visual cues (click to see full flow).</p>',
        image: 'work/casestudies/impira/5.png',
        imageZoomed: 'work/casestudies/impira/5z.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h4>Rough wireframe: Can't Miss It</h4><p>In this UX, very deliberate callouts were placed throughout the first run experience (click to see full flow). </p>",
        image: 'work/casestudies/impira/6.png',
        imageZoomed: 'work/casestudies/impira/6z.png',
      }),
      new CaseStudyObject({
        html: '<h4>Wirefames</h4><p>Typically, I worked on and presented many concepts and iterations. Some of these presentations were formal sessions with multiple teammates commenting live and asynchronously, always driving towards a stronger, more feasible solution. As I honed in on the final flow, I broke the implementation into smaller features for sequential rollout. This approach allowed us to help our users faster while generating strong, targeted feedback, unfettered with concerns about "which feature was actually having an impact." Rollout features were tested against a control group, observed with real-time recording of user engagement, and measured in terms of actual impact on various parts of the funnel. After iterating based on this feedback loop, we would release the full feature while adding the next rollout.</p>',
        image: 'work/casestudies/impira/7.png',
      }),
      new CaseStudyObject({
        html: '<h3>Rollouts</h3><p>Over the course of many months, wireframing, collaborating, iterating, and prototyping through dozens of concepts and possibilities, we landed on the first of many incremental changes we considered ready for production. It\'s important to note that, as a startup, Impira built both a framework and culture around experimentation. This means that we spent engineering effort on implimenting and releasing this flow quickly while adding both telemetry and an a/b style approach to help us understand the results of this work in the real world. At no point did we think "one and done" - everything was subject to revisiting and iteration if the data supported it.</p>',
      }),
      new CaseStudyObject({
        html: "<h4>Rollouts example: First increment</h4><p>Early on, I identified a serious problem for our users: even if they made it to the core application, they couldn't upload any more files without leaving the core app experience. All of my prototypes assumed we would provide core-app uploading as an improved feature that would not only help users during OOBE, but throughout their experience. This is the first feature we implemented on the road towards a fully revamped onboarding experience (click to see full flow). </p>",
        image: 'work/casestudies/impira/sidebar.png',
        imageZoomed: 'work/casestudies/impira/sidebarz.png',
      }),
      new CaseStudyObject({
        html: "<h4>Rollouts example: Final increment</h4><p>An expanded version of what was shown earlier in this case study, this is a bird's eye view of the entire final onboarding UX (click to see full flow). My final flows include error states, styling for interactive states like hover, CSS animation guidelines, where specific indicated links would resolve, and pretty much everything our developers needed to fully realize what's being presented. Of course, not all edge cases can be anticipated, so I worked closely with our engineers to accommodate new edge cases, clarify issues, provide assets, and even update the final flow based on feedback as needed. </p>",
        image: 'work/casestudies/impira/8.png',
        imageZoomed: 'work/casestudies/impira/8z.png',
      }),
      new CaseStudyObject({
        html: "<h3>Conclusion</h3><p>This project involved many people in the compnay, our users, and a strong focus on bringing a better experience, incrementally, to our customers with the intent of increasing our product growth. We did this with amazing results. Throughout, I worked personally with the UX content designer, the project manager, the head of product, both the backend and frontend engineering teams, and the actual engineers who implemented this work. Because onboarding doesn't have to end when a user stops working with the app for the first time, I worked with marketing to envision new onboarding opportunities for users who abandoned the app, but were drawn back through direct messaging. If you want to learn more about my work at Impira, please let me know.</p>",
      }),
    ],
  }),
  new WorkObject({
    id: 4,
    name: 'Fred Hutch Cancer Center',
    url: 'https://www.fredhutch.org/en.html',
    alt: 'Visit the Fred Hutch site.',
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
    id: 9,
    name: 'Big Tent Games',
    url: 'https://bigtentgames.com',
    alt: 'Visit the Big Tent Games site.',
    backgroundImage: 'work/btg_thumbnail.jpg',
    type: 'website',
  }),
  new WorkObject({
    id: 7,
    name: 'Suplari',
    url: 'https://suplari.com',
    alt: 'Visit the Suplari site.',
    backgroundImage: 'work/suplari_thumbnail.jpg',
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
    id: 6,
    name: 'Microsoft Band 2',
    url: 'https://www.techradar.com/reviews/wearables/microsoft-band-2-1306006/review',
    alt: 'Read a review of the Microsoft Band 2.',
    backgroundImage: 'work/msband_thumbnail.jpg',
  }),
  new WorkObject({
    id: 8,
    name: 'Surface Remix Project',
    url: 'https://www.theverge.com/2013/9/23/4762256/surface-remix-project-hands-on-dj-setup',
    alt: 'Read a review of the Microsoft Surface Remix Project.',
    backgroundImage: 'work/remix_thumbnail.jpg',
  }),
  new WorkObject({
    id: 10,
    name: 'Mouse & Keyboard Center 2.0',
    url: 'https://www.microsoft.com/hardware/en-us/downloads/mouse-keyboard-center',
    alt: 'Download Mouse & Keyboard Center 2.0',
    backgroundImage: 'work/mkcenter_thumbnail.jpg',
  }),
  // new WorkObject({
  //   id: 11,
  //   name: 'HTML5 Particle Engine',
  //   url: 'https://wilvoss.com/particles/?showsettings',
  //   alt: 'A simple particle generator.',
  //   backgroundImage: 'work/magicParticles_thumbnail.jpg',
  //   type: 'website',
  // }),
];
