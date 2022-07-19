import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterYearData = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = props.item.filter(
    (element) => element.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter year={filteredYear} onYearSelect={filterYearData} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
