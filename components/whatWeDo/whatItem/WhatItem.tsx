import styles from './WhatItem.module.scss'
import Image from 'next/image'

type WhatItemProps = {
  icon: string
  title: string
  text: string
}

const WhatItem = ({ icon, title, text }: WhatItemProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.iconContainer}>
        <Image src={icon} alt='icone' width={92} height={65} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default WhatItem
