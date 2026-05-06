import styles from './MealCard.module.css'

const CATEGORY_ICONS = {
  Chicken: '🍗', Beef: '🥩', Seafood: '🐟', Vegetarian: '🥦',
  Dessert: '🍰', Breakfast: '🍳', Pasta: '🍝', Pork: '🥓',
  Lamb: '🍖', Vegan: '🌱', Miscellaneous: '🍽️', Side: '🥗',
  Starter: '🥣', Goat: '🐐',
}

function getIngredients(meal) {
  const list = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const meas = meal[`strMeasure${i}`]
    if (ing && ing.trim()) list.push({ ing: ing.trim(), meas: meas?.trim() || '' })
  }
  return list
}

export default function MealCard({ meal, index, onSelect }) {
  const ingredients = getIngredients(meal)
  const icon = CATEGORY_ICONS[meal.strCategory] || '🍽️'
  const tags = meal.strTags ? meal.strTags.split(',').map(t => t.trim()).filter(Boolean) : []

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onSelect(meal)}
      id={`meal-card-${meal.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(meal)}
    >
      {/* Image */}
      <div className={styles.imgWrap}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.imgOverlay}>
          <span className={styles.viewBtn}>▶ VIEW RECIPE</span>
        </div>
        <span className={styles.categoryBadge}>{icon} {meal.strCategory?.toUpperCase()}</span>
        <span className={styles.idBadge}>#{String(meal.id).padStart(3,'0')}</span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h2 className={styles.name}>{meal.strMeal}</h2>

        <div className={styles.meta}>
          {meal.strArea && (
            <span className={styles.metaChip}>🌍 {meal.strArea}</span>
          )}
          <span className={styles.metaChip}>🧪 {ingredients.length} INGR.</span>
        </div>

        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        <p className={styles.instructions}>
          {meal.strInstructions?.slice(0, 90)}...
        </p>

        <div className={styles.footer}>
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className={styles.ytBtn}
              onClick={e => e.stopPropagation()}
            >
              ▶ WATCH
            </a>
          )}
          <button className={styles.detailBtn} onClick={() => onSelect(meal)}>
            DETAILS →
          </button>
        </div>
      </div>
    </article>
  )
}
