import React from 'react'
import ReactDOM from 'react-dom'
import { default as Header } from './Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../ui/theme'

describe('<Header />', () => {
    it('renders a header area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ThemeProvider theme={theme}><Header /></ThemeProvider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
