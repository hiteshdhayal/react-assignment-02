import { useEffect } from 'react'
import styles from './MealModal.module.css'

function getIngredients(meal) {
  const list = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const meas = meal[`strMeasure${i}`]
    if (ing && ing.trim()) list.push({ ing: ing.trim(), meas: meas?.trim() || '' })
  }
  return list
}

export default function MealModal({ meal, onClose }) {
  const ingredients = getIngredients(meal)

  useEffect(() => {
    const handler = e => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true" aria-label={meal.strMeal}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Header bar */}
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>▶ RECIPE DETAILS</span>
          <button className={styles.closeBtn} onClick={onClose} id="modal-close-btn">✕ CLOSE</button>
        </div>

        <div className={styles.modalBody}>
          {/* Left: image + quick info */}
          <div className={styles.leftCol}>
            <div className={styles.imgFrame}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.img} />
            </div>
            <div className={styles.quickInfo}>
              {meal.strCategory && <div className={styles.infoRow}><span>CATEGORY</span><span>{meal.strCategory}</span></div>}
              {meal.strArea && <div className={styles.infoRow}><span>ORIGIN</span><span>{meal.strArea}</span></div>}
              <div className={styles.infoRow}><span>INGR.</span><span>{ingredients.length} items</span></div>
            </div>
            {meal.strYoutube && (
              <a href={meal.strYoutube} target="_blank" rel="noreferrer" className={styles.ytLink}>
                ▶ WATCH VIDEO TUTORIAL
              </a>
            )}
            {meal.strSource && (
              <a href={meal.strSource} target="_blank" rel="noreferrer" className={styles.srcLink}>
                🔗 SOURCE RECIPE
              </a>
            )}
          </div>

          {/* Right: name, ingredients, instructions */}
          <div className={styles.rightCol}>
            <h2 className={styles.mealName}>{meal.strMeal}</h2>

            {meal.strTags && (
              <div className={styles.tagRow}>
                {meal.strTags.split(',').filter(Boolean).map(t => (
                  <span key={t} className={styles.tag}>{t.trim().toUpperCase()}</span>
                ))}
              </div>
            )}

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>⚗ INGREDIENTS</h3>
              <ul className={styles.ingredientList}>
                {ingredients.map(({ ing, meas }, i) => (
                  <li key={i} className={styles.ingredientItem}>
                    <span className={styles.ingBullet}>▸</span>
                    <span className={styles.ingName}>{ing}</span>
                    {meas && <span className={styles.ingMeas}>{meas}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>📜 INSTRUCTIONS</h3>
              <div className={styles.instructions}>
                {meal.strInstructions?.split('\r\n').filter(l => l.trim()).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
