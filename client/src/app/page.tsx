"use client";

import React, { useEffect, useState } from "react";
import getProducts from "@/services/productService";
import { addToCart, getCart, pay } from "@/services/cartService";

export default function Home() {
  const [products, setProducts] = useState();
  // const [cart, setCart] = useState();
  const [carts, setCarts] = useState();

  const fetchProducts = async () => {
    const { products } = await getProducts();
    setProducts(products);
  };

  const fetchCarts = async () => {
    const carts = await getCart();
    setCarts(carts);
    localStorage.setItem("user", JSON.stringify(carts.cart));
  }

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);

  const handleClick = (product: any) => {
    addToCart(product);
  }
  const handlePay = (cart: any) => {
    console.log(cart);
    // pay(cart);
  }

  console.log(carts)
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          {carts && carts.cart.map((cart: any, index: number) => (
            <div className="container">
                <div className="col">
                  qty: {cart.qty} {" "}
                  name: {cart.Product.name} {" "}
                  price: {cart.price} {" "}
                </div>
              </div>
          ))}
          <p>total: {carts && carts.total}</p>
          <a href="#" onClick={() => handlePay(carts)} className="btn btn-primary">Pay</a>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        { products && products.map((product: any, index: number) => (
          <div key={index} className="card m-3" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <p>discount: {product.discount}</p>
              <h5 className="card-title">{product.name}</h5>
              <p style={{ backgroundColor: product.qty === 0 ? "red" : "green" }}>qty: {product.qty === 0 ? "not found" : product.qty}</p>
              <p className="card-text">price: {product.price}</p>
              {product.qty === 0 ?
                "" :
                <a href="#"onClick={() => handleClick(product)} className="btn btn-primary">Add to Cart</a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

    // console.log(cart);
    // if(cart !== null) {
    //   // console.log(cart[0].ip);
    //   localStorage.setItem("user", JSON.stringify(cart));
    //   // console.log(localStorage.getItem);
    //   setCarts(cart);
    // }
              // <>
          //   <p>{cart.qty}</p>
          //   <p>{cart.Product.name}</p>
          // </>
              // setCart(product);
                  // console.log(total);