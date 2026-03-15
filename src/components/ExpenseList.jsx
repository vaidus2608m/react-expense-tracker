import { useExpenseStore } from '../store/expenseStore'

function ExpenseList() {

    const {expenses, deleteExpense, filter} = useExpenseStore();

    const filteredExpense = filter === "All" ?  expenses : expenses.filter(e => e.category === filter)

  return (
    <div className="expense-list">
        {filteredExpense.length === 0 ? (
          <div className="empty-state">No expenses found for this category.</div>
        ) : (
          filteredExpense.map(e => (
            <div className="expense-item" key={e.id}>
                <div className="expense-info">
                  <h3 className="expense-title">{e.title}</h3>
                  <div className="expense-meta">
                    <span className="expense-category">{e.category}</span>
                    <span className="expense-date">{e.date}</span>
                  </div>
                </div>
                <div className="expense-actions">
                  <span className="expense-amount">₹{Number(e.amount).toFixed(2)}</span>
                  <button className="btn-icon btn-delete" onClick={() => deleteExpense(e.id)} aria-label="Delete">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                </div>
            </div>
          ))
        )}
    </div>
  )
}

export default ExpenseList