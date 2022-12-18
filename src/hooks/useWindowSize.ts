import { useCallback, useLayoutEffect, useState } from "react";

/**
 * Use Window Size Custom Hook
 */
export const useWindowSize = (): number[] => {
    const [size, setSize] = useState<number[]>([0, 0]);

    const updateSize = useCallback<() => void>(
        () => setSize([
            window.innerWidth,
            window.innerHeight
        ]),
        []
    );

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [updateSize]);

    return size;
};