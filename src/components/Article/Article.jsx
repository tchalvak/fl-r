import React from 'react'
//import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './article.module.css'

import Typography from '@material-ui/core/Typography'

// eslint-disable-next-line react/prop-types
const Article = ({ children, title, datetime, className, ...rest }) => {
    return (
        <article className={cx(className, styles.article)} {...rest}>
            <header>
                <Typography variant="h1">{title}</Typography>
                <time className='published' dateTime={(datetime.toString("o"))}>
                    {datetime.toDateString()}
                </time>
            </header>
            <div className={styles['the-content']}>
                {children}
            </div>
        </article>
    )
}

Article.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    title: PropTypes.string.isRequired,
    datetime: PropTypes.instanceOf(Date).isRequired,
}

export default Article