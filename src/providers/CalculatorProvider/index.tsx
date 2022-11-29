import { createContext, HTMLAttributes, useEffect, useState } from 'react'

import { sum, subtract, multiply, divide } from '../../services/CalculatorService'
import { Calculation, ICalculatorContext, ICalculatorState } from './types'

const defaultCalculatorState : ICalculatorState = {
    value: 0,
    displayValue: '0',
    total: 0,
    resetOnAddChar: false,
    previousCalculation: sum
}

export const CalculatorContext = createContext<ICalculatorContext>({
    ...defaultCalculatorState,
    sum: () => {},
    subtract: () => {},
    divide: () => {},
    multiply: () => {},
    reset: () => {},
    delete: () => {},
    equal: () => {},
    addChar: (char) => {}
})

export const CalculatorProvider = ({children} : HTMLAttributes<HTMLElement>) => {
    const [state, setState] = useState<ICalculatorState>(defaultCalculatorState)

    const addChar = (char: string) => {
        setState(prevState => {
            if (char === '.') {
                if (prevState.displayValue.includes('.')) {
                    return prevState
                }
            } else {
                if (prevState.displayValue === '0' || prevState.resetOnAddChar) {
                    return {
                        ...prevState,
                        displayValue: char,
                        value: Number(char),
                        resetOnAddChar: false
                    }
                }
            }

            const newDisplayValue = prevState.displayValue + char
            const newValue = Number(newDisplayValue) || prevState.value
            
            return {
                ...prevState,
                value: newValue,
                displayValue: newDisplayValue,
                resetOnAddChar: false
            }
        })
    }

    const reset = () => setState(defaultCalculatorState)

    const deleteLastChar = () => {
        setState(({displayValue, ...prevState}) => {
            const newDisplayValue = displayValue.substring(0, displayValue.length - 1) || '0'
            const newValue = Number(newDisplayValue)

            return {
                ...prevState,
                displayValue: newDisplayValue,
                value: newValue
            }
        })
    }

    const runPreviousCalculation = (prevState: ICalculatorState) => 
        prevState.previousCalculation(prevState.total, prevState.value)

    const equal = () => {
        setState(prevState => {
            const total = runPreviousCalculation(prevState)
            
            return {
                ...defaultCalculatorState,
                value: total,
                displayValue: `${total}`,
                resetOnAddChar: true
            }
        })
    }

    const calculate = (action: Calculation) => {
        setState(prevState => {
            const newTotal = runPreviousCalculation(prevState)

            return {
                displayValue: `${newTotal}`,
                value: newTotal,
                total: newTotal,
                resetOnAddChar: true,
                previousCalculation: action
            }
        })
    }

    return (
        <CalculatorContext.Provider value={{
                ...state,
                sum: () => calculate(sum),
                subtract: () => calculate(subtract),
                divide: () => calculate(divide),
                multiply: () => calculate(multiply),
                reset,
                delete: deleteLastChar,
                equal,
                addChar
            }}
            >
                { children }
        </CalculatorContext.Provider>
    )
}