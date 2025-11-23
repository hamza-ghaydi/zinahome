import images from "../constant/images";

const sharedSections = [
  {
    heading: "Curabitur Id Commodo Nibet Sit Amet Tincidunt Nunc",
    paragraphs: [
      "Suspense and serenity can live in the same room. We begin with a grounded palette, then layer tactility—think boucle, carved wood, smoke glass—to keep the eye traveling.",
      "Vestibulum odio dolor, gravida vel tincidunt vel, laoreet nec erat. Aliquam erat volutpat. Donec tincidunt dignissim dui at egestas. Phasellus ante bibendum nibh, vitae rutrum nulla dolor.",
      "Nulla facilisi. Quisque laoreet in non ipsum tempor condimentum. Nullam elit metus, rhoncus eu viverra ac, posuere et nulla facilisis. Nullam porta risus non massa tempus condimentum.",
    ],
  },
  {
    heading: "Neque Sodales Ut Etiam Sit Amet Nisi Purus In Mollis",
    paragraphs: [
      "Duis arcu est, fermentum id, volutpat ac, luctus vel nisl. In nisl nisi scelerisque eu ultrices vitae, amet consectetur adipiscing elit duis tristique sollicitudin nibh.",
      "Ut aliquam purus sit amet luctus venenatis. Suspendisse potenti. Integer varius purus lacus, sed cursus turpis vehicula sit amet.",
    ],
  },
];

const sharedBullets = [
  "Tellus elementum sagittis vitae et leo duis varius convallis",
  "Diam maecenas sed enim ut faucibus pellentesque nec",
  "Vitae tempus quam id faucibus pellentesque nec nam aliquam",
  "Pluris faucibus ornare suspendisse sed nisi lacus sed viverra tellus",
  "Condimentum id venenatis a condimentum vitae sapien pellentesque",
  "Odio eu feugiat pretium nibh ipsum consequat",
];

const sharedQuote = {
  text: "Quisque bibendum sem nibh, quis fermentum odio suscipit vitae. Integer et sem id dui fringilla vestibulum. Duis sollicitudin orci eleifend dui pharetra.",
  author: "Halley Mcroy",
  role: "Creative Director, Sydney",
};

