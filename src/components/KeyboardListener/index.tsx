import { HTMLAttributes, KeyboardEvent, useCallback, useEffect, useMemo } from 'react'

import { useCalculator } from '../../hooks/useCalculator'
import { IKeysMap } from './types'

export const KeyboardListener = ({children}: HTMLAttributes<HTMLElement>) => {
    const calculator = useCalculator()

    const keysMap = useMemo<IKeysMap>(() => ({
        '0': () => calculator.addChar('0'),
        '1': () => calculator.addChar('1'),
        '2': () => calculator.addChar('2'),
        '3': () => calculator.addChar('3'),
        '4': () => calculator.addChar('4'),
        '5': () => calculator.addChar('5'),
        '6': () => calculator.addChar('6'),
        '7': () => calculator.addChar('7'),
        '8': () => calculator.addChar('8'),
        '9': () => calculator.addChar('9'),
        ',': () => calculator.addChar('.'),
        '.': () => calculator.addChar('.'),
        '+': calculator.sum,
        '-': calculator.subtract,
        '*': calculator.multiply,
        '/': calculator.divide,
        'Enter': calculator.equal,
        'Backspace': calculator.delete
    }), [])

    const handleKeyDown = useCallback((event: globalThis.KeyboardEvent) => {
        const action = keysMap[event.key]
        action?.()
    }, [])

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown)

        return () =>
            document.body.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            { children }
        </>
    )
}