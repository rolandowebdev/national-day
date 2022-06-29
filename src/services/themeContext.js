import React, { createContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

        if (storedPrefs === 'string') {
            return storedPrefs;
        }
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
};

export const ThemeContext = createContext;