import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const CartContext = createContext(undefined);
const STORAGE_KEY = "zina-home-cart";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { product, quantity } = action.payload;
      const existing = state.items.find((item) => item.slug === product.slug);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      const newItem = {
        slug: product.slug,
        title: product.title,
        price: product.price,
        image: product.mainImage,
        quantity,
      };
      return { ...state, items: [...state.items, newItem] };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((item) => item.slug !== action.payload),
      };
    }
    case "UPDATE": {
      const { slug, quantity } = action.payload;
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.slug === slug ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
};

const getInitialState = () => {
  if (typeof window === "undefined") {
    return { items: [] };
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return { items: parsed };
      }
    }
  } catch (error) {
    console.warn("Failed to restore cart from storage", error);
  }
  return { items: [] };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items]);

  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({
      type: "ADD",
      payload: { product, quantity: Math.max(1, quantity) },
    });
  }, []);

  const removeFromCart = useCallback((slug) => {
    dispatch({ type: "REMOVE", payload: slug });
  }, []);

  const updateQuantity = useCallback((slug, quantity) => {
    dispatch({
      type: "UPDATE",
      payload: { slug, quantity: Math.max(0, quantity) },
    });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const derived = useMemo(() => {
    const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartSubtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { cartCount, cartSubtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      cartCount: derived.cartCount,
      cartSubtotal: derived.cartSubtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      state.items,
      derived.cartCount,
      derived.cartSubtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


