import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return <div className={styles.main}>{title}</div>
}

export default Button
