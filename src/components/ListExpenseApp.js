import { useState } from "react";

const Item = ({ item }) => {
    return (
        <div className="item">
            <div className="icon"></div>
            <div className="detail">
                <div className="title">{item.title}</div>
                <div className="sub-title">{item.date}</div>
            </div>
            <div className="price">$ {item.price}</div>
        </div>
    );
};

const ItemList = ({ data }) => {
    return (
        <div className="item-list">
            {data.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
};

const Form = ({ onAdd }) => {
    const [expenseDetail, setExpenseDetail] = useState({
        name: '',
        price: ''
    });

    const handleForm = (type) => (event) => {
        setExpenseDetail((oldState) => ({
            ...oldState,
            [type]: event.target.value
        }))
    };

    const handleAdd = () => {
        onAdd(expenseDetail);
    };

    return (
        <div className="form">
            <div>
                <label>Name</label>
                <input value={expenseDetail.name} onChange={handleForm('name')} />
            </div>
            <div>
                <label>Price</label>
                <input value={expenseDetail.price} onChange={handleForm('price')} />
            </div>
            <button onClick={handleAdd}>Add Expense</button>
        </div>
    );
};

const ListExpense = ({ addExpense }) => {
    const [isFormVisible, toggleFormVisibility] = useState(false);
    const [list, setList] = useState([
        { title: "Food Expense", date: "08/01/2022", price: "200" },
        { title: "Bed Expense", date: "09/01/2022", price: "300" },
        { title: "Bathroom Expense", date: "23/01/2022", price: "500" },
        { title: "Kitchen Expense", date: "23/01/2022", price: "500" },
    ]);

    const handleToggle = () => {
        toggleFormVisibility(prev => !prev);
    };

    const handleAdd = (newValue) => {
        setList((oldState) => [{ title: newValue.name, price: newValue.price, date: '10/10/2024' }, ...oldState]);
        addExpense(newValue.price);
        handleToggle();
    }

    return (
        <div className="List">
            <div className="heading">
                All Expense
                <button onClick={handleToggle}>{isFormVisible ? "-" : "+"}</button>
            </div>
            {isFormVisible ? <Form onAdd={handleAdd} /> : <ItemList data={list} />}
        </div>
    );
};

export default ListExpense;
