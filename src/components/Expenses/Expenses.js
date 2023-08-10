
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

import './Expenses.css';
import { useState } from "react";



function Expenses({expenses}){


    const [filterValue,setFilterValue] = useState('');
    const filteredYear = expenses.filter(item => item.date.getFullYear()===Number(filterValue))
    
    const changeHandler = value => {
        setFilterValue(value);
    };


    return (
        <li>
        <Card>
            <ExpensesFilter onChangeFilter={changeHandler} selected={filterValue}/>
            <Card className="expenses">
                <ExpenseList arr={filteredYear}/>
            </Card>            
        </Card>
        </li>
    )
};

export default Expenses;