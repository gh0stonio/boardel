import { useCallback } from 'react'

import styles from './ThemeToggle.module.css'

export const ThemeToggle = () => {
  const onChange = useCallback(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')

    isDarkMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className={styles.themeToggle}>
      <input type="checkbox" name="toggle" id="themeToggle" className={styles.input} onChange={onChange} />
      <label htmlFor="themeToggle" className={styles.label}>
        {' '}
      </label>
    </div>
  )
}
