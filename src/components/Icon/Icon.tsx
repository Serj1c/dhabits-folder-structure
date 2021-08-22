import React from 'react'
import styles from './Icon.module.css'
import { ReactComponent as FolderIcon } from './resource/folder_closed.svg'

export const Icon: React.FunctionComponent = (): JSX.Element => {
    return (
        <FolderIcon className={styles.root} />
    )
}