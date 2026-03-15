import { useExpenseStore } from '../store/expenseStore'

function Total() {

    const expenses = useExpenseStore((state) => state.expenses);
    const total = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  return (
    <div className="total-badge">
      <span className="total-label">Total:</span>
      <span className="total-value">₹{total.toFixed(2)}</span>
    </div>
  )
}

export default Total