import react, { useState } from "react";

import "./ExpenseForm.css"


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredamount, setEnteredamount] = useState('');
    const [entereddate, setEntereddate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);


    }
    const AmountChangeHandler = (event) => {
        setEnteredamount(event.target.value);
    };
    const DateChangeHandler = (event) => {
        setEntereddate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expensedata = {
            title: enteredTitle,
            amount: +enteredamount,
            date: new Date(entereddate)
        }
        props.onSaveExpenseData(expensedata);
        setEnteredTitle('');
        setEnteredamount('');
        setEntereddate('');
    }
    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredamount} onChange={AmountChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={entereddate} onChange={DateChangeHandler} />

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel} >Cancel</button>
                <button type="submit">Add Expense</button>

            </div>
        </form>


    )
}
export default ExpenseForm;