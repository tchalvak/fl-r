import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTheme } from '@material-ui/styles'
import hstyles from './header.module.css'
import { ReactComponent as Logo } from '../../images/logo.svg'
import Video from '../Video/Video'
import FButton from '../FButton/FButton'

// There is a lot of dissparate stuff in the header, so it's a difficult design
const Header = ({ children, className, ...rest })=> {
    const theme = useTheme()
    const oStyle = {
        background: theme.background,
        color:'teal'
    }
    return (
        <header className={cx(className, hstyles['p-header'])} style={oStyle} {...rest}>
            <span className={hstyles['leaf-box']}></span>
            <Logo />
            {children}
            <FButton color='primary'>Download now</FButton> <FButton color='secondary'>Buy license</FButton>
            <Video controls="controls" controlsList="nodownload" poster="poster" src={"https://player.vimeo.com/external/332900401.hd.mp4?s=7d6caf73dcd400bdc28cea3ac5aaef5caeca4ae1&profile_id=175"} type="video/mp4"/>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Header
