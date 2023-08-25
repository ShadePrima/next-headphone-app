import React from 'react'
import cl from 'clsx'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const navList = [
  { id: 1, text: 'what we do' },
  { id: 2, text: 'our results' },
  { id: 3, text: 'contact us' },
]

const Navbar = () => {
  return (
    <div className={styles.main}>
      <Image src='/icons/logo.svg' alt='logo' width={161} height={32} />

      <ul className={cl(styles.nav, 'flexBetween')}>
        {navList.map((nav) => (
          <li key={nav.id} className={styles.navItem}>
            {nav.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
