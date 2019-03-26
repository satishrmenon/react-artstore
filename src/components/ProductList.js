import React, {Component} from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
   
    render() {
     
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="Our" title="Collection"/>
                <div className="row">
                <ProductConsumer>
                {
                  (param)=>{
                    return param.products.map((iterator)=>{
                      return <Product key={iterator.id} product={iterator} />
                    })
                  }
                }
                </ProductConsumer>
                </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
