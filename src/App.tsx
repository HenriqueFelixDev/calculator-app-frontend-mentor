import { KeyboardListener } from './components/KeyboardListener'
import { CalculatorPage } from './pages/Calculator'
import { CalculatorProvider } from './providers/CalculatorProvider'

export const App = () => (
    <CalculatorProvider>
      <KeyboardListener>
        <CalculatorPage />
      </KeyboardListener>
    </CalculatorProvider>
)