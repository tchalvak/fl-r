import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '@material-ui/core/Button'

import styles from './fbutton.module.css'

/**
 * A simple wrapper for styling around MUI Button
 */
const FButton = ({ classes, className, children, ...rest }) => {
    return (
        <Button className={cx(className, styles.fbutton)} {...rest}>
            {children}
        </Button>
    )
}

FButton.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}

FButton.defaultProps = {
    variant: 'contained',
    classes: {},
}

export default FButton
