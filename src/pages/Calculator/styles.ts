import styled, { css } from 'styled-components'
import { IKey } from './types'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 0.5rem;
`

export const Title = styled.h1`
    font-size: 1.5rem;
`

export const Display = styled.output`
    border-radius: 0.5rem;
    background: var(--screen-background);
    height: 100px;
    width: 100%;
    margin: 1rem 0;
    font-size: 2.75rem;
    padding: 0 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
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

const keyStyles = {
    action: {
        background: '--action-key-background',
        color: '--action-key-text',
        boxShadow: '--action-key-shadow'
    },
    equal: {
        background: '--equal-key-background',
        color: '--equal-key-text',
        boxShadow: '--equal-key-shadow'
    },
    default: {
        background: '--key-background',
        color: '--key-text',
        boxShadow: '--key-shadow'
    },
}

export const Key = styled.button<IKey>`
    cursor: pointer;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    text-transform: uppercase;
    transition: all .15s linear;

    grid-column: ${ ({gridColumn}) => gridColumn ?? 'auto' };

    font-size: ${({styleType}) =>
        styleType === 'action' ? '1.2rem' : '1.5rem'
    };

    line-height: ${({styleType}) =>
        styleType === 'action' ? '3.2rem' : '3rem'
    };

    ${({styleType}) => {
        const style = keyStyles[styleType || 'default']

        return css`
            background: var(${style.background});
            color: var(${style.color});
            box-shadow: 0 4px 1px var(${style.boxShadow});
        `
    }};

    &:hover {
        filter: brightness(1.4);
    }
`