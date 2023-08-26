import styles from './WhatWeDo.module.scss'
import WhatItem from './whatItem/WhatItem'

const itemList = [
  {
    id: 1,
    icon: '/icons/sound.svg',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    icon: '/icons/video.svg',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    icon: '/icons/music.svg',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    icon: '/icons/hearing.svg',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const WhatWeDo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>What we do ...</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className={styles.itemContainer}>
        {itemList.map((item) => (
          <WhatItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo
