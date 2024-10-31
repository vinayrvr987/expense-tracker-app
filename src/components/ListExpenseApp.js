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
            {data.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

const Form = () => {
    return (
        <div className="form">
            <div>
                <label>Name</label>
                <input />
            </div>
            <div>
                <label>Price</label>
                <input />
            </div>
            <button>Add Expense</button>
        </div>
    );
};

const ListExpense = () => {
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

    return (
        <div className="List">
            <div className="heading">
                All Expense
                <button onClick={handleToggle}>{isFormVisible ? "-" : "+"}</button>
            </div>
            {isFormVisible ? <Form /> : <ItemList data={list} />}
        </div>
    );
};

export default ListExpense;
