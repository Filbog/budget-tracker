import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

function IncomeList() {
    //this goes to show how awesome the Context is. We destructure our state object from GlobalContext with the useContext hook and 
    //in this simple way we have access to our global state. Awesome
    const { incomeTransactions } = useContext(GlobalContext);
    console.log(incomeTransactions);
    return (
        <div className='transactions transactions-income'>
            <h2>Transaction history</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction => (
                    <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                ))
                }
            </ul>
        </div>
    )
}

export default IncomeList;