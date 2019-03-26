import React, {Component} from 'react'
import {artProducts, detailedProduct} from './data/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailedProduct: detailedProduct,
        cart: [],
        modalOpen : false,
        modalProduct: detailedProduct,
        cartSubTotal : 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        artProducts.forEach((item) => {
            const singleItem = {
                ...item
            };
            tempProducts = [
                ...tempProducts,
                singleItem
            ];
        });
        this.setState(() => {
            return {products: tempProducts}
        })
    }

    getItem = (idToFind)=>{
        const item = this.state.products.find((itemIterator)=>{
            return itemIterator.id === idToFind;
        })
        return item;
    }

    detailHandler = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return{
                detailedProduct: product
            }
        })
    }

    cartHandler = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.incart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        },()=>{
            this.addTotals();
        })
    }

    openModal = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{
                modalProduct: product,
                modalOpen: true
            }
        })
    }
    closeModal = (id)=>{
        this.setState(()=>{
            return{
                modalOpen: false
            }
        })
    }

    increment = (idToFind)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item)=>{
            return item.id === idToFind;
        })
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return{
                cart: [...tempCart]
            }
        },()=>{
            this.addTotals();
        })
    }

    decrement= (idToFind)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item)=>{
            return item.id === idToFind;
        })
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0){
            this.removeItemFromCart(idToFind);
        }else{
        product.total = product.count * product.price;
        this.setState(()=>{
            return{
                cart: [...tempCart]
            }
        },()=>{
            this.addTotals();
        })
    }
    }


    removeItemFromCart= (idToRemove)=>{
       let tempProducts = [...this.state.products];
       let tempCart = [...this.state.cart];

       tempCart = tempCart.filter((item)=>{
          return item.id !== idToRemove
       })
       const index = tempProducts.indexOf(this.getItem(idToRemove));
       let removedProduct = tempProducts[index];
       removedProduct.incart=false;
       removedProduct.count = 0;
       removedProduct.total = 0;
       this.setState(()=>{
           return{
               cart:[...tempCart],
               products:[...tempProducts]
           }
       },()=>{
           this.addTotals();
       })

    }
    removeAllItemsFromCart= ()=>{
        this.setState(()=>{
            return{
                cart:[]
            }
        },()=>{
            this.setProducts();
            this.addTotals(); 
        })
    }
    addTotals = ()=>{
        let subTotal = 0;
        this.state.cart.map((item)=>{
            subTotal = subTotal + item.total;
        })
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return{
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    
    render() {
        return (
            <ProductContext.Provider
                value={{
                ...this.state,
                cartHandler: this.cartHandler,
                detailHandler: this.detailHandler,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItemFromCart: this.removeItemFromCart,
                removeAllFromCart: this.removeAllItemsFromCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

 export {ProductProvider, ProductConsumer};
