import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem,deleteItem } from "./actions/cartAction";

const Cart = () => {
    const state = useSelector((state) => state)
    console.log("store", state);

    const dispatch = useDispatch();

  return (
    <div className='cart'>
        <h2>Number of items in cart :{state.numOfItems}</h2>
        <button className='green' onClick={() => {dispatch(addItem())}}>Add Item to cart</button>
        <button className='red'  disabled={state.numOfItems > 0 ? false : true} onClick={()=> {dispatch(deleteItem())}}>Remove Item to cart</button>
    </div>
  )
}

export default Cart