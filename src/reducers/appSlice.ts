import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    drawerOpen: boolean;
};

const initialState: AppState = {
    drawerOpen: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        reset: () => initialState,
        setDrawerOpen: (state: AppState, action: PayloadAction<boolean>) => {
            state.drawerOpen = action.payload;
        },
    },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;
