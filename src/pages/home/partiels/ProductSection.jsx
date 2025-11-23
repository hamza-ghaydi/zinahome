import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { products } from "../../../data/Products";

const ProductSection = ({ category, title, description, showViewAll = true }) => {
  const normalizeCategory = (cat) => cat.toLowerCase().trim().replace(/\s+/g, " ");
  const targetCategory = normalizeCategory(category);

  const categoryProducts = products
    .filter((product) =>
      product.categories.some((cat) => normalizeCategory(cat) === targetCategory)
    )
    .slice(0, 3);

  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/3 space-y-4 text-center lg:text-left lg:sticky lg:top-32">
          <h2 className="text-white text-3xl sm:text-4xl mb-4">{title}</h2>
          <p className="text-white/60 text-base leading-relaxed">{description}</p>

          {showViewAll && (
            <Link
              to="/shop"
              className="group mt-6 inline-flex items-center justify-center gap-3 pr-2 pl-6 py-2 rounded-full bg-[#DD7210] text-white font-semibold w-fit cursor-pointer"
            >
              View All
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
                <ArrowRight size={18} weight="bold" className="text-black" />
              </span>
            </Link>
          )}
        </div>

        <div className="flex-1">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product, index) => (
                <div
                  key={`${product.slug}-${index}`}
                  className="group relative overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-black/30">
                    {product.mainImage ? (
                      <img
                        src={product.mainImage}
                        alt={product.title}
                        className="w-full h-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-gray-500">
                        <p>No Image</p>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link
                        to={`/shop/product/${product.slug}`}
                        className="rounded-full bg-[#DD7210] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 text-center space-y-1">
                    <p className="text-white/45 text-xs uppercase tracking-wider">
                      {product.categories[0]?.toUpperCase() || "DECORATION"}
                    </p>
                    <h3 className="text-white text-lg font-semibold">{product.title}</h3>
                    <p className="text-[#DD7210] font-bold">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

