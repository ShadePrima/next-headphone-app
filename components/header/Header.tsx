import React from 'react'
import cl from 'clsx'

import styles from './Header.module.scss'
import Navbar from './navbar/Navbar'
import { Button } from '@/ui'

const Header = () => {
  return (
    <div className={cl(styles.main)}>
      <Navbar />

      <div className={styles.content}>
        <h1 className={styles.title}>Lorem ipsum dolor set amet lorem ipsum</h1>
        <p className={styles.text}>Lorem ipsum dolor set amet lorem ipsum</p>

        <Button title='CALL TO ACTION' />

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  )
}

export default Header
