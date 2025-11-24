import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 lg:right-6 right-2 z-50 p-1 rounded-full bg-[#DD7210] text-white shadow-lg  duration-200 cursor-pointer"
        >
          <ArrowUpIcon size={20} weight="bold" />
        </button>
      )}
    </>
  );
}
