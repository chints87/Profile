import React from 'react'
import styles from '../styles/Section.module.css'

export default function Section({ subheader, description }) {
  return (
    <div className={styles.section}>
      <h3>{subheader}</h3>
      <p>{description}</p>
    </div>
  )
}
