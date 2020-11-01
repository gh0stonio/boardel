import Link from 'next/link'
import { ThemeToggle } from 'components/ThemeToggle'

import styles from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.internalLinks}>
        <li>
          <Link href="/">
            <a href="/" className={styles.internalLink}>
              Home
            </a>
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
