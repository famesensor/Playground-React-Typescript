import React, { useState } from 'react';
import { ThemeContext, ThemeContextProps, themes } from './theme-context';
import { ToggleThemeButton } from './theme-button';

export default function ThemeProvider() {
    const [themeState, setTheme] = useState<ThemeContextProps>({
        theme: themes.dark
    });

    const toggleTheme = () => {
        setTheme((s) => {
            return {
                ...s,
                theme: s.theme === themes.light ? themes.dark : themes.light
            };
        });
    };

    return (
        <ThemeContext.Provider
            value={{ theme: themeState.theme, toggleTheme: toggleTheme }}
        >
            <div>
                <h2>Context</h2>
                <ToggleThemeButton />
            </div>
        </ThemeContext.Provider>
    );
}
