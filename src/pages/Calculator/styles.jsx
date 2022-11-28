import styled, { css } from 'styled-components'

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

export const Key = styled.button`
    cursor: pointer;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 3rem;
    text-transform: uppercase;
    transition: all .15s linear;
    grid-column: ${ ({gridColumn}) => gridColumn ?? 'auto' };

    ${({styleType = 'default'}) => {
        if (styleType === 'action') {
            return css`
                font-size: 1.2rem;
                line-height: 3.2rem;
                background: var(--action-key-background);
                color: var(--action-key-text);
                box-shadow: 0 4px 1px var(--action-key-shadow);
            `
        }

        if (styleType === 'equal') {
            return css`
                background: var(--equal-key-background);
                color: var(--equal-key-text);
                box-shadow: 0 4px 1px var(--equal-key-shadow);
                
            `
        }

        return css`
            background: var(--key-background);
            color: var(--key-text);
            box-shadow: 0 4px 1px var(--key-shadow);
        `
    }}

    &:hover {
        filter: brightness(1.4);
    }
`