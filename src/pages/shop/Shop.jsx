import React, { useEffect, useMemo, useState } from "react";
import { SquaresFour, List, Funnel, Star } from "@phosphor-icons/react";
import { products } from "../../data/Products";
import images from "../../constant/images";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

const CATEGORY_OPTIONS = [
    { value: "Home decoration", label: "Home Decoration" },
    { value: "Indoor decoration", label: "Indoor Decoration" },
    { value: "Office decoration", label: "Office Decoration" },
    { value: "Outdoor decoration", label: "Outdoor Decoration" }
];

const instagramPosts = [
    images.post_1,
    images.post_2,
    images.post_3,
    images.post_4,
    images.post_5,
    images.post_6
];

const formatPrice = (value) => `$ ${value.toFixed(2)}`;

const getBadge = (product) => {
    if (product.price <= 40) {
        return "On Sale";
    }
    if (product.ratingStars >= 4.8) {
        return "Top Rated";
    }
    return null;
};

const Shop = () => {
    const prices = products.map((item) => item.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const [priceCap, setPriceCap] = useState(maxPrice);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState("default");
    const [viewMode, setViewMode] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        setCurrentPage(1);
    }, [priceCap, selectedCategories, sortOption]);

    const categoryCounts = useMemo(() => {
        return CATEGORY_OPTIONS.reduce((acc, option) => {
            acc[option.value] = products.filter((product) =>
                product.categories.includes(option.value)
            ).length;
            return acc;
        }, {});
    }, []);

    const filteredProducts = useMemo(() => {
        let filtered = products.filter((product) => {
            const matchesCategory =
                selectedCategories.length === 0 ||
                selectedCategories.some((category) =>
                    product.categories.includes(category)
                );
            const matchesPrice = product.price >= minPrice && product.price <= priceCap;
            return matchesCategory && matchesPrice;
        });

        if (sortOption === "price-low") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-high") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === "rating") {
            filtered = filtered.sort((a, b) => b.ratingStars - a.ratingStars);
        } else if (sortOption === "reviews") {
            filtered = filtered.sort((a, b) => b.reviews - a.reviews);
        }
        return filtered;
    }, [priceCap, selectedCategories, sortOption, minPrice]);

    const perPage = viewMode === "list" ? 4 : 9;
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    const showingFrom =
        filteredProducts.length === 0 ? 0 : (currentPage - 1) * perPage + 1;
    const showingTo = Math.min(currentPage * perPage, filteredProducts.length);

    const handleCategoryToggle = (value) => {
        setSelectedCategories((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* hero section */}
            <div className='mt-8 lg:mt-0 relative w-full h-[35vh] flex items-center justify-center mb-16'>
                <img
                    src={images.home_1}
                    alt="Shop hero"
                    className="absolute w-full h-full rounded-xl object-cover"
                />
                <div className='bg-black/75 rounded-xl absolute z-10 w-full h-full'></div>
                <div className="absolute z-40 flex text-center text-white flex-col gap-4 px-4 py-24 md:px-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#DD7210]">
                        Luxury Collection
                    </p>
                    <h1 className="text-4xl font-semibold md:text-5xl">Shop</h1>
                    <div className='flex items-center justify-center gap-3 text-white'>
                        <Link className='text-white/70 uppercase hover:text-white transition-colors' to="/">HOME</Link>
                        <span>/</span>
                        <Link className='text-white uppercase' to="/shop">Shop</Link>
                    </div>
                    <div className="mt-6 flex gap-6">
                        <div>
                            <p className="text-3xl font-semibold">22</p>
                            <span className="text-xs uppercase tracking-wide text-gray-400">
                                curated pieces
                            </span>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold">4</p>
                            <span className="text-xs uppercase tracking-wide text-gray-400">
                                categories
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product */}
            <section className="grid gap-10 lg:grid-cols-[320px_1fr]">
                <aside className="space-y-3">
                    <div className="rounded-3xl border border-white/5 bg-black/30  p-8 ">
                        <p className="text-sm uppercase font-bold tracking-[0.3em] text-[#DD7210]">
                            Collection
                        </p>
                        <ul className="mt-6 space-y-4">
                            {CATEGORY_OPTIONS.map((option) => {
                                const isActive = selectedCategories.includes(option.value);
                                return (
                                    <li
                                        key={option.value}
                                        className={`flex cursor-pointer items-center justify-between rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-[#DD7210] text-white" : "text-gray-300 hover:text-white"
                                            }`}
                                        onClick={() => handleCategoryToggle(option.value)}
                                    >
                                        <span>{option.label}</span>
                                        <span className="text-xs text-white/70">
                                            {categoryCounts[option.value]}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-white/5 bg-black/30 p-8">
                        <div className="flex items-center justify-between">
                            <p className="text-sm uppercase tracking-[0.3em] font-bold text-[#DD7210]">
                                Filter by price
                            </p>
                            <Funnel size={20} weight="bold" className="text-[#DD7210]" />
                        </div>
                        <div className="mt-6 flex flex-col gap-4">
                            <input
                                type="range"
                                min={minPrice}
                                max={maxPrice}
                                value={priceCap}
                                className="accent-[#DD7210]"
                                onChange={(event) => setPriceCap(Number(event.target.value))}
                            />
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <span>{formatPrice(minPrice)}</span>
                                <span>{formatPrice(priceCap)}</span>
                            </div>
                            <button className="mt-2 rounded-full bg-[#DD7210] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#DD7210]">
                                Apply Filter
                            </button>
                        </div>
                    </div>

                    {[images.home_1, images.home_2].map((image, index) => (
                        <div
                            key={`promo-${index}`}
                            className="relative overflow-hidden rounded-3xl border border-white/5"
                        >
                            <img
                                src={image}
                                alt="Promo"
                                className="h-64 w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-black/70" />
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <p className="text-xs uppercase tracking-[0.4em] text-[#DD7210]">
                                    Modern furniture style
                                </p>
                                <h3 className="mt-2 text-2xl text-white">Find your dream house</h3>
                                <p className="text-sm text-gray-300">
                                    Order now and get discount <span className="text-white">75% off</span>
                                </p>
                                <button className="mt-4 w-fit text-white hover:bg-[#DD7210] cursor-pointer rounded-full border border-white/50 px-6 py-2 text-sm font-medium tracking-wide">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </aside>

                <main className="space-y-3">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center gap-4 rounded-3xl border border-white/5 bg-black/30 px-5 py-3">
                        <p className="text-sm text-gray-300">
                            Showing {showingFrom}-{showingTo} of {filteredProducts.length} results
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                className={`rounded-full border border-white/10 p-2 transition cursor-pointer ${viewMode === "grid"
                                    ? "bg-[#DD7210] text-white"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                                onClick={() => setViewMode("grid")}
                            >
                                <SquaresFour size={20} weight="fill" />
                            </button>
                            
                            <button
                                className={`rounded-full border border-white/10 p-2 cursor-pointer transition ${viewMode === "list"
                                    ? "bg-[#DD7210] text-white"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                                onClick={() => setViewMode("list")}
                            >
                                <List size={20} weight="fill" />
                            </button>
                        </div>
                        <select
                            className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-gray-300 outline-none"
                            value={sortOption}
                            onChange={(event) => setSortOption(event.target.value)}
                        >
                            <option value="default" className="bg-black">
                                Default sorting
                            </option>
                            <option value="reviews" className="bg-black">
                                Sort by popularity
                            </option>
                            <option value="rating" className="bg-black">
                                Sort by average rating
                            </option>
                            <option value="price-low" className="bg-black">
                                Sort by price: low to high
                            </option>
                            <option value="price-high" className="bg-black">
                                Sort by price: high to low
                            </option>
                        </select>
                    </div>

                    <div
                        className={`grid gap-6 ${viewMode === "list"
                            ? "grid-cols-1"
                            : viewMode === "grid"
                                ? "lg:grid-cols-3 grid-cols-1"
                                : "grid-cols-1"
                            }`}
                    >
                        {paginatedProducts.map((product, index) => {
                            const badge = getBadge(product);
                            const isList = viewMode === "list";
                            return (
                                <article
                                    key={`${product.title}-${index}`}
                                    className={`group rounded-3xl border border-white/5 bg-black/30 p-4 ${isList ? "flex gap-6" : "flex flex-col"
                                        }`}
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-2xl  bg-black ${isList ? "w-64 shrink-0" : ""
                                            }`}
                                    >
                                        <img
                                            src={product.mainImage}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        {badge && (
                                            <span className="absolute left-4 text-white top-4 rounded-full bg-[#DD7210] px-3 py-1 text-xs uppercase tracking-wide">
                                                {badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className={`flex flex-1 flex-col gap-3 ${isList ? "py-2" : "mt-4"}`}>
                                        <p className="text-xs uppercase tracking-[0.3em] text-[#DD7210]">
                                            {product.categories.join(", ")}
                                        </p>
                                        <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                                        <p className="text-sm text-white/60">{product.shortDescription}</p>
                                        <div className="flex items-center gap-2 text-amber-400">
                                            <Star size={16} weight="fill" />
                                            <span className="text-sm">
                                                {product.ratingStars} ({product.reviews} reviews)
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <p className="text-lg font-semibold text-white">
                                                {formatPrice(product.price)}
                                            </p>
                                            <p className="text-sm text-gray-500 line-through">
                                                {formatPrice(product.price * 1.2)}
                                            </p>
                                        </div>
                                        <div className="mt-auto flex lg:flex-wrap items-center gap-3">
                                            <Link
                                                to={`/shop/product/${product.slug}`}
                                                className="inline-block rounded-full border border-white/20 lg:px-6 lg:py-2 px-2 py-1 text-center text-sm uppercase lg:tracking-[0.2em] tracking-[0.1em] text-white transition hover:bg-white hover:text-black"
                                            >
                                                View Details
                                            </Link>
                                            <button
                                                onClick={() => addToCart(product, 1)}
                                                className="rounded-full bg-[#DD7210] lg:px-6 lg:py-2 px-2 py-1 text-sm lg:font-semibold uppercase lg:tracking-[0.2em] tracking-[0.1em] text-white transition hover:bg-white hover:text-black cursor-pointer"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/5 bg-black/30 p-3">
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`h-10 w-10 rounded-full border border-white/10 text-sm font-semibold transition ${currentPage === page
                                            ? "bg-orange-500 text-white"
                                            : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                            Page {currentPage} of {totalPages}
                        </p>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Shop;