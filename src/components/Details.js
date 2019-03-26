import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer2} from './Button';
export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
        {
          (value)=>{
            const {id,title, img, artist, price,info, total,incart} = value.detailedProduct;
            return (
              <div className="container py-5">
              <div className="row">
              <div className=".col-10.mx-auto.text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
              </div>
              </div>
              <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>Painting: {title}</h2> 
              <h4 className="text-title text-muted mt-3 mb-2">
              By: <span>{artist}</span>
              </h4>
              <h4 className="text-blue">
              <strong>
              Price: <span>&#8377; </span>
              {price}
              </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Some info about product
              </p>
              <p className="text-muted lead">{info}</p>
              <div> 
                <Link to="/">
                <ButtonContainer2>Back to Products</ButtonContainer2>
                </Link>
                <ButtonContainer2 
                cart
                disabled={incart? true: false}
                onClick= {
                  ()=>{
                    console.log('clicking');
                    value.cartHandler(id);
                    value.openModal(id);
                  }
                }
                >
                {incart? "inCart" : "add to Cart"}
                
                </ButtonContainer2>
              </div>
              </div> 
              </div>
              </div>
            )
          }  

        }
        </ProductConsumer>
      </div>
    )
  }
}
