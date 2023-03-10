import { useMemo } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import Sidebar from './Sidebar';
import { ThemeSwitch, SidebarButton } from '../design';
import { appActions } from '../../reducers/appSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useToggleTheme } from '../../hooks';
import type { Children } from '../../types';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
};

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop: PropertyKey) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'inherit',
    }),
}));

const Header = ({ children }: Children) => {
    const dispatch = useAppDispatch();

    const { toggle } = useToggleTheme();

    const drawerOpen: boolean = useAppSelector(
        (state) => state.app.drawerOpen
    );

    const darkMode: boolean = useAppSelector(
        (state) => state.theme.darkMode
    );

    const handleDrawerOpen = () => {
        dispatch(appActions.setDrawerOpen(true));
    };

    const handleThemeToggle = () => toggle();

    const elevation: number = useMemo(
        () => drawerOpen ? 0 : 2,
        [drawerOpen]
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" elevation={elevation} open={drawerOpen}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <SidebarButton
                        drawerOpen={drawerOpen}
                        onClick={handleDrawerOpen}
                    />
                    <Typography component="div" variant="h6" noWrap>
                        MUZIKZAM
                    </Typography>
                    <ThemeSwitch
                        checked={darkMode}
                        onChange={handleThemeToggle}
                    />
                </Toolbar>
            </AppBar>
            <Sidebar children={children} />
        </Box>
    );
};

export default Header;
