import { useEffect, useState } from 'react'
import { Switch, SwitchLabels, ThemeSwitchContainer, Thumb, Title } from './styles'

const INPUT_WIDTH = 16
const SWITCH_PADDING = 4.8

const SwitchInput = ({onChange, value}) => (
    <input
        type="radio"
        name="switch"
        onChange={onChange}
        value={value}
    />
)

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState(0)

    useEffect(() => {
        document.body.classList.remove(...document.body.classList.values())
        document.body.classList.add(`theme-${theme + 1}`)
    }, [theme])

    const handleSwitchChange = event =>
        setTheme(Number(event.target.value))

    const thumbPosition = theme * INPUT_WIDTH + SWITCH_PADDING

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
                    <Thumb style={{left: thumbPosition}} />

                    <SwitchInput onChange={handleSwitchChange} value={0} />
                    <SwitchInput onChange={handleSwitchChange} value={1} />
                    <SwitchInput onChange={handleSwitchChange} value={2} />
                </Switch>
            </div>
        </ThemeSwitchContainer>
    )
}