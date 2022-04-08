import react, { useState } from "react"
import ExpenseChart from "./ExpenseChart"
import Card from "../Card/Card"
import "./Expense.css"
import ExpensesFilter from "../../ExpenseFilter/ExpenseFilter"
import ExpensesList from "./ExpensesList"

function Expense(props) {
    const [filterYear, setfilteryear] = useState('2021')
    const filterChange = (selectedYear) => {
        setfilteryear(selectedYear);
    }
    const selected_yr = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onFilterChange={filterChange} />
                <ExpenseChart expenses={selected_yr} />
                <ExpensesList item={selected_yr} />
            </Card>
        </div>
    )





};
export default Expense;