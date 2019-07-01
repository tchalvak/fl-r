import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './mockup.module.css'

/**
 * A mockup component to contain all the various html css before they get split out into subcomponents
 * @param {*} props
 */
const Mockup = ({ classes, className, ...rest }) => {
    return (
        <div className={cx(className, styles.mockup)} {...rest}>
            Falling Leaves Mockup Here
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
