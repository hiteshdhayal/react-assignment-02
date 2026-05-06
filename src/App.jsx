import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MealGrid from './components/MealGrid'
import MealModal from './components/MealModal'
import Pagination from './components/Pagination'
import StatusBar from './components/StatusBar'
import './App.css'

const BASE_URL = 'https://api.freeapi.app/api/v1/public/meals'

export default function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [search, setSearch] = useState('')
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [category, setCategory] = useState('All')

  const fetchMeals = useCallback(async (pageNum) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${BASE_URL}?page=${pageNum}&limit=12`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      setMeals(json.data.data)
      setTotalPages(json.data.totalPages)
      setTotalItems(json.data.totalItems)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMeals(page)
  }, [page, fetchMeals])

  // Derive unique categories from current page meals
  const categories = ['All', ...new Set(meals.map(m => m.strCategory).filter(Boolean))]

  const filtered = meals.filter(meal => {
    const matchSearch = meal.strMeal.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || meal.strCategory === category
    return matchSearch && matchCat
  })

  return (
    <div className="app-shell">
      <Header totalItems={totalItems} />
      <main className="app-main">
        <SearchBar
          search={search}
          onSearch={setSearch}
          category={category}
          categories={categories}
          onCategory={setCategory}
        />
        <MealGrid
          meals={filtered}
          loading={loading}
          error={error}
          onSelect={setSelectedMeal}
          onRetry={() => fetchMeals(page)}
        />
        {!loading && !error && (
          <Pagination page={page} totalPages={totalPages} onPage={setPage} />
        )}
      </main>
      <StatusBar page={page} totalPages={totalPages} count={filtered.length} />
      {selectedMeal && (
        <MealModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  )
}
