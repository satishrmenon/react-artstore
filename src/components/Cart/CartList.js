import React from 'react'
import CartItem from './CartItem';
export default (props) => {
    const {value} = props;
    console.log(value);
    const {cart} = value;
    console.log(cart);
    return (
    <div className="container-fluid">
    {
        cart.map((itemIterator)=>{
            return(
                <CartItem key={itemIterator.id} 
                item={itemIterator}
                value={value}/>
            )
        })
    }
    </div>
  )
}
