import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/GlobalState';

function AddTransaction() {
    const {addIncome, addExpense} = useContext(GlobalContext);

    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: ''
    });

    const changeIncome = e => {
        //we have to do this shite in square brackets - computed property names
        //we also have to spread out our income object to that it preserves its other state - text or amount. If we don't do it,
        //React only 'remembers' the last changed value - only either text or amount. It's how useState works, I guess - it doesn't
        //merge the properties like in class components
        setIncome({...income, [e.target.name]: e.target.value});
        console.log(income);
    }

    const submitIncome = e => {
        e.preventDefault();

        const {incomeText, incomeAmount} = income;
        //here we're creating a new object we'll to the global state
        if(incomeText !== '' && incomeAmount !== '') {
            const newIncomeTransaction = {
                id: uuidv4(),
                incomeText,
                //transforming a string into a number: *1 will trigger type coersion in JS
                incomeAmount: incomeAmount*1
            }
    
            addIncome(newIncomeTransaction);
            console.log(newIncomeTransaction);
            setIncome({
                incomeText: '',
                incomeAmount: ''
            })
        }
    }

/* ----------------------------- adding expense ----------------------------- */

    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: ''
    });

    const changeExpense = e => {
        setExpense({...expense, [e.target.name]: e.target.value});
        console.log(expense);
    }

    const submitExpense = e => {
        e.preventDefault();

        const {expenseText, expenseAmount} = expense;
       
        const newExpenseTransaction = {
            id: uuidv4(),
            expenseText,
            expenseAmount: expenseAmount*1
        }

        addExpense(newExpenseTransaction);
        setExpense({
            expenseText: '',
            expenseAmount: ''
        })
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={submitIncome}>
                <div className="input-group income">
                    <input type="text" placeholder='Add income...' autoComplete='off' name='incomeText' onChange={changeIncome} value={income.incomeText}  />
                    <input type="number" placeholder='insert amount' autoComplete='off' name='incomeAmount' onChange={changeIncome} value={income.incomeAmount} />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={submitExpense}>
                <div className="input-group expense">
                    <input type="text" placeholder='Add expense...' autoComplete='off' name='expenseText' onChange={changeExpense} value={expense.expenseText} required/>
                    <input type="number" placeholder='insert amount' autoComplete='off' name='expenseAmount' onChange={changeExpense} value={expense.expenseAmount} required/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
