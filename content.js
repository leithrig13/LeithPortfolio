/* =====================================================================
   CONTENT FILE: this is the only file you need to edit.
   Save, refresh the page, done.
   ===================================================================== */

window.SITE = {
  name: "Your Name",
  initials: "Y. Name",
  headline: "Mechanical and mechatronics design",   // shown on the dimension line under your name
  intro: "One or two sentences on what you design and build.",
  location: "Kelowna, BC",
  resume: "resume.pdf",                              // put the file in this folder, or set to "" to hide

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
      tools: "SolidWorks, Arduino",
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

  ]
};
