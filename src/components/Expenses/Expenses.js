import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';
import { useState } from "react";



function Expenses({expenses}){


    const [filterValue,setFilterValue] = useState("");
    
    const changeHandler = value => setFilterValue(value);


    return (
        <Card>
            <ExpensesFilter onChangeFilter={changeHandler}/>
            <Card className="expenses">
                {expenses.map(item => <ExpenseItem data={item} key={item.id}/>)}
            </Card>            
        </Card>
    )
}

export default Expenses;