import styles from './SearchBar.module.css'

export default function SearchBar({ search, onSearch, category, categories, onCategory }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          id="meal-search"
          className={styles.input}
          type="text"
          placeholder="SEARCH RECIPES..."
          value={search}
          onChange={e => onSearch(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
        {search && (
          <button
            className={styles.clear}
            onClick={() => onSearch('')}
            title="Clear"
          >✕</button>
        )}
      </div>

      <div className={styles.categoryRow}>
        <span className={styles.filterLabel}>▶ FILTER:</span>
        <div className={styles.pills}>
          {categories.map(cat => (
            <button
              key={cat}
              id={`cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              className={`${styles.pill} ${category === cat ? styles.pillActive : ''}`}
              onClick={() => onCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
