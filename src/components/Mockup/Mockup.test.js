import React from 'react'
import ReactDOM from 'react-dom'
import { default as Mockup } from './Mockup'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../ui/theme/index.js'

describe('<Mock />', () => {
    it('renders a mockup area area', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <Mockup />
            </ThemeProvider>,
            div
        )
        ReactDOM.unmountComponentAtNode(div)
    })
})
