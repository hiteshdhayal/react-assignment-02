import styles from './Pagination.module.css'

export default function Pagination({ page, totalPages, onPage }) {
  const pages = []

  // Build page window
  let start = Math.max(1, page - 2)
  let end = Math.min(totalPages, page + 2)
  if (end - start < 4) {
    start = Math.max(1, end - 4)
    end = Math.min(totalPages, start + 4)
  }

  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.navBtn}
        onClick={() => onPage(1)}
        disabled={page === 1}
        id="page-first"
        title="First page"
      >⏮</button>

      <button
        className={styles.navBtn}
        onClick={() => onPage(p => Math.max(1, p - 1))}
        disabled={page === 1}
        id="page-prev"
      >◀ PREV</button>

      <div className={styles.pageNums}>
        {start > 1 && <span className={styles.ellipsis}>…</span>}
        {pages.map(p => (
          <button
            key={p}
            id={`page-${p}`}
            className={`${styles.pageBtn} ${p === page ? styles.pageBtnActive : ''}`}
            onClick={() => onPage(p)}
          >
            {String(p).padStart(2, '0')}
          </button>
        ))}
        {end < totalPages && <span className={styles.ellipsis}>…</span>}
      </div>

      <button
        className={styles.navBtn}
        onClick={() => onPage(p => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        id="page-next"
      >NEXT ▶</button>

      <button
        className={styles.navBtn}
        onClick={() => onPage(totalPages)}
        disabled={page === totalPages}
        id="page-last"
        title="Last page"
      >⏭</button>
    </nav>
  )
}
