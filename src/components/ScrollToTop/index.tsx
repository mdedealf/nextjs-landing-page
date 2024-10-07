"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop: FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up event listener on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default ScrollToTop;
