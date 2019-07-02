import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import vstyles from './video.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import FButton from '../FButton/FButton'

const Video = ({ src, type, cprops, className, ...rest }) => {
    const [ open, setOpen ] = useState(false)
    const hidden = open ? null : 'hidden'
    const toggle = (e)=>{
        setOpen(!open)
    }
    return (
        <div className={cx(className, vstyles['video-player'])}>
            <FButton type="button" onClick={toggle} variant='text' className={vstyles['play-button']}>
                <Icon icon={faPlay}/>{' '}Watch the video
            </FButton>
            <div className={vstyles.varea} hidden={hidden}>
                <video className={className} {...rest}>
                    <source src={src} type={type} />
                    Sorry, your browser doesn&apos;t support this embedded video,
                    <a href={src}>download</a> or watch it <a href={src}>here</a>.
                    <track kind="captions" {...cprops} />
                </video>
            </div>
        </div>
    )
}

Video.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cprops: PropTypes.shape({}),
}

Video.defaultProps = {
    cprops: {}
}


export default Video