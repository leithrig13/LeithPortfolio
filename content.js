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
    "I'm a mechanical engineering student at UBC Okanagan, and I like taking ideas from concept to working systems. I'm the Mechanical Lead on UBC Okanagan Marine Robotics, where I oversee eight sub-teams of about 25 students building an autonomous underwater vehicle for the international RoboSub competition.",
    "I build a lot on my own too, and I like to iterate. My go-kart started as a wooden, gravity-powered cart and ended up a gas-powered, fully roll-caged two-seater.",
    "Outside of engineering, I've spent two summers crewing a Canadian Coast Guard inshore rescue boat on the BC coast, responding to search and rescue calls, and was named the program's Rookie of the Year in 2025. It taught me to communicate clearly and stay calm under pressure. My days start early at the gym, and the rest goes to studying and building."
  ],

  links: [
    { label: "Email",    url: "mailto:leithr@telus.net" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/leith" },
    { label: "GitHub",   url: "https://github.com/leithrig13" }
  ],

  skills: [
    { group: "CAD",         items: "SOLIDWORKS (CSWP, CSWA), Technical drawings" },
    { group: "Fabrication", items: "3D printing, Laser engraving, Iterative prototyping" },
    { group: "Electronics", items: "Arduino, Electronics & wiring" },
    { group: "Programming", items: "Python, C++" },
    { group: "Languages",   items: "English, French (DELF B2)" }
  ],

  // Licenses, courses, safety tickets, awards. badge (optional) is an image in assets/badges/.
  certifications: [
    /* { name: "WHMIS", issuer: "WorkSafeBC", year: "2025" }, */
    { name: "Certified SOLIDWORKS Professional", issuer: "SolidWorks Designer", year: "2026", id: "C-HNUJG86K5F", badge: "assets/badges/cswp.png" },
    { name: "Certified SOLIDWORKS Associate",    issuer: "SolidWorks Designer", year: "2026", id: "C-LRNHX7Q54K", badge: "assets/badges/cswa.png" },
    { name: "Standard First Aid & CPR-C" },
    { name: "Open Water Diver", issuer: "PADI" },
  ],

  // Internships, competitions, leadership roles, notable jobs. text can be one string or a list of paragraphs.
  experience: [
    /* { role: "Team Lead", org: "Okanagan Marine Robotics", period: "2024–Present", text: "One or two sentences on what you did." }, */
    { role: "Crew Member, Inshore Rescue Boat", org: "Canadian Coast Guard, Search and Rescue · Victoria, BC", period: "Summers 2025 & 2026",
      text: [
        "Crewed a three-person inshore rescue boat station in remote coastal locations, responding to marine search and rescue taskings. I operated the Fast Rescue Craft, often as the only resource available to people injured or in distress, gave on-scene patient care as a first responder, and handed patients over to paramedics. Between calls I sometimes worked on the boats' engines. Named the program's Rookie of the Year in 2025.",
        "What I took from it: on a three-person crew, clear communication and staying calm under pressure aren't optional. Hundreds of hours of training, plus keeping the engines running, taught me that being ready on short notice comes from the preparation and maintenance done before anything goes wrong. I bring that same mindset to how I design and test."
      ] },
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
    { id: "go-kart",             title: "Go Kart",             summary: "Description coming soon.", cover: "assets/projects/go-kart-mk4.jpg", type: "", skills: "Welding, Fabrication, Mechanical assembly", year: "2019–2021", sections: [], results: [], links: [],
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
    { id: "dropper-device",      title: "Dropper Device",
      summary: "A servo-driven rotary dropper that carries two competition markers and releases them one at a time for RoboSub's bin task.",
      cover: "assets/projects/dropper-device-drawing.png", type: "Team (RoboSub)", skills: "CAD, Technical drawing", year: "2025", links: [],
      sections: [
        { heading: "Problem",     text: "In the RoboSub 2026 Recon task, the AUV drops up to two markers into bins along a pipeline. A marker in any bin scores 300 points, and one in each of the two bins matching the AUV's role scores 800 apiece, so a clean pair of drops is worth up to 1,600 points. Landing a marker also counts toward the run's time bonus. The vehicle needed a way to carry two markers through the whole run and release them one at a time, only when commanded." },
        { heading: "Constraints", text: "Each marker must fit within a 2.0 × 2.0 × 6.0 in (51 × 51 × 152 mm) box and weigh no more than 2.0 lb (0.91 kg) in air. Going over by less than 10% costs 500 points, and more than that disqualifies the marker. A vehicle can carry at most two, and nothing else may be released into the pool. The mechanism had to hold both markers securely through acceleration and turns, then let go of exactly one at a time, underwater and fully autonomously." },
        { heading: "My role",     text: "As a member of UBC Okanagan Marine Robotics, I took ownership of the dropper and ran it from concept through design, prototyping and manufacturing." },
        { heading: "Process",     text: "I went with a rotary design: a compact carrier inside a rigid frame, indexed by a single underwater servo. In the stowed position the rotor supports both markers. On command, the servo turns the carrier to line one pocket up with the discharge opening and a single marker falls free; a second turn releases the other. I chose this layout to keep the subsystem compact, cut the part count, improve reliability underwater and make every drop repeatable. It's sized around our markers, steel ball bearings with blue fins, and went through four versions in SOLIDWORKS with 3D-printed prototypes along the way, up to the Version 4 drawing below." }
      ],
      results: [
        { value: "2", label: "Markers, released one at a time" },
        { value: "1", label: "Servo drives the whole mechanism" },
        { value: "4", label: "Design versions" }
      ],
      gallery: [
        { src: "assets/projects/dropper-device-side.png",    caption: "Side view",  w: 1344, h: 844 },
        { src: "assets/projects/dropper-device-front.png",   caption: "Front view", w: 871,  h: 854 },
        { src: "assets/projects/dropper-device-drawing.png", caption: "Dimensioned drawing (Ver. 4)", w: 992, h: 775, wide: true }
      ] },
    { id: "high-speed-auv",      title: "High-Speed AUV",
      summary: "A small, high-speed auxiliary AUV designed to work alongside the team's main vehicle at RoboSub.",
      cover: "assets/projects/high-speed-auv-iso.png", type: "Team (RoboSub)", skills: "CAD, 3D rendering, Novel design", year: "2026", results: [], links: [],
      sections: [
        { heading: "Problem",     text: "RoboSub 2026 lets each team field up to two vehicles. Both run the course at the same time and share one countdown clock, and they can earn up to 1,000 extra points by communicating and cueing each other. Once the minimum tasks are done, every minute left on the clock is also worth 100 bonus points. My goal was a small, fast second vehicle to complement the main AUV." },
        { heading: "Constraints", text: "Both vehicles together have to fit in the same 3 × 3 × 6 ft (0.9 × 0.9 × 1.8 m) volume allowed for a single AUV. Each one is weighed on its own: at 22 kg or less it earns the largest weight bonus, above 38 kg it loses points, and above 60 kg it's disqualified. Each vehicle must also pass through the validation gate first, run fully autonomously, have its own kill switch that cuts power to all propulsion, use shrouded propellers, and float at least 0.5% positively buoyant when switched off." },
        { heading: "My role",     text: "As a member of UBC Okanagan Marine Robotics, I designed and prototyped the auxiliary vehicle." },
        { heading: "Process",     text: "The layout is a slender, torpedo-style vehicle built around a clear tube hull, with swept wings at the tail around a shrouded thruster. MK1 carried the battery and electronics inside the tube and steered with a servo-driven fin on a pushrod linkage. The later model reworks the front end around a larger ducted thruster on bolted side plates, with a linkage-driven fin beneath it." }
      ],
      gallery: [
        { src: "assets/projects/high-speed-auv-mk1.png",   caption: "MK1",            w: 885,  h: 452 },
        { src: "assets/projects/high-speed-auv-iso.png",   caption: "Isometric view", w: 1313, h: 678 },
        { src: "assets/projects/high-speed-auv-side.png",  caption: "Side view",      w: 1717, h: 622 },
        { src: "assets/projects/high-speed-auv-front.png", caption: "End view",       w: 807,  h: 553 }
      ] },
    { id: "night-vision-goggles", title: "Night Vision Goggles", summary: "Description coming soon.", cover: "", type: "", skills: "CAD, Product design", year: "2024", sections: [], results: [], links: [],
      gallery: [{ src: "assets/projects/night-vision-goggles-cad.png", caption: "CAD model", w: 922, h: 1042 }] },
    { id: "potato-cannon",       title: "Potato Cannon",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2019", sections: [], results: [], gallery: [], links: [] },
    { id: "flamethrower",        title: "Flamethrower",        summary: "Description coming soon.", cover: "assets/projects/flamethrower-1.jpg", type: "Scientific", skills: "Scientific process, Physics concepts", year: "2023", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/flamethrower-1.jpg", caption: "Live demo",  w: 2000, h: 1125 },
        { src: "assets/projects/flamethrower-2.jpg", caption: "The rig",    w: 1200, h: 1600 }
      ] },
    { id: "hidden-bookshelf",    title: "Hidden Bookshelf",    summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "computer-dock",       title: "Computer Dock",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2024", sections: [], results: [], gallery: [], links: [] },
    { id: "alarm",               title: "Alarm",               summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2022", sections: [], results: [], gallery: [], links: [] },
    { id: "chainsaw-bike",       title: "Chainsaw Bike",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2018", sections: [], results: [], gallery: [], links: [] },
    { id: "rocketry-design",     title: "Rocketry Design",     summary: "Description coming soon.", cover: "", type: "", skills: "", year: "", sections: [], results: [], gallery: [], links: [] },
    { id: "laser-engraver",      title: "Laser Engraver",      summary: "Description coming soon.", cover: "assets/projects/laser-engraver-1.jpg", type: "", skills: "Electronics, Mechanical integration", year: "", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/laser-engraver-1.jpg", w: 1200, h: 1600 },
        { src: "assets/projects/laser-engraver-2.jpg", w: 1200, h: 1600 }
      ] }

  ]
};
