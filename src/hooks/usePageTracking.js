import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pathnameWithoutPrefix = pathname?.replace("/", "");
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: pathnameWithoutPrefix
        ? pathnameWithoutPrefix?.toUpperCase()
        : "HOME",
    });
  }, [pathname]);
};

export default usePageTracking;
