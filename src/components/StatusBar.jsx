import styles from './StatusBar.module.css'

export default function StatusBar({ page, totalPages, count }) {
  return (
    <footer className={styles.bar}>
      <span className={styles.item}>📍 PAGE {String(page).padStart(2,'0')} / {String(totalPages).padStart(2,'0')}</span>
      <span className={styles.divider}>|</span>
      <span className={styles.item}>🍽 {count} MEALS DISPLAYED</span>
      <span className={styles.divider}>|</span>
      <span className={styles.item}>⚔ QUEST KITCHEN v1.0</span>
      <span className={styles.divider}>|</span>
      <span className={styles.item}>
        <span className={styles.blink}>█</span> READY
      </span>
    </footer>
  )
}
