export type CalculatorAction = () => void

export type Calculation = (total: number, currentValue: number) => number

export interface ICalculatorContext extends ICalculatorState {
    sum: CalculatorAction
    subtract: CalculatorAction
    divide: CalculatorAction
    multiply: CalculatorAction
    reset: CalculatorAction
    delete: CalculatorAction
    equal: CalculatorAction
    addChar: (char: string) => void
}

export interface ICalculatorState {
    displayValue: string
    value: number
    total: number
    resetOnAddChar: boolean
    previousCalculation: Calculation
}