export const blogPosts = [
  {
    id: "modest-living-space",
    slug: "the-modest-living-space-furnishings-ideas",
    title: "The Modest Living Space Furnishings Ideas",
    excerpt:
      "Soft lighting, tactile textiles, and sculpted décor pieces can make a modest living area feel curated without crowding the room. Discover the palettes and silhouettes our stylists reach for first.",
    date: "May 27, 2024",
    author: "ZinaHome Studio",
    readTime: "6 min read",
    category: "Classic Furniture",
    tags: ["Ceramic", "Textiles", "Living Room"],
    badge: "Tips",
    cover: images.product_10_01,
    heroImage: images.product_10_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_5_02,
  },
  {
    id: "stylish-furniture-decor",
    slug: "elevate-your-home-with-stylish-furnitures-and-decors",
    title: "Elevate Your Home With Stylish Furniture’s And Decors",
    excerpt:
      "Layer statement furniture with sculptural accessories to build a gallery-like conversation between pieces. We break down the ZinaHome formula for a more curated interior.",
    date: "May 27, 2024",
    author: "ZinaHome Studio",
    readTime: "7 min read",
    category: "Modern Furniture",
    tags: ["Design Trends", "Styling", "Living Room"],
    badge: "Guide",
    cover: images.product_3_01,
    heroImage: images.product_3_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_6_01,
  },
  {
    id: "buying-luxury-furniture",
    slug: "ultimate-guide-to-buying-luxury-furniture",
    title: "The Ultimate Guide To Buying Luxury Furniture",
    excerpt:
      "From kiln-dried frames to artisan upholstery, here are the craftsmanship cues that signal a worthy investment piece—plus what to skip when curating a timeless collection.",
    date: "May 27, 2024",
    author: "Design Editor",
    readTime: "8 min read",
    category: "Luxury Furniture",
    tags: ["Buying Tips", "Investment", "Materials"],
    badge: "Guide",
    cover: images.product_11_01,
    heroImage: images.product_11_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_4_04,
  },
  {
    id: "reading-area-smartly",
    slug: "tips-for-designing-reading-area-space-smartly",
    title: "Tips For Designing Reading Area Space Smartly",
    excerpt:
      "Create a cocoon for slow mornings with layered textures, adjustable lighting, and furniture proportions made for posture-perfect lounging.",
    date: "May 27, 2024",
    author: "Design Editor",
    readTime: "5 min read",
    category: "Indoor Decor",
    tags: ["Lighting", "Textiles", "Workspace"],
    badge: "Tips",
    cover: images.product_4_01,
    heroImage: images.product_4_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_2_02,
  },
  {
    id: "handmade-furniture-benefits",
    slug: "benefits-of-selecting-handmade-furniture",
    title: "Benefits Of Selecting Handmade Furniture",
    excerpt:
      "Discover why artisan joinery, low-volume production, and responsible sourcing deliver heirloom-level furniture with soul.",
    date: "May 27, 2024",
    author: "Craft Lead",
    readTime: "4 min read",
    category: "Handmade",
    tags: ["Sustainability", "Craftsmanship"],
    badge: "Story",
    cover: images.product_5_01,
    heroImage: images.product_5_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_3_03,
  },
  {
    id: "dining-hall-essentials",
    slug: "elegant-essential-dining-hall-furniture-and-decors",
    title: "Elegant & Essential Dining Hall Furniture & Decors",
    excerpt:
      "From sculptural dining tables to linear buffets, build a dining experience that balances ergonomics with atmospheric lighting cues.",
    date: "May 27, 2024",
    author: "Dining Curator",
    readTime: "7 min read",
    category: "Dining",
    tags: ["Dining", "Lighting"],
    badge: "Guide",
    cover: images.product_7_01,
    heroImage: images.product_7_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_7_03,
  },
  {
    id: "maximize-space-versatile",
    slug: "maximizing-space-with-versatile-furnitures",
    title: "Maximizing Space With Versatile Furniture’s",
    excerpt:
      "Modular silhouettes, hidden storage, and neutral palettes create adaptable rooms that expand with every gathering.",
    date: "May 27, 2024",
    author: "Style Coach",
    readTime: "6 min read",
    category: "Modern Furniture",
    tags: ["Storage", "Small Spaces", "Modular"],
    badge: "Tips",
    cover: images.product_8_01,
    heroImage: images.product_8_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_8_04,
  },
  {
    id: "furnish-affordably",
    slug: "easy-way-to-furnish-your-home-affordably",
    title: "Easy Way To Furnish Your Home Affordably",
    excerpt:
      "Define the mood, edit your palette, and mix value finds with a single investment hero to keep spending intentional without compromising style.",
    date: "May 27, 2024",
    author: "Budget Stylist",
    readTime: "5 min read",
    category: "Budget Friendly",
    tags: ["Budget", "Planning"],
    badge: "Tips",
    cover: images.product_2_01,
    heroImage: images.product_2_01,
    sections: sharedSections,
    bullets: sharedBullets,
    quote: sharedQuote,
    secondaryImage: images.product_2_03,
  },
];

export const recentPosts = blogPosts.slice(0, 4).map(({ id, slug, title, cover, date }) => ({
  id,
  slug,
  title,
  cover,
  date,
}));

export const blogCategories = [
  { name: "Classic Furniture", count: 4 },
  { name: "Modern Furniture", count: 6 },
  { name: "Luxury Furniture", count: 3 },
  { name: "Handmade", count: 2 },
  { name: "Indoor Decor", count: 5 },
  { name: "Budget Friendly", count: 3 },
];

export const blogTags = [
  "Ceramic",
  "Steel Furniture",
  "Wood Furniture",
  "Lighting",
  "Workspace",
  "Storage",
  "Small Spaces",
  "Sustainability",
  "Textiles",
  "Dining",
  "Budget",
];

export const blogPromo = {
  title: "Modern Furniture Style",
  description: "Find your dream home mood board and unlock members-only perks.",
  discount: "75% OFF",
  cta: "Order now and get discount",
  badge: "Limited Offer",
  image: images.product_6_01,
};

export default blogPosts;

