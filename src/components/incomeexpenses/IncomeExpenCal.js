import React from 'react'
import { GlobalContext } from '../../context/GlobalState';


const IncomeExpenCal = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.
        filter(item => item > 0).
        reduce((acc, item) => (acc += item), 0).
        toFixed(2);

    const expense = {
        amounts.filter(item => item < 0).
            reduce((acc, item) => (acc += item), 0) *
            -1
            ).toFixed(2);
    }
return (
    <div>

    </div>
)
}
