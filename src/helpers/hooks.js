import { designs, dev } from "shared/constants";

import React from "react";
import { breakpoints } from "./theme";
import { useLocation } from "react-router-dom";

export const useTouchListener = () => {
  const [userCanTouch, setUserCanTouch] = useSession("user-can-touch", false);

  React.useEffect(() => {
    window.addEventListener(
      "touchstart",
      function onFirstTouch() {
        setUserCanTouch(true);
        window.removeEventListener("touchstart", onFirstTouch, false);
      },
      false
    );
  }, [setUserCanTouch]);

  return { userCanTouch };
};

export const usePage = () => {
  const { pathname } = useLocation();
  const [, rootPath, id] = pathname.split("/");
  const possibleRootPaths = ["dev", "design"];

  const isDesign = rootPath.includes("design");
  const isDev = !isDesign;
  const rootUrl = isDesign ? "design/" : "dev/";
  const otherRoot = isDesign ? "/" : "/design";
  const pageTitle = isDesign ? "/Design" : "/Dev";
  const invalidRoot = !possibleRootPaths.includes(rootPath);

  return { invalidRoot, pageTitle, otherRoot, rootUrl, isDesign, isDev, id };
};

export const useTheme = () => {
  const [isDarkTheme, setDarkTheme] = useSession("is-dark-theme", false);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    } else {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }
    setDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleTheme, darkClass: isDarkTheme ? "dark" : "" };
};

export const useThemeBreakpoints = () => {
  const { phone, mobile, tablet } = breakpoints;

  const isPhone = useMediaQuery(`(max-width: ${phone}px)`);
  const isMobile = useMediaQuery(`(max-width: ${mobile}px)`);
  const isTablet = useMediaQuery(`(max-width: ${tablet}px)`);
  return { isPhone, isMobile, isTablet };
};

export const useProjectData = () => {
  const { isDesign, id } = usePage();
  const [openIndex, setOpenIndex] = React.useState(id);

  const data = isDesign ? designs : dev;
  const project = data[openIndex] || null;
  return { data, openIndex, setOpenIndex, project };
};

export const useClipboard = () => {
  const copy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("input");
      input.setAttribute("value", text);
      document.body.appendChild(input);
      input.select();
      const result = document.execCommand("copy");
      document.body.removeChild(input);
      return result;
    }
  };
  return { copy };
};

export const useMediaQuery = (query) => {
  const getMatches = (query) => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = React.useState(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};
