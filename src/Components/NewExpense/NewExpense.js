import react, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (EnteredExpenseData) => {

        const expenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);

    }
    const startEiditing = () => {
        setIsEditing(true);
    }

    const stopEiditing = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEiditing}> Add New Expenses </button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEiditing} />}
        </div>
    )
}
export default NewExpense;