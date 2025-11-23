import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CreditCard,
  EnvelopeSimple,
  MapPinLine,
  Phone,
} from "@phosphor-icons/react";
import images from "../../constant/images";
import { useCart } from "../../context/CartContext.jsx";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, cartSubtotal, clearCart } = useCart();
  const hasItems = items.length > 0;
  const shippingEstimate = hasItems ? Math.max(15, cartSubtotal * 0.05) : 0;
  const orderTotal = cartSubtotal + shippingEstimate;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!hasItems) {
      navigate("/shop");
      return;
    }
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="mt-8 lg:mt-0 relative w-full h-[30vh] flex items-center justify-center mb-16">
        <img
          src={images.home_2}
          alt="Checkout hero"
          className="absolute w-full h-full rounded-xl object-cover"
        />
        <div className="bg-black/75 rounded-xl absolute z-10 w-full h-full"></div>
        <div className="absolute z-40 flex text-center text-white flex-col gap-4 px-4 py-24 md:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#DD7210]">
            Secure Payments
          </p>
          <h1 className="lg:text-4xl text-2xl font-semibold md:text-5xl">Checkout</h1>
          <div className="flex items-center  justify-center gap-3 text-white">
            <Link
              className="text-white/70 uppercase hover:text-white transition-colors"
              to="/"
            >
              HOME
            </Link>
            <span>/</span>
            <Link className="text-white/70 uppercase hover:text-white" to="/cart">
              Cart
            </Link>
            <span>/</span>
            <Link className="text-white uppercase" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>

      {!hasItems && (
        <div className="rounded-3xl border border-white/10 bg-black/30 p-10 text-center text-white/70">
          <p className="text-lg">You have no items to checkout.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="rounded-full bg-[#DD7210] px-8 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black"
            >
              Browse Shop
            </Link>
            <Link
              to="/cart"
              className="rounded-full border border-white/20 px-8 py-3 text-sm uppercase tracking-[0.3em] text-white/80 hover:text-white"
            >
              View Cart
            </Link>
          </div>
        </div>
      )}

      {hasItems && (
        <section className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-white/10 bg-black/30 p-8 text-white"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                Contact
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Full name
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="Amina Karim"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Email address
                  <div className="flex items-center rounded-2xl border border-white/10 bg-black/40 px-4">
                    <EnvelopeSimple className="mr-2 text-white/50" size={18} />
                    <input
                      type="email"
                      required
                      className="flex-1 bg-transparent py-3 outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Phone number
                  <div className="flex items-center rounded-2xl border border-white/10 bg-black/40 px-4">
                    <Phone className="mr-2 text-white/50" size={18} />
                    <input
                      type="tel"
                      required
                      className="flex-1 bg-transparent py-3 outline-none"
                      placeholder="+1 (555) 123-9876"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Company (optional)
                  <input
                    type="text"
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="Studio M"
                  />
                </label>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                Shipping
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Address
                  <div className="flex items-center rounded-2xl border border-white/10 bg-black/40 px-4">
                    <MapPinLine className="mr-2 text-white/50" size={18} />
                    <input
                      type="text"
                      required
                      className="flex-1 bg-transparent py-3 outline-none"
                      placeholder="123 Palm Street"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  City
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="Los Angeles"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  State/Province
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="CA"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Postal code
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="90210"
                  />
                </label>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#DD7210]">
                Payment
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Cardholder name
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="Amina Karim"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Card number
                  <div className="flex items-center rounded-2xl border border-white/10 bg-black/40 px-4">
                    <CreditCard className="mr-2 text-white/50" size={18} />
                    <input
                      type="text"
                      inputMode="numeric"
                      required
                      className="flex-1 bg-transparent py-3 outline-none"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Expiration
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="MM / YY"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  CVC
                  <input
                    type="text"
                    required
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[#DD7210]"
                    placeholder="123"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#DD7210] px-6 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black"
            >
              Place order
            </button>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-white/60">
              Secure checkout powered by ZinaHome
            </p>
          </form>

          <aside className="h-fit space-y-6 rounded-3xl border border-white/10 bg-black/30 p-6 text-white">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-white/60">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>${shippingEstimate.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-white">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Delivery in 5-7 business days
            </p>
          </aside>
        </section>
      )}
    </div>
  );
};

export default Checkout;


