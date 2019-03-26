import React, {Component} from 'react'
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import rupeeicon from './../rupee-indian.svg';
export default class Product extends Component {
    render() {
        const {
            id,
            title,
            img,
            artist,
            price,
            info,
            incart
        } = this.props.product;
        return (
            <ProductWrapper className="col-6 mx-auto col-md-4 col-lg-3 my-3">

                <div className="card">
                <ProductConsumer>
                {
                  (value)=>{
                    return(
                      <div
                      className="img-container p-4"
                      onClick={() => {
                      value.detailHandler(id);
                  }}>
                      <Link to="/details">
                          <img src={img} alt={title} className="card-img-top"/>
                      </Link>
                      <button
                          className="cart-btn"
                          disabled={incart
                          ? true
                          : false}
                          onClick={() => {
                          value.cartHandler(id);
                          value.openModal(id);
                      }}>
                          {incart
                              ? (
                                  <p className="text-capitalize mb-0" disabled>{" "}In Cart</p>
                              )
                              : (<i className="fas fa-cart-plus"/>)
}
                      </button>
                  </div>      
                    )

                  }
                }
                    
                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h6 className="text-blue font-italic mb-0">

                            <span className="mr-1">&#8377;</span>
                            {price}
                        </h6>
                    </div>
                    
                </div>

            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div `
img{
  background-position:center;
  height: 220px;
  width: 100%;
}
.card{
    border-color: transparent;
    transition:all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.5);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.5)
  }
  .card-footer{
    background: rgba(230,230,230);
  }
}
.img-container{
  position: relative;
  overflow: hidden;
}
.card-img-top{
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
  transform: scale(1.1);
}
.cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--mainPink);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 1s linear;
}
.img-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn:hover{
  color:var(--mainYellow);
  cursor:pointer;
}

`