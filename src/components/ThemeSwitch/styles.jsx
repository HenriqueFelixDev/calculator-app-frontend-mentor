import styled from 'styled-components'

export const ThemeSwitchContainer = styled.section`
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
`

export const Title = styled.h2`
    font-size: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`

export const SwitchLabels = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    font-size: 0.6rem;
`

export const Switch = styled.div`
    position: relative;
    border-radius: 99999px;
    padding: 0.3rem;
    background: var(--keypad-background);
    display: flex;
    align-items: center;
    
    input {
        width: 1rem;
        height: 0.75rem;
        opacity: 0;
        cursor: pointer;
    }
`

export const Thumb = styled.div`
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    background: var(--equal-key-background);
    border-radius: 50%;
    transition: all .2s linear;
`