export const site = {
  name: "Pyx Studio",
  tagline: "Building thoughtful digital products for everyday life.",
  email: "contact@pyxstudio.nz",
  url: "https://pyx-studio.pages.dev",
  vision: [
    "Pyx Studio is focused on crafting software that feels intuitive, reliable, and genuinely useful.",
    "We believe great products emerge from deep understanding of real problems—not from chasing trends. Every project starts with clarity of purpose and ends with polish in the details.",
    "Our work spans travel, commerce, and AI-assisted experiences. We ship carefully, iterate thoughtfully, and build tools people reach for every day.",
  ],
  products: [
    {
      name: "Travel App",
      description:
        "A modern travel companion that helps you plan trips, track itineraries, and discover places worth visiting—all in one calm, focused experience.",
      status: "In development",
    },
    {
      name: "AI Assisted Shopping",
      description:
        "An intelligent shopping assistant that understands your preferences, compares options, and helps you make confident purchase decisions faster.",
      status: "In development",
    },
  ],
  nav: [
    { label: "Vision", href: "#vision" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
