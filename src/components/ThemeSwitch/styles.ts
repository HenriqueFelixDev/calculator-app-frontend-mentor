import styled from 'styled-components'

export const ThemeSwitchContainer = styled.section`
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
`

export const Title = styled.h2`
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    @media (min-width: 768px) {
        font-size: 0.5rem;
    }
`

export const SwitchLabels = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    
    @media (min-width: 768px) {
        font-size: 0.6rem;
    }
`

export const Switch = styled.form`
    position: relative;
    border-radius: 99999px;
    padding: 0.3rem;
    background: var(--keypad-background);
    display: flex;
    align-items: center;
`

export const SwitchInput = styled.input`
    width: 1.5rem;
    height: 1.2rem;
    opacity: 0;
    cursor: pointer;
`

export const Thumb = styled.div`
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: var(--equal-key-background);
    border-radius: 50%;
    transition: all .2s linear;
`