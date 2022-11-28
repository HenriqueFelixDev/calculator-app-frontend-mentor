import styled, { css } from 'styled-components'
import { IKey } from './types'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
`

export const Title = styled.h1`
    font-size: 1.5rem;
`

export const Container = styled.main`
`

export const Display = styled.output`
    border-radius: 0.5rem;
    background: var(--screen-background);
    display: block;
    height: 100px;
    width: 100%;
    margin: 1rem 0;
    font-size: 2.75rem;
    line-height: 100px;
    text-align: right;
    padding: 0 1.5rem;
`

export const Keyboard = styled.section`
    background: var(--keypad-background);
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1rem;
    margin: 1rem 0;
`

export const Key = styled.button<IKey>`
    cursor: pointer;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    font-size: ${({styleType}) =>
        styleType === 'action' ? '1.2rem' : '1.5rem'
    };
    line-height: ${({styleType}) =>
        styleType === 'action' ? '3.2rem' : '3rem'
    };
    text-transform: uppercase;
    transition: all .15s linear;
    grid-column: ${ ({gridColumn}) => gridColumn ?? 'auto' };

    background: ${({styleType}) => {
        if (styleType === 'action') {
            return 'var(--action-key-background)'
        }
        
        if (styleType === 'equal') {
            return 'var(--equal-key-background)'
        }

        return 'var(--key-background)'
    }};
    
    color: ${({styleType}) => {
        if (styleType === 'action') {
            return 'var(--action-key-text)'
        }
        
        if (styleType === 'equal') {
            return 'var(--equal-key-text)'
        }

        return 'var(--key-text)'
    }};

    box-shadow: 0 4px 1px ${({styleType}) => {
        if (styleType === 'action') {
            return 'var(--action-key-shadow)'
        }

        if (styleType === 'equal') {
            return 'var(--equal-key-shadow)'
        }

        return 'var(--key-shadow)'
    }};

    &:hover {
        filter: brightness(1.4);
    }
`