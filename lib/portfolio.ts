export const navItems = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
  { href: "https://github.com/namanaggarwal76/resume.pdf", label: "resume", external: true }
];

export const profile = {
  github: "https://github.com/namanaggarwal76",
  terminalLines: [
    "> computer science junior @ iiit_hyderabad",
    "> learning and building cool things", 
    "> doing competitive programming and ctfs",
    "> interested in ai systems"
  ],
  shortIntro:
    "CS Junior at IIIT Hyderabad working across systems, AI-enabled products, IoT, and web interfaces.",
  about:
    "I am a Computer Science Student at the International Institute of Information Technology, Hyderabad, originally from Delhi. Most days are split between coursework, competitive programming, assignments, hackathons, and experiments that turn into shipped projects.",
  aboutBlock: `whoami
name:        Naman Aggarwal
location:    Delhi / Hyderabad
education:   CSE @ IIIT Hyderabad
focus:       systems + web + AI
os:          linux, windows`
};

export const skillGroups = [
  {
    name: "Languages",
    items: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL", "Bash", "Flutter"]
  },
  {
    name: "Systems",
    items: ["Unix", "sockets", "libpcap", "distributed systems", "CUDA programming"]
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "React Native"]
  },
  {
    name: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs", "Flask"]
  },
  {
    name: "Core CS",
    items: ["Data Structures", "Algorithms", "optimization"]
  },
  {
    name: "Tools",
    items: ["Git", "Linux", "Docker", "AWS Cloud", "Firebase", "Supabase"]
  }
];

export const projects = [
  {
    title: "C-Shell",
    signal: "systems / unix",
    description:
      "Custom Unix-style shell in C with parsing, forking, pipes, redirection, background jobs, and built-in commands.",
    tech: ["C", "Unix", "processes", "pipes"],
    githubUrl: "https://github.com/namanaggarwal76/C-Shell",
    ascii: "$_\n|>"
  },
  {
    title: "SharkLite",
    signal: "networking / terminal",
    description:
      "Lightweight terminal packet analyzer inspired by Wireshark, capturing and decoding packets in real time with raw sockets.",
    tech: ["C", "libpcap", "networking"],
    githubUrl: "https://github.com/namanaggarwal76/SharkLite",
    ascii: "<>\n~~"
  },
  {
    title: "Random Algorithms",
    signal: "algorithms / benchmarking",
    description:
      "Benchmarking and implementations for randomized algorithms.",
    tech: ["Python", "C++", "Algorithms"],
    githubUrl: "https://github.com/namanaggarwal76/RandomAlgorithms",
    ascii: "rn\n#?"
  },
  {
    title: "DOCSH",
    signal: "distributed systems",
    description:
      "Command-line collaborative document editor with real-time editing, locking, snapshots, and a multi-server architecture.",
    tech: ["C", "CLI", "Distributed Systems"],
    githubUrl: "https://github.com/namanaggarwal76/docsh",
    ascii: "[]\n{}"
  },
  {
    title: "RoadSense",
    signal: "iot / safety / ai",
    description:
      "Two-wheeler safety and fleet management system that detects road events from IMU, GPS, and camera data.",
    tech: ["TypeScript", "Python", "Flutter", "IoT", "AI"],
    githubUrl: "https://github.com/namanaggarwal76/RoadSense",
    ascii: "/\\\n=="
  },
  {
    title: "CSES Solutions",
    signal: "algorithms / practice",
    description:
      "Public collection of CSES problem-solving work and competitive programming practice.",
    tech: ["CSES", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/namanaggarwal76/cses_solutions",
    demoUrl: "https://namanaggarwal76.github.io/cses_solutions/",
    ascii: "[]\ncp"
  },
  {
    title: "Intro To Bulk & Cut",
    signal: "hackathon / prototype",
    description:
      "IBC is a campus-focused nutrition + fitness companion mobile app for IIIT Hyderabad students.",
    tech: ["Hackathon", "Prototype"],
    githubUrl: "https://github.com/hackiiit/hackiiit-2026-buggy",
    ascii: "ib\nc_"
  },
  {
    title: "Bhashani Sarthi",
    signal: "ai / language / travel",
    description:
      "AI-powered multilingual travel companion with translation, OCR, and intelligent planning for travelers across India and beyond.",
    tech: ["TypeScript", "React", "Python", "Gemini", "Bhashini"],
    githubUrl: "https://github.com/namanaggarwal76/bhashani-sarthi",
    ascii: "[bh]\n/|\\"
  },
  {
    title: "YouMatter",
    signal: "wellness / product",
    description:
      "React wellness app that gamifies healthy habits through challenges, rewards, AI coaching, and social features.",
    tech: ["TypeScript", "React", "Supabase", "AI"],
    githubUrl: "https://github.com/namanaggarwal76/YouMatter",
    demoUrl: "https://you-matter-sage.vercel.app/",
    ascii: "++\n<3"
  },
  {
    title: "Timetable Generator",
    signal: "fork / student tool",
    description:
      "Forked timetable generator for IIIT Hyderabad students.",
    tech: ["Python", "Student Tool"],
    githubUrl: "https://github.com/namanaggarwal76/timetable_generator",
    ascii: "tt\n##"
  }
];

export const contacts = [
  {
    command: "github",
    label: "github/namanaggarwal76",
    href: "https://github.com/namanaggarwal76"
  },
  {
    command: "linkedin",
    label: "linkedin/namanaggarwal76",
    href: "https://www.linkedin.com/in/namanaggarwal76/"
  },
  {
    command: "email",
    label: "namanaggarwal76@gmail.com",
    href: "mailto:namanaggarwal76@gmail.com"
  }
];
