import { useCallback } from "react";
import { useSnackbar, SnackbarMessage, OptionsObject, ProviderContext } from "notistack";

import { defaultAnchorOrigin } from "../contexts/AlertContext";

/**
 * Use Notify Props - Extends Enqueue
 */
interface NotifyProps extends OptionsObject {
    /**
     * Snackbar Message
     */
    message: SnackbarMessage;
};

/**
 * Notify Type
 */
type Notify = ({
    message,
    variant,
    persist,
    anchorOrigin,
    autoHideDuration,
    disableWindowBlurListener
}: NotifyProps) => void;

/**
 * Enqueue Snackbar Notification Message
 */
export const useNotify = (): Notify => {
    const { enqueueSnackbar } = useSnackbar() as ProviderContext;

    /**
     * Enqueue Snackbar Notification Message Callback
     * @param {NotifyProps} props Use Notify Props
     */
    const notify = useCallback(({
        message,
        variant,
        persist = false,
        anchorOrigin = defaultAnchorOrigin,
        autoHideDuration = 3000,
        disableWindowBlurListener = false
    }: NotifyProps): void => {
        enqueueSnackbar(message, {
            variant,
            persist,
            anchorOrigin,
            autoHideDuration,
            disableWindowBlurListener
        });
    }, [enqueueSnackbar]);

    return notify;
};
