import { createSlice, Slice } from '@reduxjs/toolkit';

const theme: string = JSON.parse(localStorage.getItem('theme') as string);

interface ThemeState {
    darkMode: boolean;
};

const initialState: ThemeState = {
    darkMode: Boolean(theme) ? false : true
};

type ThemeSlice = Slice<ThemeState, {
    toggleTheme: (state: ThemeState) => void;
}, 'theme'>;

const themeSlice: ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state: ThemeState) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem(
                'theme',
                state.darkMode.toString()
            );
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
