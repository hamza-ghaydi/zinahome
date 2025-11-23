import React, { useEffect, useMemo, useState } from "react";
import images from "../../constant/images";
import {
    blogPosts,
    blogCategories,
    blogTags,
    recentPosts,
    blogPromo,
} from "../../data/Blog";
import { Link } from "react-router-dom";

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTag, setActiveTag] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const categoryFilters = useMemo(
        () => ["All", ...new Set(blogPosts.map((post) => post.category))],
        []
    );

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory =
                activeCategory === "All" || post.category === activeCategory;
            const matchesTag = !activeTag || post.tags.includes(activeTag);
            const normalizedQuery = searchTerm.trim().toLowerCase();
            const matchesSearch =
                !normalizedQuery ||
                post.title.toLowerCase().includes(normalizedQuery) ||
                post.excerpt.toLowerCase().includes(normalizedQuery);

            return matchesCategory && matchesTag && matchesSearch;
        });
    }, [activeCategory, activeTag, searchTerm]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, activeCategory, activeTag]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
    const startIndex = (currentPage - 1) * postsPerPage;
    const visiblePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
             <div className="mt-8 lg:mt-0 relative w-full h-[35vh] flex items-center justify-center mb-16">
                    <img className='absolute w-full h-full rounded-xl object-cover' src={images.home_hotspot} alt="" />
                    <div className='bg-black/75 rounded-xl absolute z-10 w-full h-full'></div>
                    <div className="z-40 space-y-3 text-center p-2">
                        
                        <h1 className="mt-6 lg:text-4xl text-2xl font-light">
                            Design Stories & Curated Living
                        </h1>
                        <p className="mt-4 max-w-2xl text-white/70 lg:text-lg text-xs">
                            Explore styling ideas, artisan spotlights, and buying guides from
                            the world of modern Moroccan-inspired décor.
                        </p>
                        <div className="flex items-center justify-center gap-3 text-white">
                            <Link className="text-white/70 uppercase hover:text-white transition-colors" to="/">Home</Link>
                            <span>/</span>
                            <Link className='text-white uppercase' to="/blog">Blog</Link>
                        </div>
                    </div>
                </div>

            <section className="mx-auto pb-20">
                <div className="mb-10 flex flex-wrap gap-4 border border-white/10 rounded-3xl p-4 bg-[#0b0b0b]/80">
                    {categoryFilters.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory((prev) => (prev === category ? "All" : category))
                            }
                            className={`px-5 py-2 rounded-full text-sm transition cursor-pointer ${activeCategory === category
                                    ? "bg-[#DD7210]"
                                    : "bg-white/5 text-white/70 hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-12 lg:grid-cols-[2fr_1fr] ">
                    <div className="space-y-8 lg:sticky top-35 self-start ">
                        <div className="grid gap-8 md:grid-cols-2">
                            {visiblePosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="rounded-[28px] overflow-hidden bg-[#0d0d0d] border border-white/5 shadow-2xl shadow-black/50 transition hover:-translate-y-1"
                                >
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <div className="relative h-72">
                                            <img
                                                src={post.cover}
                                                alt={post.title}
                                                className="h-full w-full object-cover"
                                            />
                                            <span className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-1 text-xs uppercase tracking-[0.2em] text-black">
                                                {post.badge}
                                            </span>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="text-xs uppercase text-[#DD7210] flex flex-wrap gap-3">
                                                <span>{post.date}</span>
                                                <span>By {post.author}</span>
                                            </div>
                                            <h2 className="text-2xl font-light leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {post.excerpt.slice(0, 70)}...
                                            </p>
                                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em]">
                                                <span className="text-white/50">{post.readTime}</span>
                                                <span className="flex items-center gap-2 text-[#DD7210]">
                                                    Read More
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="h-4 w-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {visiblePosts.length === 0 && (
                            <div className="rounded-3xl border border-white/10 p-10 text-center bg-white/5">
                                <p className="text-lg text-white/80">
                                    No stories match your search yet.
                                </p>
                                <button
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm uppercase tracking-[0.3em] text-black"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setActiveCategory("All");
                                        setActiveTag(null);
                                    }}
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {visiblePosts.length > 0 && (
                            <div className="flex items-center justify-center gap-3">
                                {pageNumbers.map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`h-10 w-10 rounded-full border border-white/10 text-sm transition ${currentPage === page
                                                ? "bg-[#DD7210] font-bold"
                                                : "bg-transparent text-white/70 hover:bg-white/10"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <aside className="space-y-8 lg:sticky top-35 self-start ">
                        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 shadow-lg shadow-black/40">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                                Search
                            </p>
                            <div className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2">
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Enter keyword"
                                    className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-white/40"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-white/60"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 space-y-6 shadow-lg shadow-black/40">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                                Recent Posts
                            </p>
                            <div className="space-y-5">
                                {recentPosts.map((post) => (
                                    <div key={post.id} className="flex gap-4">
                                        <img
                                            src={post.cover}
                                            alt={post.title}
                                            className="h-16 w-16 rounded-2xl object-cover"
                                        />
                                        <div className="space-y-1">
                                            <p className="text-sm leading-tight text-white">
                                                {post.title}
                                            </p>
                                            <p className="text-xs uppercase text-white/40">
                                                {post.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 space-y-4 shadow-lg shadow-black/40">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                                Categories
                            </p>
                            <div className="space-y-3">
                                {blogCategories.map((category) => (
                                    <button
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-sm transition cursor-pointer ${activeCategory === category.name
                                                ? "bg-[#DD7210] "
                                                : "bg-white/5 text-white/70 hover:bg-white/10"
                                            }`}
                                    >
                                        <span>{category.name}</span>
                                        <span className="text-xs uppercase tracking-[0.3em]">
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 space-y-5 shadow-lg shadow-black/40">
                            <div className="flex items-center justify-between">
                                <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                                    Tags
                                </p>
                                {activeTag && (
                                    <button
                                        className="text-xs text-white/60 hover:text-white"
                                        onClick={() => setActiveTag(null)}
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {blogTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setActiveTag((prev) => (prev === tag ? null : tag))}
                                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${activeTag === tag
                                                ? "border-[#DD7210] bg-[#DD7210]"
                                                : "border-white/20 text-white/70 hover:border-white/40"
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-white/10 bg-linear-to-b from-[#101010] to-[#050505] p-6 text-center shadow-2xl shadow-black/60">
                            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                                {blogPromo.badge}
                            </p>
                            <h3 className="mt-4 text-3xl font-light">{blogPromo.title}</h3>
                            <p className="mt-3 text-white/70 text-sm">{blogPromo.description}</p>
                            <p className="mt-6 text-5xl font-semibold text-white">
                                {blogPromo.discount}
                            </p>
                            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/50">
                                {blogPromo.cta}
                            </p>
                            <div className="mt-6 h-48 overflow-hidden rounded-2xl">
                                <img
                                    src={blogPromo.image}
                                    alt={blogPromo.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <button className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm uppercase tracking-[0.4em] text-black">
                                Explore Collection
                            </button>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Blog;