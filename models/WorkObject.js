/// <reference path="../models/CaseStudyObject.js" />

class WorkObject {
  constructor(spec) {
    this.id = spec.id === undefined ? -1 : spec.id;
    this.name = spec.name === undefined ? 'name' : spec.name;
    this.description = spec.description == undefined ? '' : spec.description;
    this.url = spec.url == undefined ? '' : spec.url;
    this.alt = spec.alt == undefined ? 'Read a quick summary of this project.' : spec.alt;
    this.heroImage = spec.heroImage === undefined ? '' : spec.heroImage;
    this.linkText = spec.linkText == undefined ? 'Take a quick' : spec.linkText;
    this.tileText = spec.tileText == undefined ? '' : spec.tileText;
    this.resultText = spec.resultText == undefined ? '' : spec.resultText;
    this.roleText = spec.roleText == undefined ? 'Lead UX Designer' : spec.roleText;
    this.skillsText = spec.skillsText == undefined ? 'Design, prototyping' : spec.skillsText;
    this.readTime = spec.readTime === undefined ? '~1 minute' : spec.readTime;
    this.whyText = spec.whyText == undefined ? '' : spec.whyText;
    this.type = spec.type === undefined ? 'product' : spec.type;
    this.group = spec.group === undefined ? 'Quick Reads' : spec.group;
    this.groupDescription = spec.groupDescription === undefined ? '' : spec.groupDescription;
    this.category = spec.category === undefined ? 'Quick Read' : spec.category;
    this.backgroundImage = spec.backgroundImage === undefined ? '' : spec.backgroundImage;
    this.isCaseStudy = spec.isCaseStudy == undefined ? false : spec.isCaseStudy;
    this.caseStudyObjects = spec.caseStudyObjects === undefined ? [] : spec.caseStudyObjects;
    this.feedbackImages = spec.feedbackImages === undefined ? [] : spec.feedbackImages;
    this.isSelected = spec.isSelected === undefined ? false : spec.isSelected;
    this.period = spec.period === undefined ? '' : spec.period;
    this.logo = spec.logo === undefined ? '' : spec.logo;
  }
}

