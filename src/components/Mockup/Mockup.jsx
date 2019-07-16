import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './mockup.module.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Article from '../Article/Article'
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
                    <Article title='Get some leaves and go to town' datetime={new Date()}>
                        
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <ul>
                            <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                            <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                            <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                            <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                        </ul>
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
