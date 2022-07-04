import React, { useContext } from 'react'
import { ThemeContext, ThemeContextProps } from './theme-context'

export const ToggleThemeButton: React.FC = () => {
    const theme = useContext<ThemeContextProps>(ThemeContext)

    return (
        <button style={theme.theme} onClick={theme.toggleTheme}>
            Toggle Switch
        </button>
    )

    // return (
    //     <ThemeContext.Consumer>
    //         {({ theme, toggleTheme }) => (
    //             <button style={theme} onClick={toggleTheme}>
    //                 Toggle Swicth
    //             </button>
    //         )}
    //     </ThemeContext.Consumer>
    // );
}
