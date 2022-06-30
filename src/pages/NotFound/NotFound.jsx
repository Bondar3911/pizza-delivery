import React from 'react'
import styles from './NotFound.module.scss'

console.log(styles)

export const NotFound = () => {
  return (
    <h1 className={styles.root}>
      Ничего не найдено
    </h1>
  )
}

export default NotFound
