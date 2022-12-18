import { Box } from '@mui/material';
import { Children } from '../../types';

import { DrawerHeader } from './Sidebar';

/**
 * Main Container Element with Drawer Header
 * @param {Children} children 
 * @returns JSX main element 
 */
export const Container = ({ children }: Children) => (
    <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
    </Box>
);