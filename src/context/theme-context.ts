import React from 'react'

export type Theme = React.CSSProperties

interface Themes {
    dark: Theme
    light: Theme
}

export const themes: Themes = {
    dark: {
        color: 'black',
        backgroundColor: 'white'
    },
    light: {
        color: 'white',
        backgroundColor: 'black'
    }
}

export type ThemeContextProps = { theme: Theme; toggleTheme?: () => void }

export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: themes.light
})
