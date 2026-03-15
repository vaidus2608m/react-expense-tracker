import { create } from "zustand"

const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

export const useExpenseStore = create((set) => ({
    expenses: savedExpenses,
    filter: "All",
    addExpense: (expense) => set((state) => { 
        const updated = [...state.expenses, expense];
        localStorage.setItem("expenses", JSON.stringify(updated))
        return { expenses: updated }
    }),
    deleteExpense: (id) => set((state) => {
         const updated = state.expenses.filter((e) => e.id != id);
         localStorage.setItem("expenses", JSON.stringify(updated));
         return {expenses: updated}
        }),
    setFilter: (category) => set(() => ({
        filter: category
    })),
}))