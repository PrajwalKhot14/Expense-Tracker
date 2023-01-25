import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
    

    return (
        <div className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="">{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;