import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    const clickHandler = () => {
        setTitle('Updated')
        console.log("Updated")
    };

    return (
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2 className="">{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
