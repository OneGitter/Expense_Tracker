import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props){
    

    return(
    <div className='expense-item'>
        <ExpenseDate data={props.data.date}/>
        <div className='expense-item--description'>
            <h2>{props.data.title}</h2>
            <div className='expense-item__price'>{props.data.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;