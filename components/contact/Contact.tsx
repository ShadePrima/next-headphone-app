import { Button } from '@/ui'
import styles from './Contact.module.scss'

const inputList = [
  { id: 1, text: 'Name' },
  { id: 2, text: 'Email' },
  { id: 3, text: 'Your message' },
]

const Contact = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Contact us</h1>
      <div className={styles.inputContainer}>
        {inputList.map((item) => (
          <input
            key={item.id}
            className={styles.input}
            placeholder={item.text}
          />
        ))}
      </div>

      <Button title='CALL TO ACTION' />
    </div>
  )
}

export default Contact
