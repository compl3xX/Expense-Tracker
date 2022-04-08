import "./ExpensesList.css"
import ExpenseItem from "./Expenseitem";
const ExpensesList = props => {

    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback ">Found No Expenses</h2>
    }

    return (
        <ul>
            {
                props.item.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)
            }
        </ul>
    )

}
export default ExpensesList;