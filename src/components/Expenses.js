import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({expenses}){
    return (
        <div className="expenses">
            <ExpenseItem data= {expenses[0]} />
            <ExpenseItem data= {expenses[2]} />
            <ExpenseItem data= {expenses[1]} />
            <ExpenseItem data= {expenses[3]} />
        </div>
    )
}

export default Expenses;