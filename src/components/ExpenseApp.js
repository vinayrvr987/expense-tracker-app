import phone from '../assets/iphone.jpg';
import '../App.css';
import Summary from './Summary';
import ListExpense from './ListExpenseApp';
import { useState } from 'react';

const ExpenseApp = () => {
    const [totalValue, computeValue] = useState(4000);
    const addExpense = (newValue) => {
        computeValue(oldState => Number(oldState) + Number(newValue))
    }
    return (
        <div className="wrapper">
            <div className="phone">
                <img src={phone} alt="phone" className="phone-image" />
                <div className="app-body">
                    < Summary value={totalValue} />
                    < ListExpense addExpense={addExpense} />
                </div>
            </div>
        </div>
    );
}

export default ExpenseApp;
