import { useExpenseStore } from "../store/expenseStore";
import { useState } from "react";

function ExpenseForm() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const addExpense = useExpenseStore((state) => state.addExpense);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date
    }

    addExpense(newExpense);


    setTitle("");
    setAmount("");
    setDate("");
    setCategory("Food");
  }


  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" 
        placeholder="e.g., Groceries"
        value={title}
        onChange={e => setTitle(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input type="number" 
        placeholder="0.00"
        value={amount}
        onChange={e => setAmount(e.target.value)} required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select value={category}
          onChange={e => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date}
          onChange={e => setDate(e.target.value)} required />
        </div>
      </div>

      <button className="btn btn-primary" type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm