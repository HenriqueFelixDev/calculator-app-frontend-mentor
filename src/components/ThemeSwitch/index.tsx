import React, { useEffect, useMemo, useState } from 'react'

import { getSavedTheme, saveTheme } from '../../services/ThemeService'
import { Switch, SwitchInput, SwitchLabels, ThemeSwitchContainer, Thumb, Title } from './styles'
import { Themes } from './types'

const INPUT_WIDTH = 1.5
const SWITCH_PADDING = 0.5

export const ThemeSwitch = () => {
    const getInitialTheme = () => {
        const savedTheme = getSavedTheme()

        if (savedTheme) return savedTheme

        const prefersDarkTheme = matchMedia('(prefers-color-scheme: dark)').matches

        return prefersDarkTheme ? Themes.DARK : Themes.LIGHT
    }
    
    const [theme, setTheme] = useState<number>(getInitialTheme())

    useEffect(() => {
        document.body.classList.remove(...document.body.classList)
        document.body.classList.add(`theme-${theme}`)
        saveTheme(theme)
    }, [theme])

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTheme(Number(event.target.value))

    const thumbPosition = useMemo(() => {
        return (theme - 1) * INPUT_WIDTH + SWITCH_PADDING
    }, [theme])

    return (
        <ThemeSwitchContainer>
            <Title>Theme</Title>
            <div>
                <SwitchLabels>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </SwitchLabels>
                <Switch>
                    <Thumb style={{left: `${thumbPosition}rem`}} />

                    <SwitchInput
                        type="radio"
                        name="switch"
                        onChange={handleSwitchChange}
                        value={Themes.DARK}
                    />
                    
                    <SwitchInput
                        type="radio"
                        name="switch"
                        onChange={handleSwitchChange}
                        value={Themes.LIGHT}
                    />

                    <SwitchInput
                        type="radio"
                        name="switch"
                        onChange={handleSwitchChange}
                        value={Themes.ALTERNATIVE_DARK}
                    />
                </Switch>
            </div>
        </ThemeSwitchContainer>
    )
}