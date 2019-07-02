import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import theme from '../ui/theme/index.js'
import Mockup from '../components/Mockup/Mockup'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Video from '../components/Video/Video'
import Button from '../components/FButton/FButton'

const videoSrc =
    'https://player.vimeo.com/external/332900401.hd.mp4?s=7d6caf73dcd400bdc28cea3ac5aaef5caeca4ae1&profile_id=175'

const ThemeDecorator = storyFn => (
    <>
        <CssBaseline />
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
    </>
)
addDecorator(ThemeDecorator)

storiesOf('Header', module).add('with lorem text', () => (
    <Header>
        <Typography variant="h4">Falling Leaves</Typography>
        <Typography variant="subtitle1">
            This is a free application landing page for your business
        </Typography>
    </Header>
))

storiesOf('Footer', module).add('with lorem text', () => (
    <Footer>Lorem ipsum</Footer>
))

storiesOf('Video', module).add('with default expandable player', () => (
    <Video
        poster="poster"
        controls="controls"
        controlsList="nodownload"
        src={videoSrc}
        type="video/mp4"
    />
))

storiesOf('Layout', module).add('with all contents', () => <Mockup />)

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')} color="primary">
            Hello Button
        </Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')} color="primary">
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ))
