import MealCard from './MealCard'
import styles from './MealGrid.module.css'

export default function MealGrid({ meals, loading, error, onSelect, onRetry }) {
  if (loading) return (
    <div className={styles.center}>
      <div className={styles.spinner}></div>
      <p className={styles.loadText}>LOADING RECIPES...</p>
    </div>
  )

  if (error) return (
    <div className={styles.center}>
      <p className={styles.errorText}>⚠ CONNECTION FAILED</p>
      <p className={styles.errorSub}>{error}</p>
      <button className={styles.retryBtn} onClick={onRetry}>▶ RETRY</button>
    </div>
  )

  if (meals.length === 0) return (
    <div className={styles.center}>
      <p className={styles.emptyText}>— NO RECIPES FOUND —</p>
      <p className={styles.emptySub}>Try a different search or category</p>
    </div>
  )

  return (
    <div className={styles.grid}>
      {meals.map((meal, i) => (
        <MealCard key={meal.id} meal={meal} index={i} onSelect={onSelect} />
      ))}
    </div>
  )
}
