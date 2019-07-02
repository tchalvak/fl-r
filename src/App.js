import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'
import Mockup from './components/Mockup/Mockup'
import { ThemeProvider } from '@material-ui/styles'

import theme from './ui/theme/index.js'

const overrideTheme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    ...theme,
}

function App() {
    return (
        <>
            <ThemeProvider theme={overrideTheme}>
                <CssBaseline />
                <div className="App">
                    <Mockup />
                </div>
            </ThemeProvider>
        </>
    )
}

export default App
