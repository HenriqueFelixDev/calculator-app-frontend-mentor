import { Calculation } from "../../providers/CalculatorProvider/types";

export const sum : Calculation = (total, currentValue) =>
    total + currentValue

export const subtract : Calculation = (total, currentValue) =>
    total - currentValue

export const divide : Calculation = (total, currentValue) =>
    total / currentValue

export const multiply : Calculation = (total, currentValue) =>
    total * currentValue