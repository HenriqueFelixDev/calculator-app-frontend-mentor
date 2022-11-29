const THEME_KEY = 'theme'

export const saveTheme = (theme: number) =>
    localStorage.setItem(THEME_KEY, `${theme}`)

export const getSavedTheme = () =>
    Number(localStorage.getItem(THEME_KEY)) || null