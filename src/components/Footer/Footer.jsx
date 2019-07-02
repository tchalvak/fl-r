import React from 'react'
//import PropTypes from 'prop-types'
import cx from 'classnames'
import Typography from '@material-ui/core/Typography'

import fstyles from './footer.module.css'
import FButton from '../FButton/FButton'

export const FSection = ({ children, title })=>(
    <div className={fstyles.sec}>
        <Typography variant='h4'>
            {children}
        </Typography>
    </div>
)

const Footer = ({ children, className, ...rest })=> {
    return (
        <footer className={cx(className, fstyles['p-footer'])} {...rest}>
            <div className={fstyles['f-upper']}>
                <div className={fstyles.spaced}>
                    Interested in seeing how awesome Falling Leaves can be for your business? Try it for FREE <FButton color='primary'>Try It Free</FButton>
                </div>
            </div>
            <div className={fstyles['f-middle']}>
                {children}
            </div>
            <div className={fstyles['f-lower']}>
                <div className={fstyles.spaced}>
                    <small className="source-org vcard copyright">
                        © 2016, <span className="org fn">Falling Leaves Co.</span> All Rights Reserved.
                    </small>
                    <small className={fstyles['f-lower-links']}>
                        facebook - twitter - linkedin - appstore
                    </small>
                </div>
            </div>
        </footer>
    )
}

export default Footer
