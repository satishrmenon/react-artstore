import React from 'react'
import {Link} from 'react-router-dom';

export default ({value}) => {
  const {cartSubTotal, cartTax, cartTotal, removeAllFromCart} = value;
    return (
    <React.Fragment>
    <div className="container">
        <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
        <Link to="/">
        <button 
        className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
        onClick = {
            ()=>{
                removeAllFromCart();
            }
        }>
        Clear Cart 
        </button>
        </Link>
        <h5>
        <span className="text-title">
        Sub Total: 
        </span>
        <strong>&#8377;&nbsp;{cartSubTotal}</strong>
        </h5>
        
        <h5>
        <span className="text-title">
        Tax: 
        </span>
        <strong>&#8377;&nbsp;{cartTax}</strong>
        </h5>
        
        <h5>
        <span className="text-title">
        Total: 
        </span>
        <strong>&#8377;&nbsp;{cartTotal}</strong>
        </h5>
        
        
        </div> 
        </div>
    </div>
    
    </React.Fragment>
  )
}
