import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

import './Expenses.css';

const Expenses = (props) => {
    const expenses = [...props.item]
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterYearData =  (yearData) => {
        setFilteredYear(yearData);
    }
    return (
        <Card className="expenses">
            <ExpensesFilter year={filteredYear} onYearSelect={filterYearData}/>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        </Card>
    )
}

export default Expenses;