import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Filter from './components/Filter'
import Total from './components/Total'

function App() {

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="logo-icon">💰</div>
          <h1>Expenly</h1>
        </div>
      </header>
      
      <main className="app-main">
        <div className="dashboard-grid">
          <div className="left-panel">
            <div className="card form-card">
              <h2>Add Expense</h2>
              <ExpenseForm />
            </div>
          </div>
          <div className="right-panel">
            <div className="card list-card">
              <div className="list-header">
                <h2>Transactions</h2>
                <div className="list-controls">
                  <Filter />
                  <Total />
                </div>
              </div>
              <ExpenseList />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
