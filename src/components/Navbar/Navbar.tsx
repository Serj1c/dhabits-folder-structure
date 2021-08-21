import React from 'react'
import styles from './Navbar.module.css'

export const Navbar: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <h2>Digital Habits</h2>
            <h3>Folders structure</h3>
        </div>
    )
}
