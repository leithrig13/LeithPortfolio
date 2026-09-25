/* =====================================================================
   CONTENT FILE: this is the only file you need to edit.
   Save, refresh the page, done.
   ===================================================================== */

window.SITE = {
  name: "Leith Rigby",
  initials: "L. Rigby",
  headline: "Mechanical engineering student",   // shown on the dimension line under your name
  intro: "Designing and Building Awesome Things",
  location: "Kelowna, BC",
  headshot: "assets/headshot.jpg",                   // portrait 4:5 works best (~600 px wide); "" shows your initials
  resume: "resume.pdf",                             // put the file in this folder, or set to "" to hide

  about: [
    "A short paragraph on your background and program.",
    "A short paragraph on the roles you're looking for."
  ],

  links: [
    { label: "Email",    url: "mailto:you@example.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
    { label: "GitHub",   url: "https://github.com/your-username" }
  ],

  skills: [
    { group: "CAD",         items: "Skill, skill, skill" },
    { group: "Fabrication", items: "Skill, skill, skill" },
    { group: "Electronics", items: "Skill, skill, skill" },
    { group: "Software",    items: "Skill, skill, skill" }
  ],

  // Licenses, courses, safety tickets, awards.
  certifications: [
    /* { name: "WHMIS", issuer: "WorkSafeBC", year: "2025" }, */
  ],

  // Internships, competitions, leadership roles, notable jobs.
  experience: [
    /* { role: "Team Lead", org: "Okanagan Marine Robotics", period: "2024–Present", text: "One or two sentences on what you did." }, */
  ],

  /* -------------------------------------------------------------------
     PROJECTS: listed on the homepage in this order (best one first).
     Copy the example below, delete the two comment lines around it (the ones with the slash and star), and fill it in.
     Each project gets its own page automatically at project.html?id=<id>
     ------------------------------------------------------------------- */
  projects: [

    /*
    {
      id: "my-project",                          // short, lowercase, no spaces (used in the URL)
      title: "Project title",
      summary: "One sentence on what it is.",
      cover: "assets/projects/my-project.jpg",   // main image; leave "" for a placeholder
      type: "Team",                              // Team, Personal, Work, Course...
      skills: "CAD, Arduino, Machining",         // skills this project demonstrates
      year: "2026",

      // Case study sections, shown in this order on the project page.
      // Rename or remove any of them.
      sections: [
        { heading: "Problem",     text: "What needed solving and why." },
        { heading: "Constraints", text: "Budget, time, materials, specs." },
        { heading: "My role",     text: "Exactly what you did." },
        { heading: "Process",     text: "Iterations, testing, what failed, what changed." }
      ],

      // Key results: short, with numbers. Shown as large figures.
      results: [
        { value: "−120 g", label: "Bracket weight" },
        { value: "3",      label: "Design iterations" }
      ],

      // Extra images on the project page (renders, drawings, photos).
      // Optional: group: "MK1" puts photos under a version label; w/h (pixels) stop the page jumping as images load;
      // wide: true shows an image across the full row (very wide images do this automatically).
      gallery: [
        { src: "assets/projects/my-project-drawing.png", caption: "Dimensioned drawing" }
      ],

      // Optional buttons (repo, video, report).
      links: [
        { label: "Watch demo", url: "https://youtube.com/..." }
      ]
    },
    */

    // PLACEHOLDERS: titles only. Fill in summary, cover, type, skills, year and sections for each.
    { id: "go-kart",             title: "Go Kart",             summary: "Description coming soon.", cover: "assets/projects/go-kart-mk4.jpg", type: "", skills: "", year: "", sections: [], results: [], links: [],
      gallery: [
        { group: "MK1", src: "assets/projects/go-kart-mk1.jpg",   w: 1600, h: 1200 },
        { group: "MK2", src: "assets/projects/go-kart-mk2.jpg",   w: 1600, h: 1200 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-1.jpg", w: 1600, h: 1200 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-2.jpg", w: 1600, h: 1200 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-3.jpg", w: 1200, h: 1600 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-4.jpg", w: 1200, h: 1600 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-5.jpg", w: 1200, h: 1600 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-6.jpg", w: 1200, h: 1600 },
        { group: "MK3", src: "assets/projects/go-kart-mk3-7.jpg", w: 1200, h: 1600 },
        { group: "MK4", src: "assets/projects/go-kart-mk4.jpg",   w: 1200, h: 1600 },
        { group: "MK5", src: "assets/projects/go-kart-mk5-1.jpg", w: 1200, h: 1600 },
        { group: "MK5", src: "assets/projects/go-kart-mk5-2.jpg", w: 1600, h: 1200 },
        { group: "MK5", src: "assets/projects/go-kart-mk5-3.jpg", w: 1580, h: 1600 },
        { group: "MK5", src: "assets/projects/go-kart-mk5-4.jpg", w: 1200, h: 1600 },
        { group: "MK5", src: "assets/projects/go-kart-mk5-5.jpg", w: 1600, h: 1200 }
      ] },
    { id: "dropper-device",      title: "Dropper Device",      summary: "Description coming soon.", cover: "assets/projects/dropper-device-drawing.png", type: "", skills: "", year: "", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/dropper-device-side.png",    caption: "Side view",  w: 1344, h: 844 },
        { src: "assets/projects/dropper-device-front.png",   caption: "Front view", w: 871,  h: 854 },
        { src: "assets/projects/dropper-device-drawing.png", caption: "Dimensioned drawing (Ver. 4)", w: 992, h: 775, wide: true }
      ] },
    { id: "high-speed-auv",      title: "High-Speed AUV",      summary: "Description coming soon.", cover: "assets/projects/high-speed-auv-iso.png", type: "", skills: "", year: "", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/high-speed-auv-mk1.png",   caption: "MK1",            w: 885,  h: 452 },
        { src: "assets/projects/high-speed-auv-iso.png",   caption: "Isometric view", w: 1313, h: 678 },
        { src: "assets/projects/high-speed-auv-side.png",  caption: "Side view",      w: 1717, h: 622 },
        { src: "assets/projects/high-speed-auv-front.png", caption: "End view",       w: 807,  h: 553 }
      ] },
    { id: "night-vision-goggles", title: "Night Vision Goggles", summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], links: [],
      gallery: [{ src: "assets/projects/night-vision-goggles-cad.png", caption: "CAD model", w: 922, h: 1042 }] },
    { id: "potato-cannon",       title: "Potato Cannon",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "flamethrower",        title: "Flamethrower",        summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "hidden-bookshelf",    title: "Hidden Bookshelf",    summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "computer-dock",       title: "Computer Dock",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "alarm",               title: "Alarm",               summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "chainsaw-bike",       title: "Chainsaw Bike",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "rocketry-design",     title: "Rocketry Design",     summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "laser-engraver",      title: "Laser Engraver",      summary: "Description coming soon.", cover: "assets/projects/laser-engraver-1.jpg", type: "", skills: "", year: "", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/laser-engraver-1.jpg", w: 1200, h: 1600 },
        { src: "assets/projects/laser-engraver-2.jpg", w: 1200, h: 1600 }
      ] }

  ]
};
