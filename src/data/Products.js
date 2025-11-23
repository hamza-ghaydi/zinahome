import images from "../constant/images";

export const products = [

  // * Home decoration
    // 1
    {
      slug: "modern-ceramic-lamp",
      title: "Modern Ceramic Lamp",
      mainImage: images.product_2_01,
      images: [images.product_2_02, images.product_2_03 , images.product_2_04],
      video: "/videos/ceramic-lamp.mp4",
      categories: ["Home decoration"],
      reviews: 148,
      ratingStars: 4.7,
      shortDescription: "A handcrafted ceramic lamp that adds warm ambiance to any living space.",
      availability: "In Stock",
      price: 89.99,
      description:
        "This modern ceramic lamp is crafted with premium clay and finished with a matte glaze. Designed to cast warm, ambient lighting ideal for bedrooms, living rooms, and lounges.",
      features: [
        "Matte ceramic finish",
        "Warm ambient lighting",
        "Energy-efficient bulb included",
        "Durable and long-lasting"
      ]
    },
  
    // 2
    {
      slug: "soft-seater-chair",
      title: "Soft Seater Chair",
      mainImage: images.product_1_01,
      images: [images.product_1_02, images.product_1_03, images.product_1_04],
      video: "/videos/soft-seater.mp4",
      categories: ["Home decoration"],
      reviews: 210,
      ratingStars: 4.8,
      shortDescription: "A stylish and ultra-soft chair designed for comfort and relaxation.",
      availability: "In Stock",
      price: 129.99,
      description:
        "The Soft Seater Chair combines comfort and elegance. Designed with premium cushioning and a durable fabric layer, it fits reading corners and modern living rooms.",
      features: [
        "Premium comfort foam",
        "Durable upholstery",
        "Lightweight wooden legs",
        "Ergonomic design"
      ]
    },
  
    // 3
    {
      slug: "round-wood-table",
      title: "Round Wood Table",
      mainImage: images.product_3_01,
      images: [images.product_3_02, images.product_3_03, images.product_3_04],
      video: "/videos/round-wood-table.mp4",
      categories: ["Home decoration"],
      reviews: 177,
      ratingStars: 4.6,
      shortDescription: "Minimalist round table crafted from natural Moroccan walnut wood.",
      availability: "In Stock",
      price: 149.99,
      description:
        "Featuring a clean round design and natural wood grain finish, this table enhances your living room with simplicity and style.",
      features: [
        "100% natural walnut wood",
        "Water-resistant coating",
        "Minimalist rounded edges",
        "Perfect for living spaces"
      ]
    },

  

    // * office decoration
  
    // 4
    {
      slug: "single-seater-office-chair",
      title: "Single Seater Office Chair",
      mainImage: images.product_4_01,
      images: [images.product_4_02, images.product_4_03 , images.product_4_04],
      video: "/videos/office-chair.mp4",
      categories: ["Office decoration"],
      reviews: 322,
      ratingStars: 4.8,
      shortDescription: "A premium single-seater sofa chair made for office receptions and lounges.",
      availability: "In Stock",
      price: 199.99,
      description:
        "A modern and comfortable sofa chair designed to enhance productivity and provide all-day support.",
      features: [
        "Soft PU leather",
        "Ergonomic design",
        "Durable steel structure",
        "Elegant stitching pattern"
      ]
    },
  
    // 5
    {
      slug: "handmade-floral-vase",
      title: "Handmade Floral Vase",
      mainImage: images.product_5_01,
      images: [images.product_5_02, images.product_5_03 , images.product_5_04],
      video: "/videos/floral-vase.mp4",
      categories: ["Office decoration"],
      reviews: 89,
      ratingStars: 4.4,
      shortDescription: "A handmade ceramic vase featuring intricate Moroccan floral patterns.",
      availability: "In Stock",
      price: 39.99,
      description:
        "This handcrafted vase adds elegance to any workspace with its detailed floral motifs and artisanal finish.",
      features: [
        "Hand-painted details",
        "High-quality ceramic",
        "Water-resistant interior",
        "Perfect for offices"
      ]
    },
  
    // 6
    {
      slug: "foam-cooling-pillow",
      title: "Foam Cooling Pillow",
      mainImage: images.product_6_01,
      images: [images.product_6_02, images.product_6_03 , images.product_6_04],
      video: "/videos/cooling-pillow.mp4",
      categories: ["Office decoration"],
      reviews: 141,
      ratingStars: 4.5,
      shortDescription: "Cooling memory foam pillow designed for optimal neck and head support.",
      availability: "In Stock",
      price: 24.99,
      description:
        "Stay fresh and supported during long office hours with this breathable memory foam pillow.",
      features: [
        "Cooling gel layer",
        "Breathable mesh fabric",
        "High-density foam",
        "Ergonomic contour support"
      ]
    },


  
   
  
    // * Indoor decoration
  
    // 10
    {
      slug: "microfiber-bed-pillow",
      title: "Microfiber Bed Pillow",
      mainImage: images.product_6_01,
      images: [images.product_6_02 , images.product_6_03, images.product_6_04],
      video: "/videos/microfiber-pillow.mp4",
      categories: ["Indoor decoration"],
      reviews: 154,
      ratingStars: 4.5,
      shortDescription: "A soft, breathable pillow made for ultimate sleeping comfort.",
      availability: "In Stock",
      price: 19.99,
      description:
        "Experience restful nights with this premium microfiber pillow offering softness and durability.",
      features: [
        "Breathable material",
        "Hypoallergenic",
        "Machine-washable",
        "Retains shape"
      ]
    },
  
    // 11
    {
      slug: "office-leather-sofa",
      title: "Office Leather Sofa",
      mainImage: images.product_10_01,
      images: [images.product_10_02 , images.product_10_03, images.product_10_04],
      video: "/videos/office-sofa.mp4",
      categories: ["Indoor decoration"],
      reviews: 233,
      ratingStars: 4.7,
      shortDescription: "A luxury leather sofa designed for modern office interiors.",
      availability: "In Stock",
      price: 299.99,
      description:
        "Crafted from premium leather, this sofa brings sophistication and comfort to office spaces.",
      features: [
        "Premium leather",
        "High-density cushion",
        "Stain-resistant surface",
        "Modern minimalist design"
      ]
    },
  
    // 12
    {
      slug: "half-watt-night-lamp",
      title: "0.5 Watt Night Lamp",
      mainImage: images.product_11_01,
      images: [images.product_11_02 , images.product_2_03, images.product_2_02],
      video: "/videos/night-lamp.mp4",
      categories: ["Indoor decoration"],
      reviews: 78,
      ratingStars: 4.3,
      shortDescription: "A low-energy night lamp offering warm, subtle lighting.",
      availability: "In Stock",
      price: 12.99,
      description:
        "Perfect for bedrooms and hallways, this lamp provides gentle illumination without disturbing sleep.",
      features: [
        "Energy-saving 0.5W LED",
        "Warm light tone",
        "Compact design",
        "Long lifespan"
      ]
    },


  

    // * Outdoor decoration

     // 7
     {
      slug: "round-steel-tea-table",
      title: "Round Steel Tea Table",
      mainImage: images.product_7_01,
      images: [images.product_7_02 , images.product_7_03, images.product_7_04],
      video: "/videos/steel-tea-table.mp4",
      categories: ["Outdoor decoration", ],
      reviews: 264,
      ratingStars: 4.7,
      shortDescription: "A weather-resistant steel tea table suitable for indoor and outdoor use.",
      availability: "In Stock",
      price: 119.99,
      description:
        "Made from premium coated steel, this tea table resists rust and offers modern style for gardens or indoor spaces.",
      features: [
        "Rust-proof steel",
        "Matte coated surface",
        "Lightweight design",
        "Suitable for indoors & outdoors"
      ]
    },

    {
      slug: "creative-bonsai-plant",
      title: "Creative Bonsai Plant",
      mainImage: images.product_8_01,
      images: [images.product_8_02 , images.product_8_03, images.product_8_04],
      video: "/videos/bonsai.mp4",
      categories: ["Outdoor decoration"],
      reviews: 190,
      ratingStars: 4.6,
      shortDescription: "A decorative bonsai plant crafted for natural ambiance in any environment.",
      availability: "In Stock",
      price: 34.99,
      description:
        "This bonsai plant brings a sense of peace and elegance to offices, balconies, and gardens.",
      features: [
        "Realistic artificial leaves",
        "Hand-sculpted base",
        "Long-lasting materials",
        "Perfect for any desk or outdoor table"
      ]
    },
  
    {
      slug: "copper-tea-jug-set",
      title: "Copper Tea Jug Set",
      mainImage: images.product_9_01,
      images: [images.product_9_02 , images.product_9_03, images.product_9_04],    
      video: "/videos/copper-tea-set.mp4",
      categories: ["Home decoration", "Outdoor decoration"],
      reviews: 211,
      ratingStars: 4.8,
      shortDescription: "A handcrafted copper tea set inspired by Moroccan tea culture.",
      availability: "In Stock",
      price: 79.99,
      description:
        "This traditional copper tea set adds authenticity and elegance to your gatherings.",
      features: [
        "Hand-engraved copper",
        "Heat-resistant",
        "Traditional Moroccan design",
        "Includes jug + 2 glasses"
      ]
    },
   
  
  ];
  