var Works = [
  //The Missing Piece Games Library App
  new WorkObject({
    id: 11,
    name: 'The Missing Piece',
    logo: 'tmp-logo.png',
    tileText: 'Games Library App',
    url: 'https://www.themissingpiecegames.com/library',
    skillsText: 'Design, development, research',
    resultText: 'Increased customer engagement',
    backgroundImage: 'work/tmp_thumbnail.png',
    group: 'Case Studies',
    category: 'Case Study',
    caseStudyObjects: [
      new CaseStudyObject({
        html: `<h3>The challenge</h3>
        <p>The Missing Piece Games is a cozy café and game lounge located in West Seattle, offering an impressive selection of board games, card games, and role-playing games for sale. In addition to their retail offerings, the owners provide a free library of games for customers to enjoy on-site. This extensive collection covers a wide array of game types, ease of use, player counts, and complexity levels.</p>
        <p>
        However, discovering which games were available in the library and determining their suitability for you and your play group used to require a visit to the store, where you'd have to physically pick up each game and read about it in real time. Realizing the need for a more convenient solution, The Missing Piece ("TMP" as it's affectionately known) sought a better way for their customers to access, explore, and choose from the library's vast selection of games.</p>`,
        image: 'work/casestudies/tmp/shelf-1.jpg',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: `<h3>The solution</h3>
        <blockquote>&ldquo;I just used the Library app, I am coming in tomorrow with a group, and had no idea what we might want to play.  Now I have a few ideas to suggest. Thanks!&rdquo; <span> — Wendy, The Missing Piece Customer</span></blockquote>
        <p>I designed, developed, and delivered an installable web app that assists customers in selecting a game from TMP's library based on various criteria, including available time, group size, game complexity, and more. This web app provides a fully branded, visually appealing user experience, brought to life through a cost-effective game management workflow. By leveraging WordPress plugins and the BoardGameGeek API, the app simplifies game management for the owners. They can easily add or remove games by modifying a single line of text within a file secured behind their WordPress administrative login.</p>`,
        image: 'work/casestudies/tmp/2.png',
        imageZoomed: 'work/casestudies/tmp/2-big.png',
        zoomImageOrientation: 'horizontal',
        afterImageHtml: ' ',
      }),
      new CaseStudyObject({
        html: `<h3>The story</h3><p>At the end of 2024, The Missing Piece Games approached me with the goal of creating a unique and user-friendly application for their customers to easily access and choose games from their store's library. Alex, one of the owners, had observed similar applications in other stores and wanted to offer the same level of customer service to his patrons. The loyal and enthusiastic board game community at The Missing Piece Games Café & Game Lounge is always eager to expand their play groups and explore new games. An app like this would significantly enhance on-site visits, customer engagement, and unit sales.</p>`,
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: `<h3>The story: research</h3>
        <p>I visited numerous game shops in the region to learn how they promoted their library games to customers. Some shops had nothing more than a disorganized shelf of games, while others had a spreadsheet or printout listing the available games. A small number of shops offered a website or online spreadsheet to address the issue. Notably, the most robust solution was an on-premises website accessible via a QR code, allowing for basic filtering of the game list. Armed with this knowledge and my experience as a UX designer, game developer, and game player, I set out to create a superior experience that not only solved the problem but also elevated the UX well beyond anything I'd seen.</p>`,
        image: 'work/casestudies/tmp/1.jpg',
      }),
      new CaseStudyObject({
        html: `<h3>The story: delivery</h3><p>Armed with this knowledge I quickly determined features that I wanted to incorporate. The first set were features we knew The Missing Piece needed: 
        <ul>
        <li>Branded UX</li>
        <li>Search and filter across multiple game dimensions</li>
        <li>Accessible by phone</li>
        <li>QR code for quick access</li>
        <li>Easily edit and maintain</li>
        </ul>
        <p>Over the course of the project, I added a number of features that I felt would elevate the experience and make it more engaging for their customers. These included:
        <ul>
        <li>Available anywhere, on any device</li>
        <li>Installable as an app</li>
        <li>The ability to drill in on a single game and share it through social media</li>
        <li>Badging games that are store favorites</li>
        <li>Staff reviews</li>
        <li>WordPress and Board Game Geek integration for easier and secure maintenance</li>
        <li>Flexible summary cards</li>
        <li>Dark and light themes</li>
        </ul>
        <p>These features were added over time as I worked with Alex and his team to understand what was possible, what was needed, and what was desired. The final product was a culmination of all of these features and more.</p>`,
        image: 'work/casestudies/tmp/2.jpg',
      }),
    ],
  }),
  //Fred Hutch Cancer Center
  new WorkObject({
    id: 4,
    name: 'Fred Hutch Cancer Center',
    logo: 'ms-logo-full.png',
    tileText: 'Remote Patient Monitoring',
    url: 'https://www.fredhutch.org/en.html',
    skillsText: 'Design, prototyping, research',
    resultText: 'Helped secure 3-year partnership',
    backgroundImage: 'work/fredhutch_thumbnail.jpg',
    group: 'Case Studies',
    category: 'Case Study',
    caseStudyObjects: [
      new CaseStudyObject({
        html: "<h3>The challenge</h3><p>Emergency room visits during chemotherapy impact 1 in 2 cancer patients. Many of these visits are avoidable and generate added stress to a uniquely stressful healthcare environment as well as to patients who often don't need to make the trip and suffer for it. Microsoft Health partnered with the Fred Hutchinson Cancer Center on a remote patient monitoring project that involved both hardware driven biometrics tracking and daily symptom tracking. Fred Hutch researchers were trying to assess the viability of shifting the daily task of asking patients about their symptoms from actual paperwork to a digital format. They intended to use that information to assess the impact that could have on preventing unnecessary ER trips. Their goals aligned with our organization's desire to scale our Microsoft Health Platform offering to include large data sets, data ingestion, and data analytics. Fred Hutch had zero experience working in the digital application space and needed a complete solution in order to begin testing their hypothesis.</p>",
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h3>The solution</h3><blockquote>&ldquo;Wil helped my team at Microsoft Health by designing an awesome app for remote patient monitoring and handled a REALLY tricky stakeholder situation with tons of grace and patience.&rdquo; <span> — Jessica Glago, Product Manager</span></blockquote><p>I designed, prototyped, and helped deliver a remote patient monitoring app for our research partners at Fred Hutch Cancer Center which would provide critical real-time data that Fred Hutch support staff could use to anticipate patient's needs before they ended up in a clinic. In addition to the core symptom tracking feature, the app required device management and bluetooth pairing with an armband monitor. The design process I used involved evaluating patient feedback, incorporating stakeholder input, whiteboarding, wireframing, prototyping, iteration, and testing. The designs I created helped convince Fred Hutch to sign a 3-year contract with our organization. In addition, the application was delivered quickly and gave both Fred Hutch and the Microsoft Health team tons of data and insight into real-time health data management.</p>",
        image: 'work/casestudies/fredhutch/3.png',
        afterImageHtml: ' ',
      }),
      new CaseStudyObject({
        html: "<h3>The story</h3><p>Our team was struggling with a gap in knowledge on Fred Hutch's team regarding user experience, user needs, and the digital format we were all trying to develop. Academic research is a tried and true process that traditionally doesn't allow for iteration, real-time adjustments during a study's run, or rapid protoptying. Our team was well-versed in how an application evolves over time through iteration and customer feedback - but that experience didn't move a critical stakeholder's view on how to approach the study.</p>",
        image: 'work/casestudies/fredhutch/1.png',
        imageZoomed: 'work/casestudies/fredhutch/1z.png',
        zoomImageOrientation: 'vertical',
        afterImageHtml:
          "<p>I was brought in to help convince the research team about the importance of the design process in developing a new experience for users. My tenure with Microsoft Health and the Microsoft Band team allowed me to provide concrete data and examples based on actual use cases. In addition, I prototyped multiple designs to help the group understand the possibilities and implications of different layouts and flows. This prototyping was critical in driving the discussion forward since the Fred Hutch researcher's had no idea how to build an application and weren't comfortable interpreting high-level concepts or wireframes.</p>",
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h4>The story: reducing friction</h4><p>The designs that I created and prototyped helped clarify the issues that end users, and in particular patients, have when working with technology. The paper forms that patient's typically filled out were dense, overwhelming, but also monolithic in that everything being presented was physically available at all times. The physical artifact was complete and, while tedious to fill out, familiar and therefore accepted. A large part of application design is spent removing friction for people as they work to achieve their goals within the UX flow. Fred Hutch initially wanted to simply recreate the paper form wholesale in the application. One long scrollable form with an inordinate ammount of copy.</p><p>Accessibility is a critical component in all hospital and healthcare settings. Often, a caregiver will help a patient with their daily tasks which might include medication adherance, symptom tracking, hospital visits, taking samples, as well as delivering medication like injectible fluids. During the course of chemotherapy, patients often complain of brain fog, reduced visual acuity, motor control issues, and exhaustion. </p>",
      }),
      new CaseStudyObject({
        html: "<h4>The story: onboarding</h4><p>Microsoft recommended the use of the Biovation armband for data collection. Since the study included a small number of participants and successful device adoption was critical, the team landed on a white-glove experience which included a researcher guiding the patient through onboarding. This gave us a certain leeway in terms of content and step reduction. Still, the onboarding of a bluetooth device was vital and had to work well. In addition to connecting the device with the patient's ID, the team needed to provide them with the nearest clinic's phone number for support, and give the patient an opportunity to set a reminder for their daily symptom tracking.</p>",
        image: 'work/casestudies/fredhutch/4.png',
        imageZoomed: 'work/casestudies/fredhutch/4z.png',
        zoomImageOrientation: 'vertical',
      }), // new CaseStudyObject({
      //   html: "<h3>Flows</h3><p>These images show the some of the UX flows patient's used on a daily basis.",
      //   image: 'work/casestudies/fredhutch/1.png',
      // }),
      // new CaseStudyObject({
      //   image: 'work/casestudies/fredhutch/2.png',
      // }),
      // new CaseStudyObject({
      //   image: 'work/casestudies/fredhutch/3.png',
      // }),
    ],
  }),
  // Impira
  new WorkObject({
    id: 2,
    isCaseStudy: true,
    name: 'Impira',
    logo: 'impira-logo-full.png',
    period: '2022',
    tileText: 'Product Onboarding',
    readTime: '6 minute',
    description: 'Onboarding 2.0',
    url: 'https://www.youtube.com/channel/UCDCBj9hI8mUphp-7Twc6_nA/videos',
    alt: "Learn about the process I used as a staff product growth designer at Impira while improving their application's onboarding experience.",
    backgroundImage: 'work/impira_thumbnail.jpg',
    resultText: '15% increase account activation',
    linkText: 'https://www.youtube.com/channel/UCDCBj9hI8mUphp-7Twc6_nA/videos',
    roleText: 'Staff Product Designer',
    skillsText: 'Ideation, design, prototyping, research',
    group: 'Case Studies',
    category: 'Case Study',
    caseStudyObjects: [
      new CaseStudyObject({
        html: '<h2>The challenge</h2><p>Impira was a startup founded on machine learning technology that took unstructured data and automatically converted it to structured data with minimal effort from its users. The product, a complicated online web application, was logging higher occurances of falloff during key moments of the funnel. After engaging with users directly, watching online sessions of first time users, and running brainstorm sessions within the company, it became clear that the onboarding process was both confusing and too long for most users.</p><p>Here is the first screen of the original flow:',
        image: 'work/casestudies/impira/1.png',
        imageZoomed: 'work/casestudies/impira/1z.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h2>The solution</h2><blockquote>&ldquo;Wil helped us make cutting edge AI technology approachable for the average person. He iterated patiently and persistently on our onboarding, teaching our users to create Machine Learning models. He is technically savvy, quickly picking up new concepts, and making them approachable to new users. He\'s a pleasure to work with, creative, responsive and collaborative.&rdquo; <span>— Lorilyn McCue, Head of Product<span></blockquote><p>I\'m a firm believer in the idea that, together, we are stronger. Through many rounds of collaborative iteration, user research, prototyping, brainstorming, and incremental release scheduling, we deployed a new onboarding flow that improved both the "aha" and "success" moments by over 8% and also our early activation by 15%. Key improvements made in this UX include starting the user in the actual application, focusing the user on clearly defined tasks with strong feedback, removing unnecessary information and steps/pages, and adding new capability to remove friction.</p><p>Here is the first screen of the final flow.</p>',
        image: 'work/casestudies/impira/2.png',
        imageZoomed: 'work/casestudies/impira/2z.png',
        afterImageHtml: '',
      }),
      new CaseStudyObject({
        html: '<h3>Unpacking the process</h3><p>While at Impira, the general process for every feature and flow that I designed followed these basic steps:</p><ol><li>Gather information</li><li>Define problem and solution hypotheses</li><li>Ideate and generate artifacts</li><li>Test</li><li>Iterate (repeating steps 1-4)</li><li>Implement, observe, and adjust as needed</li></ol><p>Every single step above included some form of collaboration. The team had a number of theories about what might be challenging prospective customers during this experience: too many steps, unclear instruction, confusing nomenclature, etc. In terms of conversion, we knew based on user research and experience that two key moments during the funnel were critical:</p><ol><li>the "success" moment - when a user creates their first extractable field</li><li>the "aha" moment - when a user has seen an extracted field\'s value automatically identified on more than one document</li></ol><p>In order to keep the team on track, I created a simplified view of the golden path with clear requirements and expected results. Every design choice I made was filtered through this framework.',
        image: 'work/casestudies/impira/3.png',
      }),
      new CaseStudyObject({
        html: '<p>With this knowledge in mind, I generated a few hypotheses, generated rough wireframes, shared with the design and development team in multiple Figma sessions and tested some of those flows with users on UserZoom, an online UX research platform. The collaboration within the Impira team was always about striving for insight and feedback, iterating, and repeating until we had versions that felt strong enough to test with users. In that spirit, I encouraged all team members to add comments and even add their own design ideas directly in the Figma file.</p>',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h4>Rough wireframes:</h4><p>Early and often I generated rough flows to facilitate conversation, stimulate brainstorming, and work out basic concepts. It was not uncommon for me to present four or more options to the team in a quick round table to elicit feedback. Typically I name each flow with a mind towards capturing the essence of that proposed flow. Some examples include:</p><ul><li>Hero's Journey - this flow reduced cognitive overload by removing competing visuals, adjusting confusing animations, and bringing the end product closer to the beginning of the user experience</li><li>Small But Mighty - small adjustments to the original flow, reduced content, and stronger visual cues</li><li>Can't Miss It - in this flow, very deliberate callouts were placed throughout the first run experience</li><li>Purple is the New Black - a deliberate pitch to associate one color with those moments when Impira has magically solved a problem</li><li>Can't Miss It - in this flow, very deliberate callouts were placed throughout the first run experience. </li><li>CBI Confirm/Break/Ignore - this flow was about letting the user edit out content that wasn't important, flipping the narrative on previous flows </li></ul>",
        image: 'work/casestudies/impira/10.png',
        afterImageHtml: '<p>This worked involved pages of iteration and exploration resulting in many abandoned but useful flows.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Wirefames</h4><p>Typically, I worked on and presented many concepts and iterations. Some of these presentations were formal sessions with multiple teammates commenting live and asynchronously - always driving towards a stronger, more feasible solution. As I honed in on the final flow, I broke the implementation into smaller features for sequential rollout. This approach allowed us to help our users faster, generating strong and targeted feedback that didn\'t cause questions about "which feature was actually having an impact." Rollout features were tested against a control group, observed with real-time recording of user engagement, and measured in terms of actual impact on various parts of the funnel. </p>',
        image: 'work/casestudies/impira/9z.png',
      }),
      new CaseStudyObject({
        html: '<h3>Rollouts</h3><p>Over the course of many months wireframing, collaborating, iterating, and prototyping through dozens of concepts and possibilities, we landed on the first of many incremental changes we considered ready for production. It\'s important to note that, as a startup, Impira built both a framework and culture around experimentation. This means that we spent engineering effort on implimenting and releasing this flow quickly while adding both telemetry and an a/b style approach to help us understand the results of this work in the real world. At no point did we think "one and done" - everything was subject to revisiting and iteration if the data supported it.</p>',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h4>Rollouts example: sidebar upload</h4><p>Early on, I identified a serious problem for our users: even if they made it to the core application, they couldn't upload any more files without leaving that flow. All of my prototypes assumed we would provide uploading in the core app as an improved feature that would not only help users during OOBE, but throughout their experience. This is the first feature we implemented on the road towards a fully revamped onboarding experience. </p>",
        image: 'work/casestudies/impira/sidebar.png',
        imageZoomed: 'work/casestudies/impira/sidebarz.png',
      }),
      new CaseStudyObject({
        html: "<h4>Rollouts example: Final flow</h4><p>My final flows included all of the details our developers needed to fully realize what's being presented. Of course, not all edge cases can be anticipated, so I worked closely with our engineers to accommodate new edge cases, clarify issues, provide assets, and even update the final flow based on feedback as needed. An expanded version of what was shown earlier in this case study, this is a bird's eye view of the entire final onboarding UX. </p>",
        image: 'work/casestudies/impira/8.png',
        imageZoomed: 'work/casestudies/impira/8z.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h3>Conclusion</h3><p>This project involved many people in the company, our users, and a strong focus on incrementally bringing a better experience to our customers with the intent of increasing our product growth. We did this with amazing results. Throughout, I worked personally with the UX content designer, the project manager, the head of product, both the backend and frontend engineering teams, and the actual engineers who implemented this work. </p><p>Because onboarding doesn't have to end when a user stops working with the app for the first time, I worked with marketing to envision new onboarding opportunities for users who abandoned the app, but were drawn back through direct messaging. </p>",
      }),
    ],
  }),
  // Like Me?
  new WorkObject({
    id: 1,
    isCaseStudy: true,
    name: 'Like Me?',
    logo: 'btg-logo-full.png',
    period: '2023',
    tileText: 'Like Me? Video Game',
    description: 'Casual, mobile-first, video game',
    url: 'https://bigtentgames.com/likeme.html',
    alt: 'Read about the process used in creating, developing, and producing the video game "Like Me?"',
    readTime: '8 minute',
    backgroundImage: 'work/likeme_thumbnail.jpg',
    resultText: '5-star rating in app store',
    linkText: 'https://bigtentgames.com/likeme.html',
    roleText: 'Lead Product Designer',
    skillsText: 'Concepting, design, code, research',
    group: 'Case Studies',
    category: 'Case Study',
    feedbackImages: ['work/casestudies/likeme/feedback-1.png', 'work/casestudies/likeme/feedback-3.png', 'work/casestudies/likeme/feedback-8.png', 'work/casestudies/likeme/feedback-9.png', 'work/casestudies/likeme/feedback-4.png', 'work/casestudies/likeme/feedback-5.png', 'work/casestudies/likeme/feedback-6.png', 'work/casestudies/likeme/feedback-2.png', 'work/casestudies/likeme/feedback-7.png'],
    caseStudyObjects: [
      new CaseStudyObject({
        html: '<h2>The challenge</h2><p>“Like Me?” initially debuted as a web-based proof-of-concept video game. The project revitalized with the goal of bringing it to market as swiftly as possible. Despite the core gameplay being exceptional, the UX unfortunately fell short, as it was unintuitive, unhelpful, and somewhat unappealing. Specifically, users struggled to understand where to focus their attention, the meaning of certain visuals, and how to successfully play the game. There was also room for enhancements like score keeping and social sharing, as well as updated daily content. Here are what the four main screens (home, gameplay, game over, how to play) looked like at the start:</p>',
        image: 'work/casestudies/likeme/1.png',
        imageZoomed: 'work/casestudies/likeme/1.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h2>The solution</h2><p>You can see those same four screens at the end of this process here:</p>',
        image: 'work/casestudies/likeme/2.png',
        imageZoomed: 'work/casestudies/likeme/2.png',
        afterImageHtml:
          '<p>After three months of diligent work, the "final" product, now available on all major app stores, <a href="https://likeme.games" target="_blank">speaks for itself</a>. Producing this game involved much iteration, all of which was done in the web prototype. It also showcases a more organic process than the formal, team-oriented processes you\'ll find in my other deep dive. Although proud of my achievements, I know for a fact that this product would be better if I was working with a full team and not just the users.</p>',
      }),
      new CaseStudyObject({
        html: '<h3>Unpacking the process</h3><p>Progress began with UI improvements like tweaking overall spacing, sizing, colors, and UX flows while generating a positive feedback loop with players, fellow game designers, and UX designers along the way. I did this when adding features that required new iconography, animation, visual assets, and content by sending out texts with comparison screenshots or by updating the prototype and asking games for their opinions. Often, I would grab an existing resource online, test its viability and reception, then generate my own version, only to repeat this process until I was satisfied with the results.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: How To Play</h4><p>This methodology can be seen in my approach to giving user\'s guidance, both realtime and asynchronously. My initial attempt at a "how to" guide needed improvement as players had frequently failed to grasp how to play, even after reading the instructions. By watching new users play the game for the first time, then asking them questions, I was able to get continuous feedback for improvement. Gradually, it evolved (with many small steps in between):</p>',
        image: 'work/casestudies/likeme/4.png',
        imageZoomed: 'work/casestudies/likeme/4.png',
      }),
      new CaseStudyObject({
        html: '<ol><li>cluttered and confusing single page modal</li><li>improved layout with clear navigation and more thorough guidance</li><li>increased description and guidance with steps outline</li><li>full blown tutorial/OOBE that really helped users with gameplay fundamentals</li></ol><p>Eventually, I added animations and interactions that emphasized key elements of gameplay. At one point I had a simple welcome screen for first time players, but chose to present the tutorial as the first time run or OOBE. Each step of the way, I asked for input from others and incorporated their feedback as needed. The final OOBE/tutorial can be seen in the following video.</p>',
        image: 'https://player.vimeo.com/video/874206343?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Home</h4><p>This is a series of iterations showing what the home screen looked liked over time:</p>',
        image: 'work/casestudies/likeme/5.png',
        imageZoomed: 'work/casestudies/likeme/5.png',
        afterImageHtml:
          '<ol><li>hierarchy issues and clunky visuals</li><li>polished layout with clear navigation and the addition of a "Hints" preference</li><li>hints moved to settings, clearer guidance and labels, additional features</li><li>the daily challenge, refined iconography, new game mode</li></ol><p>There\'s a fair bit going on here, but important to note, my work was holistic. As I made changes in certain areas of the UX, this impacted every part of the experience. These few home screen versions demonstrate UX, UI, layout, feature, gameplay, and even marketing adjustments. All of this was done with constant feedback from players and industry experts.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: Hints</h4><p>The addition of hints and a settings toggle reflects feedback from a specific user who wanted more guidance during the game. In addition to recognizing that games let advanced players opt out of certain features like "Hints", I ultimately addressed the functional need for hints in multiple ways:</p>',
        image: 'work/casestudies/likeme/6.png',
        imageZoomed: 'work/casestudies/likeme/6.png',
      }),
      new CaseStudyObject({
        html: '<ol><li>if the player hasn\'t selected any correct pieces, they get a one-time notification 7 seconds into their first game</li><li>if they haven\'t tapped the "Me" piece after 25 seconds, they get a one-time notification</li><li>two unsuccessful attempts to clear a level prompts both a notification and an animation of a relevant piece on the board (shakes for "don\'t pick me", bounces and rotates for "pick me!")</li><li>you can see the final resting place for the hints toggle, now named "Tips and Hints"</li></ol>',
        image: 'https://player.vimeo.com/video/874238162?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Accessibility</h4><p>Early on, in the original prototype, I chose the initial colors with a mind towards accessibllity. I also chose patterns and shapes with this feature in mind. The default colors are each based on some variant of red, green, and blue, and then tested to ensure their uniqueness was preserved for most users with a color vision deficiency. In addition, the values needed to stand up for someone who had set their accessibility options to display all content in grayscale.</p>',
        image: 'work/casestudies/likeme/7.png',
        imageZoomed: 'work/casestudies/likeme/7.png',
        afterImageHtml:
          '<ol><li>baseline - vision shared by most people</li><li>protanopia - vision in which the retina doesn\'t to respond to red or green</li><li>deuteranopia - vision that tends towards muted red and green colors</li><li>tritanopia - vision with a greenish/pink tone</li><li>grayscale</li></ol><p>These are all approximations and cannot replace an actual player\'s experience if they have a color vision deficiency. Support for PC gameplay with keyboard shortcuts opened "Like Me?" up to an even larger audience. That said, I wanted to make the game accessible to as many people as possible which is why personalization became a high priority.</p>',
      }),
      new CaseStudyObject({
        html: '<h4>Process example: Personalization</h4><p>In keeping with a player-first mindset, I decided to extend the options for gameplay colors, patterns, and even shapes. Twelve color combinations in all were added, each named after a feeling. In addition, I added an alternate pattern to help those users who found the default set less distinguishable. Finally, I recognized my own need to play in the middle of the night and not disturb my partner, so I introduced Dark Mode. This makes for a total of 96 different combinations!</p>',
        image: 'work/casestudies/likeme/8.png',
        imageZoomed: 'work/casestudies/likeme/8.png',
      }),
      new CaseStudyObject({
        html: '<ol><li>"moody" color theme</li><li>alternate pattern, "awake" color theme</li><li>Cat Mode, alternate pattern, "awake" color theme</li><li>Dark Mode, alternate pattern, "keen" color theme</li></ol><p>These options were provided knowing that certain users struggled with the default colors, shapes, and patterns. By opening up the possiblity of user choice, I enabled those player to adjust the game to their preferences ensuring a higher rate of success when playing. I also included music and sound effects which enable the user to toggle independently.</p>',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h4>Process example: Theme Music</h4><p>My undergraduate degree is in music composition and theory. So when it came time to create a theme song, my heart was filled with joy! As you move from the first to the fourth track, note the changes in melody, texture, style, color, percussion, and mixing. It evolved from a sci-fi jazz combo to a bubblegum pop, 8-bit nod with higher pitched notes, crisper tones and a reduction of overall noise. All changes were made with both player feedback and optimization for mobile gameplay in mind.</p><iframe style="max-height: 382px; min-height: 382px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1704507636&color=%2365657c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
      }),
      new CaseStudyObject({
        html: "<h2>A little development context</h2><p>The \"Like Me?\" <a href='https://likeme.games' target='_blank'>prototype</a> is a progressive web app (PWA) that is built on the Vue.js framework. With a few recent exceptions, I engineered everything myself including the structure, format, html, css and javascript. I'm a self-taught developer and make code choices that are based on my experience, what I've learned from others, and what makes the most sense to me.</p>",
      }),
      new CaseStudyObject({
        html: "<p>Vue.js is my go-to framework of choice because it's lightweight, handles data-binding in an intuitive way for me, and speeds research, iteration and development dramatically. Where I had to slow down and learn an incredible amount was when I worked to make this a true PWA. This was not easy, but the results are phenomenal: the prototype runs like a native app with very few exceptions. In fact, it's so solid that I opted to use PWABuilder to package it up for the major app stores. As a result of my choices, I was able to write once and then deploy onto multiple platforms without writing ANY native code. That's incredibly satisfying.</p>",
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: "<h2>Conclusion</h2><p>This game has been an absolute blast to envision, design, develop, test, improve, and ultimately release. Continous improvements based on user feedback as well as bug reporting are made regularly. The next big step for this product is a full marketing campaign which will leverage the branding and communications already established up to this point. It's hard to describe every piece of this project that I worked on, every skill I either leveraged or improved during this journey.</p>",
      }),
    ],
  }),
  // Microsoft Health NExT
  new WorkObject({
    id: 5,
    name: 'Microsoft AI+R Health NExT',
    logo: 'ms-logo-full.png',
    tileText: 'Microsoft NExT Web App',
    resultText: 'Saved org over $500,000',
    url: 'https://www.microsoft.com/microsoft-health/en-us',
    skillsText: 'Design, prototyping, research, code',
    backgroundImage: 'work/nextstart_thumbnail.jpg',
    caseStudyObjects: [
      new CaseStudyObject({
        darkBackground: true,
        html: "<h3>Summary</h3><p>Microsoft NExT Start was an internal application meant to help researchers bring their ideas to market. When I joined NExT, the product team had stalled after a year of feature creep and design iteration with no tangible results. There was a big disconnect between the goals of leadership and the needs of the end users. I focused the team's efforts on maximizing the impact for our users by identifying their core needs and driving our design process with those needs at the front.</p>",
      }),
      new CaseStudyObject({
        html: '<h3>results</h3><p>This is what the application looked like at the end of this process.</p>',
        image: 'work/casestudies/next/2.png',
      }),
      new CaseStudyObject({
        html: '<p>This is what the application looked like before I stepped in to help the team.</p>',
        image: 'work/casestudies/next/1.png',
      }),
    ],
  }),
  // The Fight Is In Us
  new WorkObject({
    id: 3,
    name: 'The Fight Is In Us',
    logo: 'ms-logo-full.png',
    tileText: 'COVID Plasma Donation',
    url: 'https://www.geekwire.com/2020/fight-us-blood-plasma-campaign-deploys-microsoft-bot-search-covid-19-antibodies/',
    resultText: 'Helped drive COVID health solutions',
    backgroundImage: 'work/tfiiu_thumbnail.jpg',
    type: 'website',
    skillsText: 'UX design, concepting',
    caseStudyObjects: [
      new CaseStudyObject({
        darkBackground: true,
        html: '<h3>Summary</h3><p>At the beginning of March 2020, Microsoft Health was already aware of the coming storm related to COVID. We\'d begun partnerships wherever we thought we could make a difference and one of those partnerships was with the Covid plasma donation program, "The Fight is In Us." The primary technology Microsoft Health brought to the partnership was our Health Bot. A relatively novel and exciting IP for the organization, Health Bot promised to solve an immediate problem for handling health related inquiries at scale. For this reason, it was chosen as the interface for onboarding volunteers towards the cause. I incorporated that tech in all of my site design iterations. </p>',
      }),
      new CaseStudyObject({
        html: '<h3>screenshots</h3>',
        image: 'work/casestudies/fight/1.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/fight/2.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/fight/4.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/fight/3.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/fight/5.png',
      }),
    ],
  }),
  // Microsoft Band 2
  new WorkObject({
    id: 6,
    name: 'Microsoft Band 2',
    logo: 'ms-logo-full.png',
    tileText: 'Microsoft Band 2',
    roleText: 'UX Designer',
    url: 'https://www.techradar.com/reviews/wearables/microsoft-band-2-1306006/review',
    resultText: 'Secured partnerships',
    backgroundImage: 'work/msband_thumbnail.jpg',
    caseStudyObjects: [
      new CaseStudyObject({
        darkBackground: true,
        html: '<h3>Summary</h3><p>Microsoft Band was a product ahead of its time. Before Apple Watch was even a thing, this Microsoft wearable was tracking health and fitness data while providing incredibly useful, elegant solutions for health buffs, dataheads, and even basic productivity users. Aside from prototyping the entire UI for Band 2, I played a critical role in the development of some of the features and apps that won hearts with our user base. Two of those feature flows are shown below.</p>',
      }),
      new CaseStudyObject({
        html: '<h3>Uber App</h3><p>Uber was announced as a Microsoft partner with the Band team at a public event by senior leadership. We had two weeks to prove to Uber that our product was worth that partnership. This flow that I designed, along with the prototype I created, helped secure that partnership and determine the next feature to be built.</p>',
        image: 'work/casestudies/band/2.png',
      }),
      new CaseStudyObject({
        darkBackground: true,
        html: '<h3>Music controls</h3><p>After multiple failed attempts to implement this #1 rated user requested feature, I stepped in and drove the design process reboot which resulted in the release of one my proudest contributions to any product. This design was frought with many challenges, but the end result was both highly desired and well received.</p>',
        image: 'work/casestudies/band/1.png',
      }),
    ],
  }),
  // Suplari
  new WorkObject({
    id: 7,
    name: 'Suplari',
    logo: 'suplari-logo-full.png',
    tileText: 'Web App and Brand',
    skillsText: 'UX design, ideation, branding',
    url: 'https://suplari.com',
    backgroundImage: 'work/suplari_thumbnail.jpg',
    resultText: 'Job offer on the spot',
    caseStudyObjects: [
      new CaseStudyObject({
        darkBackground: true,
        html: "<h3>Summary</h3><p>In the early stages of startup Suplari's funding, I was invited to brainstorm and craft wireframes to help kickstart the direction Suplari could take with their application. My work involved many brainstorm sessions with the founding partners as well as time spent individually wireframing and ideating. This work helped the team gain clarification on future features and directions. It also led to a job offer!</p>",
      }),
      new CaseStudyObject({
        html: '<h3>wireframes</h3>',
        image: 'work/casestudies/suplari/1.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/suplari/3.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/suplari/2.png',
      }),
      new CaseStudyObject({
        image: 'work/casestudies/suplari/4.png',
      }),
      new CaseStudyObject({
        html: '<h3>Logo concepts</h3>',
        image: 'work/casestudies/suplari/5.png',
      }),
    ],
  }),
];
