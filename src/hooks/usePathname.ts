import { useLocation } from "react-router-dom";

/**
 * Returns the current location object, which represents the current URL in web browsers.
 * @returns {string} A URL pathname, beginning with a /.
 */
export const usePathname = (): string => {
    const { pathname } = useLocation();
    return pathname;
};