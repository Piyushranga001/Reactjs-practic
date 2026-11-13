import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <h1>This is header</h1>
      <button className={styles.btn}>Sign up</button>
    </div>
  )
}

export default Header
