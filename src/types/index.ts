import { LazyExoticComponent, PropsWithChildren } from 'react';
import { AxiosRequestConfig } from 'axios';

/**
 * Props With Children (React 18)
 */
export type Children = PropsWithChildren;

/**
 * React Lazy Load - Code Splitting
 */
export type Lazy = LazyExoticComponent<() => JSX.Element>;

/**
 * Rapid API HTTP Options
 */
export type HttpOptions = {
    params: {
        maxResults: number;
    };
    headers: {
        'X-RapidAPI-Key': string;
        'X-RapidAPI-Host': string;
    }
};

/**
 * Axios Options
 */
export type AxiosOptions = AxiosRequestConfig<HttpOptions>;

/**
 * MUI Custom Palette
 */
export type CustomPalette = {
    palette: {
        ytBlack: string;
        ytGray: string;
        gray: string;
        lightGray: string;
        darkGray: string;
        red: string;
        lightRed: string;
        darkRed: string;
        yellow: string;
        lightYellow: string;
        darkYellow: string;
        green: string;
        lightGreen: string;
        darkGreen: string;
        orange: string;
        lightOrange: string;
        darkOrange: string;
        blue: string;
        lightBlue: string;
        darkBlue: string;
        purple: string;
        turquoise: string;
        pink: string;
    }
};

/**
 * Scroll Zoom Styles
 */
export type ZoomStyles = {
    position: string;
    bottom: number;
    right: number;
};

//---------------------------

/**
 * Shazam API Search Query Params
 */
export type SearchQueryParams = {
    term: string;
    locale: string;
    offset: string;
    limit: string;
};

/**
 * Shazam API Search Query Term
 */
export type SearchTerm = Omit<SearchQueryParams, "locale" | "offset" | "limit">;

/**
 * Shazam API Search Response
 */
export type SearchResponse = Search;

/**
 * Shazam API Search Payload 
 */
export type Search = {
    tracks: Tracks;
    artists: Artists;
};

export interface Tracks {
    hits: Hit[];
};

export interface Hit {
    track: Track;
    snippet?: string;
};

export interface Track {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: Share;
    images: Images;
    hub: Hub;
    artists: Artist[];
    url: string;
};

export interface Share {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar?: string;
    snapchat: string;
};

export interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
};

export interface Hub {
    type: string;
    image: string;
    actions: Action[];
    options: Option[];
    providers: Provider[];
    explicit: boolean;
    displayname: string;
};

export interface Action {
    name: string;
    type: string;
    id?: string;
    uri?: string;
};

export interface Option {
    caption: string;
    actions: OptionAction[];
    beacondata: Beacondata;
    image: string;
    type: string;
    listcaption: string;
    overflowimage: string;
    colouroverflowimage: boolean;
    providername: string;
};

export interface OptionAction {
    type: string;
    uri: string;
    name?: string;
};

export interface Beacondata {
    type: string;
    providername: string;
};

export interface Provider {
    caption: string;
    images: ProviderImages;
    actions: ProviderAction[];
    type: string;
};

export interface ProviderImages {
    overflow: string;
    default: string;
};

export interface ProviderAction {
    name: string;
    type: string;
    uri: string;
};

export interface Artist {
    id: string;
    adamid: string;
};

export interface Artists {
    hits: ArtistHits[];
};

export interface ArtistHits {
    artist: ArtistInfo
};

export interface ArtistInfo {
    avatar: string;
    name: string;
    verified: boolean;
    weburl: string;
    adamid: string;
};
