export const site = {
  name: "Pyx Studio",
  tagline: "Building thoughtful digital products for everyday life.",
  email: "contact@pyxstudio.nz",
  url: "https://pyx-studio.pages.dev",
  about: [
    "Pyx Studio builds apps that help people make faster, better everyday decisions.",
    "Our AI-assisted shopping tools help users turn preferences and budgets into ready-to-review carts, saving time, reducing admin, and making it easier to choose the right products.",
    "Our travel platform helps users explore destinations, routes, and transport options through real recommendations from other travellers on an interactive globe.",
    "We build simple, useful software for real-world problems: less searching, less guessing, less wasted time.",
  ],
  products: [
    {
      name: "Travel App",
      description:
        "A modern travel app that lets users see other travelers' transport recommendations for different cities and routes across the globe.",
      status: "In development",
    },
    {
      name: "AI Assisted Shopping",
      description:
        "An intelligent shopping assistant that understands your preferences and takes you straight to the checkout.",
      status: "In development",
    },
  ],
  nav: [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
