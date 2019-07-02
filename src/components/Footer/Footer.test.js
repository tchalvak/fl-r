import React from 'react'
import ReactDOM from 'react-dom'
import { default as Footer } from './Footer'

describe('<Footer />', () => {
    it('renders a mockup area area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Footer>Some children</Footer>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
