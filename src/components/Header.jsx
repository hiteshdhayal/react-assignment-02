import styles from './Header.module.css'

export default function Header({ totalItems }) {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span className={styles.logo}>⚔ QUEST KITCHEN ⚔</span>
        <span className={styles.itemCount}>
          📜 {totalItems} RECIPES FOUND
        </span>
      </div>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>
          <span className={styles.cursor}>▶</span> RECIPE DUNGEON
        </h1>
        <p className={styles.subtitle}>
          — EXPLORE THE CULINARY REALM — CHOOSE YOUR MEAL QUEST —
        </p>
      </div>
      <div className={styles.hpRow}>
        <span className={styles.hpLabel}>HUNGER LVL</span>
        <div className={styles.hpBarBg}>
          <div className={styles.hpBarFill} style={{ '--hp': '78%' }} />
        </div>
        <span className={styles.hpVal}>78 / 100</span>
      </div>
    </header>
  )
}
