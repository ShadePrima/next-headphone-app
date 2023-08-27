import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.logoRow}>
          <Image src='/icons/logo.svg' alt='logo' width={161} height={32} />
          <Image
            src='/icons/social_icons.svg'
            alt='social-icon'
            width={130}
            height={30}
          />
        </div>
        <p className={styles.text}>©headphones 2020</p>
      </div>
    </div>
  )
}

export default Footer
