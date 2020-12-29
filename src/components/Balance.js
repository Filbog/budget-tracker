import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';


function Balance() {

    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext);

    const incomeAmount = incomeTransactions.reduce( (accumulator, value) => {
        return accumulator += value.incomeAmount
    }, 0).toFixed(2);

    const expenseAmount = expenseTransactions.reduce( (accumulator, value) => {
        return accumulator += value.expenseAmount
    }, 0).toFixed(2);

    return (
        <div className='balance'>
            <h2>Your Balance</h2>   
            <h3>${incomeAmount - expenseAmount}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>income</h3>
                    <p>+${incomeAmount}</p>
                </div>
                <div className="minus">
                    <h3>expenses</h3>
                    <p>-${expenseAmount}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance;
