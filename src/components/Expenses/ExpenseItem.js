import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';


function ExpenseItem(props){
    
    const [title,setTitle] =  useState(props.data.title);

    const clickHandler = () =>{
        setTitle('Updated');
    }

    return(
    <Card className='expense-item'>
        <ExpenseDate data={props.data.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.data.amount}</div>
            <button  onClick={clickHandler}>Change Title</button>
        </div>
    </Card>
    );
}

export default ExpenseItem;