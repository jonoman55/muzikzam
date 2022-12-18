import { useMemo } from "react";
import { Theme } from "@mui/material";

import { toggleTheme } from "../reducers/themeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useThemeMode } from "../theme";

/**
 * Active Theme Hook
 * @returns Theme
 */
export const useActiveTheme = (): Theme => {
    const darkMode: boolean = useAppSelector(
        (state) => state.theme.darkMode
    );
    return useThemeMode(darkMode ? 'dark' : 'light');
};

/**
 * Toggle Theme Hook
 * @returns toggle function
 */
export const useToggleTheme = () => {
    const dispatch = useAppDispatch();
    return useMemo(
        () => ({
            toggle: () => {
                dispatch(toggleTheme());
            },
        }),
        [dispatch]
    );
};
