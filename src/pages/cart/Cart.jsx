import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import images from "../../constant/images";
import { useCart } from "../../context/CartContext.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const { items, cartSubtotal, updateQuantity, removeFromCart, clearCart } =
    useCart();

  const hasItems = items.length > 0;
  const shippingEstimate = hasItems ? Math.max(15, cartSubtotal * 0.05) : 0;
  const orderTotal = cartSubtotal + shippingEstimate;

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="mt-8 lg:mt-0 relative w-full h-[30vh] flex items-center justify-center mb-16">
        <img
          src={images.home_1}
          alt="Cart hero"
          className="absolute w-full h-full rounded-xl object-cover"
        />
        <div className="bg-black/75 rounded-xl absolute z-10 w-full h-full"></div>
        <div className="absolute z-40 flex text-center text-white flex-col gap-4 px-4 py-24 md:px-8">
          
          <h1 className="lg:text-4xl text-2xl font-semibold md:text-5xl">Shopping Cart</h1>
          <div className="flex items-center justify-center gap-3 text-white">
            <Link
              className="text-white/70 uppercase hover:text-white transition-colors"
              to="/"
            >
              HOME
            </Link>
            <span>/</span>
            <Link className="text-white uppercase" to="/cart">
              Cart
            </Link>
          </div>
        </div>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr] px-4 lg:px-0">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="lg:text-2xl font-semibold text-white">
              {hasItems ? "Review your items" : "Your cart is empty"}
            </h2>
            {hasItems && (
              <button
                onClick={clearCart}
                className="text-sm uppercase tracking-[0.3em] border px-2 py-1 rounded-full text-white/60 hover:text-white transition cursor-pointer"
              >
                Clear cart
              </button>
            )}
          </div>

          {!hasItems && (
            <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center text-white/70">
              <p className="text-lg">Add beautiful pieces to elevate your space.</p>
              <button
                onClick={() => navigate("/shop")}
                className="mt-6 rounded-full bg-[#DD7210] px-8 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition cursor-pointer"
              >
                Browse Shop
              </button>
            </div>
          )}

          {hasItems &&
            items.map((item) => (
              <article
                key={item.slug}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-4 sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-full rounded-2xl object-cover sm:w-40"
                />
                <div className="flex flex-1 flex-col gap-2 text-white">
                  <Link
                    to={`/shop/product/${item.slug}`}
                    className="text-lg font-semibold hover:text-[#DD7210] transition"
                  >
                    {item.title}
                  </Link>
                  <p className="text-white/60">${item.price.toFixed(2)}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center rounded-full border border-white/10">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity - 1)
                        }
                        className="px-3 py-2 text-white hover:text-[#DD7210] cursor-pointer"
                      >
                        <Minus size={16} weight="bold" />
                      </button>
                      <span className="px-4 text-sm">{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity + 1)
                        }
                        className="px-3 py-2 text-white hover:text-[#DD7210] cursor-pointer"
                      >
                        <Plus size={16} weight="bold" />
                      </button>
                    </div>
                    <p className="text-sm text-white/70">
                      Subtotal: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="self-start rounded-full border border-white/20 p-3 text-white/70 hover:text-white hover:border-white cursor-pointer"
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash size={20} />
                </button>
              </article>
            ))}

          {hasItems && (
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("/shop")}
                className="rounded-full border border-white/20 lg:px-8 lg:py-3 px-2 py-1 text-sm uppercase lg:tracking-[0.3em] tracking-[0.2em]  text-white/80 hover:text-white cursor-pointer"
              >
                Continue shopping
              </button>
              <Link
                to="/checkout"
                className="rounded-full bg-[#DD7210] lg:px-8 lg:py-3 px-2 py-1 text-sm uppercase lg:tracking-[0.3em] tracking-[0.2em] text-white hover:bg-white hover:text-black"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>

        {hasItems && (
          <aside className="h-fit rounded-3xl border border-white/10 bg-black/30 p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated shipping</span>
                <span>${shippingEstimate.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-white">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">
              Taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              className="mt-6 block rounded-full bg-[#DD7210] lg:px-6 lg:py-3 px-2 py-1.5 text-center text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black"
            >
              Proceed to checkout
            </Link>
          </aside>
        )}
      </section>
    </div>
  );
};

export default Cart;


