import React from 'react'
import ReactDOM from 'react-dom'
import { default as Mockup } from './Mockup'

describe('<Mock />', () => {
    it('renders a mockup area area', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Mockup />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
