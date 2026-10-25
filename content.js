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
    { name: "Marine Advanced First Aid", issuer: "Canadian Red Cross", year: "2025", badge: "assets/badges/marine-advanced-first-aid.svg" },
    { name: "Open Water Diver", issuer: "PADI", badge: "assets/badges/padi-open-water.png" },
  ],

  // Internships, competitions, leadership roles, notable jobs. text can be one string or a list of paragraphs.
  experience: [
    /* { role: "Team Lead", org: "Okanagan Marine Robotics", period: "2024–Present", text: "One or two sentences on what you did." }, */
    { role: "Mechanical Lead", org: "UBC Okanagan Marine Robotics (RoboSub) · Kelowna, BC", period: "Sept 2025 – Present",
      text: "Lead the mechanical side of the team's autonomous underwater vehicle for the international RoboSub competition, overseeing eight sub-teams of about 25 engineering students working on separate, complex projects." },
    { role: "Crew Member, Inshore Rescue Boat", org: "Canadian Coast Guard, Search and Rescue · Victoria, BC", period: "Summers 2025 & 2026",
      text: [
        "Crewed a three-person inshore rescue boat station in remote coastal locations, responding to marine search and rescue taskings. I operated the Fast Rescue Craft, often as the only resource available to people injured or in distress, gave on-scene patient care as a first responder, and handed patients over to paramedics. One of my responsibilities was ensuring the smooth operation and upkeep of the engines and the maintenance of the boat, including daily inspections and cleaning. Named the program's Rookie of the Year in 2025.",
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
      // A video uses video: "file.mp4" (plus an optional poster image) in place of src.
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

    // hidden: true keeps a project off the site until it's finished. Delete it to publish the project.
    { id: "flamethrower",        title: "Flamethrower",
      summary: "A flamethrower made from an old fire extinguisher, built to explain Bernoulli's principle in my video entry for the Breakthrough Junior Challenge.",
      cover: "assets/projects/flamethrower-1.jpg", type: "Scientific", skills: "Scientific process, Physics concepts", year: "2023",
      links: [{ label: "Watch the video", url: "https://youtu.be/s4bYDZ8JGsw" }],
      sections: [
        { heading: "The challenge",       text: "The Breakthrough Junior Challenge asks students to explain an advanced idea in physics, math or biology in a captivating two-minute video. I chose Bernoulli's principle, shown through fluid flowing out of a pressurized cylinder, and built a flamethrower to demonstrate it." },
        { heading: "The build",           text: "I emptied an old fire extinguisher, cut a hole in it and fitted a Schrader (bike tire) valve so I could repressurize it. I filled it with kerosene and 3D printed a wick holder for the front, holding a wick dipped in kerosene to light the stream as it leaves the nozzle." },
        { heading: "The video",           text: "The video shows the stream of fire leaving the flamethrower, along with its velocity profiles, and walks through the math behind the flow." },
        { heading: "Getting the arc right", text: "I wanted the burning kerosene to trace a parabolic path on camera. With the original nozzle, the fuel just lit up as it came out instead of arcing. I swapped the nozzle, but then the stream wasn't aerosolized and wouldn't ignite at all. The fix was to heat the kerosene closer to its ignition point before firing, so the wick had to add much less heat to light it, and the stream ignited while still showing the parabolic path." }
      ],
      results: [
        { value: "2 min",     label: "Video explaining the physics" },
        { value: "Bernoulli", label: "Principle demonstrated: flow from a pressurized cylinder" }
      ],
      gallery: [
        { src: "assets/projects/flamethrower-1.jpg", caption: "Live demo",  w: 2000, h: 1125 },
        { src: "assets/projects/flamethrower-2.jpg", caption: "The rig",    w: 1200, h: 1600 }
      ] },
    { id: "go-kart",             title: "Go Kart",
      summary: "A go-kart I designed and rebuilt over six versions, from scrap wood and bike wheels in grade 8, to a welded steel two-seater, to a lightweight frame made from broken carbon fibre hockey sticks.",
      cover: "assets/projects/go-kart-mk4.jpg", type: "Personal", skills: "MIG welding, Fabrication, CAD, Iterative design", year: "2019–2021", links: [],
      sections: [
        { heading: "MK1: First build",    text: "I started over spring break in grade 8, building it from scrap wood, screws and bolts, two 10-speed bike wheels and a pair of small wheels we had lying around. It sat very low to the ground and had no engine: I rolled it downhill and steered with my feet. Two problems showed up quickly. The wheel layout made it unstable, and the square frame flexed a lot. I don't have a photo of this one." },
        { heading: "MK2: A-frame",        text: "To stop the flex, I rebuilt the body as an A-frame to make it stiffer." },
        { heading: "MK3: More clearance", text: "Next I fitted wider tires, reworked the front steering and raised the frame for more ground clearance. It was still gravity-powered and steered with my feet, and that was as far as I could take wood." },
        { heading: "MK4: Steel",          text: "That school year, my woodwork teacher let me use the shop's MIG welder and its scrap metal. I modelled the design in CAD on my iPad, worked out the details in sketches, and learned to weld by building it. The result was a two-seater about 7 ft long with a full roll cage. I made almost everything myself: the axle, the wheel hubs (cut and welded), and a push-pull steering linkage that works on the same idea as rack and pinion, using parts I cut and bored out. The seats were free from the side of the road, and the frame was all shop scrap." },
        { heading: "MK5: Cutting weight", text: "Once it was finished, the kart was far too heavy for its small engine to drive well. I cut off the roll cage and kept about a foot of sidewall, but it was still too heavy, so the sidewalls came off as well. Stripped down to the base frame, it finally drove, if only a little." },
        { heading: "MK6: Hockey sticks",  text: "The steel kart was carrying far too much metal, so I redesigned it as a compact one-seater. I kept the same hubs and steering components but built the frame from broken carbon fibre hockey sticks I had lying around, which are very light and very resistant to bending. The weak point was the joints: bolting straight through the sticks let them rotate too much at each connection." },
        { heading: "What I learned",      text: "Each version fixed the biggest problem of the one before: a frame that flexed led to an A-frame, the limits of wood led to steel, and an overweight steel kart led to a carbon fibre frame. I learned to keep weight in check against the power available, and that a structure is only as good as its joints. Along the way I learned MIG welding, went from CAD and sketches to a finished build, and made my own axle, hubs and steering." }
      ],
      results: [
        { value: "Grade 8", label: "Where it started" },
        { value: "~7 ft",   label: "Steel two-seater with a full roll cage" },
        { value: "MIG",     label: "Welding, learned on this build" }
      ],
      gallery: [
        { group: "MK2", src: "assets/projects/go-kart-mk1.jpg",   w: 1600, h: 1200 },
        { group: "MK3", src: "assets/projects/go-kart-mk2.jpg",   w: 1600, h: 1200 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-1.jpg", w: 1600, h: 1200 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-2.jpg", w: 1600, h: 1200 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-3.jpg", w: 1200, h: 1600 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-4.jpg", w: 1200, h: 1600 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-5.jpg", w: 1200, h: 1600 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-6.jpg", w: 1200, h: 1600 },
        { group: "MK4", src: "assets/projects/go-kart-mk3-7.jpg", w: 1200, h: 1600 },
        { group: "MK5", src: "assets/projects/go-kart-mk4.jpg",   w: 1200, h: 1600 },
        { group: "MK6", src: "assets/projects/go-kart-mk5-1.jpg", w: 1200, h: 1600 },
        { group: "MK6", src: "assets/projects/go-kart-mk5-2.jpg", w: 1600, h: 1200 },
        { group: "MK6", src: "assets/projects/go-kart-mk5-3.jpg", w: 1580, h: 1600 },
        { group: "MK6", src: "assets/projects/go-kart-mk5-4.jpg", w: 1200, h: 1600 },
        { group: "MK6", src: "assets/projects/go-kart-mk5-5.jpg", w: 1600, h: 1200 }
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
      cover: "assets/projects/high-speed-auv-iso.png", type: "Team (RoboSub)", skills: "CAD, 3D rendering, Novel design", year: "2026", links: [],
      sections: [
        { heading: "Problem",     text: "RoboSub 2026 lets each team field up to two vehicles. Both run the course at the same time and share one countdown clock, and they can earn up to 1,000 extra points by communicating and cueing each other. Once the minimum tasks are done, every minute left on the clock is also worth 100 bonus points. My goal was a small, fast second vehicle to complement the main AUV." },
        { heading: "Constraints", text: "Both vehicles together have to fit in the same 3 × 3 × 6 ft (0.9 × 0.9 × 1.8 m) volume allowed for a single AUV. Each one is weighed on its own: at 22 kg or less it earns the largest weight bonus, above 38 kg it loses points, and above 60 kg it's disqualified. Each vehicle must also pass through the validation gate first, run fully autonomously, have its own kill switch that cuts power to all propulsion, use shrouded propellers, and float at least 0.5% positively buoyant when switched off. On top of that, our budget only covered two thrusters and one servo, so the design had to get enough control out of just three actuators to actually drive it." },
        { heading: "My role",     text: "As a member of UBC Okanagan Marine Robotics, I took on the auxiliary vehicle as an extra project after finishing the dropper, and designed and prototyped it. This year it is going through revisions, which I'm overseeing as mechanical lead." },
        { heading: "Control",     text: "With only three actuators, each one handles a single axis. The front thruster pitches the nose up or down, the rear thruster drives the vehicle forward and in reverse, and a servo-driven rudder handles yaw to turn left or right. Together they cover nearly all the movement we need. The one thing the vehicle can't do reliably is control its roll." },
        { heading: "Process",     text: "The layout is a slender, torpedo-style vehicle built around a clear tube hull, with swept wings at the tail around a shrouded thruster. MK1 carried the battery and electronics inside the tube and steered with a servo-driven fin on a pushrod linkage. The later model reworks the front end around a larger ducted thruster on bolted side plates, with a linkage-driven fin beneath it." }
      ],
      results: [
        { value: "2", label: "Thrusters: pitch and forward thrust" },
        { value: "1", label: "Servo-driven rudder for yaw" },
        { value: "3", label: "Actuators to drive the whole vehicle" }
      ],
      gallery: [
        { src: "assets/projects/high-speed-auv-mk1.png",   caption: "MK1",            w: 885,  h: 452 },
        { src: "assets/projects/high-speed-auv-iso.png",   caption: "Isometric view", w: 1313, h: 678 },
        { src: "assets/projects/high-speed-auv-side.png",  caption: "Side view",      w: 1717, h: 622 },
        { src: "assets/projects/high-speed-auv-front.png", caption: "End view",       w: 807,  h: 553 }
      ] },
    { id: "night-vision-handheld", title: "Night Vision Handheld",
      summary: "A DIY handheld night-vision device built from 3D-printed parts, a salvaged security camera, a backup camera screen and a DeWalt battery.",
      cover: "assets/projects/night-vision-handheld-side.jpg", type: "R&D", skills: "CAD, 3D printing, Electronics", year: "2023", results: [], links: [],
      sections: [
        { heading: "The build",  text: "The body is 3D printed. The camera and infrared (IR) LED arrays are re-used from a security camera, and a backup camera screen serves as the display." },
        { heading: "Power",      text: "It runs on a 12 V DeWalt battery, which clips onto a 3D-printed adapter at the base of the grip." },
        { heading: "Two IR modes", text: "In normal mode only one IR array is on. Holding down a push button turns on the second array for extra light, and it switches off again when the button is released." }
      ],
      gallery: [
        { src: "assets/projects/night-vision-handheld-side.jpg",   caption: "Side view",       w: 1200, h: 1600 },
        { src: "assets/projects/night-vision-handheld-front.jpg",  caption: "Normal mode, one IR array on", w: 1200, h: 1600 },
        { src: "assets/projects/night-vision-handheld-screen.jpg", caption: "Backup camera screen", w: 1200, h: 1600 },
        { src: "assets/projects/night-vision-handheld-cad.png",    caption: "CAD model",       w: 922,  h: 1042 }
      ] },
    { hidden: true, id: "potato-cannon",       title: "Potato Cannon",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2019", sections: [], results: [], gallery: [], links: [] },
    { hidden: true, id: "computer-dock",       title: "Computer Dock",       summary: "Description coming soon.", cover: "assets/projects/computer-dock-stand.png", type: "", skills: "CAD, 3D printing", year: "2024", sections: [], results: [], links: [],
      gallery: [
        { src: "assets/projects/computer-dock-stand.png",           caption: "Laptop stand (CAD)",               w: 796, h: 550 },
        { src: "assets/projects/computer-dock-legion-toolpath.png", caption: "LegionStand, sliced for printing", w: 789, h: 843 }
      ] },
    { id: "alarm",               title: "Alarm",
      summary: "A farm bell from the 1900s that I restored, fitted with a 3D-printed light and connected to a Wi-Fi plug so I can ring it from my phone.",
      cover: "assets/projects/alarm-1.jpg", type: "Personal", skills: "Restoration, Electromechanical repair, 3D printing", year: "2022", results: [], links: [],
      sections: [
        { heading: "The find",        text: "This started as an old farm bell from the 1900s that I found and decided to bring back to working order." },
        { heading: "Restoration",     text: "I sanded the whole bell down and repainted everything, then repaired the inside: the electromagnet and the bell mechanism that strikes the bells." },
        { heading: "Adding a light",  text: "I added a light to the bottom of the bell, using a 3D-printed mount, a 3D-printed shroud, a bulb and a socket." },
        { heading: "Ringing it from my phone", text: "I hooked it up to a Wi-Fi smart plug, so I can trigger the bell from my phone." }
      ],
      gallery: [
        { video: "assets/projects/alarm-bell.mp4", poster: "assets/projects/alarm-bell-poster.jpg", caption: "Ringing (sound on)", w: 720, h: 1280 },
        { src: "assets/projects/alarm-1.jpg", w: 1200, h: 1600 },
        { src: "assets/projects/alarm-2.jpg", w: 1200, h: 1600 }
      ] },
    { hidden: true, id: "chainsaw-bike",       title: "Chainsaw Bike",       summary: "Description coming soon.", cover: "", type: "", skills: "", year: "2018", sections: [], results: [], gallery: [], links: [] },
    { hidden: true, id: "rocketry-design",     title: "Rocketry Design",     summary: "Description coming soon.", cover: "assets/projects/rocketry-shells.png", type: "", skills: "CAD, 3D printing, Iterative design", year: "2025", sections: [], results: [], links: [],
      gallery: [] },
    { id: "laser-engraver",      title: "Laser Engraver",
      summary: "My first 3D printer, an MP Select Mini V2, converted into a DIY laser engraver with a 3D-printed mount and image-to-G-code software I built with help from AI.",
      cover: "assets/projects/laser-engraver-1.jpg", type: "Personal", skills: "Electronics, Mechanical integration", year: "2025", results: [], links: [],
      sections: [
        { heading: "Where it started", text: "The MP Select Mini V2 was my first 3D printer, which I got in grade 7. Later I added two bigger printers, an Ender 5 Plus and, about two years after that, a CR-10 Smart Pro. With those doing the printing, the small one was free to become something else." },
        { heading: "The conversion",   text: "I bought an inexpensive laser module on Amazon, wired it into the printer's extruder pins, and mounted it with a bracket I 3D printed. The printer's motion system now moves the laser the same way it used to move the print head." },
        { heading: "The software",     text: "Finding software that converted images into G-code well was the hardest part, and none of the tools I tried worked the way I needed. So I used AI to help me build my own converter. It turns an image into G-code that I upload straight to the printer." },
        { heading: "Limits",           text: "The laser is low-powered, a trade-off for keeping the cost down, so it only works on certain materials." }
      ],
      gallery: [
        { src: "assets/projects/laser-engraver-1.jpg", w: 1200, h: 1600 },
        { src: "assets/projects/laser-engraver-2.jpg", w: 1200, h: 1600 }
      ] }

  ]
};
