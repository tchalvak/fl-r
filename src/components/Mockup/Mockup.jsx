import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './mockup.module.css'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Typography from '@material-ui/core/Typography'

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
                <Typography variant="h4">Falling Rocks</Typography>
                <Typography variant="subtitle1">
                    This is a free application landing page for your business
                </Typography>
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
