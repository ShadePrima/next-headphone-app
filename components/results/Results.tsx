import Image from 'next/image'

import styles from './Results.module.scss'

const Results = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Our results speak for themselves</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div className={styles.poligonContainer}>
          {Array.from({ length: 4 }).map((item, index) => (
            <Image
              key={index}
              src='/icons/poligon-fill.svg'
              alt='poligon'
              width={190}
              height={190}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Results
