import React from 'react'
import ReactDOM from 'react-dom'
import { default as FButton } from './FButton'

describe('<FButton />', () => {
    it('with a text button', () => {
        const div = document.createElement('div')
        ReactDOM.render(<FButton>Text content</FButton>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
