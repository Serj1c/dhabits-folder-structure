import React, { useEffect, useState } from 'react'
import styles from './Content.module.css'
import axios from 'axios'
import { API_ENDPOINT } from 'constants/common'
import { Icon, Button } from 'components'
import { FolderModel } from 'models/FolderModel'

export const Content: React.FunctionComponent = (): JSX.Element => {

    const [result, setResult] = useState<FolderModel | null>()
    const [fetchError, setFetchError] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchResult = async () => {
            const fetchedResults = await axios.get(API_ENDPOINT)
            const folders: FolderModel = await fetchedResults.data
            setFetchError(null)
            setResult(folders)
        }
        fetchResult()
    }, [])

    const handleClick = async (id: number) => {
        try {
            const fetchedResults = await axios.get(API_ENDPOINT + `?dirId=${id}`)
            const folders: FolderModel = await fetchedResults.data
            setResult(folders)
        } catch (error) {
            setFetchError(error.message)
        }
    }

    const handleButtonClick = async () => {
        try {
            const fetchedResults = await axios.get(API_ENDPOINT)
            const folders: FolderModel = await fetchedResults.data
            setResult(folders)
            setFetchError(null)
        } catch (error) {
            setFetchError(error.message)
        }
    }
    
    return (
        <div className={styles.root}>
            {fetchError &&
            <div className={styles.fallback}>
                <h3>{fetchError} - it is not a folder!</h3>
                <Button onClick={handleButtonClick}>Back to root</Button>
            </div>
            }
            {!fetchError && result && <ul className={styles.root_list}>
                {result.children.map((item) => (
                    <div className={styles.root_list_element} key={item.id}>
                        {item.children && <Icon />}
                        <li className={styles.root_list_item} onClick={() => handleClick(item.id)}>
                            {item.title}
                        </li>
                    </div>
                ))}
            </ul> }
        </div>
    )
}