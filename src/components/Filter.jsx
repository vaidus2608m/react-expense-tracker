import { useExpenseStore } from '../store/expenseStore'

function Filter() {
    const {filter, setFilter} = useExpenseStore();
  return (
    <div className="filter-wrapper">
      <select className="filter-select" value={filter}
      onChange={e => setFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
      </select>
    </div>
  )
}

export default Filter