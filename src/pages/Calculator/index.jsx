import { ThemeSwitch } from "../../components/ThemeSwitch";
import { Container, Display, Header, Key, Keyboard, Title } from "./styles";

export const CalculatorPage = () => (
    <>
        <Header>
            <Title>calc</Title>
            <ThemeSwitch />
        </Header>
        <Container>
            <Display>
                123,45
            </Display>
            <Keyboard>
                <Key>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Key styleType="action">DEL</Key>
                <Key>4</Key>
                <Key>5</Key>
                <Key>6</Key>
                <Key>+</Key>
                <Key>1</Key>
                <Key>2</Key>
                <Key>3</Key>
                <Key>-</Key>
                <Key>.</Key>
                <Key>0</Key>
                <Key>/</Key>
                <Key>x</Key>
                <Key styleType="action" gridColumn="1 / span 2">Reset</Key>
                <Key styleType="equal" gridColumn="3 / span 2">=</Key>
            </Keyboard>
        </Container>
    </>
)