import { ButtonHTMLAttributes } from 'react'

export interface IKey extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType?: 'action' | 'equal'
    gridColumn?: string
}