import React from "react";
import { Link, useParams } from "react-router-dom";
import images from "../../constant/images";
import {
    blogPosts,
    blogCategories,
    blogTags,
    recentPosts,
    blogPromo,
} from "../../data/Blog";

const sampleComments = [
    {
        id: 1,
        author: "Designer",
        date: "May 27, 2024 at 10:48 am",
        message:
            "In nisl nisi scelerisque eu ultrices vitae. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Arcu vitae elementum curabitur vitae. Duis commodo odio aenean sed adipiscing eu massa vestibulum.",
    },
];

const SinglePost = () => {
    const { slug } = useParams();
    const postIndex = blogPosts.findIndex((item) => item.slug === slug);
    const post = postIndex >= 0 ? blogPosts[postIndex] : null;

    if (!post) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center text-white">
                <h1 className="text-4xl font-light">Story not found</h1>
                <p className="text-white/60 max-w-md">
                    The article you are looking for may have been archived. Discover the latest inspiration on our blog.
                </p>
                <Link
                    to="/blog"
                    className="rounded-full bg-white text-black px-6 py-3 uppercase tracking-[0.3em] text-xs"
                >
                    Back to Blog
                </Link>
            </div>
        );
    }

    const previousPost = blogPosts[postIndex - 1];
    const nextPost = blogPosts[postIndex + 1];

    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
            <div className="mt-8 lg:mt-0 relative w-full h-[35vh] flex items-center justify-center mb-16">
                <img
                    src={images.home_1}
                    alt="Shop hero"
                    className="absolute w-full h-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-black/70 rounded-xl" />
                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 space-y-4">
                    <p className="uppercase tracking-[0.25em] text-sm text-white/70">
                        {post.category}
                    </p>
                    <h1 className="lg:text-3xl font-light">{post.title}</h1>
                    <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-white/60">
                        <Link className="uppercase hover:text-white" to="/">
                            Home
                        </Link>
                        <span>/</span>
                        <Link className="uppercase hover:text-white" to="/blog">
                            {post.category}
                        </Link>
                        <span>/</span>
                        <span className="uppercase text-white">{post.title}</span>
                    </div>
                </div>
            </div>

            <section className="mx-auto pb-20 grid gap-12 lg:grid-cols-[2fr_1fr]">
                <article className="space-y-10">
                    <div className="overflow-hidden h-72 rounded-lg border border-white/5">
                        <img
                            src={post.cover}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                        <span>{post.date}</span>
                        <span>by {post.author}</span>
                        <span>{post.readTime}</span>
                    </div>

                    {post.sections?.map((section) => (
                        <section key={section.heading} className="space-y-4">
                            <h2 className="text-2xl font-light">{section.heading}</h2>
                            {section.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-white/70 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}

                    {post.quote && (
                        <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-8 space-y-4">
                            <p className="text-lg text-white/80 italic">
                                “{post.quote.text}”
                            </p>
                            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                                — {post.quote.author}, {post.quote.role}
                            </p>
                        </div>
                    )}

                    {post.bullets && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-light">
                                Design Cues To Steal For Your Space
                            </h3>
                            <ul className="space-y-3 text-white/70">
                                {post.bullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-3">
                                        <span className="mt-1 h-4 w-4  rounded-full  text-[#DD7210] flex items-center justify-center text-[10px]">
                                            ✓
                                        </span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {post.secondaryImage && (
                        <div className="overflow-hidden rounded-[28px] border border-white/5">
                            <img
                                src={post.secondaryImage}
                                alt="Detail shot"
                                className="w-full object-cover"
                            />
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-b border-white/10 py-6">
                        <div className="flex flex-wrap items-center gap-3">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-white/60">
                            <span className="text-xs uppercase tracking-[0.3em]">
                                Share
                            </span>
                            {["F", "X", "G", "P"].map((icon) => (
                                <button
                                    key={icon}
                                    className="h-9 w-9 rounded-full border border-white/20 hover:border-white transition"
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Link
                            to={previousPost ? `/blog/${previousPost.slug}` : "#"}
                            className={`rounded-[24px] border border-white/10 p-6 bg-[#080808] transition ${previousPost ? "hover:border-[#DD7210]" : "opacity-40 cursor-not-allowed"
                                }`}
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                                Previous
                            </p>
                            <p className="mt-2 text-lg font-light min-h-[48px]">
                                {previousPost ? previousPost.title : "No additional stories"}
                            </p>
                        </Link>
                        <Link
                            to={nextPost ? `/blog/${nextPost.slug}` : "#"}
                            className={`rounded-[24px] border border-white/10 p-6 bg-[#080808] text-right transition ${nextPost ? "hover:border-[#DD7210]" : "opacity-40 cursor-not-allowed"
                                }`}
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                                Next
                            </p>
                            <p className="mt-2 text-lg font-light min-h-[48px]">
                                {nextPost ? nextPost.title : "Not available to show"}
                            </p>
                        </Link>
                    </div>

                    <section className="rounded-[28px] border border-white/10 bg-[#090909] p-8 space-y-6">
                        <h3 className="text-xl font-light">Comments ({sampleComments.length})</h3>
                        {sampleComments.map((comment) => (
                            <div key={comment.id} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#DD7210]">
                                    <span>{comment.author}</span>
                                    <span>{comment.date}</span>
                                </div>
                                <p className="mt-3 text-white/70 leading-relaxed">{comment.message}</p>
                                <button className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white">
                                    Reply
                                </button>
                            </div>
                        ))}
                    </section>

                    <section className="rounded-[28px] border border-white/10 bg-[#090909] p-8 space-y-6">
                        <div>
                            <h3 className="text-xl font-light">Leave A Reply</h3>
                            <p className="text-sm text-white/60">
                                Your email address will not be published. Required fields are marked *
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <input
                                    className="rounded-2xl bg-transparent border border-white/15 px-5 py-4 placeholder:text-white/40 focus:border-[#DD7210] outline-none"
                                    placeholder="Name *"
                                    required
                                />
                                <input
                                    type="email"
                                    className="rounded-2xl bg-transparent border border-white/15 px-5 py-4 placeholder:text-white/40 focus:border-[#DD7210] outline-none"
                                    placeholder="Email *"
                                    required
                                />
                                <input
                                    className="rounded-2xl bg-transparent border border-white/15 px-5 py-4 placeholder:text-white/40 focus:border-[#DD7210] outline-none md:col-span-2"
                                    placeholder="Website"
                                />
                            </div>
                            <textarea
                                className="w-full rounded-2xl bg-transparent border border-white/15 px-5 py-4 min-h-[150px] placeholder:text-white/40 focus:border-[#DD7210] outline-none"
                                placeholder="Comment *"
                                required
                            />
                            <label className="flex items-center gap-3 text-white/60 text-sm">
                                <input type="checkbox" className="accent-[#DD7210]" />
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                            <button
                                type="submit"
                                className="rounded-full bg-[#DD7210] px-8 py-3 uppercase tracking-[0.3em] text-sm"
                            >
                                Post Comment
                            </button>
                        </form>
                    </section>
                </article>

                <aside className="space-y-8 sticky top-35 self-start ">
                    <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 shadow-lg shadow-black/40">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                            Recent Posts
                        </p>
                        <div className="mt-5 space-y-5">
                            {recentPosts.map((recent) => (
                                <Link
                                    key={recent.id}
                                    to={`/blog/${recent.slug}`}
                                    className="flex gap-4"
                                >
                                    <img
                                        src={recent.cover}
                                        alt={recent.title}
                                        className="h-16 w-16 rounded-2xl object-cover"
                                    />
                                    <div className="space-y-1">
                                        <p className="text-sm leading-tight text-white">
                                            {recent.title}
                                        </p>
                                        <p className="text-xs uppercase text-white/40">{recent.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 space-y-4 shadow-lg shadow-black/40">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                            Categories
                        </p>
                        <div className="space-y-3">
                            {blogCategories.map((category) => (
                                <span
                                    key={category.name}
                                    className="flex items-center justify-between rounded-full px-4 py-3 text-sm bg-white/5 text-white/70"
                                >
                                    {category.name}
                                    <span className="text-xs uppercase tracking-[0.3em]">
                                        {category.count}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 space-y-5 shadow-lg shadow-black/40">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                            Tags
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {blogTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#101010] to-[#050505] p-6 text-center shadow-2xl shadow-black/60">
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
            </section>
        </div>
    );
};

export default SinglePost;

