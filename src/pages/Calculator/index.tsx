import React from 'react'

import { useCalculator } from '../../hooks/useCalculator'
import { ThemeSwitch } from '../../components/ThemeSwitch'
import { Display, Header, Key, Keyboard, Title } from './styles'

export const CalculatorPage = () => {
    const calculator = useCalculator()

    const handleCharacterClick =
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const char = event.currentTarget.innerText
            calculator.addChar(char)
        }

    return (
        <>
            <Header>
                <Title>calc</Title>
                <ThemeSwitch />
            </Header>
            <main>
                <Display>
                    { calculator.displayValue.replace('.', ',') }
                </Display>

                <Keyboard>
                    <Key onClick={handleCharacterClick}>
                        7
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        8
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        9
                    </Key>

                    <Key styleType="action" onClick={calculator.delete}>
                        DEL
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        4
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        5
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        6
                    </Key>

                    <Key onClick={calculator.sum}>
                        +
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        1
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        2
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        3
                    </Key>

                    <Key onClick={calculator.subtract}>
                        -
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        .
                    </Key>

                    <Key onClick={handleCharacterClick}>
                        0
                    </Key>

                    <Key onClick={calculator.divide}>
                        /
                    </Key>

                    <Key onClick={calculator.multiply}>
                        x
                    </Key>

                    <Key
                        styleType="action"
                        gridColumn="1 / span 2"
                        onClick={calculator.reset}
                        >
                            Reset
                    </Key>

                    <Key
                        styleType="equal"
                        gridColumn="3 / span 2"
                        onClick={calculator.equal}
                        >
                            =
                    </Key>
                </Keyboard>
            </main>
        </>
    )
}