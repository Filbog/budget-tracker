import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    //each line of code here means: take the data from localStorage, or, if it's empty, set our state parts to empty arrays
    incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) ||[],
    expenseTransactions: JSON.parse(localStorage.getItem('expenseTransactions')) || []
}


export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('incomeTransactions', JSON.stringify(state.incomeTransactions));
        localStorage.setItem('expenseTransactions', JSON.stringify(state.expenseTransactions));
    })

    //we have to create a function that will dispatch the action to the reducer, so that the newly created object will be added to our global state
    //this function will take one value which will then be passed a payload value
    const addIncome = incomeTransaction => {
        dispatch({
            //here we're creating an action. Actions are pure JS objects which must have a type-of-action property. It can also have
            //an optional payload property
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }

    const addExpense = expenseTransaction => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

return (
    <GlobalContext.Provider value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>
)
}