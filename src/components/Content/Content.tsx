import React, { useCallback, useEffect, useState } from 'react'
import styles from './Content.module.css'
import axios from 'axios'
import { API_ENDPOINT } from 'constants/common'
import { Icon } from 'components/Icon'
import { FolderModel } from 'models/FolderModel'

export const Content: React.FunctionComponent = (): JSX.Element => {

    const [result, setResult] = useState<FolderModel>(null)
    
    useEffect(() => {
        const fetchResult = async () => {
            const fetchedResults = await axios.get(API_ENDPOINT)
            const folders: FolderModel = await fetchedResults.data
            setResult(folders)
        }
        fetchResult()
    }, [])

    const handleClick = async (id: number) => {
        const fetchedResults = await axios.get(API_ENDPOINT + `?dirId=${id}`)
        const folders: FolderModel = await fetchedResults.data
        setResult(folders)
    }
    
    return (
        <div className={styles.root}>
            {result && <ul className={styles.root_list}>
                {result.children.map((item) => (
                    <div className={styles.root_list_element} key={item.id}>
                        <Icon />
                        <li className={styles.root_list_item} onClick={() => handleClick(item.id)}>
                            {item.title}
                        </li>
                    </div>
                ))}
            </ul> }
        </div>
    )
}