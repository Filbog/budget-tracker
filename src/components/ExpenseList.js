import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

function ExpenseList() {
    const { expenseTransactions } = useContext(GlobalContext);
    console.log(expenseTransactions);
    return (
        <div className='transactions transactions-expense'>
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(expenseTransaction => (
                    <ExpenseTransaction expenseTransaction={expenseTransaction} key={expenseTransaction.id} />
                )
                )}
            </ul>
        </div>
    )
}

export default ExpenseList;