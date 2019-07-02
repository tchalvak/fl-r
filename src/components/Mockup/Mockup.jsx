import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './mockup.module.css'

import Video from '../Video/Video'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

// eslint-disable-next-line react/prop-types
const Core = ({ children, className, ...rest }) => {
    return (
        <div className={cx('core', className)} {...rest}>
            { children }
        </div>
    )
}

// Unique-to-page main content
// eslint-disable-next-line react/prop-types
const Main = ({ children, ...rest }) => {
    return (
        <main {...rest}>
            {children}
        </main>
    )
}

// eslint-disable-next-line react/prop-types
const Article = ({ children, title, datetime, ...rest }) => {
    return (
        <article {...rest}>
            <header>
                {title}
                <time className='published' dateTime={(datetime.toString())}>{datetime.toString()}</time>
            </header>
            {children}
        </article>
    )
}


/**
 * A mockup component to contain all the various html css before they get split out into subcomponents
 * @param {*} props
 */
const Mockup = ({ classes, className, ...rest }) => {
    return (
        <div className={cx(className, styles.mockup)} {...rest}>
            <Header>
                <Video controls="controls" controlsList="nodownload" poster="poster" src={"https://player.vimeo.com/external/332900401.hd.mp4?s=7d6caf73dcd400bdc28cea3ac5aaef5caeca4ae1&profile_id=175"} type="video/mp4"/>
            </Header>
            <Core>
                <Main>
                    <Article title='Some article title' datetime={new Date()}>
                        Article Content
                    </Article>
                </Main>
            </Core>
            <Main></Main>
            <Footer>
                Main footer content
            </Footer>
        </div>
    )
}

Mockup.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
}

Mockup.defaultProps = {
    classes: {}
}

export default withStyles(styles)(Mockup)
