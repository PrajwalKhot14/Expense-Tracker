import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
function ExpenseItem(props){
    

    return (
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="">{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;