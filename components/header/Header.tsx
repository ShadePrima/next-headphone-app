import React from 'react'
import cl from 'clsx'

import styles from './Header.module.scss'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <div className={cl(styles.main)}>
      <Navbar />
    </div>
  )
}

export default Header
