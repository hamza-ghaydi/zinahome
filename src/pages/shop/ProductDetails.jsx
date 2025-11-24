import React, { useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Star, CheckCircle, Truck, ShieldCheck, CaretLeft, Minus, Plus } from "@phosphor-icons/react";
import { products } from "../../data/Products";
import images from "../../constant/images";
import { useCart } from "../../context/CartContext.jsx";
import toast from "react-hot-toast";

const accentColor = "#DD7210";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === slug) || products[0];
  const { addToCart } = useCart();

  const galleryMedia = useMemo(() => {
    const uniqueMedia = new Set([product.mainImage, ...(product.images || [])]);
    return Array.from(uniqueMedia);
  }, [product]);

  const [activeMedia, setActiveMedia] = useState(galleryMedia[0]);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const recommendedProducts = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  const colorOptions = [
    { hex: "#4A3F35", label: "Walnut" },
    { hex: "#1c1c1c", label: "Charcoal" },
    { hex: "#d1b59b", label: "Sand" }
  ];

  const priceRange = {
    min: (product.price * 0.85).toFixed(2),
    max: (product.price * 1.05).toFixed(2)
  };

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-white">
        <p className="text-lg text-white/60">Product not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.2em]"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.title} added to cart!`, {
      duration: 5000,
      style: {
        borderRadius: "10px",
        background: "#DD7210",
        color: "#fff",
      },
    });
  };

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* hero section */}
      <div className='mt-8 lg:mt-0 relative w-full h-[30vh] flex items-center justify-center mb-16'>
        <img
          src={images.home_1}
          alt="Product hero"
          className="absolute w-full h-full rounded-xl object-cover"
        />
        <div className='bg-black/75 rounded-xl absolute z-10 w-full h-full'></div>
        <div className="absolute z-40 flex text-center text-white flex-col gap-4 px-4 py-24 md:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DD7210]">
            Luxury Collection
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Shop</h1>
          <div className='flex text-xs items-center justify-center gap-3 text-white'>
            <Link className='text-white/70 uppercase hover:text-white transition-colors' to="/">HOME</Link>
            <span>/</span>
            <Link className='text-white uppercase' to="/shop">Shop</Link>
            <span>/</span>
            <Link className="text-white uppercase" to={`/shop/product/${product.slug}`}>{product.title}</Link>
          </div>

        </div>
      </div>

      <section className="mx-auto grid max-w-6xl pb-10 gap-12 px-4  lg:grid-cols-[560px_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="relative  overflow-hidden rounded-3xl border border-white/5 bg-black/40">
            <img
              src={activeMedia}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute left-4 text-white top-4 rounded-full bg-[#DD7210] px-4 py-1 text-xs uppercase tracking-[0.3em]">
              {product.availability}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {galleryMedia.map((media, index) => (
              <button
                key={index}
                onClick={() => setActiveMedia(media)}
                className={`rounded-2xl border p-1 transition ${activeMedia === media
                  ? "border-[#DD7210]"
                  : "border-white/10 hover:border-white/30"
                  }`}
              >
                <img
                  src={media}
                  alt={`${product.title} view ${index + 1}`}
                  className="lg:h-24 w-full rounded-xl object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:space-y-6 space-y-3">
          <div className="text-[#DD7210]">
            <span className="text-xs uppercase tracking-[0.4em]">
              {product.categories.join(" / ")}
            </span>
            <div className="flex items-center gap-1 text-white">
              <Star size={18} weight="fill" color="#DD7210" />
              <span className="text-sm text-white/80">
                {product.ratingStars} ({product.reviews} reviews)
              </span>
            </div>
          </div>
          <h2 className="lg:text-4xl text-2xl text-white font-semibold">{product.title}</h2>

          <p className="text-white/70">{product.shortDescription}</p>

          <div className="flex items-baseline gap-4 text-[#DD7210]">
            <p className="lg:text-3xl text-xl font-semibold">$ {priceRange.min}</p>
            <span className="text-white/60">— $ {priceRange.max}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Colors
            </p>
            <div className="flex gap-3">
              {colorOptions.map((color, index) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(index)}
                  className={`h-10 w-10 rounded-full border-2 transition cursor-pointer ${selectedColor === index
                    ? "border-white"
                    : "border-transparent hover:border-white/30"
                    }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-[0.3em] text-white/60">
                Quantity
              </span>
              <div className="flex items-center rounded-full border text-white border-white/15 bg-black/40">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-white hover:text-[#DD7210] cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} weight="bold" />
                </button>
                <span className="px-4 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-white hover:text-[#DD7210] cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 cursor-pointer rounded-full bg-[#DD7210] lg:px-6 lg:py-2 px-2 py-1 text-sm lg:font-semibold uppercase lg:tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="flex-1 rounded-full border border-white/20 lg:px-6 lg:py-2 px-2 py-1 text-center text-sm lg:font-semibold uppercase lg:tracking-[0.3em] text-white hover:bg-white hover:text-black"
            >
              Go to Cart
            </Link>
          </div>

          <div className="space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Truck size={20} weight="bold" color="#DD7210" />
              <span>Free delivery & easy shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} weight="bold" color="#DD7210" />
              <span>Secure checkout payment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} weight="bold" color="#DD7210" />
              <span>Pick-up available in Los Angeles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
        <div className="rounded-3xl border border-white/5 bg-black/20 p-8">
          <div className="flex items-center justify-center flex-wrap gap-4 border-b border-white/10 pb-6">
            {["description", "details"].map((tab) => (
              <button
                key={tab}
                className={`rounded-full lg:px-6 lg:py-2 px-2 py-1 text-sm uppercase lg:tracking-[0.2em] tracking-[0.1em] ${activeTab === tab
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" ? "Description" : "Additional Information"}
              </button>
            ))}
          </div>

          {activeTab === "description" ? (
            <div className="grid gap-8 pt-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4 text-white/70 text-xs lg:text-xl">
                <p>{product.description}</p>
                <p>
                  Each piece is curated to elevate indoor sanctuaries with warmth and
                  tactile comfort. Inspired by Moroccan craftsmanship, the finishing
                  details guarantee long-lasting allure and performance.
                </p>
              </div>
              <div className="space-y-4 rounded-2xl bg-white/5 p-6">
                <h3 className="text-sm uppercase tracking-[0.4em] text-[#DD7210]">
                  Highlights
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle size={18} color="#DD7210" weight="fill" className="mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 pt-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-[#DD7210]">Availability</p>
                <p className="text-lg text-white font-semibold">{product.availability}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-[#DD7210]">Categories</p>
                <p className="text-lg text-white font-semibold">
                  {product.categories.join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 lg:px-8">
        <div className="rounded-2xl w-full overflow-hidden lg:h-[600px]">
          <img
            src={images.home_1}
            alt="Lookbook"
            className="w-full h-full object-cover lg:object-center opacity-90"
          />
        </div>
        <div className="mt-10 space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#DD7210]">
            Match the vibe
          </p>
          <h2 className="text-3xl text-white font-semibold">Elevate Your Style</h2>
          <p className="text-white/70">
            Curated accents that pair beautifully with {product.title}.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommendedProducts.map((item) => (
            <article
              key={item.slug}
              className="group rounded-3xl border border-white/5 bg-black/20 p-4"
            >
              <div className="overflow-hidden rounded-2xl bg-black">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                <p className="text-xs uppercase  text-[#DD7210]">
                  {item.categories[0]}
                </p>
                <p className="text-sm text-white/60">$ {item.price.toFixed(2)}</p>
              </div>
              <Link
                to={`/shop/product/${item.slug}`}
                className="mt-4 inline-block rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center lg:justify-between justify-center gap-4 rounded-3xl border border-white/5 bg-black/20 px-6 py-4 text-sm text-white/80 lg:px-8">
        <div className="flex  items-center gap-2">
          <CaretLeft size={16} weight="bold" />
          <button onClick={() => navigate(-1)} className="cursor-pointer uppercase tracking-[0.4em]">
            Back
          </button>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="text-xs uppercase tracking-[0.4em] text-white/50">
            Now viewing
          </span>
          <p className="text-sm font-semibold">{product.title}</p>
        </div>
        <Link
          to="/shop"
          className="rounded-full bg-[#DD7210] px-6 py-2 text-xs uppercase tracking-[0.4em] text-white hover:bg-white hover:text-black"
        >
          Select Options
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

