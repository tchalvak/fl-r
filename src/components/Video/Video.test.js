import React from 'react'
import ReactDOM from 'react-dom'
import { default as Video } from './Video'

describe('<Video />', () => {
    it('renders an video player', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Video src="" type="video/mp4" />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
