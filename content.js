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
  headshot: "",                                      // e.g. "assets/headshot.jpg" (portrait, 4:5, ~600 px wide); "" shows your initials
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
    { id: "go-kart",             title: "Go Kart",             summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "dropper-device",      title: "Dropper Device",      summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "high-speed-auv",      title: "High-Speed AUV",      summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "night-vision-goggles", title: "Night Vision Goggles", summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "potato-cannon",       title: "Potato Cannon",       summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "flamethrower",        title: "Flamethrower",        summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "hidden-bookshelf",    title: "Hidden Bookshelf",    summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "computer-dock",       title: "Computer Dock",       summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "alarm",               title: "Alarm",               summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "chainsaw-bike",       title: "Chainsaw Bike",       summary: "Description coming soon.", cover: "", type: "", skills: "",year: "", sections: [], results: [], gallery: [], links: [] }

  ]
};
