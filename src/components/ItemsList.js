import React from 'react';
import Item from "./Item";

const ItemsList = ({items, deleteFunc}) => {
    const handleDelete = (id) => {
        deleteFunc(id)
    }
    return (
        <ul className="">
            {items.sort((a, b) => new Date(b.date) - new Date(a.date)).map((item) => {
                return (
                    <Item item={item} key={item.id} id={item.id} deleteItem={handleDelete}/>
                )
            })}
        </ul>
    );
};

export default ItemsList;